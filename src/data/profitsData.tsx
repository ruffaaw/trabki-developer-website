import {
  FaTemperatureArrowUp,
  FaHouseChimneyUser,
  FaLeaf,
  FaHandsHoldingChild,
  FaHouseLaptop,
  FaUmbrellaBeach,
} from "react-icons/fa6";

export const benefits = [
  {
    icon: <FaTemperatureArrowUp className="text-brown w-14 h-14 mb-4" />,
    title: "Ogrzewanie",
    description:
      "W całym mieszkaniu zainstalowano ogrzewanie podłogowe, co zapewnia wyjątkowy komfort termiczny przez cały rok.",
    delay: 100,
  },
  {
    icon: <FaHouseChimneyUser className="text-brown w-14 h-14 mb-4" />,
    title: "Osiedle",
    description:
      "Zamknięte i monitorowane, zapewniające bezpieczeństwo i prywatność, z dostępem do dwóch miejsc parkingowych na mieszkanie i wspólnej strefy wypoczynku.",
    delay: 200,
  },
  {
    icon: <FaLeaf className="text-brown w-14 h-14 mb-4" />,
    title: "Przestrzeń zielona",
    description:
      "Obszerne tereny zielone otaczające osiedle, sprzyjające aktywnemu wypoczynkowi i spacerom na świeżym powietrzu.",
    delay: 300,
  },
  {
    icon: <FaHandsHoldingChild className="text-brown w-14 h-14 mb-4" />,
    title: "Komfort",
    description:
      "Nowoczesny piec gazowy oraz wysoki standard wykończenia mieszkań zapewniający efektywne ogrzewanie i komfort użytkowania.",
    delay: 400,
  },
  {
    icon: <FaHouseLaptop className="text-brown w-14 h-14 mb-4" />,
    title: "Udogodnienia",
    description:
      'Wspólna strefa zielona z altanką oraz bliskość Centrum Edukacyjno-Rekreacyjnego "Solne Miasto" z basenem i siłownią.',
    delay: 500,
  },
  {
    icon: <FaUmbrellaBeach className="text-brown w-14 h-14 mb-4" />,
    title: "Rekreacja",
    description:
      "Bliskość kompleksu rekreacyjnego oferującego bogatą ofertę sportową, idealna dla osób lubiących aktywny tryb życia.",
    delay: 600,
  },
];
