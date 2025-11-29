import Info from "../../components/Info";

export default function Home() {
  return (
    <main
      className="min-w-screen min-h-screen flex justify-center py-[16%]! md:pb-[5%]! md:pt-[4%]!"
      style={{ background: "#69C3FA" }}
    >
      <Info />
      <p
        className="absolute bottom-5 font-[Raleway] text-sm md:bottom-25"
        style={{ color: "#323030" }}
      >
        © 2025 ТМ СмачноТак!
      </p>
    </main>
  );
}
