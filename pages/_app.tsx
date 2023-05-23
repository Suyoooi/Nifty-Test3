import "@/styles/globals.css";
import type { AppProps } from "next/app";

/*---Nifty Css---*/
import "../public/assets/css/bootstrap.css";
import "../public/assets/css/nifty.css";

import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
