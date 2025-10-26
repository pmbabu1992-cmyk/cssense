const mongoose = require('mongoose');
const { Schema } = mongoose;

// Loose schema to read ALL existing fields from the 'audit_logs' collection.
// Keeps timestamps for new writes, but won't block reading older docs.
// If you want strict validation later, replace {} with an explicit schema.
const schema = new Schema({}, { strict: false, timestamps: true, collection: 'audit_logs' });

// Prevent OverwriteModelError during hot-reloads / tests.
module.exports = mongoose.models.AuditLog || mongoose.model('AuditLog', schema);
