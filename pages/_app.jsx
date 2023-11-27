import '@/styles/globals.css';
import { satoshi } from '@/lib/font';

export default function App({ Component, pageProps }) {
  return (
    <main className={`${satoshi.variable} font-satoshi`}>
      <Component {...pageProps} />
    </main>
  );
}
