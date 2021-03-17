import * as React from 'react';
import GoogleButton from 'react-google-button';
import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
const Notifications = (): React.ReactElement => {
  const [friendRequests, setfriendRequests] = useState(null);
  const getRequests = (): void => {
    axios.get('/friendRequests')
      .then(({data}) => {
        console.info(data);
        setfriendRequests(data);
      })
      .catch((err) => console.warn('Stat Error', err));

  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <div className='page-wrap'>
      {!friendRequests ? null : <div className='addFriends'>

        {
          friendRequests.map((element, index) => <div key={index}>

            <div >{ element.requests } wants to be your friend</div>

          </div>)}

      </div> }



    </div>
  );
};

export default Notifications;
