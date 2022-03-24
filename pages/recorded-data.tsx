import type { NextPage } from 'next';
import { Box, Stack, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Header } from '../components/Header';
import type { SignUp } from '../components/Form/';

const Item = styled(Paper)(() => ({
  backgroundColor: 'white',
  padding: '.4rem',
  textAlign: 'center',
  color: 'black',
  width: '60vw',
  wordBreak: 'break-word',
}));

const RecordedData: NextPage = () => {
  const signUpData = localStorage.getItem('signUp');
  const signUpFormatedData: SignUp = JSON.parse(signUpData as string);
  return (
    <Box sx={{ background: '#01526d', width: '100%', height: '100vh' }}>
      <Header />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h4" mb={5} mt={5} color="white" fontWeight={700}>
          Your data is:
        </Typography>
        <Stack spacing={2}>
          <Typography>Name:</Typography>
          <Item>{signUpFormatedData.name}</Item>
          <Typography>Email:</Typography>
          <Item>{signUpFormatedData.email}</Item>
          <Typography>Password:</Typography>
          <Item>{signUpFormatedData.password}</Item>
        </Stack>
      </Box>
    </Box>
  );
};

export default RecordedData;
