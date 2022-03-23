import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Thaghos Test</title>
      </Head>
      <Component {...pageProps} />
      <CssBaseline />
    </>
  );
}
