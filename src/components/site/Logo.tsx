import { cn } from "@/lib/utils";

type LogoProps = { tone?: "light" | "dark"; className?: string };

/** Text logotype: serif italic name + spaced small caps. */
export function Logo({ tone = "light", className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-baseline gap-2 leading-none", className)}>
      <span
        className={cn(
          "font-display text-[1.7rem] font-medium italic tracking-tight",
          tone === "dark" ? "text-sage-deep-foreground" : "text-sage-deep",
        )}
      >
        Serena
      </span>
      <span
        className={cn(
          "text-[0.62rem] font-semibold uppercase tracking-[0.32em]",
          tone === "dark" ? "text-gold" : "text-gold-ink",
        )}
      >
        Estética
      </span>
    </span>
  );
}
