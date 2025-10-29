const asyncHandler = require('../http/asyncHandler');
const { NotFoundError, BadRequestError } = require('../http/errors');

class BaseController {
  constructor(service) {
    this.service = service;
  }

  create = asyncHandler(async (req, res) => {
    try {
      const data = req.body;
      const created = await this.service.create(data);
      res.status(201).json(created);
    } catch (error) {
      console.error('Create error:', error); // logs full error
      throw new BadRequestError(error.message);
    }
  });

  get = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const item = await this.service.get(id);
      
      if (!item) {
        return res.status(404).json({ message: 'Not found' });
      }

      res.json(item);
    } catch (error) {
      next(error);
    }
  });

  list = asyncHandler(async (req, res) => {
    try {
      const items = await this.service.list(req.query);
      res.json(items);
    } catch (error) {
      next(error);
    }
  });

  update = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      
      const updated = await this.service.update(id, data);
      
      if (!updated) {
        return res.status(404).json({ message: 'Not found' });
      }

      res.json(updated);
    } catch (error) {
      next(error);
    }
  });

  remove = asyncHandler(async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await this.service.remove(id);
      
      if (!deleted) {
        return res.status(404).json({ message: 'Not found' });
      }

      res.json({ message: 'Deleted successfully', id });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = BaseController;
