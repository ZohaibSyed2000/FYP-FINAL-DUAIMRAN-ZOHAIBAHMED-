const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: [true, "Email already in use"],
  },
  password: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },

  cnic: {
    type: String,
    required: true,
    unique: [true, "CNIC already in use"],
  },
  phone: {
    type: String,
    required: true,
  }
});

const User = mongoose.model("user", userSchema);
module.exports = User;
