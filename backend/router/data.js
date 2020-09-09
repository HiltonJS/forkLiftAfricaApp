const express = require("express");

const router = express.Router();

const Inventory = require("../model/inventoryData");
const JobSheet = require("../model/jobsheet");
const JobSheetCreation = require("../model/jobSheetCreation");
const nodemailer = require("nodemailer");

router.post("/inventory", async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    await inventory.save();

    res.status(201).send({ message: "Successfully added to database" });
  } catch (error) {
    res.status(400).send({ message: error });
  }
});
router.post("/jobCreation", async (req, res) => {
  try {
    const emailAdress = req.body.assignedEmail;
    const problem = req.body.problem;
    const job = new JobSheet(req.body);
    await job.save();
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hkudya@gmail.com",
        pass: "nitrox14",
      },
    });

    let mailDetails = {
      from: "hkudya@gmail.com",
      to: emailAdress,
      subject: "Service",
      text: problem,
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log("Error Occurs");
      } else {
        console.log("Email sent successfully");
      }
    });

    res.status(201).send({ message: "Successfully created a job  " });
  } catch (error) {
    res.status(400).send({ message: "could not enter " });
  }
});
// router.post("/jobCreation", async (req, res) => {
//   try {
//     const emailAdress = req.body.assignedEmail;
//     const problem = req.body.problem;
//     const jobCreation = new JobSheetCreation(req.body);
//     await jobCreation.save();

// });

router.get("/jobs", (req, res) => {
  JobSheetCreation.find()
    .then((jobs) => {
      console.log(jobs);
      res.send({ jobs });
    })
    .catch((err) => {
      res.send({ message: err });
    });
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
