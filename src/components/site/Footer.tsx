import { Mail, MapPin, Clock, Instagram } from "lucide-react";
import { navItems, site, whatsappLink } from "@/content/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  const year = new Date().getFullYear();
  const linkClass =
    "rounded-sm text-sage-deep-foreground/80 transition-colors hover:text-gold focus-visible:text-gold";

  return (
    <footer className="bg-sage-deep text-sage-deep-foreground">
      <div className="container-serene grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <Logo tone="dark" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-sage-deep-foreground/75">
            Estética facial e corporal com avaliação individual, protocolos personalizados e um ambiente feito para você
            desacelerar.
          </p>
        </div>

        <nav aria-label="Links do rodapé" className="lg:col-span-3">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold">Navegação</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic lg:col-span-4">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold">Contato</h2>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li className="flex items-start gap-3">
              <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {site.contact.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${site.contact.email}`} className={linkClass}>
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Instagram className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span className="text-sage-deep-foreground/80">{site.contact.instagram}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span className="text-sage-deep-foreground/80">{site.contact.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span className="text-sage-deep-foreground/80">{site.contact.hours}</span>
            </li>
          </ul>
        </address>
      </div>

      <div className="border-t border-sage-deep-foreground/12">
        <div className="container-serene flex flex-col gap-3 pt-7 pb-24 text-xs sm:pb-7 text-sage-deep-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Marca fictícia — projeto demonstrativo de portfólio.
          </p>
          <p>
            Dados de contato ilustrativos · Concebido por{" "}
            <span className="font-semibold text-sage-deep-foreground/85">{site.agency.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
