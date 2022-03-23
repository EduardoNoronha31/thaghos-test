import type { NextPage } from 'next';
import { Box } from '@mui/material';
import { Form } from '../components/Form';
import { Header } from '../components/Header';

const Login: NextPage = () => {
  return (
    <Box sx={{background: '#01526d', width: '100%', height: '100vh'}}>
      <Header />
      <Form />
    </Box>
  );
};

export default Login;
