const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  publisher: String,
  price: Number,
  qty: Number,
  category: String,
  availability: Boolean,
});

bookSchema.index({ title: 1 });
bookSchema.index({ author: 1 });

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
