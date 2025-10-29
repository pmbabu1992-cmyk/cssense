const asyncHandler = require('../http/asyncHandler');
const ResponseHandler = require('../http/ResponseHandler');
const { NotFoundError, BadRequestError } = require('../http/errors');

class BaseController {
  constructor(service) {
    this.service = service;
  }

  create = asyncHandler(async (req, res) => {
    try {
      const data = req.body;
      const created = await this.service.create(data);
      return ResponseHandler.created(res, created);
    } catch (error) {
      console.error('Create error:', error);
      throw new BadRequestError(error.message);
    }
  });

  get = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const item = await this.service.get(id);
    
    if (!item) {
      return ResponseHandler.notFound(res);
    }

    return ResponseHandler.success(res, item);
  });

  list = asyncHandler(async (req, res) => {
    const items = await this.service.list(req.query);
    
    // Check if pagination info is available
    if (req.pagination) {
      return ResponseHandler.paginated(res, items, req.pagination);
    }
    
    return ResponseHandler.success(res, items);
  });

  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    
    const updated = await this.service.update(id, data);
    
    if (!updated) {
      return ResponseHandler.notFound(res);
    }

    return ResponseHandler.updated(res, updated);
  });

  remove = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const deleted = await this.service.remove(id);
    
    if (!deleted) {
      return ResponseHandler.notFound(res);
    }

    return ResponseHandler.deleted(res, id);
  });
}

module.exports = BaseController;
