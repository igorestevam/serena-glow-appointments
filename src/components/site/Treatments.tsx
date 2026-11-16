import { ArrowUpRight } from "lucide-react";
import { treatments, type Treatment } from "@/content/treatments";
import { whatsappLink, whatsappMessages } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

function TreatmentCard({ treatment, index }: { treatment: Treatment; index: number }) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative overflow-hidden rounded-2xl bg-sand">
        <img
          src={treatment.image}
          alt={treatment.alt}
          width={960}
          height={1200}
          loading="lazy"
          decoding="async"
          className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] ease-serene group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sage-deep backdrop-blur">
          {treatment.category}
        </span>
        <span aria-hidden="true" className="absolute right-4 top-4 font-display text-lg italic text-ivory">
          0{index + 1}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <h3 className="text-[1.75rem] leading-tight text-foreground">{treatment.name}</h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{treatment.description}</p>
        <ul className="mt-4 space-y-1.5">
          {treatment.details.map((d) => (
            <li key={d} className="flex items-center gap-2.5 text-sm text-foreground/80">
              <span aria-hidden="true" className="size-1 rounded-full bg-gold" />
              {d}
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink(whatsappMessages.treatment(treatment.name.toLowerCase()))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm border-b border-primary/30 pb-1 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3 hover:border-primary"
        >
          Consultar pelo WhatsApp
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">sobre {treatment.name} (abre em nova aba)</span>
        </a>
      </div>
    </article>
  );
}

export function Treatments() {
  return (
    <section id="tratamentos" aria-labelledby="tratamentos-title" className="section-y bg-background">
      <div className="container-serene">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="tratamentos-title"
            eyebrow="Tratamentos"
            title={
              <>
                Cuidados para o rosto <em className="italic text-primary">e para o corpo</em>
              </>
            }
            description="Cada tratamento é indicado somente após a avaliação, considerando a sua pele, o seu histórico e o que é importante para você."
          />
        </div>

        <ul
          className="-mx-5 mt-14 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-14 md:overflow-visible md:px-0 lg:grid-cols-4 lg:gap-x-7"
          aria-label="Lista de tratamentos"
        >
          {treatments.map((t, i) => (
            <li key={t.slug} className="w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto">
              <Reveal delay={i * 110} className="h-full">
                <TreatmentCard treatment={t} index={i} />
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-muted-foreground md:hidden" aria-hidden="true">
          Deslize para ver mais →
        </p>
      </div>
    </section>
  );
}
