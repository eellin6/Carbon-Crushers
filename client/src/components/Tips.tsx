
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import TipsData from '../models/TipsData';
import tipsData from '../../src/tips_data';

const Tips = (): React.ReactElement => {
  // const [ name, setName ] = useState('');
  const [ stats, setStats ] = useState('');
  const [ weakestStat, setWeakestStat ] = useState('');
  const [ tip, setTip ] = useState('');

  // useEffect (() => {
  //   // get user stats
  //   axios.get<AxiosResponse>('/statsData')
  //     .then(({ data }: AxiosResponse) => {
  //       const recent = data[data.length - 1];
  //       setStats(recent);
  //       console.info(stats);
  //     })
  //     // .then(() => {
  //     //   console.info([stats]);
  //     // })
  //     .catch((err) => console.warn(err));

  //   // find weakest stat
  //   // setStat to weakest stat

  // }, []);
  // findWeakestStat();

  const getTip = (): void => {
    // findWeakestStat()
    // .then((data) => {
    //   console.log(data);
    // })
    // get all tips where stat is weakestStat

    // select random tip

    // setTip to new tip
  };

  return (
    <div className='page-wrap'>
      {/* <h2>Looks like you could use some help with {stats} </h2> */}
      <h2>Looks like you could use some help with </h2>
      {/* <p>{tip}</p> */}
    </div>
  );

};

export default Tips;
