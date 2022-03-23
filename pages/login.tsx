import type { NextPage } from 'next';
import { Box } from '@mui/material';
import { Form } from '../components/Form';
import { Header } from '../components/Header';

const Login: NextPage = () => {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Form />
      </Box>
    </Box>
  );
};

export default Login;
