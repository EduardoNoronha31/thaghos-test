import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Form from '../components/Form';
import Header from '../components/Header';

const Login: NextPage = () => (
  <Box sx={{ background: '#01526d', height: '100vh', width: '100%' }}>
    <Header />
    <Form />
  </Box>
);

export default Login;
