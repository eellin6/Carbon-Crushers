import * as React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className='nav'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/profile'>Edit Profile</Link>
          </li>
          <li>
            <Link to='/logout'>Log out</Link>
          </li>
        </ul>
    </div>
  );
};

export default Sidebar;
