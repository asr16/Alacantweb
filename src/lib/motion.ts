/** Preferencia del usuario por menos movimiento (solo en cliente). */
export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
