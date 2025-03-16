import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [isQuestion, setIsQuestion] = useState(true);

  const handleSubmit = (e) => {
    e.stopPropagation(); // Stop event propagation
    const isAnswerCorrect = userGuess.trim().toLowerCase() === answer.toLowerCase();
    setIsCorrect(isAnswerCorrect);
  };

  const switchSides = () => {
    setIsQuestion(!isQuestion);
  };

  return (
    <div>
      <div className="flash-card" onClick={switchSides}>
        <h4>{isQuestion ? question : answer}</h4>
      </div>
      {isQuestion && ( // Only show input and submit button when the question side is visible
        <div className="input-section">
          <input
            type="text"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Enter your guess"
            onClick={(e) => e.stopPropagation()} // Stop event propagation
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {isCorrect !== null && ( // Show correctness feedback
        <p style={{ color: isCorrect ? 'green' : 'red' }}>
          {isCorrect ? 'Correct!' : 'Incorrect!'}
        </p>
      )}
    </div>
  );
};

export default Flashcard;