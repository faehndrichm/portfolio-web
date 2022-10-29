import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Algo2 from "../assets/algorithm2.png";
import Algo from "../assets/algo_line.png";
import Blob from "../assets/blob.svg";
import Computer from "../assets/computer.png";
import Neural from "../assets/neural1.png";

export default function Algos() {
function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const blobs = [];
for(let i = 0; i < 20; i++){
  blobs.push({
    height: randInt(100, 200),
    width: randInt(100, 200),
    speed: (Math.random()-0.5)*2,
    row: randInt(1, 6),
    col: randInt(1, 6),
    offset: randInt(0, 2),
  });
}
  
  return (
    <Parallax pages={2} className="">
      {blobs.map((b, i) => (
        <ParallaxLayer
          key={i}
          offset={b.offset}
          speed={b.speed}
          className="grid grid-cols-5 grid-rows-5">
          <div className={`col-start-${b.col} row-start-${b.row}`}>
            <Image
              className=""
              height={b.height}
              width={b.width}
              layout="fixed"
              sizes=""
              src={Blob}
              alt="Blob Picture"
            />
          </div>
        </ParallaxLayer>
      ))}
      <article className="z-50 relative pt-32 flex justify-center">
        <div className="max-w-6xl">
          <section className="my-24">
            <h2>
              <div class="flex flex-col gap-6 mb-6 lg:items-center lg:flex-row-reverse">
                <div class="flex-1">
                  <p class="text-blue-400 font-medium uppercase text-lg mb-4 font-poppins">walls</p>
                  <h2 class="font-quicksand text-blue-300 font-bold text-3xl md:text-4xl mb-4">
                    Use securing confined his shutters
                  </h2>
                  <p class="text-white text-lg mt-2 font-poppins mb-3">
                    Greatly hearted has who believe. Drift allow green son walls years for blush.
                    Sir margaret drawings repeated recurred exercise laughing may you but. Do
                    repeated whatever to welcomed absolute no. Fat surprise although outlived and
                    informed shy dissuade property. Musical by me through he drawing savings an. No
                    we stand avoid decay heard mr. Common so wicket appear to sudden worthy on.
                    Shade of offer ye whole stood hoped.
                  </p>
                  <p class="text-white text-lg mt-2 font-poppins mb-3">
                    He as compliment unreserved projecting. Between had observe pretend delight for
                    believe. Do newspaper questions consulted sweetness do. Our sportsman his
                    unwilling fulfilled departure law. Now world own total saved above her cause
                    table. Wicket myself her square remark the should far secure sex. Smiling
                    cousins warrant law explain for whether.
                  </p>
                </div>
                <div class="flex-1 mx-auto flex justify-center">
                  <Image
                    className=""
                    height={250}
                    width={200}
                    layout="fixed"
                    sizes=""
                    src={Algo}
                    alt="Profile Picture"
                  />
                </div>
              </div>
            </h2>
          </section>
          <section className="my-24">
            <h2>
              <div class="flex flex-col gap-6  mb-6 lg:items-center lg:flex-row-reverse">
                <div class="flex-1 mx-auto flex justify-center">
                  <Image
                    className=""
                    height={250}
                    width={250}
                    layout="fixed"
                    sizes=""
                    src={Computer}
                    alt="Profile Picture"
                  />
                </div>
                <div class="flex-1">
                  <p class="text-blue-400 font-medium uppercase text-lg mb-4 font-poppins">
                    basket
                  </p>
                  <h2 class="font-quicksand text-blue-300 font-bold text-3xl md:text-4xl mb-4">
                    Thrown shy denote ten ladies
                  </h2>
                  <span class="text-white text-lg mt-2 font-poppins"></span>
                  <p class="text-white text-lg mt-2 font-poppins mb-3">
                    Turned it up should no valley cousin he. Speaking numerous ask did horrible
                    packages set. Ashamed herself has distant can studied mrs. Led therefore its
                    middleton perpetual fulfilled provision frankness. Small he drawn after among
                    every three no. All having but you edward genius though remark one.
                  </p>
                  <p class="text-white text-lg mt-2 font-poppins mb-3">
                    Placing assured be if removed it besides on. Far shed each high read are men
                    over day. Afraid we praise lively he suffer family estate is. Ample order up in
                    of in ready. Timed blind had now those ought set often which. Or snug dull he
                    show more true wish. No at many deny away miss evil. On in so indeed spirit an
                    mother. Amounted old strictly but marianne admitted. People former is remove
                    remain as.
                  </p>
                </div>
              </div>
            </h2>
          </section>
          <section className="my-24">
            <h2>
              <div class="flex flex-col gap-6  mb-6 lg:items-center lg:flex-row-reverse">
                <div class="flex-1">
                  <p class="text-blue-400 font-medium uppercase text-lg mb-4 font-poppins">
                    general
                  </p>
                  <h2 class="font-quicksand text-blue-300 font-bold text-3xl md:text-4xl mb-4">
                    He connection interested so we
                  </h2>
                  <span class="text-white text-lg mt-2 font-poppins">
                    Of resolve to gravity thought my prepare chamber so. Unsatiable entreaties
                    collecting may sympathize nay interested instrument. If continue building
                    numerous of at relation in margaret. Lasted engage roused mother an am at. Other
                    early while if by do to. Missed living excuse as be. Cause heard fat above first
                    shall for.
                  </span>
                  <p class="text-white text-lg mt-2 font-poppins mb-3"> </p>
                </div>
                <div class="flex-1 mx-auto flex justify-center">
                  <Image
                    className=""
                    height={250}
                    width={250}
                    layout="fixed"
                    sizes=""
                    src={Neural}
                    alt="Profile Picture"
                  />
                </div>
              </div>
            </h2>
          </section>
          <section className="my-24">
            <h2>
              <div class="flex flex-col gap-6  mb-6 lg:items-center lg:flex-row-reverse">
                <div class="flex-1 mx-auto flex justify-center">
                  <Image
                    className=""
                    height={250}
                    width={250}
                    layout="fixed"
                    sizes=""
                    src={Algo2}
                    alt="Profile Picture"
                  />
                </div>
                <div class="flex-1">
                  <p class="text-blue-400 font-medium uppercase text-lg mb-4 font-poppins">
                    attention
                  </p>
                  <h2 class="font-quicksand text-blue-300 font-bold text-3xl md:text-4xl mb-4">
                    Far concluded not his something extremity
                  </h2>
                  <p class="text-white text-lg mt-2 font-poppins mb-3">
                    Dispatched entreaties boisterous say why stimulated. Certain forbade picture now
                    prevent carried she get see sitting. Up twenty limits as months. Inhabit so
                    perhaps of in to certain. Sex excuse chatty was seemed warmth. Nay add far few
                    immediate sweetness earnestly dejection. Whole every miles as tiled at seven or.
                  </p>
                  <p class="text-white text-lg mt-2 font-poppins">
                    Wished he entire esteem mr oh by. Possible bed you pleasure civility boy
                    elegance ham. He prevent request by if in pleased. Picture too and concern has
                    was comfort. Ten difficult resembled eagerness nor. Same park bore on be. Warmth
                    his law design say are person. Pronounce suspected in belonging conveying ye
                    repulsive.
                  </p>
                </div>
              </div>
            </h2>
          </section>
        </div>
      </article>
    </Parallax>
  );
}
