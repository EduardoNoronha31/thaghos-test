import styled from '@emotion/styled';
import { Box, Paper, Stack, Typography } from '@mui/material';
import type { SignUp } from '../../components/Form';

const Item = styled(Paper)(() => ({
  alignItems: 'center',
  backgroundColor: 'white',
  color: 'black',
  display: 'flex',
  height: '3.5rem',
  justifyContent: 'center',
  padding: '.4rem',
  textAlign: 'center',
  width: '60vw',
  wordBreak: 'break-word',
}));

const RecordedData = () => {
  const pageLoaded = typeof window !== 'undefined';
  const getData = pageLoaded ? localStorage.getItem('signUp') : '{}';
  const signUpFormatedData: SignUp = JSON.parse(getData as string);
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: '#fff', fontWeight: 'bold', my: 5 }}
      >
        Your data is:
      </Typography>
      <Stack spacing={2}>
        <Typography sx={{ color: '#fff', fontWeight: 'bold' }}>
          Name:
        </Typography>
        <Item>{signUpFormatedData.name}</Item>
        <Typography sx={{ color: '#fff', fontWeight: 'bold' }}>
          Email:
        </Typography>
        <Item>{signUpFormatedData.email}</Item>
        <Typography sx={{ color: '#fff', fontWeight: 'bold' }}>
          Password:
        </Typography>
        <Item>{signUpFormatedData.password}</Item>
      </Stack>
    </Box>
  );
};

export default RecordedData;
