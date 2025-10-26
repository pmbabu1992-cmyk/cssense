const BaseRepository = require('../../core/base/BaseRepository');

class WidgetsRepository extends BaseRepository {
  buildFilter(q = {}) {
    const f = {};
    if (q.org) f.org = q.org;
    if (q.dashboard) f.dashboard = q.dashboard;
    if (q.type) f.type = q.type;
    return f;
  }
}
module.exports = WidgetsRepository;
