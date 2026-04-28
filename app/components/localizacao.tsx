'use client';
import Redshadow from "./redshadow";
import { Playfair_Display } from "next/font/google";
import '../globals.css';

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-playfair",
});

export default function Localizacao() {
  return (
    <section className="relative bg-black py-16 px-5 lg:px-20" id="local">
      <Redshadow />

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Info */}
        <div className="flex flex-col gap-5">
          <p className="text-xs text-white/30 tracking-widest uppercase">Como chegar</p>

          <h2 className={`${playfair.className} font-bold red text-3xl lg:text-4xl leading-tight`}>
            Studio Mouseink Tattoo
          </h2>

          <p className="text-white/50 text-sm leading-relaxed">
            Avenida Maracujá, 349 — Bombinhas, SC
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="https://maps.app.goo.gl/imNswaCKPaAu5EAh6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-medium rounded-full transition-colors duration-300"
            >
              <img src="location.png" className="h-4 w-4" alt="" />
              Abrir no Maps
            </a>
            <a
              href="#art"
              className="flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-medium rounded-full transition-colors duration-300"
            >
              Ver artistas
            </a>
          </div>
        </div>

        {/* Mapa */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.390446896338!2d-48.52382052426393!3d-27.175462576491437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe0e2e3cf69c429b%3A0x1f04faa6473e3f87!2sStudio%20Mouseink%20Tattoo!5e0!3m2!1spt-BR!2sbr!4v1767218976432!5m2!1spt-BR!2sbr"
          className="w-full h-72 lg:h-80 rounded-2xl border border-white/10"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>
    </section>
  );
}
