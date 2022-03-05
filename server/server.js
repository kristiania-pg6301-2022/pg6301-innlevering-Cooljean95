import express from "express";
import path from "path";

const app = express();

const data = [
  {
    category: "food",
    id: 1,
    quiz: "what color dose a strawberry have?",
    answers: {
      answer_a: "green",
      answer_b: "blue",
      answer_c: "read",
      answer_d: "black",
    },
    correct_answers: {
      answer_a: "false",
      answer_b: "false",
      answer_c: "true",
      answer_d: "false",
    },
  },
  {
    category: "car",
    id: 2,
    quiz: "what color dose a black car have?",
    answers: {
      answer_a: "green",
      answer_b: "blue",
      answer_c: "read",
      answer_d: "black",
    },
    correct_answers: {
      answer_a: "false",
      answer_b: "false",
      answer_c: "false",
      answer_d: "true",
    },
  },
  {
    category: "clothes",
    id: 1,
    quiz: "what color dose a jeans have?",
    answers: {
      answer_a: "green",
      answer_b: "blue",
      answer_c: "read",
      answer_d: "black",
    },
    correct_answers: {
      answer_a: "false",
      answer_b: "true",
      answer_c: "false",
      answer_d: "false",
    },
  },
];

function randomQuiz() {
  return data[Math.trunc(Math.random() * data.length)];
}

app.get("/api/login", (req, res) => {
  function respond() {
    const object = randomQuiz();
    const { answers, quiz } = object;
    return res.json({ quiz, answers });
  }
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
