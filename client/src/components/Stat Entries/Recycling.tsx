import * as React from 'react';
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Recycling = ({miles, func}): React.ReactElement => {
  const bottles = miles;
  const bottleChange = func;

  const useStyles = makeStyles((theme) => ({
    root: {
      color: '#55bfbf'
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <h2>How many bottles did you recycle this week?</h2>
      <div> <Slider className={classes.root}
        max={ 100 }
        step={ 10 }
        value={bottles}
        onChange={bottleChange}
        valueLabelDisplay="auto"
      /></div>
      <h4> 330 lbs. of CO<sub>2</sub> offset per 1 ton of glass recycled. </h4>

    </div>
  );
};

export default Recycling;
