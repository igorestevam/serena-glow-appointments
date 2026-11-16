import { Ear, Leaf, ShieldCheck, Sparkles, MessageCircleHeart, Clock } from "lucide-react";
import interior from "@/assets/clinica-interior.jpg";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const benefits = [
  {
    icon: Ear,
    title: "Escuta antes de tudo",
    text: "A primeira consulta é dedicada a entender seus objetivos, sua rotina e suas expectativas.",
  },
  {
    icon: Sparkles,
    title: "Protocolos personalizados",
    text: "Nada de pacotes prontos: o plano de cuidado é definido para você, etapa por etapa.",
  },
  {
    icon: ShieldCheck,
    title: "Higiene e segurança",
    text: "Materiais descartáveis quando aplicável e rotinas de higienização em cada atendimento.",
  },
  {
    icon: MessageCircleHeart,
    title: "Transparência",
    text: "Você sabe o que será feito, por quê, quanto tempo leva e quais cuidados ter depois.",
  },
  {
    icon: Leaf,
    title: "Ambiente acolhedor",
    text: "Salas reservadas, luz suave e silêncio — um espaço pensado para você desacelerar.",
  },
  {
    icon: Clock,
    title: "Horários sem pressa",
    text: "Agenda organizada para que cada sessão aconteça com calma, sem atrasos em sequência.",
  },
];

export function Benefits() {
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-title" className="section-y bg-ivory">
      <div className="container-serene grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="diferenciais-title"
              eyebrow="Diferenciais"
              title={
                <>
                  Um espaço para <em className="italic text-primary">desacelerar</em> e ser bem cuidada
                </>
              }
              description="Acreditamos que estética de qualidade começa com respeito: ao seu tempo, à sua pele e às suas escolhas."
            />
            <Reveal delay={150} className="mt-10">
              <figure className="overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={interior}
                  alt="Sala de atendimento com maca de linho branco, poltrona verde-sálvia e detalhes dourados"
                  width={1440}
                  height={1088}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:col-span-7 lg:self-start">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="bg-ivory">
              <Reveal delay={(i % 2) * 120} className="group h-full p-7 transition-colors duration-500 hover:bg-card sm:p-9">
                <span className="inline-flex size-12 items-center justify-center rounded-full border border-gold/50 text-primary transition-colors duration-500 group-hover:bg-sage-soft">
                  <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl text-foreground">{title}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground">{text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
