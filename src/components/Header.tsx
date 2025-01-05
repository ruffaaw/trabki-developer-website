import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed h-20 w-full z-30 flex justify-between p-7 bg-green3 transition-all duration-300 overflow-hidden">
      <div
        className="flex items-center w-56"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <Link href="#home">
          <img src="/logo.png" alt="Logo" className="h-16 w-16 mr-2" />
        </Link>
      </div>
      <nav
        className="flex space-x-14 text-2xl items-center text-white font-bold "
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <Link href="#investment" className="hover:text-black">
          O inwestycji
        </Link>
        <Link href="#localization" className="hover:text-black">
          Lokalizacja
        </Link>
        <Link href="#profits" className="hover:text-black">
          Profity
        </Link>
        <Link href="#houses" className="hover:text-black">
          Domy
        </Link>
        <Link href="#gallery" className="hover:text-black">
          Galeria
        </Link>
        <Link href="#contact" className="hover:text-black">
          Kontakt
        </Link>
      </nav>
    </header>
  );
}
