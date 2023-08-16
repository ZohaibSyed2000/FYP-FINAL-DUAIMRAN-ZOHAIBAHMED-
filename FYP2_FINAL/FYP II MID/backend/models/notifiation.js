const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  car_name: {
    type: String,
    required: true,
    unique: [true, "car already in use"],
  },
  model_name: {
    type: String,
    required: true,
  },
  brand_name: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("notification", userSchema);
module.exports = User;
