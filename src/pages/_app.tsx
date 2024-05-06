import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import * as gtag from "@/lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import defaultSEOConfig from "../../next-seo.config";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url:URL) => {
      gtag.pageview(url);
    }
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    }
  },[router.events])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <DefaultSeo {...defaultSEOConfig} />
      <main className={cn("min-h-screen font-sans antialiased", montserrat.variable)}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
