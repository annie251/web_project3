import React from 'react';
import FlashcardsApp from './FlashcardsApp';

const App = () => {
  const cards = [
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is 2 + 2?', answer: '4' },
    { question: 'What is the largest planet?', answer: 'Jupiter' },
  ];

  return <FlashcardsApp cards={cards} />;
};

export default App;