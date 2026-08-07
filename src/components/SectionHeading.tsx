export function SectionHeading({
  title,
  subtitle,
  align = "left",
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {align === "left" && <span className="section-rule" aria-hidden />}
      <h2 className="font-display text-[1.85rem] font-semibold leading-[1.15] tracking-[-0.02em] text-texto sm:text-[2.35rem]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed text-texto-suave sm:text-[1.05rem] ${
            align === "center" ? "mx-auto max-w-lg" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
