import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const data = [
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

let savedDate = [{}];
let score = 0;

function randomQuiz() {
  return data[Math.trunc(Math.random() * data.length)];
}

function correctAnswer(question, answer) {
  return question.correct_answers[answer + "_correct"] === "true";
}

app.get("/api/quiz", (req, res) => {
  function respond() {
    const { answers, quiz, id } = randomQuiz();
    return res.json({ quiz, answers, id });
  }
  setTimeout(respond, 4004);
});

app.post("/api/answer", (req, res) => {
  const { answer, id } = req.body;
  const question = data.find((q) => q.id === id);
  const isItCorrect = correctAnswer(question, answer);
  return res.json(isItCorrect);
});

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api/")) {
    return res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
