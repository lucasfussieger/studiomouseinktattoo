import '../globals.css';

export default function Footer() {
    return (
        <section className="w-full bg-black h-auto items-center p-3 lg:p-10 text-white text-sm text-white/30">
            <div className="flex justify-between border-b border-white/30 mb-10">

                <div className="mb-3">
                    
                    STUDIO MOUSEINK TATTOO <br />
                    Tattoo, arte & qualidade como nenhum outro studio <br />
                </div>

                <div>
                    redes socias: <br />
                    Instagram: <a href="https://www.instagram.com/studiomouseinktattoo/" target='_blank' className="red">@studiomouseink</a> <br />
                </div>
            </div>
            <div className="flex justify-between">
                <p>
                    © 2025 Studio Mouseink Tattoo. Todos os direitos reservados.
                </p>
                
                <p>
                    Desenvolvido por <a href="https://www.instagram.com/fuziegertech/" target="_blank" className="red right-0 relative">@fuziegertech</a>
                </p>
            </div>            
        </section>
    )
}