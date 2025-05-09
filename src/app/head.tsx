export const metadata = {
  title: "Domy pod krakowem",
  description: "",
  image: "/logo_kwadratowe.png",
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
