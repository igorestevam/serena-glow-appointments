import { navItems, site } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  const linkClass = "rounded-sm text-sage-deep-foreground/80 transition-colors hover:text-sage-deep-foreground";

  return (
    <footer className="bg-sage-deep text-sage-deep-foreground">
      <div className="container-serene flex flex-col gap-10 py-14 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Logo tone="dark" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sage-deep-foreground/70">
            Estética facial e corporal com hora marcada.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="space-y-2 text-sm not-italic">
          <p>
            <a href={`mailto:${site.contact.email}`} className={linkClass}>
              {site.contact.email}
            </a>
          </p>
          <p className="text-sage-deep-foreground/80">Instagram {site.contact.instagram}</p>
        </address>
      </div>

      <div className="border-t border-sage-deep-foreground/15">
        <div className="container-serene flex flex-col gap-2 pt-6 pb-24 text-xs text-sage-deep-foreground/60 sm:flex-row sm:justify-between sm:pb-6">
          <p>
            © {year} {site.name}. Clínica fictícia, criada como projeto de portfólio da {site.agency.name}.
          </p>
          <p>Contatos e endereço ilustrativos · Fotos: Unsplash</p>
        </div>
      </div>
    </footer>
  );
}
