import SocialLink from "./SocialLink";

export default function Social() {
  return (
    <div className="bottom-45 xl:bottom-[135%]! lg:bottom-63! md:absolute md:bottom-45!  md:left-[-19px]! sm:absolute sm:bottom-48! sm:left-0!">
      <p
        className=" font-[Raleway] text-sm! mb-4! xl:text-xl! md:mb-2! md:text-[15px]! sm:text-[11px]!  "
        style={{ color: "#142A36" }}
      >
        Наразі можете завітати до нас:
      </p>
      <ul className="flex justify-between mb-4! my-0! mx-auto! w-44 xl:w-50!  md:w-50  md:mx-0! sm:w-35">
        <SocialLink
          link="viber://chat?number=%2B380957554008"
          img="favicon/viber.svg"
        />
        <SocialLink
          link="https://www.instagram.com/smachno.tak.ua?igsh=NnZpOWdyOHlkcHVz"
          img="favicon/instagram.svg"
        />
        <SocialLink link="https://t.me/taksmachno" img="favicon/telegram.svg" />
        <SocialLink
          link="https://wa.me/380957554008"
          img="favicon/whatsapp.svg"
        />
      </ul>
    </div>
  );
}
