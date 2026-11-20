import { Plus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { faqs } from "@/content/faq";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="section-y bg-background">
      <div className="container-serene grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="duvidas-title"
              eyebrow="Perguntas frequentes"
              title={
                <>
                  Dúvidas <em className="italic text-primary">comuns</em>
                </>
              }
              description="Não encontrou o que procurava? Envie sua pergunta pelo WhatsApp — respondemos com atenção."
            />
          </div>
        </div>

        <Reveal className="lg:col-span-7">
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((item, i) => (
              <AccordionItem key={item.question} value={`faq-${i}`} className="border-border">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="group flex flex-1 cursor-pointer items-center justify-between gap-6 rounded-sm py-6 text-left transition-colors hover:text-primary">
                    <span className="font-display text-[1.35rem] leading-snug text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-foreground/15 text-primary transition-all duration-500 ease-serene group-hover:border-primary group-data-[state=open]:rotate-45 group-data-[state=open]:border-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground"
                    >
                      <Plus className="size-4" />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="max-w-xl pb-7 pr-14 text-[0.98rem] leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
