import React from 'react';
import Header from './header';


export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <Header />
      <main className="flex-1 ">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}