import Info from "../../components/Info";

export default function Home() {
  return (
    <main className="relative text-center">
      <div
        className="  min-w-screen min-h-screen flex  justify-center pt-[12%]! pb-[8%]! xl:py-20! md:pb-12! md:pt-10! sm:py-[5%]!"
        style={{ background: "#69C3FA" }}
      >
        <Info />
      </div>
      <p
        className="  font-[Raleway] pb-5! text-sm xl:bottom-[10%] md:absolute md:bottom-0 md:left-1/2 md:translate-x-[-50%] md:bg-transparent!  "
        style={{ color: "#323030", background: "#69C3FA" }}
      >
        © 2025 ТМ СмачноТак!
      </p>
    </main>
  );
}
