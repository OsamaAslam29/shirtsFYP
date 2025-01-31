import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Drawer from '@mui/material/Drawer';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';

import logo from '../../Assets/images/navlogo.png'

import './Navbar.scss'


const Navbar = () => {
  let history = useHistory()

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box

      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"

    >
      <>
        <div className="ham_nav_main">
          <AiOutlineClose style={{ color: 'white' }} className='icons' onClick={toggleDrawer(anchor, false)} />
          <div className='navbar__container'>
            <NavLink to='/' style={{ textDecoration: 'none' }}  >

              <div className='items'>Home</div>
            </NavLink>
            <div className='items'>About us</div>
            <div className='items'>Contact us</div>
            <div className="get">
              <button onClick={() => history.push("/signup")}>Register</button>
            </div>
            <NavLink to='/login' style={{ textDecoration: 'none' }}  >
              <div className="sign">
                <button>Sign In</button>
              </div>
            </NavLink>
          </div>
        </div>
      </>
    </Box>
  );

  return (
    <>
      <div className='main_nav'>
        <div className="nav_main_content">
          <div className="nav_content_left">
            <NavLink to='/' style={{ textDecoration: 'none' }}  >

              <img className='nav_logo' src={logo} />
            </NavLink>
            <NavLink to='/' style={{ textDecoration: 'none' }}  >

              <div className="nav_items">Home</div>
            </NavLink>
            <div className="nav_items">About us</div>
            <div className="nav_items">Contact us</div>
          </div>
          <div className="nav_content_right">
            <div className="get">
              <button onClick={() => history.push("/signup")}>Register</button>
            </div>
            <NavLink to='/login' style={{ textDecoration: 'none' }}  >
              <div className="sign">
                <button>Sign In</button>
              </div>
            </NavLink>
          </div>
        </div>
        <div className='ham_nav'>
          {['right'].map((anchor) => (
            <React.Fragment key={anchor}>
              <AiOutlineMenu className='menu' onClick={toggleDrawer(anchor, true)} />
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}



export default Navbar