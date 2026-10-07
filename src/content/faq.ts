import type { Localized } from './localize';

export type FaqCategory = 'about' | 'affiliation' | 'events' | 'donations';

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: Localized<string>;
  answer: Localized<string>;
}

/**
 * FAQ content. All answers are grounded strictly in the Order's official
 * institutional information — no tax rules, dates or claims are invented.
 */
export const faqItems: FaqItem[] = [
  {
    id: 'o-que-e',
    category: 'about',
    question: {
      pt: 'O que é a Ordem dos Cavaleiros Templários?',
      en: 'What is the Order of the Knights Templar?',
    },
    answer: {
      pt: 'É uma Ordem Eclesiástica de Cavaleiros Templários pertencente à Ordo Supremus Militaris Templi Hierosolymitani (OSMTH), afiliada e nascida de sua Ordem Templária Mãe, com sede na cidade do Porto, em Portugal. Seus membros recebem o título de Cavaleiro (ou Dama) Templário(a).',
      en: 'It is an Ecclesiastical Order of Knights Templar belonging to the Ordo Supremus Militaris Templi Hierosolymitani (OSMTH), affiliated to and born from its Mother Templar Order, seated in the city of Porto, Portugal. Its members receive the title of Knight (or Dame) Templar.',
    },
  },
  {
    id: 'missao',
    category: 'about',
    question: { pt: 'Qual é a sua missão?', en: 'What is its mission?' },
    answer: {
      pt: 'Reunir homens e mulheres que demonstrem elevada ética e princípios morais, promovendo o estudo, a fraternidade, a caridade e o serviço à sociedade, em benefício da dignidade humana.',
      en: 'To bring together men and women who demonstrate high ethics and moral principles, promoting study, fraternity, charity and service to society, for the benefit of human dignity.',
    },
  },
  {
    id: 'relacao-tradicao',
    category: 'about',
    question: {
      pt: 'Qual é a sua relação com a tradição histórica dos Templários?',
      en: 'What is its relation to the historic Templar tradition?',
    },
    answer: {
      pt: 'A Ordem preserva a tradição e o espírito da secular Ordem dos Cavaleiros Templários. A OSMTH, ordem moderna, foi refundada no início do século XIX sob ideais humanitários e humanísticos, não se apresentando como descendente direta da ordem medieval fundada em 1118 e dissolvida em 1312.',
      en: 'The Order preserves the tradition and spirit of the age-old Order of the Knights Templar. The OSMTH, the modern order, was re-established in the early 19th century under humanitarian and humanistic ideals, and does not present itself as a direct descendant of the medieval order founded in 1118 and dissolved in 1312.',
    },
  },
  {
    id: 'religiosa',
    category: 'about',
    question: { pt: 'A Ordem é religiosa?', en: 'Is the Order religious?' },
    answer: {
      pt: 'A Ordem é uma instituição eclesiástica e ecumênica. As cerimônias de posse — as concessões do título de Cavalaria — são religiosas e geralmente abertas a qualquer um que deseje vê-las. A Ordem respeita todas as religiões e credos.',
      en: 'The Order is an ecclesiastical and ecumenical institution. Its investiture ceremonies — the granting of the title of Knighthood — are religious and generally open to anyone who wishes to see them. The Order respects all religions and creeds.',
    },
  },
  {
    id: 'maconica',
    category: 'about',
    question: { pt: 'A Ordem é uma organização maçônica?', en: 'Is the Order a Masonic organisation?' },
    answer: {
      pt: 'Não. A OSMTH é uma Ordem de Cavaleiros do Templo, não sendo uma Ordem Maçônica nem a ela conectada, a não ser historicamente, como qualquer das organizações templárias dentro da Maçonaria.',
      en: 'No. The OSMTH is an Order of Knights of the Temple and is not a Masonic Order, nor connected to one, except historically, as with any of the Templar organisations within Freemasonry.',
    },
  },
  {
    id: 'quem-pode',
    category: 'affiliation',
    question: { pt: 'Quem pode participar?', en: 'Who may take part?' },
    answer: {
      pt: 'Pessoas de ambos os sexos, imbuídas do propósito de resgatar valores que caíram no esquecimento e de construir um mundo livre e justo. Buscamos pessoas livres e de bons costumes, devotadas à família e corretas em seu procedimento com os demais.',
      en: 'People of both sexes, imbued with the purpose of restoring values that have fallen into oblivion and building a free and just world. We seek free people of good habits, devoted to family and correct in their conduct towards others.',
    },
  },
  {
    id: 'como-afiliacao',
    category: 'affiliation',
    question: { pt: 'Como funciona a afiliação?', en: 'How does affiliation work?' },
    answer: {
      pt: 'O interessado conhece a Ordem, verifica os requisitos, envia seu pedido por meio do formulário e aguarda o contato da equipe, que orientará os próximos passos.',
      en: 'The interested person learns about the Order, checks the requirements, sends their request through the form and awaits contact from the team, who will guide the next steps.',
    },
  },
  {
    id: 'requisitos',
    category: 'affiliation',
    question: { pt: 'Quais são os requisitos?', en: 'What are the requirements?' },
    answer: {
      pt: 'Ser uma pessoa livre e de bons costumes, devotada à família, correta no procedimento com os demais e disposta a buscar o próprio aperfeiçoamento moral e intelectual. É necessária disciplina em relação ao tempo de estudo.',
      en: 'To be a free person of good habits, devoted to family, correct in conduct towards others and willing to seek their own moral and intellectual improvement. Discipline regarding study time is required.',
    },
  },
  {
    id: 'contribuicoes',
    category: 'affiliation',
    question: { pt: 'Há contribuições a pagar?', en: 'Are there contributions to pay?' },
    answer: {
      pt: 'Sim. A Ordem é estritamente uma fraternidade e há uma taxa de registro individual e uma contribuição mínima mensal, destinadas a um fundo geral de operações, a atividades humanitárias e beneficentes e às pesquisas da Ordem. Não há outras cotas obrigatórias.',
      en: 'Yes. The Order is strictly a fraternity and there is an individual registration fee and a minimum monthly contribution, directed to a general operating fund, to humanitarian and charitable activities and to the Order’s research. There are no other mandatory charges.',
    },
  },
  {
    id: 'eventos-como',
    category: 'events',
    question: { pt: 'Como participar dos eventos?', en: 'How can I take part in events?' },
    answer: {
      pt: 'A inscrição e a agenda completa são mantidas em nossa plataforma de eventos. A partir dela você pode conhecer e se inscrever nos eventos abertos.',
      en: 'Registration and the full agenda are kept on our events platform. There you can find out about and register for open events.',
    },
  },
  {
    id: 'eventos-agenda',
    category: 'events',
    question: { pt: 'Onde encontro a agenda?', en: 'Where can I find the agenda?' },
    answer: {
      pt: 'Você encontra os próximos eventos na página de Eventos e a agenda completa em nossa plataforma externa de eventos.',
      en: 'You can find upcoming events on the Events page and the full agenda on our external events platform.',
    },
  },
  {
    id: 'doacoes-como',
    category: 'donations',
    question: { pt: 'Como posso doar?', en: 'How can I donate?' },
    answer: {
      pt: 'Entre em contato com a Ordem para receber as orientações e os dados necessários para realizar sua doação de forma segura.',
      en: 'Contact the Order to receive the guidance and details needed to make your donation securely.',
    },
  },
  {
    id: 'doacoes-uso',
    category: 'donations',
    question: { pt: 'Como os recursos são utilizados?', en: 'How are the funds used?' },
    answer: {
      pt: 'Os recursos são destinados a um fundo geral de operações da Ordem, às suas atividades humanitárias e beneficentes e às suas pesquisas e investigações.',
      en: 'The funds are directed to a general operating fund of the Order, to its humanitarian and charitable activities and to its research and investigation.',
    },
  },
  {
    id: 'doacoes-irpf',
    category: 'donations',
    question: { pt: 'Como funciona a questão do IRPF?', en: 'How does income tax deduction work?' },
    answer: {
      pt: 'As informações sobre eventual dedução no Imposto de Renda devem observar exclusivamente as regras e as informações oficiais fornecidas pela Ordem, com base em orientação jurídica e contábil própria. A Ordem não presta consultoria tributária.',
      en: 'Information about any income tax deduction must follow exclusively the rules and official information provided by the Order, based on its own legal and accounting advice. The Order does not provide tax advice.',
    },
  },
];

export function faqByCategory(category: FaqCategory): FaqItem[] {
  return faqItems.filter((i) => i.category === category);
}

export const faqCategories: FaqCategory[] = ['about', 'affiliation', 'events', 'donations'];