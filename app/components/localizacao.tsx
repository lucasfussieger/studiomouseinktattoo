'use client';
import Redshadow from "./redshadow";
import { Playfair_Display } from "next/font/google";
import '../globals.css';
import Shadow from "./shadow";
import Insta from "./instabutton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // Cardo só tem regular e bold
  display: "swap",
  variable: "--font-playfair",
});

export default function Localizacao() {
    return (
        <section className="relative place-items-center bg-black items-center p-5 lg:p-20" id="local">
            <Redshadow />
            <div className="relative place-items-center text-white/30">
                <h1 className="text-sm font-light">c o m o &nbsp; c h e g a r :</h1>
                <h1 className={` text-white ${playfair.className} font-bold red m-3 text-center text-3xl lg:text-6xl`}>STUDIO MOUSEINK TATTOO</h1>
                <p className="mb-20 text-lg text-center text-white/30"> <span className="font-bold">Tattoo</span>, arte & <span className="font-bold">qualidade</span> como nenhum outro <span className="font-bold">studio</span></p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    <div className="font-bold text-2xl text-white fade-in">
                        AVENIDA MARACUJÁ, 349 - BOMBINHAS-SC,<br /> 88215-000
                        <p className="text-sm text-white/30">Para agendar uma tattoo com um de nossos artistas entre em contato diretamente com ele</p>
                        <div className="flex justify-center grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 text-lg">
                            <Insta />
                            <a href="https://maps.app.goo.gl/imNswaCKPaAu5EAh6" target="_blank" className="lift-hover p-3 bg-black rounded-lg items-center gap-3 flex justify-center">
                                <img src="location.png" className="h-8" alt="" />
                                <p>ABRIR NO MAPS</p>
                            </a>
                        </div>
                    </div>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.390446896338!2d-48.52382052426393!3d-27.175462576491437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe0e2e3cf69c429b%3A0x1f04faa6473e3f87!2sStudio%20Mouseink%20Tattoo!5e0!3m2!1spt-BR!2sbr!4v1767218976432!5m2!1spt-BR!2sbr"
                    className="w-full h-100 rounded-4xl" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>
            
            
        </section>
        
    )
}