import avaliacao from "@/assets/avaliacao.jpg";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";

const steps = [
  {
    title: "Chame no WhatsApp",
    text: "Toque em “Agendar avaliação”. A conversa já abre com uma mensagem pronta para você enviar.",
  },
  {
    title: "Escolha o melhor horário",
    text: "Nossa equipe apresenta os horários disponíveis e tira as primeiras dúvidas.",
  },
  {
    title: "Avaliação presencial",
    text: "Conversamos com calma e analisamos sua pele ou região de interesse, sem compromisso de fechar tratamento.",
  },
  {
    title: "Seu plano de cuidado",
    text: "Você recebe a indicação do tratamento, o número estimado de sessões e todas as orientações.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="section-y relative overflow-hidden bg-sage-deep text-sage-deep-foreground"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-32 size-[28rem] rounded-full border border-gold/20" />
      <div className="container-serene relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading
            id="como-funciona-title"
            tone="dark"
            eyebrow="Como funciona"
            title={
              <>
                Agendar é simples. <em className="italic text-gold">Em quatro passos.</em>
              </>
            }
            description="Do primeiro contato até o início do tratamento, você sabe exatamente o que acontece."
          />

          <ol className="mt-14 space-y-0">
            {steps.map((step, i) => (
              <li key={step.title}>
                <Reveal
                  delay={i * 100}
                  className="group grid grid-cols-[3.5rem_1fr] gap-5 border-t border-sage-deep-foreground/15 py-7 sm:grid-cols-[5rem_1fr]"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-4xl italic leading-none text-gold transition-transform duration-500 ease-serene group-hover:translate-x-1 sm:text-5xl"
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl text-sage-deep-foreground sm:text-[1.75rem]">
                      <span className="sr-only">Passo {i + 1}: </span>
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-[0.95rem] leading-relaxed text-sage-deep-foreground/75">{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal className="mt-10">
            <WhatsAppCta variant="ivory" size="pill-lg" />
          </Reveal>
        </div>

        <div className="hidden lg:col-span-5 lg:block">
          <Reveal delay={200} className="sticky top-28">
            <figure className="overflow-hidden arch">
              <img
                src={avaliacao}
                alt="Profissional conversando com uma cliente durante a avaliação, sentadas à mesa"
                width={1200}
                height={1408}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
