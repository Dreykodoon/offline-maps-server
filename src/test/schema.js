const mongoose = require('mongoose');

let testSchema = new mongoose.Schema(
  { testField: String },
  { collection: 'test' }
);

module.exports = mongoose.model('Test', testSchema);
