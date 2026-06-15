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
    <section className="relative pt-40 pb-28 bg-navy-deep text-cream overflow-hidden grain">
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/75 to-navy-deep"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
      />
      <div className="container-prose relative">
        <div className="reveal flex items-center gap-3 mb-6">
          <span className="gold-rule" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h1 className="reveal font-display text-[2.8rem] md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.02em] text-cream max-w-4xl">
          {title}
        </h1>
        {intro && (
          <p className="reveal mt-8 max-w-2xl text-lg md:text-xl text-cream/75 leading-[1.7]">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
