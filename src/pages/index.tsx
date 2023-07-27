import Head from "next/head";
import { VendorsList } from "../components/domains/vendors";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SnappFood</title>
        <meta name="description" content="Developed by Mohammad Outadi" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <VendorsList />
    </div>
  )
}
