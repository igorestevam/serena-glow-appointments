import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navItems, site } from "@/content/site";
import { Logo } from "./Logo";
import { WhatsAppCta } from "./WhatsAppCta";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-serene",
        scrolled ? "border-b border-border/70 bg-background/85 backdrop-blur-md" : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-serene flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <a href="#inicio" className="rounded-sm" aria-label={`${site.name} — voltar ao início`}>
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative py-2 text-[0.88rem] font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 ease-serene group-hover:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppCta size="pill-sm" className="hidden sm:inline-flex" />

          <Sheet>
            <SheetTrigger
              className="inline-flex size-11 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-colors hover:bg-sage-soft lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[86%] flex-col bg-background px-7 pt-8">
              <SheetTitle className="text-left">
                <Logo />
              </SheetTitle>
              <SheetDescription className="sr-only">Menu de navegação</SheetDescription>
              <nav aria-label="Navegação móvel" className="mt-10">
                <ul className="flex flex-col">
                  {navItems.map((item, i) => (
                    <li key={item.href} className="border-b border-border/70">
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          className="flex items-baseline gap-4 py-5 font-display text-3xl text-foreground transition-colors hover:text-primary"
                        >
                          <span className="font-sans text-xs font-semibold text-gold-ink">0{i + 1}</span>
                          {item.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto pb-6">
                <WhatsAppCta size="pill-lg" className="w-full" />
                <p className="mt-4 text-center text-xs text-muted-foreground">{site.contact.hours}</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
