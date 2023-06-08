import '@/styles/globals.css'
import Head from "next/head";
import Script from "next/script";

import { Encode_Sans } from "next/font/google"


const encode = Encode_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '400', '500', '600', '700'],
})


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <main className={encode.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
export default MyApp;
