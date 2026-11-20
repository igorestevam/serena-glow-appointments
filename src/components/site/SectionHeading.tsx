import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      <p className={cn("eyebrow flex items-center gap-3", centered && "justify-center", tone === "dark" && "text-gold")}>
        <span className="gold-rule" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-5 text-[2.35rem] leading-[1.05] sm:text-5xl lg:text-[3.6rem]",
          tone === "dark" ? "text-sage-deep-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-sage-deep-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
