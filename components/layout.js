import React from 'react';
import Header from './header';


export default function Layout({ children }) {
  return (
    <div className='min-h-screen flex flex-col '>
      <Header />
      <main className='flex-1 bg-gray-900'>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}