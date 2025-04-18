import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
  return (
    <section id="home" className="pt-20 h-screen w-full relative">
      <Image
        src="/render1.webp"
        fill
        priority={true}
        quality={100}
        alt="Background image"
        className="object-cover"
        data-aos="fade-in"
        data-aos-duration="2000"
        unoptimized
      />
      <div
        className="h-full w-full flex flex-col justify-center items-center"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <Image
          src="/logo_kwadratowe.png"
          alt="Logo"
          width={300}
          height={300}
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
          className="md:hidden drop-shadow-md -mt-16"
          priority={true}
          unoptimized
        />
        <Image
          src="/logo_kwadratowe.png"
          alt="Logo"
          width={600}
          height={300}
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
          className="max-md:hidden drop-shadow-md"
          priority={true}
          unoptimized
        />
        <div className="flex max-md:flex-col max-md:space-y-5 max-md:w-full max-md:items-center md:space-x-10">
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
