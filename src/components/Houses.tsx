"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { houseCoordinates } from "@/data/houseCoordinates";

type House = {
  id: string;
  numer: string;
  status: number;
  pdf: string;
  metraz: number;
  pokoje: number;
  cena: number;
  dzialka: number;
};

export default function Houses() {
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [houseOffers, setHouseOffers] = useState<any[]>([]);

  // const handleViewChange = (p0: string) => {
  //   setViewMode(viewMode === "map" ? "list" : "map");
  //   setSelectedHouse(null);
  // };

  const getStatusText = (status: number) => {
    switch (status) {
      case 0:
        return "Sprzedany";
      case 1:
        return "Dostępny";
      case 2:
        return "Zarezerwowany";
      default:
        return "Nieznany";
    }
  };

  useEffect(() => {
    const fetchHouseOffers = async () => {
      try {
        const response = await fetch(
          "https://qt4abnihhd.execute-api.eu-central-1.amazonaws.com/prd/get-items"
        );
        const data = await response.json();
        const sortedData = data.body.sort((a: any, b: any) => {
          const numA = parseInt(a.Id.replace("dom", ""), 10);
          const numB = parseInt(b.Id.replace("dom", ""), 10);
          return numA - numB;
        });
        const combinedData = sortedData.map((house: any) => {
          const coords = houseCoordinates.find(
            (coord) => coord.numer === house.Id
          );
          return {
            ...house,
            top: coords?.top || 0,
            left: coords?.left || 0,
          };
        });

        setHouseOffers(combinedData);
      } catch (error) {
        alert("Błąd podczas pobierania danych");
        console.log("Błąd podczas pobierania danych: ", error);
      }
    };
    fetchHouseOffers();
  }, []);

  return (
    <section
      id="twoj-dom"
      rel="noopener noreferrer"
      className="w-full h-full flex flex-col items-center bg-color1 relative scroll-mt-20 py-16 lg:py-20"
    >
      <div className="mb-12 lg:mb-16">
        <p
          className="text-3xl sm:text-4xl lg:text-6xl text-green4 font-bold text-center break-words max-w-full text-color2"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          WYBIERZ SWÓJ DOM
        </p>
      </div>
      <div className="flex flex-col justify-center px-6 items-center text-color3 mb-16 lg:mb-20">
        <h2
          className="text-2xl sm:text-3xl font-bold  text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Kliknij wybrany dom na mapie, by poznać szczegóły oferty
        </h2>
      </div>

      {/* <div className="flex" data-aos="zoom-in" data-aos-duration="1000">
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
      </div> */}

      <div className="flex flex-col lg:flex-row items-start justify-center w-full  px-6 lg:px-16 gap-6 lg:gap-10">
        <div
          className="relative w-full lg:w-2/3"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <Image
            src="/zGory1.png"
            alt="Mapa domów"
            layout="responsive"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg object-cover"
          />
          {houseOffers.map((house) => (
            <button
              key={house.Id}
              style={{
                position: "absolute",
                top: house.top,
                left: house.left,
                transform: "translate(-50%, -50%)",
              }}
              className={`${
                house.status === 0
                  ? "bg-red-500"
                  : house.status === 1
                  ? "bg-green-500"
                  : "bg-yellow-500"
              } text-white rounded-full w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 xl:w-8 xl:h-8 flex items-center justify-center font-bold shadow-md hover:scale-110 transition-transform text-xs md:text-sm lg:text-base`}
              onClick={() => setSelectedHouse(house)}
            >
              {house.numer}
            </button>
          ))}
        </div>

        {/* {viewMode === "list" && (
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
                {houseOffers.map((house) => (
                  <li
                    key={house.Id}
                    className="cursor-pointer hover:bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200 transition-transform "
                    onClick={() => {
                      setSelectedHouse(house);
                      setTimeout(() => {
                        if (window.innerWidth <= 1024) {
                          document
                            .getElementById("house-details")
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }
                      }, 100); // Opóźnienie, żeby React zdążył wyrenderować szczegóły
                    }}
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
        )} */}

        <div
          id="house-details"
          className=" w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg scroll-mt-56"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {selectedHouse ? (
            <>
              <h2 className="text-2xl font-extrabold text-color3 mb-4">
                Dom {selectedHouse.numer}
              </h2>
              <div className="space-y-4">
                <div className="flex flex-row text-lg font-semibold text-color3 items-center">
                  <span>Status:&nbsp;</span>
                  <span
                    className={`${
                      selectedHouse.status === 0
                        ? "text-red-500"
                        : selectedHouse.status === 1
                        ? "text-green-500"
                        : "text-yellow-500"
                    } font-semibold`}
                  >
                    {getStatusText(selectedHouse.status)}
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
                {selectedHouse.status !== 0 &&
                  !(
                    selectedHouse.status === 2 &&
                    (selectedHouse.numer === "13" ||
                      selectedHouse.numer === "14")
                  ) && (
                    <p className="text-color3">
                      <span className="font-semibold">Cena:</span>{" "}
                      {selectedHouse.cena.toLocaleString()} zł
                    </p>
                  )}
                <p className="text-color3">
                  <span className="font-semibold">Działka:</span>{" "}
                  {selectedHouse.dzialka} ara
                </p>

                <div className="mt-6">
                  <a
                    href={selectedHouse.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 bg-color1 text-color3 font-medium text-center rounded-lg hover:bg-color4 hover:text-color5 hover:scale-110 transition-all shadow-md"
                  >
                    Zobacz szczegóły oferty
                  </a>
                </div>
                <button
                  className="mt-6 block px-4 py-2 bg-color3 text-color5 font-medium text-center rounded-lg hover:bg-color2 hover:scale-110 transition-all shadow-md w-full"
                  onClick={() => setSelectedHouse(null)}
                >
                  Zamknij
                </button>
              </div>
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
