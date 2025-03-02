import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import paintings from './paintings';
import Flashcard from './Flashcard';
import './App.css';

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setCurrentCardIndex(Math.floor(Math.random() * paintings.length));
  },);

  const nextCard = () => {
    let nextIndex = currentCardIndex + 1;
    if (nextIndex >= paintings.length) {
      nextIndex = 0;
    }
    setCurrentCardIndex(nextIndex);
    setShowAnswer(false);
  };

  const prevCard = () => {
    let prevIndex = currentCardIndex - 1;
    if (prevIndex < 0) {
      prevIndex = paintings.length - 1;
    }
    setCurrentCardIndex(prevIndex);
    setShowAnswer(false);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const getCardColor = (difficulty) => {
    if (difficulty === "Easy") return "lightgreen";
    if (difficulty === "Medium") return "lightyellow";
    if (difficulty === "Hard") return "lightcoral";
    return "";
  };

  const currentCard = paintings[currentCardIndex];

  return (
    <div className="app">
      <h1>Famous Paintings</h1>
      <h2>How good of an art enthusiast are you? Test your art knowledge</h2>
      <p>
        Card {currentCardIndex + 1} of {paintings.length}
      </p>
      {currentCard && (
        <div
          className={`flashcard ${showAnswer ? "flipped" : ""}`}
          onClick={toggleAnswer}
          style={{ backgroundColor: getCardColor(currentCard.difficulty) }}
        >
          <div className="flashcard-front">
            <img
              src={currentCard.image}
              alt={currentCard.painting}
              style={{ maxWidth: "300px", maxHeight: "200px" }}
            />
          </div>
          <div className="flashcard-back">
            <p>Painter: {currentCard.painter}</p>
            <p>Painting: {currentCard.painting}</p>
            <p>Museum: {currentCard.museum}</p>
          </div>
        </div>
      )}
      <div className="navigation">
        <button onClick={prevCard}>{"<"}</button>
        <button onClick={nextCard}>{">"}</button>
      </div>
    </div>
  );
}

export default App;
