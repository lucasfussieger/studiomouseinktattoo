
'use client';

import { useState, useEffect } from 'react';
import Redshadow from "./redshadow";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-playfair",
});

const feedbacks = [
  { id: 1, image: "/ava1.png", alt: "Feedback 1" },
  { id: 2, image: "/ava2.png", alt: "Feedback 2" },
  { id: 3, image: "/ava3.png", alt: "Feedback 3" },
  { id: 4, image: "/ava4.png", alt: "Feedback 4" },
];

export default function Feedback() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % feedbacks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="relative bg-white py-10 lg:py-20 overflow-hidden">
      {/* Right side: vertical line and diagonal stripes going right */}
      <div className="absolute right-4 lg:right-30 top-0 bottom-0 w-px bg-black/10" />
      <div className="absolute top-0 bottom-0 right-0 w-4 lg:w-30 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(0,0,0,0.1) 12px, rgba(0,0,0,0.1) 13px)`,
          backgroundSize: '17px 17px',
        }}
      />

      {/* Left side: vertical line and diagonal stripes going left */}
      <div className="absolute left-4 lg:left-30 top-0 bottom-0 w-px bg-black/10" />
      <div className="absolute top-0 bottom-0 left-0 w-4 lg:w-30 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(0,0,0,0.1) 12px, rgba(0,0,0,0.1) 13px)`,
          backgroundSize: '17px 17px',
        }}
      />

      <Redshadow />
      <div className="relative z-10 lg:px-30 px-5 py-16 text-center">
        {/* Label */}
        <p className="text-xs font-medium text-black/40 tracking-widest uppercase mb-8">Studio Mouse Ink Tattoo</p>

        {/* Main heading */}
        <h2 className={`${playfair.className} text-4xl lg:text-6xl font-bold text-black mb-16 leading-tight`}>
          Cada tattoo é única.<br />Cada detalhe importa.
        </h2>

        {/* Section subtitle */}
        <p className="text-sm sm:text-base font-medium text-black/60 tracking-wide uppercase mb-12">O que nossos clientes falam</p>

        {/* Carousel Container */}
        <div className="flex justify-center items-center mt-10 px-4">
          <div className="w-full max-w-3xl">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Card */}
              <div className="flex justify-center items-center h-96 bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={feedbacks[current].image}
                  alt={feedbacks[current].alt}
                  className="w-80 h-auto object-contain transition-opacity duration-500"
                />
              </div>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center gap-3 mt-8">
              {feedbacks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-black w-8"
                      : "bg-black/30 w-2 hover:bg-black/50"
                  }`}
                  aria-label={`Ir para feedback ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}