import type { ReactNode } from "react";

type ContactCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  iconClassName?: string;
};

export function ContactCard({
  icon,
  title,
  children,
  iconClassName = "bg-arena text-mar",
}: ContactCardProps) {
  return (
    <div className="border border-arena bg-white p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className={`p-2.5 ${iconClassName}`}>{icon}</div>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-lg font-semibold tracking-tight text-texto">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
}
