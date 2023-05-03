import Image from "next/image";
import BgTriangleDark from "../assets/background/bg_triangle_dark.svg";
import BgTriangleLight from "../assets/background/bg_triangle_light.svg";
import ProfileImage from "../assets/profile.png";

export default function ContactSection() {
  return (
    <section className="flex w-full flex-col">
      <div className="to flex w-full flex-col items-center justify-stretch bg-gradient-to-bl from-gray-950 to-gray-400">
        <div className="relative h-64 w-full ">
          <Image src={BgTriangleLight} fill alt="BgTriangleDark" />
        </div>
        <section className="w-full max-w-6xl">
          <div className="flex w-full flex-col items-end justify-end overflow-hidden rounded-3xl md:relative md:h-96 md:flex-row ">
            <div className="flex w-full items-center rounded-3xl  p-6 md:absolute md:h-72 md:pr-72">
              <div className="flex flex-col items-start gap-3  text-white ">
                <h2 className="font-montserat text-4xl font-bold">Ich bin einfach der Coolste</h2>
                <p className="max-w-3xl font-nunito text-2xl ">
                  Or neglected agreeable of discovery concluded oh it sportsman. Week to time in
                  john. Son elegance use weddings separate.
                </p>
                <button className="group flex  flex-row items-center justify-between gap-6 rounded-full bg-white px-8 py-3 font-montserat text-xl font-semibold text-gray-950 hover:shadow-lg hover:shadow-black/50 md:bg-gray-900 md:text-white">
                  Call me maybe
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
            <div className="flex md:relative">
              <Image height={380} width={320} src={ProfileImage} alt="Profile Picture" />
            </div>
          </div>
        </section>
        <div className="relative h-64 w-full">
          <Image src={BgTriangleDark} fill alt="BgTriangleDark" />
        </div>
      </div>
    </section>
  );
}
