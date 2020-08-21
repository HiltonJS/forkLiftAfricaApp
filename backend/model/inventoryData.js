const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const inventoryDataScheme = mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  capacity: { type: String, required: true },
  serial: { type: String, required: true },
  liftSize: {},
  forkLength: { type: String, required: true },
  mastType: { type: String, required: true },
  attachments: { type: String, required: true },
  sideShift: { type: String, required: true },
  tiltType: { type: String, required: true },
  engineNumber: { type: String, required: true },
  typeOfFuel: { type: String, required: true },
  frontTyreSize: { type: String, required: true },
  engineOilFilter: {
    type: String,
    required: true,
  },
  rearTyreSize: { type: String, required: true },
  engineName: { type: String, required: true },
  transmissionOilFilter: {
    type: String,
    required: true,
  },
  fuelFilter: { type: String, required: true },
  hydralicOilFilter: { type: String, required: true },
  airInnerFilter: { type: String, required: true },
  airOuterFilter: { type: String, required: true },
  eletricChargeType: { type: String, required: true },
  engineCapacity: { type: String, required: true },
});

const Inventory = mongoose.model("inventory", inventoryDataScheme);
module.exports = Inventory;
