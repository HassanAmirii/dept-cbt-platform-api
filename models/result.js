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
  level: {
    type: Number,
    required: true,
    enum: [100, 200, 300, 400],
  },
  // Added for Review Feature
  answers: [
    {
      questionId: String,
      userSelection: Number,
      isCorrect: Boolean,
    },
  ],
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
