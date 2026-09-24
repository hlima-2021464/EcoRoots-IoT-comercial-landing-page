import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, X } from "lucide-react";
import { LOGOS, NAV_LINKS } from "@/lib/site";
import { instagramHref } from "@/lib/contact";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-sand/10 bg-forest/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-eco flex h-16 items-center justify-between md:h-20">
        <a href="#inicio" className="flex items-center" aria-label="EcoRoots IoT — Inicio">
          <img
            src={LOGOS.horizontalDark}
            alt="EcoRoots IoT"
            className="h-9 w-auto md:h-11"
            width={220}
            height={64}
          />
        </a>

        {/* Enlaces desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-sand/80 transition-colors hover:text-sand-50"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={instagramHref()}
            target={instagramHref().startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label="Síganos en Instagram"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-sand/80 transition-colors hover:bg-sand/10 hover:text-sand-50 sm:inline-flex"
          >
            <Instagram size={20} />
          </a>
          <a href="#contacto" className="btn-primary hidden h-10 px-5 py-0 sm:inline-flex">
            Contáctenos
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sand-50 transition-colors hover:bg-sand/10 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-sand/10 bg-forest/95 backdrop-blur-md lg:hidden"
          >
            <ul className="container-eco flex flex-col gap-1 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-sand/90 transition-colors hover:bg-sand/10"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex gap-3 px-1">
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="btn-primary flex-1"
                >
                  Contáctenos
                </a>
                <a
                  href={instagramHref()}
                  target={instagramHref().startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-secondary"
                  aria-label="Síganos en Instagram"
                >
                  <Instagram size={18} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
