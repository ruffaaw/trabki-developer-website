"use client";
import { useState } from "react";
import Image from "next/image";
import { housesData } from "@/data/housesData";

type House = {
  id: number;
  numer: string;
  status: string;
  linkDoOferty: string;
  metraz: number;
  pokoje: number;
  cena: number;
  poziom: string;
  ogrodek: number;
  position: { top: string; left: string };
};

export default function Houses() {
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [viewMode, setViewMode] = useState<"map" | "list">("map");

  const handleViewChange = (p0: string) => {
    setViewMode(viewMode === "map" ? "list" : "map");
    setSelectedHouse(null);
  };

  return (
    <section
      id="houses"
      rel="noopener noreferrer"
      className="w-full h-full flex flex-col items-center bg-color5 relative scroll-mt-20"
    >
      <div>
        <p className="text-3xl sm:text-4xl lg:text-6xl text-green4 pt-10 font-bold text-center break-words max-w-full text-color2">
          DOMY
        </p>
      </div>

      <div className="mt-6 flex">
        <button
          onClick={() => handleViewChange("map")}
          className={`px-6 py-2 rounded-s-md transition-all duration-300 ${
            viewMode === "map"
              ? "bg-color3 shadow-lg text-color5"
              : "bg-color1 text-color3 hover:bg-color2 hover:text-color5"
          }`}
        >
          Widok mapy
        </button>
        <button
          onClick={() => handleViewChange("list")}
          className={`px-6 py-2 rounded-e-md transition-all duration-300 ${
            viewMode === "list"
              ? "bg-color3 shadow-lg text-color5"
              : "bg-color1 text-color3 hover:bg-color2 hover:text-color5"
          }`}
        >
          Lista domów
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center w-full mt-10 px-6 lg:px-16 gap-6 lg:gap-10">
        {viewMode === "map" && (
          <div
            className="relative w-full lg:w-2/3"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <Image
              src="/zGory1.png"
              alt="Mapa domów"
              layout="responsive"
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
                className="bg-color2 text-white rounded-full w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 xl:w-8 xl:h-8 flex items-center justify-center font-bold shadow-md hover:scale-110 transition-transform text-xs md:text-sm lg:text-base"
                onClick={() => setSelectedHouse(house)}
              >
                {house.numer}
              </button>
            ))}
          </div>
        )}

        {viewMode === "list" && (
          <div
            className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl font-extrabold text-color3 mb-4">
              Lista domów
            </h2>
            <div className="max-h-[600px] overflow-y-auto space-y-4">
              <ul>
                {housesData.map((house) => (
                  <li
                    key={house.id}
                    className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200 transition-transform "
                    onClick={() => setSelectedHouse(house)}
                  >
                    <h3 className="text-xl font-bold text-gray-800">
                      Dom {house.numer}
                    </h3>
                    <p className="text-color3">
                      <span className="font-semibold">Metraż:</span>{" "}
                      {house.metraz} m²,{" "}
                      <span className="font-semibold">Pokoje:</span>{" "}
                      {house.pokoje}
                    </p>
                    <p className="text-color3">
                      <span className="font-semibold">Cena:</span>{" "}
                      {house.cena.toLocaleString()} zł
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div
          className=" w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {selectedHouse ? (
            <>
              <h2 className="text-2xl font-extrabold text-color3 mb-4">
                Dom {selectedHouse.numer}
              </h2>
              <div className="space-y-4">
                <div className="flex flex-row text-lg font-semibold text-color3 items-center">
                  <span>Status: </span>
                  <span
                    className={`ml-1 ${
                      selectedHouse.status === "Dostępny"
                        ? "text-green-600"
                        : selectedHouse.status === "Zarezerwowany"
                        ? "text-yellow-500"
                        : selectedHouse.status === "Sprzedany"
                        ? "text-red-600"
                        : "text-gray-500"
                    }`}
                  >
                    {selectedHouse.status}
                  </span>
                </div>

                <p className="text-color3">
                  <span className="font-semibold">Metraż:</span>{" "}
                  {selectedHouse.metraz} m²
                </p>
                <p className="text-color3">
                  <span className="font-semibold">Pokoje:</span>{" "}
                  {selectedHouse.pokoje}
                </p>
                <p className="text-color3">
                  <span className="font-semibold">Cena:</span>{" "}
                  {selectedHouse.cena.toLocaleString()} zł
                </p>
                <p className="text-color3">
                  <span className="font-semibold">Poziom:</span>{" "}
                  {selectedHouse.poziom}
                </p>
                <p className="text-color3">
                  <span className="font-semibold">Ogródek:</span>{" "}
                  {selectedHouse.ogrodek} m²
                </p>

                <div className="mt-4">
                  <a
                    href={selectedHouse.linkDoOferty}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 bg-color4 text-color5 font-medium text-center rounded-lg hover:bg-color1 hover:text-color3 hover:scale-110 transition-all shadow-md"
                  >
                    Zobacz szczegóły oferty
                  </a>
                </div>
              </div>

              <button
                className="mt-6 block px-4 py-2 bg-color3 text-color5 font-medium text-center rounded-lg hover:bg-color2 hover:scale-110 transition-all shadow-md w-full"
                onClick={() => setSelectedHouse(null)}
              >
                Zamknij
              </button>
            </>
          ) : (
            <p className="text-gray-500 text-lg">
              {viewMode === "map"
                ? "Kliknij na numer domu, aby zobaczyć szczegóły."
                : "Wybierz dom z listy, aby zobaczyć szczegóły."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
