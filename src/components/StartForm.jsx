import React, { useState } from "react";
import "./StartForm.css";

const StartForm = ({ onStart }) => {
  const [name, setName] = useState("");
  const [numQuestions, setNumQuestions] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Veuillez entrer votre nom");
      return;
    }
    onStart(name.trim(), numQuestions);
  };

  return (
    
    <form className="start-form" onSubmit={handleSubmit}>
              <header className="app-header">
        <h1>
         Quiz <br/> Techniciens de 3<sup>ème</sup> grade <br/> informatique
        </h1>
        <p className="subtitle">2025 / Maroc</p>
      </header>
      <label>Entrez votre nom :</label>
      <input
        type="text"
        placeholder="Votre nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
<label htmlFor="numQuestions">Nombre de questions :</label>
<select
  id="numQuestions"
  value={numQuestions}
  onChange={(e) => setNumQuestions(Number(e.target.value))}
>
  <option value={10}>10</option>
  <option value={20}>20</option>
  <option value={30}>30</option>
  <option value={40}>40</option>
</select>

      <button type="submit">Commencer</button>
    </form>
  );
};

export default StartForm;
