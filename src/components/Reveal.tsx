"use client";

import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** @deprecated Conservado por compatibilidad; el contenido ya no se oculta. */
  delayMs?: number;
};

/**
 * Contenedor semántico sin ocultar contenido.
 * El motion agresivo (opacity 0) se eliminó por UX/accesibilidad.
 */
export function Reveal({ children, className = "" }: RevealProps) {
  if (!className) return <>{children}</>;
  return <div className={className}>{children}</div>;
}
