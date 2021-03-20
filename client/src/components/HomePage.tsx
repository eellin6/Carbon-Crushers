import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { draw } from 'patternomaly';
import Badges from './Badges';

const homePage = (): React.ReactElement => {
  const [ name, setName ] = useState('');
  const [ recyclingStats, setRecyclingStats ] = useState(0);
  const [ waterStats, setWaterStats ] = useState(0);
  const [ meatStats, setMeatStats ] = useState(0);
  const [ mileageStats, setMileageStats ] = useState(0);
  const [ energyStats, setEnergyStats ] = useState(0);
  const [ colorVision, setColorVision ] = useState('none');

  const statistics = (): void => {
    axios.get('/statsData')
      .then(({ data }) => {
        const recent = data[data.length - 1];
        setRecyclingStats(recent.recycling);
        setWaterStats(recent.water);
        setMeatStats(recent.meat_dine);
        setMileageStats(recent.mileage);
        setEnergyStats(recent.energy);
      })
      .catch((err) => console.warn('Stat Error', err));
  };

  useEffect(() => {
    axios.get('/user')
      .then(({ data }) => {
        const { name, vision }: { name: string, vision: string } = data;
        setName(name.split(' ')[0]);
        setColorVision(vision);
      })
      .catch((err) => console.warn(err));
    statistics();
  }, []);

  const score = recyclingStats + waterStats + meatStats + mileageStats + energyStats;

  const colorsOrPatterns = (vision: string): any => {
    if (vision === 'none') {
      return [
        '#55BFBF',
        '#3EA4E8',
        '#FA6685',
        '#FC9E4B',
        '#FDCB60'
      ];
    } else {
      return [
        draw('plus', '#55BFBF'),
        draw('ring', '#3EA4E8'),
        '#FA6685',
        draw('line', '#FC9E4B'),
        draw('weave', '#FDCB60')
      ];
    }
  };

  const data = {
    datasets: [
      {
        text: 'Your Stats',
        label: 'First dataset',
        data: [recyclingStats, waterStats, meatStats, mileageStats, energyStats],
        fill: true,
        backgroundColor: colorsOrPatterns(colorVision),
        borderColor: ['#FFF'],
      }
    ],
    labels: ['Recycling', 'Water Consumption', 'Meat & Dining Out', 'Mileage', 'Energy'],
    options: {
      maintainAspectRatio: false
    }
  };

  return (
    <div className='page-wrap'>
      <h1>Welcome, {name}</h1>
      <h2><i>Here's your Stats</i></h2>
      <div>
        <div className='score'>Weekly Score: {score}</div>
        <div className="doughnut-chart-container">
          <div className='doughnut-middle'>
            <Doughnut data={data} />
          </div>
        </div>
      </div>
      <div>
        <Badges />
      </div>
    </div>
  );
};



export default homePage;
