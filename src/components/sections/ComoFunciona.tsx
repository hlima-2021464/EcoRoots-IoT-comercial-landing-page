import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { STEPS } from "@/lib/site";

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative bg-sand py-24 text-forest md:py-32">
      <div className="container-eco">
        <SectionHeading
          tone="dark"
          eyebrow="Cómo funciona"
          title={
            <>
              Del suelo a la información, en{" "}
              <span className="text-clay">cinco pasos</span>.
            </>
          }
          intro="Un recorrido claro: la señal nace bajo tierra y termina convertida en información comprensible."
        />

        <RevealGroup className="relative mt-16 grid gap-8 md:grid-cols-5" stagger={0.12}>
          <div
            className="absolute left-0 top-6 hidden h-px w-full bg-gradient-to-r from-clay/10 via-clay/40 to-clay/10 md:block"
            aria-hidden="true"
          />
          {STEPS.map((s) => (
            <RevealItem key={s.n} variant="up" className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-forest font-display text-sm font-bold text-sand-50 ring-4 ring-sand">
                {s.n}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-forest">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest/70">{s.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
