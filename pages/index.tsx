import type { NextPage } from 'next';
import { Box, Button, Paper, Typography } from '@mui/material';
import { Header } from '../components/Header';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const redirectToLoginPage = () => {
    router.push('/login');
  };
  return (
    <Box sx={{ backgroundColor: '#01526d', width: '100%', height: '100%' }}>
      <Header />
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Paper
          elevation={6}
          sx={{
            width: '70%',
            height: '62vh',
            mt: '4rem',
            mb: '2rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: '20rem',
              justifyContent: 'center',
            }}
          >
            <img src="background.svg" alt="Background" width={500} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100',
              height: 'auto',
            }}
          >
            <Typography
              variant="h6"
              color="#01526d"
              paddingX={2}
              textAlign="center"
            >
              Closer, Faster and Safer.
            </Typography>
            <Typography
              variant="subtitle1"
              mb={2}
              paddingX={2}
              textAlign="center"
            >
              We accelerate and deliver your content with quality anywhere.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mb: 2,
                width: '6rem',
              }}
              onClick={redirectToLoginPage}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
