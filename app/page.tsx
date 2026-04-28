'use client';
import Localizacao from "./components/localizacao";
import Carrossel from "./components/carrossel";
import Feedback from "./components/feedback";
import Artistas from "./components/artistas";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Header from "./components/header";

export default function HomePage() {
  return (
    <main >
      <Hero />
      <Feedback />
      <Artistas />
      <Localizacao />
      <Footer />
    </main>
  );
}
