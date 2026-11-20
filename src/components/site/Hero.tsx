import heroImage from "@/assets/hero-massagem-facial.jpg.asset.json";
import { site } from "@/content/site";
import { WhatsAppCta } from "./WhatsAppCta";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="bg-background pt-12 sm:pt-16 lg:pt-20">
      <div className="container-serene">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h1
            id="hero-title"
            className="text-[2.6rem] leading-[1.04] text-foreground sm:text-6xl lg:col-span-7 lg:text-[4.6rem]"
          >
            Estética facial e corporal, sem pressa.
          </h1>

          <div className="lg:col-span-5 lg:pb-2">
            <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
              Atendemos só com hora marcada. Antes de qualquer procedimento, fazemos uma avaliação para entender sua
              pele e o que você procura.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
              <WhatsAppCta size="cta-lg" />
              <a href="#tratamentos" className="link-underline rounded-sm text-[0.95rem] text-foreground">
                Ver tratamentos
              </a>
            </div>
          </div>
        </div>

        <figure className="mt-12 sm:mt-14">
          <img
            src={heroImage.url}
            alt="Profissional fazendo massagem facial com as pontas dos dedos em uma cliente deitada de olhos fechados"
            width={2000}
            height={1333}
            fetchPriority="high"
            decoding="async"
            className="aspect-[4/3] w-full rounded-sm object-cover object-[50%_45%] animate-fade sm:aspect-[16/9] lg:aspect-[21/9]"
          />
          <figcaption className="mt-3 flex flex-col gap-1 text-[0.8rem] text-muted-foreground sm:flex-row sm:justify-between">
            <span>Massagem facial manual</span>
            <span>{site.contact.address}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
