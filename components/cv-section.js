import { supabase } from "../lib/supabaseClient";
import React from "react";
import CVLine from "./cv-line";
export default async function CV() {
  let { data, status, statusText } = await supabase.from("experience").select("*");
  let experiences = [];
  if (data) {
    experiences = data.map((d) => ({
      ...d,
      to: new Date(d.to_date),
      from: new Date(d.from_date),
    }));
  }

  let items = [...Array(30).keys()];
  return (
    <div className=" bg-gray flex w-full flex-col items-center justify-stretch">
      <div className="bg-blue-300"></div>
      <div className="bg-indigo-900"></div>
      <div className="bg-blue-900"></div>
      <section className="w-full max-w-6xl">
        <h2 className="font-white text-center font-nunito text-6xl text-white">CV</h2>
        <div className="grid auto-rows-[4rem] grid-cols-[2rem_repeat(3,minmax(0,1fr))] place-items-stretch gap-1 py-24">
          <div
            key={-3}
            className="col-start-2 m-auto grid grid-cols-1 grid-rows-1 place-items-center">
            <div className="z-10 flex flex-row gap-3 font-nunito text-2xl font-bold text-white [grid-area:1/1/span_1/span_1]">
              Education
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div className="h-full w-full bg-blue-300/50 blur-xl [grid-area:1/1/span_1/span_1]"></div>
          </div>
          <div key={-2} className="m-auto grid grid-cols-1 grid-rows-1 place-items-center">
            <div className="z-10 flex flex-row gap-3  font-nunito text-2xl font-bold text-white [grid-area:1/1/span_1/span_1]">
              Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
            <div className="h-full w-full bg-blue-900/75 blur-xl [grid-area:1/1/span_1/span_1]"></div>
          </div>
          <div key={-1} className="m-auto grid grid-cols-1 grid-rows-1 place-items-center">
            <div className="z-10 flex flex-row gap-3 font-nunito text-2xl font-bold text-white [grid-area:1/1/span_1/span_1]">
              Work Experience
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="h-full w-full bg-indigo-900/75 blur-xl [grid-area:1/1/span_1/span_1]"></div>
          </div>

          {items.map(function (i) {
            return (
              <React.Fragment key={i}>
                <div
                  style={{
                    gridRowStart: i + 2,
                    gridRowEnd: i + 3,
                  }}
                  className="col-start-1 col-end-2 flex flex-row items-center ">
                  <div className="font-bold text-white">{i + 1995}</div>
                  <div className="ml-3 h-3 w-3 rounded-full bg-white text-white"></div>
                  <div className="h-[1px] w-12 bg-white text-white"></div>
                </div>

                {experiences
                  .filter(
                    (p) =>
                      p.category === 1 &&
                      p.from.getFullYear() <= i + 1995 &&
                      p.to.getFullYear() >= i + 1995
                  )
                  .map((p, offset) => (
                    <CVLine
                      key={p.id}
                      experience={p}
                      year={i + 1995}
                      row={i}
                      offset={offset}
                      col={2}
                      color={"blue-300"}></CVLine>
                  ))}
                {experiences
                  .filter(
                    (p) =>
                      p.category === 0 &&
                      p.from.getFullYear() <= i + 1995 &&
                      p.to.getFullYear() >= i + 1995
                  )
                  .map((p, offset) => (
                    <CVLine
                      key={p.id}
                      experience={p}
                      year={i + 1995}
                      row={i}
                      col={3}
                      offset={offset}
                      color={"indigo-900"}></CVLine>
                  ))}
                {experiences
                  .filter(
                    (p, offset) =>
                      p.category === 2 &&
                      p.from.getFullYear() <= i + 1995 &&
                      p.to.getFullYear() >= i + 1995
                  )
                  .map((p, offset) => (
                    <CVLine
                      key={p.id}
                      experience={p}
                      year={i + 1995}
                      row={i}
                      col={4}
                      offset={offset}
                      color={"blue-900"}></CVLine>
                  ))}
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </div>
  );
}
