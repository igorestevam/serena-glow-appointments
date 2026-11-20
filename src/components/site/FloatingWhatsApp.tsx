import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Mobile-only floating shortcut, shown after the hero scrolls away. */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp (abre em nova aba)"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "fixed bottom-5 right-5 z-30 inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-all duration-500 ease-serene hover:bg-primary-hover active:scale-95 sm:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <WhatsAppIcon className="size-6" />
    </a>
  );
}
