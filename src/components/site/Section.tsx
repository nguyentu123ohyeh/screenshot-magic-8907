import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn(align === "center" && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight md:text-4xl",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <span className={cn("gold-rule mt-5", align === "center" && "mx-auto")} />
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            invert ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "navy";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        tone === "muted" && "bg-surface",
        tone === "navy" && "gradient-navy text-white",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="gradient-navy relative overflow-hidden pt-36 pb-20 text-white md:pt-44 md:pb-28">
      <div className="bg-accent/15 absolute -top-32 -right-24 size-96 rounded-full blur-3xl" />
      <div className="bg-accent/10 absolute -bottom-40 -left-24 size-96 rounded-full blur-3xl" />
      <div className="container-page relative">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <span className="gold-rule mt-6" />
          <p className="mt-6 text-lg leading-relaxed text-white/75">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
