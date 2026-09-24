import { Eye, EyeOff, Radar, Sprout } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import BgImage from "@/components/ui/BgImage";
import { IMAGES } from "@/lib/site";

const layers = [
  {
    tag: "Superficie",
    icon: Sprout,
    title: "Una planta aparentemente normal",
    text: "En la superficie, el cultivo puede lucir sano mientras el problema avanza donde nadie lo observa.",
  },
  {
    tag: "Subsuelo",
    icon: EyeOff,
    title: "Raíces y actividad de organismos",
    text: "Bajo tierra ocurre actividad de organismos y plagas edáficas que escapa a la vista.",
  },
  {
    tag: "Problema",
    icon: Eye,
    title: "Actividad que no se puede observar",
    text: "El agricultor no puede ver directamente el subsuelo hasta que el daño ya es evidente.",
  },
  {
    tag: "EcoRoots",
    icon: Radar,
    title: "Detectar señales a tiempo",
    text: "EcoRoots detecta señales antes de depender únicamente de la inspección visual.",
  },
];

export default function Problema() {
  return (
    <section id="problema" className="relative overflow-hidden bg-soil-gradient py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />
      <div className="container-eco relative">
        <SectionHeading
          eyebrow="El problema"
          title={
            <>
              Lo que sucede bajo el suelo permanece{" "}
              <span className="text-clay-400">invisible</span> hasta que el daño ya
              es evidente.
            </>
          }
          intro="La agricultura tradicional depende de lo que se ve en la superficie. EcoRoots le permite descender hasta donde comienza el problema."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          {/* Imagen editorial */}
          <Reveal variant="left" className="relative">
            <div className="relative h-72 overflow-hidden rounded-3xl lg:h-full">
              <BgImage src={IMAGES.soilScoop} veil="dark" position="center 55%" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="eyebrow text-clay-400">Bajo la superficie</span>
                <p className="mt-3 max-w-xs font-display text-xl font-semibold text-sand-50">
                  El 90% de la vida del cultivo comienza en el suelo.
                </p>
                <p className="mt-2 text-xs text-sand/50">
                  Representación conceptual.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Descenso vertical */}
          <RevealGroup className="relative" stagger={0.12}>
            <div
              className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-moss/40 via-clay/40 to-clay"
              aria-hidden="true"
            />
            {layers.map((l) => {
              const Icon = l.icon;
              const isEco = l.tag === "EcoRoots";
              return (
                <RevealItem
                  key={l.tag}
                  variant="right"
                  className="relative mb-6 flex gap-5 pl-0 last:mb-0"
                >
                  <span
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-4 ring-soil ${
                      isEco ? "bg-clay text-forest-900" : "bg-forest-700 text-sand-50"
                    }`}
                  >
                    <Icon size={18} />
                  </span>
                  <div
                    className={`flex-1 rounded-2xl border p-5 ${
                      isEco
                        ? "border-clay/40 bg-clay/10"
                        : "border-sand/10 bg-white/[0.03]"
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-400">
                      {l.tag}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-sand-50">
                      {l.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-sand/70">
                      {l.text}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
