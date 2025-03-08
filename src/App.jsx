import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import paintings from './paintings';
import Flashcard from './Flashcard';
import './App.css';

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false); // State for showing answer

  useEffect(() => {
    setCurrentCardIndex(Math.floor(Math.random() * paintings.length));
  },);

  const nextCard = () => {
    setShowAnswer(false); // Reset showAnswer when moving to the next card
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % paintings.length);
  };

  const prevCard = () => {
    setShowAnswer(false); // Reset showAnswer when moving to the previous card
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? paintings.length - 1 : prevIndex - 1
    );
  };

  const toggleAnswer = () => {
    setShowAnswer((prevState) => !prevState);
  };

  return (
    <div className="app">
      <h1>Famous Paintings Flashcards</h1>
      <h3>Let's test your knowledge of paintings categorized by easy, medium, and hard levels!</h3>
      <p>
        Card {currentCardIndex + 1} of {paintings.length}
      </p>
      <Flashcard
        card={paintings[currentCardIndex]}
        newCard={nextCard}
        showAnswer={showAnswer} // Pass showAnswer state
        toggleAnswer={toggleAnswer} // Pass toggleAnswer function
      />
      <div className="navigation">
        <button onClick={prevCard}>{"<"}</button>
        <button onClick={nextCard}>{">"}</button>
      </div>
    </div>
  );
}

export default App;


