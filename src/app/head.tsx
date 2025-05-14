export const metadata = {
  title: "Domy pod krakowem",
  description:
    "DOMY POD KRAKOWEM w Trąbkach - nowoczesne domy bliźniacze 146m² w zielonej okolicy z doskonałą komunikacją do Krakowa (5km od granic miasta). Sprawdź wyjątkowe wnętrza, premium standard i spokojną lokalizację w harmonii z naturą.",
  image: "/logo_icona.webp",
};

export default function Head() {
  return (
    <head>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href={metadata.image} />
    </head>
  );
}
