const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  // building
  building: {
    type: String,
    required: false,
    maxlength: 50
  },
  // Address Line 1
  al1: {
    type: String,
    required: true,
    maxlength: 200
  },
  // Address Line 2
  al2: {
    type: String,
    required: false,
    maxlength: 200
  },
  // City or District
  city: {
    type: String,
    required: true,
    maxlength: 32
  },
  // State
  state: {
    type: String,
    required: true,
    maxlength: 32
  },
  // Country
  country: {
    type: String,
    required: true,
    maxlength: 32
  },
  // Postal Code: Zip/Pin
  zipCode: {
    type: String,
    required: true,
    maxlength: 32,
  }
})

module.exports = mongoose.model("Address", addressSchema)