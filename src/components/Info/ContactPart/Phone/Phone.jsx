export default function Phone() {
  return (
    <div className="flex items-center w-39 justify-between  md:absolute md:bottom-70 md:left-170 md:text-sm md:flex-col md:items-end">
      <svg className="w-8 h-8 md:mb-2!">
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
