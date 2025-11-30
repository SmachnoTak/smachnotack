import Info from "../../components/Info";

export default function Home() {
  return (
    <main
      className="  min-w-screen min-h-screen flex  justify-center py-10! md:pb-12! md:pt-10! sm:py-[5%]!"
      style={{ background: "#69C3FA" }}
    >
      <Info />
      <p
        className="absolute -bottom-12 font-[Raleway] text-sm lg:bottom-25 md:bottom-2"
        style={{ color: "#323030" }}
      >
        © 2025 ТМ СмачноТак!
      </p>
    </main>
  );
}
