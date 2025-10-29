const ResponseHandler = require('./ResponseHandler');

function errorHandler(err, req, res, next) {
  console.error('Error:', err);

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(e => ({
      field: e.path,
      message: e.message
    }));
    return ResponseHandler.validationError(res, errors);
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    return ResponseHandler.badRequest(res, `${field} already exists`);
  }

  // Mongoose cast error (invalid ObjectId)
  if (err.name === 'CastError') {
    return ResponseHandler.badRequest(res, 'Invalid ID format');
  }

  // Custom application errors
  if (err.statusCode) {
    return ResponseHandler.error(res, err.message, err.statusCode);
  }

  // Default server error
  return ResponseHandler.error(res, 'Internal server error', 500);
}

module.exports = errorHandler;