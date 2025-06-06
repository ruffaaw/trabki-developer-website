import Image from "next/image";

export default function OurStandards() {
  return (
    <section
      id="nasze-standardy"
      className="w-full h-full flex flex-col items-center bg-color1 relative scroll-mt-20 py-16 lg:py-20 px-4"
    >
      <div className="mb-12 lg:mb-16">
        <p
          className="text-3xl sm:text-4xl lg:text-6xl text-green4  font-bold text-center break-words max-w-full text-color2"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          CO WYRÓŻNIA NASZE DOMY?
        </p>
      </div>

      <div className="flex flex-col px-6 w-full ">
        <div className="flex flex-col justify-center items-center text-color3 mb-16 lg:mb-20">
          <h2
            className="text-2xl sm:text-3xl font-bold  text-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            Komfort i&nbsp;nowoczesność w&nbsp;każdym detalu
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-12 lg:gap-16 mb-20 lg:mb-28">
          <div
            className=" text-color3"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Wnętrza, które zachwycają:
            </h2>
            <ul className="list-disc list-inside text-base sm:text-lg ml-4 sm:ml-6 text-justify mb-6 space-y-2">
              <li>
                <strong>Idealnie gładkie ściany:</strong> dzięki wewnętrznym
                tynkom gipsowym, zacieranym na gładko, Twoje wnętrza będą gotowe
                do malowania i&nbsp;aranżacji bez dodatkowego wysiłku.
              </li>
              <li>
                <strong>Cisza i&nbsp;ciepło przez cały rok:</strong> trzyszybowa
                stolarka okienna PCV o wysokiej izolacyjności termicznej
                z&nbsp;ciepłą ramką międzyszybową zapewni Ci optymalną
                temperaturę i&nbsp;wyciszenie, redukując koszty ogrzewania.
              </li>
              <li>
                <strong>Komfort cieplny pod Twoimi stopami:</strong> ogrzewanie
                podłogowe zainstalowane w&nbsp;całym domu to gwarancja
                przyjemnego ciepła i&nbsp;większej swobody w&nbsp;aranżacji
                wnętrz.
              </li>
              <li>
                <strong>Salon z&nbsp;panoramicznym widokiem:</strong> przesuwne
                okna w&nbsp;salonie, osadzone na szynach HST, to nie tylko
                nowoczesny design, ale także łatwy dostęp do tarasu
                i&nbsp;doskonałe doświetlenie przestrzeni.
              </li>
            </ul>
          </div>
          <Image
            src="/wizualizacja_wnetrza.jpg"
            alt="Wizualizacja wnętrza"
            width={950}
            height={600}
            className="shadow-lg  w-[600px] max-lg:w-[950px] xl:w-[950px]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center  text-center lg:text-left gap-12 lg:gap-16 mb-20 lg:mb-28">
          <Image
            src="/render4.png"
            alt="Widok pojedyńczego budynku"
            width={950}
            height={600}
            className="shadow-lg w-[600px] max-lg:w-[950px] xl:w-[950px]"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
          <div
            className="p-4 text-color3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Solidność i&nbsp;energooszczędność na zewnątrz:
            </h2>
            <ul className="list-disc list-inside text-base sm:text-lg ml-4 sm:ml-6 text-justify mb-6 space-y-2">
              <li>
                <strong>Prywatność i&nbsp;cisza bez sąsiadów za ścianą:</strong>{" "}
                każdy budynek w&nbsp;zabudowie bliźniaczej posiada niezależne
                ściany, co zapewnia komfort akustyczny i&nbsp;większą
                prywatność.
              </li>
              <li>
                <strong>Optymalna izolacja termiczna:</strong> ściany ocieplone
                styropianem o&nbsp;grubości 20 cm oraz dach z&nbsp;izolacją
                z&nbsp;pianki PUR o&nbsp;grubości 25&nbsp;cm to gwarancja
                niskich rachunków za ogrzewanie i&nbsp;przyjemnej temperatury
                latem
              </li>
              <li>
                <strong>Elegancja i&nbsp;trwałość na lata:</strong> pokrycie
                dachu płaską dachówką ceramiczną to synonim estetyki
                i&nbsp;długowieczności.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center  text-center lg:text-left gap-12 lg:gap-16 ">
          <div
            className=" text-color3"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Przemyślane otoczenie dla Twojej wygody:
            </h2>
            <ul className="list-disc list-inside text-base sm:text-lg ml-4 sm:ml-6 text-justify mb-6 space-y-2">
              <li>
                <strong>Relaks na świeżym powietrzu:</strong> przestronny taras
                z&nbsp;kostki brukowej o&nbsp;powierzchni 18&nbsp;m² (6x3 metry)
                to idealne miejsce na wypoczynek i&nbsp;spotkania
                z&nbsp;bliskimi.
              </li>
              <li>
                <strong>Nowoczesne rozwiązania dla przyszłości:</strong>{" "}
                przygotowane instalacje pod fotowoltaikę (na strychu) oraz
                zasilanie dla samochodów elektrycznych (w&nbsp;garażu) to
                inwestycja w&nbsp;ekologię i&nbsp;wygodę.
              </li>
              <li>
                <strong>Poczucie bezpieczeństwa i&nbsp;komfort wjazdu: </strong>
                ogrodzenie panelowe wokół działki z&nbsp;automatyczną bramą
                sterowaną pilotem oraz wybrukowany podjazd to wygoda
                i&nbsp;bezpieczeństwo na co dzień.
              </li>
            </ul>
          </div>
          <Image
            src="/render1.webp"
            alt="Widok osiedla"
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
