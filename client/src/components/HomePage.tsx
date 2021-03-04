import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const homePage = () => {
  const [ name, setName ] = useState('');

  const data = {
    datasets: [
      {
        text: "Your Stats",
        label: "First dataset",
        data: [33, 53, 85, 41, 44],
        fill: true,
        backgroundColor: [
          "#55BFBF",
          "#3EA4E8",
          "#FA6685",
          "#FC9E4B",
          "#FDCB60"
        ],
        borderColor: [
          "#FFF"
          // "#55BFBF",
          // "#3EA4E8",
          // "#FA6685",
          // "#FC9E4B",
          // "#FDCB60"
        ],
      }
    ],
    labels: ["Recycling", "Water Consumption", "Meat & Dining Out", "Mileage", "Energy"]
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