const BaseService = require('../../core/base/BaseService');

class UsersService extends BaseService {
  constructor(repo) {
    super(repo);
  }

  async update(id, data) {
    // Explicitly remove fields that cannot be updated
    delete data.name;
    delete data.username;
    delete data.email;

    return await this.repo.update(id, data);
  }
}

module.exports = UsersService;
