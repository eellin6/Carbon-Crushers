import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Leaderboard = (): React.ReactElement => {
  const [allStats, setAllStats] = useState([]);

  const statistics = (): void => {
    axios.get('/statsData')
      .then(({ data }) => {
        const recent = data[data.length - 1];
        console.info(recent);
        allStats.push('caity');
      })
      .catch((err) => console.warn('Stat Error', err));
  };
  const friendsStats = (): void => {
    axios.get('/friendsData')
      .then(({ data }) => {
        const recent = data[data.length - 1];

      })
      .catch((err) => console.warn('Stat Error', err));
  };
  useEffect(() => {
    axios.get('/user')
      .then(({ data }) => {
        const { name } = data;
        allStats.push(name);


        // console.log('HERE IS USER DATA ON HOMEPAGE', data);
      })
      .catch((err) => console.warn(err));

    statistics();
  }, []);

  return (
    <div>
      <h1>Weekly Leaders</h1>
      <hr></hr>

    </div>
  );
};
export default Leaderboard;
