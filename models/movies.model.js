const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: { type: String },
  genre: { type: String },
  plot: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', schema);
