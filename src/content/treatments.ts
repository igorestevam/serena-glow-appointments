import limpeza from "@/assets/tratamento-limpeza.jpg.asset.json";
import revitalizacao from "@/assets/tratamento-revitalizacao.jpg.asset.json";
import massagemFacial from "@/assets/tratamento-massagem-facial.jpg.asset.json";
import corporal from "@/assets/tratamento-corporal.jpg.asset.json";

export type Treatment = {
  slug: string;
  name: string;
  category: "Facial" | "Corporal";
  description: string;
  image: string;
  alt: string;
};

export const treatments: Treatment[] = [
  {
    slug: "limpeza-de-pele",
    name: "Limpeza de pele",
    category: "Facial",
    description:
      "Higienização, esfoliação, extração e máscara calmante no final. A frequência ideal muda de pele para pele e é combinada com você.",
    image: limpeza.url,
    alt: "Profissional de luvas aplicando máscara clara no rosto de uma cliente deitada na maca",
  },
  {
    slug: "revitalizacao-facial",
    name: "Revitalização facial",
    category: "Facial",
    description:
      "Sessão voltada para hidratação e viço da pele, com ativos escolhidos a partir do que vimos na avaliação.",
    image: revitalizacao.url,
    alt: "Mulher aplicando uma gota de sérum no rosto com um conta-gotas de vidro",
  },
  {
    slug: "massagem-facial",
    name: "Massagem facial",
    category: "Facial",
    description:
      "Massagem manual no rosto, no couro cabeludo e no pescoço, para um momento de pausa. Pode ser feita sozinha ou junto de outro cuidado.",
    image: massagemFacial.url,
    alt: "Cliente de olhos fechados recebendo massagem nas têmporas, deitada com a cabeça apoiada em uma toalha",
  },
  {
    slug: "cuidados-corporais",
    name: "Drenagem e cuidados corporais",
    category: "Corporal",
    description:
      "Drenagem e massagens manuais para o corpo. A técnica e o número de sessões são definidos na consulta.",
    image: corporal.url,
    alt: "Mãos de profissional fazendo massagem sobre a perna de uma cliente coberta por toalha branca",
  },
];
