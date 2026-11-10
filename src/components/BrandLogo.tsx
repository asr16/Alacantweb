import Image from "next/image";
import { siteConfig } from "@/data/site";

type BrandLogoProps = {
  /** Ruta bajo `public/` (p. ej. `/brand/...`). */
  src?: string;
  /** Altura visual del logo en px. */
  height?: number;
  className?: string;
  priority?: boolean;
  /** Vacío cuando el enlace padre ya tiene aria-label. */
  decorative?: boolean;
};

const DEFAULT_LOGO_SRC = "/brand/logo-alacant.webp";

export function BrandLogo({
  src = DEFAULT_LOGO_SRC,
  height = 48,
  className = "",
  priority = false,
  decorative = false,
}: BrandLogoProps) {
  const intrinsicWidth = Math.round(
    height * (src === DEFAULT_LOGO_SRC ? 1 : 2.4),
  );

  return (
    <Image
      src={src}
      alt={decorative ? "" : siteConfig.name}
      width={intrinsicWidth}
      height={height}
      className={`w-auto object-contain ${className}`}
      style={{ height, width: "auto" }}
      priority={priority}
      sizes={`${Math.max(height, 160)}px`}
    />
  );
}
