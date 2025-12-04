export default function Phone() {
  return (
    <div className="flex items-center w-39 justify-between absolute top-107 xl:top-34! xl:right-[10%] lg:right-25 lg:top-23! lg:text-sm lg:flex-col lg:items-end md:top-20! md:right-20 md:w-39 sm:top-20 sm:right-[10%] sm:w-30">
      <svg
        viewBox="0 0 35 35"
        className="w-8 h-8 lg:mb-2! lg:w-9.5 lg:h-9.5 md:w-9 md:h-9  sm:h-7 sm:w-7"
      >
        <use xlinkHref="favicon/sprites.svg#phone"></use>
      </svg>
      <a
        href="tel:+380957554008"
        className="no-underline font-[Raleway] cursor-pointer xl:text-[18px] lg:text-[15px] md:text-[15.5px] sm:text-[12px]"
        style={{ color: "#142A36" }}
      >
        +380957554008
      </a>
    </div>
  );
}
