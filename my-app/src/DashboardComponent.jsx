// DashboardComponent.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

const DashboardComponent = ({ score }) => {
  // Calculate percentage
  const percentage = (score / 3) * 100; // Assuming maximum score is 3

  // Define colors based on percentage
  let color;
  if (percentage >= 75) {
    color = 'green';
  } else if (percentage >= 50) {
    color = 'yellow';
  } else {
    color = 'red';
  }

  // Data for the chart
  const data = {
    labels: ['Score'],
    datasets: [
      {
        label: 'Score',
        backgroundColor: color,
        data: [score],
      },
    ],
  };

  return (
    <div>
      <h2>Quality Maturity Dashboard</h2>
      <Bar data={data} />
    </div>
  );
};

export default DashboardComponent;
