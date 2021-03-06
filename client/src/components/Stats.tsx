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


export default function Stats (){

  return (
    <div>
      <h1>Log your weekly stats</h1>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Mileage</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Mileage/>

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

          <Recycling/>
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

          <Energy/>
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

          <Water/>
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

          <Meat_Dine/>
        </AccordionDetails>
      </Accordion> */}


    </div>
  )
}