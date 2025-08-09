// App.jsx
import React, { useState, useEffect } from "react";
import StartForm from "./components/StartForm";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [username, setUsername] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [numQuestions, setNumQuestions] = useState(10);
  const [theme, setTheme] = useState("light");

  // Charger le thème depuis localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

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
    <div className={`app ${theme}`}>
      <header>
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair"}
        </button>
      </header>

      <AnimatePresence mode="wait">
        {!quizStarted && !quizFinished && (
          <motion.div
            key="start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <StartForm onStart={startQuiz} />
          </motion.div>
        )}

        {quizStarted && !quizFinished && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Quiz onFinish={finishQuiz} numQuestions={numQuestions} />
          </motion.div>
        )}

        {quizFinished && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Result
              username={username}
              score={score}
              totalQuestions={numQuestions}
              onRestart={restartQuiz}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
