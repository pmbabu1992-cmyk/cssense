const BaseRepository = require('../../core/base/BaseRepository');

class ProfilesRepository extends BaseRepository {
  buildFilter(q = {}) {
    const f = {};
    if (q.user) f.user = q.user;
    if (q.phone) f.phone = q.phone;
    return f;
  }
}
module.exports = ProfilesRepository;
