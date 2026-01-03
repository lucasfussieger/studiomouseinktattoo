
'use client';

import Redshadow from "./redshadow";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // Cardo só tem regular e bold
  display: "swap",
  variable: "--font-playfair",
});

export default function Feedback() {
    return (
        <div className="relative bg-black py-10">
        <Redshadow />
  <div className=" text-white p-10 text-center">
    <p className="font-light mb-10 text-xs text-white/30">S T U D I O &nbsp; M O U S E I N K &nbsp; T A T T O O</p>
    <p className={`lg:text-6xl text-4xl red ${playfair.className} font-bold`}>Cada tattoo é única. Cada detalhe importa.</p>
    <p className="m-20 text-lg">O QUE NOSSOS CLIENTES FALAM:</p>
    
    {/* Container de visualização (janela) */}
    <div className="overflow-hidden whitespace-nowrap mask-gradient"> 
      <div className="flex animate-marquee w-max"> {/* w-max garante que a div não quebre linha */}
        
        {/* GRUPO 1 */}
        <div className="flex gap-4 pr-4">
          <div className="bg-white h-auto w-100 rounded-lg">
            <img src="/ava1.png" alt="" className="m-5 w-80" />
          </div>
          <div className="bg-white h-auto w-100 rounded-lg">
            <img src="/ava2.png" alt="" className="m-5 w-80" />
          </div>
          <div className="bg-white h-auto w-100 rounded-lg">
            <img src="/ava3.png" alt="" className="m-5 w-80" />
          </div>
          <div className="bg-white h-auto w-100 rounded-lg">
            <img src="/ava4.png" alt="" className="m-5 w-80" />         
          </div>        

        </div>

        {/* GRUPO 2 (Cópia idêntica) */}
        <div className="flex gap-4 pr-4" aria-hidden="true">
          <div className="bg-white h-auto items-center w-100 rounded-lg">
            <img src="/ava1.png" alt="" className="m-5 w-80" />
          </div>
          <div className="bg-white h-auto w-100 rounded-lg">
            <img src="/ava2.png" alt="" className="m-5 w-80" />
          </div>
          <div className="bg-white h-auto w-100 rounded-lg">
            <img src="/ava3.png" alt="" className="m-5 w-80" />
          </div>
          <div className="bg-white h-auto w-100 rounded-lg">
            <img src="/ava4.png" alt="" className="m-5 w-80" />         
          </div>        
        </div>
        
      </div>
    </div>
  </div>
</div>
    )
}