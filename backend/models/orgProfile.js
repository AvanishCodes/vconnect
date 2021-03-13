const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const orgProfileSchema = new mongoose.Schema({
  // address: {
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
  },
  // },
  // Governing authority of the organization
  // authority: {
  //   type: String,
  //   required: true
  // },
  // Affliation of the Organization
  affiliation: {
    type: String,
    required: false
  },
  // Type of Organization
  // type: {
  //   type: String, // Govt-funded/Semi-govt/private-entity
  //   required: true
  // },
  Website: {
    type: String,
    required: false
  },
  HelpLineNumber: {
    type: Number,
    required: false,
    min: 1000000000,
    max: 9999999999
  },
  // ContactPerson: {
  //   // Name
  //   name: {
  //     type: String,
  //     required: true,
  //     maxlength: 32
  //   },
  //   // Role
  //   role: {
  //     type: String,
  //     required: true,
  //     maxlength: 32
  //   },
  //   // email
  //   email: {
  //     type: String,
  //     required: true,
  //     maxlength: 32
  //   },
  //   // Phone Number
  //   phoneNumber: {
  //     type: Number,
  //     required: true,
  //     maxlength: 32
  //   }
  // },
  org: {
    type: ObjectId,
    ref: "Org"
  }
})

module.exports = mongoose.model("OrgProfile", orgProfileSchema)
