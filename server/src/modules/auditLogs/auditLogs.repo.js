const BaseRepository = require('../../core/base/BaseRepository');

class AuditLogsRepository extends BaseRepository {
  buildFilter(q = {}) {
    const f = {};
    if (q.org) f.org = q.org;
    if (q.actor) f.actor = q.actor;
    if (q.action) f.action = q.action;
    if (q.from || q.to) {
      f.ts = { ...(q.from ? { $gte: new Date(q.from) } : {}), ...(q.to ? { $lte: new Date(q.to) } : {}) };
    }
    return f;
  }
}
module.exports = AuditLogsRepository;
