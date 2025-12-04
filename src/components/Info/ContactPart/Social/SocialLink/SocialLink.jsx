export default function SocialLink({ link, img }) {
  return (
    <li className="w-8 h-8 xl:w-15 xl:h-15  md:w-10! sm:w-6.5 ">
      <a href={link} className="w-full">
        <img src={`${img}`} alt="social network icon" className="w-9" />
      </a>
    </li>
  );
}
