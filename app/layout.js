import "tailwindcss/tailwind.css";
import React from "react";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import { Montserrat, Press_Start_2P, Inconsolata } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat-font" });
const ps2p = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--ps2p-font" });
const inconsolata = Inconsolata({ subsets: ["latin"], variable: "--inconsolata-font" });

export default async function RootLayout({ children }) {
  return (
    <html className={`${montserrat.variable} ${ps2p.variable} ${inconsolata.variable} font-sans`}>
      <body className="flex min-h-screen flex-col bg-gray-950">
        <Header></Header>
        <main className="flex-1 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
