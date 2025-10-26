const BaseRepository = require('../../core/base/BaseRepository');

class TelemetryRepository extends BaseRepository {
  buildFilter(q = {}) {
    const f = {};
    if (q.org) f.org = q.org;
    if (q.device) f.device = q.device;
    if (q.from || q.to) {
      f.ts = { ...(q.from ? { $gte: new Date(q.from) } : {}), ...(q.to ? { $lte: new Date(q.to) } : {}) };
    }
    return f;
  }
}

module.exports = TelemetryRepository;
