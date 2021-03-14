import * as React from 'react';
import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
const Leaderboard = (): React.ReactElement => {
  const [allStats, setAllStats] = useState(null);
  const temp = [];


  const statistics = (): void => {
    axios.get('/statsData')
      .then(({ data }) => {
        const recent = data[data.length - 1];

        temp.push(recent);
        return recent;
      }).then((recent) => {
        axios.get('/friendsData')
          .then(( {data} ) => {

            for (let i = 0; i < data.length; i++) {
              temp.push(data[i]);
            }

            temp.sort((a, b) => b.total - a.total);
            setAllStats(temp);
          })
          .catch((err) => console.warn('Stat Error', err));



      })
      .catch((err) => console.warn('Stat Error', err));
  };


  useEffect(() => {
    statistics();
  }, []);



  return (
    <div>
      <h1>Weekly Leaders</h1>
      <hr></hr>
      {!allStats ? null : <div className='LeaderBoard'>

        {
          allStats.map((element, index) => <div key={index}>
            <div >{ element.total} { element.name}</div>


          </div>)}

      </div> }






    </div>
  );
};
export default Leaderboard;
