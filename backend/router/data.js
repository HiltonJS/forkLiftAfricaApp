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

router.post("/edit", (req, res) => {
  const id = req.body._id;
  const client = req.body.client;
  const phone = req.body.phone;
  const assigned = req.body.assigned;
  const assignedEmail = req.body.assignedEmail;
  const problem = req.body.problem;
  const created_at = req.body.created_at;
  const type = req.body.type;
  const hours = req.body.hours;
  const make = req.body.make;
  const descriptionOfWork = req.body.descriptionOfWork;
  const parts = req.body.parts;
  const labourHrs = req.body.labourHrs;
  const consumables = req.body.consumables;
  const travel = req.body.travel;
  const subTotal = req.body.subTotal;
  const vat = req.body.vat;
  const total = req.body.total;
  const otherComments = req.body.otherComments;
  const status = req.body.status;

  JobSheet.findById(id)
    .then((job) => {
      job.client = client;
      job.phone = phone;
      job.assigned = assigned;
      job.assignedEmail = assignedEmail;
      job.problem = problem;
      job.created_at = created_at;
      job.type = type;
      job.hours = hours;
      job.make = make;
      job.descriptionOfWork = descriptionOfWork;
      job.parts = parts;
      job.labourHrs = labourHrs;
      job.consumables = consumables;
      job.travel = travel;
      job.subTotal = subTotal;
      job.vat = vat;
      job.total = total;
      job.otherComments = otherComments;
      job.status = status;

      return job.save();
    })
    .then(() => {
      res.status(201).send({ message: "zvaita" });
      console.log("updated");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/delete", (req, res) => {
  const id = req.body._id;
  console.log(req.body._id);
  JobSheet.deleteOne({ _id: id })
    .then((data) => {
      res.send({ message: "done" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/jobs", (req, res) => {
  JobSheet.find()
    .then((jobs) => {
      res.send({ jobs });
    })
    .catch((err) => {
      res.send({ message: err });
    });
});

router.get("/inventory", (req, res) => {
  Inventory.find()
    .then((inventory) => {
      res.send({ inventory });
    })
    .catch((err) => {
      res.send({ message: err });
    });
});

module.exports = router;
