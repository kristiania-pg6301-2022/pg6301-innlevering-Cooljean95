import express from "express";
import path from "path";

const app = express();

const data = [
  {
    category: "Food",
    id: 1,
    quiz: "What color dose a strawberry have?",
    answers: {
      answer_a: "Blue",
      answer_b: "Pink",
      answer_c: "Red",
      answer_d: "Non",
    },
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
    },
  },
  {
    category: "Car",
    id: 2,
    quiz: "What color dose a black car have?",
    answers: {
      answer_a: "Blue",
      answer_b: "Pink",
      answer_c: "Red",
      answer_d: "Black",
    },
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
    },
  },
  {
    category: "Clothes",
    id: 3,
    quiz: "What color dose a jeans have?",
    answers: {
      answer_a: "Blue",
      answer_b: "Pink",
      answer_c: "Red",
      answer_d: "Non",
    },
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
  },
];

function randomQuiz() {
  return data[Math.floor(Math.random() * data.length)];
}

app.get("/api/quiz", (req, res, next) => {
  function respond() {
    const object = randomQuiz();
    res.json(object);
  }
  setTimeout(respond, 3000);
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
