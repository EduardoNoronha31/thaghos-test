import { Box, CircularProgress } from '@mui/material';

const FormLoading = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mt: 2,
      }}
    >
      <CircularProgress disableShrink size={20} />
    </Box>
  );
};

export default FormLoading;
