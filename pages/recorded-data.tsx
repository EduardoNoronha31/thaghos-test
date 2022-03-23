import { Box } from '@mui/material';
import type { NextPage } from 'next';
import type { SignUp } from '../components/Form/';
import { Header } from '../components/Header';

const RecordedData: NextPage = () => {
  const signUpData = localStorage.getItem('signUp');
  const signUpFormated: SignUp = JSON.parse(signUpData as string);
  return (
    <Box>
      <Header />
      <h1>{signUpFormated.name}</h1>
      <h1>{signUpFormated.email}</h1>
      <h1>{signUpFormated.password}</h1>
    </Box>
  );
};

export default RecordedData;
