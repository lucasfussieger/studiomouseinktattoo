import Topshadow from "./topshadow";
import Shadow from "./shadow";
import '../globals.css';
export default function Header() {
    return (
        <header className="relative h-screen p-10 lg:p-40 w-full bg-black bg-cover bg-center bg-fixed"
       style={{ backgroundImage: "url('/tf2.png')" }}>
        <Shadow />
            <Topshadow />
            <div className="relative grid grid-cols-1 place-items-center">
                <img src="logo.png" alt="" className="lg:h-50 h-35 rounded-full" />
                <p className="lg:mb-20 m-5 mb-10 text-lg lg:text-3xl text-white text-center"><span className="font-bold">Tattoo</span>, <span className="font-bold">arte</span> e <span className="font-bold">qualidade</span> em um estúdio feito pra quem leva tattoo <span className="font-bold">a sério</span>.</p>
                <div className="text-white place-items-center gap-5 lg:flex lg:justify-center fade-in">
                    <a href="#local" className="topico lift-hover w-90"><img src="location.png" className="h-5 m-3 w-" alt="" />Localização</a>
                    <a href="#art" className="topico lift-hover w-90"> <img src="user.png" className="h-5 m-3" alt="" />Artistas</a>
                    <a href="#studio" className="topico lift-hover w-90"> <img src="loja.png" className="h-5 m-3" alt="" />Studio</a>
                </div>
                <p className="p-3 bg-black/40 text-sm rounded-full m-5 mt-10 text-white">Bombinhas - Santa Catarina</p>
                <img src="icon.png" className="h-15 lg:h-20 m-5" alt="" />
            </div>    
      </header>
    )}