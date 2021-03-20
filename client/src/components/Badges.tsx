import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Badges = (): React.ReactElement => {
  const [statBadges, setStatBadges] = useState([]);

  useEffect(() => {
    statsChecker();
  }, []);

  const statsChecker = (): void => {
    axios.get('/statsData')
      .then(({ data }) => {
        const mostRecent = data[data.length - 1];
        if (mostRecent.meat_dine > 14) {
          axios.post('/badges',
            {params:
              { badge: 'Veggie Victor',
                img: 'https://i.ibb.co/syFp2sB/badges-veggie-victor.png'}})
            .then()
            .catch((err) => console.warn(err));

        }
        if (mostRecent.energy > 25) {
          axios.post('/badges',
            {params:
              { badge: 'Power Puncher',
                img: 'https://i.ibb.co/gV9qFwy/badges-power-puncher.png'}})
            .then()
            .catch((err) => console.warn(err));
        }
        if (mostRecent.water > 25) {
          axios.post('/badges',
            {params:
              { badge: 'Water Wizard',
                img: 'https://i.ibb.co/R7hztRy/badges-water-wizard.png'}})
            .then()
            .catch((err) => console.warn(err));

        }
        if (mostRecent.recycling > 40) {
          axios.post('/badges',
            {params:
              { badge: 'Rockin Recycler',
                img: 'https://i.ibb.co/C2by1fr/badges-rockin-recycler.png'}})
            .then()
            .catch((err) => console.warn(err));

        }
        if (mostRecent.mileage > 35) {
          axios.post('/badges',
            {params:
              { badge: 'Road Warrior',
                img: 'https://i.ibb.co/z8LKZHZ/badges-road-warrior.png'}})
            .then()
            .catch((err) => console.warn(err));

        }
      })
      .then(() => {
        axios.get('/badges')
          .then(({ data }) => setStatBadges(data))
          .catch((err) => console.warn(err));
      });

  };

  return (
    <div>
      {
        !statBadges
          ? <div>no badges to show</div>
          : <div className='badge-homepage'>
            <h2>Your Achievements</h2>
            { statBadges.map((statBadge, index) => {
              const { badge, badge_url }: {badge: string, badge_url: string} = statBadge;
              return ( <div key={index}>
                <h4>{badge}</h4>
                <img className='badge-img' src={`${badge_url}`} />
              </div>
              );
            })
            }
          </div>

      }
    </div>
  );
};

export default Badges;
