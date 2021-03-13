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
  // result: {
  // Shortlisting results

    // Shortlisting results
    primaryFilterOrg: {
      type: Boolean,
      default:"false",      // Accepted, Rejected or Waiting
      required: false
    },
    // Shortlisting results
    primaryFilterUser: {
      type: Boolean,
      default:"false",      // Accepted, Rejected or Waiting
      required: false
    },
    // Final status for physical verification
    forPhysicalVerificationOrg: {
      type: Boolean,
      default:"false",      // Accepted, Rejected or Waiting
      required: false
    },
    // Final status for physical verification
    forPhysicalVerificationUser: {
      type: Boolean,
      default:"false",       // Accepted, Rejected or Waiting
      required: false
    }

})


module.exports = mongoose.model("Application", applicationSchema)
