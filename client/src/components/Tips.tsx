
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import TipsData from '../models/TipsData';
import tipsData from '../../src/tips_data';

const Tips = (): React.ReactElement => {
  const [ weakestStat, setWeakestStat ] = useState('');
  const [ tip, setTip ] = useState('');

  interface Tips {
    stat: string,
    tip: string
  }

  const findWeakestStat = (): void => {
    axios.get<AxiosResponse>('/weakestStat')
      .then(({ data }: AxiosResponse) => {
        setWeakestStat(data);
        const tips: Tips[] = tipsData.filter(newTip => newTip.stat === data);
        const randomIndex: number = Math.floor(Math.random() * tips.length);
        const { tip }: {tip: string} = tips[randomIndex];
        setTip(tip);
      })
      .catch((err) => console.warn(err));
  };

  useEffect (() => {
    findWeakestStat();
  }, []);

  const checkStat = (weakestStat): string => {
    if (weakestStat === 'dining') {
      return 'dining out less or eating less meat';
    } else {
      return weakestStat;
    }
  };

  return (
    <div className='tips-wrap'>
      <h3>Looks like you could use some help with {checkStat(weakestStat)}</h3>
      <p>{tip}</p>
    </div>
  );

};

export default Tips;
