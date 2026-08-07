import Image from "next/image";
import { siteConfig } from "@/data/site";

type BrandLogoProps = {
  /** Altura visual del badge en px (el logo es vertical). */
  height?: number;
  className?: string;
  /** Color (terracota) o mono (negro) para fondos claros. */
  variant?: "color" | "mono";
  priority?: boolean;
};

const SRC = {
  color: "/brand/logo-alacant.png",
  mono: "/brand/logo-alacant-mono.png",
} as const;

/** Relación aproximada del badge ovalado (ancho / alto). */
const ASPECT = 0.72;

export function BrandLogo({
  height = 48,
  className = "",
  variant = "color",
  priority = false,
}: BrandLogoProps) {
  const width = Math.round(height * ASPECT);

  return (
    <Image
      src={SRC[variant]}
      alt={siteConfig.name}
      width={width}
      height={height}
      className={`w-auto object-contain ${className}`}
      style={{ height }}
      priority={priority}
      sizes={`${Math.max(width, 160)}px`}
    />
  );
}
