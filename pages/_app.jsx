import '@/styles/globals.css';
import { satoshi } from '@/lib/font';
import { UtilityProvider } from '@/contexts/utility-context';

export default function App({ Component, pageProps }) {
  return (
    <>
      <UtilityProvider>
        <main className={`${satoshi.variable} font-satoshi`}>
          <Component {...pageProps} />
        </main>
      </UtilityProvider>
    </>
  );
}
