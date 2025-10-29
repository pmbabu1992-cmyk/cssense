const asyncHandler = require('../http/asyncHandler');
const { NotFoundError, BadRequestError } = require('../http/errors');

class BaseController {
  constructor(service) { this.svc = service; }

  list = asyncHandler(async (req, res) => {
    const data = await this.svc.list(req.query);
    res.json(data);
  });

  get = asyncHandler(async (req, res) => {
    const doc = await this.svc.get(req.params.id);
    if (!doc) throw new NotFoundError('Not found');
    res.json(doc);
  });

  create = asyncHandler(async (req, res) => {
    try {
      const doc = await this.svc.create(req.body);
      res.status(201).json(doc);
    } catch (e) {
      console.error('Create error:', e); // logs full error
      throw new BadRequestError(e.message);
    }
  });

  update = asyncHandler(async (req, res) => {
    const doc = await this.svc.update(req.params.id, req.body);
    if (!doc) throw new NotFoundError('Not found');
    res.json(doc);
    });

  remove = asyncHandler(async (req, res) => {
    const doc = await this.svc.remove(req.params.id);
    if (!doc) throw new NotFoundError('Not found');
    res.json({ ok: true });
  });
}

module.exports = BaseController;
