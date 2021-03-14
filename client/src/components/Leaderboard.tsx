import * as React from 'react';
import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Doughnut } from 'react-chartjs-2';
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
            console.info(temp);
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
    <div className='page-wrap'>
      <h1>Weekly Leaders</h1>
      <hr></hr>
      {!allStats ? null : <div className='LeaderBoard'>

        {
          allStats.map((element, index) => <div key={index}>
            <h2 >{ element.total} { element.name}</h2>
            <Doughnut data={{
              datasets: [
                {

                  label: 'First dataset',
                  data: [element.recycling, element.water, element.meat_dine, element.mileage, element.energy],
                  fill: true,
                  backgroundColor: [
                    '#55BFBF',
                    '#3EA4E8',
                    '#FA6685',
                    '#FC9E4B',
                    '#FDCB60'
                  ],
                  borderColor: ['#FFF'],
                }
              ],
              labels: ['Recycling', 'Water Consumption', 'Meat & Dining Out', 'Mileage', 'Energy']
            }} />



          </div>)}

      </div> }






    </div>
  );
};
export default Leaderboard;
