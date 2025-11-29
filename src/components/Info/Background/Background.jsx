export default function Background() {
  return (
    <div
      style={{ background: "#FFFCF8" }}
      className=" relative w-[90%] md:w-[97%] h-[95%]! rounded-4xl"
    >
      <svg className="absolute h-[95%] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] md:hidden!">
        <use xlinkHref="favicon/sprites.svg#bg"></use>
      </svg>
      <svg className="absolute h-[95%] w-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden! md:block! object-cover">
        <use xlinkHref="favicon/sprites.svg#bgLap"></use>
      </svg>
    </div>
  );
}
