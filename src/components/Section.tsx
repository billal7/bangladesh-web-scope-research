import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface SectionProps {
  id?: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ id, kicker, title, subtitle, children, className, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 scroll-mt-20",
        dark ? "bg-slate-900 text-white" : "bg-white",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          {kicker && (
            <p className={cn("mb-3 text-xs font-bold uppercase tracking-[0.2em]", dark ? "text-emerald-400" : "text-emerald-700")}>
              {kicker}
            </p>
          )}
          <h2 className={cn("text-2xl sm:text-4xl font-bold tracking-tight", dark ? "text-white" : "text-slate-900")}>
            {title}
          </h2>
          {subtitle && (
            <p className={cn("mt-3 text-sm sm:text-base leading-relaxed", dark ? "text-slate-300" : "text-slate-600")}>
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
