const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswerIndex: {
    type: Number,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
questionSchema.index({ courseCode: 1, topic: 1 });
module.exports = mongoose.model("Question", questionSchema);
