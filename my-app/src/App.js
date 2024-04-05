// App.js
import React, { useState } from 'react';
import QuestionnaireComponent from './QuestionnaireComponent';
import DashboardComponent from './DashboardComponent';

const App = () => {
  const [scores, setScores] = useState({}); // State to hold quality maturity scores

  // Function to calculate scores based on questionnaire responses
  const calculateScores = (responses) => {
    // Calculate scores based on responses
    // This is where you would implement your logic to calculate scores
    // and update the 'scores' state
    const calculatedScores = {
      low: 20,
      medium: 50,
      high: 30,
    };
    setScores(calculatedScores);
  };

  return (
    <div>
      {/* Render the QuestionnaireComponent */}
      <QuestionnaireComponent onSubmit={calculateScores} />

      {/* Render the DashboardComponent with calculated scores */}
      {Object.keys(scores).length > 0 && <DashboardComponent scores={scores} />}
    </div>
  );
};

export default App;
