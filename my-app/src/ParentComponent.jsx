// ParentComponent.jsx
import React, { useState } from 'react';
import QuestionnaireComponent from './QuestionnaireComponent';
import DashboardComponent from './DashboardComponent';

const ParentComponent = () => {
    const [selectedApplication, setSelectedApplication] = useState('');
  const [surveyResponses, setSurveyResponses] = useState(null);

  const handleSurveySubmit = (application,responses) => {
    setSelectedApplication(application);
    setSurveyResponses(responses);
  };

  const handleBackButtonClick = () => {
    setSurveyResponses(null); // Reset survey responses to navigate back to QuestionnaireComponent
  };

  return (
    <div>
      <h2>Application Quality Maturity Model Dashboard</h2>
      {!surveyResponses ? (
        <QuestionnaireComponent onSubmit={handleSurveySubmit} />
      ) : (
        <DashboardComponent
        selectedApplication={selectedApplication}
        surveyResponses={surveyResponses}
        onBackButtonClick={handleBackButtonClick}
      />
      )}
    </div>
  );
};

export default ParentComponent;
