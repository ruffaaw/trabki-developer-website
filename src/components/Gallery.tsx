"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const galleryImages = [
  "/render1.webp",
  "/render2.png",
  "/render3.png",
  "/render4.png",
  "/zGory1.png",
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="w-full h-full flex flex-col items-center bg-color5 relative scroll-mt-20 py-16 lg:py-20"
    >
      <div className="mb-12 lg:mb-16">
        <p
          className="text-3xl sm:text-4xl lg:text-6xl text-green4  font-bold text-center break-words max-w-full text-color2"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          GALERIA INWESTYCJI
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-color3 px-6 mb-16 lg:mb-20">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center "
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Zapraszamy do zapoznania się z&nbsp;wizualizacjami osiedla.
        </h2>
        <h2
          className="text-2xl sm:text-3xl font-bold text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Aktualizujemy stronę o&nbsp;zdjęcia z&nbsp;kolejnych etapów budowy –
          bądź na bieżąco!{" "}
        </h2>
      </div>
      <div
        className="w-full lg:w-9/12"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center rounded-lg">
              <Image
                src={src}
                alt={`Galeria ${index + 1}`}
                width={1200}
                height={500}
                className="rounded-lg shadow-lg object-cover"
                unoptimized
                quality={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
