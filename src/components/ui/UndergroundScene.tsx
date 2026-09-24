import { motion, useReducedMotion } from "framer-motion";

/**
 * Escena conceptual del subsuelo: superficie → raíces → sonda → ondas → datos.
 * Es el pilar visual "ver lo que ocurre bajo el suelo" (brand.md, secciones 5 y 14).
 * Puramente decorativa (aria-hidden). Representación conceptual, no un dato real.
 */
export default function UndergroundScene({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 420 460"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="soilGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#173829" />
            <stop offset="45%" stopColor="#4d2d18" />
            <stop offset="100%" stopColor="#2a1a0f" />
          </linearGradient>
          <linearGradient id="probeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#caba9c" />
            <stop offset="100%" stopColor="#8a6240" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4c6444" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#4c6444" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Cielo / superficie superior */}
        <rect x="0" y="0" width="420" height="150" fill="#0b1c16" />
        {/* Subsuelo */}
        <rect x="0" y="150" width="420" height="310" fill="url(#soilGrad)" />

        {/* Línea de superficie */}
        <line x1="0" y1="150" x2="420" y2="150" stroke="#caba9c" strokeOpacity="0.5" strokeWidth="1.5" />
        {/* Estratos del suelo */}
        {[195, 245, 300, 360].map((y, i) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="420"
            y2={y}
            stroke="#caba9c"
            strokeOpacity={0.08 + i * 0.01}
            strokeWidth="1"
            strokeDasharray="2 8"
          />
        ))}

        {/* Planta sobre la superficie */}
        <g stroke="#4c6444" strokeWidth="3" strokeLinecap="round" fill="none">
          <path d="M150 150 C150 120 150 100 150 82" />
          <path d="M150 108 C132 100 122 88 120 72 C138 74 150 88 150 104" fill="#4c6444" fillOpacity="0.85" />
          <path d="M150 96 C168 88 178 76 180 60 C162 62 150 76 150 92" fill="#5f7a56" fillOpacity="0.85" />
        </g>

        {/* Raíces bajo la superficie */}
        <g stroke="#8a6240" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.95">
          <path d="M150 150 C150 175 150 195 150 215" />
          <path d="M150 175 C132 190 120 205 112 228" />
          <path d="M150 185 C168 198 182 214 190 236" />
          <path d="M150 205 C140 224 132 240 128 262" />
          <path d="M150 210 C162 228 172 246 176 268" />
        </g>

        {/* Sonda insertada en el suelo */}
        <g>
          <rect x="286" y="120" width="14" height="150" rx="7" fill="url(#probeGrad)" />
          <rect x="290" y="120" width="6" height="150" rx="3" fill="#f6f2e9" fillOpacity="0.25" />
          <circle cx="293" cy="120" r="10" fill="#caba9c" />
          <circle cx="293" cy="270" r="6" fill="#4d2d18" />
        </g>

        {/* Foco de actividad + resplandor */}
        <circle cx="205" cy="330" r="60" fill="url(#glow)" />

        {/* Ondas que emanan del foco hacia la sonda */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx="205"
            cy="330"
            r="18"
            stroke="#4c6444"
            strokeWidth="2"
            initial={{ opacity: 0.6, scale: 0.4 }}
            animate={reduce ? { opacity: 0.4 } : { opacity: 0, scale: 2.4 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut",
            }}
            style={{ transformOrigin: "205px 330px" } as React.CSSProperties}
          />
        ))}
        <circle cx="205" cy="330" r="6" fill="#caba9c" />

        {/* Señal que sube por la sonda y se convierte en datos */}
        <motion.circle
          cx="293"
          cy="260"
          r="4"
          fill="#caba9c"
          initial={{ cy: 260, opacity: 0 }}
          animate={reduce ? { opacity: 0.8 } : { cy: [260, 120], opacity: [0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Datos ascendiendo hacia la "plataforma" (parte superior derecha) */}
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.rect
              key={i}
              x={320 + i * 16}
              y={70 - i * 4}
              width="9"
              height={12 + (i % 3) * 10}
              rx="2"
              fill="#4c6444"
              fillOpacity="0.9"
              initial={{ scaleY: 0.3, opacity: 0.4 }}
              animate={reduce ? { opacity: 0.8 } : { scaleY: [0.3, 1, 0.5], opacity: [0.5, 1, 0.6] }}
              transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
              style={{ transformOrigin: "center bottom" }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
