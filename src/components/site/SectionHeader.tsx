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
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3">
          {align === "center" && <span className="gold-rule" />}
          <span className="eyebrow">{eyebrow}</span>
          <span className="gold-rule" />
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-navy-deep">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </div>
  );
}
