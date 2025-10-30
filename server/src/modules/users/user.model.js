const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false }, // Make password not required
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  name: String,
  org: String,
  profile: { type: mongoose.Schema.Types.Mixed },
  isActive: { type: Boolean, default: true },
  roles: [String],
  mobilenumber: String,
  alternateemail: String,
  alternatemobilenumber: String,
}, { timestamps: true });

// Generate default password and hash before saving
userSchema.pre('save', async function(next) {
  try {
    // If password is not provided, generate a random one
    if (!this.password) {
      this.password = crypto.randomBytes(16).toString('hex');
    }
    
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next();
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    if (!this.password || !candidatePassword) {
      return false;
    }
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    console.error('Password comparison error:', error);
    return false;
  }
};

module.exports = mongoose.model('User', userSchema);
