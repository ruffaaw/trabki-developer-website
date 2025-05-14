"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomeSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!imageLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [imageLoaded]);

  return (
    <>
      {!imageLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-color5 z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-color3"></div>
        </div>
      )}
      <section
        id="home"
        className={`pt-20 h-screen w-full relative ${
          !imageLoaded ? "invisible" : ""
        }`}
      >
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
          onLoad={() => {
            setTimeout(() => setImageLoaded(true), 300);
          }}
        />
        {imageLoaded && (
          <div
            className="h-full w-full flex flex-col justify-center items-center"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            <Image
              src="/logo_kwadratowe.webp"
              alt="Logo"
              width={300}
              height={300}
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              className="md:hidden drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] mb-8"
              priority={true}
              unoptimized
            />
            <Image
              src="/logo_kwadratowe.webp"
              alt="Logo"
              width={450}
              height={300}
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              className="max-md:hidden drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] mb-8"
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
        )}
      </section>
    </>
  );
}
