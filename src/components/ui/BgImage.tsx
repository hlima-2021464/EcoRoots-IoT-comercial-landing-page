type BgImageProps = {
  src: string;
  alt?: string;
  className?: string;
  /** Tipo de velo para legibilidad. */
  veil?: "dark" | "left" | "none";
  /** Activa un zoom lento (Ken Burns). */
  kenBurns?: boolean;
  position?: string;
  priority?: boolean;
};

/**
 * Imagen de fondo con velo de contraste, pensada para secciones editoriales.
 * Usa lazy-loading por defecto para cuidar el rendimiento (brand.md, sección 24).
 */
export default function BgImage({
  src,
  alt = "",
  className = "",
  veil = "dark",
  kenBurns = false,
  position = "center",
  priority = false,
}: BgImageProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden={alt === ""}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-full object-cover ${kenBurns ? "animate-ken-burns" : ""}`}
        style={{ objectPosition: position }}
      />
      {veil !== "none" && (
        <div className={`absolute inset-0 ${veil === "left" ? "veil-left" : "veil-dark"}`} />
      )}
    </div>
  );
}
