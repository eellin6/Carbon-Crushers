import * as React from 'react';
import { Slider } from '@material-ui/core';
const Recycling = ({miles, func}): React.ReactElement => {
  const bottles = miles;
  const bottleChange = func;

  return (
    <div>
      <h2>How many bottles did you recycle this week?</h2>
      <div> <Slider className="slider"
        max={ 100 }
        step={ 10 }
        value={bottles}
        onChange={bottleChange}
        valueLabelDisplay="auto"
      /></div>
      <h4> 330 lbs. of CO2
 offset per 1 ton of glass recycled. Earn 2 points per glass bottle recycled</h4>

    </div>
  );
};

export default Recycling;
