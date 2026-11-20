export type CareItem = { title: string; text: string };

export const careIntro =
  "Atendemos uma pessoa por vez, com hora marcada. Na primeira visita não fazemos procedimento: conversamos, olhamos sua pele e só depois sugerimos um caminho.";

export const careItems: CareItem[] = [
  {
    title: "Avaliação antes de tudo",
    text: "Entendemos seus objetivos, seu histórico e sua rotina. Se um procedimento não for indicado para você, dizemos isso com clareza.",
  },
  {
    title: "Plano feito para você",
    text: "Não trabalhamos com pacotes fechados. O número de sessões e os cuidados em casa são combinados depois da avaliação.",
  },
  {
    title: "Higiene em cada atendimento",
    text: "Usamos material descartável sempre que possível. Maca, bancada e instrumentos são higienizados entre um atendimento e outro.",
  },
  {
    title: "Agenda com intervalo",
    text: "Deixamos um tempo livre entre os horários, para você não esperar e a sessão não precisar ser corrida.",
  },
];

export const bookingSteps: CareItem[] = [
  {
    title: "Mande uma mensagem",
    text: "O botão abre o WhatsApp com um texto pronto. É só enviar.",
  },
  {
    title: "Combine o horário",
    text: "Respondemos com os horários livres e tiramos as primeiras dúvidas por lá mesmo.",
  },
  {
    title: "Venha para a avaliação",
    text: "Conversamos e avaliamos a pele ou a região que você quer tratar. Você não precisa fechar nada nesse dia.",
  },
  {
    title: "Receba a indicação",
    text: "Você sai sabendo qual tratamento faz sentido, quantas sessões estão previstas e o que fazer em casa.",
  },
];
