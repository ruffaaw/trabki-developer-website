"use client";
import { useState } from "react";
import Image from "next/image";
import { housesData } from "@/data/housesData";

type House = {
  id: number;
  name: string;
  details: string;
  position: { top: string; left: string };
};

export default function Houses() {
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);

  return (
    <section
      id="houses"
      className="w-full h-full flex flex-col items-center bg-color5 relative scroll-mt-20 "
    >
      <div>
        <p className="text-3xl sm:text-4xl lg:text-6xl text-green4 pt-10 font-bold text-center break-words max-w-full text-color2">
          DOMY
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center w-full mt-10 px-6 lg:px-16 gap-10">
        <div
          className="relative w-full lg:w-2/3"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <Image
            src="/zGory1.png"
            alt="Mapa domów"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg object-cover"
          />
          {housesData.map((house) => (
            <button
              key={house.id}
              style={{
                position: "absolute",
                top: house.position.top,
                left: house.position.left,
                transform: "translate(-50%, -50%)",
              }}
              className="bg-color2 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-md hover:scale-110 transition-transform"
              onClick={() => setSelectedHouse(house)}
            >
              {house.id}
            </button>
          ))}
        </div>

        <div
          className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {selectedHouse ? (
            <>
              <h2 className="text-2xl font-bold text-color2 mb-4">
                {selectedHouse.name}
              </h2>
              <p className="text-color3 text-lg">{selectedHouse.details}</p>
              <button
                className="mt-4 px-4 py-2 bg-color2 text-white rounded-lg hover:bg-color4 transition"
                onClick={() => setSelectedHouse(null)}
              >
                Zamknij
              </button>
            </>
          ) : (
            <p className="text-gray-500 text-lg">
              Kliknij na numer domu, aby zobaczyć szczegóły.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
