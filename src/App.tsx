import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFab from "./components/WhatsAppFab";
import Hero from "./components/sections/Hero";
import Problema from "./components/sections/Problema";
import QuienesSomos from "./components/sections/QuienesSomos";
import Solucion from "./components/sections/Solucion";
import ComoFunciona from "./components/sections/ComoFunciona";
import Tecnologia from "./components/sections/Tecnologia";
import Mapeo from "./components/sections/Mapeo";
import Productos from "./components/sections/Productos";
import Vision from "./components/sections/Vision";
import Contacto from "./components/sections/Contacto";

export default function App() {
  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-sand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-forest"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <QuienesSomos />
        <Solucion />
        <ComoFunciona />
        <Tecnologia />
        <Mapeo />
        <Productos />
        <Vision />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
