"use client";
import Image from "next/image";

export default function AboutInvestment() {
  return (
    <section
      id="about-investment"
      className="w-full h-full flex flex-col items-center bg-color5 relative scroll-mt-20"
    >
      <div>
        <p className="text-3xl sm:text-4xl lg:text-6xl text-green4 pt-10 font-bold text-center break-words max-w-full text-color2">
          O INWESTYCJI
        </p>
      </div>

      <div className="flex flex-col px-6 w-full pt-4">
        <div className="flex flex-col lg:flex-row justify-between items-center pb-8">
          <div
            className="p-4 text-color3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              Zaczarowane Trąbki – Twoje wymarzone miejsce do życia
            </h2>
            <p className="text-base sm:text-xl text-justify">
              Zapraszamy do zapoznania się z naszą najnowszą inwestycją –
              <strong>Zaczarowane Trąbki</strong>, która łączy nowoczesne
              rozwiązania z malowniczym otoczeniem. Osiedle składa się z
              funkcjonalnych bliźniaków o powierzchni <strong>146 m²</strong>,
              zaprojektowanych według renomowanego projektu Archon Dom w
              Kupidynkach.
            </p>
          </div>
          <Image
            src="/render1.webp"
            alt="Render 1"
            width={950}
            height={600}
            className="shadow-lg mb-6 lg:mb-0 w-[600px] max-lg:w-[950px] xl:w-[950px]"
            data-aos="fade-left"
            data-aos-duration="1000"
            priority={true}
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center pb-8">
          <Image
            src="/zGory1.png"
            alt="Render z góry"
            width={950}
            height={600}
            className="shadow-lg mb-6 lg:mb-0 w-[600px] max-lg:w-[950px] xl:w-[950px]"
            data-aos="fade-right"
            data-aos-duration="1000"
            priority={true}
          />

          <div
            className="p-4 text-color3"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">Lokalizacja</h2>
            <p className="text-base sm:text-xl text-justify mb-5">
              Nasze domy położone są w cichej i spokojnej miejscowości Trąbki,
              zaledwie <strong>5 km od Wieliczki</strong>. To idealne miejsce
              dla osób, które pragną uciec od miejskiego zgiełku, a jednocześnie
              cenią sobie szybki dostęp do pełnej infrastruktury.
            </p>
            <div className="flex justify-center">
              <button
                className="bg-color3 text-color5 px-6 py-3 rounded-md hover:bg-color2 hover:scale-110 transition drop-shadow-md"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/KssHA4FVSg5khjQi8",
                    "_blank"
                  )
                }
              >
                Zobacz na mapie
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center pb-8">
          <div
            className="p-4 text-color3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              Przemyślane wnętrza
            </h2>
            <p className="text-base sm:text-xl text-justify">
              Każdy z domów został zaprojektowany z myślą o komforcie i wygodzie
              mieszkańców. Do dyspozycji przyszłych właścicieli oddajemy:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg ml-4 sm:ml-6 text-justify">
              <li>
                <strong>5 przestronnych pokoi</strong>,
              </li>
              <li>
                komfortowy <strong>salon połączony z jadalnią</strong>,
              </li>
              <li>
                nowoczesną <strong>kuchnię</strong>,
              </li>
              <li>
                praktyczną <strong>pralnię</strong>,
              </li>
              <li>
                <strong>2 łazienki</strong>,
              </li>
              <li>
                jednostanowiskowy <strong>garaż</strong> z bezpośrednim wejściem
                do domu.
              </li>
            </ul>
            <p className="text-base sm:text-xl text-justify">
              Układ pomieszczeń zapewnia funkcjonalność i maksymalne
              wykorzystanie przestrzeni, a duże przeszklenia gwarantują
              doskonałe doświetlenie wnętrz.
            </p>
          </div>
          <Image
            src="/render2.png"
            alt="Render 2"
            width={950}
            height={600}
            className="shadow-lg mb-6 lg:mb-0 w-[600px] max-lg:w-[950px] xl:w-[950px]"
            data-aos="fade-left"
            data-aos-duration="1000"
            priority={true}
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center pb-8">
          <Image
            src="/render3.png"
            alt="Render 3"
            width={950}
            height={600}
            className="shadow-lg mb-6 lg:mb-0 w-[600px] max-lg:w-[950px] xl:w-[950px]"
            data-aos="fade-right"
            data-aos-duration="1000"
            priority={true}
          />
          <div
            className="p-4 text-color3"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-5">
              Spokój i bezpieczeństwo
            </h2>
            <p className="text-base sm:text-xl text-justify">
              Zaczarowane Trąbki to kameralna inwestycja, idealna dla rodzin z
              dziećmi i osób szukających spokojnego miejsca do życia. Całe
              osiedle znajduje się w otoczeniu zieleni, co sprzyja relaksowi i
              aktywnemu wypoczynkowi na świeżym powietrzu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
