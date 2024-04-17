import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
import Drawer from "./components/ui/drawer/Drawer";
import BgSquare from "./components/ui/icons/bg-square";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="bg-gradient-to-b from-green-800 via-green-950 to-green-950"
      lang="en"
    >
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/groove.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Akeru</title>
        <meta name="description" content="AI for you" />
      </head>
      <body
        className={`${montserrat.variable} max-w-6xl mx-auto text-slate-50 px-5`}
      >
        <div className="sm:hidden -z-20 fixed flex flex-wrap left-0 top-0">
          {Array.from({ length: 1000 }).map((_, i) => (
            <BgSquare key={i} />
          ))}
        </div>
        <div className="absolute -z-20 hidden sm:flex flex-wrap left-0 top-0 overflow-hidden">
          {Array.from({ length: 250 }).map((_, i) => (
            <BgSquare key={i} />
          ))}
        </div>
        <Drawer>
          <Header />
          {children}
          <Footer />
        </Drawer>
      </body>
    </html>
  );
}
