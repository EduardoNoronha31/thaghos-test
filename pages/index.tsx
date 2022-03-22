import type { NextPage } from 'next';
import { Box } from '@mui/material';
import { Form } from '../components/Form';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Header />
      <Form />
    </Box>
  );
};

export default Home;
