const BaseRepository = require('../../core/base/BaseRepository');

class AssetsRepository extends BaseRepository {
  buildFilter(q = {}) {
    const f = {};
    if (q.org) f.org = q.org;
    if (q.device) f.device = q.device;
    if (q.type) f.type = q.type;
    return f;
  }
}
module.exports = AssetsRepository;
