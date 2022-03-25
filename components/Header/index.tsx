import { AppBar, Link, Toolbar } from '@mui/material';

const Header = () => {
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
        }}
      >
        <img src="logo.png" height={40} />
        <Link ml={2} color="#fff" href="/">
          Home
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
