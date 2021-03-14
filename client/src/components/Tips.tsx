
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

const Tips = (): React.ReactElement => {
  const [ name, setName ] = useState('');
  const [ stat, setStat ] = useState('');
  const [ tip, setTip ] = useState('');

  useEffect((): void => {
    axios.get<AxiosResponse>('/user')
      .then(({ data }: AxiosResponse) => {
        const { name }: { name: string } = data;
        setName(name);
      })
      .catch((err) => console.warn(err));
  }, []);

  const findWeakestStat = (): void => {
    // get user stats

    // find weakest stat

    // setStat to weakest stat

  };

  const getTip = (): void => {
    // find weakest stat

    // axios to get all tips where stat is stat

    // select random tip

    // setTip to random tip
  };

  return (
    <div className='page-wrap'>
      <h2>Looks like you could use some help with {stat} </h2>
      <p>{tip}</p>
    </div>
  );

};

export default Tips;
