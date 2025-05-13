"use client";
import Image from "next/image";

export default function AboutInvestment() {
  return (
    <section
      id="o-inwestycji"
      className="w-full h-full flex flex-col items-center bg-color5 relative scroll-mt-20 py-16 lg:py-20"
    >
      <div className="mb-12 lg:mb-16">
        <p
          className="text-3xl sm:text-4xl lg:text-6xl text-green4 font-bold text-center break-words max-w-full text-color2"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          DOMY POD KRAKOWEM
        </p>
      </div>

      <div className="flex flex-col px-6 w-full">
        <div className="flex flex-col justify-center items-center text-color3 mb-16 lg:mb-20 ">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Twoje wymarzone miejsce do życia w&nbsp;zielonym otoczeniu
          </h2>
          <p
            className="text-base sm:text-xl text-center xl:px-32 "
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Odkryj naszą najnowszą inwestycję:{" "}
            <strong>DOMY POD KRAKOWEM</strong> – idealną propozycję dla tych,
            którzy pragną życia w&nbsp;harmonii z&nbsp;naturą, nie rezygnując
            z&nbsp;wygody miejskiego stylu życia. Osiedle tworzą przestronne
            domy w&nbsp;zabudowie bliźniaczej o&nbsp;powierzchni{" "}
            <strong>146&nbsp;m²</strong>, zrealizowane według projektu Archon
            "Dom w&nbsp;Kupidynkach".
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-12 lg:gap-16 mb-20 lg:mb-28 px-4">
          <div
            className=" text-color3 "
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Lokalizacja - spokojny azyl blisko miasta
            </h2>
            <p className="text-base sm:text-xl text-justify mb-8">
              Nasza inwestycja <strong>DOMY POD KRAKOWEM</strong> położona jest
              w&nbsp;malowniczych <strong> Trąbkach</strong>, zaledwie 5 km od
              administracyjnych granic Krakowa. Dzięki temu możesz cieszyć się
              spokojem i&nbsp;bliskością natury, mając jednocześnie szybki
              i&nbsp;wygodny dostęp do miejskich udogodnień. Rynek Główny
              oddalony jest jedyne 17&nbsp;km,&nbsp;a do urokliwej Wieliczki
              dojedziesz w&nbsp;zaledwie 5 km. Trąbki to idealne miejsce dla
              tych, którzy pragną wytchnienia od zgiełku miasta, nie rezygnując
              z&nbsp;jego zalet.
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
          <Image
            src="/zGory1.png"
            alt="Render z góry"
            width={950}
            height={600}
            className="shadow-lg lg:mb-0 w-[600px] max-lg:w-[950px] xl:w-[950px]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-12 lg:gap-16 mb-20 lg:mb-28 px-4">
          <Image
            src="/render2.png"
            alt="Render 2"
            width={950}
            height={600}
            className="shadow-lg lg:mb-0 w-[600px] max-lg:w-[950px] xl:w-[950px]"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
          <div
            className=" text-color3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Wnętrza - zaprojektowane z&nbsp;myślą o&nbsp;Twojej wygodzie
            </h2>
            <p className="text-base sm:text-xl text-justify mb-6">
              W&nbsp;naszych domach każdy metr kwadratowy został starannie
              przemyślany, aby zapewnić maksymalną funkcjonalność
              i&nbsp;komfort. Przestronny układ pomieszczeń, optymalne
              doświetlenie naturalnym światłem tworzą przyjazną atmosferę,
              w&nbsp;której codzienne życie staje się przyjemnością. Do
              dyspozycji przyszłych mieszkańców oddajemy{" "}
              <strong>5 przestronnych pokoi</strong>, komfortowy{" "}
              <strong>salon z&nbsp;jadalnią</strong>, nowoczesną{" "}
              <strong>kuchnię</strong>, praktyczną
              <strong> pralnię</strong> oraz <strong>2&nbsp;łazienki</strong>.
              Dodatkowym atutem jest wygodny{" "}
              <strong>jednostanowiskowy garaż</strong> z&nbsp;bezpośrednim
              wejściem do domu.
            </p>
            <p className="text-base sm:text-xl text-justify">
              Dzięki <strong>dużym przeszkleniom </strong>wnętrza są wypełnione
              naturalnym światłem, a&nbsp;nowoczesna aranżacja daje Ci
              nieograniczone możliwości stworzenia przestrzeni idealnie
              dopasowanej do Twojego indywidualnego stylu życia.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-12 lg:gap-16  px-4">
          <div
            className=" text-color3"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Spokój i&nbsp;harmonia - bezpieczny dom w&nbsp;otoczeniu natury
            </h2>
            <p className="text-base sm:text-xl text-justify">
              <strong>DOMY POD KRAKOWEM</strong> to idealna propozycja dla
              rodzin z&nbsp;dziećmi oraz wszystkich, którzy poszukują spokojnego
              i&nbsp;bezpiecznego miejsca do życia. Nasze osiedle, otulone
              zielenią i&nbsp;oddalone od miejskiego zgiełku, stanowi prawdziwą
              oazę ciszy i&nbsp;komfortu, idealną do relaksu i&nbsp;aktywnego
              wypoczynku na świeżym powietrzu. Tutaj, w&nbsp;przyjaznej
              atmosferze, możesz cieszyć się spokojem ducha i&nbsp;czasem
              spędzonym z&nbsp;bliskimi.
            </p>
          </div>
          <Image
            src="/render3.png"
            alt="Render 3"
            width={950}
            height={600}
            className="shadow-lg w-[600px] max-lg:w-[950px] xl:w-[950px]"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </section>
  );
}
