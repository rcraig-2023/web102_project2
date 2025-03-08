import React, { useEffect, useState } from 'react';

function Flashcard({ card, newCard }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  let cardColor = "";
  if (card.difficulty === "Easy") {
    cardColor = "lightgreen";
  } else if (card.difficulty === "Medium") {
    cardColor = "lightyellow";
  } else if (card.difficulty === "Hard") {
    cardColor = "lightcoral";
  }

  return (
    <div
      className={`flashcard ${showAnswer ? "flipped" : ""}`}
      onClick={toggleAnswer}
      style={{ backgroundColor: cardColor }}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <img
            src={card.image}
            alt={card.painting}
            style={{ maxWidth: "300px", maxHeight: "200px" }}
          />
        </div>
        <div className="flashcard-back">
          <p>Painter: {card.painter}</p>
          <p>Painting: {card.painting}</p>
          <p>Museum: {card.museum}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
