class ResponseHandler {
  static success(res, data, message = 'Success', statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      statusCode,
      message,
      data,
      timestamp: new Date().toISOString()
    });
  }

  static created(res, data, message = 'Resource created successfully') {
    return this.success(res, data, message, 201);
  }

  static updated(res, data, message = 'Resource updated successfully') {
    return this.success(res, data, message, 200);
  }

  static deleted(res, id, message = 'Resource deleted successfully') {
    return this.success(res, { id }, message, 200);
  }

  static error(res, message = 'An error occurred', statusCode = 500, errors = null) {
    const response = {
      success: false,
      statusCode,
      message,
      timestamp: new Date().toISOString()
    };

    if (errors) {
      response.errors = errors;
    }

    return res.status(statusCode).json(response);
  }

  static notFound(res, message = 'Resource not found') {
    return this.error(res, message, 404);
  }

  static badRequest(res, message = 'Bad request', errors = null) {
    return this.error(res, message, 400, errors);
  }

  static unauthorized(res, message = 'Unauthorized') {
    return this.error(res, message, 401);
  }

  static forbidden(res, message = 'Forbidden') {
    return this.error(res, message, 403);
  }

  static validationError(res, errors, message = 'Validation failed') {
    return this.error(res, message, 422, errors);
  }

  // Paginated response
  static paginated(res, data, pagination, message = 'Success') {
    return res.status(200).json({
      success: true,
      statusCode: 200,
      message,
      data,
      pagination: {
        page: pagination.page,
        limit: pagination.limit,
        total: pagination.total,
        totalPages: Math.ceil(pagination.total / pagination.limit)
      },
      timestamp: new Date().toISOString()
    });
  }
}

module.exports = ResponseHandler;