class BaseService {
  constructor(repo) { this.repo = repo; }
  list(params)  { return this.repo.list(params); }
  get(id, opts) { return this.repo.get(id, opts); }
  create(data)  { return this.repo.create(data); }
  update(id, d) { return this.repo.update(id, d); }
  remove(id)    { return this.repo.remove(id); }
}
module.exports = BaseService;
