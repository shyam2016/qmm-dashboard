// DashboardComponent.jsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const DashboardComponent = ({ surveyResponses }) => {
  const [chartKey, setChartKey] = useState(0); // Key to force re-rendering of the chart

  useEffect(() => {
    // Update the chart key whenever surveyResponses change
    setChartKey(prevKey => prevKey + 1);
  }, [surveyResponses]);

  // Calculate total number of responses for each category
  const testAutomationResponses = Object.values(surveyResponses.testAutomation).filter(value => value).length;
  const monitoringResponses = Object.values(surveyResponses.monitoring).filter(value => value).length;

  // Calculate percentages for each category
  const testAutomationPercentage = (testAutomationResponses / 3) * 100; // Assuming 3 questions for test automation
  const monitoringPercentage = (monitoringResponses / 3) * 100; // Assuming 3 questions for monitoring

  // Determine color based on percentage
  const getColor = (percentage) => {
    if (percentage >= 100) {
      return 'green';
    } else if (percentage >= 75) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  // Data for the chart
  const data = {
    labels: ['Test Automation', 'Monitoring'],
    datasets: [
      {
        label: 'Responses',
        backgroundColor: [
          getColor(testAutomationPercentage),
          getColor(monitoringPercentage),
        ],
        data: [testAutomationPercentage, monitoringPercentage],
      },
    ],
  };

  return (
    <div>
      <h2>Survey Results</h2>
      <Bar
        key={chartKey} // Key prop to force re-rendering of the chart
        data={data}
        options={{
         scales: {
           y: {
             type: 'linear', // Use linear scale for the y-axis
              beginAtZero: true,
              max: 100,
              ticks: {
                stepSize: 25,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default DashboardComponent;
