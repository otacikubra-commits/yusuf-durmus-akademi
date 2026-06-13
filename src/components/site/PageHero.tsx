import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
}) {
  return (
    <section className="relative pt-32 pb-20 bg-navy-deep text-cream overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/70 to-navy-deep"
        aria-hidden
      />
      <div className="container-prose relative">
        <div className="flex items-center gap-3 mb-5">
          <span className="gold-rule" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-cream max-w-4xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg text-cream/75 leading-relaxed">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
