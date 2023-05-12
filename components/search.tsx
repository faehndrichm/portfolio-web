"use client";
import { default as React, useRef, useState } from "react";

export default function SearchInput({
  className = "",
  wrapClass = "",
  inactiveClass = "",
  activeClass = "",
  isStatic = false,
}: {
  className?: String;
  wrapClass?: String;
  inactiveClass?: String;
  activeClass?: String;
  isStatic?: boolean;
}) {
  const [showSearch, setShowSearch] = useState(isStatic);

  const searchInput = useRef(null);

  return (
    <div className={wrapClass + " relative h-10 "}>
      <div
        className={`${className} ${
          showSearch ? activeClass + "" : inactiveClass
        }    z-30 flex h-10 items-center overflow-hidden rounded-full bg-gray-900  transition-[width] delay-150 duration-300`}>
        <input
          placeholder="Search for anything..."
          type="text"
          ref={searchInput}
          className={`z-30 ml-6 appearance-none border-none bg-transparent font-inconsolata  text-white outline-none ring-0 
          ${showSearch ? "block" : "hidden"}`}
        />
      </div>
      <svg
        className="absolute right-0 top-0 z-40 h-10 w-10 cursor-pointer rounded-full p-2 transition-colors duration-200 hover:bg-gray-900 "
        fill="none"
        onClick={() => {
          if (!isStatic) {
            setShowSearch(!showSearch);
          }
          searchInput.current.focus();
        }}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
  );
}
