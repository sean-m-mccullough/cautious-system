const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  id: {type: String, unique: true},
  name: {type: String, required: true},
  isComplete: {type: Boolean, default: false},
});

module.exports = mongoose.model('Item', itemSchema);