const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    lowercase: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  role: {
    default: "student",
    enum: ["student", "admin"],
    type: String,
  },
  premiumCourses: {
    type: [String],
    default: [],
  },
});
