const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    brand_name: {
      type: String,
      required: true,
    },
    car_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    fuel_type: {
      type: String,
      enum: ["Diesel", "Petrol", "Other"],
      required: true,
    },
    transmission: {
      type: String,
      enum: ["Automatic", "Manual"],
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    body_type: {
      type: String,
      enum: ["Hatchback", "Sedan", "Crossover", "SUV"],
      required: true,
    },

    engine_displacement: {
      type: String,
      required: true,
    },

    mileage: {
      type: String,
      required: true,
    },

    seller_location: {
      type: String,
      required: true,
    },

    registered_in: {
      type: String,
      required: true,
    },

    assembly: {
      type: String,
      enum: ["Local", "Imported"],
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    files: [Object],

    user_id: {
      type: String,
    },
  },
  { timestamps: true }
);

const Car = mongoose.model("car", carSchema);
module.exports = Car;
