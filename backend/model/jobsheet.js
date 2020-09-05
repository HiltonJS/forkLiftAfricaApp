const mongoose = require("mongoose");

const jobSheetScheme = mongoose.Schema({
  client: { type: String, required: true },
  phone: { type: String, required: true },
  make: { type: String },
  serial: { type: String, required: true },
  model: { type: String, required: true },
  hours: { type: String, required: true },
  techinician: { type: String, required: true },
  descriptionOfWork: { type: String, required: true },
  parts: { type: String, required: true },
  labourHrs: { type: String, required: true },
  consumables: { type: String, required: true },
  travel: { type: String, required: true },
  subTotal: { type: Number, required: true },
  vat: { type: Number, required: true },
  total: { type: Number, required: true },
  otherComments: { type: String, required: true },
  status: { type: Boolean, required: true },
});
const JobSheet = mongoose.model("jobSheet", jobSheetScheme);
module.exports = JobSheet;
