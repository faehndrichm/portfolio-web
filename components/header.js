"use client";

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { default as React, Fragment } from "react";
import { useSupabase } from "../app/supabase-provider";
import SearchInput from "./search";

export default function Header() {
  const { user } = useSupabase();

  const links = [
    { text: "Projects", href: "/projects" },
    { text: "Guestbook", href: "/guestbook" },
    { text: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-20 flex h-14 w-full justify-center bg-gray-950 bg-opacity-50 text-xl text-white backdrop-blur-lg">
      <div className="relative mx-6 flex w-full max-w-6xl items-center justify-between gap-3 border-b border-gray-500/25 py-2">
        <Link
          className="mr-auto cursor-pointer rounded-md px-1 text-3xl font-bold  transition-colors duration-200 hover:bg-white hover:text-gray-900"
          href="/">
          MF
        </Link>
        <div className={`hidden flex-row items-center gap-3 md:flex`}>
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="cursor-pointer p-3 text-base font-bold underline-offset-4 hover:underline">
              {link.text}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex flex-row items-center gap-3">
          <SearchInput
            activeClass="w-[75vh]"
            inactiveClass="w-full"
            wrapClass=" hidden md:block w-10"
            className="absolute right-0"></SearchInput>
          {!!user && (
            <div className="flex flex-row gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span className="text-md">{user.user_metadata.full_name}</span>
            </div>
          )}
          {!user && (
            <Link
              className="hidden h-9 items-center rounded-md border border-black bg-gray-100 px-4 text-sm font-medium leading-none text-gray-950 transition-colors duration-200 hover:border-gray-800 hover:bg-gray-900 hover:text-white md:flex"
              href="/login">
              login
            </Link>
          )}
        </div>
        <Menu>
          <Menu.Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 cursor-pointer transition delay-100 ease-in-out hover:scale-125 md:hidden">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items
              as="nav"
              className="absolute -left-6 top-14 flex w-screen flex-col items-stretch gap-3 bg-gray-950 bg-opacity-50 px-6  py-4 text-xl text-white backdrop-blur-lg">
              <Menu.Item as={"div"} disabled className="flex flex-row">
                <SearchInput
                  isStatic
                  activeClass="w-full"
                  inactiveClass="w-0"
                  className=""
                  wrapClass="w-full"></SearchInput>
              </Menu.Item>
              {links.map((link) => (
                <Menu.Item key={link.href} as={Fragment} className=" text-center">
                  {({ active }) => (
                    <Link className={`${active && "text-bold"}`} href={link.href}>
                      {link.text}
                    </Link>
                  )}
                </Menu.Item>
              ))}
              <Menu.Item as={"div"} className="flex flex-row gap-6">
                {!user && (
                  <Link
                    className="flex h-9 flex-1 items-center justify-center rounded-md border border-black bg-gray-100 px-4 text-sm font-bold leading-none text-gray-950 transition-colors duration-200 hover:border-gray-800 hover:bg-gray-900 hover:text-white"
                    href="/login">
                    login
                  </Link>
                )}
                {!user && (
                  <Link
                    className="flex h-9 flex-1 items-center justify-center rounded-md border border-gray-800 bg-gray-900 px-4 text-sm font-bold  leading-none text-white transition-colors duration-200 hover:border-black hover:bg-white hover:text-gray-950"
                    href="/login">
                    logout
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
}
