import Image from "next/image";
import { siteConfig } from "@/data/site";

type BrandLogoProps = {
  /** Altura visual del logo en px. */
  height?: number;
  className?: string;
  priority?: boolean;
  /** Vacío cuando el enlace padre ya tiene aria-label. */
  decorative?: boolean;
};

export function BrandLogo({
  height = 48,
  className = "",
  priority = false,
  decorative = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/brand/logo-alacant.webp"
      alt={decorative ? "" : siteConfig.name}
      width={height}
      height={height}
      className={`w-auto object-contain ${className}`}
      style={{ height, width: "auto" }}
      priority={priority}
      sizes={`${Math.max(height, 160)}px`}
    />
  );
}
