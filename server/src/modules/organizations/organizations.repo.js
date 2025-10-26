const BaseRepository = require('../../core/base/BaseRepository');

class OrganizationsRepository extends BaseRepository {
  buildFilter(q = {}) {
    const f = {};
    if (q.slug) f.slug = q.slug;
    if (q.name) f.name = new RegExp(q.name, 'i');
    if (q.active) f.isActive = q.active === 'true';
    return f;
  }
}
module.exports = OrganizationsRepository;
