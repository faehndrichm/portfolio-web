import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import DumbellImage from "../assets/dumbell.png";

export default function Hobbies() {
  return (
    <Parallax pages={6}>
      <ParallaxLayer sticky={{ start: 1, end: 3 }} className="grid grid-cols-3 grid-rows-3">
        <div className="row-start-2 col-start-1 flex justify-center items-center">
          <Image
            className=""
            height={100}
            width={100}
            layout="fixed"
            sizes=""
            src={DumbellImage}
            alt="Dumbell Picture"
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 2, end: 3 }} className="grid grid-cols-3 grid-rows-3">
        <div className="row-start-1 col-start-3 flex justify-center items-center">
          <Image
            className=""
            height={100}
            width={100}
            layout="fixed"
            sizes=""
            src={DumbellImage}
            alt="Dumbell Picture"
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={1} className="flex justify-center items-center bg-gray-100">
        <p className="font-montserat text-3xl">Bizeps trainieren</p>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1} className="flex justify-center items-center bg-gray-200">
        <p className="font-montserat text-3xl">Bizeps trainieren</p>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1} className="flex justify-center items-center bg-gray-300">
        <p className="font-montserat text-3xl">Bizeps trainieren</p>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={1} className="flex justify-center items-center bg-gray-400">
        <p className="font-montserat text-3xl">Bizeps trainieren</p>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={2} className="grid grid-cols-3 grid-rows-3">
        <div className="row-start-1 col-start-2 flex justify-center items-center">
          <Image
            className=""
            height={100}
            width={100}
            layout="fixed"
            sizes=""
            src={DumbellImage}
            alt="Dumbell Picture"
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={3} className="grid grid-cols-3 grid-rows-3">
        <div className="row-start-3 col-start-1 flex justify-center items-center">
          <Image
            className=""
            height={100}
            width={100}
            layout="fixed"
            sizes=""
            src={DumbellImage}
            alt="Dumbell Picture"
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={1} className="flex justify-center items-center bg-gray-500">
        <p className="font-montserat text-3xl">Bizeps trainieren</p>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={2} className="grid grid-cols-3 grid-rows-3">
        <div className="row-start-1 col-start-1 flex justify-center items-center">
          <Image
            className=""
            height={100}
            width={100}
            layout="fixed"
            sizes=""
            src={DumbellImage}
            alt="Dumbell Picture"
          />
        </div>
        <div className="row-start-3 col-start-1 flex justify-center items-center">
          <Image
            className=""
            height={100}
            width={100}
            layout="fixed"
            sizes=""
            src={DumbellImage}
            alt="Dumbell Picture"
          />
        </div>
        <div className="row-start-1 col-start-3 flex justify-center items-center">
          <Image
            className=""
            height={100}
            width={100}
            layout="fixed"
            sizes=""
            src={DumbellImage}
            alt="Dumbell Picture"
          />
        </div>
        <div className="row-start-3 col-start-3 flex justify-center items-center">
          <Image
            className=""
            height={100}
            width={100}
            layout="fixed"
            sizes=""
            src={DumbellImage}
            alt="Dumbell Picture"
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={3} className="grid grid-cols-3 grid-rows-3">
        <div className="row-start-2 col-start-1 flex justify-center items-center">
          <Image
            className=""
            height={100}
            width={100}
            layout="fixed"
            sizes=""
            src={DumbellImage}
            alt="Dumbell Picture"
          />
        </div>
        <div className="row-start-3 col-start-2 flex justify-center items-center">
          <Image
            className=""
            height={100}
            width={100}
            layout="fixed"
            sizes=""
            src={DumbellImage}
            alt="Dumbell Picture"
          />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
