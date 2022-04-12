import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { useState } from "react";
import { randomQuiz, correctAnswer, Data } from "./data.js";

const app = express();
app.use(bodyParser.json());

let score = 0;
let questions = 0;

app.get("/api/quiz", (req, res) => {
  function respond() {
    const { answers, quiz, id } = randomQuiz();
    return res.json({ quiz, answers, id });
  }
  setTimeout(respond, 4004);
});

app.post("/api/answer", (req, res) => {
  const answer = req.body.a;
  const id = req.body.id;
  const question = Data.find((q) => q.id === id);
  const isItCorrect = correctAnswer(question, answer);

  if (!question) {
    return res.sendStatus(404);
  } else {
    questions++;
  }

  if (isItCorrect === true) {
    score++;
  }

  return res.json(isItCorrect);
});

app.get("/api/allAnswers", (req, res) => {
  return res.json({ score, questions });
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
