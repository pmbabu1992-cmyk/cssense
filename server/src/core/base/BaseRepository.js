class BaseRepository {
  constructor(Model) { this.Model = Model; }

  // In child repos, override buildFilter(params) to map query to Mongo filter
  buildFilter(_params = {}) { return {}; }

  async list(params = {}) {
    const {
      filter: rawFilter = {},
      sort = '-createdAt',
      limit = 50,
      page = 1,
      projection,
      populate
    } = params;

    const f = { ...rawFilter, ...this.buildFilter(params) };
    const lim = Math.max(parseInt(limit, 10) || 50, 1);
    const pg  = Math.max(parseInt(page, 10) || 1, 1);
    const skip = (pg - 1) * lim;

    let q = this.Model.find(f).sort(sort).skip(skip).limit(lim);
    if (projection) q = q.select(projection);
    if (populate)  q = q.populate(populate);

    const [items, total] = await Promise.all([q.lean(), this.Model.countDocuments(f)]);
    return { items, total, page: pg, limit: lim };
  }

  async get(id, opts = {}) {
    let q = this.Model.findById(id);
    if (opts.populate) q = q.populate(opts.populate);
    if (opts.projection) q = q.select(opts.projection);
    const doc = await q.lean();
    return doc;
  }

  create(data) { return this.Model.create(data); }

  async update(id, data) {
    return this.Model.findByIdAndUpdate(id, data, { new: true, runValidators: true }).lean();
  }

  async remove(id) {
    return this.Model.findByIdAndDelete(id).lean();
  }
}

module.exports = BaseRepository;
