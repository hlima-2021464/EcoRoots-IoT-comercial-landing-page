import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import BgImage from "@/components/ui/BgImage";
import { IMAGES, OFFERINGS } from "@/lib/site";

const flow = ["Suelo", "Sensor", "Datos", "Análisis", "Mapa", "Información"];

export default function Solucion() {
  return (
    <section id="solucion" className="relative overflow-hidden bg-underground py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />
      <div className="container-eco relative">
        <SectionHeading
          eyebrow="La solución"
          title={
            <>
              Convertimos micro-vibraciones del suelo en{" "}
              <span className="text-clay-400">información comprensible</span>.
            </>
          }
          intro="EcoRoots detecta señales bajo tierra, las procesa y las transforma en información accionable para que usted decida con mayor certeza."
        />

        {/* Flujo SUELO → SENSOR → DATOS → ANÁLISIS → MAPA → INFORMACIÓN */}
        <RevealGroup className="mt-14 flex flex-wrap items-center gap-3" stagger={0.07}>
          {flow.map((step, i) => (
            <RevealItem key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-sand/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-sand-50">
                {step}
              </span>
              {i < flow.length - 1 && (
                <span className="text-clay-400" aria-hidden="true">
                  →
                </span>
              )}
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Banda editorial */}
        <Reveal variant="scale" className="relative mt-12 h-56 overflow-hidden rounded-3xl md:h-72">
          <BgImage src={IMAGES.cropLowangle} veil="left" kenBurns position="center 65%" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12">
            <span className="eyebrow text-clay-400">Del dato a la decisión</span>
            <p className="mt-3 max-w-md font-display text-2xl font-semibold text-sand-50 md:text-3xl">
              Su cultivo, comprendido desde la raíz.
            </p>
          </div>
        </Reveal>

        {/* Qué ofrecemos: 6 capacidades */}
        <RevealGroup
          className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-sand/10 bg-sand/10 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {OFFERINGS.map((o, i) => (
            <RevealItem key={o.title} variant="up" className="bg-forest-900 p-7">
              <span className="font-display text-sm font-semibold text-clay-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-sand-50">
                {o.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sand/70">{o.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
