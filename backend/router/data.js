const express = require("express");

const router = express.Router();

const Inventory = require("../model/inventoryData");

router.post("/inventory", async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    await inventory.save();

    res.status(201).send({ message: "Successfully added to database" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
