import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="h-screen w-full bg-white">
      <div className="h-full w-full overflow-hidden">
        <div className="h-screen">
          <Header />
          <div
            className="bg-render1 bg-cover bg-center h-full w-full opacity-60"
            data-aos="fade-in"
            data-aos-duration="3000"
          />
        </div>
      </div>
    </div>
  );
}
