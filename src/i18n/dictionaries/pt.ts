/**
 * Portuguese (pt-BR) dictionary — the source of truth.
 *
 * `Dictionary` is derived from this object, so every other locale is
 * type-checked against these keys. Unlike the previous version, the other
 * locales are complete: no institutional text silently falls back to
 * Portuguese. `npm run check:i18n` verifies key and array coverage.
 */
export const pt = {
  meta: {
    siteName: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
    shortName: 'OICMCTB',
    tagline: 'Tradição cavalheiresca, cultura e serviço ao bem comum.',
    defaultDescription:
      'Conheça a OICMCTB: identidade institucional, história, brasão, Academia Brasileira Templária de Letras, Damas Templárias e frentes de atuação cultural e social.',
    ogLocale: 'pt_BR',
  },

  common: {
    skipToContent: 'Ir para o conteúdo principal',
    enter: 'Entrar',
    home: 'Início',
    breadcrumb: 'Você está em',
    onThisPage: 'Nesta página',
  },

  language: {
    label: 'Idioma',
    switchTo: 'Mudar idioma para',
    current: 'Idioma atual',
  },

  nav: {
    label: 'Navegação principal',
    home: 'Início',
    order: 'A Ordem',
    heritage: 'História e Brasão',
    society: 'Cultura e Atuação Social',
    participate: 'Participar e Contato',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    ctaPrimary: 'Conheça a Ordem',
    ctaSecondary: 'Participe',
  },

  footer: {
    aboutTitle: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
    aboutText:
      'Organização civil brasileira sem fins lucrativos, de caráter fraterno, cultural, filosófico, cívico e filantrópico, dedicada ao desenvolvimento humano, à preservação da memória histórica e ao bem comum.',
    institutionalTitle: 'Institucional',
    contactTitle: 'Contato',
    legalTitle: 'Legal',
    languagesTitle: 'Idiomas',
    socialTitle: 'Redes sociais',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Uso',
    cookies: 'Cookies',
    rights: 'Todos os direitos reservados.',
    motto: 'CREARE FUTURUM MUTATO MODO',
    dataNote: 'Dados institucionais informados pela Ordem.',
  },

  a11y: {
    decorative: 'Elemento decorativo',
    requiredField: 'campo obrigatório',
    formError: 'Não foi possível enviar agora. Tente novamente ou escreva para nosso e-mail.',
    formOpening: 'Abrindo seu programa de e-mail…',
  },

  forms: {
    name: 'Nome completo',
    email: 'E-mail',
    phone: 'Telefone',
    city: 'Cidade',
    subject: 'Assunto',
    message: 'Mensagem',
    interest: 'Conte-nos sobre seu interesse em conhecer ou participar da Ordem.',
    send: 'Enviar mensagem',
    consent: 'Autorizo o uso dos meus dados para resposta a este contato.',
    requiredNote: 'Campos marcados com * são obrigatórios.',
    mailSubject: 'Mensagem pelo site da OICMCTB',
  },

  home: {
    hero: {
      kicker: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
      title: 'Tradição cavalheiresca, cultura e serviço ao bem comum.',
      lead: 'CREARE FUTURUM MUTATO MODO — Para criar o futuro de um modo diferente.',
      intro:
        'A Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) é uma organização civil brasileira sem fins lucrativos, de caráter fraterno, cultural, filosófico, cívico e filantrópico.',
      primaryCta: 'Conheça a Ordem',
      secondaryCta: 'História e Brasão',
    },
    about: {
      kicker: 'Quem somos',
      title: 'Uma ordem templária brasileira, civil e autônoma',
      lead:
        'A OICMCTB une a valorização das tradições cavalheirescas ao compromisso contemporâneo com o desenvolvimento humano, a memória histórica, o conhecimento e o serviço à sociedade.',
      body:
        'Formalizada como pessoa jurídica em 2021, segundo as informações institucionais fornecidas, a Ordem orienta suas atividades por princípios como fé, esperança, caridade, justiça, prudência, fortaleza e temperança. Sua proposta inclui o fortalecimento dos vínculos fraternos, a pesquisa histórica, a valorização da cultura, o reconhecimento do mérito cívico e o incentivo a iniciativas que contribuam para o bem comum.',
      highlights: {
        identity: 'Identidade',
        identityText: 'Organização civil brasileira independente, sem vínculo institucional com a Maçonaria.',
        origin: 'Formalização',
        originText: 'Pessoa jurídica desde 2021, sob o Grão-Mestrado de Roberto Aguiar Guazzelli.',
        values: 'Valores',
        valuesText: 'Fé em Deus, esperança, caridade, justiça, prudência, fortaleza e temperança.',
        today: 'Atuação',
        todayText: 'Cultura, pesquisa histórica, educação, saúde, esporte, meio ambiente e assistência social.',
      },
      cta: 'Conheça a Ordem',
      ctaSecondary: 'Nossa história e brasão',
    },
    motto: {
      title: 'Lema oficial',
      latin: 'CREARE FUTURUM MUTATO MODO',
      translation: 'Para criar o futuro de um modo diferente.',
      text: 'O lema sintetiza a orientação institucional de construir o futuro por meio de valores, atitudes e ações comprometidas com o bem comum.',
    },
    values: {
      kicker: 'Valores',
      title: 'Sete valores orientam a Ordem',
      lead: 'Os valores institucionais são vividos como compromissos de conduta e de serviço.',
      items: ['Fé em Deus.', 'Esperança.', 'Caridade.', 'Justiça.', 'Prudência.', 'Fortaleza.', 'Temperança.'],
    },
    independence: {
      kicker: 'Independência institucional',
      title: 'Uma organização civil, não maçônica',
      text:
        'A OICMCTB é uma organização civil independente e não constitui uma Ordem Maçônica. A instituição não possui vínculo institucional com a Maçonaria. A eventual participação de pessoas que também sejam membros da Maçonaria ocorre exclusivamente em caráter individual, mediante ingresso e aceitação formal como membros da OICMCTB, sem estabelecer vínculo institucional entre as organizações.',
      cta: 'Saiba mais em A Ordem',
    },
    doors: {
      kicker: 'Conheça a OICMCTB',
      title: 'Por onde começar',
      lead: 'Escolha o assunto que deseja conhecer. Toda a instituição está organizada em quatro páginas principais.',
      items: {
        order: {
          label: 'A Ordem',
          text: 'Identidade, história, missão, visão, valores, filosofia e informações institucionais.',
          cta: 'Conhecer a Ordem',
        },
        heritage: {
          label: 'História e Brasão',
          text: 'A construção da identidade institucional, o selo e o significado do brasão de armas.',
          cta: 'Ver história e brasão',
        },
        society: {
          label: 'Cultura e Atuação Social',
          text: 'ABTL, Damas Templárias e as frentes culturais, educacionais e sociais da Ordem.',
          cta: 'Conhecer a atuação',
        },
        participate: {
          label: 'Participar e Contato',
          text: 'Como manifestar interesse, falar com a Ordem e obter orientações sobre contribuições.',
          cta: 'Participar e contatar',
        },
      },
    },
    society: {
      kicker: 'Cultura e Atuação Social',
      title: 'Uma tradição que se traduz em serviço',
      lead:
        'A OICMCTB reúne iniciativas culturais, educacionais, filantrópicas e de preservação da memória histórica.',
      items: [
        {
          title: 'Academia Brasileira Templária de Letras (ABTL)',
          text: 'Braço cultural e literário da Ordem, voltado à pesquisa histórica, à produção intelectual e às publicações culturais.',
        },
        {
          title: 'Conselho Nacional das Damas Templárias',
          text: 'Participação das mulheres na vida cultural, institucional e comunitária da Ordem.',
        },
        {
          title: 'Educação, saúde e assistência social',
          text: 'Frentes de atuação voltadas ao conhecimento, ao bem-estar e ao amparo aos que mais precisam.',
        },
        {
          title: 'Meio ambiente e memória cívica',
          text: 'Proteção da Amazônia, conscientização ambiental e valorização da memória de heróis cívicos locais.',
        },
      ],
      cta: 'Conheça a atuação social',
    },
    finalCta: {
      kicker: 'Participe',
      title: 'Conheça a Ordem e manifeste seu interesse',
      lead: 'Para conhecer, contatar ou manifestar interesse, a Ordem está à disposição.',
      primary: 'Participar e Contato',
      secondary: 'Falar com a Ordem',
    },
  },

  pages: {
    order: {
      kicker: 'A Ordem',
      title: 'A Ordem',
      lead: 'Identidade, história, missão, visão, valores, filosofia e informações institucionais da OICMCTB.',
    },
    heritage: {
      kicker: 'Identidade e simbologia',
      title: 'História e Brasão',
      lead: 'A trajetória da identidade institucional da OICMCTB e o significado do selo e do brasão de armas.',
    },
    society: {
      kicker: 'Cultura e Atuação Social',
      title: 'Cultura e Atuação Social',
      lead: 'A dimensão cultural, literária e comunitária da OICMCTB.',
    },
    participate: {
      kicker: 'Participe',
      title: 'Participar e Contato',
      lead: 'Informações para conhecer, contatar e manifestar interesse na OICMCTB.',
    },
    privacy: {
      kicker: 'Legal',
      title: 'Política de Privacidade',
      lead: 'Como a OICMCTB trata os dados enviados por meio deste site.',
    },
    terms: {
      kicker: 'Legal',
      title: 'Termos de Uso',
      lead: 'Condições de uso do site institucional da OICMCTB.',
    },
    cookies: {
      kicker: 'Legal',
      title: 'Cookies',
      lead: 'Informações sobre o uso de cookies neste site.',
    },
  },

  order: {
    kicker: 'A Ordem',
    title: 'A Ordem',
    lead: 'Identidade, história, missão, visão, valores, filosofia e informações institucionais da OICMCTB.',
    sections: [
      {
        id: 'quem-somos',
        title: 'Quem somos',
        paragraphs: [
          'A Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) é uma organização civil brasileira sem fins lucrativos, de caráter fraterno, cultural, filosófico, cívico e filantrópico.',
          'A instituição busca unir a valorização das tradições cavalheirescas ao compromisso contemporâneo com o desenvolvimento humano, a preservação da memória histórica, o conhecimento e o serviço à sociedade.',
          'Formalizada como pessoa jurídica em 2021, segundo as informações institucionais fornecidas, a Ordem orienta suas atividades por princípios como fé, esperança, caridade, justiça, prudência, fortaleza e temperança.',
          'Sua proposta inclui o fortalecimento dos vínculos fraternos, a pesquisa histórica, a valorização da cultura, o reconhecimento do mérito cívico e o incentivo a iniciativas que contribuam para o bem comum.',
        ],
      },
      {
        id: 'historia',
        title: 'História da OICMCTB',
        paragraphs: [
          'A idealização e a liderança da Ordem Internacional Civil Militar Cavaleiros Templários do Brasil são atribuídas ao Grão-Mestre Roberto Aguiar Guazzelli, conforme o material institucional fornecido.',
          'A Ordem foi formalizada como pessoa jurídica em 2021. Esse marco está associado à inscrição "MMXXI" presente no selo institucional.',
          'A construção da identidade institucional incluiu o desenvolvimento do selo e do brasão de armas, a valorização dos ideais cavalheirescos e a atuação cultural e literária da Academia Brasileira Templária de Letras (ABTL).',
          'A história da organização brasileira contemporânea é distinta da história medieval dos Cavaleiros Templários. A utilização de símbolos e a inspiração em uma tradição não comprovam, por si só, continuidade jurídica ou institucional direta com a ordem medieval.',
          'A história da identidade visual e a explicação dos elementos heráldicos são apresentadas na página História e Brasão.',
        ],
      },
      {
        id: 'missao-visao-e-valores',
        title: 'Missão, visão e valores',
        paragraphs: [
          'Missão: contribuir para criar o futuro de um modo diferente, promovendo o desenvolvimento humano, a preservação da história dos cavaleiros templários e a manutenção da memória dos heróis cívicos locais, por meio de ações comunitárias, projetos educacionais e iniciativas de reconhecimento do mérito, respeitando o modo de vida, as tradições e as leis locais.',
          'Visão: ser reconhecida internacionalmente como uma ordem templária legitimamente brasileira, uma organização civil sem fins lucrativos que contribui de forma efetiva para a melhoria da vida de seus associados e das comunidades em que está inserida, com fé em Deus, respeito às tradições locais e compromisso com a preservação da memória histórica dos templários e dos heróis cívicos regionais.',
          'A visão expressa um propósito institucional. Sua formulação não constitui, por si só, alegação de reconhecimento internacional já alcançado.',
          'Valores: fé em Deus, esperança, caridade, justiça, prudência, fortaleza e temperança.',
        ],
      },
      {
        id: 'lema',
        title: 'Lema oficial',
        paragraphs: [
          'CREARE FUTURUM MUTATO MODO.',
          'Tradução institucional: "Para criar o futuro de um modo diferente."',
          'O lema permanece idêntico em todas as versões do site. A tradução explicativa pode variar conforme o idioma.',
        ],
      },
      {
        id: 'filosofia-e-mistica',
        title: 'Filosofia de trabalho e mística',
        paragraphs: [
          'A filosofia de trabalho da Ordem orienta seus membros a dar prova de humildade, reconhecer e corrigir os próprios erros, agir com sinceridade, amar a justiça, ser misericordiosos, demonstrar fé, viver na verdade, suportar adversidades quando necessário e servir ao bem comum.',
          'A mística da OICMCTB é compreendida como uma dimensão filosófica e espiritual da vivência dos valores: uma busca de sentido, de consciência, de introspecção e de responsabilidade individual, orientada ao serviço do coletivo.',
          'A Ordem apresenta sua atuação com transparência. Sua mística não é descrita como conjunto de poderes sobrenaturais, segredos ou práticas ocultas, e a instituição não se apresenta como detentora de conhecimentos reservados.',
          'A dimensão espiritual é vivida no respeito à fé, à consciência e à diversidade das pessoas, sem converter a Ordem em uma instituição eclesiástica.',
        ],
      },
      {
        id: 'independencia',
        title: 'Independência em relação à Maçonaria',
        paragraphs: [
          'A Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) é uma organização civil independente e não constitui uma Ordem Maçônica. A instituição não possui vínculo institucional com a Maçonaria.',
          'A eventual participação de pessoas que também sejam membros da Maçonaria ocorre exclusivamente em caráter individual, mediante ingresso e aceitação formal como membros da OICMCTB, sem estabelecer vínculo institucional entre as organizações.',
          'A ausência de vínculo institucional não implica proibição ou restrição à participação individual de pessoas que também integrem a Maçonaria.',
        ],
      },
    ],
    info: {
      title: 'Informações institucionais',
      lead: 'Dados institucionais da Ordem Internacional Civil Militar Cavaleiros Templários do Brasil.',
      note:
        'Dados cadastrais informados pela Ordem. Eles não substituem certidão ou consulta aos registros oficiais.',
      items: [
        { label: 'Razão social', value: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil' },
        { label: 'CNPJ', value: '42.071.770/0001-75' },
        { label: 'Grão-Mestrado', value: 'Roberto Aguiar Guazzelli' },
        { label: 'Conselho Nacional das Damas Templárias', value: 'Sueli Teodoro — Primeira-Dama' },
        { label: 'Braço cultural e literário', value: 'Academia Brasileira Templária de Letras (ABTL)' },
        { label: 'E-mail institucional', value: 'oicmctb@gmail.com' },
        { label: 'Redes sociais', value: '@oicmctb — Facebook e Instagram' },
      ],
    },
  },

  heritage: {
    kicker: 'Identidade e simbologia',
    title: 'História e Brasão',
    lead: 'A trajetória da identidade institucional da OICMCTB e o significado do selo e do brasão de armas.',
    intro:
      'Esta página reúne a história da identidade institucional da Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) e a explicação dos elementos do selo e do brasão de armas, com base no material heráldico fornecido pela instituição.',
    history: {
      title: 'A construção da identidade institucional',
      paragraphs: [
        'A idealização e a liderança da OICMCTB são atribuídas ao Grão-Mestre Roberto Aguiar Guazzelli. A Ordem foi formalizada como pessoa jurídica em 2021, marco associado à inscrição "MMXXI" do selo.',
        'O desenvolvimento do selo e do brasão de armas fez parte da construção da identidade institucional, respeitando a tradição heráldica e os valores cavalheirescos. A atuação cultural e literária da Academia Brasileira Templária de Letras (ABTL) integra esse percurso.',
        'A origem histórica do modelo iconográfico dos dois cavaleiros é distinta da criação do selo específico da OICMCTB. A inspiração em uma tradição não comprova continuidade jurídica ou institucional com a ordem medieval.',
      ],
    },
    seal: {
      id: 'selo',
      title: 'O selo institucional',
      paragraphs: [
        'O selo redondo apresenta dois cavaleiros templários compartilhando o mesmo cavalo, composição inspirada na iconografia templária histórica.',
        'Segundo a interpretação institucional apresentada pela OICMCTB, os cavaleiros deslocam-se visualmente da direita para a esquerda, em sentido oposto ao da representação tradicional referida no documento.',
        'Essa inversão simboliza, para a Ordem:',
        'A inscrição que acompanha o selo é "SIGNUM TEMPLARIORUM BRASILIAE", traduzida como "Sinal dos Templários Brasileiros". Pequenas cruzes de Malta separam as palavras da inscrição, conforme a representação oficial.',
        'A inscrição "MMXXI" corresponde a 2021, ano associado à formalização da instituição como pessoa jurídica.',
        'Esses significados são apresentados como interpretação da própria OICMCTB, e não como fato histórico universalmente estabelecido.',
      ],
      items: [
        'Uma postura de contraponto à inversão de valores do mundo contemporâneo.',
        'A rejeição simbólica de um estado de coisas considerado contrário aos princípios da Ordem.',
        'O retorno ao caminho da retidão, das virtudes morais e da fé.',
        'A necessidade de resgatar valores antigos sem deixar de olhar para o futuro.',
      ],
    },
    shield: {
      id: 'brasao',
      title: 'O brasão de armas: escudo',
      paragraphs: [
        'O escudo é clássico, ogival e lanceolado, com divisão simétrica em quatro partes.',
        'As duas faixas perpendiculares que se cruzam no centro formam uma cruz grega vermelha.',
        'Os campos do escudo utilizam verde, denominado Sinople na descrição heráldica; amarelo, denominado Ouro; vermelho, denominado Gules; e prata no contorno e nos elementos descritos.',
        'Segundo a interpretação do documento, as cores verde e amarela remetem às cores nacionais brasileiras, e a cruz vermelha evoca os ideais templários, a justiça e a verdade.',
        'No centro do escudo está o selo redondo com os dois cavaleiros.',
      ],
    },
    helmet: {
      id: 'elmo',
      title: 'O elmo',
      paragraphs: [
        'O elmo é primitivo, sem virol, representado a três quartos e em prata. Ele integra a composição heráldica como elemento da identidade cavalheiresca da Ordem.',
      ],
    },
    mantling: {
      id: 'paquifes',
      title: 'Os paquifes',
      paragraphs: [
        'Os paquifes são os ornamentos laterais da composição, descritos com elementos em azul, ouro e prata.',
        'O documento relaciona sua composição à tradição heráldica da família Guazzelli. Essa referência familiar é apresentada como informação do material institucional, sem extrapolar para alegações de linhagem medieval.',
      ],
    },
    crest: {
      id: 'timbre',
      title: 'O timbre',
      paragraphs: [
        'O timbre é uma cruz de Malta templária, vermelha, com pontas abertas, posicionada na parte superior da composição.',
      ],
    },
    warCry: {
      id: 'grito-de-guerra',
      title: 'O grito de guerra',
      paragraphs: [
        'O grito de guerra é a inscrição latina "CREARE FUTURUM MUTATO MODO", associada à tradução "Para criar o futuro de um modo diferente".',
        'O lema sintetiza a orientação institucional de construir o futuro por meio de valores, atitudes e ações comprometidas com o bem comum.',
      ],
    },
    divisa: {
      id: 'divisa',
      title: 'A divisa',
      paragraphs: [
        'A divisa é um listel amarelo ou ouro que apresenta a sigla "O.I.C.M.C.T.B.".',
        'A sigla corresponde a Ordem Internacional Civil Militar Cavaleiros Templários do Brasil.',
      ],
    },
    colors: {
      id: 'cores',
      title: 'Cores oficiais',
      paragraphs: [
        'O documento apresenta referências cromáticas em RGB, CMYK e Pantone para alguns elementos. Há detalhes que precisam ser conferidos entre as descrições textuais e os códigos informados.',
        'O arquivo vetorial oficial do brasão é a principal referência para a representação visual. As cores oficiais não devem ser alteradas com base apenas na interpretação dos números.',
      ],
      items: [
        'Prata: RGB 208, 211, 212; Pantone 427 C.',
        'Vermelho Gules: RGB 239, 51, 64; Pantone Red 032 C.',
        'Verde Sinople: RGB 0, 150, 57; Pantone 355 C.',
        'Amarelo Ouro: RGB 254, 221, 0.',
        'Azul Blau: RGB 16, 6, 159; Pantone Blue 072 C.',
        'Preto Sable: RGB 45, 41, 38; Pantone Black C.',
      ],
    },
    fidelity: {
      id: 'fidelidade-grafica',
      title: 'Fidelidade gráfica',
      paragraphs: [
        'O brasão oficial é material institucional e deve ser tratado com preservação de proporção, legibilidade e cores. Não devem ser acrescentados elementos que não façam parte da composição oficial.',
        'O site não recria o brasão por aproximação nem o substitui por uma versão gerada artificialmente. A representação oficial em arquivo vetorial é mantida pela Ordem e deve ser utilizada em aplicações que exijam a arte final.',
      ],
    },
  },

  society: {
    kicker: 'Cultura e Atuação Social',
    title: 'Cultura e Atuação Social',
    lead: 'A dimensão cultural, literária e comunitária da OICMCTB.',
    intro:
      'A Ordem entende a tradição cavalheiresca como compromisso com o conhecimento, a cultura e o serviço ao bem comum. Esta página reúne o braço cultural da instituição, a participação das Damas Templárias e suas frentes de atuação.',
    abtl: {
      kicker: 'Braço cultural e literário',
      title: 'Academia Brasileira Templária de Letras (ABTL)',
      paragraphs: [
        'A Academia Brasileira Templária de Letras (ABTL) é o braço cultural e literário associado à Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB), conforme a descrição institucional fornecida.',
        'Sua atuação está voltada à pesquisa histórica, à literatura e à produção intelectual, às publicações culturais, aos estudos heráldicos, à preservação das tradições e ao incentivo às artes, às ciências e à produção de conhecimento.',
        'Estudos teológicos são considerados quando compatíveis com a atuação efetiva da Academia. A Ordem não atribui à ABTL membros, publicações, prêmios, projetos ou cargos não confirmados.',
      ],
      areasTitle: 'Frentes de atuação da ABTL',
      areas: [
        'Pesquisa histórica.',
        'Literatura e produção intelectual.',
        'Publicações culturais.',
        'Estudos heráldicos.',
        'Preservação das tradições.',
        'Incentivo às artes, às ciências e à produção de conhecimento.',
        'Estudos teológicos, quando compatíveis com a atuação efetiva.',
      ],
    },
    ladies: {
      kicker: 'Conselho Nacional das Damas Templárias',
      title: 'Damas Templárias',
      paragraphs: [
        'O Conselho Nacional das Damas Templárias participa da vida cultural, institucional e comunitária da Ordem, contribuindo para suas iniciativas e para o fortalecimento dos vínculos fraternos.',
        'A participação das mulheres é valorizada sem que sejam criadas atribuições, projetos ou responsabilidades não documentados.',
      ],
      firstLadyLabel: 'Primeira-Dama',
      firstLadyName: 'Sueli Teodoro',
      firstLadyNote:
        'Identificação conforme a informação institucional fornecida. O título de Primeira-Dama não é convertido automaticamente em presidência, direção executiva ou outra função não confirmada.',
    },
    areas: {
      kicker: 'Frentes de atuação',
      title: 'Áreas de atuação e objetivos institucionais',
      lead: 'As áreas abaixo são frentes de trabalho e objetivos da Ordem, conforme o material institucional.',
      items: [
        {
          title: 'Assistência social',
          text: 'Amparo aos necessitados e iniciativas de solidariedade e apoio comunitário.',
        },
        {
          title: 'Educação',
          text: 'Apoio ao acesso à educação, à cultura e ao conhecimento, compreendendo a aprendizagem como caminho ao longo de toda a vida.',
        },
        {
          title: 'Saúde',
          text: 'Ações de apoio à saúde, ao bem-estar e à assistência aos que mais precisam.',
        },
        {
          title: 'Esporte',
          text: 'Incentivo à prática esportiva como disciplina, integração social e desenvolvimento humano.',
        },
        {
          title: 'Meio ambiente',
          text: 'Proteção da Amazônia, conscientização ambiental e respeito à Terra e à diversidade da vida.',
        },
        {
          title: 'Cultura',
          text: 'Valorização da cultura, das tradições e da produção intelectual.',
        },
        {
          title: 'Pesquisa histórica',
          text: 'Preservação da memória histórica e estímulo à pesquisa, incluindo estudos heráldicos.',
        },
        {
          title: 'Ações comunitárias',
          text: 'Iniciativas de aproximação com as comunidades e de serviço ao bem comum.',
        },
        {
          title: 'Memória de heróis cívicos',
          text: 'Valorização da memória de heróis cívicos locais e regionais e reconhecimento do mérito cívico.',
        },
      ],
      note:
        'A apresentação dessas áreas não implica afirmar que todas já possuam projetos em execução. Quando houver projetos documentados, eles serão divulgados com nome, objetivo, público, local, período e resultados.',
    },
    publications: {
      kicker: 'Conhecimento',
      title: 'Publicações e estudos',
      paragraphs: [
        'A Ordem e a ABTL incentivam a pesquisa histórica, a produção intelectual e as publicações culturais. Quando houver publicações disponíveis e verificadas, elas serão divulgadas nesta página.',
        'Não são apresentados artigos, palestras, prêmios ou publicações fictícias para preencher a seção.',
      ],
    },
    cta: {
      title: 'Conheça também a Ordem',
      lead: 'A história, a missão e os valores institucionais estão reunidos em A Ordem.',
      primary: 'A Ordem',
      secondary: 'Participar e Contato',
    },
  },

  participate: {
    kicker: 'Participe',
    title: 'Participar e Contato',
    lead: 'Informações para conhecer, contatar e manifestar interesse na OICMCTB.',
    interest: {
      kicker: 'Como participar',
      title: 'Manifeste seu interesse',
      paragraphs: [
        'O primeiro passo é conhecer a Ordem, sua história, sua missão e suas frentes de atuação.',
        'Quem deseja conhecer melhor a instituição ou manifestar interesse em participar pode entrar em contato pelo formulário desta página ou pelo e-mail institucional.',
        'A Ordem orientará sobre as etapas, os critérios e as condições vigentes. Não são publicadas taxas, mensalidades, benefícios ou regras de ingresso sem validação institucional.',
      ],
      stepsTitle: 'Um caminho simples',
      steps: [
        { title: 'Conheça a Ordem', text: 'Leia a apresentação institucional, a história e a atuação cultural e social.' },
        { title: 'Entre em contato', text: 'Envie sua mensagem pelo formulário, apresentando seu interesse.' },
        { title: 'Receba orientação', text: 'A Ordem responderá com as informações aplicáveis ao seu caso.' },
      ],
    },
    activities: {
      kicker: 'Atividades e cerimônias',
      title: 'Encontros, cerimônias e solenidades',
      paragraphs: [
        'As cerimônias, investiduras, elevações e concessões de títulos e honrarias são atos civis e cavalheirescos da Ordem.',
        'Quando confirmado pela instituição, esses encontros podem ser abertos a convidados, familiares e à comunidade.',
        'Os títulos e honrarias concedidos pela OICMCTB não equivalem a cargos militares oficiais, diplomas acadêmicos, condecorações governamentais ou títulos públicos.',
        'Não há calendário fictício nesta página. Eventos e atividades confirmados serão divulgados pelos canais oficiais da Ordem.',
      ],
    },
    donations: {
      kicker: 'Contribuições',
      title: 'Doações e contribuições',
      paragraphs: [
        'A OICMCTB não divulga nesta página dados bancários, valores ou formas de pagamento. Também não são apresentados benefícios fiscais, deduções no imposto de renda ou incentivos tributários como garantidos.',
        'Para receber orientações sobre eventuais contribuições, entre em contato com a Ordem pelos canais oficiais.',
      ],
      note: 'A Ordem não presta consultoria tributária. Informações fiscais devem ser confirmadas com a instituição e com profissional habilitado.',
    },
    contact: {
      kicker: 'Contato',
      title: 'Fale com a OICMCTB',
      emailLabel: 'E-mail institucional',
      emailNote: 'Canal oficial informado pela Ordem.',
      socialLabel: 'Redes sociais',
      socialHandle: '@oicmctb',
      platforms: 'Facebook e Instagram',
      note:
        'Endereço e telefone não são divulgados nesta página por não terem sido confirmados pela instituição.',
      formTitle: 'Envie uma mensagem',
      formIntro: 'Preencha os campos abaixo. Suas informações serão utilizadas para responder ao seu contato.',
    },
    faq: {
      kicker: 'Perguntas frequentes',
      title: 'Perguntas Frequentes',
      lead: 'Respostas baseadas nas informações institucionais oficiais.',
      items: [
        {
          q: 'O que é a OICMCTB?',
          a: 'A Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) é uma organização civil brasileira sem fins lucrativos, de caráter fraterno, cultural, filosófico, cívico e filantrópico, formalizada como pessoa jurídica em 2021.',
        },
        {
          q: 'Qual é a sua missão?',
          a: 'Contribuir para criar o futuro de um modo diferente, promovendo o desenvolvimento humano, a preservação da história dos cavaleiros templários e a manutenção da memória dos heróis cívicos locais, por meio de ações comunitárias, projetos educacionais e iniciativas de reconhecimento do mérito, respeitando o modo de vida, as tradições e as leis locais.',
        },
        {
          q: 'Quais são os seus valores?',
          a: 'Fé em Deus, esperança, caridade, justiça, prudência, fortaleza e temperança.',
        },
        {
          q: 'Qual é a relação com os Cavaleiros Templários históricos?',
          a: 'A OICMCTB preserva e valoriza a memória e os ideais cavalheirescos associados à tradição templária. A instituição é uma organização brasileira contemporânea e não afirma continuidade jurídica ou institucional direta com a ordem medieval.',
        },
        {
          q: 'Qual é a relação com a Maçonaria?',
          a: 'A OICMCTB é uma organização civil independente e não constitui uma Ordem Maçônica. A instituição não possui vínculo institucional com a Maçonaria. A eventual participação de pessoas que também sejam membros da Maçonaria ocorre exclusivamente em caráter individual, mediante ingresso e aceitação formal como membros da OICMCTB, sem estabelecer vínculo institucional entre as organizações.',
        },
        {
          q: 'O que representa o brasão?',
          a: 'O brasão reúne um escudo ogival, a cruz grega vermelha, as cores nacionais brasileiras e o selo dos dois cavaleiros. A página História e Brasão explica cada elemento e sua interpretação institucional.',
        },
        {
          q: 'Qual é a atuação da ABTL?',
          a: 'A Academia Brasileira Templária de Letras (ABTL) é o braço cultural e literário associado à Ordem, voltado à pesquisa histórica, à literatura, às publicações culturais, aos estudos heráldicos e à preservação das tradições.',
        },
        {
          q: 'Como obter informações sobre participação e atividades?',
          a: 'Entre em contato pelo formulário desta página ou pelo e-mail institucional. A Ordem orientará sobre participação, atividades e eventuais contribuições, sem publicar regras ou condições não confirmadas.',
        },
      ],
    },
  },

  legal: {
    updatedLabel: 'Última atualização',
    reviewNote:
      'Este documento é um texto institucional inicial e deve ser revisado juridicamente pela Ordem antes de ser considerado definitivo.',
    privacy: {
      title: 'Política de Privacidade',
      paragraphs: [
        'A OICMCTB trata os dados enviados voluntariamente por meio do formulário de contato — nome, e-mail, telefone, cidade, assunto e mensagem — exclusivamente para responder à solicitação e manter o contato administrativo correspondente.',
        'Os dados não são vendidos nem compartilhados com terceiros para finalidades comerciais. O acesso é restrito às pessoas responsáveis pelo atendimento.',
        'O titular pode solicitar informações, correção ou exclusão dos seus dados pelo e-mail institucional oicmctb@gmail.com.',
        'Este site é estático e não mantém cadastro de visitantes. Provedores de hospedagem podem registrar dados técnicos de acesso conforme suas próprias políticas.',
      ],
    },
    terms: {
      title: 'Termos de Uso',
      paragraphs: [
        'Este site tem finalidade informativa e institucional. O conteúdo apresentado não constitui oferta de serviços, consultoria jurídica, tributária ou financeira.',
        'A reprodução de textos e imagens institucionais deve respeitar a autoria e a identidade da OICMCTB. O brasão e o selo são materiais institucionais e não podem ser alterados ou utilizados de forma que sugira vínculo inexistente.',
        'Links externos, quando existirem, são oferecidos para conveniência do visitante. A OICMCTB não se responsabiliza pelo conteúdo de sites de terceiros.',
        'Informações institucionais podem ser atualizadas sem aviso prévio.',
      ],
    },
    cookies: {
      title: 'Cookies',
      paragraphs: [
        'Este site não utiliza cookies próprios de publicidade ou de perfilamento de visitantes.',
        'Recursos técnicos de hospedagem ou de segurança podem utilizar cookies estritamente necessários ao funcionamento e à proteção do site.',
        'O visitante pode gerenciar cookies nas configurações do seu navegador.',
      ],
    },
  },

  notFound: {
    kicker: 'Página não encontrada',
    title: 'Este caminho não existe',
    text: 'A página que você procura pode ter sido movida ou não existe. Retorne ao início e explore a Ordem.',
    cta: 'Voltar ao início',
  },
};

export type Dictionary = typeof pt;
