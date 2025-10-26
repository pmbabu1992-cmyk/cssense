const BaseRepository = require('../../core/base/BaseRepository');

class AlertsRepository extends BaseRepository {
  buildFilter(q = {}) {
    const f = {};
    if (q.org) f.org = q.org;
    if (q.device) f.device = q.device;
    if (q.severity) f.severity = q.severity;
    if (q.active) f.isActive = q.active === 'true';
    if (q.from || q.to) {
      f.triggeredAt = { ...(q.from ? { $gte: new Date(q.from) } : {}), ...(q.to ? { $lte: new Date(q.to) } : {}) };
    }
    return f;
  }
}

module.exports = AlertsRepository;
