
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import TipsData from '../models/TipsData';
import tipsData from '../../src/tips_data';

const Tips = (): React.ReactElement => {
  const [ weakestStat, setWeakestStat ] = useState('');
  const [ tip, setTip ] = useState('');
  const [ resource, setResource ] = useState(null);

  interface Tips {
    stat: string,
    tip: string,
    resource: string | null
  }

  const findWeakestStat = (): void => {
    axios.get<AxiosResponse>('/weakestStat')
      .then(({ data }: AxiosResponse) => {
        setWeakestStat(data);
        const tips: Tips[] = tipsData.filter(newTip => newTip.stat === data);
        const randomIndex: number = Math.floor(Math.random() * tips.length);
        setTip(tips[randomIndex].tip);
        setResource(tips[randomIndex].resource);
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

  const hasResource = (resource): any => {
    if (resource) {
      return (<a href={resource}>here</a>);
    }
  };

  return (
    <div className='tips-wrap'>
      {
        !weakestStat
          ? <div>
            <p className='tips'>This is where you'll find tips on how to improve your carbon footprint after you've entered some stats, because small steps add up!</p>
          </div>
          : <div>
            <h3>Looks like you could use some help with {checkStat(weakestStat)}</h3>
            <p><span className='tips'>{tip}</span><span className='tips'>{hasResource(resource)}</span></p>
          </div>
      }
    </div>
  );

};

export default Tips;
