import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
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
        console.info(info.data);
        setUsers(info.data);
      })
      .catch((err) => { console.warn(err); });

    setTextVal('');

  };
  return (

    <div>
      <h1>Find your friends!</h1>
      <h2>Search by their username</h2>
      <form>
        <input value={textVal} onChange={handleChange} type='text'></input>
        <button onClick={submit} type='button'>Search</button>
      </form>
      {!users ? null : <div className='addFriends'>

        {
          [users].map((element, index) => <div key={index}>
            <img src={element.picture}></img>
            <div >{ element.name}</div>
            <button className='btn' onClick={ (): any => {
              const data = {friendsName: element.name};
              axios.post('/addFriends', data)
                .then((info) => { console.info(info); })
                .catch((err) => { console.warn(err); });
            }
            }>Send Friend Request</button>

          </div>)}

      </div> }
    </div>
  );
};
export default Friends;
