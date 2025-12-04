import InfoText from "./InfoText";
import Social from "./Social";

export default function ContactPart() {
  return (
    <div className="absolute top-60 xl:top-[45%] md:top-60 sm:top-50 flex flex-col items-center w-[80%]">
      <InfoText />
      <Social />
    </div>
  );
}
