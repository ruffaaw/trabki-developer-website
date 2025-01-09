import Image from "next/image";
import { benefits } from "@/data/profitsData";
export default function Profits() {
  return (
    <section
      id="profits"
      className="w-full h-full flex flex-col items-center bg-green1 relative scroll-mt-20"
    >
      <div>
        <p className="text-3xl sm:text-4xl lg:text-6xl pt-10 font-bold text-center break-words max-w-full text-green2">
          PROFITY
        </p>
      </div>
      <div className="relative w-full h-[600px] mt-10">
        <Image
          src="/render3.png"
          alt="Render 3"
          className="object-cover opacity-60"
          fill
        />
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white bg-opacity-80 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <p className="w-14 h-14 mb-4">{benefit.icon}</p>
              <h3 className="text-3xl font-bold text-brown mb-3">
                {benefit.title}
              </h3>
              <p className="text-xl text-black">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
