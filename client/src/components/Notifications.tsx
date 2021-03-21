import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Notifications = (): React.ReactElement => {
  const [friendRequests, setfriendRequests] = useState(null);
  const getRequests = (): void => {
    axios.get('/friendRequests')
      .then(({data}) => setfriendRequests(data))
      .catch((err) => console.warn('Stat Error', err));
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <div className='page-wrap'>
      <h1>Friend Requests</h1>
      {!friendRequests ? null : <div className='addFriends'>
        {
          friendRequests.map((element, index) => <div key={index}>
            <div >{ element.requests } wants to be your friend</div>
            <button className='btn' onClick={ (): any => {
              const data = {friendsName: element.requests};
              axios.post('/acceptFriends', data)
                .then((info) => console.info(info))
                .catch((err) => console.warn(err));
              location.reload();
            }
            }>Accept Friend</button>
            <button className='btn' onClick={ (): any => {
              const data = {friendsName: element.requests};
              axios.post('/declineFriends', data)
                .then((info) => console.info(info))
                .catch((err) => console.warn(err));
              location.reload();
            }
            }>Decline</button>
          </div>
          )
        }
      </div> }
    </div>
  );
};

export default Notifications;
