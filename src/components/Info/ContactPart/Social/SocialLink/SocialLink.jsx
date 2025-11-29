export default function SocialLink({ link, img }) {
  return (
    <li className="w-8 h-8">
      <a href={link} className="w-8 h-8">
        <img src={`${img}`} alt="social network icon" />
      </a>
    </li>
  );
}
