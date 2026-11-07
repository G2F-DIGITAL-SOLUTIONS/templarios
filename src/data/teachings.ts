/**
 * Institutional teachings and publications of the OICMCTB.
 * Bodies remain in Portuguese (original language of the Order’s communications).
 * Texts were lightly edited for clarity without inventing facts.
 */

export interface TeachingLink {
  label: string;
  url: string;
}

export interface TeachingPost {
  id: string;
  /** ISO date (YYYY-MM-DD) for sorting and display. */
  date: string;
  title: string;
  summary: string;
  paragraphs: string[];
  images: string[];
  links?: TeachingLink[];
}

/** Build ordered image paths for a post: `{id}-1.jpg`, `{id}-2.jpg`, … */
const imgs = (id: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/ensinamentos/${id}-${i + 1}.jpg`);

export const teachings: TeachingPost[] = [
  {
    id: 'palestra-autismo-tg-sbc-2024',
    date: '2024-05-09',
    title: 'Palestra sobre autismo no Tiro de Guerra de São Bernardo do Campo',
    summary:
      'A OICMCTB, com o Instituto Teacolher Brasil, promoveu palestra sobre autismo no TG 02078.',
    paragraphs: [
      'Entre os dias 9 de maio de 2024 e o período imediatamente seguinte, a Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (O.I.C.M.C.T.B.), em parceria com o Instituto Teacolher Brasil e sua presidente, Dra. Luana Eloa, e com o Cavaleiro Eliaquim, esteve no TG 02078 de São Bernardo do Campo.',
      'A doutora administrou uma palestra sobre autismo e foi recebida com excelência pelos sargentos Santos e Brito. Após a apresentação, a unidade ofereceu Diploma de Agradecimento pelo empenho na palestra.',
      'A Ordem conta com cavaleiros e damas dedicados a palestras sociais e motivacionais. Quem desejar conhecer essa frente de trabalho e agendar uma apresentação pode entrar em contato pelos canais oficiais.',
      'Parabéns a todos por mais essa cruzada. G.M.T.B. +++ Dom Roberto Guazzelli.',
    ],
    images: [],
    links: [
      {
        label: 'Registro do evento no Instagram',
        url: 'https://www.instagram.com/reel/C6waDWTLvOY/?igsh=MTA1ZWU1amFnbncxOA==',
      },
    ],
  },
  {
    id: 'assembleia-transporte-alternativo-2024',
    date: '2024-04-15',
    title: 'Assembleia extraordinária do transporte alternativo',
    summary:
      'Mais de 100 associados reuniram-se na Associação Paulista de Imprensa, em iniciativa da OICMCTB e da ANTAB.',
    paragraphs: [
      'No domingo, 14 de abril de 2024, foi realizado um encontro histórico para o transporte alternativo: reuniram-se mais de 100 associados em assembleia extraordinária na Associação Paulista de Imprensa.',
      'O evento foi organizado pela Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) e comandado pelo presidente da ANTAB, Tell dos Transportes.',
      'A assembleia marcou um passo importante para o setor, com discussões sobre melhorias, regulamentações e avanços relevantes para a mobilidade urbana e para milhares de pessoas que utilizam o transporte alternativo no dia a dia.',
      'G.M.T.B. +++ Dom Roberto Guazzelli.',
    ],
    images: imgs('assembleia-transporte-alternativo-2024', 3),
  },
  {
    id: 'convite-trabalho-frater-2024',
    date: '2024-04-10',
    title: 'Convite para prestigiar o trabalho de um frater',
    summary: 'A Ordem convida a todos a acompanhar e prestigiar o trabalho de um querido frater.',
    paragraphs: [
      'A Ordem convida a todos a prestigiar o trabalho do nosso querido frater, com a presença de todos.',
      'G.M.T.B. +++ Dom Roberto Guazzelli.',
    ],
    images: imgs('convite-trabalho-frater-2024', 1),
  },
  {
    id: 'autistas-day-sbc-2024',
    date: '2024-04-07',
    title: '2º Autista’s Day em São Bernardo do Campo',
    summary:
      'A Ordem esteve presente no evento de inclusão e conscientização sobre o autismo, com o Cavaleiro Eliaquim entre os organizadores.',
    paragraphs: [
      'A Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (O.I.C.M.C.T.B.) esteve presente no 2º Autista’s Day, realizado em São Bernardo do Campo no domingo, 7 de abril de 2024, representada pelo Cavaleiro Eliaquim, também um dos organizadores do evento.',
      'Em razão da conscientização sobre o autismo e da inclusão, o encontro reuniu tendas de colaboradores, gincanas, brinquedos infláveis, palco com apresentações de dança e outras atividades.',
      'O evento foi promovido pela Secretaria da Cidadania, sob a liderança da Dra. Luana Eloa — presidente do Teacolher Brasil e da comissão de Neurodiversidade da OAB — juntamente com o Cavaleiro Eliaquim. Contou ainda com a presença do deputado federal Alex Manente.',
      'O slogan da campanha: “Por nós e para nós, ninguém solta a mão.” A Ordem parabeniza a todos por esse evento.',
      'G.M.T.B. +++ Dom Roberto Guazzelli.',
    ],
    images: imgs('autistas-day-sbc-2024', 2),
  },
  {
    id: 'jubileu-ihg-sorocaba-2024',
    date: '2024-03-08',
    title: 'Jubileu de Platina do Instituto Histórico e Geográfico de Sorocaba',
    summary:
      'A Ordem esteve presente na comemoração e na posse de novos associados; Paulino Shigueo Yoshida foi um dos agraciados.',
    paragraphs: [
      'A Ordem esteve presente em Sorocaba na comemoração do Jubileu de Platina do Instituto Histórico e Geográfico e na posse de novos associados.',
      'O 1º secretário Paulino Shigueo Yoshida foi um dos agraciados e apresentou um resumo sobre o patriarca Bernardo de Claraval.',
      'A Ordem agradece a bela apresentação e parabeniza por mais essa conquista.',
      'G.M.T.B. +++ Dom Roberto Guazzelli.',
    ],
    images: imgs('jubileu-ihg-sorocaba-2024', 4),
    links: [
      {
        label: 'Registro do evento',
        url: 'https://programaintegracaodigital.blogspot.com/',
      },
    ],
  },
  {
    id: 'medalha-batalha-dos-guararapes-2024',
    date: '2024-03-05',
    title: 'Medalha Batalha dos Guararapes na Câmara Municipal de São Paulo',
    summary:
      'Membros da Ordem foram contemplados na cerimônia do Instituto Histórico Militar.',
    paragraphs: [
      'No dia 4 de março de 2024, a Ordem esteve na Câmara Municipal de São Paulo para a entrega da Medalha “Batalha dos Guararapes”, a convite do Prior de Sorocaba e 1º secretário do Brasil, Paulino Shigueo Yoshida, também contemplado com a honraria, ao lado de outras autoridades militares e civis.',
      'Na mesma noite, foram agraciados o Prior de São Paulo, Dr. Carlos Romagnoli; o Cavaleiro Fábio D’Urso (representando o Dr. Luiz Fernando Marcondes); e a Dama Templária Janaína Exposito Pinto. O evento foi realizado pelo Instituto Histórico Militar (I.H.M.).',
      'Grato pelo convite. Gran-Mestre da Ordem dos Templários do Brasil +++ Dom Roberto Guazzelli.',
    ],
    images: imgs('medalha-batalha-dos-guararapes-2024', 5),
    links: [
      {
        label: 'Vídeo da cerimônia no YouTube',
        url: 'https://www.youtube.com/live/IuHaN5cQK-A',
      },
    ],
  },
  {
    id: 'homenagem-priorado-32-2024',
    date: '2024-02-25',
    title: 'Homenagem do Priorado 32 e do MMDC',
    summary:
      'A OICMCTB e o Priorado 32, por meio do Prior de São Paulo Carlos Romagnoli, realizaram uma homenagem especial.',
    paragraphs: [
      'Foi com grande honra que a O.I.C.M.C.T.B. — Ordem Internacional Civil Militar Cavaleiros Templários do Brasil —, juntamente com o Priorado 32, por meio do Prior de São Paulo Carlos Romagnoli e presidente do MMDC, realizou tão grande homenagem.',
      'G.M.T.B. +++ Dom Roberto Guazzelli.',
    ],
    images: imgs('homenagem-priorado-32-2024', 4),
  },
  {
    id: 'comunicado-paramentacao-2024',
    date: '2024-02-10',
    title: 'Atenção aos cavaleiros: paramentação',
    summary: 'Comunicado institucional solicitando que os cavaleiros compareçam devidamente paramentados.',
    paragraphs: [
      'Atenção: todos os cavaleiros devidamente paramentados.',
    ],
    images: imgs('comunicado-paramentacao-2024', 1),
  },
  {
    id: 'visita-wilma-campos-machado-2024',
    date: '2024-02-08',
    title: 'Visita a Wilma Campos Machado',
    summary:
      'Confirmação de presença na cerimônia em memória do Cavaleiro Templário Campos Machado e do Prior David Caparelli.',
    paragraphs: [
      'No dia 8 de fevereiro de 2024, a Ordem teve o prazer de ser recebida no gabinete de Dona Wilma Campos Machado, para a confirmação de sua presença na cerimônia em memória do Cavaleiro Templário Campos Machado e do irmão Prior David Caparelli, realizada no Museu do Obelisco 32 no dia 24 de fevereiro, às 18h.',
      'Muito obrigado pela acolhida. G.M.T.B. +++ Dom Roberto Guazzelli.',
    ],
    images: imgs('visita-wilma-campos-machado-2024', 2),
  },
  {
    id: 'cruz-templaria-2024',
    date: '2024-01-27',
    title: 'A cruz templária: significado e história',
    summary:
      'Conteúdo explicativo sobre a cruz vermelha dos templários, a cruz pátea e sua relação com a Ordem de Cristo.',
    paragraphs: [
      'A cruz templária é uma cruz vermelha utilizada pelos templários sobre as vestes brancas. Simboliza fé e proteção.',
      'Templários são os membros de uma ordem militar religiosa de cavalaria medieval. Eram monges que tinham feito votos de pobreza; o espaço que ocupavam em Jerusalém teria sido parte do Templo de Salomão. Por isso a ordem é conhecida como Ordem dos Pobres Cavaleiros de Cristo e do Templo de Salomão, Ordem do Templo ou simplesmente Ordem dos Templários.',
      'A Ordem foi criada para proteger os primeiros cristãos, no contexto das Cruzadas — expedições de caráter religioso formadas na Europa com o objetivo da conquista da Terra Santa.',
      'Apesar do uso característico dessa cruz, o símbolo da Ordem dos Templários é tradicionalmente um cavalo com dois cavaleiros no dorso. Por vezes a cruz é chamada de cruz pátea: cruzes côncavas, com as pontas mais largas a partir do centro. Outras cruzes páteas conhecidas são a Cruz de Malta e a Cruz de Ferro.',
      'A Ordem de Cristo foi criada em Portugal sob as bases da Ordem dos Templários; por isso a cruz templária costuma ser confundida com a Cruz de Portugal — símbolo nacional português que data de 1520 e ficou conhecido como a cruz dos descobrimentos, presente nas expedições marítimas portuguesas em honra à Ordem de Cristo.',
      'G.M.T.B. +++ Dom Roberto Guazzelli.',
    ],
    images: imgs('cruz-templaria-2024', 1),
  },
  {
    id: 'homenagem-kamel-aref-2023',
    date: '2023-12-13',
    title: 'Homenagem a Kamel Aref',
    summary:
      'Entrega da Comenda de Benfeitor da Ordem e de um punhal templário ao Conselheiro de Honra.',
    paragraphs: [
      'Em 12 de dezembro de 2023, a Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (O.I.C.M.C.T.B.) participou de dois momentos especiais: uma homenagem ao Conselheiro de Honra, o eterno Grão-Mestre do GOSP, Venerável Kamel Aref, e a celebração de seu aniversário, em 13 de dezembro.',
      'Das mãos do Venerável GMAdj Renato Garcia, que presidiu a sessão, Kamel Aref recebeu a Comenda de Benfeitor da Ordem, em agradecimento pelo trabalho realizado em favor da humanidade. Os frateres se manifestaram nessa justa homenagem.',
      'A Ordem Templária do Brasil, em comemoração à sessão solene e ao aniversário do conselheiro, entregou como presente o punhal templário — também como forma de gratidão pela orientação desde a fundação da Ordem, ao longo de cinco anos. O Grão-Mestre fez questão de entregar pessoalmente o presente.',
      'G.M.T.B. +++ Roberto Guazzelli.',
    ],
    images: imgs('homenagem-kamel-aref-2023', 3),
  },
  {
    id: 'dia-dos-templarios-sbc-2023',
    date: '2023-12-05',
    title: 'Sessão solene do Dia dos Templários em São Bernardo do Campo',
    summary:
      'Câmara Municipal de São Bernardo do Campo celebrou o Dia dos Templários com certificados e graduações.',
    paragraphs: [
      'Foi realizada com muito sucesso a Sessão Solene do Dia dos Templários, na Câmara Municipal de São Bernardo do Campo, no dia 4 de dezembro de 2023, tendo como presidente da mesa o vereador Ary de Oliveira.',
      'Além de relembrar o nascimento de Bernardo de Claraval (4 de dezembro de 1090), a sessão promoveu a entrega de certificados de Honra ao Mérito, Membro de Honra e as graduações de Comendador(a) do novo Gran Priore de Sorocaba e do Escudeiro.',
      'O Cavaleiro e Arauto Gilberto Barros brindou a noite com simpatia e oratória. Entre os convidados, estiveram o professor e historiador de Sorocaba Dr. Adilson Cezar e o frater Cláudio Silva Jr., ambos agraciados com certificado da Ordem.',
      'Muito obrigado a todos os cavaleiros que puderam participar. G.M.T.B. +++ Dom Roberto Guazzelli.',
    ],
    images: imgs('dia-dos-templarios-sbc-2023', 10),
  },
  {
    id: 'manifesto-templarios-brasil-2023',
    date: '2023-11-26',
    title: 'O mundo está sedento de Templários',
    summary:
      'Manifesto sobre valores, justiça, fé e responsabilidade social dos Templários do Brasil.',
    paragraphs: [
      'Senhores nobres cavaleiros: o mundo está sedento de Templários. Vivemos a desordem pela confusão entre o certo e o errado — ambos sem consequências e sem responsabilidades, nocivos na mesma medida quando praticados sem a dose necessária.',
      'Na ânsia de mostrar poder, de exigir ordens cumpridas, de impor vontade pessoal e egocêntrica, há quem prenda, viole, acuse, ultrapasse limites e até execute a pena de morte. Não é assim que funciona o ordenamento jurídico do mundo. Existem leis que medem intensidade, modo e tempo — o fiel da balança.',
      'A sociedade conta, como sempre contou, com homens de bem em todos os setores, que agem para que a ordem se restabeleça. Homens que sacam do ilíaco suas “espadas” e dão a própria vida para que os ensinamentos de Nosso Senhor Jesus Cristo, o Deus feito Homem, nosso Salvador, continuem dando a paz de que nossas famílias precisam.',
      'É, mais uma vez, chegada a hora de levantar esses homens. De erguer nossas espadas e lanças. Os Templários do Brasil. Os seguidores cristãos. Se levantem. O mundo, não só o Brasil, caminha cego na borda do abismo. O certo e o errado devem retornar aos seus trilhos. Vamos pegar o veneno da “cobra” e fazer o antídoto — com a dose certa, com a coragem e a sabedoria de todos nós que usamos a capa da Ordem.',
      '“Toda a glória para Ele. Nada para nós.” + Irmão Templário. Ordem Internacional Civil Militar Cavaleiros Templários Brasil (O.I.C.M.C.T.B.). G.M.T.B. Roberto Guazzelli.',
    ],
    images: [],
  },
  {
    id: 'balduino-iv-2023',
    date: '2023-11-15',
    title: 'Balduíno IV, o rei leproso de Jerusalém',
    summary:
      'Pesquisa histórica sobre o reinado de Balduíno IV (1174–1185) e o confronto com Saladino.',
    paragraphs: [
      'Balduíno IV foi rei de Jerusalém de 1174 até 1185. Nascido em 1161 em Jerusalém, era filho do conde de Jaffa e Ascalon. Mais tarde, ele e sua irmã Sibila foram declarados filhos legítimos do rei Balduíno III — na verdade tio de ambos — para manter a ordem de sucessão.',
      'Aos nove anos, passou a ser educado pelo historiador Guilherme de Tiro, que descobriu que o jovem sofria de lepra. Mesmo com a consulta a médicos muçulmanos, nenhum tratamento foi suficiente.',
      'Amalrico I, então rei de Jerusalém, morreu em 1174, quando Balduíno tinha apenas 13 anos. Embora a maioridade fosse considerada aos 15, ele foi imediatamente coroado. Seu governo ficou sob a regência do senescal Miles de Plancy e, em seguida, de Raimundo III de Trípoli, parente mais próximo do falecido rei. Miles de Plancy foi acusado de abuso de poder e assassinado.',
      'Durante a regência de Raimundo, o grande desafio era o exército que Saladino organizava. Houve combates; Raimundo chegou a ser feito prisioneiro e liberado mediante resgate; depois estabeleceu-se uma trégua.',
      'Balduíno IV ganhou a alcunha de “rei leproso”. Sua doença determinou grande parte do reinado, sempre voltado à sucessão. Casou a irmã Sibila com Guy de Lusignan, união fundamental para conquistar ajuda militar. Não manteve a paz com Saladino e investiu em conflitos; mandou construir fortalezas com apoio dos Templários.',
      'Em 1180, Balduíno IV e Saladino concordaram em nova trégua de dois anos. Súditos, porém, não respeitaram a paz e promoveram atentados. Balduíno associou o sobrinho Balduíno V ao trono e definiu a sucessão. Sucumbiu à lepra com apenas 24 anos, em 16 de março de 1185 — pouco antes do exército de Saladino massacrar as forças cristãs e tomar definitivamente Jerusalém.',
      'Pesquisa feita por G.M.T.B. +++ Dom Roberto Guazzelli.',
    ],
    images: [],
  },
  {
    id: 'dia-das-criancas-suzano-2023',
    date: '2023-10-14',
    title: 'Dia das Crianças em Suzano',
    summary:
      'Ação social com distribuição de brinquedos e atividades recreativas, organizada pelo Priorado local.',
    paragraphs: [
      'Mesmo com chuva, a Ordem concluiu a última etapa em Suzano na comemoração do Dia das Crianças — com algodão-doce, cachorro-quente, refrigerante, pipoca, brinquedos e distribuição de presentes —, contando com a colaboração de voluntários.',
      'A organização esteve a cargo do Prior Rogério Pádua e sua esposa Márcia Pádua; do Comendador Rubens Tavares e sua esposa, a secretária social Madalena Vasconcelos; do Cavaleiro Luiz Henrique Lanzas; do professor de judô Cláudio; e dos colaboradores Ademário e Fábio.',
      'Muito obrigado à cidade de Suzano e regiões pelo acolhimento. Em novembro, a Ordem anunciou o projeto “Templário Saúde” em Suzano, com data, horário e local a serem divulgados, contando com a colaboração dos cavaleiros.',
      'Como sempre: “uma andorinha não faz verão” — e juntos somos bons. G.M.T.B. +++ Roberto Guazzelli.',
    ],
    images: imgs('dia-das-criancas-suzano-2023', 5),
  },
  {
    id: 'jacques-de-molay-2023',
    date: '2023-10-13',
    title: 'Jacques de Molay: lealdade até o fim',
    summary:
      'Pesquisa histórica sobre o último grão-mestre templário, a perseguição de Filipe IV e o martírio de 1314.',
    paragraphs: [
      'Nascido em Molay, na França (então Condado da Borgonha), Jacques de Molay entrou na Ordem do Templo aos 21 anos. Em 1298, foi nomeado grão-mestre após a morte de Teobaldo Gaudini.',
      'As Cruzadas não atingiam seus objetivos; os sarracenos capturavam cidades e portos. Os templários tentaram reorganizar-se em Chipre. Em 1305, o rei Filipe IV da França — o Belo — buscou controlar a Ordem e, sem conseguir fundi-la aos Hospitalários, armou um plano para destruí-la.',
      'Em 13 de outubro de 1307, Jacques e cavaleiros foram capturados. Durante sete anos sofreram torturas. Em 18 de março de 1314, desmentiu confissões forjadas e, junto com Godofredo de Charnay, foi condenado à fogueira na Île de la Cité.',
      'Jacques de Molay tornou-se símbolo de lealdade e companheirismo: preferiu morrer a entregar os companheiros ou faltar ao juramento.',
      'Pesquisa feita por G.M.T.B. Dom Roberto Guazzelli.',
    ],
    images: imgs('jacques-de-molay-2023', 1),
  },
  {
    id: 'reflexao-israel-2023',
    date: '2023-10-13',
    title: 'Reflexão sobre Israel e a nação santa',
    summary:
      'Meditação bíblica sobre o povo de Israel, a promessa a Abraão e a salvação em Cristo.',
    paragraphs: [
      'O povo de Israel é a nação santa — o povo escolhido por Deus. Deus não precisava escolher um povo, mas decidiu escolher Israel para mostrar o Seu amor e poder.',
      'Deus prometeu a Abraão que o Seu povo seria numeroso e abençoado, e que por meio dele todos os povos do mundo seriam também abençoados — porque decidiu que o Seu Filho, Jesus Cristo, nasceria do povo de Israel.',
      'No Novo Testamento, pelo ministério do apóstolo Paulo, vemos que Deus também ama e se revelou aos gentios. Todos os que creem em Jesus são salvos — e isso aconteceu através da nação santa, Israel.',
      'Irmãos, o desejo do meu coração e a minha oração a Deus pelos israelitas é que eles sejam salvos. Assim está escrito; assim eu creio.',
      'Dom Roberto A. Guazzelli.',
    ],
    images: [],
  },
  {
    id: 'roberto-conde-caballero-2023',
    date: '2023-10-04',
    title: 'Em memória de Roberto Conde Caballero',
    summary:
      'Homenagem a Roberto Conde Caballero e reflexão sobre a transmissão do conhecimento iniciático.',
    paragraphs: [
      'Roberto Conde Caballero (Cavaleiro), de abençoada memória. “Abra meus olhos para que eu possa perceber as maravilhas (ocultas) dos seus ensinamentos.” (Salmo 119:18).',
      'A função de um Guardião do Conhecimento é transmitir às gerações futuras as sementes que tanto preservou, para germinar os frutos necessários à manutenção do grande trabalho. Em homenagem a Roberto Conde Caballero, de abençoada memória.',
      'Alquimistas, cabalistas, herméticos e mágicos celebram o mérito de receber 50 anos de V∴L∴ — Verdadeira Luz. Nos quatro cantos do orbe, suas ações são lembradas e, para os iniciados, suas experiências são reveladas.',
      '“Não é seu trabalho terminar o trabalho. Mas se você começou, não está livre para abandoná-lo.” (Pirkei Avot).',
      'Pesquisado por G.M.T.B. +++ Roberto Guazzelli.',
    ],
    images: [],
  },
  {
    id: 'documentario-convento-cristo-2023',
    date: '2023-09-12',
    title: 'Documentário: fortificações templárias e as navegações',
    summary:
      'Indicação de documentário português sobre tecnologia templária e o caminho até as navegações.',
    paragraphs: [
      'Documentário português que apresenta uma das fortificações com tecnologia de vanguarda templária, com narrativa que termina nas navegações. Um documentário sensível, belo e historicamente sólido.',
      'G.M.T.B. Dom Roberto Guazzelli.',
    ],
    images: [],
    links: [
      {
        label: 'Assistir no YouTube',
        url: 'https://youtu.be/z-HUhBtZNlc',
      },
    ],
  },
  {
    id: 'trofeu-personalidade-abc-2023',
    date: '2023-09-02',
    title: '15º aniversário do Troféu Personalidade ABC',
    summary:
      'A OICMCTB, representada pelo Grão-Mestre Dom Roberto Guazzelli, participou da celebração no ABC Paulista.',
    paragraphs: [
      'Em 31 de agosto de 2023, em São Bernardo do Campo, uma noite de brilho e emoção marcou o 15º aniversário do Troféu Personalidade ABC, que homenageia figuras notáveis pelo desenvolvimento da região do ABC Paulista.',
      'A Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (O.I.C.M.C.T.B.), representada pelo Gran-Mestre Dom +++ Roberto Guazzelli, teve a honra de participar e contemplar, entre os convidados, nobres cavaleiros da Ordem.',
      'Sob a liderança da colunista social Ildema Santos, com o diretor de cerimonial Nelsinho Sargiani e a mestra de cerimônia Lívia Cortinóvis, a festa reuniu personalidades da política, da cultura e do empresariado no Salão Nobre da Associação dos Funcionários Públicos de São Bernardo do Campo.',
      'O Troféu Personalidade ABC reconhece pessoas e instituições que se destacam não só pelo sucesso profissional, mas também pelas contribuições ao bem-estar da comunidade. A noite contou com os Três Tenores, o Grupo Vertentes do Samba e a celebração dos 15 anos da equipe organizadora.',
      'G.M.T.B. Dom Roberto Guazzelli.',
    ],
    images: imgs('trofeu-personalidade-abc-2023', 5),
  },
  {
    id: 'parceria-suzano-2023',
    date: '2023-08-30',
    title: 'Parceria social em Suzano',
    summary:
      'Reunião com o secretário de governo Alex para ações sociais e apresentação da revista dos Templários.',
    paragraphs: [
      'No dia 29 de agosto de 2023, a Ordem esteve em Suzano no gabinete do secretário de governo, senhor Alex, bem atendida por ele e por sua assessoria, para firmar uma parceria de ações sociais.',
      'Na ocasião, também foi levada a primeira edição — de muitas — da revista dos Templários. Seja bem-vinda a cidade de Suzano e regiões.',
      'G.M.T.B. Dom Roberto Guazzelli.',
    ],
    images: imgs('parceria-suzano-2023', 4),
  },
  {
    id: 'homenagem-tiro-guerra-sbc-2023',
    date: '2023-08-27',
    title: 'Homenagem no Tiro de Guerra de São Bernardo do Campo',
    summary: 'Relato de homenagem recebida pelo Grão-Mestrado no Tiro de Guerra de SBC.',
    paragraphs: [
      'No dia anterior a 27 de agosto de 2023, o Grão-Mestre teve o prazer de ser homenageado pelo Tiro de Guerra de São Bernardo do Campo e compartilhou esse momento com a Ordem.',
    ],
    images: imgs('homenagem-tiro-guerra-sbc-2023', 2),
  },
  {
    id: 'consagracao-20-cavaleiros-2023',
    date: '2023-08-20',
    title: 'Consagração de 20 novos cavaleiros no Museu do Obelisco MMDC 32',
    summary:
      'Cerimônia de consagração com 20 novos cavaleiros no fabuloso Museu do Obelisco MMDC 32.',
    paragraphs: [
      'No sábado, 19 de agosto de 2023, foi realizada mais uma cerimônia de consagração no Museu do Obelisco MMDC 32, com 20 novos cavaleiros.',
      'A Ordem se alegra com a chegada deles e com a confiança depositada na instituição. Sejam bem-vindos — e vamos expandir mais.',
      'G.M.T.B. +++ Roberto Guazzelli.',
    ],
    images: imgs('consagracao-20-cavaleiros-2023', 10),
  },
];

/** Posts sorted newest first. */
export const teachingsSorted = [...teachings].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function formatTeachingDate(iso: string, locale = 'pt-BR'): string {
  const [y, m, d] = iso.split('-').map(Number);
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(y, m - 1, d));
}
