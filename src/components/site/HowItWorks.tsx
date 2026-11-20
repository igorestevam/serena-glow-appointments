import { bookingSteps } from "@/content/care";
import { WhatsAppCta } from "./WhatsAppCta";

export function HowItWorks() {
  return (
    <section id="como-agendar" aria-labelledby="como-agendar-title" className="section-y bg-sage-deep text-sage-deep-foreground">
      <div className="container-serene">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="como-agendar-title" className="section-title text-sage-deep-foreground">
            Como agendar
          </h2>
          <WhatsAppCta variant="ivory" size="cta-lg" className="self-start sm:self-auto" />
        </div>

        <ol className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {bookingSteps.map((step, i) => (
            <li key={step.title} className="border-t border-sage-deep-foreground/20 pt-5 pb-8">
              <span className="text-[0.85rem] text-gold">Passo {i + 1}</span>
              <h3 className="mt-2 text-2xl text-sage-deep-foreground">{step.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-sage-deep-foreground/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
