// ParentComponent.jsx
import React, { useState } from 'react';
import QuestionnaireComponent from './QuestionnaireComponent';
import DashboardComponent from './DashboardComponent';

const ParentComponent = () => {
  const [surveyResponses, setSurveyResponses] = useState(null);

  const handleSurveySubmit = (responses) => {
    setSurveyResponses(responses);
  };

  return (
    <div>
      <h2>Application Quality Maturity Model Dashboard</h2>
      {!surveyResponses ? (
        <QuestionnaireComponent onSubmit={handleSurveySubmit} />
      ) : (
        <DashboardComponent surveyResponses={surveyResponses} />
      )}
    </div>
  );
};

export default ParentComponent;
