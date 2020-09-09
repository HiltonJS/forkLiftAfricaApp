const mongoose = require("mongoose");

const jobSheetScheme = mongoose.Schema({
  client: { type: String, required: true },
  phone: { type: String, required: true },
  assigned: { type: String, required: true },
  assignedEmail: { type: String, required: true },
  problem: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  // status: { type: Boolean, required: true },
  // hours: { type: String },
  // make: { type: String },
  // descriptionOfWork: { type: String },
  // parts: { type: String },
  // labourHrs: { type: String },
  // consumables: { type: String },
  // travel: { type: String },
  // subTotal: { type: Number },
  // vat: { type: Number },
  // total: { type: Number },
  // otherComments: { type: String },
});
const JobSheet = mongoose.model("jobSheet", jobSheetScheme);
module.exports = JobSheet;
