const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userProfile = new mongoose.Schema({
  // Healthy or not?
  user: { type: ObjectId, ref: "User" },
  healthCondition: {
    type: Boolean,
    required: false
  },
  // Age : b/w 0 to 150
  age: {
    type: Number,
    min: 0,
    max: 150
  },
  // Gender
  gender: {
    type: String, // Male, Female oe All
  },
  // Keywords to be notified for in dashboard
  keyword:
    {
      type: String,
      required: false,
      maxlength: 50
    }
  ,
  // Mobile Number
  mobileNumber: {
    type: Number,
    required: false,
    min: 1000000000,
    max: 9999999999
  },
  // Address
  address: {
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
  },
})

module.exports = mongoose.model("UserProfile", userProfile);
