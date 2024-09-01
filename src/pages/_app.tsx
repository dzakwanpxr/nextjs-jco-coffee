import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JCO Coffee - Premium Coffee and Donuts</title>
        <meta
          name="description"
          content="Discover JCO's premium coffee and delicious donuts. Enjoy a wide variety of flavors and high-quality brews."
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
