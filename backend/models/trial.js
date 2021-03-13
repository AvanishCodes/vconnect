const mongoose = require("mongoose");
const crypto = require("crypto");
const { v1: uuidv1 } = require('uuid');
const { type } = require("os");
const { ObjectId } = mongoose.Schema;

// Compulsory details of a trial
const trialSchema = new mongoose.Schema({
  // NCTId
  NCTId: {
    type: String,
    trim: true,
    required: true,
    maxlength: 24
  },
  // Short Title
  studyBriefTitle: {
    type: String,
    trim: true,
    required: true,
    maxlength: 200
  },
  // Formal Title for professionals
  studyFormalTitle: {
    type: String,
    trim: true,
    required: true,
    maxlength: 400
  },
  // Organization conducting the trial
  org: {
    type: ObjectId,
    ref: "Org"
  },
  // Website of the trial, where user can get more information
  website: {
    type: String,
    required: false
  },
  // Accepted genders
  gender: {
    type: String,   // Male, Female or All only
    required: true,
  },
  // Minimum Age reauired to volunteer
  minAge: {
    type: Number,
    required: true
  },
  // Maximum age of a person to volunteer
  maxAge: {
    type: Number,
    required: true
  },
  // City
  city: {
    type: String,
    required: true,
    maxlength: 60
  },
  // State
  state: {
    type: String,
    required: true,
    maxlength: 60
  },
  // Country
  country: {
    type: String,
    required: true,
    maxlength: 60
  },
  zipCode: {
    type: String,
    required: false,
    maxlength: 32
  },
  // Keywords for users' help
  keyword: {
    type: String,
    required: true,
    maxlength: 50
  }
},
  {
    timestamps: true
  }
)
// Export the schema
module.exports = mongoose.model("Trial", trialSchema);
