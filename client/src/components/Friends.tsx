import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css';

const Friends = (): React.ReactElement => {
  const [users, setUsers] = useState(null);
  const [textVal, setTextVal] = useState('');

  const handleChange = (e): void => {
    setTextVal(e.target.value);
  };

  const submit = (): void => {
    const data = {
      name: textVal
    };
    axios.post('/friends', data)
      .then((info)=> {
        setUsers(info.data);
      })
      .catch((err) => { console.warn(err); });
    setTextVal('');
  };

  const friendToast = (): void => {
    toast.info('Friend request sent!');
  };

  return (
    <div>
      <h1>Find your friends!</h1>
      <h2>Search by their name</h2>
      <form>
        <input className='center' value={textVal} onChange={handleChange} type='text' placeholder='enter name'></input>
        <button className='btn' onClick={submit} type='button'>Search</button>
      </form>
      {!users ? null : <div className='addFriends'>

        {
          [users].map((element, index) => <div key={index}>
            <img className='center' src={element.picture}></img>
            <div className='friend-name'>{element.name}</div>
            <button className='btn btn-margin-top' onClick={ (): any => {
              const data = {friendsName: element.name};
              axios.post('/addFriends', data)
                .then(() => { friendToast(); })
                .catch((err) => { console.warn(err); });
              friendToast();
            }
            }>Send Friend Request</button>
            <button className='btn' onClick={ (): any => {
              const data = {friendsName: element.name};
              axios.post('/removeFriends', data)
                .then((info) => { console.info(info); })
                .catch((err) => { console.warn(err); });
            }
            }>Remove Friend </button>

          </div>)}
        <ToastContainer />
      </div> }
    </div>
  );
};
export default Friends;
