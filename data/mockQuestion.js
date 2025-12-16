// This file contains hardcoded data for initial testing of Exam Generation and Scoring logic.

const mockQuestions = [
  // Question 1: Easy Punctuation
  {
    _id: "q_001", // Unique ID for mock testing
    courseCode: "GST 111",
    topic: "Punctuation",
    text: "Which punctuation mark is used to indicate a long pause, often suggesting an unfinished thought?",
    options: ["Comma", "Semicolon", "Dash", "Ellipsis"],
    correctAnswerIndex: 3, // Ellipsis is the 4th option (index 3)
    explanation:
      "The ellipsis (...) is used to indicate an omission or a long, reflective pause.",
  },

  // Question 2: Medium Vocabulary
  {
    _id: "q_002",
    courseCode: "GST 111",
    topic: "Vocabulary",
    text: 'Choose the word that is nearest in meaning to "Ephemeral".',
    options: ["Permanent", "Lasting", "Temporary", "Significant"],
    correctAnswerIndex: 2, // Temporary is the 3rd option (index 2)
    explanation: '"Ephemeral" means lasting for a very short time.',
  },

  // Question 3: Easy Concord/Agreement
  {
    _id: "q_003",
    courseCode: "GST 111",
    topic: "Concord",
    text: "Neither the girls nor the boy _______ able to find the keys.",
    options: ["is", "are", "were", "have been"],
    correctAnswerIndex: 0, // 'is' agrees with the nearest subject 'boy' (index 0)
    explanation:
      'In the "neither...nor" construction, the verb agrees with the subject closest to it (the boy).',
  },

  // Question 4: Hard Grammar/Tenses
  {
    _id: "q_004",
    courseCode: "GST 111",
    topic: "Grammar",
    text: "By the time she arrived, the train _______ the station.",
    options: ["is leaving", "has left", "had left", "was leaving"],
    correctAnswerIndex: 2, // 'had left' (Past Perfect) indicates the action completed before the past action 'arrived' (index 2)
    explanation:
      'Past perfect tense ("had left") is used to show an action that occurred before another action in the past.',
  },

  // Question 5: Medium Reading Comprehension Terminology
  {
    _id: "q_005",
    courseCode: "GST 111",
    topic: "Comprehension",
    text: "What is the main idea or central theme of a paragraph called?",
    options: ["Tone", "Style", "Topic Sentence", "Analogy"],
    correctAnswerIndex: 2, // Topic Sentence (index 2)
    explanation:
      "The topic sentence usually summarizes the main idea of the paragraph.",
  },
];

module.exports = mockQuestions;
