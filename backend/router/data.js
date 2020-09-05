const express = require("express");

const router = express.Router();

const Inventory = require("../model/inventoryData");
const JobSheet = require("../model/jobsheet");
const JobSheetCreation = require("../model/jobSheetCreation");

router.post("/inventory", async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    await inventory.save();

    res.status(201).send({ message: "Successfully added to database" });
  } catch (error) {
    res.status(400).send({ message: error });
  }
});
router.post("/jobs", async (req, res) => {
  try {
    const job = new JobSheet(req.body);
    await job.save();

    res.status(201).send({ message: "Successfully finished your Job " });
  } catch (error) {
    res.status(400).send({ message: error });
  }
});
router.post("/jobCreation", async (req, res) => {
  try {
    const jobCreation = new JobSheetCreation(req.body);
    await jobCreation.save();

    res.status(201).send({ message: "Successfully created a job . " });
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

router.get("/inventory", (req, res) => {
  Inventory.find()
    .then((inventory) => {
      console.log(inventory);
      res.send({ inventory });
    })
    .catch((err) => {
      res.send({ message: err });
    });
});

module.exports = router;
