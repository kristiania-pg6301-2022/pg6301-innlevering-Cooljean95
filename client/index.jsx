import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { fetchJSON, postJSON } from "./http.js";

function FrontPage() {
  return (
    <div>
      <h1>Hello welcom to the quiz game</h1>
      <h3>Follow the links. </h3>
      <div>
        <Link to={"/quiz"}>Start quiz here</Link>
      </div>
      <div>
        <Link to={"/answers"}>See your answers</Link>
      </div>
    </div>
  );
}

function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [answers, setAnswers] = useState({});
  const [id, setId] = useState({});
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  useEffect(async () => {
    setLoading(true);
    const data = await fetchJSON("/api/quiz");
    setQuiz(data.quiz);
    setAnswers(data.answers);
    setId(data.id);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  async function showAnswer(a) {
    const answer = await postJSON("/api/answer", { a, id });
    if (answer === false) {
      navigate("/wrong");
    } else {
      navigate("/right");
    }
  }

  return (
    <>
      <h1>{quiz}</h1>
      <div>
        <Link to={"/"}>Frontpage</Link>
      </div>
      <div>
        <p>
          {Object.keys(answers).map((a) => (
            <p key={a}>
              <button onClick={() => showAnswer(a)}>{answers[a]}</button>
            </p>
          ))}
        </p>
      </div>
    </>
  );
}

function Wrong() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Wrong answer</h1>
      <div>
        <Link to={"/"}>Frontpage</Link>
      </div>
      <p>Try again</p>
      <button
        onClick={() => {
          navigate("/quiz");
        }}
      >
        Try again
      </button>
    </>
  );
}

function Right() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Right answer</h1>
      <div>
        <Link to={"/"}>Frontpage</Link>
      </div>
      <button
        onClick={() => {
          navigate("/quiz");
        }}
      >
        Try again
      </button>
    </>
  );
}

function Answers() {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState();

  useEffect(async () => {
    const data = await fetchJSON("/api/allAnswers");
    setQuestions(data.questions);
    setScore(data.score);
  }, []);

  return (
    <>
      <h1>Here you can see youre score!</h1>
      <div>
        <Link to={"/"}>Frontpage</Link>
      </div>
      <p> questions: {questions}</p>
      <p> score: {score}</p>
    </>
  );
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path={"/answers"} element={<Answers />} />
        <Route path="/wrong" element={<Wrong />} />
        <Route path="/right" element={<Right />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
