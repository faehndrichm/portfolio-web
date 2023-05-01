"use client";

import Image from "next/image";

import { useState } from "react";

import Arrows from "../assets/logo/arrows.png";
import Badge from "../assets/logo/badge.png";
import Shark from "../assets/logo/cloud.png";
import Laptop from "../assets/logo/laptop.png";
import PR from "../assets/logo/pr.png";
import Website from "../assets/logo/website.png";
import Moon from "../assets/background/moon_half.png";
import Stars from "../assets/background/stars.svg";
import HeroProjectElement from "./hero-project-element";

export default function Hero() {
  const [moonClass, setMoonClass] = useState("opacity-0 top-20");
  const [starClass, setStarClass] = useState("scale-50");

  return (
    <div className="w-full">
      <div
        className={`${starClass} absolute inset-0 h-screen w-screen transition-transform delay-150 duration-1000 ease-out`}
        style={{ backgroundImage: `url(${Stars.src})` }}></div>

      <div className="relative flex w-full justify-center overflow-hidden">
        <div
          className={`${moonClass} absolute h-screen w-full max-w-7xl transition-[top,_opacity]  delay-150 duration-1000 ease-out`}>
          <Image
            src={Moon}
            onLoadingComplete={(img) => {
              setMoonClass("opacity-50 top-0");
              setStarClass("scale-100");
            }}
            fill
            style={{ objectFit: "contain" }}
            alt="Moon"
          />
        </div>

        <div className="mx-6 w-full max-w-7xl">
          <section id="hero" className=" my-24 flex items-center md:my-6 md:h-screen">
            <div className="z-10 flex flex-col items-stretch gap-12 md:flex-row">
              <div className="p-3 md:flex-1">
                <h1 className="mb-3 bg-gradient-to-r from-white via-cyan-200 to-indigo-300 bg-clip-text font-ps2p text-3xl text-transparent  md:text-6xl">
                  Marco Fähndrich
                </h1>
                <h3 className="font-nunito text-[1.5rem] leading-relaxed  text-slate-300">
                  Ich muss dir was ganz wichtiges sagen. Ich könnts dir jetzt sagen, aber ich sags
                  dir lieber morgen.
                </h3>
                <div className="mt-6 flex flex-col gap-3 md:flex-row">
                  <button className="group flex flex-row items-center justify-center gap-6 rounded-full bg-white  px-9 py-3 font-montserat text-2xl font-bold hover:shadow-lg hover:shadow-white/50 md:justify-start">
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>

                  <button className="group flex flex-row items-center justify-center gap-6 rounded-full  bg-opacity-0 px-9 py-3 font-montserat text-2xl font-semibold text-white outline outline-1 outline-gray-500/50  backdrop-blur-lg hover:shadow-lg hover:shadow-white/50 hover:outline-2 md:justify-start">
                    More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      className="h-6 w-6  transition-transform duration-300 group-hover:translate-x-2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-100 grid grid-cols-6 gap-3  md:max-h-[48rem] md:flex-2 md:grid-cols-12 ">
                <HeroProjectElement
                  props={{
                    title: "Project α",
                    src: Arrows,
                    className: "col-span-3 row-span-3 row-start-2",
                  }}
                />
                <HeroProjectElement
                  props={{
                    title: "Personal Record",
                    src: PR,
                    className: "col-span-3 row-span-3",
                  }}
                />
                <HeroProjectElement
                  props={{
                    title: "Small",
                    src: Badge,
                    className: "col-span-2 row-span-4 md:col-start-auto md:row-start-2",
                  }}
                />

                <HeroProjectElement
                  props={{
                    title: "Narrow",
                    src: Website,
                    className: "col-span-2 row-span-2 md:row-start-2",
                  }}
                />
                <HeroProjectElement
                  props={{
                    title: "Beans",
                    src: Shark,
                    className: "col-span-3 row-span-2",
                  }}
                />
                <HeroProjectElement
                  props={{
                    title: "Config",
                    src: Laptop,
                    className: "col-span-3 col-start-4 row-span-3 row-start-4",
                  }}
                />
                <HeroProjectElement
                  props={{
                    title: "Conviction",
                    src: Shark,
                    className: "col-span-3 row-span-3",
                  }}
                />
                <HeroProjectElement
                  props={{
                    title: "Barrow",
                    src: Laptop,
                    className: "col-span-3 row-span-3",
                  }}
                />
                <HeroProjectElement
                  props={{
                    title: "BigMac",
                    src: Badge,
                    className: "col-span-4 col-start-3 row-span-4 aspect-square",
                  }}
                />
                <HeroProjectElement
                  props={{
                    title: "Means",
                    src: Website,
                    className: "col-span-2 row-span-3",
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
