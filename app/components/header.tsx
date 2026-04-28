'use client';

export default function Header() {
  return (
    <header
      className=" top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 bg-black"
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src="logo.png" alt="Studio Mouse Ink" className="h-12 lg:h-14 w-auto rounded-full" />
      </div>

      {/* Message Button */}
      <a
        href="#art"
        className="px-6 lg:px-8 py-2 lg:py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors duration-300 text-sm lg:text-base"
      >
        Mandar mensagem
      </a>
    </header>
  );
}
