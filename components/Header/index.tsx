import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: '#444444',
        display: 'flex',
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          boxShadow: '0px 15px 34px 8px rgba(0, 0, 0, .1)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img src="logo.png" height={40} />
      </Toolbar>
    </AppBar>
  );
};
