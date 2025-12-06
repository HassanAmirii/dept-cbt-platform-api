const mongoose = require("mongoose");
const resultSchema = {
  courseCode: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  totalQuestion: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
};
module.exports = mongoose.model("Result", resultSchema);
