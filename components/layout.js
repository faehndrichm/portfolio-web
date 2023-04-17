import React from "react";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-950 flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 ">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
