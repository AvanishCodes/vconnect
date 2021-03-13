const mongoose = require("mongoose");
const { type } = require("os");
const { ObjectId } = mongoose.Schema;

const applicationSchema = new mongoose.Schema({
  // Applicant
  applicant: {
    type: ObjectId,
    ref: "User",
    required: true
  },
  // Trial Details
  trial: {
    type: ObjectId,
    ref: "Trial",
    required: true
  },
  // Result of Application
  result: {
    // Shortlisting results
    primaryFilterOrg: {
      type: String,       // Accepted, Rejected or Waiting
      required: true
    },
    // Shortlisting results
    primaryFilterUser: {
      type: String,       // Accepted, Rejected or Waiting
      required: true
    },
    // Final status for physical verification
    forPhysicalVerificationOrg: {
      type: String,       // Accepted, Rejected or Waiting
      required: true
    },
    // Final status for physical verification
    forPhysicalVerificationUser: {
      type: String,       // Accepted, Rejected or Waiting
      required: true
    }
  }
})


module.exports = mongoose.model("Application", applicationSchema)