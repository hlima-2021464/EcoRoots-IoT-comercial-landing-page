import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "blur";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: RevealVariant;
  once?: boolean;
};

const EASE = [0.22, 1, 0.36, 1] as const;

function initialFor(variant: RevealVariant, reduce: boolean | null) {
  if (reduce) return { opacity: 0 };
  switch (variant) {
    case "down":
      return { opacity: 0, y: -28 };
    case "left":
      return { opacity: 0, x: -36 };
    case "right":
      return { opacity: 0, x: 36 };
    case "scale":
      return { opacity: 0, scale: 0.94 };
    case "blur":
      return { opacity: 0, y: 20, filter: "blur(10px)" };
    default:
      return { opacity: 0, y: 32 };
  }
}

function visibleFor(variant: RevealVariant) {
  if (variant === "blur") {
    return { opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" };
  }
  return { opacity: 1, y: 0, x: 0, scale: 1 };
}

/**
 * Scroll Reveal: los bloques aparecen al entrar en viewport.
 * Respeta prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  variant = "up",
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={initialFor(variant, reduce)}
      whileInView={visibleFor(variant)}
      viewport={{ once, margin: "-12% 0px -8% 0px", amount: 0.2 }}
      transition={{ duration: reduce ? 0.2 : duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
};

/** Hijo de RevealGroup: hereda el stagger del contenedor. */
export function RevealItem({
  children,
  className,
  variant = "up",
}: RevealItemProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: initialFor(variant, reduce),
        show: {
          ...visibleFor(variant),
          transition: { duration: reduce ? 0.2 : 0.7, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

/** Orquesta la aparición escalonada de varios RevealItem. */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -6% 0px", amount: 0.15 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}
