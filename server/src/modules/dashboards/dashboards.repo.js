const BaseRepository = require('../../core/base/BaseRepository');

class DashboardsRepository extends BaseRepository {
  buildFilter(q = {}) {
    const f = {};
    if (q.org) f.org = q.org;
    if (q.name) f.name = new RegExp(q.name, 'i');
    if (q.isDefault) f.isDefault = q.isDefault === 'true';
    return f;
  }
}
module.exports = DashboardsRepository;
