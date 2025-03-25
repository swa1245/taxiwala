const mongoose = require('mongoose');
require('dotenv').config();

async function fixIndexes() {
  try {
    // Connect to MongoDB
    const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/taxiwala';
    await mongoose.connect(mongoUrl);
    console.log('Connected to MongoDB');

    // Get the users collection
    const db = mongoose.connection.db;
    const users = db.collection('users');

    // Drop existing indexes
    console.log('Dropping existing indexes...');
    await users.dropIndexes();
    console.log('Indexes dropped successfully');

    // Create new index on email
    console.log('Creating new email index...');
    await users.createIndex(
      { email: 1 },
      { 
        unique: true,
        collation: { locale: 'en', strength: 2 }
      }
    );
    console.log('Email index created successfully');

    console.log('All done!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

fixIndexes();
