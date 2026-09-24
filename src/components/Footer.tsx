import { Instagram } from "lucide-react";
import { BRAND, LOGOS, NAV_LINKS } from "@/lib/site";
import { instagramHref, whatsappHref } from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-sand/10 bg-forest-900">
      <div className="container-eco grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            src={LOGOS.horizontalDark}
            alt="EcoRoots IoT"
            className="h-12 w-auto"
            width={240}
            height={70}
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand/60">
            {BRAND.tagline}. {BRAND.anchor}
          </p>
        </div>

        <nav aria-label="Navegación del pie">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-400">
            Navegación
          </h3>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-sand/70 transition-colors hover:text-sand-50"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-400">
            Contacto
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={whatsappHref()}
              target={whatsappHref().startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-sm text-sand/70 transition-colors hover:text-sand-50"
            >
              Escríbanos por WhatsApp
            </a>
            <a
              href={instagramHref()}
              target={instagramHref().startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-sand/70 transition-colors hover:text-sand-50"
            >
              <Instagram size={16} /> Síganos en Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-sand/10">
        <div className="container-eco flex flex-col items-center justify-between gap-3 py-6 text-xs text-sand/50 sm:flex-row">
          <p>© {year} {BRAND.name}. Todos los derechos reservados.</p>
          <p className="text-center sm:text-right">
            {BRAND.anchor}
          </p>
        </div>
      </div>
    </footer>
  );
}
