const BaseRepository = require('../../core/base/BaseRepository');

class SensorDataRepository extends BaseRepository {
  buildFilter(q = {}) {
    const f = {};
    if (q.device) f.device = q.device;
    if (q.sensorType) f.sensorType = q.sensorType;
    if (q.from || q.to) {
      f.ts = { ...(q.from ? { $gte: new Date(q.from) } : {}), ...(q.to ? { $lte: new Date(q.to) } : {}) };
    }
    return f;
  }
}
module.exports = SensorDataRepository;
