const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/skillSwap'
mongoose.connect(mongoURL)

const db = mongoose.connection;
db.on('connected', () => {
    console.log("Database is connected");
});

db.on('disconnected', () => {
    console.log("Database is disconnected");
});

db.on('error', (err) => {
    console.log("Error in database connection", err);
});

// Export the db connection
module.exports = db;