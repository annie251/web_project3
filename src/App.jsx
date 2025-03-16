import React from 'react';
import FlashcardsApp from './FlashcardsApp';

const App = () => {
  const cards = [
    { question: 'What is 5 x 10?', answer: '50' },
    { question: 'What is 2 + 2?', answer: '4' },
    { question: 'What is 4 + 9?', answer: '13' },
  ];

  return <FlashcardsApp cards={cards} />;
};

export default App;