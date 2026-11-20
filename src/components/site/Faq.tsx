import { Plus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { faqs } from "@/content/faq";
import { whatsappLink } from "@/content/site";

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="section-y bg-background">
      <div className="container-serene grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 id="duvidas-title" className="section-title text-foreground">
            Dúvidas frequentes
          </h2>
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-muted-foreground">
            Não achou sua pergunta?{" "}
            <a
              href={whatsappLink("Olá! Tenho uma dúvida sobre os tratamentos da Serena Estética.")}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline rounded-sm text-foreground"
            >
              Mande pelo WhatsApp
            </a>
            .
          </p>
        </div>

        <Accordion type="single" collapsible className="border-t border-foreground/15 lg:col-span-8">
          {faqs.map((item, i) => (
            <AccordionItem key={item.question} value={`faq-${i}`} className="border-border">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="group flex flex-1 cursor-pointer items-center justify-between gap-6 rounded-sm py-5 text-left">
                  <span className="font-sans text-[1.08rem] font-medium text-foreground transition-colors group-hover:text-primary">
                    {item.question}
                  </span>
                  <Plus
                    aria-hidden="true"
                    className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-45"
                    strokeWidth={1.5}
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="max-w-2xl pb-6 pr-10 text-[0.98rem] leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
