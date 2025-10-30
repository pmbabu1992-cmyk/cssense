const BaseRepo = require('../../core/base/BaseRepo');

class UsersRepo extends BaseRepo {
  constructor(model) {
    super(model);
  }

  // Override update if you need custom logic
  async update(id, data) {
    // Remove password from updates if it's empty or undefined
    if (!data.password) {
      delete data.password;
    }
    
    return await this.model.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );
  }

  async findByEmail(email) {
    console.warn('Finding user by email:', email);
    return await this.model.findOne({ email });
  }

  async findByUsername(username) {
    return await this.model.findOne({ username });
  }

  buildFilter(q = {}) {
    const f = {};
    if (q.org)    f.org = q.org;
    if (q.email)  f.email = q.email.toLowerCase();
    if (q.role)   f.role = q.role;
    if (q.status) f.status = q.status;
    if (q.name)   f.name = new RegExp(q.name, 'i');
    return f;
  }
}

module.exports = UsersRepo;
