import React, { useState } from 'react';

const Flashcard = ({ question, answer }) => {
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = () => {
    const isAnswerCorrect = userGuess.trim().toLowerCase() === answer.toLowerCase();
    setIsCorrect(isAnswerCorrect);
  };

  return (
    <div>
      <p>{question}</p>
      <input
        type="text"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleSubmit}>Submit</button>
      {isCorrect !== null && (
        <p style={{ color: isCorrect ? 'green' : 'red' }}>
          {isCorrect ? 'Correct!' : 'Incorrect!'}
        </p>
      )}
    </div>
  );
};

export default Flashcard;