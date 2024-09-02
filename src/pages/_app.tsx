import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { Provider } from "jotai";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <title>JCO Coffee - Premium Coffee and Donuts</title>
        <meta
          name="description"
          content="Discover JCO's premium coffee and delicious donuts. Enjoy a wide variety of flavors and high-quality brews."
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </QueryClientProvider>
    </>
  );
}
