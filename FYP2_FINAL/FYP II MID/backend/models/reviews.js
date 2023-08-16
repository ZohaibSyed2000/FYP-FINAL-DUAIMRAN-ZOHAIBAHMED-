const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required:true
  },
  username:{
    type: String,
    required:true

  },
  review: {
    type: String,
    required:true
  },
  rating: {
    type: Number,
    required:true
  },
  carId:{
    type: String,
    required:true
  }
});

const User = mongoose.model("reviews", userSchema);
module.exports = User;
