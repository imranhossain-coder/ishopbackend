const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: String,
    requird: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

// Hasing THe Password

const User = mongoose.model("USER", userSchema);

module.exports = User;
