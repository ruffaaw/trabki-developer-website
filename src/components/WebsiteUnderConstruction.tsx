"use client";
import Image from "next/image";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMobile } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function WebsiteUnderConstruction() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {!imageLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-color5 z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-color3"></div>
        </div>
      )}
      <section
        id="home"
        className=" pt-20 h-screen w-full overflow-hidden realtive"
      >
        <Image
          src="/render1.webp"
          alt="Domy pod Krakowem"
          fill
          quality={100}
          priority
          className="object-cover object-center blur-md"
          onLoad={() => {
            setTimeout(() => setImageLoaded(true), 300);
          }}
        />
        {imageLoaded && (
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10 px-4 sm:px-8 md:px-12 lg:px-[100px]  space-y-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] text-center transition break-words max-w-full">
              Strona w&nbsp;budowie
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-6 w-full ">
              <a
                href="https://www.n20.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <Image
                  src="/n20logo.png"
                  alt="N20"
                  width={255}
                  height={160}
                  className="drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] object-contain max-lg:max-w-[200px]"
                />
              </a>
              <div className="flex max-lg:items-center flex-col text-center lg:text-left font-bold text-white max-w-md drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
                <h2 className="text-xl md:text-2xl mb-3">
                  Kontakt biura nieruchomości
                </h2>
                <p className="text-sm md:text-base flex items-center">
                  <FaEnvelope className="text-orange-500 mr-2" />
                  biuro@n20.pl
                </p>
                <p className="text-sm md:text-base flex items-center">
                  <FaPhone className="text-orange-500 mr-2" />
                  +48 12 433 38 78
                </p>
                <p className="text-sm md:text-base flex items-center">
                  <FaMobile className="text-orange-500 mr-2" />
                  +48 790 557 504
                </p>
                <p className="text-sm md:text-base flex items-center">
                  <FaMobile className="text-orange-500 mr-2" />
                  +48 790 557 057
                </p>
                <p className="text-sm md:text-base flex items-center">
                  <FaLocationDot className="text-orange-500 mr-2" />
                  Plac Wolnica 13/21, 31-060 Kraków
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
