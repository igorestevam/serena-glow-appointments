import limpeza from "@/assets/tratamento-limpeza.jpg";
import peeling from "@/assets/tratamento-peeling.jpg";
import massagemFacial from "@/assets/tratamento-massagem-facial.jpg";
import corporal from "@/assets/tratamento-corporal.jpg";

export type Treatment = {
  slug: string;
  name: string;
  category: "Facial" | "Corporal";
  description: string;
  details: string[];
  image: string;
  alt: string;
};

export const treatments: Treatment[] = [
  {
    slug: "limpeza-de-pele",
    name: "Limpeza de pele profunda",
    category: "Facial",
    description:
      "Higienização, esfoliação e extração cuidadosa, finalizadas com máscara calmante adequada ao seu tipo de pele.",
    details: ["Indicada após avaliação", "Protocolo adaptado à sua pele"],
    image: limpeza,
    alt: "Profissional realizando limpeza de pele com discos de algodão no rosto de uma cliente",
  },
  {
    slug: "revitalizacao-facial",
    name: "Revitalização facial",
    category: "Facial",
    description:
      "Combinação de ativos e técnicas para cuidar da hidratação e do viço da pele, escolhidos de acordo com a sua avaliação.",
    details: ["Ativos selecionados por profissional", "Orientações de cuidado em casa"],
    image: peeling,
    alt: "Frascos de sérum com conta-gotas dourados sobre pedras de travertino e folhas de sálvia",
  },
  {
    slug: "massagem-facial",
    name: "Massagem facial relaxante",
    category: "Facial",
    description:
      "Manobras suaves com pedras e as mãos para um momento de relaxamento, aliviando a sensação de tensão no rosto.",
    details: ["Sessão tranquila e sem pressa", "Pode complementar outros cuidados"],
    image: massagemFacial,
    alt: "Pedra gua sha de quartzo rosa deslizando pela maçã do rosto de uma mulher",
  },
  {
    slug: "cuidados-corporais",
    name: "Drenagem e cuidados corporais",
    category: "Corporal",
    description:
      "Massagens e técnicas manuais voltadas ao bem-estar do corpo, com indicação definida em consulta.",
    details: ["Técnicas manuais", "Ambiente reservado e acolhedor"],
    image: corporal,
    alt: "Toalhas enroladas em verde-sálvia e bege, pedras de massagem e óleo corporal sobre banco de madeira",
  },
];
