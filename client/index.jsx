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
  const [loading, setLoading] = useState();

  useEffect(async () => {
    const res = await fetch("/api/quiz");
    const data = await res.json();
    setQuiz(data.quiz);
    setAnswers(data.answers);
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
              <button>{answers[a]}</button>
            </p>
          ))}
        </p>
      </div>
    </>
  );
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
