import Background from "./Background";
import CandyBlue from "./CandyBlue";
import Label from "./Label";
import ContactPart from "./ContactPart/ContactPart";
import CandyPink from "./CandyPink/CandyPink";
import Phone from "./ContactPart/Phone/Phone";

export default function Info() {
  return (
    <div className=" bg-white w-[92%]  flex justify-center items-center rounded-4xl shadow-[0_0_15px_rgba(0,0,0,0.3)]">
      <Background />
      <Label />
      <ContactPart />
      <Phone />
      <CandyBlue />
      <CandyPink />
    </div>
  );
}
