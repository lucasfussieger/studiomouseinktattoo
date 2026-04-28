'use client';

import '../globals.css';
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-playfair",
});

const WPP_MSG = encodeURIComponent('ola, tudo bem? Vim pelo site do studio e gostei muito do seu trabalho. Gostaria de fazer um orçamento');

const artistas = [
  {
    nome: "Fuzieger Tattoo",
    instagram: "@fuzieger.tattoo",
    instagramUrl: "https://www.instagram.com/fuzieger.tattoo",
    whatsapp: "5548999999991",
    especialidade: "Realismo & Fine Line",
    bio: "Me chamo Lucas Fuzieger, tenho ampla experiência com realismo e fine line. Cada traço é pensado com precisão para garantir uma tattoo que vai durar a vida toda com qualidade e estética impecável.",
    imagens: ["tf1.png", "tf2.png", "tf3.JPG", "tf4.png", "tf5.png"],
  },
  {
    nome: "Mouseink Tattoo",
    instagram: "@mouseink.tattoo",
    instagramUrl: "https://www.instagram.com/mouseink.tattoo",
    whatsapp: "5548999999992",
    especialidade: "Realismo & Lettering",
    bio: "Me chamo Rodrigo, especialista em Realismo. Meu trabalho une arte e pele de forma única, criando peças autorais que contam histórias através de traços marcantes e composições originais.",
    imagens: ["tm1.png", "tm2.png", "tm3.png", "tm4.JPG", "tm5.JPG"],
  },
];

export default function Artistas() {
  return (
    <section
      id="art"
      className="relative w-full bg-white py-16 px-5 lg:px-20 overflow-hidden"
    >
      {/* Right side: vertical line and diagonal stripes */}
      <div className="absolute right-4 lg:right-30 top-0 bottom-0 w-px bg-black/10" />
      <div className="absolute top-0 bottom-0 right-0 w-4 lg:w-30 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(0,0,0,0.1) 12px, rgba(0,0,0,0.1) 13px)`,
          backgroundSize: '17px 17px',
        }}
      />

      {/* Left side: vertical line and diagonal stripes */}
      <div className="absolute left-4 lg:left-30 top-0 bottom-0 w-px bg-black/10" />
      <div className="absolute top-0 bottom-0 left-0 w-4 lg:w-30 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(0,0,0,0.1) 12px, rgba(0,0,0,0.1) 13px)`,
          backgroundSize: '17px 17px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header da seção */}
        <div className="text-center mb-16">
          <p className="text-xs text-black/40 tracking-widest uppercase mb-4">Conheça o time</p>
          <h2 className={`${playfair.className} font-bold text-3xl lg:text-5xl text-black`}>
            Nossos Artistas
          </h2>
        </div>

        {/* Lista de artistas */}
        <div className="flex flex-col gap-24">
          {artistas.map((artista, index) => (
            <div key={artista.nome} className="flex flex-col gap-8">

              {/* Info do artista */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/10 pb-6">
                <div>
                  <h3 className={`${playfair.className} text-2xl lg:text-3xl font-bold text-black`}>
                    {artista.nome}
                  </h3>
                  <p className="text-black/50 text-sm mt-1">{artista.especialidade}</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={artista.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="insta flex items-center justify-center gap-2 px-5 py-2 font-medium w-44 !rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    {artista.instagram}
                  </a>

                  <a
                    href={`https://wa.me/${artista.whatsapp}?text=${WPP_MSG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-medium rounded-full transition-colors duration-300 w-44"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    whatsapp
                  </a>
                </div>
              </div>

              {/* Galeria grid */}
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
                {artista.imagens.map((img, i) => (
                  <img
                    key={img}
                    src={img}
                    alt={`${artista.nome} - trabalho ${i + 1}`}
                    className="gallery-img w-full h-40 lg:h-48 object-cover rounded-xl"
                  />
                ))}
              </div>

              {/* Bio do artista */}
              <p className="text-black/50 text-sm lg:text-base leading-relaxed border-l-2 border-black/10 pl-4 max-w-2xl">
                {artista.bio}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
