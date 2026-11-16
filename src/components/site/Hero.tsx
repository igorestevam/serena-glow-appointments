import type { CSSProperties } from "react";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-serena.jpg";
import { Button } from "@/components/ui/button";
import { WhatsAppCta } from "./WhatsAppCta";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-gradient-sand pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">

      <div className="container-serene grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 lg:pr-6">
          <p className="eyebrow flex items-center gap-3 animate-rise">
            <span className="gold-rule" aria-hidden="true" />
            Estética facial e corporal
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[2.9rem] leading-[1] text-foreground animate-rise sm:text-6xl lg:text-[4.6rem] xl:text-[5.2rem]"
            style={{ "--rise-delay": "120ms" } as CSSProperties}
          >
            Cuidar de si pode ser <em className="font-normal italic text-primary">sereno</em>.
          </h1>

          <p
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground animate-rise sm:text-lg"
            style={{ "--rise-delay": "240ms" } as CSSProperties}
          >
            Tratamentos pensados a partir de uma avaliação individual, em um ambiente calmo, com tempo para ouvir você e
            explicar cada etapa.
          </p>

          <div
            className="mt-9 flex flex-col gap-3 animate-rise sm:flex-row sm:items-center"
            style={{ "--rise-delay": "360ms" } as CSSProperties}
          >
            <WhatsAppCta size="pill-lg" />
            <Button asChild variant="serene-outline" size="pill-lg">
              <a href="#tratamentos">
                Ver tratamentos
                <ArrowDown />
              </a>
            </Button>
          </div>

          <dl
            className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-foreground/10 pt-6 animate-rise"
            style={{ "--rise-delay": "480ms" } as CSSProperties}
          >
            {[
              ["Avaliação", "individual"],
              ["Protocolos", "personalizados"],
              ["Agenda", "via WhatsApp"],
            ].map(([term, desc]) => (
              <div key={term}>
                <dt className="font-display text-xl text-foreground sm:text-2xl">{term}</dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{desc}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-6">
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-full max-w-lg translate-x-5 -translate-y-5 arch border border-gold/50 lg:block" />
          <div className="relative mx-auto max-w-md overflow-hidden arch shadow-lift sm:max-w-lg lg:ml-auto lg:mr-0">
            <img
              src={heroImage}
              alt="Cliente relaxada de olhos fechados recebendo aplicação de máscara facial em sala acolhedora"
              width={1280}
              height={1600}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] h-full w-full object-cover animate-slow-zoom"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-hero-veil" />
          </div>

          <figure className="absolute -bottom-6 left-0 max-w-[15rem] rounded-2xl border border-border/80 bg-card/95 p-5 shadow-soft backdrop-blur sm:left-4 lg:-left-10 lg:bottom-12">
            <span className="gold-rule" aria-hidden="true" />
            <figcaption className="mt-3 font-display text-lg leading-snug text-foreground">
              Primeiro a escuta. Depois, o cuidado certo para você.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
