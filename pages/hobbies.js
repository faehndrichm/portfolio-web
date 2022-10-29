import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Sun from "../assets/sun.png";
import Waves1 from "../assets/waves1.svg";
import Waves2 from "../assets/waves2.svg";
import Waves3 from "../assets/waves3.svg";
import Waves4 from "../assets/waves4.svg";
import Waves5 from "../assets/waves5.svg";
export default function Hobbies() {
  return (
    <Parallax pages={7} className="">
      <ParallaxLayer
        offset={0}
        speed={0.6}
        className="grid grid-cols-3 grid-rows-3 justify-items-center items-center">
        <h1 className="col-start-2 row-start-2 font-montserat text-white drop-shadow-md-white text-center text-5xl md:text-8xl ">
          Meine Hobbies
        </h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0.000001}
        className="grid grid-cols-3 grid-rows-3 justify-items-center items-center">
        <div className="col-start-3 row-start-2">
          <Image
            className=""
            height={150}
            width={150}
            layout="fixed"
            sizes=""
            src={Sun}
            alt="Profile Picture"
          />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} sticky={{ start: 2, end: 2 }} className="">
        <div className="flex justify-center items-center bg-[#c62368] h-screen">
          <p className="font-montserat text-white  text-center text-4xl font-bold">
            Bizeps trainieren 1
          </p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} sticky={{ start: 3, end: 3 }} className="">
        <div className="flex justify-center items-center bg-[#d53867] h-screen">
          <p className="font-montserat  text-white  text-center text-4xl">Bizeps trainieren 2</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} sticky={{ start: 4, end: 4 }} className="">
        <div className="flex justify-center items-center bg-[#e34c67] h-screen">
          <p className="font-montserat  text-white  text-center text-4xl">Bizeps trainieren 3</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} sticky={{ start: 5, end: 5 }} className="">
        <div className="flex justify-center items-center bg-[#ef5f67] h-screen">
          <p className="font-montserat text-white  text-center text-4xl">Bizeps trainieren 4</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} sticky={{ start: 6, end: 6 }} className="">
        <div className="flex justify-center items-center bg-[#fa7268] h-screen">
          <p className="font-montserat text-white  text-center text-4xl">Bizeps trainieren 5</p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} sticky={{ start: 0, end: 1 }} className="">
        <Image className="" layout="fill" sizes="" src={Waves1} alt="Wave Picture 1" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} sticky={{ start: 0, end: 2 }} speed={1.0} className="">
        <Image className="" layout="fill" sizes="" src={Waves2} alt="Wave Picture 2" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} sticky={{ start: 0, end: 3 }} speed={1.0} className="">
        <Image className="" layout="fill" sizes="" src={Waves3} alt="Wave Picture 3" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} sticky={{ start: 0, end: 4 }} speed={1.0} className="">
        <Image className="" layout="fill" sizes="" src={Waves4} alt="Wave Picture 4" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} sticky={{ start: 0, end: 5 }} speed={1.0} className="">
        <Image className="" layout="fill" sizes="" src={Waves5} alt="Wave Picture 5" />
      </ParallaxLayer>
    </Parallax>
  );
}
