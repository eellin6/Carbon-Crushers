import * as React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
// import Burger from './NavBurger';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { IoClose, IoMenu } from "react-icons/io5";
import { IconContext } from "react-icons";

const useStyles = makeStyles({
  list: {
    width: 250,
    height: '100%',
    backgroundColor: '#55bfbf',
  },
  fullList: {
    width: 'auto',
  },
});

type Anchor = 'left';

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <ul>
        <li><div className='menu-icon-close'>
          <IconContext.Provider value={{ size: '3em', color: '#fff'}}>
            <IoClose />
          </IconContext.Provider>
        </div></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profile'>Edit Profile</Link></li>
        <li><Link to='/stats'>Enter New Stats</Link></li>
        <li><Link to='/graphs'>View Individual Stats</Link></li>
        <li><Link to='/'>Log out</Link></li>
      </ul>

    </div>
  );

  const anchor = 'left';

  return (
    <div>
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <div className='menu-icon'>
              <IconContext.Provider value={{ size: '3em', color: '#525252'}}>
                <IoMenu />
              </IconContext.Provider>
            </div>
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
    </div>
  );
}