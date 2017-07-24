const mongoose = require('mongoose');
const user=require('./user');
const timeSchema = new mongoose.Schema({
    time: String
}, { collections: 'times' });

module.exports = mongoose.model('times', timeSchema);