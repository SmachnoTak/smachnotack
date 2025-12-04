import SocialLink from "./SocialLink";

export default function Social() {
  return (
    <div className="bottom-45 xl:bottom-[115%]! lg:bottom-68! md:absolute md:bottom-47!  md:left-[-19px]! sm:absolute sm:bottom-34! sm:left-3!">
      <p
        className=" font-[Raleway] text-sm! mb-4! xl:text-xl! md:mb-2! md:text-[15px]! sm:text-[11px]!  "
        style={{ color: "#142A36" }}
      >
        Наразі можете завітати до нас:
      </p>
      <ul className="flex justify-between mb-4! my-0! mx-auto! w-44 xl:w-50!  md:w-50  md:mx-0! sm:w-35">
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
