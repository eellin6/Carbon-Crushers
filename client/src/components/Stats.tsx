import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Mileage from './Stat Entries/Mileage'
import Recycling from './Stat Entries/Recycling'
import Water from './Stat Entries/Water'
import Energy from './Stat Entries/Energy'

import Meat_Dine from './Stat Entries/Meat_Dine'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
interface AppState {
  wash?: any;
  dish?: any;
  ac?: any;
  screen?: any;
  meat?: any;
  dine?: any;
  miles?: any;
  func?: any;
}

export default function Stats (props: AppState){
  const [miles, setMiles] = useState(1);
  const handleChange = (event, newValue) => {
    setMiles(newValue);

  };
  const [bottles, setBottles] = useState(1);

  const bottleChange = (event, newValue) => {
    setBottles(newValue);

  };

  const [meatCount, setMeatCount] = useState(0);
  const [dineCount, setDineCount] = useState(0);
  const handleMeatIncrement = () => {
    setMeatCount(meatCount + 1)
      };

  const handleMeatDecrement = () => {
    setMeatCount(meatCount - 1)
      };
  const handleDineIncrement = () => {
    setDineCount(dineCount + 1)
      };

  const handleDineDecrement = () => {
     setDineCount(dineCount - 1)
      };
      const [dishCount, setDishCount] = useState(0);
      const [washCount, setWashCount] = useState(0);
      const handleDishIncrement = () => {
        setDishCount(dishCount + 1)
          };

      const handleDishDecrement = () => {
            setDishCount(dishCount - 1)
          };
      const handleWashIncrement = () => {
            setWashCount(washCount + 1)
              };

      const handleWashDecrement = () => {
                setWashCount(washCount - 1)
              };
              const [dishECount, setDishECount] = useState(0);
              const [washECount, setWashECount] = useState(0);
              const [acHeatCount, setAcHeatCount] = useState(0);
              const [screenCount, setScreenCount] = useState(0);
              const handleDishEIncrement = () => {
                setDishECount(dishECount + 1)
                  };

                  const handleDishEDecrement = () => {
                    setDishECount(dishECount - 1)
                  };
                  const handleScreenIncrement = () => {
                    setScreenCount(screenCount + 1)
                      };

                      const handleScreenDecrement = () => {
                        setScreenCount(screenCount - 1)
                      };
                  const handleACIncrement = () => {
                    setAcHeatCount(acHeatCount + 1)
                      };

                      const handleACDecrement = () => {
                        setAcHeatCount(acHeatCount - 1)
                      };
                  const handleWashEIncrement = () => {
                    setWashECount(washECount + 1)
                      };

                      const handleWashEDecrement = () => {
                        setWashECount(washECount - 1)
                      };
    const mileageAlg = (mile) => {
      let num = 200 - mile;
      let total = 0;
      if(num < 0){
        total = (num / 10) * 1
      }
      if(num > 0){
        total = (num / 10) * 1
      }
      return total;
    }
    const meat_dineAlg = (dine, meat) => {
let dineTotal = 0;
let meatTotal = 0;
let dineNum = 4 - dine;
let meatNum = 4 - meat;
dineTotal = dineNum * 2
meatTotal = meatNum * 2

return dineTotal + meatTotal;

    }
    const waterAlg = (dishes, washing) => {
let dishTotal = 0;
let washTotal = 0;
let dishNum = 3 - dishes;
let washNum = 4 - washing;
dishTotal = dishNum * 5;
washTotal = washNum * 5;

return dishTotal + washTotal;
    }
    const energyAlg = (dishes, washing, acHeat, screenTime) => {
      let dishTotal = 0;
      let washTotal = 0;
      let screenTotal = 0;
      let acTotal = 0;
      let dishNum = 3 - dishes;
      let washNum = 4 - washing;
      let screenNum = 20 - screenTime;
      let acNum = 40 - acHeat;
      dishTotal = dishNum * 5;
      washTotal = washNum * 5;
      screenTotal = screenNum * 2
      acTotal = acNum * 4

      return dishTotal + washTotal + acTotal + screenTotal

    }
    const submit = () => {

const mileTotal = mileageAlg(miles)
const meatDineTotal = meat_dineAlg(dineCount, meatCount)
const waterTotal = waterAlg(dishCount, washCount)
const energyTotal = energyAlg(dishECount, washECount, acHeatCount, screenCount)
const final = (mileTotal + meatDineTotal + waterTotal + bottles + energyTotal) * 2
//console.info(final)
const data = {
  meat_dine: meatDineTotal,
  energy: energyTotal,
  water: waterTotal,
  recycling: bottles,
  mileage: mileTotal,
  total: final,
}
axios.post('/statsData', data)
.then((stuff) => {
console.info(stuff)
})
.catch((err: string) => {console.warn(err)})
setMiles(0);
setBottles(0);
setAcHeatCount(0);
setDineCount(0);
setDishCount(0);
setDishECount(0);
setMeatCount(0);
setScreenCount(0);
setWashCount(0);
setWashECount(0)
  }
  return (
    <div className='page-wrap'>
      <h1>Log your weekly stats</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Mileage</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Mileage miles={miles} func={handleChange} />

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography >Recycling</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <Recycling miles={bottles} func={bottleChange}/>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography >Energy</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <Energy ac={acHeatCount} screen={screenCount} wash={washECount} dish={dishECount} func={[handleDishEIncrement, handleDishEDecrement, handleWashEIncrement, handleWashEDecrement, handleScreenIncrement, handleScreenDecrement, handleACIncrement, handleACDecrement]}/>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography >Water</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <Water wash={washCount} dish={dishCount} func={[handleDishDecrement, handleDishIncrement, handleWashIncrement, handleWashDecrement]}/>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography >Meat and Dining out</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <Meat_Dine meat={meatCount} dine={dineCount} func={[handleMeatDecrement, handleMeatIncrement, handleDineIncrement, handleDineDecrement]}/>
        </AccordionDetails>
      </Accordion>
      <h1></h1>
      <button onClick={submit}>Submit</button>


    </div>
  )
}