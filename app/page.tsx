'use client';
import Localizacao from "./components/localizacao";
import Header from "./components/header";
import Carrossel from "./components/carrossel";
import Feedback from "./components/feedback";
import Artistas from "./components/artistas";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <main >
      <Carrossel />
      <Header />
      <Feedback />
       <div className="bg-black h-15"></div>
      <Carrossel />
      <Artistas />
      <div className="bg-black h-20"></div>
      <Carrossel />
      <Localizacao />
      <Footer />
    </main>
  );
}
