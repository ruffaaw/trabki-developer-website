import Image from "next/image";

export default function Investment() {
  return (
    <section
      id="investment"
      className="w-full h-full flex flex-col items-center bg-green1 relative scroll-mt-20"
    >
      <div>
        <p className="text-3xl sm:text-4xl lg:text-6xl text-green4 pt-10 font-bold text-center break-words max-w-full text-green2">
          O INWESTYCJI
        </p>
      </div>
      <div className="flex flex-col px-32 w-full pt-4">
        <div className="flex flex-row justify-between items-center pb-8">
          <div
            className="p-4 text-black"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl font-bold mb-5">
              Idealne miejsce dla Ciebie
            </h2>
            <p className="text-xl text-justify">
              Krzyszkowice w Wieliczce to urokliwa miejscowość, idealna dla osób
              poszukujących <strong> spokoju i bliskości natury</strong>, a
              jednocześnie pragnących mieć łatwy dostęp do miejskich udogodnień.
              Znajdziesz tu <strong> malownicze tereny zielone</strong>, idealne
              na spacery i rekreację, a także dobrze rozwiniętą infrastrukturę -
              sklepy, szkoły i przedszkola są na wyciągnięcie ręki. Doskonałe
              połączenia komunikacyjne z Krakowem sprawiają, że dojazd do
              centrum miasta zajmuje zaledwie <strong>kilkanaście minut</strong>
              , co jest ogromnym atutem dla osób pracujących w stolicy
              Małopolski.
            </p>
          </div>
          <Image
            src="/render1.png"
            alt="Render 1"
            width={950}
            height={600}
            className="shadow-2xl"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>
        <div className="flex flex-row justify-between items-center pb-8">
          <Image
            src="/render2.png"
            alt="Render 2"
            width={950}
            height={600}
            className="shadow-2xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
          <div
            className="p-4 text-black"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl font-bold mb-5 ">
              Zdrowe, przyjazne otoczenie
            </h2>
            <p className="text-xl text-justify">
              Krzyszkowice oferują także bogatą ofertę{" "}
              <strong>kulturalną i sportową</strong>, co czyni je idealnym
              miejscem do zamieszkania dla rodzin i osób aktywnych. Warto
              wspomnieć o bliskości{" "}
              <strong>Centrum Edukacyjno-Rekreacyjnego "Solne Miasto"</strong>,
              które oferuje szeroką gamę atrakcji sportowych i rekreacyjnych, w
              tym basen, siłownię, saunę oraz korty tenisowe. To doskonałe
              miejsce na aktywne spędzanie czasu i rozwijanie pasji sportowych.
              Krzyszkowice to miejsce, gdzie możesz cieszyć się{" "}
              <strong>spokojem i komfortem</strong>, nie rezygnując z aktywnego
              trybu życia i miejskich udogodnień.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
