// App.js
import React, { useState } from 'react';
import QuestionnaireComponent from './QuestionnaireComponent';
import DashboardComponent from './DashboardComponent';

const App = () => {
  const [score, setScore] = useState(0); // State to hold the score

  // Function to calculate score based on selected choices
  const calculateScore = (choices) => {
    const numSelected = Object.values(choices).filter(choice => choice).length;
    // Assign a score based on the number of selected choices
    let newScore = 0;
    if (numSelected === 1) {
      newScore = 1;
    } else if (numSelected === 2) {
      newScore = 2;
    } else if (numSelected === 3) {
      newScore = 3;
    }
    setScore(newScore);
  };

  return (
    <div>
      <QuestionnaireComponent onSubmit={calculateScore} />
      <DashboardComponent score={score} />
    </div>
  );
};

export default App;
