const JWTUtil = require('../utils/jwt');
const ResponseHandler = require('../http/ResponseHandler');

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return ResponseHandler.unauthorized(res, 'No token provided');
    }
    
    const decoded = JWTUtil.verifyToken(token);
    
    if (!decoded) {
      return ResponseHandler.unauthorized(res, 'Invalid or expired token');
    }
    
    req.user = decoded;
    next();
  } catch (error) {
    return ResponseHandler.unauthorized(res, 'Authentication failed');
  }
};

const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return ResponseHandler.unauthorized(res, 'Authentication required');
    }
    
    const hasRole = allowedRoles.some(role => 
      req.user.role === role || req.user.roles?.includes(role)
    );
    
    if (!hasRole) {
      return ResponseHandler.forbidden(res, 'Insufficient permissions');
    }
    
    next();
  };
};

module.exports = { authenticate, authorize };