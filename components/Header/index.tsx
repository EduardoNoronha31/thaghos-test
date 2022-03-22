import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        bg: 'red',
        mb: 10,
      }}
      color="red"
    >
      <CssBaseline />
      <AppBar
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Toolbar>
          <Typography variant="h5" noWrap component="div">
            Thaghos Test
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
