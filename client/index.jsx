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
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  useEffect(async () => {
    setLoading(true);
    const res = await fetch("/api/login");
    setData(await res.json());
    setLoading(false);
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    console.log({ data });
  }

  return (
    <>
      <h1>{data.quiz}</h1>
      <div></div>
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
