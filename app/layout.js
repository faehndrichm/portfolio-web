import "tailwindcss/tailwind.css";
import React from "react";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import { Montserrat, Press_Start_2P, Inconsolata, Lato } from "next/font/google";
import SupabaseProvider from "./supabase-provider.tsx";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat-font" });
const ps2p = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--ps2p-font" });
const inconsolata = Inconsolata({ subsets: ["latin"], variable: "--inconsolata-font" });
const lato = Lato({ weight: "400", subsets: ["latin"], variable: "--lato-font" });

export const metadata = {
  title: "Portfolio",
  description: "My Portfolio Next.js page",
};

export default async function RootLayout({ children }) {
  return (
    <html
      className={`${montserrat.variable} ${ps2p.variable} ${inconsolata.variable} ${lato.variable} font-montserat`}>
      <body className="flex min-h-screen flex-col bg-gray-950">
        <SupabaseProvider>
          <Header></Header>
          <main className="flex-1 ">{children}</main>
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  );
}
