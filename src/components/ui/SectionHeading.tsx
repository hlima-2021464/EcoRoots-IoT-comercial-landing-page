import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/** Encabezado editorial reutilizable: eyebrow + título + intro breve. */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className = "",
}: Props) {
  const isCenter = align === "center";
  const eyebrowColor = tone === "light" ? "text-clay-400" : "text-terra";
  const introColor = tone === "light" ? "text-sand/70" : "text-forest/70";

  return (
    <Reveal
      variant="blur"
      className={`${isCenter ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${eyebrowColor} ${isCenter ? "justify-center" : ""}`}>
          <span className="h-px w-6 bg-current opacity-60" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed ${introColor} sm:text-lg`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
