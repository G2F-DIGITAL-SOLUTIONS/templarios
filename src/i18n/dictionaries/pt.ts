/**
 * Portuguese (pt-BR) dictionary — the source of truth.
 *
 * `Dictionary` is derived from this object, so every other locale is
 * type-checked against these keys. Missing keys in other locales fall back
 * to the Portuguese value (see ../dictionaries.ts).
 */
export const pt = {
  meta: {
    siteName: "Ordem Internacional Civil Militar Cavaleiros Templários do Brasil",
    shortName: "OICMCTB",
    tagline: "CREARE FUTURUM MUTATO MODO — Para criar o futuro de um modo diferente.",
    defaultDescription:
      "A Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) é uma organização civil brasileira, sem fins lucrativos, de caráter fraterno, cultural, filosófico, cívico e filantrópico, dedicada aos valores cavalheirescos, ao desenvolvimento humano, à cultura e ao bem comum.",
    ogLocale: 'pt_BR',
  },

  common: {
    skipToContent: 'Ir para o conteúdo principal',
    readMore: 'Saiba mais',
    learnMore: 'Conheça',
    enter: 'Entrar',
    explore: 'Explorar',
    viewAll: 'Ver tudo',
    backHome: 'Voltar ao início',
    backTo: 'Voltar',
    home: 'Início',
    breadcrumb: 'Você está em',
    onThisPage: 'Nesta página',
    scrollHint: 'Prossiga',
    underlineMotif: 'CREARE FUTURUM MUTATO MODO',
    imageCredit: 'Imagem',
    loading: 'Carregando',
  },

  language: {
    label: 'Idioma',
    switchTo: 'Mudar idioma para',
    current: 'Idioma atual',
  },

  nav: {
    label: 'Navegação principal',
    order: 'Ordem',
    initiatives: "Cultura e Atuação Social",
    knowledge: "Cultura e Conhecimento",
    events: 'Eventos',
    citiesDay: 'Dia das Cidades',
    donations: 'Doações',
    faq: 'FAQ',
    contact: 'Contato',
    affiliation: 'Afiliação',
    shop: 'Loja',
    tv: 'TV Templários',
    // Sub-items
    about: 'Quem Somos',
    history: "História e Brasão",
    purposes: 'Propósitos',
    teachings: 'Ensinamentos',
    environment: 'Meio Ambiente',
    sport: 'Esporte',
    health: 'Saúde',
    education: 'Educação',
    lectures: 'Palestras',
    studies: 'Estudos',
    articles: 'Artigos',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    ctaPrimary: 'Conheça a Ordem',
    ctaSecondary: 'Participe',
  },

  footer: {
    aboutTitle: "Ordem Internacional Civil Militar Cavaleiros Templários do Brasil",
    aboutText:
      "Organização civil brasileira, sem fins lucrativos, de caráter fraterno, cultural, filosófico, cívico e filantrópico, com identidade e autonomia próprias, dedicada aos valores cavalheirescos, à cultura e ao bem comum.",
    navTitle: 'Navegação',
    institutionalTitle: 'Institucional',
    initiativesTitle: 'Iniciativas',
    knowledgeTitle: 'Conhecimento',
    contactTitle: 'Contato',
    languagesTitle: 'Idiomas',
    socialTitle: 'Redes sociais',
    legalTitle: 'Legal',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Uso',
    cookies: 'Cookies',
    rights: 'Todos os direitos reservados.',
    motif: 'CREARE FUTURUM MUTATO MODO',
  },

  a11y: {
    logoAlt: "Brasão da OICMCTB",
    decorative: 'Elemento decorativo',
    externalLink: 'Abre em nova aba',
    requiredField: 'campo obrigatório',
    formSuccess: 'Recebemos sua mensagem. Obrigado pelo contato.',
    formError: 'Não foi possível enviar agora. Tente novamente ou escreva para nosso e-mail.',
  },

  forms: {
    name: 'Nome completo',
    email: 'E-mail',
    phone: 'Telefone',
    city: 'Cidade',
    state: 'Estado',
    message: 'Mensagem',
    subject: 'Assunto',
    cpf: 'CPF',
    birthDate: 'Data de nascimento',
    maritalStatus: 'Estado civil',
    address: 'Endereço residencial completo',
    postalCode: 'CEP',
    education: 'Formação escolar',
    profession: 'Profissão',
    motivation: 'Conte-nos por que deseja se afiliar e por que deseja integrar a Ordem:',
    send: 'Enviar mensagem',
    submit: 'Enviar pedido de afiliação',
    consent: 'Autorizo o uso dos meus dados para resposta a este contato.',
    requiredNote: 'Campos marcados com * são obrigatórios.',
    selectPlaceholder: 'Selecione',
    mailSubject: 'Mensagem pelo site da OICMCTB',
    mailOpening: 'Abrindo seu programa de e-mail…',
  },

  home: {
    hero: {
      kicker: 'OICMCTB',
      title: 'Uma tradição de séculos a serviço de valores que permanecem atuais.',
      lead: 'Tradição, conhecimento e serviço ao próximo.',
      intro:
        'Somos uma fraternidade de homens e mulheres que cultiva a ética, o estudo e a caridade. Entre e conheça os diferentes espaços da Ordem.',
      primaryCta: 'Explorar a Ordem',
      secondaryCta: 'Conheça nossa missão',
      bridgeAlt: 'Entrada de um castelo medieval ao amanhecer',
    },
    doors: {
      kicker: 'As Portas do Castelo',
      title: 'Cada porta leva a uma área da Ordem',
      lead: 'Escolha por onde começar sua visita. Você pode percorrer todos os espaços quando quiser.',
      items: {
        order: {
          label: 'A Ordem',
          text: 'Conheça nossa história, identidade, missão e propósito.',
          cta: 'Entrar',
        },
        history: {
          label: 'Nossa História',
          text: 'Conheça a trajetória histórica da tradição templária e sua evolução ao longo dos séculos.',
          cta: 'Conhecer a história',
        },
        purposes: {
          label: 'Nossos Propósitos',
          text: 'Conheça os valores e princípios que orientam a atuação da Ordem.',
          cta: 'Conhecer nossos propósitos',
        },
        teachings: {
          label: 'Ensinamentos',
          text: 'Estudos, conhecimento, cultura e desenvolvimento pessoal.',
          cta: 'Explorar estudos',
        },
        initiatives: {
          label: 'Nossas Iniciativas',
          text: 'Conheça as ações realizadas em benefício da sociedade.',
          cta: 'Conhecer iniciativas',
        },
        events: {
          label: 'Eventos',
          text: 'Acompanhe os eventos e atividades da Ordem.',
          cta: 'Ver eventos',
        },
      },
    },
    about: {
      kicker: 'Sobre a Ordem',
      title: 'Quem somos',
      lead: 'Uma Ordem de Cavaleiros do Templo — não maçônica — que reúne homens e mulheres em torno da ética, do conhecimento e do serviço.',
      body: 'A OICMCTB busca reunir pessoas tolerantes e de boa vontade, que amem a justiça e a nobreza de caráter, desejosas de serem úteis aos outros e que compreendam verdadeiramente o sentido da palavra fraternidade.',
      highlights: {
        identity: 'Identidade',
        identityText: "Organização civil brasileira, sem fins lucrativos, de caráter fraterno, cultural, filosófico, cívico e filantrópico, com identidade e autonomia próprias.",
        origin: 'Origem',
        originText: "A instituição foi formalizada como pessoa jurídica em 2021. Seu Grão-Mestre é Roberto Aguiar Guazzelli.",
        values: 'Valores',
        valuesText: "Fé em Deus, Esperança, Caridade, Justiça, Prudência, Fortaleza e Temperança.",
        today: 'Hoje',
        todayText: 'Estudos, apoio mútuo e iniciativas sociais voltadas à educação, à saúde, ao esporte e ao meio ambiente.',
      },
      cta: 'Conheça a Ordem',
      ctaSecondary: 'Nossa história',
    },
    quote: {
      text: 'Nossa missão é, principalmente, aqui e agora.',
      source: 'Dos Ensinamentos da Ordem',
    },
    purposes: {
      kicker: 'Missão e Propósitos',
      title: 'Princípios que orientam nossa atuação',
      lead: 'Os propósitos da Ordem são revestidos de nobreza e virtude, e se traduzem em compromissos concretos com a sociedade.',
      pillars: {
        education: {
          title: 'Educação',
          text: 'Promover conhecimento, cultura e oportunidades de aprendizagem ao longo da vida.',
        },
        health: {
          title: 'Saúde',
          text: 'Contribuir para o bem-estar e a dignidade das pessoas.',
        },
        environment: {
          title: 'Meio Ambiente',
          text: 'Respeitar e cuidar da Terra e da vida em toda a sua diversidade.',
        },
        justice: {
          title: 'Justiça e Cidadania',
          text: 'Promover valores éticos, dignidade, responsabilidade e participação social.',
        },
        cooperation: {
          title: 'Fraternidade e Ajuda Mútua',
          text: 'Manter um eficiente programa de ajuda mútua entre os membros e suas famílias.',
        },
        culture: {
          title: 'Cultura e Estudo',
          text: 'Priorizar o estudo como base principal da satisfação humana e do desenvolvimento pessoal.',
        },
      },
      cta: 'Conhecer nossos propósitos',
    },
    initiatives: {
      kicker: 'A Ordem em ação',
      title: 'Iniciativas em benefício da sociedade',
      lead: 'A Ordem não existe apenas para preservar uma tradição. Ela utiliza seus valores para contribuir com a sociedade contemporânea.',
      items: {
        environment: {
          title: 'Meio Ambiente',
          text: 'Projetos, ações e iniciativas relacionadas à preservação ambiental.',
        },
        sport: {
          title: 'Esporte',
          text: 'Incentivo ao esporte, integração social e desenvolvimento humano.',
        },
        health: {
          title: 'Saúde',
          text: 'Ações de apoio à saúde, ao bem-estar e à assistência.',
        },
        education: {
          title: 'Educação',
          text: 'Projetos voltados ao acesso à educação, à cultura e ao conhecimento.',
        },
      },
      cardCta: 'Conhecer iniciativa',
      cta: 'Conhecer iniciativas',
    },
    donations: {
      kicker: 'Faça parte de algo maior',
      title: 'Sua contribuição sustenta o que a Ordem realiza',
      lead: 'As contribuições recebidas são destinadas a um fundo geral de operações da Ordem, às suas atividades humanitárias e beneficentes e às suas pesquisas e investigações.',
      reasons: {
        mission: {
          title: 'Para onde vão os recursos',
          text: 'Taxas e mensalidades sustentam as atividades institucionais, humanitárias e beneficentes e as pesquisas da Ordem.',
        },
        transparency: {
          title: 'Compromisso com a transparência',
          text: 'A Ordem mantém compromisso com a prestação de contas e o uso responsável dos recursos recebidos.',
        },
        impact: {
          title: 'Impacto social',
          text: 'Apoiar iniciativas de educação, saúde, esporte e meio ambiente em benefício da comunidade.',
        },
      },
      ctaPrimary: 'Quero contribuir',
      ctaSecondary: 'Fale conosco',
    },
    events: {
      kicker: 'Agenda',
      title: 'Próximos eventos',
      lead: 'Cerimônias, encontros e atividades da Ordem.',
      ctaAll: 'Ver todos os eventos',
      emptyState: 'Nenhum evento divulgado no momento. Acompanhe nossa agenda em breve.',
      dateLabel: 'Data',
      locationLabel: 'Local',
      externalNote: 'A agenda completa é mantida em nossa plataforma de eventos.',
    },
    knowledge: {
      kicker: 'Conhecimento é parte da nossa tradição',
      title: 'Palestras, estudos e artigos',
      lead: 'Materiais da Ordem para estudo e desenvolvimento pessoal.',
      ctaAll: 'Explorar conhecimento',
      types: {
        lecture: 'Palestra',
        study: 'Estudo',
        article: 'Artigo',
        video: 'Vídeo',
      },
    },
    citiesDay: {
      kicker: 'Projeto',
      title: 'Dia das Cidades',
      lead: 'Uma iniciativa que aproxima a Ordem das cidades e de suas comunidades.',
      body: 'Conheça o propósito do projeto, como ele funciona e como levar o Dia das Cidades para a sua cidade.',
      cta: 'Quero levar o Dia das Cidades para minha cidade',
      ctaSecondary: 'Entenda o projeto',
    },
    affiliation: {
      kicker: 'Participe',
      title: 'A Ordem está abrindo suas portas para você',
      lead: 'Reunimos homens e mulheres tolerantes e de boa vontade, desejosos de serem úteis aos outros.',
      cta: 'Conheça a afiliação',
    },
    finalCta: {
      title: 'Descubra seu espaço na Ordem',
      lead: 'Conhecer, confiar, participar e contribuir — este é o caminho.',
      primary: 'Explorar a Ordem',
      secondary: 'Fale conosco',
    },
  },

  pages: {
    order: {
      kicker: 'A Ordem',
      title: 'Quem Somos',
      lead: "Organização civil brasileira, sem fins lucrativos, de caráter fraterno, cultural, filosófico, cívico e filantrópico, com identidade e autonomia próprias.",
      intro:
        'A OICMCTB é uma Ordem de Cavaleiros do Templo — não sendo, portanto, uma Ordem Maçônica, nem a ela conectada, a não ser historicamente.',
    },
    history: {
      kicker: 'Trajetória',
      title: 'História',
      lead: 'A trajetória da tradição templária, das origens medievais à sua expressão contemporânea.',
    },
    purposes: {
      kicker: 'Missão',
      title: 'Propósitos',
      lead: 'Os propósitos da OICMCTB são revestidos de nobreza com a capa branca da virtude.',
    },
    teachings: {
      kicker: 'Estudos',
      title: 'Ensinamentos',
      lead: 'Trabalhamos com os estudos Templários para alcançar um objetivo comum: o aprimoramento do nosso caráter.',
    },
    initiatives: {
      kicker: 'A Ordem em ação',
      title: 'Iniciativas',
      lead: 'Áreas em que a Ordem contribui com a sociedade contemporânea.',
    },
    events: {
      kicker: 'Agenda',
      title: 'Eventos',
      lead: 'Acompanhe os eventos e atividades da Ordem.',
    },
    knowledge: {
      kicker: 'Conhecimento',
      title: 'Palestras, Estudos e Artigos',
      lead: 'Materiais da Ordem para estudo, reflexão e desenvolvimento pessoal.',
    },
    citiesDay: {
      kicker: 'Projeto',
      title: 'Dia das Cidades',
      lead: 'Uma iniciativa que aproxima a Ordem das cidades e de suas comunidades.',
    },
    donations: {
      kicker: 'Contribua',
      title: 'Doações',
      lead: 'Faça parte de algo maior. Sua contribuição sustenta as atividades humanitárias, beneficentes e de pesquisa da Ordem.',
    },
    affiliation: {
      kicker: 'Participe',
      title: 'Afiliar-se',
      lead: 'A OICMCTB está abrindo as suas portas para você.',
    },
    faq: {
      kicker: 'Dúvidas',
      title: 'Perguntas Frequentes',
      lead: 'Respostas baseadas exclusivamente nas informações oficiais da Ordem.',
    },
    contact: {
      kicker: 'Fale conosco',
      title: 'Contato',
      lead: 'Estamos à disposição para responder suas questões sobre a Ordem.',
    },
  },

  sections: {
    related: 'Continue explorando',
    relatedLead: 'Outros espaços da Ordem que podem interessar a você.',
    gallery: 'Galeria',
    faqTitle: 'Perguntas Frequentes',
  },

  faq: {
    categories: {
      about: 'Sobre a Ordem',
      affiliation: 'Afiliação',
      events: "Participação na vida institucional, conforme orientações da Ordem.",
      donations: 'Doações',
    },
    ctaTitle: 'Não encontrou sua resposta?',
    ctaText: 'Fale conosco e teremos prazer em ajudar.',
    ctaButton: 'Entrar em contato',
  },

  affiliation: {
    purposeTitle: 'Por que se afiliar',
    purposeText:
      'O propósito da Ordem é ter uma sociedade de Cavaleiros Templários com o mesmo padrão de nobreza e virtude da tradicional OICMCTB, mantendo um eficiente programa de ajuda mútua.',
    whoTitle: 'Quem pode se afiliar',
    whoText:
      "As orientações confirmadas sobre participação são fornecidas pela Ordem a quem manifesta interesse pelo formulário. Não publicamos regras de ingresso, benefícios ou contribuições não confirmados.",
    processTitle: 'Como funciona o processo',
    steps: {
      one: {
        title: 'Conheça a Ordem',
        text: 'Leia sobre nossa identidade, história e propósitos antes de qualquer decisão.',
      },
      two: {
        title: 'Verifique os requisitos',
        text: 'Entenda quem pode participar e o que se espera de um membro.',
      },
      three: {
        title: 'Envie seu pedido',
        text: 'Preencha o formulário com seus dados e suas motivações.',
      },
      four: {
        title: 'Acompanhe o retorno',
        text: 'Nossa equipe entrará em contato para orientar os próximos passos.',
      },
    },
    benefitsTitle: 'Benefícios',
    benefits: {
      study: "Estudo, cultura e preservação da memória histórica.",
      fraternity: "Fraternidade e serviço ao bem comum.",
      events: 'Participação em eventos e cerimônias.',
      growth: "Desenvolvimento humano e cultural.",
    },
    responsibilitiesTitle: 'Responsabilidades',
    responsibilitiesText:
      "Quem participa é convidado a viver os valores da Ordem — Fé em Deus, Esperança, Caridade, Justiça, Prudência, Fortaleza e Temperança — com humildade, sinceridade e serviço ao bem comum. Condições específicas, quando existirem, são informadas diretamente pela Ordem.",
    feesTitle: 'Taxa de registro e mensalidade',
    feesText:
      "Informações sobre eventuais contribuições são fornecidas diretamente pela Ordem, após confirmação oficial. Nenhum valor é publicado neste site sem comprovação.",
    feeRegistrationLabel: 'Taxa de registro',
    feeMonthlyLabel: 'Contribuição mínima mensal',
    formTitle: 'Pedido de afiliação',
    formIntro: 'Preencha os dados abaixo. Suas informações serão tratadas com confidencialidade.',
  },

  donations: {
    whyTitle: 'Por que doar',
    whyText:
      'Doar é participar do que a Ordem realiza. As contribuições sustentam as atividades institucionais, humanitárias e beneficentes e as pesquisas e investigações da Ordem.',
    whereTitle: 'Para onde vão os recursos',
    whereItems: {
      operations: 'Fundo geral de operações da Ordem.',
      humanitarian: 'Atividades humanitárias e beneficentes.',
      research: 'Pesquisas e investigações científicas e culturais.',
      initiatives: 'Iniciativas de educação, saúde, esporte e meio ambiente.',
    },
    howTitle: 'Como doar',
    howText:
      'Entre em contato com a Ordem para receber as orientações e os dados necessários para realizar sua doação de forma segura.',
    howCta: 'Quero contribuir',
    legalNote:
      'A Ordem não presta consultoria tributária. Consulte sempre as regras oficiais e um profissional habilitado.',
  },

  citiesDay: {
    whatTitle: 'O que é',
    whatText:
      'O Dia das Cidades é uma iniciativa institucional que aproxima a Ordem das cidades e de suas comunidades, celebrando valores de fraternidade, cultura e serviço.',
    purposeTitle: 'Qual seu propósito',
    purposeText:
      'Reunir a comunidade em torno de valores que permanecem atuais: ética, solidariedade, cultura e cidadania.',
    howTitle: 'Como funciona',
    howText: 'Qualquer edição só é anunciada após confirmação oficial da Ordem, com cidade, data e programação definidos.',
    whyTitle: 'Por que existe',
    whyText:
      'Porque a tradição só permanece viva quando se traduz em serviço concreto à sociedade.',
    participateTitle: 'Como uma cidade pode participar',
    participateText: 'Cidades interessadas podem manifestar interesse pelo formulário de contato. Orientações, requisitos e calendário só são informados após confirmação oficial.',
    bringTitle: 'Leve o Dia das Cidades para a sua cidade',
    bringText:
      'Preencha o formulário contando sobre sua cidade e seu interesse. Entraremos em contato.',
    cta: 'Quero levar o Dia das Cidades para minha cidade',
  },

  events: {
    upcomingTitle: 'Próximos eventos',
    pastTitle: 'Eventos anteriores',
    platformNote: 'A inscrição e a agenda completa são mantidas em nossa plataforma externa de eventos.',
    ctaPlatform: 'Ver todos os eventos',
    emptyState: 'Nenhum evento divulgado no momento.',
  },

  knowledge: {
    filterAll: 'Todos',
    ctaWatch: 'Assistir',
    ctaRead: 'Ler',
    ctaKnow: 'Conhecer',
    emptyState: 'Nenhum conteúdo publicado ainda.',
  },

  contact: {
    infoTitle: 'Informações de contato',
    formTitle: 'Envie uma mensagem',
    addressLabel: 'Endereço',
    phoneLabel: 'Telefone',
    emailLabel: 'E-mail',
    emailCta: 'Enviar e-mail',
    hoursLabel: 'Atendimento',
    hoursValue: 'Consulte a Ordem para horários de atendimento.',
  },

  legal: {
    privacyTitle: 'Política de Privacidade',
    termsTitle: 'Termos de Uso',
    cookiesTitle: 'Cookies',
    updatedLabel: 'Última atualização',
    placeholderNote:
      "Para solicitar a versão vigente deste documento, entre em contato pelo e-mail institucional oicmctb@gmail.com. O texto jurídico oficial será publicado após validação pelos responsáveis.",
  },

  notFound: {
    kicker: 'Página não encontrada',
    title: 'Este corredor do castelo não existe',
    text: 'A página que você procura pode ter sido movida ou não existe. Retorne à entrada e explore a Ordem.',
    cta: 'Voltar ao início',
  },
};

export type Dictionary = typeof pt;