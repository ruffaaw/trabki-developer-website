import { benefits } from "@/data/profitsData";

export default function AboutUs() {
  return (
    <section
      id="o-nas"
      className="w-full h-full bg-color5 relative scroll-mt-20"
    >
      <div className="text-center">
        <p
          className="text-3xl sm:text-4xl lg:text-6xl font-bold text-color2"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          POZNAJ NAS
        </p>
      </div>
      <div className="flex flex-col px-6 w-full pt-4">
        <div className="flex flex-col justify-center items-center p-4 pb-8 text-color3">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-5 text-center"
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
            Nasza pasja i&nbsp;doświadczenie gwarantują nie tylko najwyższą
            jakość wykonania i&nbsp;terminowość, ale przede wszystkim
            <strong> indywidualne podejście </strong>
            do każdego klienta. Wierzymy, że Twój dom powinien być
            odzwierciedleniem Twoich marzeń i&nbsp;stylu życia. Wybierając{" "}
            <strong>DOMY POD KRAKOWEM</strong>, inwestujesz w&nbsp;komfort,
            przyszłość i&nbsp;szczęście swojej rodziny
          </p>
        </div>
      </div>

      <div className="relative w-full ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={benefit.delay}
            >
              <p className="w-14 h-14 mb-4">{benefit.icon}</p>
              <h3 className="text-xl sm:text-2xl font-bold text-color2 mb-3">
                {benefit.title}
              </h3>
              <p className="text-base sm:text-lg text-color3">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
