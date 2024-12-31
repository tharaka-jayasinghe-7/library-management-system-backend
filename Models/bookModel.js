const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  _id: Number,
  title: String,
  auther: String,
  publisher: String,
  price: Number,
  qty: Number,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
