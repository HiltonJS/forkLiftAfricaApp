const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./router/user");
const dotenv = require("dotenv");

require("./db/db");

dotenv.config();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(userRouter);

app.get("/", (req, res) => {
  res.send({ message: "i am in" });
});

app.listen(port, () => {
  console.log(`Listeing on port ${port}`);
});
