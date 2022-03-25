import { Box, CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <CssBaseline />
    <Box sx={{ overflow: 'hidden' }}>
      <Head>
        <title>Thaghos</title>
      </Head>
      <Component {...pageProps} />
    </Box>
  </>
);

export default MyApp;
