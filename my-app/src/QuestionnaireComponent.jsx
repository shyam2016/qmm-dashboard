// QuestionnaireComponent.jsx
import React, { useState } from 'react';
import './QuestionnaireComponent.css'; // Import CSS file for styling

const QuestionnaireComponent = ({ onSubmit }) => {
  const [surveyResponses, setSurveyResponses] = useState({
    testAutomation: {
      unitTest: false,
      smokeTest: false,
      acceptanceTest: false,
    },
    monitoring: {
      syntheticMonitoring: false,
      analyticsMonitoring: false,
      glassBoxMonitoring: false,
    },
  });

  const handleCheckboxChange = (event, category) => {
    const { name, checked } = event.target;
    setSurveyResponses(prevState => ({
      ...prevState,
      [category]: { ...prevState[category], [name]: checked },
    }));
  };

  const handleSubmit = () => {
    onSubmit(surveyResponses);
  };

  return (
    <div className="questionnaire-container">
      <h2>Questionnaire</h2>
      <div className="category">
        <h3>Test Automation</h3>
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              name="unitTest"
              checked={surveyResponses.testAutomation.unitTest}
              onChange={(event) => handleCheckboxChange(event, 'testAutomation')}
            />
            Unit Test
          </label>
        </div>
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              name="smokeTest"
              checked={surveyResponses.testAutomation.smokeTest}
              onChange={(event) => handleCheckboxChange(event, 'testAutomation')}
            />
            Smoke Test
          </label>
        </div>
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              name="acceptanceTest"
              checked={surveyResponses.testAutomation.acceptanceTest}
              onChange={(event) => handleCheckboxChange(event, 'testAutomation')}
            />
            Acceptance Test
          </label>
        </div>
      </div>
      <div className="category">
        <h3>Monitoring</h3>
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              name="syntheticMonitoring"
              checked={surveyResponses.monitoring.syntheticMonitoring}
              onChange={(event) => handleCheckboxChange(event, 'monitoring')}
            />
            Synthetic Monitoring
          </label>
        </div>
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              name="analyticsMonitoring"
              checked={surveyResponses.monitoring.analyticsMonitoring}
              onChange={(event) => handleCheckboxChange(event, 'monitoring')}
            />
            Analytics Monitoring
          </label>
        </div>
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              name="glassBoxMonitoring"
              checked={surveyResponses.monitoring.glassBoxMonitoring}
              onChange={(event) => handleCheckboxChange(event, 'monitoring')}
            />
            GlassBox Monitoring
          </label>
        </div>
      </div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuestionnaireComponent;
