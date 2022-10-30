import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { forwardRef, Fragment } from "react";


const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});
MyLink.displayName ="MyLink";

export default function Header() {
  const links = [
    { text: "Algorithmen", href: "/algos" },
    { text: "Projekte", href: "/projects" },
    { text: "Meine Hobbys", href: "/hobbies" },
    { text: "Über mich", href: "/about" },
    { text: "Sonstiges", href: "/more" },
  ];

  return (
    <header className="sticky top-0 z-20 flex h-14 w-full justify-center bg-gray-900 bg-opacity-50 text-xl text-white backdrop-blur-lg">
      <div className="mx-6 flex w-full max-w-6xl items-center justify-between gap-3 border-b border-gray-500/25 py-2">
        <div className="mr-auto cursor-pointer text-3xl font-bold transition delay-150 ease-in-out hover:scale-110">
          <Link href="/">MF</Link>
        </div>
        <div className="hidden flex-row items-center gap-3 md:flex">
          {links.map((link, i) => (
            <div
              key={i}
              className="cursor-pointer p-3 text-base font-bold underline-offset-4 hover:underline">
              <Link href={link.href}>{link.text}</Link>
            </div>
          ))}
        </div>
        <svg
          className="ml-auto h-6 w-6 cursor-pointer transition delay-100 ease-in-out hover:scale-125 "
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
            <Menu.Items as="nav" className="absolute top-14 left-0 flex w-full flex-col items-stretch gap-3 bg-gray-900 bg-opacity-50 px-6 py-4 text-xl text-white backdrop-blur-lg">
              {links.map((link) => (
                <Menu.Item key={link.href} as={Fragment} className=" text-center">
                  {({ active }) => (
                      <MyLink className="text-red-600" href={link.href}>{link.text}</MyLink>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
}
