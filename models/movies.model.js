const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: { type: String },
  genre: { type: String },
  plot: { type: String },
  celebrity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Celebrity'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', schema);
