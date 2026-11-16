import { ArrowUpRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

type WhatsAppCtaProps = {
  label?: string;
  message?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  icon?: "whatsapp" | "arrow" | "none";
};

/** Primary conversion button — opens WhatsApp with a pre-filled message. */
export function WhatsAppCta({
  label = "Agendar avaliação",
  message,
  variant = "serene",
  size = "pill",
  className,
  icon = "whatsapp",
}: WhatsAppCtaProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} pelo WhatsApp (abre em nova aba)`}
      >
        {icon === "whatsapp" ? <WhatsAppIcon className="!size-[1.1rem]" /> : null}
        <span>{label}</span>
        {icon === "arrow" ? <ArrowUpRight /> : null}
      </a>
    </Button>
  );
}
