import { benefits } from "@/data/profitsData";

export default function AboutUs() {
  return (
    <section
      id="o-nas"
      className="w-full h-full bg-color5 relative scroll-mt-20 py-16 lg:py-20"
    >
      <div className="mb-12 lg:mb-16">
        <p
          className="text-3xl sm:text-4xl lg:text-6xl text-center font-bold text-color2"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          POZNAJ NAS
        </p>
      </div>
      <div className="flex flex-col px-6 w-full justify-center items-center text-color3 mb-16 lg:mb-20">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-6"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          Twój zaufany partner w&nbsp;budowie wymarzonego domu
        </h2>
        <p
          className="text-base sm:text-xl text-center xl:px-32 "
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <strong>
            Z&nbsp;nami zbudujesz więcej niż dom – stworzysz swoje wymarzone
            miejsce na ziemi.
          </strong>
          Nasza pasja i&nbsp;doświadczenie gwarantują nie tylko najwyższą jakość
          wykonania i&nbsp;terminowość, ale przede wszystkim
          <strong> indywidualne podejście </strong>
          do każdego klienta. Wierzymy, że Twój dom powinien być
          odzwierciedleniem Twoich marzeń i&nbsp;stylu życia. Wybierając{" "}
          <strong>DOMY POD KRAKOWEM</strong>, inwestujesz w&nbsp;komfort,
          przyszłość i&nbsp;szczęście swojej rodziny
        </p>
      </div>

      <div className="relative w-full ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={benefit.delay}
            >
              <p className="w-14 h-14 mb-6">{benefit.icon}</p>
              <h3 className="text-xl sm:text-2xl font-bold text-color2 mb-6">
                {benefit.title}
              </h3>
              <p className="text-base sm:text-lg text-color3 text-justify">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
