import { Box, CircularProgress, Typography } from '@mui/material';

export const FormLoading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        mt: 2,
      }}
    >
      <CircularProgress
        disableShrink
        size={20}
        sx={{ mb: 1 }}
      />
      <Typography variant="subtitle1">Aguarde...</Typography>
    </Box>
  );
};
