export default function Phone() {
  return (
    <div className="flex items-center w-39 justify-between absolute top-102  lg:right-25 lg:top-25 lg:text-sm lg:flex-col lg:items-end md:top-15 md:right-20 sm:top-18 sm:right-16 sm:w-30">
      <svg viewBox="0 0 35 35" className="w-8 h-8 lg:mb-2! sm:h-7 sm:w-7">
        <use xlinkHref="favicon/sprites.svg#phone"></use>
      </svg>
      <a
        href="tel:+380957554008"
        className="no-underline font-[Raleway] cursor-pointer sm:text-[12px]"
        style={{ color: "#142A36" }}
      >
        +380957554008
      </a>
    </div>
  );
}
