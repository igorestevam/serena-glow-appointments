import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * Serena Estética is a fictional clinic (ClickFocus portfolio demo).
 * Contact data below are placeholders — replace before any real use.
 */
export const site = {
  name: "Serena Estética",
  tagline: "Estética facial e corporal",
  agency: { name: "ClickFocus", url: "#" },
  contact: {
    whatsappDisplay: "(00) 00000-0000",
    whatsappNumber: "5500000000000",
    email: "contato@seudominio.com.br",
    address: "Rua Exemplo, 000 · Bairro, Cidade/UF",
    hours: "Seg. a sex., 9h–19h · Sáb., 9h–13h",
    instagram: "@seuperfil",
  },
} as const;

export const whatsappMessages = {
  evaluation: "Olá! Gostaria de agendar uma avaliação na Serena Estética.",
  treatment: (name: string) =>
    `Olá! Gostaria de saber mais sobre ${name} e agendar uma avaliação na Serena Estética.`,
} as const;

export const whatsappLink = (message: string = whatsappMessages.evaluation) =>
  buildWhatsAppLink(site.contact.whatsappNumber, message);

export const navItems = [
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#como-agendar", label: "Como agendar" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;
