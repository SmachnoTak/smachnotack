import Background from "./Background";
import CandyBlue from "./CandyBlue";
import Label from "./Label";
import ContactPart from "./ContactPart/ContactPart";
import CandyPink from "./CandyPink/CandyPink";
import Phone from "./ContactPart/Phone/Phone";

export default function Info() {
  return (
    <div className=" bg-white w-[92%]  flex justify-center items-center rounded-4xl">
      <Background />
      <Label />
      <ContactPart />
      <Phone />
      <CandyBlue />
      <CandyPink />
    </div>
  );
}
