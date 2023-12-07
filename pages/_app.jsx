import '@/styles/globals.css';
import { satoshi } from '@/lib/font';
import { UtilityProvider } from '@/contexts/utility-context';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <UtilityProvider>
        <Head>
          <title>GreenTech | Order Management System</title>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" sizes="32x32" />
        </Head>
        <main className={`${satoshi.variable} font-satoshi`}>
          <Component {...pageProps} />
        </main>
      </UtilityProvider>
    </>
  );
}
