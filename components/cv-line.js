export default function CVLine({ experience, year, row, col, color, offset }) {
  let height = 100;
  let justify = "start";

  if (experience.from.getFullYear() === year && experience.to.getFullYear() === year) {
    height = ((experience.to.getMonth() - experience.from.getMonth()) / 12) * 100;
    justify = "center";
  } else if (experience.from.getFullYear() === year) {
    height = ((12 - experience.from.getMonth() + 1) / 12) * 100;
    justify = "end";
  } else if (experience.to.getFullYear() === year) {
    height = ((experience.to.getMonth() + 1) / 12) * 100;
  }
  return (
    <div
      style={{
        justifyContent: justify,
        gridRowStart: row + 2,
        gridRowEnd: row + 3,
        marginLeft: offset * 2 + "rem",
      }}
      className={`relative col-start-${col} col-end-${col + 1} mx-auto 
flex h-full w-full flex-col items-center text-white`}>
      {experience.from.getFullYear() === year && !!offset && (
        <div
          style={{ transform: "translateX(-1rem) rotate(-45deg) " }}
          className={`h-full w-1 rounded-full bg-${color}`}></div>
      )}
      {experience.from.getFullYear() === year && (
        <div className=" flex flex-row gap-3">
          <div className="h-3 w-3 rounded-full bg-white"></div>
          <div className="absolute left-[50%] mx-3 w-[85%]">{experience.name}</div>
        </div>
      )}
      <div style={{ height: `${height}%` }} className={`w-1 rounded-full bg-${color}`}></div>
      {experience.to.getFullYear() === year && (
        <div className=" h-3 w-3 rounded-full bg-white"></div>
      )}
    </div>
  );
}
