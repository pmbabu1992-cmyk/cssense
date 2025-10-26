const BaseRepository = require('../../core/base/BaseRepository');

class UsersRepository extends BaseRepository {
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
module.exports = UsersRepository;
