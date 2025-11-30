export default function Phone() {
  return (
    <div className="flex items-center w-39 justify-between absolute top-110  lg:right-25 lg:top-25 lg:text-sm lg:flex-col lg:items-end md:top-15 md:right-20">
      <svg className="w-8 h-8 lg:mb-2!">
        <use xlinkHref="favicon/sprites.svg#phone"></use>
      </svg>
      <a
        href="tel:+380957554008"
        className="no-underline font-[Raleway] cursor-pointer"
        style={{ color: "#142A36" }}
      >
        +380957554008
      </a>
    </div>
  );
}
