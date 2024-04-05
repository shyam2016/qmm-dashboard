// DashboardComponent.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DashboardComponent = ({ scores }) => {
  const canvasRef = useRef(null);
  let myChart;

  useEffect(() => {
    // Ensure previous chart instance is destroyed before rendering a new one
    if (myChart) {
      myChart.destroy();
    }

    // Render new chart
    const ctx = canvasRef.current.getContext('2d');
    myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Low Quality', 'Medium Quality', 'High Quality'],
        datasets: [
          {
            data: [scores.low, scores.medium, scores.high],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      },
    });

    // Clean up chart instance on component unmount
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [scores]);

  return (
    <div>
      <h2>Quality Maturity Dashboard</h2>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default DashboardComponent;
