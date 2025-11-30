import SocialLink from "./SocialLink";

export default function Social() {
  return (
    <div className="bottom-45 sm:absolute sm:bottom-35 sm:left-0  md:absolute md:bottom-40  md:left-0 lg:bottom-[218px]">
      <p
        className=" font-[Raleway] sm:text-[11px]! text-sm! mb-4! md:mb-2! md:text-sm!"
        style={{ color: "#142A36" }}
      >
        Наразі можете завітати до нас:
      </p>
      <ul className="flex justify-between w-44 mb-4! my-0! mx-auto! md:mx-0! sm:w-35">
        <SocialLink link="/" img="favicon/viber.svg" />
        <SocialLink
          link="https://www.instagram.com/smachno.tak.ua?igsh=NnZpOWdyOHlkcHVz"
          img="favicon/telegram.svg"
        />
        <SocialLink link="/" img="favicon/instagram.svg" />
        <SocialLink link="/" img="favicon/whatsapp.svg" />
      </ul>
    </div>
  );
}
