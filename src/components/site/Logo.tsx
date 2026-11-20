import { cn } from "@/lib/utils";

type LogoProps = { tone?: "light" | "dark"; className?: string };

/** Text logotype: serif name followed by a small sans "estética". */
export function Logo({ tone = "light", className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-baseline gap-1.5 leading-none", className)}>
      <span
        className={cn("font-display text-[1.55rem]", tone === "dark" ? "text-sage-deep-foreground" : "text-sage-deep")}
      >
        Serena
      </span>
      <span
        className={cn("text-[0.8rem]", tone === "dark" ? "text-sage-deep-foreground/70" : "text-muted-foreground")}
      >
        estética
      </span>
    </span>
  );
}
