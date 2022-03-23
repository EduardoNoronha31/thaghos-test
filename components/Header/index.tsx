import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../assets/logo_branco.png';

export const Header = () => {
  return (
    <AppBar position="static" sx={{ background: '#01526d', display: 'flex' }}>
      <Toolbar variant="dense">
        <img src="../" />
      </Toolbar>
    </AppBar>
  );
};
