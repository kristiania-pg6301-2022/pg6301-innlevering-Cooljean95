import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function FrontPage() {
  return (
    <>
      <div>
        <Link to={"/quiz"}>Take quiz</Link>
      </div>
      <div>
        <Link to={"/answers"}>See your answers</Link>
      </div>
    </>
  );
}

function Quiz() {
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState();
  const [data, setData] = useState();

  useEffect(async () => {
    setLoading(true);
    const res = await fetch("/api/quiz");
    setQuestion(await res.json());
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        {" "}
        <h1>{question.quiz}</h1>
      </div>
      <div>
        {Object.keys(question.answers).map((a) => (
          <p key={a}>
            <button>{question.answers[a]}</button>
          </p>
        ))}
      </div>
    </>
  );
}

function Answers() {
  return null;
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/quiz"} element={<Quiz />} />
        <Route path={"/answers"} element={<Answers />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
