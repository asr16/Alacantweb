import Image from "next/image";
import { siteConfig } from "@/data/site";

type BrandLogoProps = {
  /** Altura visual del logo en px (cuadrado / óvalo centrado). */
  height?: number;
  className?: string;
  /** Color (terracota) o mono; ambos usan el logo oficial. */
  variant?: "color" | "mono";
  priority?: boolean;
  /** Vacío cuando el enlace padre ya tiene aria-label. */
  decorative?: boolean;
};

const SRC = {
  color: "/brand/logo-alacant.webp",
  mono: "/brand/logo-alacant.webp",
} as const;

/** Relación del canvas del logo (cuadrado). */
const ASPECT = 1;

export function BrandLogo({
  height = 48,
  className = "",
  variant = "color",
  priority = false,
  decorative = false,
}: BrandLogoProps) {
  const width = Math.round(height * ASPECT);

  return (
    <Image
      src={SRC[variant]}
      alt={decorative ? "" : siteConfig.name}
      width={width}
      height={height}
      className={`w-auto object-contain ${className}`}
      style={{ height, width: "auto" }}
      priority={priority}
      sizes={`${Math.max(width, 160)}px`}
    />
  );
}
