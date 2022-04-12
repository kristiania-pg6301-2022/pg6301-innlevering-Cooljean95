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
    category: "food",
    id: 2,
    quiz: "what color dose a orange have?",
    answers: {
      answer_a: "orange",
      answer_b: "blue",
      answer_c: "red",
      answer_d: "black",
    },
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
  },
  {
    category: "food",
    id: 3,
    quiz: "what color dose a blueberry have?",
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
  {
    category: "car",
    id: 4,
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
    category: "car",
    id: 5,
    quiz: "what color dose a buss have?",
    answers: {
      answer_a: "green",
      answer_b: "blue",
      answer_c: "red",
      answer_d: "black",
    },
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "true",
      answer_c_correct: "true",
      answer_d_correct: "false",
    },
  },
  {
    category: "car",
    id: 6,
    quiz: "what color does a yellow car have?",
    answers: {
      answer_a: "green",
      answer_b: "blue",
      answer_c: "red",
      answer_d: "yellow",
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
    id: 7,
    quiz: "what color dose jeans have?",
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
  {
    category: "clothes",
    id: 8,
    quiz: "what color is the wedding dress?",
    answers: {
      answer_a: "white",
      answer_b: "blue",
      answer_c: "red",
      answer_d: "black",
    },
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
  },
  {
    category: "clothes",
    id: 9,
    quiz: "what color dose gravity have?",
    answers: {
      answer_a: "ehhh",
      answer_b: "black?",
      answer_c: "dose it have a color?",
      answer_d: "no",
    },
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "true",
    },
  },
];
