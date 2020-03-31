import "../styles.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Man Sarip</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
