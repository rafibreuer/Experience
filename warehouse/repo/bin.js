const mongoose = require('mongoose');

const binSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true
  },
  bin: Array
}, {
    collections: 'bins'
  });
module.exports = mongoose.model('bin', binSchema);