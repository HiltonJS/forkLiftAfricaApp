const express = require("express");
const router = express.Router();

const User = require("../model/user");

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/users/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(401).send({ error: "Login failed" });
    }
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {}
});
module.exports = router;
