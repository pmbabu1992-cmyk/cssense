class ApiError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}
class NotFoundError extends ApiError { constructor(msg = 'Not found') { super(404, msg); } }
class BadRequestError extends ApiError { constructor(msg = 'Bad request') { super(400, msg); } }
class ForbiddenError  extends ApiError { constructor(msg = 'Forbidden')   { super(403, msg); } }
module.exports = { ApiError, NotFoundError, BadRequestError, ForbiddenError };
