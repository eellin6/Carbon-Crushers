import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import dataTest from '../sample_dataTest';
import meatData from '../sample_meat';
// import recycling from '../sample_recycling';

const homePage = () => {
  const [ name, setName ] = useState('');
  const [ recyclingStats, setRecyclingStats ] = useState(0);
  const [ waterStats, setWaterStats ] = useState(0);
  const [ meatStats, setMeatStats ] = useState(0);
  const [ mileageStats, setMileageStats ] = useState(0);
  const [ energyStats, setEnergyStats ] = useState(0);

  const statistics = () => {
    axios.get('/statsData')
    .then(({ data }) => {
      setRecyclingStats(data[0].recycling);
      setWaterStats(data[0].water);
      setMeatStats(data[0].meat_dine);
      setMileageStats(data[0].mileage);
      setEnergyStats(data[0].energy);
    })
    .catch((err) => console.warn('Stat Error', err));
  };


  useEffect(() => {
    axios.get('/user')
    .then(({ data }) => {
      let { name } = data;
      setName(name.split(' ')[0]);
    // console.log('HERE IS USER DATA ON HOMEPAGE', data);
    })
    .catch((err) => console.warn(err));

    statistics();
  },[]);


  const score = recyclingStats + waterStats + meatStats + mileageStats + energyStats;

  const data = {
    datasets: [
      {
        text: "Your Stats",
        label: "First dataset",
        data: [recyclingStats, waterStats, meatStats, mileageStats, energyStats],
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
        <div><i>Weekly Score: { score }</i></div>
        <Doughnut data={data} />
      </div>
    </div>
  );
};



export default homePage;