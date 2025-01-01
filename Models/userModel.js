const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  mobile: String,
  address: String,
});

userSchema.index({ name: 1 });

const User = mongoose.model("User", userSchema);

module.exports = User;
