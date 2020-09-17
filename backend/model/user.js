const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  level: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  city: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  states: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  zip: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  company: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//Hash the password before saving

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  //generate an auth token for the user
  const user = this;
  const token = jwt.sign({ _id: user.id }, process.env.JWT_KEY);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async function (email, password) {
  //search for a user by email and password
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error({ error: "invalid login details" });
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: "invalid login details" });
  }
  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
