// QuestionnaireComponent.jsx
import React, { useState } from 'react';
import './QuestionnaireComponent.css'; // Import CSS file for styling

const QuestionnaireComponent = ({ onSubmit }) => {
  const [selectedApplication, setSelectedApplication] = useState('');
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
    numberOfBranches: '', // New category for number of Git branches
  });

  const handleApplicationChange = (event) => {
    setSelectedApplication(event.target.value);
  };

  const handleCheckboxChange = (event, category) => {
    const { name, checked } = event.target;
    setSurveyResponses(prevState => ({
      ...prevState,
      [category]: { ...prevState[category], [name]: checked },
    }));
  };

  const handleDropdownChange = (event) => {
    const { value } = event.target;
    setSurveyResponses(prevState => ({
      ...prevState,
      numberOfBranches: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(selectedApplication, surveyResponses);
  };

  return (
    <div className="questionnaire-container">
      <h2>Questionnaire</h2>
      <div className="application-dropdown">
      <select value={selectedApplication} onChange={handleApplicationChange}>
        <option value="">Select Application</option>
        <option value="Application 1">Application 1</option>
        <option value="Application 2">Application 2</option>
        <option value="Application 3">Application 3</option>
      </select>
    </div>
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
        <div className="category">
        <h3>Number of Git Branches</h3>
        <select value={surveyResponses.numberOfBranches} onChange={handleDropdownChange}>
          <option value="">Select</option>
          <option value="lessThan5">Less than 5</option>
          <option value="lessThan10">Less than 10</option>
          <option value="greaterThan10">Greater than 10</option>
        </select>
      </div>
      </div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuestionnaireComponent;
