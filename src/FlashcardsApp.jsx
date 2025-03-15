import React, { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardsApp = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex < cards.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleBack = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div>
      <Flashcard
        question={cards[currentCardIndex].question}
        answer={cards[currentCardIndex].answer}
      />
      <button onClick={handleBack} disabled={currentCardIndex === 0}>
        Back
      </button>
      <button onClick={handleNext} disabled={currentCardIndex === cards.length - 1}>
        Next
      </button>
    </div>
  );
};

export default FlashcardsApp;