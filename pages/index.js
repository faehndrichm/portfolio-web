import Head from "next/head";
import Image from "next/image";
import Waves from "../assets/gravity_waves.svg";
import Waves2 from "../assets/gravity_waves2.svg";
import Arrows from "../assets/logo/arrows.png";
import Badge from "../assets/logo/badge.png";
import Shark from "../assets/logo/cloud.png";
import Laptop from "../assets/logo/laptop.png";
import PR from "../assets/logo/pr.png";
import Website from "../assets/logo/website.png";
import Moon from "../assets/moon_half.png";
import ProfileImage from "../assets/pic5.png";
import Stars from "../assets/stars.svg";

export default function Home() {

  let transition =
    " transition-all delay-150 ease-in-out hover:z-10 hover:scale-150   hover:shadow-xl hover:shadow-white/20 duration-300";
  
    let title="text-center font-inconsolata";
  
    return (
      <div className=" relative flex flex-col items-center">
        <Head>
          <title>My Homepage - Marco Fähndrich</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div
          className="absolute inset-0 h-screen w-screen"
          style={{ backgroundImage: `url(${Stars.src})` }}></div>

        <div className="relative flex w-full justify-center overflow-hidden">
          <div className="absolute top-0 h-[60%] w-full opacity-50">
            <Image src={Moon} layout="fill" objectFit="contain" alt="Moon" />
          </div>
          <div className="absolute bottom-0 h-64 w-full">
            <Image src={Waves} layout="fill" alt="waves" />
          </div>

          <div className="mx-6 w-full max-w-6xl">
            <section id="hero" className=" my-24 flex items-center md:my-6 md:h-screen">
              <div className="z-10 flex flex-col items-stretch gap-12 md:flex-row">
                <div className="p-3 md:flex-1">
                  <h1 className="mb-3 font-ps2p text-3xl font-bold text-white md:text-5xl">
                    Marco Fähndrich
                  </h1>
                  <h3 className="font-nunito text-lg text-white md:text-2xl">
                    Ich muss dir was ganz wichtiges sagen. Ich könnts dir jetzt sagen, aber ich sags
                    dir lieber morgen.
                  </h3>
                  <div className="mt-6 flex gap-3">
                    <button className="flex  flex-row items-center justify-between gap-6 rounded-xl bg-blue-200 px-8 py-3 font-montserat text-lg font-semibold text-gray-900 hover:shadow-lg hover:shadow-white/50">
                      Klick
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </button>
                    <button className="flex flex-row items-center gap-6 rounded-xl bg-white px-8 py-3 font-montserat text-lg font-semibold text-gray-700 hover:shadow-lg hover:shadow-white/50">
                      Klack
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        className="h-6 w-6">
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
                  <div
                    className={
                      "col-span-3 row-span-3 row-start-2 flex aspect-square flex-col rounded-md border border-gray-500/25 bg-opacity-100 p-3 text-xl text-white  hover:backdrop-blur-md" +
                      transition
                    }>
                    <h3 className={title}>Project &#945;</h3>
                    <div className="flex flex-1 items-center justify-center">
                      <Image layout="fixed" height={48} width={48} src={Arrows} alt="" />
                    </div>
                  </div>
                  <div
                    className={
                      "col-span-3 row-span-3 flex aspect-square flex-col rounded-md border border-gray-500/25 bg-opacity-100 p-3 text-xl text-white hover:backdrop-blur-lg" +
                      transition
                    }>
                    <h3 className={title}>Personal Record</h3>
                    <div className="flex flex-1 items-center justify-center">
                      <Image layout="fixed" height={48} width={48} src={PR} alt="" />
                    </div>
                  </div>
                  <div
                    className={
                      "col-span-2 col-start-2 row-span-4 flex flex-col rounded-md border border-gray-500/25 bg-opacity-100 p-3 text-xl text-white hover:backdrop-blur-lg md:col-start-auto md:row-start-2" +
                      transition
                    }>
                    <h3 className={title}>Small</h3>
                    <div className="flex flex-1 items-center justify-center">
                      <Image layout="fixed" height={48} width={48} src={Badge} alt="" />
                    </div>
                  </div>
                  <div
                    className={
                      "col-span-2 row-span-2 flex aspect-square flex-col rounded-md border border-gray-500/25 bg-opacity-100 p-3 text-xl text-white hover:backdrop-blur-lg md:row-start-2" +
                      transition
                    }>
                    <h3 className={title}>Narrow</h3>
                    <div className="flex flex-1 items-center justify-center">
                      <Image layout="fixed" height={48} width={48} src={Website} alt="" />
                    </div>
                  </div>
                  <div
                    className={
                      "col-span-3 row-span-2 flex flex-col rounded-md border border-gray-500/25 bg-opacity-100 p-3 text-xl text-white hover:backdrop-blur-lg" +
                      transition
                    }>
                    <h3 className={title}>Beans</h3>
                    <div className="flex flex-1 items-center justify-center">
                      <Image layout="fixed" height={48} width={48} src={Shark} alt="" />
                    </div>
                  </div>
                  <div
                    className={
                      "col-span-3 col-start-4 row-span-3 row-start-4 flex aspect-square flex-col rounded-md border border-gray-500/25 bg-opacity-100 p-3 text-xl text-white hover:backdrop-blur-lg" +
                      transition
                    }>
                    <h3 className={title}>Confiction</h3>
                    <div className="flex flex-1 items-center justify-center">
                      <Image layout="fixed" height={48} width={48} src={Laptop} alt="" />
                    </div>
                  </div>
                  <div
                    className={
                      "col-span-3 row-span-3 flex aspect-square flex-col rounded-md border border-gray-500/25 bg-opacity-100 p-3 text-xl text-white hover:backdrop-blur-lg" +
                      transition
                    }>
                    <h3 className={title}>Conviction</h3>
                    <div className="flex flex-1 items-center justify-center">
                      <Image layout="fixed" height={48} width={48} src={Shark} alt="" />
                    </div>
                  </div>
                  <div
                    className={
                      "col-span-2 row-span-3 flex flex-col rounded-md border border-gray-500/25 bg-opacity-100 p-3 text-xl text-white hover:backdrop-blur-lg" +
                      transition
                    }>
                    <h3 className={title}>Barrow</h3>
                    <div className="flex flex-1 items-center justify-center">
                      <Image layout="fixed" height={48} width={48} src={Laptop} alt="" />
                    </div>
                  </div>
                  <div
                    className={
                      "col-span-4 col-start-3 row-span-4 flex aspect-square flex-col rounded-md border border-gray-500/25 bg-opacity-100 p-3 text-xl text-white hover:backdrop-blur-lg" +
                      transition
                    }>
                    <h3 className={title}>BigMac</h3>
                    <div className="flex flex-1 items-center justify-center">
                      <Image layout="fixed" height={48} width={48} src={Badge} alt="" />
                    </div>
                  </div>

                  <div
                    className={
                      "col-span-2 row-span-3 flex flex-col rounded-md border border-gray-500/25 bg-opacity-100 p-3 text-xl text-white hover:backdrop-blur-lg" +
                      transition
                    }>
                    <h3 className={title}>Means</h3>
                    <div className="flex flex-1 items-center justify-center">
                      <Image layout="fixed" height={48} width={48} src={Website} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="justify-stretch relative flex w-full flex-col items-center bg-[#324773]">
          <div className="absolute bottom-0 h-64 w-full">
            <Image src={Waves2} layout="fill" alt="waves" />
          </div>

          <section className="w-full max-w-6xl">
            <div className="relative flex flex-col md:flex-row h-96 w-full items-end justify-end overflow-hidden rounded-3xl ">
              <div className="absolute flex md:h-72 w-full items-center rounded-3xl bg-blue-200 p-6 pr-72">
                <div className="flex flex-col items-start gap-3">
                  <h2 className="font-nunito text-4xl font-semibold text-blue-900">
                    Ich bin einfach der Coolste
                  </h2>
                  <p className="font-nunito text-xl text-gray-800">
                    Or neglected agreeable of discovery concluded oh it sportsman. Week to time in
                    john. Son elegance use weddings separate.
                  </p>
                  <button className="flex  flex-row items-center justify-between gap-6 rounded-xl bg-indigo-900 px-8 py-3 font-montserat text-lg font-semibold text-white  hover:shadow-lg hover:shadow-violet-600/50">
                    Call me maybe
                  </button>
                </div>
              </div>
              <div className="relative flex">
                <div className="absolute bottom-0 h-72 w-72 rounded-t-full bg-indigo-900"></div>
                <Image
                  layout="fixed"
                  height={380}
                  width={320}
                  src={ProfileImage}
                  alt="Profile Picture"
                  // style={{ maskImage: `url(${Mask.src})` }}
                />
              </div>
            </div>
            <div className="spacer h-72"></div>
          </section>
        </div>

        <div className=" justify-stretch bg-gray flex w-full flex-col items-center">
          <section className="w-full max-w-6xl">
            <h2 className="font-white text-center font-nunito text-6xl text-white">CV</h2>
            <div className="flex h-[2000px] flex-row justify-evenly py-24">
              <div className="flex h-full flex-none flex-col justify-evenly">
                {[...Array(28).keys()].map((x) => (
                  <div key={x} className="flex flex-row items-center ">
                    <div className="font-bold text-white">{x + 1995}</div>
                    <div className="ml-3 h-3 w-3 rounded-full bg-white text-white"></div>
                    <div className="h-[1px] w-12 bg-white text-white"></div>
                  </div>
                ))}
              </div>
              <div className="relative flex flex-1 flex-row justify-evenly">
                <div>
                  <div className="mx-auto h-full w-6 rounded-full bg-blue-300 drop-shadow-md-white"></div>
                  <div className="absolute top-0 h-12  w-12 rounded-full bg-white drop-shadow-md-white"></div>
                  <div className="sticky bottom-0 rounded-t-full bg-gray-800">
                    <div className=" h-12 w-12 rounded-full bg-white drop-shadow-md-white"></div>
                  </div>
                </div>
                <div>
                  <div className="mx-auto h-full w-6 rounded-full bg-indigo-900 drop-shadow-md-white"></div>
                  <div className="absolute top-0 h-12 w-12 rounded-full bg-white drop-shadow-md-white"></div>
                  <div className="sticky bottom-0 rounded-t-full bg-gray-800">
                    <div className=" h-12 w-12 rounded-full bg-white drop-shadow-md-white"></div>
                  </div>
                </div>
                <div>
                  <div className="mx-auto h-full w-6 rounded-full bg-blue-900 drop-shadow-md-white"></div>
                  <div className="absolute top-0 h-12 w-12 rounded-full bg-white drop-shadow-md-white"></div>
                  <div className="sticky bottom-0 rounded-t-full bg-gray-800">
                    <div className=" h-12 w-12 rounded-full bg-white drop-shadow-md-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
}
