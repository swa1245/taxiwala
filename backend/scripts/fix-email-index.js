const mongoose = require('mongoose');

async function fixEmailIndex() {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb://localhost:27017/test');
        console.log('Connected to MongoDB');

        // Get the users collection
        const collection = mongoose.connection.collection('users');
        
        // List all indexes
        const indexes = await collection.indexes();
        console.log('Current indexes:', indexes);

        // Drop the incorrect index if it exists
        try {
            await collection.dropIndex('emai_1');
            console.log('Successfully dropped incorrect email index');
        } catch (error) {
            if (error.code === 27) {
                console.log('Index emai_1 does not exist, proceeding...');
            } else {
                throw error;
            }
        }

        console.log('Index fix completed');
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

fixEmailIndex();
