import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import recycling from '../sample_recycling';
import waterYearToDate from '../sample_water';
import meatData from '../sample_meat';
import mileage from '../sample_mileage';
import energy from '../sample_energy';
import { draw } from 'patternomaly';
import GraphData from '../models/GraphData';

const Graphs = () => {
  const [ name, setName ] = useState('');
  const [ colorVision, setColorVision ] = useState('none');
  useEffect(() => {
    axios.get('/user')
      .then(({ data }) => {
        const { name, vision } = data;
        setName(name.split(' ')[0]);
        setColorVision(vision);
      })
      .catch((err) => console.warn(err));
  }, []);

  //Score Functions
  const RecycleScoreFunc = () => {
    let result = 0;
    let avg = 0;
    const stats = Object.values(recycling);
    stats.forEach((score) => {
      result += score;
      avg = result / stats.length;
    });
    return Math.floor(avg);

  };

  const WaterScoreFunc = () => {
    let result = 0;
    let avg = 0;
    const stats = Object.values(waterYearToDate);
    stats.forEach((score) => {
      result += score;
      avg = result / stats.length;
    });
    return Math.floor(avg);
  };

  const MeatScoreFunc = () => {
    let result = 0;
    let avg = 0;
    const stats = Object.values(meatData);
    stats.forEach((score) => {
      result += score;
      avg = result / stats.length;
    });
    return Math.floor(avg);
  };

  const mileageFunc = () => {
    let result = 0;
    let avg = 0;
    const stats = Object.values(mileage);
    stats.forEach((score) => {
      result += score;
      avg = result / stats.length;
    });
    return Math.floor(avg);
  };

  const energyFunc = () => {
    let result = 0;
    let avg = 0;
    const stats = Object.values(energy);
    stats.forEach((score) => {
      result += score;
      avg = result / stats.length;
    });
    return Math.floor(avg);
  };

  // Recycling Graph Data
  const dataRec: GraphData = {
    datasets: [
      {
        text: 'Your Stats',
        label: 'Recycling - Number Of Bottles Saved',
        data: Object.values(recycling),
        fill: true,
        backgroundColor: ['#55BFBF'],
        borderColor: ['#55BFBF'],
      }
    ],
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8']
  };
  if (colorVision !== 'none') {
    dataRec.datasets[0].backgroundColor = draw('plus', '#55BFBF');
  }

  // Water Graph Data
  const dataWater: GraphData = {
    datasets: [
      {
        text: 'Your Stats',
        label: 'Water Consumption',
        data: Object.values(waterYearToDate),
        fill: true,
        backgroundColor: ['#3EA4E8'],
        borderColor: ['#3EA4E8'],
      }
    ],
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8']
  };
  if (colorVision !== 'none') {
    dataWater.datasets[0].backgroundColor = draw('ring', '#3EA4E8');
  }

  // Meat Dine Out Graph Data
  const dataMeat: GraphData = {
    datasets: [
      {
        text: 'Your Stats',
        label: 'Meat Consumption and Dining Out',
        data: Object.values(meatData),
        fill: true,
        backgroundColor: ['#FA6685'],
        borderColor: ['#FA6685'],
      }
    ],
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8']
  };

  // Mileage Graph Data
  const dataMileage: GraphData = {
    datasets: [
      {
        text: 'Your Stats',
        label: 'Mileage Stats',
        data: Object.values(mileage),
        fill: true,
        backgroundColor: ['#FC9E4B'],
        borderColor: ['#FC9E4B'],
      }
    ],
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8']
  };
  if (colorVision !== 'none') {
    dataMileage.datasets[0].backgroundColor = draw('line', '#FC9E4B');
  }

  // Energy Graph Data
  const dataEnergy: GraphData = {
    datasets: [
      {
        text: 'Your Stats',
        label: 'Energy Stats',
        data: Object.values(energy),
        fill: true,
        backgroundColor: ['#FDCB60'],
        borderColor: ['#FDCB60'],
      }
    ],
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8']
  };
  if (colorVision !== 'none') {
    dataEnergy.datasets[0].backgroundColor = draw('weave', '#FDCB60');
  }

  return (
    <div className='page-wrap'>
      <h1> Individual Stats Breakdown</h1>
      <h2><i>{name}'s Accumulated Stats</i></h2>
      <div className='chart-container'>
        <div className='score'>Average Weekly Bottles Recycled: { RecycleScoreFunc() }</div>
        <Line data={dataRec} />
        <h2>Water Consumption</h2>
        <div className='score'>Average Weekly Score: { WaterScoreFunc() }</div>
        <Line data={dataWater} />
        <h2>Dining Out and Meat Consumption</h2>
        <div className='score'>Average Weekly Score: { MeatScoreFunc() }</div>
        <Line data={dataMeat} />
        <h2>Mileage Stats</h2>
        <div className='score'>Average Weekly Score: { mileageFunc() }</div>
        <Line data={dataMileage} />
        <h2>Energy Stats</h2>
        <div className='score'>Average Weekly Score: { energyFunc() }</div>
        <Line data={dataEnergy} />
      </div>
    </div>
  );
};
export default Graphs;
