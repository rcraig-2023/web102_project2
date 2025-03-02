import React, { useState } from 'react';

function Flashcard({ card, newCard }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  let cardColor = '';
  if (card.difficulty === 'Easy') {
    cardColor = 'lightgreen';
  } else if (card.difficulty === 'Medium') {
    cardColor = 'lightyellow';
  } else if (card.difficulty === 'Hard') {
    cardColor = 'lightcoral';
  }

  return (
    <div
      className="flashcard"
      onClick={toggleAnswer}
      style={{ backgroundColor: cardColor }}
    >
      <img
        src={card.image}
        alt={card.painting}
        style={{ maxWidth: '300px', maxHeight: '200px' }}
      />
      {showAnswer ? (
        <div>
          <p>Painter: {card.painter}</p>
          <p>Painting: {card.painting}</p>
          <p>Museum: {card.museum}</p>
        </div>
      ) : (
        <p>Click to reveal answer</p>
      )}
      <button onClick={(e) => { e.stopPropagation(); newCard(); }}>Next Card</button>
    </div>
  );
}

export default Flashcard;