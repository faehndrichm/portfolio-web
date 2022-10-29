import Link from "next/link";
import { useState } from "react";


 export default function Header() {
  function menuClick (){
    console.log(hidden);
    setHidden(!hidden);
  };
    const [hidden, setHidden] = useState(false);
  return (
    <header className="flex-none fixed z-10 w-full bg-gray-800 shadow-white/20 shadow-lg text-white text-xl flex justify-center p-3 ">
      <div className="max-w-6xl w-full mx-6 flex gap-3 md:items-center justify-between">
        <div className="mr-auto font-bold cursor-pointer text-3xl transition ease-in-out delay-150 hover:scale-110 hover:text-purple-600">
          <Link href="/">MF</Link>
        </div>
        <div
          className={
            " flex-col md:flex-row  gap-3 items-center " + (hidden ? "hidden md:flex" : "flex")
          }>
          <div className="text-base font-bold p-3 underline-offset-4 cursor-pointer hover:underline">
            <Link href="/algos">Lustige Algos</Link>
          </div>
          <div className="text-base font-bold p-3 underline-offset-4 cursor-pointer hover:underline">
            <Link href="/projects">Projekte</Link>
          </div>
          <div className="text-base font-bold p-3 underline-offset-4 cursor-pointer hover:underline">
            <Link href="/hobbies"> Meine Hobbys</Link>
          </div>
          <div className="text-base font-bold p-3 underline-offset-4 cursor-pointer hover:underline">
            <Link href="/about"> Über mich</Link>
          </div>
          <div className="text-base font-bold p-3 underline-offset-4 cursor-pointer hover:underline">
            <Link href="/more"> Sonstiges</Link>
          </div>
        </div>
        <svg
          className="ml-auto w-6 h-6 cursor-pointer transition ease-in-out delay-100 hover:scale-125 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <svg
          onClick={menuClick}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="md:hidden w-6 h-6 cursor-pointer transition ease-in-out delay-100 hover:scale-125">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </header>
  );      
}