
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import TipsData from '../models/TipsData';
import tipsData from '../../src/tips_data';

const Tips = (): React.ReactElement => {
  // const [ stats, setStats ] = useState('');
  const [ weakestStat, setWeakestStat ] = useState('');
  const [ tip, setTip ] = useState('');


  interface Tips {
    stat: string,
    tip: string
  }

  const findWeakestStat = (): void => {
    // get user stats
    axios.get<AxiosResponse>('/weakestStat')
      .then(({ data }: AxiosResponse) => {
        setWeakestStat(data);
        const tips: Tips[] = tipsData.filter(newTip => newTip.stat === data);
        const { tip }: {tip: string} = tips[0];
        setTip(tip);
      })
      .catch((err) => console.warn(err));
  };

  useEffect (() => {
    findWeakestStat();
  }, []);

  return (
    <div className='page-wrap'>
      <h3>Looks like you could use some help with {weakestStat}</h3>
      <p>{tip}</p>
    </div>
  );

};

export default Tips;
