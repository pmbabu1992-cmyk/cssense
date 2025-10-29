class BaseRepo {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const doc = new this.model(data);
    return await doc.save();
  }

  async get(id) {
    return await this.model.findById(id);
  }

  async list(filter = {}) {
    return await this.model.find(filter);
  }

  async update(id, data) {
    return await this.model.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );
  }

  async remove(id) {
    return await this.model.findByIdAndDelete(id);
  }

  async count(filter = {}) {
    return await this.model.countDocuments(filter);
  }

  async exists(filter) {
    return await this.model.exists(filter);
  }

  // Build filter from query parameters (can be overridden)
  buildFilter(q = {}) {
    return {};
  }
}

module.exports = BaseRepo;