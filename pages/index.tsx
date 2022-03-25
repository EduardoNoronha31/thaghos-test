import type { NextPage } from 'next';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Register from '../components/Register';

const Home: NextPage = () => (
  <Box sx={{ backgroundColor: '#01526d', width: '100%', height: '100vh' }}>
    <Header />
    <Register />
  </Box>
);

export default Home;
