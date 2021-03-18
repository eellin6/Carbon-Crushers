/*eslint global-require: "error"*/
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Mileage from './Stat Entries/Mileage';
import Recycling from './Stat Entries/Recycling';
import Energy from './Stat Entries/Energy';

import Meat_Dine from './Stat Entries/Meat_Dine';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tips from './Tips';
import Weather from './Weather';
import Bottles from './Bottles';
interface AppState {
  wash?: number;
  dish?: number;
  screen?: number;
  meat?: number;
  dine?: number;
  miles?: number;
  degrees?: number;
  handleThermostat?: () => void;
  func?: () => void;
  func2?: () => void;
}

const Stats = (props: AppState): React.ReactElement => {
  const [miles, setMiles] = useState(1);
  const handleChange = (event, newValue): void => {
    setMiles(newValue);
  };

  const [idealSetting, setIdealSetting] = useState(68);
  const getIdealTemp = (outsideTemp: number): void => {
    if (outsideTemp > 78) {
      setIdealSetting(78);
    } else if (outsideTemp < 78 && outsideTemp > 70) {
      setIdealSetting(74);
    } else {
      setIdealSetting(68);
    }
  };

  const [degrees, setDegrees] = useState(60);
  const handleThermostat = (event, newValue): void => {
    setDegrees(newValue);
    getIdealTemp(newValue);
  };

  const [bottles, setBottles] = useState(1);
  const bottleChange = (event, newValue): void => {
    setBottles(newValue);
  };

  const [meatCount, setMeatCount] = useState(0);
  const [dineCount, setDineCount] = useState(0);

  const handleMeatIncrement = (): void => {
    setMeatCount(meatCount + 1);
  };

  const handleMeatDecrement = (): void => {
    setMeatCount(meatCount - 1);
  };

  const handleDineIncrement = (): void => {
    setDineCount(dineCount + 1);
  };

  const handleDineDecrement = (): void => {
    setDineCount(dineCount - 1);
  };

  const [dishCount, setDishCount] = useState(0);
  const [washCount, setWashCount] = useState(0);
  const handleDishIncrement = (): void => {
    setDishCount(dishCount + 1);
  };

  const handleDishDecrement = (): void => {
    setDishCount(dishCount - 1);
  };
  const handleWashIncrement = (): void => {
    setWashCount(washCount + 1);
  };

  const handleWashDecrement = (): void => {
    setWashCount(washCount - 1);
  };
  const [dishECount, setDishECount] = useState(0);
  const [washECount, setWashECount] = useState(0);
  const [screenCount, setScreenCount] = useState(0);

  const [tensor, setTensor] = useState(false);
  const handleTensor = (): void => {
    setTensor(true);
  };

  const handleDishEIncrement = (): void => {
    setDishECount(dishECount + 1);
  };

  const handleDishEDecrement = (): void => {
    setDishECount(dishECount - 1);
  };
  const handleScreenIncrement = (): void => {
    setScreenCount(screenCount + 1);
  };

  const handleScreenDecrement = (): void => {
    setScreenCount(screenCount - 1);
  };

  const handleWashEIncrement = (): void => {
    setWashECount(washECount + 1);
  };

  const handleWashEDecrement = (): void => {
    setWashECount(washECount - 1);
  };

  const mileageAlg = (mile): number => {
    const num = 200 - mile;
    let total = 0;
    if (num < 0) {
      total = (num / 10) * 2;
    }
    if (num > 0) {
      total = (num / 10) * 2;
    }
    return total;
  };

  const meat_dineAlg = (dine, meat): number => {
    let dineTotal = 0;
    let meatTotal = 0;
    const dineNum = 4 - dine;
    const meatNum = 4 - meat;
    dineTotal = dineNum * 2;
    meatTotal = meatNum * 2;

    return dineTotal + meatTotal;
  };

  const waterAlg = (dishes, washing): number => {
    let dishTotal = 0;
    let washTotal = 0;
    const dishNum = 3 - dishes;
    const washNum = 4 - washing;
    dishTotal = dishNum * 5;
    washTotal = washNum * 5;

    return dishTotal + washTotal;
  };

  const acHeatAlg = (thermostatSetting: number): number => {
    let acHeatDifference = 0;
    if (thermostatSetting === 60) {
      acHeatDifference = 5;
    } else if (idealSetting === 78) {
      acHeatDifference += (thermostatSetting - idealSetting);
    } else if (idealSetting === 68) {
      acHeatDifference += (idealSetting - thermostatSetting);
    } else if (idealSetting === 74) {
      if (thermostatSetting >= 74) {
        acHeatDifference = idealSetting - thermostatSetting;
      } else {
        acHeatDifference = thermostatSetting - idealSetting;
      }
    } return acHeatDifference;
  };

  const energyAlg = (dishes, washing, acHeat, screenTime): number => {
    let dishTotal = 0;
    let washTotal = 0;
    let screenTotal = 0;
    let acTotal = 0;
    const dishNum = 3 - dishes;
    const washNum = 4 - washing;
    const screenNum = 20 - screenTime;
    dishTotal = dishNum * 5;
    washTotal = washNum * 5;
    screenTotal = screenNum * 1;
    acTotal = acHeat * 3;

    console.info('acTotal alg * 3', acTotal);
    return dishTotal + washTotal + acTotal + screenTotal;
  };

  const submit = (): void => {
    console.info('degrees submitted', degrees);
    console.info('this is tensor', tensor);

    const mileTotal = mileageAlg(miles);
    const meatDineTotal = meat_dineAlg(dineCount, meatCount);
    const waterTotal = waterAlg(dishECount, washECount);
    const energyTotal = energyAlg(dishECount, washECount, acHeatAlg(degrees), screenCount);

    let bottleTotal = 0;
    if (tensor === true) {
      bottleTotal = bottles * 1.5;
    } else {
      bottleTotal = bottles * 1;
    }
    console.info('bottleTotal', bottleTotal);

    const final = (mileTotal + meatDineTotal + waterTotal + bottleTotal + energyTotal);
    console.info('final', final);

    const data = {
      meat_dine: meatDineTotal,
      energy: energyTotal,
      water: waterTotal,
      recycling: bottleTotal,
      mileage: mileTotal,
      total: final,
    };
    axios.post('/statsData', data)
      .then((stuff) => {
        console.info(stuff);
      })
      .catch((err: string) => { console.warn(err); });
    setMiles(0);
    setBottles(0);
    setDineCount(0);
    setDishCount(0);
    setDishECount(0);
    setMeatCount(0);
    setScreenCount(0);
    setWashCount(0);
    setWashECount(0);
    setDegrees(60);
    setIdealSetting(68);
    setTensor(false);
  };

  const checkDate = (): void => {
    const date = new Date();
    if (date.getDay() === 7 && date.getHours() === 24) {
      submit();
    }
  };

  const dateLoop = setInterval(() => {
    checkDate();
  }, 60000);

  return (
    <div className='page-wrap'>
      <h1>Log your weekly stats</h1>
      <Tips />
      <Accordion className='stats'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography >Mileage</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Mileage miles={miles} func={handleChange} />
        </AccordionDetails>
      </Accordion>

      <Accordion className='stats'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography >Recycling</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Recycling miles={bottles} func={bottleChange}/>
        </AccordionDetails>
        <div className='recycling-wrap'>
          <Bottles func2={handleTensor}/>
        </div>
      </Accordion>

      <Accordion className='stats' >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <Typography >Energy and Water</Typography>
        </AccordionSummary>
        <div className='weather-wrap'>
          <Weather />
        </div>
        <AccordionDetails>
          <Energy screen={screenCount} wash={washECount} dish={dishECount} degrees={degrees} handleThermostat={handleThermostat} func={[handleDishEIncrement, handleDishEDecrement, handleWashEIncrement, handleWashEDecrement, handleScreenIncrement, handleScreenDecrement]}/>
        </AccordionDetails>
      </Accordion>



      <Accordion className='stats' >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <Typography >Meat and Dining out</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Meat_Dine meat={meatCount} dine={dineCount} func={[handleMeatDecrement, handleMeatIncrement, handleDineIncrement, handleDineDecrement]}/>
        </AccordionDetails>
      </Accordion>

      <h1></h1>
      <button className='btn' onClick={submit}>Submit</button>
    </div>
  );
};

export default Stats;
