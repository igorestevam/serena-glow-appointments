import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose, SheetDescription } from "@/components/ui/sheet";
import { navItems, site } from "@/content/site";
import { Logo } from "./Logo";
import { WhatsAppCta } from "./WhatsAppCta";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container-serene flex h-16 items-center justify-between gap-6">
        <a href="#inicio" className="rounded-sm" aria-label={`${site.name}, voltar ao início`}>
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-sm py-2 text-[0.92rem] text-foreground/75 transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppCta size="cta-sm" className="hidden sm:inline-flex" />

          <Sheet>
            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-sm border border-foreground/20 text-foreground transition-colors hover:bg-foreground/5 lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[86%] flex-col bg-background px-7 pt-8">
              <SheetTitle className="text-left">
                <Logo />
              </SheetTitle>
              <SheetDescription className="sr-only">Menu de navegação</SheetDescription>
              <nav aria-label="Navegação móvel" className="mt-8">
                <ul className="flex flex-col">
                  {navItems.map((item) => (
                    <li key={item.href} className="border-b border-border">
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          className="block py-4 font-display text-2xl text-foreground transition-colors hover:text-primary"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto pb-6">
                <WhatsAppCta size="cta-lg" className="w-full" />
                <p className="mt-4 text-center text-xs text-muted-foreground">{site.contact.hours}</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
