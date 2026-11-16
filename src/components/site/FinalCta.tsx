import { site } from "@/content/site";
import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-background pb-20 sm:pb-28">
      <div className="container-serene">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-sand px-6 py-16 text-center shadow-soft sm:px-12 sm:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-10 h-[130%] w-[min(34rem,90%)] -translate-x-1/2 arch border border-gold/40" />
          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow flex items-center justify-center gap-3">
              <span className="gold-rule" aria-hidden="true" />
              Agende sua avaliação
              <span className="gold-rule" aria-hidden="true" />
            </p>
            <h2 id="cta-title" className="mt-6 text-[2.5rem] leading-[1.05] text-foreground sm:text-6xl">
              Comece pelo <em className="italic text-primary">primeiro passo</em>: uma boa conversa.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Agende uma avaliação e descubra, com orientação profissional, qual cuidado faz sentido para você.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <WhatsAppCta size="pill-lg" />
              <p className="text-sm text-muted-foreground">{site.contact.hours}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
