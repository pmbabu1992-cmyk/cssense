const JWTUtil = require('../../core/utils/jwt');

class AuthService {
  constructor(userRepo) {
    this.userRepo = userRepo;
  }

  async login(email, password) {
    // Find user by email
    const user = await this.userRepo.findByEmail(email);
    console.warn('Found user:', user);
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Check if user is active
    if (!user.isActive) {
      throw new Error('Account is inactive');
    }

    // Compare password - check if method exists
    if (typeof user.comparePassword !== 'function') {
      console.error('comparePassword method not found on user model');
      throw new Error('Authentication error');
    }

    const isPasswordValid = await user.comparePassword(password);
    console.log('Password validation result:', isPasswordValid);
    
    if (!isPasswordValid) {
      throw new Error('Invalid email or password ffffffff');
    }

    // Generate tokens
    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      roles: user.roles
    };

    const accessToken = JWTUtil.generateAccessToken(payload);
    const refreshToken = JWTUtil.generateRefreshToken({ id: user._id });

    // Remove password from response
    const userObject = user.toObject();
    delete userObject.password;

    return {
      user: userObject,
      accessToken,
      refreshToken
    };
  }

  async refreshToken(refreshToken) {
    const decoded = JWTUtil.verifyToken(refreshToken);
    
    if (!decoded) {
      throw new Error('Invalid refresh token');
    }

    const user = await this.userRepo.get(decoded.id);
    
    if (!user || !user.isActive) {
      throw new Error('Invalid refresh token');
    }

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      roles: user.roles
    };

    const accessToken = JWTUtil.generateAccessToken(payload);
    const newRefreshToken = JWTUtil.generateRefreshToken({ id: user._id });

    return {
      accessToken,
      refreshToken: newRefreshToken
    };
  }

  async verifyToken(token) {
    return JWTUtil.verifyToken(token);
  }
}

module.exports = AuthService;