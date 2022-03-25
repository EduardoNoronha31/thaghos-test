import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Header from '../components/Header';
import RecordedData from '../components/RecordedData';

const RecordedDataPage: NextPage = () => (
  <Box sx={{ background: '#01526d', height: '100vh', width: '100%' }}>
    <Header />
    <RecordedData />
  </Box>
);

export default RecordedDataPage;
