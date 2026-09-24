import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import BgImage from "@/components/ui/BgImage";
import { IMAGES } from "@/lib/site";

const nodes = [
  { id: "N1", x: 18, y: 18 },
  { id: "N2", x: 82, y: 18 },
  { id: "N3", x: 18, y: 82 },
  { id: "N4", x: 82, y: 82 },
];

export default function Mapeo() {
  return (
    <section id="mapeo" className="relative overflow-hidden bg-soil-gradient py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />
      <div className="container-eco relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Mapeo y monitoreo"
          title={
            <>
              Varios sensores, una{" "}
              <span className="text-clay-400">visión espacial</span> del terreno.
            </>
          }
          intro="Con arreglos de hasta cuatro nodos coordinados, EcoRoots compara la actividad entre diferentes puntos y estima dónde se concentra dentro del área monitoreada."
        />

        {/* Visualización de nodos + mapa de calor */}
        <Reveal variant="scale" delay={0.1}>
          <div className="card-surface relative mx-auto aspect-square w-full max-w-md p-6">
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-sand/10 bg-forest-900/60">
              {/* imagen aérea real del cultivo como base del mapa */}
              <BgImage src={IMAGES.aerialRows} veil="none" position="center" />
              <div className="absolute inset-0 bg-forest-900/55" />
              {/* grid */}
              <svg className="absolute inset-0 h-full w-full opacity-25" aria-hidden="true">
                <defs>
                  <pattern id="grid" width="12.5%" height="12.5%" patternUnits="userSpaceOnUse">
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#caba9c" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* foco de actividad (cuadrante SE, coincide con la terminal) */}
              <motion.div
                className="absolute h-40 w-40 rounded-full"
                style={{
                  right: "6%",
                  bottom: "6%",
                  background:
                    "radial-gradient(circle, rgba(138,98,64,0.6) 0%, rgba(138,98,64,0) 70%)",
                }}
                animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.9, 1.05, 0.9] }}
                transition={{ duration: 3, repeat: Infinity }}
                aria-hidden="true"
              />

              {/* nodos */}
              {nodes.map((n, i) => (
                <div
                  key={n.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  <motion.span
                    className="block h-3.5 w-3.5 rounded-full bg-sand ring-4 ring-sand/20"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  />
                  <span className="absolute left-1/2 top-5 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-wider text-sand/60">
                    {n.id}
                  </span>
                </div>
              ))}

              {/* etiqueta del foco */}
              <div className="absolute bottom-3 right-3 rounded-lg bg-clay/20 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-clay-400 ring-1 ring-clay/30">
                Mayor actividad
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-sand/50">
              Representación conceptual del análisis espacial entre nodos.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
