import '../styles/globals.css'
import '../styles/index.scss'
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {

  return <>
    <Head>
      <title>SnappFood</title>
      <meta name="description" content="Developed by Mohammad Outadi" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Component {...pageProps} />
  </>
}
