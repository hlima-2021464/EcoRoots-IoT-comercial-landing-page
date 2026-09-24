import type { Config } from "tailwindcss";

/**
 * Paleta refinada EcoRoots — dirección de arte "AgTech editorial premium".
 * (Definida a criterio del diseño para transmitir naturaleza + suelo + tecnología
 * con acabado fino y de alto contraste, inspirado en las referencias.)
 *
 *  forest  → verde casi-negro, base premium y fondos oscuros
 *  moss    → verde natural, cultivo, estados positivos
 *  sand    → crema cálida, secciones claras editoriales
 *  clay    → ORO cosecha, acento principal (CTAs, énfasis, detalles finos)
 *  soil    → marrón profundo, subsuelo y secciones tierra
 *  terra   → terracota, acento secundario cálido
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0E1512",
          900: "#080C0A",
          800: "#0E1512",
          700: "#17241D",
        },
        moss: {
          DEFAULT: "#6FA173",
          600: "#557E5B",
          500: "#6FA173",
          400: "#88B98C",
        },
        sand: {
          DEFAULT: "#E7DECC",
          200: "#EEE7D7",
          100: "#F5F1E8",
          50: "#FAF7F0",
        },
        clay: {
          DEFAULT: "#D9A94C", // oro cosecha (acento principal)
          600: "#BE8E32",
          500: "#D9A94C",
          400: "#E7C06E",
        },
        soil: {
          DEFAULT: "#2E1D12",
          700: "#221610",
          600: "#3B2617",
        },
        terra: {
          DEFAULT: "#B4703F",
          400: "#C88A5A",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          '"Space Grotesk"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "wave-pulse": {
          "0%, 100%": { transform: "scaleY(0.4)", opacity: "0.5" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "signal-rise": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "wave-pulse": "wave-pulse 1.4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "signal-rise": "signal-rise 0.8s ease-out both",
        "ken-burns": "ken-burns 18s ease-out forwards",
        marquee: "marquee 28s linear infinite",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
} satisfies Config;
