import CssBaseline from '@mui/material/CssBaseline';
import Home from './index'
import Head from 'next/head';

function MyApp() {
  return (
    <>
      <Head>
        <title>Thaghos Test</title>
      </Head>
      <Home /> 
      <CssBaseline />
    </>
  );
}

export default MyApp;
