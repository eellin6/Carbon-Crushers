import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Leaderboard = (): React.ReactElement => {
  const [allStats, setAllStats] = useState([]);

  const statistics = (): void => {
    axios.get('/statsData')
      .then(({ data }) => {
        const recent = data[data.length - 1];
        allStats.push(recent);
      })
      .catch((err) => console.warn('Stat Error', err));
  };
  const friendsStats = (): void => {
    axios.get('/friendsData')
      .then(( {data} ) => {
        for (let i = 0; i < data.length; i++) {
          allStats.push(data[i]);
        }
      })
      .catch((err) => console.warn('Stat Error', err));
  };
  useEffect(() => {
    statistics();
    friendsStats();
  }, []);
  console.info('SORTED', allStats);

  return (
    <div>
      <h1>Weekly Leaders</h1>
      <hr></hr>
      {!allStats ? [] : (<div>
        {allStats.map((element) => {
          console.info('ELEMENT NAME', element.name);
          return (
            <div>
              <div>{element.name}</div>
              <div>{element.total}</div>
            </div>);
        })}

      </div>)}



    </div>
  );
};
export default Leaderboard;
