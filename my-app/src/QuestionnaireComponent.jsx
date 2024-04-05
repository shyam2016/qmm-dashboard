// QuestionnaireComponent.jsx
import React, { useState } from 'react';
import './QuestionnaireComponent.css'; 
const QuestionnaireComponent = ({ onSubmit }) => {
  const [testAutomation, setTestAutomation] = useState({
    unitTest: false,
    smokeTest: false,
    acceptanceTest: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setTestAutomation({ ...testAutomation, [name]: checked });
  };

  const handleSubmit = () => {
    onSubmit(testAutomation);
  };

  return (
    <div className="questionnaire-container">
      <h2>Test Automation Questionnaire</h2>
      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            name="unitTest"
            checked={testAutomation.unitTest}
            onChange={handleCheckboxChange}
          />
          Unit Test
        </label>
      </div>
      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            name="smokeTest"
            checked={testAutomation.smokeTest}
            onChange={handleCheckboxChange}
          />
          Smoke Test
        </label>
      </div>
      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            name="acceptanceTest"
            checked={testAutomation.acceptanceTest}
            onChange={handleCheckboxChange}
          />
          Acceptance Test
        </label>
      </div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuestionnaireComponent;
