"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        isScrolled ? "absolute top-0" : "relative"
      } w-full z-30 flex justify-between py-2 px-7 bg-green2 transition-all duration-300`}
    >
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
        className="flex space-x-14 text-2xl items-center text-white font-bold"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <Link href="#investment">O inwestycji</Link>
        <Link href="#localization">Lokalizacja</Link>
        <Link href="#profits">Profity</Link>
        <Link href="#houses">Domy</Link>
        <Link href="#gallery">Galeria</Link>
        <Link href="#contact">Kontakt</Link>
      </nav>
    </header>
  );
}
