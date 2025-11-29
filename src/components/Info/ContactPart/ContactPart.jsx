import InfoText from "./InfoText";
import Phone from "./Phone/Phone";
import Social from "./Social";

export default function ContactPart() {
  return (
    <div className="absolute top-60 flex flex-col items-center w-[80%]">
      <InfoText />
      <Social />
      <Phone />
    </div>
  );
}
