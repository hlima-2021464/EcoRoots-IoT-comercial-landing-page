import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import BgImage from "@/components/ui/BgImage";
import { IMAGES, TECH } from "@/lib/site";

/** Espectro FFT conceptual (representación visual, no dato real). */
function FftSpectrum() {
  const bars = Array.from({ length: 32 }, (_, i) => {
    const base = Math.sin(i * 0.5) * 0.5 + 0.5;
    const peak = i === 9 || i === 10 || i === 21 ? 1 : base * 0.6;
    return Math.max(0.12, peak);
  });
  return (
    <div className="flex h-28 items-end gap-[3px]" aria-hidden="true">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="flex-1 rounded-t bg-gradient-to-t from-clay to-moss-400"
          initial={{ scaleY: 0.1, opacity: 0.5 }}
          whileInView={{ scaleY: h, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.02, ease: "easeOut" }}
          style={{ height: "100%", transformOrigin: "bottom" }}
        />
      ))}
    </div>
  );
}

export default function Tecnologia() {
  return (
    <section id="tecnologia" className="relative overflow-hidden bg-forest py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />
      <div className="container-eco relative">
        <SectionHeading
          eyebrow="La tecnología"
          title={
            <>
              No es solo una idea:{" "}
              <span className="text-clay-400">es ingeniería.</span>
            </>
          }
          intro="Cada componente cumple una función concreta dentro del sistema de detección y análisis de EcoRoots."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Grid de tecnologías: componente → función */}
          <RevealGroup className="grid gap-px overflow-hidden rounded-3xl border border-sand/10 bg-sand/10 sm:grid-cols-2" stagger={0.05}>
            {TECH.map((t) => (
              <RevealItem
                key={t.name}
                variant="up"
                className="group bg-forest-900 p-6"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-clay transition-all group-hover:w-4" />
                  <h3 className="font-display text-base font-semibold text-sand-50">
                    {t.name}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-sand/65">{t.fn}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Columna visual: hardware + espectro FFT + tarjeta terminal */}
          <div className="flex flex-col gap-6">
            <Reveal variant="right">
              <div className="relative h-40 overflow-hidden rounded-2xl">
                <BgImage src={IMAGES.techCircuit} veil="left" position="center" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="eyebrow text-clay-400">Hardware</span>
                  <p className="mt-2 font-display text-lg font-semibold text-sand-50">
                    Electrónica diseñada para el campo
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={0.08}>
              <div className="card-surface p-6">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-clay-400">Procesamiento espectral · FFT</span>
                  <span className="text-xs text-sand/50">dominio de frecuencia</span>
                </div>
                <div className="mt-6">
                  <FftSpectrum />
                </div>
                <p className="mt-4 text-xs leading-relaxed text-sand/50">
                  Analizamos la distribución de energía de las señales captadas para
                  distinguir la actividad relevante. Representación conceptual.
                </p>
              </div>
            </Reveal>

            <Reveal variant="right" delay={0.16}>
              <div className="overflow-hidden rounded-2xl border border-sand/10 bg-forest-900 font-mono text-xs">
                <div className="flex items-center gap-2 border-b border-sand/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-clay/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-moss/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-sand/40" />
                  <span className="ml-2 text-sand/50">nodo-01 · ESP32</span>
                </div>
                <div className="space-y-1.5 p-4 leading-relaxed text-sand/80">
                  <p><span className="text-clay-400">esp-now</span>  ▸ enlace con 3 nodos establecido</p>
                  <p><span className="text-clay-400">sensor</span>   ▸ piezoeléctrico activo · humedad 41%</p>
                  <p><span className="text-clay-400">fft</span>      ▸ pico detectado · 320 Hz</p>
                  <p><span className="text-moss-400">map</span>      ▸ mayor actividad → cuadrante SE</p>
                  <p className="text-sand/40">// datos ilustrativos — representación conceptual</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
