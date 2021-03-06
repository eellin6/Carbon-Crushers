import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import dataTest from '../sample_dataTest';
// import recycling from '../sample_recycling';

const homePage = () => {
  const [ name, setName ] = useState('');

  useEffect(() => {
    axios.get('/user')
    .then(({ data }) => {
      let { name } = data;
      setName(name.split(' ')[0]);
    // console.log('HERE IS DATA', data);
    })
    .catch((err) => console.warn(err));
  },[]);

  const score = dataTest[0].Recycling + dataTest[0].WaterConsumption + dataTest[0].MeatAndDiningOut + dataTest[0].Mileage + dataTest[0].Energy;

  const data = {
    datasets: [
      {
        text: "Your Stats",
        label: "First dataset",
        data: [dataTest[0].Recycling, dataTest[0].WaterConsumption, dataTest[0].MeatAndDiningOut, dataTest[0].Mileage, dataTest[0].Energy],
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
      <h1>Welcome, {name}</h1>
      <h2><i>Here's your Stats</i></h2>
      <div className="doughnut-chart-container">
        <Doughnut data={data} />
        <div>{ score }</div>
      </div>
    </div>
  );
};



export default homePage;