const BaseRepository = require('../../core/base/BaseRepository');

class IotDataRepository extends BaseRepository {
  buildFilter(q = {}) {
    const f = {};
    if (q.device) f.device = q.device;
    if (q.topic)  f.topic  = q.topic;
    if (q.from || q.to) {
      f.ts = { ...(q.from ? { $gte: new Date(q.from) } : {}), ...(q.to ? { $lte: new Date(q.to) } : {}) };
    }
    return f;
  }
}
module.exports = IotDataRepository;
