const { body, param, validationResult, matchedData } = require('express-validator');
const User = require('./user.model');

exports.validateCreate = [
  body('_id').not().exists().withMessage('Do not provide _id'),
  body('id').not().exists().withMessage('Do not provide id'),
  body('createdAt').not().exists().withMessage('Do not provide createdAt'),
  body('updatedAt').not().exists().withMessage('Do not provide updatedAt'),

  body('username').trim().notEmpty().withMessage('Username is required').custom(async (value) => {
    const existingUser = await User.findOne({ username: value });
    if (existingUser) {
      throw new Error('Username already in use');
    }
  }),
  body('email').isEmail().normalizeEmail().withMessage('Valid email required').custom(async (value) => {
    const existingUser = await User.findOne({ email: value });
    if (existingUser) {
      throw new Error('Email already in use');
    }
  }),
  body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('role').optional().isIn(['user', 'admin']).withMessage('Role must be user or admin'),

  // Persist these optional fields from your payload
  body('name').optional().trim().notEmpty(),
  body('org').optional().trim().notEmpty(),
  body('status').optional().trim().notEmpty(),
  body('profile').optional().isObject().withMessage('Profile must be an object'),
  body('isActive').optional().isBoolean().withMessage('isActive must be a boolean'),
  body('roles').optional().isArray().withMessage('Roles must be an array'),
  body('roles.*').isString().withMessage('Each role must be a string'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    
    // Get matched data
    const validatedData = matchedData(req, { includeOptionals: true, onlyValidData: false });
    
    // Manually add roles and isActive if they exist in the original body
    if (req.body.roles !== undefined) {
      validatedData.roles = req.body.roles;
    }
    if (req.body.isActive !== undefined) {
      validatedData.isActive = req.body.isActive;
    }
    if (req.body.profile !== undefined) {
      validatedData.profile = req.body.profile;
    }
    
    req.body = validatedData;
    next();
  }
];

exports.validateUpdate = [
  body('_id').not().exists().withMessage('Do not provide _id'),
  body('id').not().exists().withMessage('Do not provide id'),
  body('createdAt').not().exists().withMessage('Do not provide createdAt'),
  body('updatedAt').not().exists().withMessage('Do not provide updatedAt'),

  body('username').optional().trim().notEmpty(),
  body('email').optional().isEmail().normalizeEmail(),
  body('password').optional().isLength({ min: 6 }),
  body('role').optional().isIn(['user', 'admin']),

  body('name').optional().trim().notEmpty(),
  body('org').optional().trim().notEmpty(),
  body('status').optional().trim().notEmpty(),
  body('profile').optional().isObject().withMessage('Profile must be an object'),
  body('isActive').optional().isBoolean().withMessage('isActive must be a boolean'),
  body('roles').optional().isArray().withMessage('Roles must be an array'),
  body('roles.*').isString().withMessage('Each role must be a string'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    
    // Get matched data
    const validatedData = matchedData(req, { includeOptionals: true, onlyValidData: false });
    
    // Manually add roles and isActive if they exist in the original body
    if (req.body.roles !== undefined) {
      validatedData.roles = req.body.roles;
    }
    if (req.body.isActive !== undefined) {
      validatedData.isActive = req.body.isActive;
    }
    if (req.body.profile !== undefined) {
      validatedData.profile = req.body.profile;
    }
    
    req.body = validatedData;
    next();
  }
];

exports.validateIdParam = [
  param('id').isMongoId().withMessage('Invalid id'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];
