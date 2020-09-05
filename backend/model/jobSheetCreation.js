const mongoose = require("mongoose");

const jobSheetCreationScheme = mongoose.Schema({
  client: { type: String, required: true },
  phone: { type: String, required: true },
  problem: { type: String, required: true },
  assigned: { type: String, required: true },
  assignedEmail: { type: String, required: true },
  status: { type: String, required: true },
});
const JobSheetCreation = mongoose.model(
  "jobSheetCreation",
  jobSheetCreationScheme
);
module.exports = JobSheetCreation;
