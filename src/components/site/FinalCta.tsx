import sala from "@/assets/sala-atendimento.jpg.asset.json";
import { site, whatsappLink } from "@/content/site";
import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";

export function FinalCta() {
  const details = [
    {
      term: "WhatsApp",
      value: (
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="link-underline rounded-sm">
          {site.contact.whatsappDisplay}
        </a>
      ),
    },
    { term: "Endereço", value: site.contact.address },
    { term: "Horário", value: site.contact.hours },
  ];

  return (
    <section id="agendar" aria-labelledby="cta-title" className="bg-sand">
      <div className="container-serene grid gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-24">
        <Reveal as="figure" className="lg:col-span-5">
          <img
            src={sala.url}
            alt="Sala de atendimento com maca forrada em tom areia, pia de cerâmica e janela ampla"
            width={1200}
            height={1800}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-sm object-cover lg:aspect-[4/5]"
          />
        </Reveal>

        <div className="lg:col-span-7">
          <h2 id="cta-title" className="section-title text-foreground">
            Agende sua avaliação
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
            Mande uma mensagem dizendo o dia e o período que prefere. A avaliação é sempre o primeiro passo, seja qual
            for o tratamento.
          </p>

          <dl className="mt-10 grid gap-6 border-t border-foreground/15 pt-8 sm:grid-cols-3">
            {details.map((d) => (
              <div key={d.term}>
                <dt className="text-[0.82rem] text-gold-ink">{d.term}</dt>
                <dd className="mt-1.5 text-[0.95rem] leading-snug text-foreground">{d.value}</dd>
              </div>
            ))}
          </dl>

          <WhatsAppCta size="cta-lg" className="mt-10" />
        </div>
      </div>
    </section>
  );
}
