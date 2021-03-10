import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Friends = (): React.ReactElement => {
  const [users, setUsers] = useState(0);

  const [textVal, setTextVal] = useState('');
  const handleChange = (e) => {
    setTextVal(e.target.value);

  };
  const submit = (): void => {
    console.info(textVal);
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

    </div>
  );
};
export default Friends;
