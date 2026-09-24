import { Cpu, Leaf, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import BgImage from "@/components/ui/BgImage";
import { BRAND, IMAGES } from "@/lib/site";

const pillars = [
  {
    icon: Leaf,
    title: "AgTech con propósito",
    text: "Un emprendimiento tecnológico enfocado en soluciones IoT aplicadas a la agricultura.",
  },
  {
    icon: Cpu,
    title: "Tecnología + agricultura",
    text: "Combinamos hardware, sensores y análisis de datos con el conocimiento del suelo.",
  },
  {
    icon: Users,
    title: "Accesible",
    text: "Hacemos más accesible la tecnología de agricultura de precisión.",
  },
];

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="relative bg-sand py-24 text-forest md:py-32">
      <div className="container-eco grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeading
            tone="dark"
            eyebrow="Quiénes somos"
            title={
              <>
                Un equipo que une{" "}
                <span className="text-terra">tecnología</span> y{" "}
                <span className="text-moss-600">agricultura</span>.
              </>
            }
            intro="EcoRoots es un emprendimiento AgTech dedicado a desarrollar una solución para el monitoreo de actividad subterránea. Creemos que la agricultura de precisión debe ser comprensible y estar al alcance de más personas."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} variant="up" delay={i * 0.12}>
                  <div className="h-full rounded-2xl border border-forest/10 bg-white/50 p-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-clay-400">
                      <Icon size={18} />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-forest">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-forest/70">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Imagen editorial + tarjeta del fundador */}
        <Reveal variant="scale" delay={0.12}>
          <div className="relative">
            <div className="relative h-[26rem] overflow-hidden rounded-3xl shadow-xl shadow-forest/20">
              <BgImage src={IMAGES.handPlanting} veil="dark" position="center" />
            </div>

            <div className="relative -mt-20 ml-4 mr-4 rounded-3xl border border-clay/30 bg-forest p-7 text-sand-50 shadow-xl shadow-forest/30 sm:ml-8">
              <span className="eyebrow text-clay-400">Fundador</span>
              <p className="mt-4 font-display text-xl font-semibold leading-snug">
                «Queremos que cualquier persona pueda comprender lo que ocurre
                debajo de su suelo.»
              </p>
              <div className="mt-6 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clay text-lg font-bold text-forest-900">
                  H
                </span>
                <div>
                  <p className="font-semibold text-sand-50">{BRAND.founder}</p>
                  <p className="text-sm text-sand/60">Fundador de {BRAND.name}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
