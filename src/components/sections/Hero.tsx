import { ArrowRight, ArrowDown } from "lucide-react";
import ScrollExpand from "@/components/ScrollExpand.jsx";
import { BRAND, IMAGES } from "@/lib/site";

const stats = [
  { k: "Micro-vibraciones", v: "Detección" },
  { k: "FFT · dominio de frecuencia", v: "Análisis" },
  { k: "Hasta 4 nodos coordinados", v: "Cobertura" },
];

/**
 * Inicio cinematográfico: el marco se abre al hacer scroll (Scroll Expand)
 * y revela la propuesta de EcoRoots sobre el suelo.
 */
export default function Hero() {
  return (
    <section id="inicio" className="relative bg-forest-900">
      <ScrollExpand
        src={IMAGES.heroSeedtray}
        alt="Bandeja de germinación: el cultivo comienza bajo la superficie"
        mediaType="image"
        title="EcoRoots IoT"
        scrollHint="Descienda bajo la superficie"
        startWidth={42}
        startHeight={56}
        startRadius={28}
        endRadius={0}
        mediaZoom={1.32}
        scrollDistance={1.15}
        holdDistance={0.75}
        smoothing={0.12}
        overlayScrim={0.62}
        useWindowScroll
        className="hero-scroll-expand"
      >
        <div className="container-eco flex h-full flex-col justify-center pb-16 pt-28">
          <p className="eyebrow text-clay-400">
            {BRAND.tagline}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance text-sand-50 sm:text-5xl md:text-6xl">
            Vea lo que ocurre{" "}
            <span className="text-gradient-gold italic">bajo el suelo.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-sand/80 sm:text-lg">
            Sistema de monitoreo agrícola basado en sensores, micro-vibraciones,
            análisis de datos e inteligencia artificial para identificar la
            actividad subterránea de su cultivo.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#tecnologia" className="btn-primary">
              Conozca nuestra tecnología
              <ArrowRight size={18} />
            </a>
            <a href="#contacto" className="btn-secondary">
              Contáctenos
            </a>
          </div>
          <a
            href="#problema"
            className="mt-6 inline-flex items-center gap-2 text-sm text-sand/60 transition-colors hover:text-clay-400"
          >
            <ArrowDown size={16} className="animate-float-slow" />
            Continúe el recorrido
          </a>
        </div>
      </ScrollExpand>

      <div className="relative z-10 border-t border-sand/10 bg-forest-900">
        <div className="container-eco grid grid-cols-1 divide-sand/10 sm:grid-cols-3 sm:divide-x">
          {stats.map((s) => (
            <div key={s.k} className="flex flex-col gap-1 py-5 sm:px-8">
              <span className="text-xs uppercase tracking-[0.22em] text-clay-400">
                {s.v}
              </span>
              <span className="font-display text-base font-semibold text-sand-50">
                {s.k}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
