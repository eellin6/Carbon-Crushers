import * as React from 'react';
import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const homePage = () => {
  const [ name, setName ] = useState('');

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };

  return (
    <div>
      <h1>Welcome to the HomePage</h1>
      <h2>YOUR STATS</h2>
      <div className="doughnut-chart-container">
        <Doughnut data={data} />
      </div>
    </div>
  );
};



export default homePage;