import Head from "next/head";
import "../styles/globals.css"
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className={`${inter.className} sm:px-[20%] px-3 my-5 min-h-[100vh]`}>
      <Head>
        <title>jaarabytes</title>
        <link rel="icon" href="https://freepngimg.com/download/artwork/84555-piece-warriors-artwork-one-water-pirate-trafalgar.png" />
      </Head>
      <Component {...pageProps} />
    </div>
    </>
  );
}
