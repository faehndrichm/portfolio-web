import Image from "next/image";
import BgTriangleDark from "../assets/background/bg_triangle_dark.svg";
import BgTriangleLight from "../assets/background/bg_triangle_light.svg";
import ProfileImage from "../assets/profile.png";

export default function ContactSection() {
  return (
    <section className="flex w-full flex-col">
      <div className="relative h-64 w-full ">
        <Image src={BgTriangleLight} fill alt="BgTriangleDark" />
      </div>
      <div className="to flex w-full flex-col items-center justify-stretch bg-gradient-to-r from-gray-900 to-gray-500">
        <section className="w-full max-w-6xl">
          <div className="relative flex h-96 w-full flex-col items-end justify-end overflow-hidden rounded-3xl md:flex-row ">
            <div className="absolute flex w-full items-center rounded-3xl bg-gradient-to-r from-indigo-300 to-cyan-200 p-6 pr-72 md:h-72">
              <div className="flex flex-col items-start gap-3">
                <h2 className="font-montserat text-4xl font-bold text-gray-900">
                  Ich bin einfach der Coolste
                </h2>
                <p className="max-w-3xl font-nunito text-2xl text-slate-900">
                  Or neglected agreeable of discovery concluded oh it sportsman. Week to time in
                  john. Son elegance use weddings separate.
                </p>
                <button className="flex  flex-row items-center justify-between gap-6 rounded-full bg-gray-900 px-8 py-3 font-montserat text-lg font-semibold text-white hover:shadow-lg hover:shadow-black/50">
                  Call me maybe
                </button>
              </div>
            </div>
            <div className="relative flex">
              {/* <div className="absolute bottom-0 h-72 w-72 rounded-t-full bg-[#161F33]"></div> */}
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
