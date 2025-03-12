"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed h-20 w-full z-30 flex justify-between items-center bg-color2 transition-all duration-300 shadow-md">
      <div
        className="flex items-center p-7"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <Link href="https://master.d1fmcrp2gd0h94.amplifyapp.com/">
          <Image
            src="/logo_plaskie.png"
            alt="Logo"
            width={208}
            height={64}
            className="h-16 w-52 mr-2 drop-shadow-sm"
          />
        </Link>
      </div>
      <nav
        className="hidden md:flex space-x-8 lg:space-x-12 text-lg lg:text-xl items-center justify-center text-white font-bold pr-7"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        {[
          { href: "#about-investment", label: "O inwestycji" },
          { href: "#about-us", label: "O nas" },
          { href: "#our-values", label: "Nasze wartości" },
          { href: "#houses", label: "Domy" },
          { href: "#gallery", label: "Galeria" },
          { href: "#contact", label: "Kontakt" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-color1 hover:scale-125 transition-all drop-shadow-md"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <button
        className="md:hidden flex items-center text-white pr-4 py-7"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="fixed flex flex-col items-center top-20 pt-4 bg-color2 shadow-md z-30 w-screen h-auto ">
          <Link
            href="#about-investment"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-color1 "
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">O inwestycji</p>
          </Link>
          <Link
            href="#about-us"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-color1 "
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">O nas</p>
          </Link>
          <Link
            href="#our-values"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-color1 break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Nasze wartości</p>
          </Link>
          <Link
            href="#houses"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-color1 break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Domy</p>
          </Link>
          <Link
            href="#gallery"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-color1 break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Galeria</p>
          </Link>
          <Link
            href="#contact"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-color1 break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Kontakt</p>
          </Link>
        </div>
      )}
    </header>
  );
}
