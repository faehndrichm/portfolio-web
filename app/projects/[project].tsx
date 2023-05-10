"use client";
import nextjslogo from "/assets/techs/nextjs-logo.svg";
import nuxtlogo from "/assets/techs/nuxt-logo.svg";
import firebaselogo from "/assets/techs/firebase-logo.svg";
import supabaselogo from "/assets/techs/supabase-logo.svg";
import flutterlogo from "/assets/techs/flutter-logo.svg";
import tailwindlogo from "/assets/techs/tailwindcss-logo.svg";
import angularlogo from "/assets/techs/angular-logo.svg";
import bootstraplogo from "/assets/techs/bootstrap-logo.svg";
import Image, { StaticImageData } from "next/image";

export interface ProjectProps {
  number: string;
  title: string;
  src: StaticImageData;
  height?: number;
  text: string;
  flip?: boolean;
  techs?: string[];
  shadowColor: string;
}

export default function Project({
  number,
  title,
  src,
  height = 300,
  text,
  flip = false,
  techs = [],
  shadowColor,
}: ProjectProps) {
  return (
    <div className="relative">
      <div className="absolute right-0 top-[-5rem] -z-10  bg-gradient-to-b from-gray-300 to-gray-950 bg-clip-text font-inconsolata text-[14rem]/[0.75] text-transparent">
        {number}
      </div>
      <section
        className={`flex ${
          flip ? "md:flex-row-reverse" : "md:flex-row"
        } flex-col items-center gap-6 overflow-hidden rounded-md border border-gray-500/25 bg-gray-900/50 p-6`}>
        <div className="grid flex-1 place-items-center">
          <div className="grid place-items-center">
            <Image
              // style={{ filter: `drop-shadow(0px 120px 70px ${shadowColor})` }}
              className="z-10  col-start-1  row-start-1 rounded-md object-contain object-center"
              src={src}
              height={height}
              alt="Screenshot of Loyalio Page"
            />
            <div
              className=" col-start-1 row-start-1  h-3/4 w-3/4 opacity-100"
              style={{
                boxShadow: `${flip ? "" : "-"}50px 150px 150px 100px ${shadowColor}`,
              }}></div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start gap-6">
          <h3 className="font-montserat text-3xl font-semibold text-white">{title}</h3>
          <div className="whitespace-pre-line font-montserat text-white">{text}</div>
          <div className="my-6 flex w-full flex-row items-center justify-around">
            {techs.includes("nextjs") && (
              <a href="https://nextjs.org/" className="relative">
                <Image src={nextjslogo} height={20} alt="nextjs logo"></Image>
              </a>
            )}
            {techs.includes("nuxt") && (
              <a href="https://nuxt.com/" className="relative">
                <Image src={nuxtlogo} height={24} alt="nuxt logo"></Image>
              </a>
            )}
            {techs.includes("flutter") && (
              <a href="https://flutter.dev/" className="relative ">
                <Image src={flutterlogo} height={32} alt="flutter logo"></Image>
              </a>
            )}
            {techs.includes("tailwind") && (
              <a href="https://tailwindcss.com/" className="relative ">
                <Image src={tailwindlogo} height={22} alt="tailwind logo"></Image>
              </a>
            )}
            {techs.includes("firebase") && (
              <a href="https://firebase.com/" className="relative ">
                <Image src={firebaselogo} height={64} alt="firebase logo"></Image>
              </a>
            )}
            {techs.includes("supabase") && (
              <a href="https://supabase.com/" className="relative ">
                <Image src={supabaselogo} height={28} alt="supabase logo"></Image>
              </a>
            )}
            {techs.includes("angular") && (
              <a href="https://angular.io/" className="relative ">
                <Image src={angularlogo} height={50} alt="angular logo"></Image>
              </a>
            )}
            {techs.includes("bootstrap") && (
              <a href="https://getbootstrap.com/" className="relative ">
                <Image src={bootstraplogo} height={40} alt="bootstrap logo"></Image>
              </a>
            )}
          </div>
          <a className="group flex flex-row items-center gap-3 rounded-md   text-white" href="">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
