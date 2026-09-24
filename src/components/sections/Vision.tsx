import SideRays from "@/components/SideRays.jsx";
import Reveal from "@/components/ui/Reveal";
import BgImage from "@/components/ui/BgImage";
import { IMAGES } from "@/lib/site";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-forest-900 py-24 md:py-32"
    >
      <BgImage src={IMAGES.fieldSunset} veil="left" kenBurns position="center 60%" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-transparent" />

      {/* Side Rays: luz de cosecha que entra desde el horizonte */}
      <div className="pointer-events-none absolute inset-0 z-[2] mix-blend-screen">
        <SideRays
          speed={0.7}
          rayColor1="#D9A94C"
          rayColor2="#B4703F"
          intensity={1.55}
          spread={1.5}
          origin="top-right"
          tilt={-8}
          saturation={1.2}
          blend={0.5}
          falloff={1.7}
          opacity={0.85}
        />
      </div>

      <div className="container-eco relative z-10">
        <Reveal variant="blur">
          <span className="eyebrow text-clay-400">
            <span className="h-px w-6 bg-current opacity-60" />
            Nuestra visión
          </span>
        </Reveal>

        <Reveal variant="up" delay={0.08}>
          <p className="mt-6 max-w-4xl font-display text-3xl font-bold leading-[1.15] text-balance text-sand-50 sm:text-4xl md:text-5xl">
            Hacer más accesible el{" "}
            <span className="text-gradient-gold">monitoreo inteligente del suelo</span>,
            para que cada agricultor decida con mejor información sobre lo que ocurre
            bajo la superficie.
          </p>
        </Reveal>

        <Reveal variant="up" delay={0.18}>
          <div className="mt-10 flex flex-wrap gap-3">
            {["Tecnología accesible", "Agricultura de precisión", "Datos comprensibles"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-sand/25 bg-forest-900/40 px-4 py-2 text-sm font-medium text-sand-50 backdrop-blur-sm"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
