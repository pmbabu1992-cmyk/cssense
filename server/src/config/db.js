const mongoose = require('mongoose');

async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI missing in .env');
  mongoose.set('strictQuery', true);
  
  // Set write concern options
  const options = { writeConcern: { w: 'majority' } };
  
  await mongoose.connect(uri, options);
  console.log('✅ MongoDB connected');
  console.log('🗃️  Using DB:', mongoose.connection.name);
}

module.exports = { connectDB };
