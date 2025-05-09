import { FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
import { FaHandshake, FaHeart, FaHouse } from "react-icons/fa6";

export const benefits = [
  {
    icon: <FaHeart className="text-color2 w-14 h-14 mb-4" />,
    title: "Przede wszystkim: Ty! ",
    description: (
      <>
        <strong>
          Tworzymy domy z&nbsp;myślą o&nbsp;Twoim szczęściu i&nbsp; komforcie.
        </strong>{" "}
        Zaczynamy od uważnego słuchania Twoich potrzeb imarzeń, aby stworzyć
        przestrzeń idealnie dopasowaną do Twojego stylu życia. Naszą pasją jest
        budowanie miejsc, w&nbsp;których rodzi się radość i&nbsp;gdzie codzienne
        życie staje się przyjemnością. Chcemy, aby Twój nowy dom był tłem dla
        najpiękniejszych wspomnień.
      </>
    ),
    delay: 100,
  },
  {
    icon: <FaHouse className="text-color2 w-14 h-14 mb-4" />,
    title: "Nasze doświadczenie",
    description: (
      <>
        <strong>Z&nbsp;pasją tworzymy domy</strong>, w&nbsp;których rodzą się
        wspomnienia. Dzięki 6-letniemu doświadczeniu łączymy rzetelność
        z&nbsp;nowoczesnym podejściem do budownictwa, stawiając na jakość
        i&nbsp;satysfakcję naszych klientów.
      </>
    ),
    delay: 200,
  },
  {
    icon: (
      <svg
        className="text-color2 w-14 h-14 mb-4"
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="40" height="8" />
        <rect x="0" y="0" width="8" height="40" />
      </svg>
    ),
    title: "Kompleksowe usługi",
    description: (
      <>
        <strong>Pełne wsparcie na każdym etapie.</strong> Oferujemy nie tylko
        budowę. Zapewniamy kompleksowe usługi, w&nbsp;tym profesjonalne
        projektowanie wnętrz, aby Twój dom był nie tylko solidny, ale także
        w&nbsp;pełni odzwierciedlał Twój styl i&nbsp;potrzeby. Jesteśmy
        z&nbsp;Tobą na każdym kroku – od projektu po klucz.
      </>
    ),
    delay: 300,
  },
  {
    icon: <FaHandshake className="text-color2 w-14 h-14 mb-4" />,
    title: "Więcej niż domy",
    description: (
      <>
        <strong>
          Budujemy trwałe relacje oparte na zaufaniu i&nbsp;partnerstwie.
        </strong>
        Wierzymy, że najlepsze efekty osiągamy, blisko współpracując
        z&nbsp;naszymi klientami. Dlatego stawiamy na otwartą komunikację,
        wzajemny szacunek izrozumienie na każdym etapie – od pierwszej rozmowy,
        poprzez projektowanie, aż po finalizację budowy. Chcemy, abyś czuł się
        częścią procesu i&nbsp;miał pewność, że Twoje potrzeby są dla nas
        najważniejsze.
      </>
    ),
    delay: 400,
  },
  {
    icon: <FaShieldAlt className="text-color2 w-14 h-14 mb-4" />,
    title: "Najwyższa jakość",
    description: (
      <>
        <strong>
          Gwarantujemy rzetelność i&nbsp;najwyższą jakość wykonania.
        </strong>{" "}
        Działamy z&nbsp;precyzją i&nbsp;pełnym zaangażowaniem, dbając o każdy
        detal na wszystkich etapach inwestycji. Wybieramy sprawdzone, trwałe
        i&nbsp;bezpieczne materiały oraz rozwiązania, aby Twój dom był solidny,
        komfortowy i&nbsp;służył Ci przez długie lata. Naszym celem jest
        dostarczenie Ci domu, który spełnia najwyższe standardy jakości.
      </>
    ),
    delay: 500,
  },
  {
    icon: <FaMapMarkerAlt className="text-color2 w-14 h-14 mb-4" />,
    title: "Idealna lokalizacja",
    description: (
      <>
        <strong>Harmonia natury i&nbsp;miasta.</strong> Nasze osiedle{" "}
        <strong>DOMY POD KRAKOWEM</strong> to idealne połączenie spokojnego
        życia w&nbsp;otoczeniu zieleni z&nbsp;szybkim i&nbsp;wygodnym dostępem
        do Krakowa. Ciesz się ciszą i&nbsp;bliskością natury, nie rezygnując z
        miejskich udogodnień.{" "}
      </>
    ),
    delay: 600,
  },
];
