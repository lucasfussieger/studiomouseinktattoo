import '../globals.css';
import { Playfair_Display } from "next/font/google";
import Topshadow from './topshadow';
import Shadow from './shadow';
import Bottomshadow from './bottomshadow';
import Redshadow from './redshadow';

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"], // Cardo só tem regular e bold
    display: "swap",
    variable: "--font-playfair",
  });

export default function Artistas() {
    return (
    <section id = 'art' className="relative w-full p-5 bg-cover bg-center bg-fixed"
       style={{ backgroundImage: "url('/tm1.png')" }}>
        <Shadow />
        <Topshadow />
        <div className="relative z-10 w-full place-items-center text-white">
          <p className={`text-center text-4xl mb-20 lg:text-6xl m-8 red font-bold ${playfair.className}`} >Conheça os artistas por trás de cada traço:</p>
          <div className="flex justify-center ">
            <div className=" grid grid-cols-1 place-items=center gap-3 lg:gap-20 lg:grid-cols-2">
              
              <div className=' overflow-hidden relative bg-black/70 h-full p-5 rounded-2xl'>
                <Redshadow/>
                <div className='relative place-items-center border-t p-3 border-white/30'>
                    <img src="mouse.png" alt="" className="hidden lg:block rounded-full mb-5 h-30" />
                    <p className="text-center text-white/30 m-3 font-thin">R O D R I G O &nbsp; - &nbsp; M O U S E</p>
                    <p className="text-center hidden lg:block text-white/30">Especialidades: <span className="font-bold">Realismo, lettering e colorido</span></p>
                </div>

                <div className="relative overflow-hidden whitespace-nowrap mask-gradient rounded-2xl m-3"> 
                    <div className="flex animate-marquee w-max"> {/* w-max garante que a div não quebre linha */}

                        <div className="flex gap-4 pr-4">
                            <img src="tm1.png" className='h-90 ' alt="" />
                            <img src="tm2.png" className='h-90 ' alt="" />
                            <img src="tm3.png" className='h-90 ' alt="" />
                            <img src="tm4.jpg" className='h-90 ' alt="" />
                            <img src="tm5.jpg" className='h-90 ' alt="" />
                        </div>

                        <div className="flex gap-4 pr-4">
                            <img src="tm1.png" className='h-90 ' alt="" />
                            <img src="tm2.png" className='h-90 ' alt="" />
                            <img src="tm3.png" className='h-90 ' alt="" />
                            <img src="tm4.jpg" className='h-90 ' alt="" />
                            <img src="tm5.jpg" className='h-90 ' alt="" />
                        </div>
            
                        
                    </div>
                </div >
                <p className='m-3 text-center text-xs lg:text-sm text-white/30 font//light'>
                    saiba mais sobre o trabalho de nosso artista ou entre em contato:
                </p>
                <div className='w-auto place-items-center m-3'>
                    <a href="https://wa.me/5547996739479?text=ol%C3%A1!%20tudo%20bem?%20eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
                     className='topico w-full gap-3'
                      target='_blank'>
                        <img src="whatsapp.png" className='h-8' alt="" />
                        Fazer orçamento</a> 
                    <a href="https://www.instagram.com/mouseink/" className='insta flex justify-center gap-3 w-full' target='_blank'><img src="insta.png" className='h-8' alt="" />@mouseink</a>   
                </div>
              </div>
              
              <div className='overflow-hidden relative bg-black/70 h-full p-5 rounded-2xl'>
                <Redshadow/>
                <div className='relative place-items-center border-t p-3 border-white/30'>
                    <img src="fuzieger.jpg" alt="" className="hidden lg:block rounded-full mb-5 h-30" />
                    <p className="text-center font-thin text-white/30 m-3">L U C A S &nbsp; F U Z I E G E R</p>
                    <p className="text-center hidden lg:block text-white/30">Especialidades: <span className="font-bold">Blackwork, rastelado e fineline</span></p>
                </div>
                <div className="relative overflow-hidden whitespace-nowrap mask-gradient rounded-2xl m-3"> 
                    <div className="flex animate-marquee w-max"> {/* w-max garante que a div não quebre linha */}

                        <div className="flex gap-4 pr-4">
                            <img src="tf1.png" className='h-90 ' alt="" />
                            <img src="tf2.png" className='h-90 ' alt="" />
                            <img src="tf3.jpg" className='h-90 ' alt="" />
                            <img src="tf4.png" className='h-90 ' alt="" />
                            <img src="tm5.png" className='h-90 ' alt="" />
                        </div>

                        <div className="flex gap-4 pr-4">
                            <img src="tf1.png" className='h-90 ' alt="" />
                            <img src="tf2.png" className='h-90 ' alt="" />
                            <img src="tf3.jpg" className='h-90 ' alt="" />
                            <img src="tf4.png" className='h-90 ' alt="" />
                            <img src="tf5.png" className='h-90 ' alt="" />
                        </div>
            
                        
                    </div>
                </div >
                <p className='m-3 text-center text-xs lg:text-sm text-white/30 font//light'>
                    saiba mais sobre o trabalho de nosso artista ou entre em contato:
                </p>
                <div className='w-auto place-items-center m-3'>
                    <a href="https://wa.me/5547999346074?text=ol%C3%A1!%20tudo%20bem?%20eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento" className='topico gap-3 w-full' target='_blank'><img src="whatsapp.png" className='h-8' alt="" />Fazer orçamento</a> 
                    <a href="https://www.instagram.com/fuzieger.tattoo/" className='insta flex justify-center gap-3 w-full' target='_blank'><img src="insta.png" className='h-8' alt="" />@fuzieger.tattoo</a>   
                </div>
                
              </div>
              </div>
          </div>
          
        </div>
        <Bottomshadow />
      </section>
    )
}