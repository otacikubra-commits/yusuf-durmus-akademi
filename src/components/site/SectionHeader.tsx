import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "";
  return (
    <div className={`reveal max-w-3xl flex flex-col ${alignCls}`}>
      {eyebrow && (
        <div className="mb-5 flex items-center gap-3">
          {align === "center" && <span className="gold-rule" />}
          <span className="eyebrow">{eyebrow}</span>
          <span className="gold-rule" />
        </div>
      )}
      <h2 className="font-display text-[2.4rem] md:text-5xl lg:text-[3.4rem] leading-[1.04] tracking-[-0.015em] text-navy-deep">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-lg leading-[1.75] text-muted-foreground max-w-2xl">
          {intro}
        </p>
      )}
    </div>
  );
}
