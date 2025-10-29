const BaseController = require('../../core/base/BaseController');

class UsersController extends BaseController {
  constructor(service) {
    super(service);
  }

  // Override update to exclude password from response
  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      
      const updated = await this.service.update(id, data);
      
      if (!updated) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Remove password from response
      const response = updated.toObject();
      delete response.password;

      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  // Override create to exclude password from response
  create = async (req, res, next) => {
    try {
      const data = req.body;
      const created = await this.service.create(data);
      
      // Remove password from response
      const response = created.toObject();
      delete response.password;

      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };

  // Override get to exclude password from response
  get = async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await this.service.get(id);
      
      if (!item) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Remove password from response
      const response = item.toObject();
      delete response.password;

      res.json(response);
    } catch (error) {
      next(error);
    }
  };

  // Override list to exclude passwords from response
  list = async (req, res, next) => {
    try {
      const items = await this.service.list();
      
      // Remove passwords from all users
      const response = items.map(item => {
        const user = item.toObject();
        delete user.password;
        return user;
      });

      res.json(response);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UsersController;
