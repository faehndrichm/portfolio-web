import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface ImageComponentProps {
  title: string;
  src: StaticImageData;
  alt?: string;
  width?: number;
  height?: number;
  className: string;
}

export default function HeroProjectElement({ props }: { props: ImageComponentProps }) {
  const { title, src, alt, width, height, className } = props;
  return (
    <Link
      href={"/"}
      className={
        className +
        " flex flex-col rounded-md border border-gray-500/25 bg-opacity-100 p-3 text-xl" +
        " text-white transition-all delay-100 duration-300 ease-in-out hover:z-10" +
        " hover:scale-150 hover:shadow-xl hover:shadow-white/20 hover:backdrop-blur-md"
      }>
      <h3 className="text-center font-inconsolata">{title}</h3>
      <div className="flex flex-1 items-center justify-center">
        <Image height={height ?? 48} width={width ?? 48} src={src} alt={alt ?? ""} />
      </div>
    </Link>
  );
}
