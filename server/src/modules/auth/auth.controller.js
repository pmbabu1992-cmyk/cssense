const ResponseHandler = require('../../core/http/ResponseHandler');

class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      
      const result = await this.authService.login(email, password);
      
      return ResponseHandler.success(
        res,
        result,
        'Login successful',
        200
      );
    } catch (error) {
      if (error.message === 'Invalid email or password' || error.message === 'Account is inactive') {
        return ResponseHandler.unauthorized(res, error.message);
      }
      next(error);
    }
  };

  refreshToken = async (req, res, next) => {
    try {
      const { refreshToken } = req.body;
      
      if (!refreshToken) {
        return ResponseHandler.badRequest(res, 'Refresh token is required');
      }
      
      const result = await this.authService.refreshToken(refreshToken);
      
      return ResponseHandler.success(
        res,
        result,
        'Token refreshed successfully',
        200
      );
    } catch (error) {
      return ResponseHandler.unauthorized(res, error.message);
    }
  };

  verifyToken = async (req, res, next) => {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '');
      
      if (!token) {
        return ResponseHandler.unauthorized(res, 'No token provided');
      }
      
      const decoded = await this.authService.verifyToken(token);
      
      if (!decoded) {
        return ResponseHandler.unauthorized(res, 'Invalid token');
      }
      
      return ResponseHandler.success(
        res,
        { valid: true, decoded },
        'Token is valid',
        200
      );
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AuthController;