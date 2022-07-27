import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', '${ANALYTICS_ID}');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
