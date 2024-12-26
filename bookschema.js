const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  booktitle: { type: String, required: true },
  PubYear: { type: Number, required: true },
  author: { type: String, required: true },
  Topic: { type: String, required: true },
  formate: { type: String, required: true }
});

module.exports = mongoose.model('Books', bookSchema);
