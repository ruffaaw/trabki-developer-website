import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section id="home" className=" pt-20 h-screen w-full ">
      <div
        className="bg-render1 bg-cover bg-center h-full w-full flex flex-col justify-center items-center space-y-20"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
          className="md:hidden drop-shadow-md"
        />
        <Image
          src="/logo.png"
          alt="Logo"
          width={300}
          height={300}
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
          className="max-md:hidden drop-shadow-md"
        />
        <div className="flex max-md:flex-col max-md:space-y-5 max-md:w-full max-md:items-center md:space-x-10 mt-8">
          <Link
            className="py-3 w-56 max-md:w-3/5  text-color5 rounded-2xl bg-color3 hover:bg-color2 hover:text-white transition break-words max-w-full text-center drop-shadow-xl"
            href="#houses"
            data-aos="zoom-in"
            data-aos-delay="900"
            data-aos-duration="1000"
          >
            Zobacz domy
          </Link>
          <Link
            className="py-3 w-56 max-md:w-3/5  text-color5 rounded-2xl bg-color3 hover:bg-color2 hover:text-white transition break-words max-w-full text-center drop-shadow-xl"
            href="#contact"
            data-aos="zoom-in"
            data-aos-delay="1100"
            data-aos-duration="1000"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
}
