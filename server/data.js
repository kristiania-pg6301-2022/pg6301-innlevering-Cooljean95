export function randomQuiz() {
  return Data[Math.trunc(Math.random() * Data.length)];
}

export function correctAnswer(question, answer) {
  return question.correct_answers[answer + "_correct"] === "true";
}

export const Data = [
  {
    category: "food",
    id: 1,
    quiz: "what color dose a strawberry have?",
    answers: {
      answer_a: "green",
      answer_b: "blue",
      answer_c: "red",
      answer_d: "black",
    },
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
    },
  },
  {
    category: "car",
    id: 2,
    quiz: "what color dose a black car have?",
    answers: {
      answer_a: "green",
      answer_b: "blue",
      answer_c: "red",
      answer_d: "black",
    },
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
    },
  },
  {
    category: "clothes",
    id: 3,
    quiz: "what color dose a jeans have?",
    answers: {
      answer_a: "green",
      answer_b: "blue",
      answer_c: "red",
      answer_d: "black",
    },
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
  },
];
