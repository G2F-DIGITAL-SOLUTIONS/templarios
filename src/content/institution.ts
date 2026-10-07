import type { Localized } from './localize';

/**
 * Editorial content for the institutional pages.
 *
 * Content is grounded in the Order's current institutional material
 * (templarios.org.br) and reorganised — not invented. Where the Order has not
 * yet confirmed a fact (e.g. specific historic dates beyond the ones already
 * published, tax rules, social profiles), the copy deliberately avoids claims.
 */

export interface Section {
  id: string;
  heading: Localized<string>;
  body: Localized<string[]>;
}

/** "Quem Somos" — full institutional text. */
export const aboutSections: Section[] = [
  {
    id: 'identidade',
    heading: {
      pt: 'Uma Ordem Eclesiástica de Cavaleiros Templários',
      en: 'An Ecclesiastical Order of Knights Templar',
    },
    body: {
      pt: [
        'A Ordem dos Cavaleiros Templários pertence à Ordo Supremus Militaris Templi Hierosolymitani (OSMTH), uma verdadeira Ordem Eclesiástica de Cavaleiros Templários, afiliada e nascida de sua Ordem Templária Mãe, com sede na cidade do Porto, em Portugal.',
        'A Ordem é identificada pelo uso da mesma cruz de “barra dupla”, bem como pelo antigo lema da Ordem. Seus membros recebem o título de Cavaleiro (ou Dama) Templário(a) da maior autoridade templária mundial.',
      ],
      en: [
        'The Order of the Knights Templar belongs to the Ordo Supremus Militaris Templi Hierosolymitani (OSMTH), a true Ecclesiastical Order of Knights Templar, affiliated to and born from its Mother Templar Order, seated in the city of Porto, Portugal.',
        'The Order is identified by the same double-bar cross and by the ancient motto of the Order. Its members receive the title of Knight (or Dame) Templar from the highest Templar authority in the world.',
      ],
    },
  },
  {
    id: 'nao-maconica',
    heading: {
      pt: 'Uma Ordem de Cavaleiros, não uma Ordem Maçônica',
      en: 'An Order of Knights, not a Masonic Order',
    },
    body: {
      pt: [
        'A OSMTH é uma Ordem de Cavaleiros do Templo, não sendo, portanto, uma Ordem Maçônica, nem a ela conectada, a não ser historicamente, como qualquer das organizações templárias dentro da Maçonaria.',
        'Nem a OSMTH nem sua Ordem Mãe, na Europa, afirmam estar de posse de quaisquer segredos enigmáticos ou poderes de qualquer tipo. Não há absolutamente nada oculto sobre a OSMTH.',
      ],
      en: [
        'The OSMTH is an Order of Knights of the Temple and is therefore not a Masonic Order, nor connected to one, except historically, as with any of the Templar organisations within Freemasonry.',
        'Neither the OSMTH nor its Mother Order in Europe claims to possess any enigmatic secrets or powers of any kind. There is absolutely nothing hidden about the OSMTH.',
      ],
    },
  },
  {
    id: 'cerimonias',
    heading: { pt: 'Cerimônias abertas', en: 'Open ceremonies' },
    body: {
      pt: [
        'As cerimônias de posse da Ordem — as concessões do título de Cavalaria — são religiosas, geralmente abertas a qualquer um que deseje vê-las. As cerimônias são, em grande parte, baseadas naquelas dos Templários antigos.',
      ],
      en: [
        'The Order’s investiture ceremonies — the granting of the title of Knighthood — are religious and generally open to anyone who wishes to see them. The ceremonies are largely based on those of the ancient Templars.',
      ],
    },
  },
  {
    id: 'fraternidade',
    heading: { pt: 'Fraternidade e ajuda mútua', en: 'Fraternity and mutual aid' },
    body: {
      pt: [
        'Os membros da Ordem Templária devem priorizar o seu desenvolvimento e cultura pessoal através da experiência acumulada de seus estudos. A Ordem respeita todas as religiões e credos e apoia entidades filantrópicas, de assistência aos necessitados e de âmbito cultural.',
        'Para atender aos seus objetivos, a Ordem distribui monografias, boletins e materiais de estudo, mantendo um eficiente programa de ajuda mútua para desenvolver e melhorar o padrão de vida dos seus membros.',
      ],
      en: [
        'Members of the Templar Order should prioritise their own development and personal culture through the accumulated experience of their studies. The Order respects all religions and creeds and supports philanthropic entities, assistance to those in need and cultural bodies.',
        'To meet its objectives, the Order distributes monographs, bulletins and study materials, maintaining an effective programme of mutual aid to develop and improve the standard of living of its members.',
      ],
    },
  },
];

/** "História" — the tradition, reorganised and summarised. */
export const historySections: Section[] = [
  {
    id: 'origens',
    heading: { pt: 'As origens da tradição', en: 'The origins of the tradition' },
    body: {
      pt: [
        'A Ordem dos Pobres Cavaleiros de Cristo e do Templo de Salomão — a “Ordem dos Templários” — foi fundada em Jerusalém pelo francês Hughes de Payens. É geralmente aceito entre os estudiosos de história como tendo sido formalmente fundada em 1118, período da segunda das grandes Cruzadas Cristãs na Terra Santa.',
        'A Ordem cresceu a partir de um pequeno grupo original de nove cavaleiros até se tornar a primeira e maior das principais Ordens Militares de soldados-monges da antiga Igreja Cristã de Roma.',
      ],
      en: [
        'The Order of the Poor Knights of Christ and of the Temple of Solomon — the “Order of the Templars” — was founded in Jerusalem by the Frenchman Hughes de Payens. It is generally accepted among historians as having been formally founded in 1118, during the second of the great Christian Crusades in the Holy Land.',
        'The Order grew from an original small group of nine knights into the first and largest of the great Military Orders of soldier-monks of the ancient Christian Church of Rome.',
      ],
    },
  },
  {
    id: 'cavalaria',
    heading: { pt: 'O surgimento das Ordens de Cavalaria', en: 'The rise of the Orders of Knighthood' },
    body: {
      pt: [
        'Homens habilidosos em combate e a serviço de homens nobres eram agraciados com elevado reconhecimento por seus serviços. Com freqüência recebiam títulos de nobreza, bem como terras. Com o tempo, aqueles que alcançassem níveis elevados na hierarquia passaram a ser conhecidos como estando permanentemente “Sob Ordens do Rei” — de onde surgiu o termo “Ordem” de Cavalaria.',
        'Estes cavaleiros eram extremamente leais a seus mestres, valiosos e confiáveis, num tempo em que a lealdade era altamente prezada. Como a palavra de um homem era o seu laço de obrigação, os cavaleiros faziam um “Juramento de lealdade” ao seu Rei ou Mestre.',
      ],
      en: [
        'Men skilled in combat and in the service of noble lords were granted high recognition for their service, often receiving titles of nobility as well as land. Over time, those who reached high levels in the hierarchy came to be known as permanently “Under King’s Orders” — from which the term Order of Knighthood arose.',
        'These knights were extremely loyal to their masters, valuable and trustworthy, in a time when loyalty was highly prized. As a man’s word was his bond of obligation, knights made an “Oath of loyalty” to their King or Master.',
      ],
    },
  },
  {
    id: 'legado',
    heading: { pt: 'Um legado que atravessa os séculos', en: 'A legacy across the centuries' },
    body: {
      pt: [
        'Nos 200 anos das Cruzadas, a Ordem dos Templários teve um impacto maior sobre a história e o desenvolvimento da civilização do que qualquer outra organização. Muitos conteúdos sobre os templários foram altamente romantizados por historiadores e escritores ao longo dos séculos.',
        'A Ordem moderna — a OSMTH — foi refundada no início do século XIX, já sob os ideais humanitários e humanísticos do Iluminismo. Para seus fundadores, os conceitos de “Templário” e “Templarismo” tornaram-se sinônimos de conduta de cavalaria: ajuda, proteção, decência e dedicação.',
      ],
      en: [
        'Over the 200 years of the Crusades, the Order of the Templars had a greater impact on the history and development of civilisation than any other organisation. Much of the writing about the Templars has been highly romanticised by historians and writers over the centuries.',
        'The modern Order — the OSMTH — was re-established in the early 19th century, under the humanitarian and humanistic ideals of the Enlightenment. For its founders, the concepts of “Templar” and “Templarism” became synonymous with knightly conduct: aid, protection, decency and dedication.',
      ],
    },
  },
  {
    id: 'atualidade',
    heading: { pt: 'A Ordem hoje', en: 'The Order today' },
    body: {
      pt: [
        'Hoje a Ordem é uma instituição secular e ecumênica, destinada a reunir cristãos e homens civis (Cavaleiros) e mulheres (Damas) que demonstrem possuir elevada ética e princípios morais e que desejem seguir as tradições do Templo.',
        'É uma fraternidade que preserva a tradição templária e a coloca a serviço da sociedade contemporânea, por meio do estudo, da fraternidade e da caridade.',
      ],
      en: [
        'Today the Order is a secular and ecumenical institution, intended to bring together Christians and lay men (Knights) and women (Dames) who demonstrate high ethics and moral principles and who wish to follow the traditions of the Temple.',
        'It is a fraternity that preserves the Templar tradition and places it at the service of contemporary society, through study, fraternity and charity.',
      ],
    },
  },
];

/** "Propósitos" — mission and purposes. */
export const purposeSections: Section[] = [
  {
    id: 'nobreza',
    heading: { pt: 'Revestidos de nobreza e virtude', en: 'Clothed in nobility and virtue' },
    body: {
      pt: [
        'Os propósitos da Ordem dos Cavaleiros Templários são revestidos de nobreza com a capa branca da virtude. Busca-se ter uma sociedade de Cavaleiros Templários no âmbito da comunidade brasileira, com o mesmo padrão de nobreza e com o espírito tradicional e universal da secular Ordem dos Cavaleiros Templários.',
      ],
      en: [
        'The purposes of the Order of the Knights Templar are clothed in nobility with the white cloak of virtue. The aim is a society of Knights Templar within the Brazilian community, with the same standard of nobility and the traditional and universal spirit of the age-old Order of the Knights Templar.',
      ],
    },
  },
  {
    id: 'conhecimento',
    heading: { pt: 'O estudo como fundamento', en: 'Study as a foundation' },
    body: {
      pt: [
        'O estudo será priorizado, buscando a excelência de padrão e de conteúdo educacional e cultural como bases principais da satisfação humana. Nada se forma e se mantém, a não ser pelo conhecimento.',
        'A Ordem integra, na educação Templária e na aprendizagem ao longo da vida, os conhecimentos, valores e habilidades necessários para um modo de vida dentro do espírito Templário.',
      ],
      en: [
        'Study is prioritised, seeking excellence of standard and of educational and cultural content as the main foundations of human fulfilment. Nothing is formed or sustained except through knowledge.',
        'The Order integrates, in Templar education and lifelong learning, the knowledge, values and skills needed for a way of life within the Templar spirit.',
      ],
    },
  },
  {
    id: 'social',
    heading: { pt: 'Compromissos com a sociedade', en: 'Commitments to society' },
    body: {
      pt: [
        'Entre os propósitos da Ordem estão: defender, sem discriminação, os direitos universais; assegurar a dignidade humana e o bem-estar espiritual; respeitar e cuidar da comunidade da vida; fortalecer as instituições democráticas e promover a transparência e a prestação de contas no exercício do governo.',
        'A Ordem apoia a educação contínua e o conhecimento, o respeito à Terra e à diversidade, a saúde, as oportunidades econômicas e a dignidade humana.',
      ],
      en: [
        'Among the purposes of the Order are: to defend, without discrimination, universal rights; to ensure human dignity and spiritual wellbeing; to respect and care for the community of life; to strengthen democratic institutions and to promote transparency and accountability in government.',
        'The Order supports continuing education and knowledge, respect for the Earth and diversity, health, economic opportunity and human dignity.',
      ],
    },
  },
  {
    id: 'ajuda-mutua',
    heading: { pt: 'Ajuda mútua e vida familiar', en: 'Mutual aid and family life' },
    body: {
      pt: [
        'A Ordem nunca poupou e não poupará esforços para um eficiente programa de ajuda mútua, para desenvolver e melhorar o padrão de vida dos seus membros, propiciando orientações para que conduzam suas vidas com uma vida familiar saudável e próspera.',
      ],
      en: [
        'The Order has never spared and will not spare efforts for an effective programme of mutual aid, to develop and improve the standard of living of its members, offering guidance so that they lead healthy and prosperous family lives.',
      ],
    },
  },
];

/** "Ensinamentos" — teachings and studies. */
export const teachingSections: Section[] = [
  {
    id: 'objetivo',
    heading: { pt: 'O aprimoramento do caráter', en: 'The improvement of character' },
    body: {
      pt: [
        'Trabalhamos com os estudos Templários para alcançar um objetivo comum: o aprimoramento do nosso caráter, sermos sempre éticos, a elevação do ego e a eliminação dos fatores que nos limitam, desanimam e nos tornam infelizes.',
      ],
      en: [
        'We work with Templar studies towards a common goal: the improvement of our character, to always be ethical, the elevation of the self and the removal of the factors that limit us, discourage us and make us unhappy.',
      ],
    },
  },
  {
    id: 'partilha',
    heading: { pt: 'Conhecimento que se partilha', en: 'Knowledge that is shared' },
    body: {
      pt: [
        'Pelos estudos Templários, aqueles que já conseguiram erguer o véu do conhecimento e encontrar meios para o seu autodesenvolvimento devem partilhar, até onde possível, aquilo que descobriram e tudo que possa ajudar ao seu semelhante, em benefício de terceiros e para o aperfeiçoamento da humanidade.',
        'Nenhum Cavaleiro Templário acreditou ser necessário ocultar a sua verdadeira fonte de conhecimentos daqueles que considera preparados e dignos.',
      ],
      en: [
        'Through Templar studies, those who have lifted the veil of knowledge and found means for their own self-development should share, as far as possible, what they have discovered and all that may help their fellow human beings, for the benefit of others and the improvement of humanity.',
        'No Knight Templar has ever believed it necessary to hide their true source of knowledge from those they consider prepared and worthy.',
      ],
    },
  },
  {
    id: 'aqui-agora',
    heading: { pt: 'Nossa missão é aqui e agora', en: 'Our mission is here and now' },
    body: {
      pt: [
        'Existe à nossa volta uma multidão de pessoas sobrecarregadas de temores, debatendo-se em crenças errôneas, angústias, ignorância e preconceito, procurando dignidade, sentido e coerência para as suas vidas. A herança mais valiosa que poderemos deixar nesta existência será o grau de aperfeiçoamento e conhecimento que tivermos conseguido e transmitido ao nosso semelhante.',
      ],
      en: [
        'Around us there is a multitude of people burdened by fears, struggling with mistaken beliefs, anguish, ignorance and prejudice, seeking dignity, meaning and coherence for their lives. The most valuable legacy we can leave in this existence will be the degree of improvement and knowledge we have achieved and passed on to our fellow human beings.',
      ],
    },
  },
  {
    id: 'seriedade',
    heading: { pt: 'Estudos levados a sério', en: 'Studies taken seriously' },
    body: {
      pt: [
        'Os ensinamentos Templários nunca foram vendidos. Honrarias e títulos de nobreza mundanos, posição social, poder econômico e fama não têm nenhuma influência nos nossos estudos. Será necessária disciplina em relação ao horário e ao tempo de estudo.',
        'Estes serão os estudos mais importantes de suas vidas. Terão a oportunidade de se tornarem senhores das situações, em vez de vítimas das situações e circunstâncias.',
      ],
      en: [
        'Templar teachings have never been sold. Worldly honours and titles of nobility, social position, economic power and fame have no influence on our studies. Discipline regarding time and study hours will be necessary.',
        'These will be the most important studies of your life. You will have the opportunity to become masters of circumstances rather than victims of situations and circumstances.',
      ],
    },
  },
];

/** Short inspirational quotes drawn from the Order's own material. */
export const quotes = [
  {
    text: {
      pt: 'Nossa missão é, principalmente, aqui e agora.',
      en: 'Our mission is, above all, here and now.',
    },
    source: { pt: 'Dos Ensinamentos da Ordem', en: 'From the Teachings of the Order' },
  },
  {
    text: {
      pt: 'A herança mais valiosa que poderemos deixar será o conhecimento que transmitirmos ao nosso semelhante.',
      en: 'The most valuable legacy we can leave will be the knowledge we pass on to our fellow human beings.',
    },
    source: { pt: 'Dos Ensinamentos da Ordem', en: 'From the Teachings of the Order' },
  },
] as const;