import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { useAuth } from '../hooks/useAuth.jsx';
import LoginModal from './LoginModal.jsx';

export default function Header() {
  const {
    user: { isLoggedIn, name, roles, authenticateRole }
  } = useAuth();

  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        <IconButton
          edge='start'
          component={NavLink}
          exact
          to='/'
          color='inherit'
          aria-label='home'
        >
          <HomeIcon />
        </IconButton>
        {isLoggedIn && (
          <IconButton component={NavLink} to='/jokes' color='inherit'>
            Jokes
          </IconButton>
        )}
        {authenticateRole('admin') && (
          <IconButton component={NavLink} to='/scrape' color='inherit'>
            Scrape
          </IconButton>
        )}
        <IconButton component={NavLink} to='/content3' color='inherit'>
          Content 3
        </IconButton>
        {isLoggedIn && (
          <Typography style={{ flex: 1 }} variant='h6' noWrap>
            username: {name}, roles: {roles.join(', ')}
          </Typography>
        )}
        <LoginModal />
      </Toolbar>
    </AppBar>
  );
}
