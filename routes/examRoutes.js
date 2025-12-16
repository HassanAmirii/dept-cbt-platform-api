const express = require("express");
const mockQuestions = require("../data/mockQuestion");
const router = express.Router();

router.get("/generate", (req, res) => {
  const targetCourse = "GST 111";
  const desiredCount = 4;

  //get the the desired course title questions based on the specified req--through filtering

  const filteredQuestions = mockQuestions.filter(
    (q) => q.courseCode === targetCourse
  );

  const selectedQuestions = filteredQuestions.slice(0, desiredCount);

  const examQuestions = selectedQuestions.map((q) => ({
    id: q._id,
    courseCode: q.courseCode,
    topic: q.topic,
    text: q.text,
    options: q.options,
  }));

  if (examQuestions.length === 0) {
    return res
      .status(404)
      .json({ message: "No questions found for the selected course" });
  }

  res.json(examQuestions);
});

module.exports = router;
