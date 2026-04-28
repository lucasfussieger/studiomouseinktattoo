import Topshadow from "./topshadow";
import Shadow from "./shadow";
import '../globals.css';

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-black bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{ backgroundImage: "url('/tf2.png')" }}
    >
      <Shadow />

      {/* Overlay escuro sutil */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto gap-8">

        {/* Logo */}
        <img
          src="logo.png"
          alt="Studio Mouse Ink"
          className="h-24 lg:h-28 w-24 lg:w-28 rounded-full object-cover shadow-2xl ring-2 ring-white/20"
        />

        {/* Badge localização */}
        <span className="text-xs text-white/60 tracking-widest uppercase">
          Bombinhas — Santa Catarina
        </span>

        {/* Headline */}
        <p className="text-4xl lg:text-5xl text-white/90 font-light leading-relaxed">
          <span className="font-semibold text-white">Tattoo</span>, <span className="font-semibold text-white">arte</span> e{" "}
          <span className="font-semibold text-white">qualidade</span> em um estúdio feito pra quem leva tattoo{" "}
          <span className="font-semibold text-white">a sério</span>.
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
            href="#local"
            className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-40 bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/50 text-white text-sm font-medium rounded-xl backdrop-blur-sm transition-all duration-300"
          >
            <img src="location.png" alt="" className="h-4 w-4" />
            Localização
          </a>
          <a
            href="#art"
            className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-40 bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/50 text-white text-sm font-medium rounded-xl backdrop-blur-sm transition-all duration-300"
          >
            <img src="user.png" alt="" className="h-4 w-4" />
            Artistas
          </a>
          <a
            href="#studio"
            className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-40 bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/50 text-white text-sm font-medium rounded-xl backdrop-blur-sm transition-all duration-300"
          >
            <img src="loja.png" alt="" className="h-4 w-4" />
            Studio
          </a>
        </div>
      </div>
    </section>
  );
}
