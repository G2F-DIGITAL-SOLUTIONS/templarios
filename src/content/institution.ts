import type { Localized } from './localize';

/**
 * Institutional content for the Ordem Internacional Civil Militar
 * Cavaleiros Templários do Brasil (OICMCTB).
 *
 * Content is based on the institutional material provided (including the
 * document "Considerações para a Nova Ordem OICMCTB (2025)", pages 32–40).
 * Where a fact is not yet confirmed (e.g. CNPJ validation, social profile
 * activation), the copy deliberately avoids claims and marks the item as
 * pending confirmation.
 */

export interface Section {
  id: string;
  heading: Localized<string>;
  body: Localized<string[]>;
}

/** Institutional motto. */
export const motto = {
  latin: 'CREARE FUTURUM MUTATO MODO',
  translation: 'Para criar o futuro de um modo diferente.',
};

/** "Quem Somos" — full institutional presentation of the OICMCTB. */
export const aboutSections: Section[] = [
  {
    id: 'identidade',
    heading: {
      pt: 'Quem somos',
      en: 'Who we are',
    },
    body: {
      pt: [
        'A Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) é uma organização civil brasileira sem fins lucrativos, de caráter fraterno, cultural, filosófico, cívico e filantrópico. Sua proposta é unir a valorização das tradições cavalheirescas ao compromisso contemporâneo com o desenvolvimento humano, a cidadania, a memória histórica e o bem comum.',
        'Formalizada como pessoa jurídica em 2021, conforme as informações institucionais fornecidas, a Ordem desenvolve sua identidade a partir de valores como fé, esperança, caridade, justiça, prudência, fortaleza e temperança.',
        'Sua atuação contempla o fortalecimento dos vínculos fraternos, a pesquisa histórica, a valorização da cultura, o reconhecimento do mérito cívico e o incentivo a iniciativas que contribuam para o bem-estar das comunidades.',
      ],
      en: [
        'The International Civil Military Order of the Knights Templar of Brazil (OICMCTB) is a Brazilian civil nonprofit organization of a fraternal, cultural, philosophical, civic and philanthropic nature. Its purpose is to unite the appreciation of chivalric traditions with a contemporary commitment to human development, citizenship, historical memory and the common good.',
        'Formalized as a legal entity in 2021, according to the institutional information provided, the Order builds its identity upon values such as faith, hope, charity, justice, prudence, fortitude and temperance.',
        'Its action encompasses the strengthening of fraternal bonds, historical research, the appreciation of culture, the recognition of civic merit and the encouragement of initiatives that contribute to community wellbeing.',
      ],
    },
  },
  {
    id: 'independencia',
    heading: {
      pt: 'Independência institucional',
      en: 'Institutional independence',
    },
    body: {
      pt: [
        'A Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) é uma organização civil independente e não constitui uma Ordem Maçônica. A instituição não possui vínculo institucional com a Maçonaria. A eventual participação de pessoas que também sejam membros da Maçonaria ocorre exclusivamente em caráter individual, mediante ingresso e aceitação formal como membros da OICMCTB, sem estabelecer vínculo institucional entre as organizações.',
      ],
      en: [
        'The International Civil Military Order of the Knights Templar of Brazil (OICMCTB) is an independent civil organization and does not constitute a Masonic Order. The institution has no institutional link with Freemasonry. The eventual participation of people who are also Freemasons occurs exclusively on an individual basis, through admission and formal acceptance as members of the OICMCTB, without establishing any institutional link between the organizations.',
      ],
    },
  },
  {
    id: 'lideranca',
    heading: {
      pt: 'Grão-Mestrado',
      en: 'Grand Mastery',
    },
    body: {
      pt: [
        'O Grão-Mestre da Ordem é Roberto Aguiar Guazzelli, conforme o material institucional fornecido. Sob sua liderança, a Ordem desenvolve sua identidade institucional e suas iniciativas culturais, educacionais e filantrópicas.',
      ],
      en: [
        'The Grand Master of the Order is Roberto Aguiar Guazzelli, according to the institutional material provided. Under his leadership, the Order develops its institutional identity and its cultural, educational and philanthropic initiatives.',
      ],
    },
  },
  {
    id: 'cerimonias',
    heading: {
      pt: 'Cerimônias e atividades',
      en: 'Ceremonies and activities',
    },
    body: {
      pt: [
        'As cerimônias oficiais, investiduras, elevações, concessões de títulos e honrarias são atividades civis e cavalheirescas da Ordem. Quando confirmado pela instituição, as solenidades são abertas a convidados, familiares e à comunidade.',
        'As cerimônias não são descritas como secretas, ocultas ou esotéricas. A Ordem distingue cerimônias e solenidades institucionais de atividades internas de organização dos membros, de eventos culturais, educacionais e filantrópicos, e de atos formais de concessão de títulos e honrarias.',
        'Os títulos e honrarias da Ordem são atos institucionais civis e cavalheirescos. Eles não equivalem a títulos acadêmicos, postos militares oficiais, cargos públicos ou condecorações governamentais, e não possuem reconhecimento estatal nem efeitos jurídicos especiais sem documentação específica.',
      ],
      en: [
        'Official ceremonies, investitures, elevations, grants of titles and honours are civil and chivalric activities of the Order. When confirmed by the institution, solemnities are open to guests, family and the community.',
        'Ceremonies are not described as secret, hidden or esoteric. The Order distinguishes institutional ceremonies and solemnities from internal members’ organizational activities, cultural, educational and philanthropic events, and formal acts of granting titles and honours.',
        'The Order’s titles and honours are civil and chivalric institutional acts. They are not equivalent to academic titles, official military ranks, public offices or government decorations, and carry no state recognition or special legal effects without specific documentation.',
      ],
    },
  },
];

/** "História" — history of the contemporary Brazilian organization. */
export const historySections: Section[] = [
  {
    id: 'idealizacao',
    heading: {
      pt: 'Idealização e liderança',
      en: 'Ideation and leadership',
    },
    body: {
      pt: [
        'A idealização e a liderança da Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) são atribuídas ao Grão-Mestre Roberto Aguiar Guazzelli, conforme o material institucional fornecido.',
        'A Ordem é apresentada como uma organização civil brasileira, autônoma, de caráter fraterno, cultural, filosófico, cívico e filantrópico, sem fins lucrativos.',
      ],
      en: [
        'The ideation and leadership of the International Civil Military Order of the Knights Templar of Brazil (OICMCTB) are attributed to Grand Master Roberto Aguiar Guazzelli, according to the institutional material provided.',
        'The Order is presented as a Brazilian civil organization, autonomous, of a fraternal, cultural, philosophical, civic and philanthropic nature, nonprofit.',
      ],
    },
  },
  {
    id: 'formalizacao',
    heading: {
      pt: 'Formalização jurídica',
      en: 'Legal formalization',
    },
    body: {
      pt: [
        'A Ordem foi formalizada como pessoa jurídica em 2021, conforme as informações institucionais fornecidas. Este marco está associado à inscrição "MMXXI" presente no selo institucional.',
      ],
      en: [
        'The Order was formalized as a legal entity in 2021, according to the institutional information provided. This milestone is associated with the inscription "MMXXI" on the institutional seal.',
      ],
    },
  },
  {
    id: 'identidade-visual',
    heading: {
      pt: 'Identidade visual e brasão',
      en: 'Visual identity and coat of arms',
    },
    body: {
      pt: [
        'O desenvolvimento da identidade visual e do brasão de armas da Ordem fez parte da construção de sua identidade institucional, respeitando a tradição heráldica e os valores cavalheirescos.',
        'O brasão incorpora as cores nacionais brasileiras (verde e amarelo) e a cruz vermelha grega, que, segundo a interpretação da Ordem, evoca os ideais templários e o compromisso com a justiça e a verdade.',
      ],
      en: [
        'The development of the Order’s visual identity and coat of arms was part of building its institutional identity, respecting heraldic tradition and chivalric values.',
        'The coat of arms incorporates the Brazilian national colours (green and yellow) and the red Greek cross, which, according to the Order’s interpretation, evokes Templar ideals and the commitment to justice and truth.',
      ],
    },
  },
  {
    id: 'abtl',
    heading: {
      pt: 'Academia Brasileira Templária de Letras',
      en: 'Brazilian Templarian Academy of Letters',
    },
    body: {
      pt: [
        'A Academia Brasileira Templária de Letras (ABTL) é o braço cultural, acadêmico e literário associado à Ordem. Sua atuação contempla pesquisa histórica, literatura e produção intelectual, preservação das tradições, incentivo às artes e às ciências, estudos culturais e teológicos, quando compatíveis com sua atuação efetiva, e publicações e materiais educativos.',
        'A relação entre a ABTL e a OICMCTB é de associação institucional, sem que se invente uma estrutura jurídica independente para a Academia nem se atribuam a ela competências não confirmadas.',
      ],
      en: [
        'The Brazilian Templarian Academy of Letters (ABTL) is the cultural, academic and literary arm associated with the Order. Its action encompasses historical research, literature and intellectual production, preservation of traditions, encouragement of the arts and sciences, cultural and theological studies when compatible with its effective action, and publications and educational materials.',
        'The relationship between ABTL and OICMCTB is one of institutional association, without inventing an independent legal structure for the Academy or attributing to it unconfirmed competences.',
      ],
    },
  },
  {
    id: 'evolucao',
    heading: {
      pt: 'Evolução das estruturas institucionais',
      en: 'Evolution of institutional structures',
    },
    body: {
      pt: [
        'O desenvolvimento dos priorados, comendas e demais estruturas institucionais é apresentado somente quando houver informações verificáveis, sem inventar datas, acontecimentos, personagens ou quantidades.',
      ],
      en: [
        'The evolution of priories, commanderies and other institutional structures is presented only when verifiable information exists, without inventing dates, events, characters or quantities.',
      ],
    },
  },
  {
    id: 'diferenca-medieval',
    heading: {
      pt: 'Distinção da Ordem medieval',
      en: 'Distinction from the medieval Order',
    },
    body: {
      pt: [
        'A história da organização brasileira contemporânea é distinta da história medieval dos Cavaleiros Templários. A OICMCTB não afirma continuidade jurídica ou institucional direta com a ordem medieval.',
      ],
      en: [
        'The history of the contemporary Brazilian organization is distinct from the medieval history of the Knights Templar. The OICMCTB does not claim direct legal or institutional continuity with the medieval order.',
      ],
    },
  },
];

/** "Missão, Visão e Valores" — core institutional statements. */
export const purposeSections: Section[] = [
  {
    id: 'missao',
    heading: {
      pt: 'Missão',
      en: 'Mission',
    },
    body: {
      pt: [
        'Contribuir para criar o futuro de um modo diferente, promovendo o desenvolvimento humano, a preservação da história dos cavaleiros templários e a manutenção da memória dos heróis cívicos locais, por meio de ações comunitárias, projetos educacionais e iniciativas de reconhecimento do mérito, respeitando o modo de vida, as tradições e as leis locais.',
      ],
      en: [
        'To contribute to creating the future in a different way, promoting human development, the preservation of the history of the Knights Templar and the maintenance of the memory of local civic heroes, through community actions, educational projects and merit recognition initiatives, respecting the way of life, traditions and local laws.',
      ],
    },
  },
  {
    id: 'visao',
    heading: {
      pt: 'Visão',
      en: 'Vision',
    },
    body: {
      pt: [
        'Ser reconhecida internacionalmente como uma ordem templária legitimamente brasileira, uma organização civil sem fins lucrativos que contribui de forma efetiva para a melhoria da vida de seus associados e das comunidades em que está inserida, com fé em Deus, respeito às tradições locais e compromisso com a preservação da memória histórica dos templários e dos heróis cívicos regionais.',
        'Esta formulação é apresentada como visão institucional do documento de referência e não como uma alegação de reconhecimento internacional já alcançado.',
      ],
      en: [
        'To be recognized internationally as a legitimately Brazilian Templar order, a civil nonprofit organization that effectively contributes to improving the lives of its members and the communities in which it operates, with faith in God, respect for local traditions and commitment to preserving the historical memory of the Templars and regional civic heroes.',
        'This formulation is presented as the institutional vision of the reference document and not as a claim of international recognition already achieved.',
      ],
    },
  },
  {
    id: 'valores',
    heading: {
      pt: 'Valores',
      en: 'Values',
    },
    body: {
      pt: [
        'Fé em Deus.',
        'Esperança.',
        'Caridade.',
        'Justiça.',
        'Prudência.',
        'Fortaleza.',
        'Temperança.',
      ],
      en: [
        'Faith in God.',
        'Hope.',
        'Charity.',
        'Justice.',
        'Prudence.',
        'Fortitude.',
        'Temperance.',
      ],
    },
  },
  {
    id: 'lema',
    heading: {
      pt: 'Lema',
      en: 'Motto',
    },
    body: {
      pt: [
        '"CREARE FUTURUM MUTATO MODO."',
        'Tradução: "Para criar o futuro de um modo diferente."',
        'O lema sintetiza a orientação institucional de construir o futuro por meio de valores, atitudes e ações comprometidas com o bem comum.',
      ],
      en: [
        '"CREARE FUTURUM MUTATO MODO."',
        'Translation: "To create the future in a different way."',
        'The motto synthesizes the institutional orientation of building the future through values, attitudes and actions committed to the common good.',
      ],
    },
  },
  {
    id: 'filosofia',
    heading: {
      pt: 'Filosofia de trabalho',
      en: 'Working philosophy',
    },
    body: {
      pt: [
        'Dar prova de humildade, arrepender-se dos erros, agir com sinceridade e compromisso, amar a justiça, ser misericordioso, demonstrar fé, viver na verdade e suportar adversidades quando necessário.',
      ],
      en: [
        'To give proof of humility, to repent of errors, to act with sincerity and commitment, to love justice, to be merciful, to demonstrate faith, to live in truth and to endure adversities when necessary.',
      ],
    },
  },
];

/** "Ensinamentos" — teachings and studies (kept, revised for tone). */
export const teachingSections: Section[] = [
  {
    id: 'caracter',
    heading: {
      pt: 'O aprimoramento do caráter',
      en: 'The improvement of character',
    },
    body: {
      pt: [
        'Os estudos templários têm como objetivo comum o aprimoramento do caráter, a conduta ética e a eliminação dos fatores que nos limitam, desanimam e nos tornam infelizes.',
      ],
      en: [
        'Templar studies share a common goal: the improvement of character, ethical conduct and the removal of factors that limit, discourage and make us unhappy.',
      ],
    },
  },
  {
    id: 'partilha',
    heading: {
      pt: 'Conhecimento que se partilha',
      en: 'Knowledge that is shared',
    },
    body: {
      pt: [
        'Aqueles que avançam nos estudos devem partilhar, até onde possível, o que descobriram e tudo o que possa ajudar ao semelhante, em benefício de terceiros e para o aperfeiçoamento da humanidade.',
        'Os ensinamentos templários nunca foram vendidos. Honrarias, títulos, posição social, poder econômico e fama não têm influência nos estudos.',
      ],
      en: [
        'Those who advance in the studies should share, as far as possible, what they have discovered and all that may help their fellow human beings, for the benefit of others and the improvement of humanity.',
        'Templar teachings have never been sold. Honours, titles, social position, economic power and fame have no influence on our studies.',
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

/** ========================================================================
 *  Conteúdo das novas páginas institucionais (brasão, ABTL, Damas, Informações)
 * ======================================================================== */

/** Brasão de Armas e Simbologia — heraldic elements. */
export const coatOfArms = {
  title: 'Brasão de Armas e Simbologia',
  kicker: 'Identidade heráldica',
  intro:
    'Esta página apresenta o brasão oficial da Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB), com base nos materiais heráldicos fornecidos pela instituição.',
  shield: {
    heading: 'A. Escudo',
    body: [
      'O escudo é clássico, ogival e lanceolado, com a ponta inferior em forma de lança ou ogiva. Sua composição é simétrica, dividida em quatro partes por duas faixas perpendiculares.',
      'O verde (esmalte Sinople) e o amarelo (esmalte Ouro) representam as cores nacionais brasileiras. A cruz vermelha (esmalte Gules) que atravessa o escudo evoca, segundo a interpretação da Ordem, os ideais templários e o compromisso com a justiça e a verdade. A prata (metal) é utilizada no contorno e nos elementos descritos na composição heráldica.',
      'Não são atribuídos significados adicionais a cada cor sem respaldo documental.',
    ],
  },
  seal: {
    heading: 'B. Selo central',
    body: [
      'O selo redondo apresenta dois cavaleiros templários compartilhando o mesmo cavalo, inspirado na tradição iconográfica templária.',
      'Segundo a interpretação institucional documentada, a direção dos cavaleiros no selo da OICMCTB foi invertida simbolicamente: em vez do deslocamento da esquerda para a direita, a representação segue da direita para a esquerda.',
      'Essa escolha representa o questionamento da inversão contemporânea de valores, a rejeição simbólica de um estado de coisas considerado contrário aos princípios da Ordem, o retorno ao caminho da retidão, da virtude e da fé, e a valorização das tradições com atenção às necessidades do presente e do futuro.',
      'Esta explicação é apresentada como interpretação simbólica da própria OICMCTB, não como um fato histórico universalmente estabelecido.',
      'A inscrição "SIGNUM TEMPLARIORUM BRASILIAE" (traduzida como "Sinal dos Templários Brasileiros") deve ser reproduzida fielmente, respeitando a grafia presente na arte oficial. Pequenas cruzes de Malta aparecem entre as palavras, conforme a representação oficial.',
    ],
  },
  helmet: {
    heading: 'C. Elmo',
    body: [
      'O elmo é primitivo, sem virol, representado a três quartos e em prata. Apresenta-se como elemento tradicional da composição heráldica, associado à identidade cavalheiresca da Ordem.',
    ],
  },
  mantling: {
    heading: 'D. Paquifes',
    body: [
      'Os paquifes são os ornamentos que se desenvolvem lateralmente ao elmo. A composição descrita utiliza azul, branco ou prata e amarelo ou ouro.',
      'O documento relaciona os paquifes e determinados elementos da divisa à tradição heráldica da família Guazzelli. Essa relação é explicada como uma referência familiar adotada na composição do brasão, sem sugerir que ela constitui, por si só, prova de linhagem medieval.',
    ],
  },
  crest: {
    heading: 'E. Timbre',
    body: [
      'O timbre é uma cruz de Malta templária vermelha, com pontas abertas. Apresenta-se como elemento visual central da identidade heráldica superior.',
    ],
  },
  motto: {
    heading: 'F. Grito de guerra (lema)',
    body: [
      'A inscrição é: "CREARE FUTURUM MUTATO MODO."',
      'Tradução: "Para criar o futuro de um modo diferente."',
      'O lema sintetiza a orientação institucional de construir o futuro por meio de valores, atitudes e ações comprometidas com o bem comum.',
    ],
  },
  divisa: {
    heading: 'G. Divisa',
    body: [
      'A divisa é um listel amarelo ou ouro com a identificação: "O.I.C.M.C.T.B."',
      'A sigla é apresentada por extenso em texto acessível próximo à imagem: Ordem Internacional Civil Militar Cavaleiros Templários do Brasil.',
    ],
  },
  colors: {
    heading: 'Referências cromáticas oficiais',
    body: [
      'As cores abaixo são as referências fornecidas no documento institucional. Elas orientam a apresentação do brasão e da identidade institucional; a interface do site utiliza tons neutros complementares.',
      '- Prata: RGB 208, 211, 212; Pantone 427 C.',
      '- Vermelho Gules: RGB 239, 51, 64; Pantone Red 032 C.',
      '- Verde Sinople: RGB 0, 150, 57; Pantone 355 C.',
      '- Amarelo Ouro: RGB 254, 221, 0.',
      '- Azul Blau: RGB 16, 6, 159; Pantone Blue 072 C.',
      '- Preto Sable: RGB 45, 41, 38; Pantone Black C.',
      'O documento apresenta pequenas inconsistências entre algumas descrições de cores, valores CMYK, RGB e referências Pantone. Por isso, os arquivos oficiais do brasão são a fonte visual principal, e as cores oficiais não são alteradas com base apenas na interpretação dos números.',
    ],
  },
  sealNote:
    'O material descreve a figura de dois cavaleiros templários compartilhando um mesmo cavalo, com a direção dos cavaleiros invertida simbolicamente (da direita para a esquerda), como interpretação institucional da OICMCTB.',

  /** Selo — explicação simbólica (also used on the History page). */
  sealSymbolism: {
    heading: 'O selo da OICMCTB',
    body: [
      'O selo institucional apresenta dois cavaleiros templários compartilhando um mesmo cavalo, inspirado na tradição iconográfica templária.',
      'Segundo a interpretação institucional documentada, a direção dos cavaleiros foi invertida simbolicamente: em vez do deslocamento da esquerda para a direita, a representação segue da direita para a esquerda.',
      'Essa escolha representa o questionamento da inversão contemporânea de valores, a rejeição simbólica de um estado de coisas considerado contrário aos princípios da Ordem, o retorno ao caminho da retidão, da virtude e da fé, e a valorização das tradições com atenção às necessidades do presente e do futuro.',
      'A inscrição "MMXXI" corresponde ao ano de 2021, associado à formalização jurídica da instituição.',
      'A inscrição latina "SIGNUM TEMPLARIORUM BRASILIAE" é traduzida como "Sinal dos Templários Brasileiros" e deve ser reproduzida fielmente, respeitando a grafia da arte oficial.',
    ],
  },
};

/** Academia Brasileira Templária de Letras (ABTL). */
export const academy = {
  title: 'Academia Brasileira Templária de Letras — ABTL',
  kicker: 'Braço cultural e literário',
  intro:
    'A Academia Brasileira Templária de Letras (ABTL) é o braço cultural, acadêmico e literário associado à Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB), de acordo com o material institucional fornecido.',
  areas: [
    'Pesquisa histórica.',
    'Literatura e produção intelectual.',
    'Preservação das tradições.',
    'Incentivo às artes e às ciências.',
    'Estudos culturais e teológicos, quando compatíveis com a atuação efetiva da Academia.',
    'Publicações e materiais educativos.',
  ],
  relationship:
    'A ABTL está associada à OICMCTB como sua instituição cultural e literária. Não se inventa uma estrutura jurídica independente para a Academia, nem se lhe atribuem competências que não tenham sido confirmadas.',
  noteOnSpelling:
    'A grafia oficial é "Academia Brasileira Templária de Letras (ABTL)". A ocorrência de "Academia Brasileira Templária de Leiras" em alguns textos recebidos é tratada como provável erro de digitação e não é reproduzida.',
  noInvention:
    'Não são criados membros, acadêmicos, publicações, prêmios, eventos ou projetos fictícios.',
};

/** Conselho Nacional das Damas Templárias. */
export const ladies = {
  title: 'Damas Templárias',
  kicker: 'Conselho Nacional das Damas Templárias',
  intro:
    'O Conselho Nacional das Damas Templárias participa da estrutura institucional e das iniciativas da Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB).',
  firstLady:
    'Sueli Teodoro é identificada no material institucional como Primeira-Dama do Conselho Nacional das Damas Templárias.',
  nomenclatureNote:
    'Antes de atribuir cargos como presidência, direção ou coordenação, confirma-se a nomenclatura institucional correta. A identificação de "Primeira-Dama" não é transformada automaticamente em outro cargo.',
  participation:
    'A participação das mulheres é valorizada na vida institucional, cultural e comunitária da Ordem, sem criar atribuições ou projetos não documentados.',
};

/** Informações Institucionais. */
export const institutionalInfo = {
  title: 'Informações Institucionais',
  kicker: 'Dados da instituição',
  intro:
    'Os dados abaixo são organizados de forma clara, acessível e de fácil consulta, com base nas informações fornecidas pela Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB).',
  items: [
    { label: 'Razão social', value: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil' },
    { label: 'CNPJ', value: '42.071.770/0001-75' },
    { label: 'Grão-Mestrado', value: 'Roberto Aguiar Guazzelli' },
    { label: 'Conselho Nacional das Damas Templárias', value: 'Sueli Teodoro (Primeira-Dama)' },
    { label: 'Braço cultural e literário', value: 'Academia Brasileira Templária de Letras (ABTL)' },
    { label: 'E-mail institucional', value: 'oicmctb@gmail.com' },
    { label: 'Redes sociais', value: '@oicmctb (Facebook e Instagram)' },
  ],
  validationNote:
    'O CNPJ, a razão social e a situação cadastral devem ser validados em fontes oficiais antes de serem apresentados como informações jurídicas verificadas. Caso haja divergências entre a denominação fornecida e os registros oficiais, elas devem ser sinalizadas para validação em vez de alteradas silenciosamente.',
  contactNote:
    'O endereço de e-mail e os perfis de redes sociais não são publicados como links clicáveis até que sejam verificados como corretos e ativos.',
  noInvention:
    'Não são publicados endereço de sede, telefone, estatuto, certificados, registros adicionais ou números de reconhecimento, pois nenhum desses dados foi confirmado.',
};
