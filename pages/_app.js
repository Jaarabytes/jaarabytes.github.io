import "../styles/globals.css"
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${inter.className} px-[20%] my-5 min-h-[100vh]`}>
      <Component {...pageProps} />
    </div>
  );
}
