// QuestionnaireComponent.jsx
import React, { useState } from 'react';

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
    let score = 0;
    if (testAutomation.unitTest) score += 1;
    if (testAutomation.smokeTest) score += 1;
    if (testAutomation.acceptanceTest) score += 1;
    onSubmit(score);
  };

  return (
    <div>
      <h2>Test Automation Questionnaire</h2>
      <div>
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
      <div>
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
      <div>
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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuestionnaireComponent;
