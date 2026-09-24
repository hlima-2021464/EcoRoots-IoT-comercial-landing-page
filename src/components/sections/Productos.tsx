import { ArrowRight, Check, Layers, Radio } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import BgImage from "@/components/ui/BgImage";
import { IMAGES, PRODUCTS } from "@/lib/site";

const productImg: Record<string, string> = {
  standalone: IMAGES.seedPots,
  perimetral: IMAGES.aerialRows,
};

const icons = { standalone: Radio, perimetral: Layers } as const;

export default function Productos() {
  return (
    <section id="productos" className="relative bg-forest py-24 md:py-32">
      <div className="container-eco">
        <SectionHeading
          align="center"
          eyebrow="Qué ofrecemos"
          title={
            <>
              Dos modalidades, una misma{" "}
              <span className="text-clay-400">tecnología</span>.
            </>
          }
          intro="Elija la solución según su escala: desde el monitoreo de una planta hasta el análisis espacial de una parcela completa."
        />
      </div>

      {/* Split-screen de productos */}
      <RevealGroup className="container-eco mt-14 grid gap-6 lg:grid-cols-2" stagger={0.14}>
        {PRODUCTS.map((p) => {
          const Icon = icons[p.id as keyof typeof icons];
          const featured = p.id === "perimetral";
          return (
            <RevealItem
              key={p.id}
              variant="up"
              className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 md:p-10 ${
                featured
                  ? "border-clay/40 bg-gradient-to-br from-soil/40 to-forest-900"
                  : "border-sand/10 bg-forest-900"
              }`}
            >
              {/* imagen de contexto sutil */}
              <div className="pointer-events-none absolute inset-0 opacity-25">
                <BgImage src={productImg[p.id]} veil="none" position="center" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/85 to-forest-900/60" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />
              <div className="relative flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clay/15 text-clay-400 ring-1 ring-clay/30">
                  <Icon size={22} />
                </span>
                {featured && (
                  <span className="rounded-full bg-clay px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sand-50">
                    Cobertura ampliada
                  </span>
                )}
              </div>

              <span className="relative mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-sand/50">
                {p.kind}
              </span>
              <h3 className="relative mt-2 font-display text-2xl font-bold text-sand-50 md:text-3xl">
                {p.name}
              </h3>
              <p className="relative mt-4 max-w-md text-sm leading-relaxed text-sand/70">
                {p.description}
              </p>

              {/* Para quién */}
              <div className="relative mt-6 flex flex-wrap gap-2">
                {p.for.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-sand/15 px-3 py-1 text-xs text-sand/70"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="relative mt-6 space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-sand/80">
                    <Check size={16} className="text-moss-400" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Precio + CTA */}
              <div className="relative mt-8 flex items-end justify-between border-t border-sand/10 pt-6">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-sand/50">
                    Precio planteado
                  </span>
                  <span className="font-display text-3xl font-bold text-sand-50">
                    {p.price}
                  </span>
                </div>
                <a
                  href="#contacto"
                  className={featured ? "btn-primary" : "btn-secondary"}
                >
                  Solicitar información
                  <ArrowRight size={16} />
                </a>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <p className="container-eco mt-8 text-center text-xs text-sand/45">
        Los precios son referenciales para presentación. Contáctenos para conocer
        disponibilidad y solicitar una demostración.
      </p>
    </section>
  );
}
