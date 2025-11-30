import SocialLink from "./SocialLink";

export default function Social() {
  return (
    <div className="md:absolute lg:bottom-[218px] md:bottom-40  md:left-0">
      <p
        className="font-[Raleway] mb-4! md:mb-2! md:text-sm"
        style={{ color: "#142A36" }}
      >
        Наразі можете завітати до нас:
      </p>
      <ul className="flex justify-between w-44 mb-4! my-0! mx-auto! md:mx-0!">
        <SocialLink link="/" img="/public/favicon/viber.svg" />
        <SocialLink
          link="https://www.instagram.com/smachno.tak.ua?igsh=NnZpOWdyOHlkcHVz"
          img="/public/favicon/telegram.svg"
        />
        <SocialLink link="/" img="/public/favicon/instagram.svg" />
        <SocialLink link="/" img="/public/favicon/whatsapp.svg" />
      </ul>
    </div>
  );
}
