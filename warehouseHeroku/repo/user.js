const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    userName: { name: String, password: String },
    perm: String
}, { collections: 'users' });

module.exports = mongoose.model('user', userSchema);