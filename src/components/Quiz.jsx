import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Quiz.css";
import allQuestions from "../data/questions";

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Quiz = ({ onFinish, numQuestions }) => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    const selectedQs = shuffleArray(allQuestions)
      .slice(0, numQuestions)
      .map((q) => ({
        ...q,
        options: shuffleArray(q.options)
      }));
    setQuestions(selectedQs);
    setCurrent(0);
    setScore(0);
    setSelectedOption(null);
    setValidated(false);
  }, [numQuestions]);

  const handleOptionClick = (option) => {
    if (validated) return;
    setSelectedOption(option);
  };

  const handleValidate = () => {
    if (!selectedOption) return;

    if (selectedOption === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
    setValidated(true);
  };

  const handleNext = () => {
    setValidated(false);
    setSelectedOption(null);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      onFinish(score);
    }
  };

  if (questions.length === 0) return <p>Chargement des questions...</p>;

  return (
    <div className="quiz">
      <h2>
        Question {current + 1} / {questions.length}
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <p className="question">{questions[current].question}</p>
          <ul className="options">
            {questions[current].options.map((option, idx) => {
              let className = "option";
              if (validated) {
                if (option === questions[current].answer) {
                  className += " correct";
                } else if (option === selectedOption) {
                  className += " wrong";
                }
              } else if (selectedOption === option) {
                className += " selected";
              }
              return (
                <li
                  key={idx}
                  className={className}
                  onClick={() => handleOptionClick(option)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleOptionClick(option);
                    }
                  }}
                  role="button"
                  aria-pressed={selectedOption === option}
                >
                  {option}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </AnimatePresence>

      {!validated ? (
        <button
          className="next-btn"
          disabled={!selectedOption}
          onClick={handleValidate}
        >
          Valider
        </button>
      ) : (
        <button className="next-btn" onClick={handleNext}>
          {current + 1 === questions.length ? "Voir le résultat" : "Suivant"}
        </button>
      )}
    </div>
  );
};

export default Quiz;
