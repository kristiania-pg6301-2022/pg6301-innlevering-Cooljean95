import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function FrontPage() {
  return (
    <div>
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

  async function showAnswer(answer) {
    const res = await fetch("/api/answer", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ answer, id }),
    });
    const a = await res.json();
    console.log(a);
    if (a === false) {
      navigate("/wrong");
    } else {
      navigate("/right");
    }
  }

  useEffect(async () => {
    const res = await fetch("/api/quiz");
    const data = await res.json();
    setQuiz(data.quiz);
    setAnswers(data.answers);
    setId(data.id);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>{quiz}</h1>
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

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/wrong" element={<Wrong />} />
        <Route path="/right" element={<Right />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
