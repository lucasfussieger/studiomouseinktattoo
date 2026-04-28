export default function Footer() {
  return (
    <footer className="w-full bg-black px-5 lg:px-20 py-10 text-white/30 text-xs">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">

        <div className="flex flex-col sm:flex-row justify-between gap-4 border-b border-white/10 pb-6">
          <p className="text-white/50 font-medium">Studio Mouseink Tattoo</p>
          <a
            href="https://www.instagram.com/studiomouseinktattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors duration-200"
          >
            @studiomouseink
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <p>© 2025 Studio Mouseink Tattoo. Todos os direitos reservados.</p>
          <a
            href="https://www.instagram.com/fuziegertech/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors duration-200"
          >
            Desenvolvido por @fuziegertech
          </a>
        </div>

      </div>
    </footer>
  );
}
