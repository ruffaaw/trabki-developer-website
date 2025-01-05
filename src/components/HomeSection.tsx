import Image from "next/image";

export default function HomeSection() {
  return (
    <section id="home" className=" pt-20 h-full w-full ">
      <div
        className="bg-render1 bg-cover bg-center h-full w-full flex flex-col justify-center items-center space-y-20"
        data-aos="fade-in"
        data-aos-duration="3000"
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={400}
          height={400}
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
        />
        <div className="flex flex-row space-x-10">
          <button
            className="p-3 w-56 text-white bg-green3 hover:bg-black rounded-2xl shadow-xl"
            data-aos="zoom-in"
            data-aos-delay="900"
            data-aos-duration="1000"
          >
            Zobacz domy
          </button>
          <button
            className="p-3 w-56 text-white bg-green3 hover:bg-black rounded-2xl shadow-xl"
            data-aos="zoom-in"
            data-aos-delay="1100"
            data-aos-duration="1000"
          >
            Kontakt
          </button>
        </div>
      </div>
    </section>
  );
}
