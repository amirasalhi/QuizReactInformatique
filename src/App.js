// App.jsx
import React, { useState } from "react";
import StartForm from "./components/StartForm";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

const App = () => {
  const [username, setUsername] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [numQuestions, setNumQuestions] = useState(10);

  const startQuiz = (name, nbQuestions) => {
    setUsername(name);
    setNumQuestions(nbQuestions);
    setQuizStarted(true);
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setQuizFinished(true);
  };

  const restartQuiz = () => {
    setUsername("");
    setQuizStarted(false);
    setScore(0);
    setQuizFinished(false);
    setNumQuestions(10);
  };

  return (
    <div className="app">


      {!quizStarted && !quizFinished && <StartForm onStart={startQuiz} />}
      {quizStarted && !quizFinished && (
        <Quiz onFinish={finishQuiz} numQuestions={numQuestions} />
      )}
      {quizFinished && (
        <Result username={username} score={score} totalQuestions={numQuestions} onRestart={restartQuiz} />
      )}
    </div>
  );
};

export default App;
