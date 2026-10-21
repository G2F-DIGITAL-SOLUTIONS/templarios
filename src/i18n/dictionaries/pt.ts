/**
 * Portuguese (pt-BR) dictionary — the source of truth.
 *
 * `Dictionary` is derived from this object, so every other locale is
 * type-checked against these keys. Missing keys in other locales fall back
 * to the Portuguese value (see ../dictionaries.ts).
 */
export const pt = {
  meta: {
    siteName: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
    shortName: 'OICMCTB',
    tagline: 'Tradição, honra e compromisso com o futuro.',
    defaultDescription:
      'Conheça a OICMCTB, sua história, seus valores cavalheirescos, sua simbologia, suas iniciativas culturais e seu compromisso social.',
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
    underlineMotif: 'Non nobis, Domine, non nobis, sed nomini tuo ad gloriam',
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
    order: 'A Ordem',
    initiatives: 'Atuação Social',
    knowledge: 'Conhecimento',
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
    history: 'História',
    missionVisionValues: 'Missão, Visão e Valores',
    teachings: 'Ensinamentos',
    institutionalInfo: 'Informações Institucionais',
    coatOfArms: 'Brasão e Simbologia',
    academy: 'Academia (ABTL)',
    templarLadies: 'Damas Templárias',
    environment: 'Meio Ambiente',
    sport: 'Esporte',
    health: 'Saúde',
    education: 'Educação',
    social: 'Assistência Social',
    culture: 'Cultura, História e Pesquisa',
    heraldry: 'Estudos Heráldicos',
    civicMemory: 'Memória de Heróis Cívicos',
    lectures: 'Palestras',
    studies: 'Estudos',
    articles: 'Artigos',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    ctaPrimary: 'Conheça a Ordem',
    ctaSecondary: 'Participe',
  },

  footer: {
    aboutTitle: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
    aboutText:
      'Organização civil brasileira sem fins lucrativos, de caráter fraterno, cultural, filosófico, cívico e filantrópico, dedicada ao desenvolvimento humano, à preservação da memória histórica e ao bem comum.',
    navTitle: 'Navegação',
    institutionalTitle: 'Institucional',
    initiativesTitle: 'Atuação Social',
    knowledgeTitle: 'Conhecimento',
    contactTitle: 'Contato',
    languagesTitle: 'Idiomas',
    socialTitle: 'Redes sociais',
    legalTitle: 'Legal',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Uso',
    cookies: 'Cookies',
    rights: 'Todos os direitos reservados.',
    motif: 'Non nobis, Domine, non nobis, sed nomini tuo ad gloriam',
  },

  a11y: {
    logoAlt: 'Brasão da Ordem dos Cavaleiros Templários',
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
  },

  home: {
    hero: {
      kicker: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
      title: 'Tradição, honra e compromisso com o futuro.',
      lead: 'CREARE FUTURUM MUTATO MODO — Para criar o futuro de um modo diferente.',
      intro:
        'A Ordem Internacional Civil Militar Cavaleiros Templários do Brasil é uma organização civil brasileira dedicada à valorização dos princípios cavalheirescos, ao desenvolvimento humano, à preservação da memória histórica e à promoção de iniciativas culturais, educacionais e filantrópicas.',
      primaryCta: 'Conheça a Ordem',
      secondaryCta: 'Conheça nossa história',
      bridgeAlt: 'Identidade institucional da OICMCTB',
    },
    doors: {
      kicker: 'Conheça a OICMCTB',
      title: 'Cada espaço leva a uma área da Ordem',
      lead: 'Escolha por onde começar sua visita. Você pode percorrer todos os espaços quando quiser.',
      items: {
        order: {
          label: 'A Ordem',
          text: 'Conheça nossa identidade, missão, valores e informações institucionais.',
          cta: 'Entrar',
        },
        history: {
          label: 'Nossa História',
          text: 'Conheça a trajetória da Ordem Internacional Civil Militar Cavaleiros Templários do Brasil.',
          cta: 'Conhecer a história',
        },
        missionVisionValues: {
          label: 'Missão, Visão e Valores',
          text: 'Conheça a missão, a visão, os valores, o lema e a filosofia de trabalho da Ordem.',
          cta: 'Conhecer nossos propósitos',
        },
        coatOfArms: {
          label: 'Brasão e Simbologia',
          text: 'Conheça os elementos heráldicos, o selo, o lema e os significados institucionais.',
          cta: 'Ver o brasão',
        },
        academy: {
          label: 'Academia (ABTL)',
          text: 'Conheça o braço cultural, acadêmico e literário da Ordem.',
          cta: 'Ver a Academia',
        },
        damas: {
          label: 'Damas Templárias',
          text: 'Conheça o Conselho Nacional das Damas Templárias e sua participação institucional.',
          cta: 'Ver as Damas',
        },
        initiatives: {
          label: 'Atuação Social',
          text: 'Conheça as frentes de atuação da Ordem em benefício da sociedade.',
          cta: 'Conhecer iniciativas',
        },
        contact: {
          label: 'Contato',
          text: 'Entre em contato com a Ordem Internacional Civil Militar Cavaleiros Templários do Brasil.',
          cta: 'Fale conosco',
        },
      },
    },
    about: {
      kicker: 'Sobre a Ordem',
      title: 'Quem somos',
      lead: 'Organização civil brasileira sem fins lucrativos, de caráter fraterno, cultural, filosófico, cívico e filantrópico.',
      body: 'A Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) é uma organização civil brasileira dedicada à valorização dos princípios cavalheirescos, ao desenvolvimento humano, à preservação da memória histórica e à promoção de iniciativas culturais, educacionais e filantrópicas.',
      highlights: {
        identity: 'Identidade',
        identityText: 'Ordem civil brasileira, independente, sem vínculo institucional com a Maçonaria.',
        origin: 'Origem',
        originText: 'Formalizada como pessoa jurídica em 2021, sob a liderança do Grão-Mestre Roberto Aguiar Guazzelli.',
        values: 'Valores',
        valuesText: 'Fé, esperança, caridade, justiça, prudência, fortaleza e temperança.',
        today: 'Hoje',
        todayText: 'Iniciativas culturais, educacionais e filantrópicas em benefício das comunidades.',
      },
      cta: 'Conheça a Ordem',
      ctaSecondary: 'Nossa história',
    },
    quote: {
      text: 'Nossa missão é, principalmente, aqui e agora.',
      source: 'Dos Ensinamentos da Ordem',
    },
    purposes: {
      kicker: 'Missão, Visão e Valores',
      title: 'Princípios que orientam nossa atuação',
      lead: 'A missão da OICMCTB é contribuir para criar o futuro de um modo diferente, promovendo o desenvolvimento humano e a preservação da memória histórica.',
      pillars: {
        mission: {
          title: 'Missão',
          text: 'Contribuir para criar o futuro de um modo diferente, promovendo o desenvolvimento humano e a preservação da memória histórica.',
        },
        vision: {
          title: 'Visão',
          text: 'Ser reconhecida como uma ordem templária legitimamente brasileira, comprometida com o bem comum.',
        },
        values: {
          title: 'Valores',
          text: 'Fé, esperança, caridade, justiça, prudência, fortaleza e temperança.',
        },
        motto: {
          title: 'Lema',
          text: 'CREARE FUTURUM MUTATO MODO — Para criar o futuro de um modo diferente.',
        },
      },
      cta: 'Conhecer nossos propósitos',
    },
    initiatives: {
      kicker: 'Atuação Social',
      title: 'Frentes de Atuação em Benefício da Sociedade',
      lead: 'A Ordem utiliza seus valores para contribuir com a sociedade contemporânea por meio de diversas frentes de atuação.',
      items: {
        environment: {
          title: 'Meio Ambiente',
          text: 'Proteção da Amazônia, conscientização ambiental e respeito à Terra e à diversidade da vida.',
        },
        sport: {
          title: 'Esporte',
          text: 'Incentivo ao esporte, integração social e desenvolvimento humano.',
        },
        health: {
          title: 'Saúde',
          text: 'Ações de apoio à saúde, ao bem-estar e à assistência aos que mais precisam.',
        },
        education: {
          title: 'Educação',
          text: 'Projetos voltados ao acesso à educação, à cultura e ao conhecimento.',
        },
        social: {
          title: 'Assistência Social',
          text: 'Amparo aos necessitados e iniciativas de solidariedade e apoio comunitário.',
        },
        culture: {
          title: 'Cultura, História e Pesquisa',
          text: 'Preservação da memória histórica e cultural, incluindo estudos heráldicos.',
        },
        heraldry: {
          title: 'Estudos Heráldicos',
          text: 'Estudos e publicações sobre heráldica, incluindo o brasão e o selo da OICMCTB.',
        },
        civicMemory: {
          title: 'Memória de Heróis Cívicos',
          text: 'Valorização da memória de heróis cívicos locais e regionais.',
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
      ctaSecondary: 'Entenda como funciona a dedução no IRPF',
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
      lead: 'Organização civil brasileira sem fins lucrativos, de caráter fraterno, cultural, filosófico, cívico e filantrópico.',
      intro:
        'A Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) é uma organização civil independente e não constitui uma Ordem Maçônica. A instituição não possui vínculo institucional com a Maçonaria.',
    },
    history: {
      kicker: 'História da Ordem',
      title: 'História',
      lead: 'A trajetória da OICMCTB desde sua idealização até a formalização jurídica em 2021.',
    },
    purposes: {
      kicker: 'Missão, Visão e Valores',
      title: 'Missão, Visão e Valores',
      lead: 'Missão, visão, valores, lema e filosofia de trabalho da Ordem Internacional Civil Militar Cavaleiros Templários do Brasil.',
    },
    teachings: {
      kicker: 'Ensinamentos',
      title: 'Ensinamentos',
      lead: 'Estudos, conhecimento, cultura e desenvolvimento pessoal na tradição cavalheiresca.',
    },
    initiatives: {
      kicker: 'Atuação Social',
      title: 'Frentes de Atuação',
      lead: 'Áreas de atuação da OICMCTB em benefício da sociedade.',
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
      lead: 'A Ordem Internacional Civil Militar Cavaleiros Templários do Brasil está abrindo as suas portas para você.',
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
    brasao: {
      kicker: 'Brasão de Armas',
      title: 'Brasão de Armas e Simbologia',
      lead: 'Elementos heráldicos, cores, selo, lema e significados institucionais do brasão da OICMCTB.',
    },
    abtl: {
      kicker: 'Academia Brasileira Templária de Letras',
      title: 'Academia Brasileira Templária de Letras — ABTL',
      lead: 'Braço cultural, acadêmico e literário associado à OICMCTB.',
    },
    damas: {
      kicker: 'Damas Templárias',
      title: 'Conselho Nacional das Damas Templárias',
      lead: 'Participação institucional das mulheres na OICMCTB.',
    },
    informacoes: {
      kicker: 'Informações Institucionais',
      title: 'Informações Institucionais',
      lead: 'Dados institucionais da Ordem Internacional Civil Militar Cavaleiros Templários do Brasil.',
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
      events: 'Eventos',
      donations: 'Doações',
    },
    ctaTitle: 'Não encontrou sua resposta?',
    ctaText: 'Fale conosco e teremos prazer em ajudar.',
    ctaButton: 'Entrar em contato',
  },

  affiliation: {
    purposeTitle: 'Por que se afiliar',
    purposeText:
      'O propósito da Ordem é reunir homens e mulheres em torno dos valores cavalheirescos, do desenvolvimento humano, da cidadania, da memória histórica e do bem comum.',
    whoTitle: 'Quem pode se afiliar',
    whoText:
      'Pessoas de ambos os sexos, imbuídas do propósito de resgatar valores que caíram no esquecimento e de construir um mundo livre e justo. Buscamos pessoas livres e de bons costumes, devotadas à família e corretas em seu procedimento com os demais.',
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
      study: 'Acesso aos estudos e ensinamentos da Ordem.',
      fraternity: 'Fraternidade e ajuda mútua entre os membros.',
      events: 'Participação em eventos e cerimônias.',
      growth: 'Oportunidades de desenvolvimento pessoal e cultural.',
    },
    responsibilitiesTitle: 'Responsabilidades',
    responsibilitiesText:
      'O membro deve buscar o próprio aperfeiçoamento moral e intelectual, dedicar disciplina ao estudo e contribuir com as taxas e mensalidades que sustentam a Ordem.',
    feesTitle: 'Taxa de registro e mensalidade',
    feesText:
      'A Ordem é estritamente uma fraternidade. Há contribuições pagáveis mensalmente e uma taxa de registro individual, destinadas a um fundo geral de operações, a atividades humanitárias e beneficentes e às pesquisas da Ordem. Não há outras cotas obrigatórias.',
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
    irpfTitle: 'Dedução no IRPF',
    irpfText:
      'As informações sobre possibilidade de dedução no Imposto de Renda devem observar exclusivamente as regras e as informações oficiais fornecidas pela Ordem, com base em orientação jurídica e contábil própria.',
    irpfCta: 'Entenda como funciona a dedução no IRPF',
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
    howText:
      'A Ordem organiza, em conjunto com parceiros locais, uma programação de atividades e encontros aberta à comunidade da cidade.',
    whyTitle: 'Por que existe',
    whyText:
      'Porque a tradição só permanece viva quando se traduz em serviço concreto à sociedade.',
    participateTitle: 'Como uma cidade pode participar',
    participateText:
      'Cidades interessadas podem manifestar interesse por meio do formulário. Nossa equipe orientará sobre requisitos, calendário e apoio disponível.',
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
    emailLabel: 'E-mail institucional',
    emailCta: 'Enviar e-mail',
    hoursLabel: 'Atendimento',
    hoursValue: 'Consulte a Ordem para horários de atendimento.',
    addressPending: 'Endereço não divulgado pela instituição.',
    phonePending: 'Telefone não divulgado pela instituição.',
    emailPending:
      'O e-mail institucional é oicmctb@gmail.com. Não disponibilizado como link clicável até validação pela Ordem.',
    socialPending:
      'Redes sociais: @oicmctb (Facebook e Instagram). Não disponibilizadas como links até validação pela Ordem.',
  },

  legal: {
    privacyTitle: 'Política de Privacidade',
    termsTitle: 'Termos de Uso',
    cookiesTitle: 'Cookies',
    updatedLabel: 'Última atualização',
    placeholderNote:
      'Este documento é um modelo inicial e deve ser revisado e complementado pela Ordem com o texto jurídico oficial.',
  },

  notFound: {
    kicker: 'Página não encontrada',
    title: 'Este corredor do castelo não existe',
    text: 'A página que você procura pode ter sido movida ou não existe. Retorne à entrada e explore a Ordem.',
    cta: 'Voltar ao início',
  },
};

export type Dictionary = typeof pt;