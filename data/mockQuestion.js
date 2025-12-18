const mockQuestions = [
  {
    _id: "gst111_q1",
    courseCode: "GST 111",
    level: 100,
    topic: "Grammar",
    text: "Choose the correct concord: 'The jury _______ divided in their opinion.'",
    options: ["is", "are", "was", "has been"],
    correctAnswerIndex: 1, // 'are' because of the plural pronoun 'their'
    explanation:
      "When a collective noun refers to individuals within a group (indicated by 'their'), a plural verb is used.",
  },
  {
    _id: "gst111_q2",
    courseCode: "GST 111",
    level: 100,
    topic: "Punctuation",
    text: "Which of the following is used to introduce a list of items?",
    options: ["Semicolon", "Comma", "Colon", "Hyphen"],
    correctAnswerIndex: 2, // Colon
    explanation:
      "A colon (:) is typically used to introduce a list, a quote, or an explanation.",
  },
  {
    _id: "gst111_q3",
    courseCode: "GST 111",
    level: 100,
    topic: "Vocabulary",
    text: "The word 'Bibliophile' refers to a person who _______.",
    options: ["Writes books", "Sells books", "Loves books", "Steals books"],
    correctAnswerIndex: 2, // Loves books
    explanation:
      "The suffix '-phile' denotes a lover of something; 'biblio' refers to books.",
  },
  {
    _id: "gst111_q4",
    courseCode: "GST 111",
    level: 100,
    topic: "Reading Skills",
    text: "Scanning is a reading technique used to _______.",
    options: [
      "Get the general idea",
      "Find specific information",
      "Analyze the plot",
      "Critique the author",
    ],
    correctAnswerIndex: 1, // Find specific information
    explanation:
      "Scanning involves looking for specific keywords or data rather than reading the whole text.",
  },
  {
    _id: "gst111_q5",
    courseCode: "GST 111",
    level: 100,
    topic: "Grammar",
    text: "Identify the part of speech of the underlined word: 'The boy ran **fast**.'",
    options: ["Adjective", "Noun", "Verb", "Adverb"],
    correctAnswerIndex: 3, // Adverb
    explanation:
      "'Fast' modifies the verb 'ran,' telling us how the action was performed.",
  },
];

module.exports = mockQuestions;
