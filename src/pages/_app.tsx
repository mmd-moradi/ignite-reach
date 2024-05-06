import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={cn("min-h-screen font-sans antialiased", montserrat.variable)}>
    <Component {...pageProps} />
  </main>
  );
}
