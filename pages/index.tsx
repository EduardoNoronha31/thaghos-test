import { Button } from '@mui/material';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};

export default Home;
