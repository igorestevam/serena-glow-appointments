import preparo from "@/assets/preparo-sala.jpg.asset.json";
import { careIntro, careItems } from "@/content/care";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Benefits() {
  return (
    <section id="atendimento" aria-labelledby="atendimento-title" className="section-y border-y border-border bg-ivory">
      <div className="container-serene grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal as="figure" className="lg:col-span-5">
          <img
            src={preparo.url}
            alt="Profissional de jaleco branco estendendo papel descartável sobre a maca, com prateleira de produtos ao fundo"
            width={1200}
            height={1762}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-sm object-cover sm:aspect-[3/2] lg:aspect-[4/5]"
          />
          <figcaption className="mt-3 text-[0.8rem] text-muted-foreground">
            A maca recebe papel novo antes de cada atendimento.
          </figcaption>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-2">
          <SectionHeading id="atendimento-title" title="Como é o atendimento" description={careIntro} />

          <dl className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {careItems.map((item) => (
              <div key={item.title} className="border-t border-foreground/15 py-6">
                <dt className="text-[1.05rem] font-medium text-foreground">{item.title}</dt>
                <dd className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
