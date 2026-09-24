import { Instagram, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import BgImage from "@/components/ui/BgImage";
import { CONTACT, instagramHref, isPlaceholder, whatsappHref } from "@/lib/contact";
import { BRAND, IMAGES } from "@/lib/site";

function WhatsAppGlyph({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contacto() {
  const waPlaceholder = isPlaceholder(CONTACT.whatsapp.url);
  const igPlaceholder = isPlaceholder(CONTACT.instagram.url);

  return (
    <section id="contacto" className="relative overflow-hidden bg-forest-900 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
        <BgImage src={IMAGES.fieldSplit} veil="none" position="center" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900 via-forest-900/85 to-forest-900" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-clay/50 to-transparent"
        aria-hidden="true"
      />
      <div className="container-eco relative">
        <SectionHeading
          align="center"
          eyebrow="Hablemos"
          title={
            <>
              ¿Le interesa conocer{" "}
              <span className="text-clay-400">EcoRoots</span>? Contáctenos.
            </>
          }
          intro="Escríbanos y con gusto le brindaremos información o coordinaremos una demostración de nuestra tecnología."
        />

        <RevealGroup className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2" stagger={0.12}>
          {/* WhatsApp */}
          <RevealItem variant="left">
          <a
            href={whatsappHref()}
            target={waPlaceholder ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-moss/40 bg-moss/10 p-8 transition-colors hover:bg-moss/20"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-moss text-sand-50">
                <WhatsAppGlyph />
              </span>
              <ArrowUpRight className="text-sand/50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div className="mt-8">
              <h3 className="font-display text-xl font-semibold text-sand-50">
                {CONTACT.whatsapp.label}
              </h3>
              <p className="mt-2 text-sm text-sand/60">
                {waPlaceholder
                  ? "Enlace por configurar (WHATSAPP_URL)."
                  : "Respuesta directa a su consulta."}
              </p>
            </div>
          </a>
          </RevealItem>

          {/* Instagram */}
          <RevealItem variant="right">
          <a
            href={instagramHref()}
            target={igPlaceholder ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-clay/40 bg-clay/10 p-8 transition-colors hover:bg-clay/20"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-clay text-sand-50">
                <Instagram size={26} />
              </span>
              <ArrowUpRight className="text-sand/50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div className="mt-8">
              <h3 className="font-display text-xl font-semibold text-sand-50">
                {CONTACT.instagram.label}
              </h3>
              <p className="mt-2 text-sm text-sand/60">
                {igPlaceholder
                  ? "Enlace por configurar (INSTAGRAM_URL)."
                  : CONTACT.instagram.handle}
              </p>
            </div>
          </a>
          </RevealItem>
        </RevealGroup>

        {(waPlaceholder || igPlaceholder) && (
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-sand/40">
            Nota para el equipo: configure los enlaces reales en
            <code className="mx-1 rounded bg-white/5 px-1.5 py-0.5">src/lib/contact.ts</code>
            para activar WhatsApp e Instagram.
          </p>
        )}

        <p className="mt-12 text-center font-display text-lg text-sand/50">
          {BRAND.name} — {BRAND.anchor}
        </p>
      </div>
    </section>
  );
}
