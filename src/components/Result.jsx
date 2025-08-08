import React from "react";
import "./Result.css";

const Result = ({ username, score, totalQuestions, onRestart }) => {
     const percentage = (score / totalQuestions) * 100;

  let message = "";
  if (percentage >= 80) {
    message = "Bravo, excellent travail ! 🎉";
  } else if (percentage >= 50) {
    message = "Pas mal, continue à t'entraîner.";
  } else {
    message = "Il faut persévérer, ne lâche rien !";
  }

  return (
    <div className="result">
      <h2>Résultat de {username}</h2>
      <p>
        Votre score : {score} / {totalQuestions}
      </p>
      <p className="message">{message}</p>
      <button className="restart-btn" onClick={onRestart}>Recommencer</button>
    </div>
  );
};

export default Result;
