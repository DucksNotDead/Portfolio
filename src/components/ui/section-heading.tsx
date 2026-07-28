import { Reveal } from "@/components/ui/reveal";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <Reveal className="mb-6 sm:mb-10 lg:mb-12">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">
        {eyebrow}
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-muted leading-relaxed">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
