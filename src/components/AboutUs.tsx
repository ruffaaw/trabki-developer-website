import { FaHome, FaRulerCombined, FaMapMarkerAlt } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="w-full h-full bg-color5 relative scroll-mt-20"
    >
      <div className="text-center">
        <p className="text-3xl sm:text-4xl lg:text-6xl font-bold text-color2 mb-8">
          POZNAJ NAS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 lg:px-32 pb-12">
        <div
          className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <FaHome size={60} className="text-color1 mb-6" />
          <h3 className="text-2xl font-bold text-color2 mb-4">
            6 lat doświadczenia
          </h3>
          <p className="text-color3 text-base">
            Budujemy domy, które stają się spełnieniem marzeń wielu rodzin,
            łącząc jakość i pasję.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <FaRulerCombined size={60} className="text-color1 mb-6" />
          <h3 className="text-2xl font-bold text-color2 mb-4">
            Kompleksowe usługi
          </h3>
          <p className="text-color3 text-base">
            Oferujemy nie tylko budowę, ale także projektowanie wnętrz,
            zapewniając pełne wsparcie.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <FaMapMarkerAlt size={60} className="text-color1 mb-6" />
          <h3 className="text-2xl font-bold text-color2 mb-4">
            Idealna lokalizacja
          </h3>
          <p className="text-color3 text-base">
            Domy pod Krakowem to spokój natury i wygodny dostęp do miasta w
            jednym.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center bg-color3 text-color5 py-16 px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Z nami nie tylko zbudujesz dom...
        </h2>
        <p
          className="text-xl max-w-3xl mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          ale także stworzysz wnętrze swoich marzeń! Jako firma z doświadczeniem
          i pasją do tego, co robimy, stawiamy na jakość, terminowość oraz
          indywidualne podejście do każdego klienta. Dodatkowo, dzięki
          lokalizacji pod Krakowem, nasi klienci mogą cieszyć się nie tylko
          komfortem życia, ale także bliskością natury i dogodnym dostępem do
          miasta
        </p>
      </div>
    </section>
  );
}
