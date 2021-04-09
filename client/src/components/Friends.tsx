import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css';

const Friends = (): React.ReactElement => {
  const [users, setUsers] = useState(null);
  const [textVal, setTextVal] = useState('');
  const [friendList, setFriendList] = useState([]);

  const handleChange = (e): void => {
    setTextVal(e.target.value);
  };

  const submit = (): void => {
    const data = {name: textVal};
    axios.post('/friends', data)
      .then((info)=> {
        setUsers(info.data);
      })
      .catch((err) => { console.warn(err); });
    setTextVal('');
  };

  const handleKeyPress = (e): void => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      submit();
    }
  };

  const getAllFriends = (): void => {
    axios.get('/friendsList')
      .then(({ data })=> setFriendList(data))
      .catch((err) => { console.warn(err); });
  };

  const friendToast = (): void => {
    toast.info('Friend request sent!');
  };

  const removeFriendToast = (): void => {
    toast.error('Friend deleted');
  };

  useEffect(() => {
    getAllFriends();
  }, []);

  return (
    <div className='page-wrap'>
      <h1>Find your friends!</h1>
      <h2>Search by their name</h2>
      <form className='form-container'>
        <input className='center' value={textVal} onChange={handleChange} onKeyDown={handleKeyPress} type='text' placeholder='enter name'></input>
        <button className='btn' onClick={submit} type='button'>Search</button>
      </form>
      {!users ? null : <div className='addFriends'>

        {
          [users].map((element, index) => <div key={index}>
            <img className='profilePic' src={element.picture}></img>
            <div className='friend-name'>{element.name}</div>
            <button className='btn btn-margin-top btn-margin' onClick={ (): any => {
              const data = {friendsName: element.name};
              axios.post('/addFriends', data)
                .then((data) => data)
                .catch((err) => console.warn(err));
              friendToast();
              setTimeout(() => {
                location.reload();
              }, 3500);
              getAllFriends();
            }
            }>Send Friend Request</button>

          </div>)
        }
      </div> }
      <div className='friends-container'>
        <h2>Your Friends List</h2>
        {
          !friendList.length
            ? <div className='add-friends'>
              <p>Add friends to compete</p>
            </div>
            : <div>
              {
                friendList.map((friend, index) => <div className='friend-list-item' key={index}>
                  <div className='friend-list-item-name'>{friend.friendsName}</div>
                  <button className='friend-list-item-btn' onClick={ (): any => {
                    const data = {friendsName: friend.friendsName};
                    axios.post('/removeFriends', data)
                      .then((data) => console.info(data))
                      .catch((err) => console.warn(err));
                    removeFriendToast();
                    setTimeout(() => {
                      location.reload();
                    }, 3500);
                  }
                  }>Remove</button>
                </div>
                )
              }
            </div>
        }
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};
export default Friends;
