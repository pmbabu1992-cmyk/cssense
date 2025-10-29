class BaseService {
  constructor(repo) {
    this.repo = repo;
  }

  async create(data) {
    return await this.repo.create(data);
  }

  async get(id) {
    return await this.repo.get(id);
  }

  async list(query = {}) {
    const filter = this.repo.buildFilter(query);
    return await this.repo.list(filter);
  }

  async update(id, data) {
    return await this.repo.update(id, data);
  }

  async remove(id) {
    return await this.repo.remove(id);
  }

  async count(query = {}) {
    const filter = this.repo.buildFilter(query);
    return await this.repo.count(filter);
  }
}

module.exports = BaseService;
