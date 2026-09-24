import { useMemo } from "react";

type SoundWaveProps = {
  bars?: number;
  className?: string;
  color?: string;
  animated?: boolean;
};

/**
 * Barras tipo onda de sonido — motivo de "bioacústica del suelo" del logo.
 * Uso decorativo (aria-hidden).
 */
export default function SoundWave({
  bars = 9,
  className = "",
  color = "currentColor",
  animated = true,
}: SoundWaveProps) {
  const heights = useMemo(
    () => Array.from({ length: bars }, (_, i) => 30 + Math.round(60 * Math.abs(Math.sin(i * 1.3)))),
    [bars]
  );

  return (
    <div
      className={`flex items-center gap-[3px] ${className}`}
      aria-hidden="true"
    >
      {heights.map((h, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full ${animated ? "animate-wave-pulse" : ""}`}
          style={{
            height: `${h}%`,
            backgroundColor: color,
            animationDelay: `${(i % 5) * 0.12}s`,
            transformOrigin: "center",
          }}
        />
      ))}
    </div>
  );
}
