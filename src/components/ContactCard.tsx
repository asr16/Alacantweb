import type { ReactNode } from "react";

type ContactCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

export function ContactCard({ icon, title, children }: ContactCardProps) {
  return (
    <div className="border border-arena bg-white p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <div className="bg-arena p-2.5 text-mar">{icon}</div>
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
