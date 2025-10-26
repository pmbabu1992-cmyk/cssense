// Generic CRUD controller factory with optional customization hooks
exports.makeCrudController = (Model, opts = {}) => {
  const {
    buildListQuery,
    defaultSort = '-createdAt',
    projection,
    populate,
    beforeCreate,
    afterCreate,
    beforeUpdate
  } = opts;

  const applyPopulate = (q) => (populate ? q.populate(populate) : q);
  const applyProjection = (q) => (projection ? q.select(projection) : q);

  return {
    list: async (req, res) => {
      const { limit = 50, page = 1, sort = defaultSort } = req.query;
      const lim = Math.max(parseInt(limit, 10) || 50, 1);
      const pg  = Math.max(parseInt(page, 10) || 1, 1);
      const skip = (pg - 1) * lim;

      const filter = buildListQuery ? buildListQuery(req) : {};
      const listQuery = applyProjection(applyPopulate(
        Model.find(filter).sort(sort).skip(skip).limit(lim)
      )).lean();

      const [items, total] = await Promise.all([listQuery, Model.countDocuments(filter)]);
      res.json({ total, page: pg, limit: lim, items });
    },

    get: async (req, res) => {
      const q = applyProjection(applyPopulate(Model.findById(req.params.id))).lean();
      const doc = await q;
      if (!doc) return res.status(404).json({ message: 'Not found' });
      res.json(doc);
    },

    create: async (req, res) => {
      try {
        const body = beforeCreate ? await beforeCreate(req, req.body) : req.body;
        const created = await Model.create(body);
        if (afterCreate) await afterCreate(req, created);
        res.status(201).json(created);
      } catch (e) { res.status(400).json({ message: e.message }); }
    },

    update: async (req, res) => {
      const body = beforeUpdate ? await beforeUpdate(req, req.body) : req.body;
      const updated = await Model.findByIdAndUpdate(req.params.id, body, { new: true, runValidators: true }).lean();
      if (!updated) return res.status(404).json({ message: 'Not found' });
      res.json(updated);
    },

    remove: async (req, res) => {
      const removed = await Model.findByIdAndDelete(req.params.id).lean();
      if (!removed) return res.status(404).json({ message: 'Not found' });
      res.json({ ok: true });
    }
  };
};
