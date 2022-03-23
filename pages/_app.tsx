import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Box>
      <Head>
        <title>Thaghos</title>
      </Head>
      <Component {...pageProps} />
      <CssBaseline />
    </Box>
  );
}
