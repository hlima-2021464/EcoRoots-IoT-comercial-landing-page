/**
 * Datos de contacto de EcoRoots IoT.
 *
 * IMPORTANTE (ver brand.md, sección 11):
 * Los enlaces reales aún NO existen en el proyecto. Se dejan como PLACEHOLDERS
 * claramente identificados. NO inventar números, usernames ni URLs reales.
 *
 * Para publicar: reemplace los valores marcados como "PENDIENTE" por los datos reales.
 *   - WHATSAPP: use el formato https://wa.me/502XXXXXXXX
 *   - INSTAGRAM: use el formato https://instagram.com/su_usuario
 */

type ContactConfig = {
  configured: boolean;
  whatsapp: { url: string; prefill: string; label: string };
  instagram: { url: string; handle: string; label: string };
};

export const CONTACT: ContactConfig = {
  /** true cuando ya se han colocado los enlaces reales */
  configured: false,

  whatsapp: {
    /** Reemplazar por la URL real. Ej: "https://wa.me/50200000000" */
    url: "https://wa.me/50253361838?text=Hola,%20quiero%20más%20información",
    /** Mensaje pre-cargado (opcional) */
    prefill:
      "Hola EcoRoots, me gustaría solicitar información sobre su tecnología de monitoreo del suelo.",
    label: "Escríbanos por WhatsApp",
  },

  instagram: {
    /** Reemplazar por la URL real. Ej: "https://instagram.com/ecoroots.iot" */
    url: "PENDIENTE",
    handle: "@ecoroots.iot",
    label: "Síganos en Instagram",
  },
};

/** Devuelve la URL de WhatsApp con mensaje pre-cargado, o "#" si es placeholder. */
export function whatsappHref(): string {
  if (CONTACT.whatsapp.url === "PENDIENTE") return "#contacto";
  const sep = CONTACT.whatsapp.url.includes("?") ? "&" : "?";
  return `${CONTACT.whatsapp.url}${sep}text=${encodeURIComponent(
    CONTACT.whatsapp.prefill
  )}`;
}

export function instagramHref(): string {
  return CONTACT.instagram.url === "PENDIENTE" ? "#contacto" : CONTACT.instagram.url;
}

export const isPlaceholder = (v: string) => v === "PENDIENTE";
