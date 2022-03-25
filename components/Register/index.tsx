import { Box, Button, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();
  const redirectToLoginPage = () => router.push('/login');
  return (
    <Box
      sx={{
        display: 'flex',
        height: 'auto',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          display: 'flex',
          height: 'auto',
          flexDirection: 'column',
          mb: '2rem',
          mt: '4rem',
          width: '70%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: '20rem',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <img src="backgroundRegister.svg" alt="Background Register" width={500} />
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            width: '100',
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
            Register
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
