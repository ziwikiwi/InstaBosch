// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var FoellingerSchema = new mongoose.Schema({
    timestamp: { type: Number, default: 0 },
    count: { type: Number, default: 0 },
    day: { type: Number, default: 0 },
    date: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
});

// Export the Mongoose model
module.exports = mongoose.model('Foellinger', FoellingerSchema);
