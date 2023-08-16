const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: [true, "Email already in use"],
  },
  password: {
    type: String,
    required: true,
  }
});

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
