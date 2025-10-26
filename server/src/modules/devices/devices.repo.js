const BaseRepository = require('../../core/base/BaseRepository');

class DevicesRepository extends BaseRepository {
  buildFilter(q = {}) {
    const f = {};
    if (q.org) f.org = q.org;
    if (q.status) f.status = q.status;
    if (q.deviceId) f.deviceId = q.deviceId;
    return f;
  }
}

module.exports = DevicesRepository;
