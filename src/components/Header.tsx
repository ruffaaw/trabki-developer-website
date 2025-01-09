import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed h-20 w-full z-30 flex justify-between p-7 bg-green2 transition-all duration-300 overflow-hidden">
      <div
        className="flex items-center w-56"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <Link href="#home">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 w-16 mr-2 drop-shadow-sm"
          />
        </Link>
      </div>
      <nav
        className="flex space-x-14 text-2xl items-center text-white font-bold "
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <Link href="#investment" className="hover:text-black drop-shadow-md">
          O inwestycji
        </Link>
        <Link href="#localization" className="hover:text-black drop-shadow-md">
          Lokalizacja
        </Link>
        <Link href="#profits" className="hover:text-black drop-shadow-md">
          Profity
        </Link>
        <Link href="#houses" className="hover:text-black drop-shadow-md">
          Domy
        </Link>
        <Link href="#gallery" className="hover:text-black drop-shadow-md">
          Galeria
        </Link>
        <Link href="#contact" className="hover:text-black drop-shadow-md">
          Kontakt
        </Link>
      </nav>
    </header>
  );
}
