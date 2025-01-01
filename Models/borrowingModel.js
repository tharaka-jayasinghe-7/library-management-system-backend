const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const borrowingSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  borrowDate: { type: Date, default: Date.now },
  dueDate: Date,
  isReturned: { type: Boolean, default: false },
});

const Borrowing = mongoose.model("Borrwoing", borrowingSchema);

module.exports = Borrowing;
