import { Box, CircularProgress } from '@mui/material';

export const FormLoading = () => {
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
