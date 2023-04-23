export default function CVProjectSvg({ experience, color, colorEnd }) {
  let rowStart = experience.from.getFullYear() - 1995 + 3;
  let yearDiff = Math.max(experience.to.getFullYear() - experience.from.getFullYear(), 1);
  let height = yearDiff * 100;

  let offset = (experience.offset?.value ?? 0) * 25;

  let heightOffset = (offset ? 1 : 0) * 100;
  // if (experience.from.getFullYear() === year && experience.to.getFullYear() === year) {
  //   height = ((experience.to.getMonth() - experience.from.getMonth()) / 12) * 100;
  //   justify = "center";
  // } else if (experience.from.getFullYear() === year) {
  //   height = ((12 - experience.from.getMonth() + 1) / 12) * 100;
  //   justify = "end";
  // } else if (experience.to.getFullYear() === year) {
  //   height = ((experience.to.getMonth() + 1) / 12) * 100;
  // }

  return (
    <div
      className="flex h-full w-full flex-row"
      style={{
        gridArea: `${rowStart - (offset ? 1 : 0)} / ${experience.category + 2} / span ${
          yearDiff + (offset ? 1 : 0)
        } / span 1`,
      }}>
      <svg
        className="flex-1 hover:drop-shadow-md-white"
        height="100%"
        width="100%"
        viewBox={`0 0 100 ${height + heightOffset}`}>
        {!!experience.id && (
          <defs>
            <linearGradient id={`grad-${experience.category}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0" stopColor={color} />
              <stop offset="1" stopColor={colorEnd} />
            </linearGradient>
          </defs>
        )}
        {!!offset && (
          <path
            d={`M 49 0 Q 49 40, ${49 + offset / 2} ${heightOffset / 2} T ${
              49 + offset
            } ${heightOffset}`}
            stroke={color}
            strokeWidth={7}
            fill="none"
            strokeLinecap="round"
          />
        )}
        <rect
          x={46.5 + offset}
          y={heightOffset}
          width="7"
          height={height - 3.5}
          fill={experience.id ? `url(#grad-${experience.category})` : color}
        />
        {!!experience.id && (
          <circle
            cx={50 + offset}
            cy={height + heightOffset - 3.5}
            r="3.5"
            stroke="white"
            strokeWidth="0"
            fill={colorEnd}
          />
        )}
        {!!experience.id && (
          <circle
            cx={50 + offset}
            cy={heightOffset + 10}
            r="10"
            stroke="white"
            strokeWidth="0"
            fill="white"
          />
        )}
      </svg>
      <span className="flex-1 text-white">{experience.name}</span>
    </div>
  );
}
