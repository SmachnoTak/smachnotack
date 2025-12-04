import InfoText from "./InfoText";
import Social from "./Social";

export default function ContactPart() {
  return (
    <div className="absolute top-60  flex flex-col items-center w-[80%] xl:top-80 md:top-55 sm:top-60">
      <InfoText />
      <Social />
    </div>
  );
}
