# Serena Estética — Landing Page

Landing page demonstrativa de uma clínica fictícia de estética, desenvolvida para o portfólio da **ClickFocus**. O projeto combina uma identidade visual acolhedora com uma navegação intuitiva e chamadas para ação voltadas ao contato inicial via WhatsApp.

> **Aviso:** a Serena Estética é uma marca fictícia. Os dados de contato e as opções de agendamento são demonstrativos, e não representam um serviço real.

## Sobre o projeto

A página apresenta tratamentos faciais e corporais, diferenciais da clínica, informações sobre o atendimento e respostas às principais dúvidas de visitantes. A direção visual utiliza tons de bege e verde-sálvia, elementos minimalistas e imagens para transmitir uma experiência sofisticada e acolhedora.

### Objetivos

- Apresentar os serviços com clareza e boa hierarquia visual.
- Facilitar a navegação em dispositivos móveis e computadores.
- Direcionar visitantes interessados aos pontos de contato.
- Demonstrar princípios de usabilidade, acessibilidade e design responsivo.

## Funcionalidades

- **Layout responsivo:** interface adaptada a diferentes tamanhos de tela.
- **Catálogo de tratamentos:** quatro serviços faciais e corporais com imagens e descrições.
- **Chamadas para ação (CTAs):** botões para iniciar uma conversa sobre avaliação ou tratamento.
- **Links demonstrativos de WhatsApp:** mensagens pré-preenchidas de acordo com a ação escolhida.
- **Menu de navegação:** acesso às principais seções da página.
- **Perguntas frequentes:** respostas em formato interativo.
- **Componentização:** separação das seções e do conteúdo para facilitar a manutenção.

## Tecnologias

| Tecnologia | Aplicação |
| --- | --- |
| React 19 | Construção da interface |
| TypeScript | Desenvolvimento tipado |
| Tailwind CSS 4 | Estilização e responsividade |
| TanStack Router / Start | Estrutura e roteamento da aplicação |
| Vite | Ambiente de desenvolvimento e build |
| Radix UI | Componentes de interface acessíveis |
| Lucide React | Ícones |
| Vitest | Ferramenta de testes |

O projeto foi criado inicialmente com auxílio do [Lovable](https://lovable.dev/), plataforma de desenvolvimento assistido por inteligência artificial.

## Executando localmente

**Pré-requisitos:** Node.js e npm instalados.

1. Clone este repositório:

   ```bash
   git clone https://github.com/igorestevam/serena-glow-appointments.git
   ```

2. Acesse a pasta:

   ```bash
   cd serena-glow-appointments
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o ambiente de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço local informado no terminal.

### Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build do projeto |
| `npm run preview` | Executa a prévia local do build |
| `npm run lint` | Executa o ESLint |
| `npm run test` | Executa os testes com Vitest |
| `npm run format` | Formata os arquivos com Prettier |

## Organização e personalização

Os conteúdos da página estão concentrados nos arquivos:

- `src/content/site.ts` — nome da clínica, contatos, horários, navegação e mensagens de WhatsApp.
- `src/content/treatments.ts` — dados, descrições e imagens dos tratamentos.
- `src/content/faq.ts` — perguntas e respostas frequentes.
- `src/lib/whatsapp.ts` — construção dos links de WhatsApp com mensagem pré-preenchida.

**Antes de usar em um projeto real:** substitua todos os dados fictícios, verifique as imagens e textos, configure um número válido de WhatsApp e teste os links e o comportamento da página.

## Demonstração

[Visualizar a landing page na Vercel](https://serena-glow-appointments.vercel.app/)

> **Aviso:** demonstração técnica. Antes de divulgar comercialmente, verifique a proteção de acesso e utilize uma hospedagem cujo plano permita uso comercial.

## Sobre a ClickFocus

**ClickFocus — A atenção do seu cliente onde realmente importa.**

A ClickFocus é uma agência digital focada em landing pages e experiências web que unem design, tecnologia e estratégia para destacar negócios no ambiente online.

---

**Projeto demonstrativo desenvolvido para o portfólio da ClickFocus.**
