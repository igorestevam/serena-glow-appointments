import { treatments, type Treatment } from "@/content/treatments";
import { whatsappLink, whatsappMessages } from "@/content/site";
import { Reveal } from "./Reveal";

function TreatmentRow({ treatment }: { treatment: Treatment }) {
  return (
    <article className="grid gap-5 sm:grid-cols-[13rem_1fr] sm:gap-8 lg:grid-cols-12 lg:gap-10">
      <img
        src={treatment.image}
        alt={treatment.alt}
        width={1000}
        height={1500}
        loading="lazy"
        decoding="async"
        className="aspect-[3/2] w-full rounded-sm bg-sand object-cover sm:aspect-[4/5] lg:col-span-3 lg:aspect-[4/3]"
      />
      <div className="grid gap-4 lg:col-span-9 lg:grid-cols-9 lg:gap-10">
        <div className="lg:col-span-4">
          <p className="text-[0.82rem] text-gold-ink">{treatment.category}</p>
          <h3 className="mt-1 text-[1.75rem] leading-tight text-foreground sm:text-3xl">{treatment.name}</h3>
        </div>
        <div className="lg:col-span-5">
          <p className="text-[0.98rem] leading-relaxed text-muted-foreground">{treatment.description}</p>
          <a
            href={whatsappLink(whatsappMessages.treatment(treatment.name.toLowerCase()))}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-4 inline-block rounded-sm text-[0.92rem] text-primary"
          >
            Perguntar sobre este tratamento
            <span className="sr-only"> ({treatment.name}, abre o WhatsApp em nova aba)</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function Treatments() {
  return (
    <section id="tratamentos" aria-labelledby="tratamentos-title" className="section-y bg-background">
      <div className="container-serene">
        <div className="flex flex-col gap-4 border-b border-foreground/15 pb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <h2 id="tratamentos-title" className="section-title text-foreground">
            Tratamentos
          </h2>
          <p className="max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
            Estes são os cuidados que mais fazemos. Qual deles faz sentido para você, a gente vê na avaliação.
          </p>
        </div>

        <ul aria-label="Lista de tratamentos">
          {treatments.map((t) => (
            <li key={t.slug} className="border-b border-border py-8 sm:py-10">
              <Reveal>
                <TreatmentRow treatment={t} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
