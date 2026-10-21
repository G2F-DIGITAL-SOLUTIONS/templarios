import type { Widen } from '../dictionaries';
import type { Dictionary } from './pt';

/**
 * Italian dictionary — complete, not a partial override.
 * The official name and acronym are kept in Portuguese; only the descriptive
 * text is translated.
 */
export const it: Widen<Dictionary> = {
  meta: {
    siteName: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
    shortName: 'OICMCTB',
    tagline: 'Tradizione cavalleresca, cultura e servizio al bene comune.',
    defaultDescription:
      'Scopri l’OICMCTB: identità istituzionale, storia, stemma, Academia Brasileira Templária de Letras, Dame Templari e ambiti di azione culturale e sociale.',
    ogLocale: 'it_IT',
  },

  common: {
    skipToContent: 'Vai al contenuto principale',
    enter: 'Entra',
    home: 'Home',
    breadcrumb: 'Sei in',
    onThisPage: 'In questa pagina',
  },

  language: {
    label: 'Lingua',
    switchTo: 'Cambia lingua in',
    current: 'Lingua attuale',
  },

  nav: {
    label: 'Navigazione principale',
    home: 'Home',
    order: 'L’Ordine',
    heritage: 'Storia e Stemma',
    society: 'Cultura e Azione Sociale',
    participate: 'Partecipa e Contatti',
    openMenu: 'Apri menu',
    closeMenu: 'Chiudi menu',
    ctaPrimary: 'Scopri l’Ordine',
    ctaSecondary: 'Partecipa',
  },

  footer: {
    aboutTitle: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
    aboutText:
      'Organizzazione civile brasiliana senza scopo di lucro, di carattere fraterno, culturale, filosofico, civico e filantropico, dedicata allo sviluppo umano, alla preservazione della memoria storica e al bene comune.',
    institutionalTitle: 'Istituzionale',
    contactTitle: 'Contatti',
    legalTitle: 'Legale',
    languagesTitle: 'Lingue',
    socialTitle: 'Social',
    privacy: 'Informativa sulla Privacy',
    terms: 'Termini di Utilizzo',
    cookies: 'Cookie',
    rights: 'Tutti i diritti riservati.',
    motto: 'CREARE FUTURUM MUTATO MODO',
    dataNote: 'Dati istituzionali forniti dall’Ordine.',
  },

  a11y: {
    decorative: 'Elemento decorativo',
    requiredField: 'campo obbligatorio',
    formError: 'Non è stato possibile inviare ora. Riprova o scrivici via e-mail.',
    formOpening: 'Apertura del programma di posta…',
  },

  forms: {
    name: 'Nome completo',
    email: 'E-mail',
    phone: 'Telefono',
    city: 'Città',
    subject: 'Oggetto',
    message: 'Messaggio',
    interest: 'Raccontaci il tuo interesse a conoscere o partecipare all’Ordine.',
    send: 'Invia messaggio',
    consent: 'Autorizzo l’uso dei miei dati per rispondere a questo contatto.',
    requiredNote: 'I campi contrassegnati con * sono obbligatori.',
    mailSubject: 'Messaggio dal sito dell’OICMCTB',
  },

  home: {
    hero: {
      kicker: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
      title: 'Tradizione cavalleresca, cultura e servizio al bene comune.',
      lead: 'CREARE FUTURUM MUTATO MODO — Creare il futuro in modo diverso.',
      intro:
        'L’Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) è un’organizzazione civile brasiliana senza scopo di lucro, di carattere fraterno, culturale, filosofico, civico e filantropico.',
      primaryCta: 'Scopri l’Ordine',
      secondaryCta: 'Storia e Stemma',
    },
    about: {
      kicker: 'Chi siamo',
      title: 'Un ordine templare brasiliano, civile e autonomo',
      lead:
        'L’OICMCTB unisce la valorizzazione delle tradizioni cavalleresche all’impegno contemporaneo per lo sviluppo umano, la memoria storica, la conoscenza e il servizio alla società.',
      body:
        'Formalizzata come persona giuridica nel 2021, secondo le informazioni istituzionali fornite, l’Ordine orienta le proprie attività secondo principi come fede, speranza, carità, giustizia, prudenza, fortezza e temperanza. Il suo proposito comprende il rafforzamento dei legami fraterni, la ricerca storica, la valorizzazione della cultura, il riconoscimento del merito civico e l’incoraggiamento di iniziative che contribuiscano al bene comune.',
      highlights: {
        identity: 'Identità',
        identityText: 'Organizzazione civile brasiliana indipendente, senza legame istituzionale con la Massoneria.',
        origin: 'Formalizzazione',
        originText: 'Persona giuridica dal 2021, sotto il Gran Magistero di Roberto Aguiar Guazzelli.',
        values: 'Valori',
        valuesText: 'Fede in Dio, speranza, carità, giustizia, prudenza, fortezza e temperanza.',
        today: 'Attività',
        todayText: 'Cultura, ricerca storica, educazione, salute, sport, ambiente e assistenza sociale.',
      },
      cta: 'Scopri l’Ordine',
      ctaSecondary: 'La nostra storia e lo stemma',
    },
    motto: {
      title: 'Motto ufficiale',
      latin: 'CREARE FUTURUM MUTATO MODO',
      translation: 'Creare il futuro in modo diverso.',
      text: 'Il motto sintetizza l’orientamento istituzionale a costruire il futuro attraverso valori, atteggiamenti e azioni impegnati per il bene comune.',
    },
    values: {
      kicker: 'Valori',
      title: 'Sette valori guidano l’Ordine',
      lead: 'I valori istituzionali sono vissuti come impegni di condotta e di servizio.',
      items: ['Fede in Dio.', 'Speranza.', 'Carità.', 'Giustizia.', 'Prudenza.', 'Fortezza.', 'Temperanza.'],
    },
    independence: {
      kicker: 'Indipendenza istituzionale',
      title: 'Un’organizzazione civile, non massonica',
      text:
        'L’OICMCTB è un’organizzazione civile indipendente e non costituisce un Ordine Massonico. L’istituzione non ha alcun legame istituzionale con la Massoneria. L’eventuale partecipazione di persone che sono anche membri della Massoneria avviene esclusivamente a titolo individuale, mediante ammissione e accettazione formale come membri dell’OICMCTB, senza stabilire alcun legame istituzionale tra le organizzazioni.',
      cta: 'Scopri di più ne L’Ordine',
    },
    doors: {
      kicker: 'Scopri l’OICMCTB',
      title: 'Da dove iniziare',
      lead: 'Scegli l’argomento che desideri conoscere. L’intera istituzione è organizzata in quattro pagine principali.',
      items: {
        order: {
          label: 'L’Ordine',
          text: 'Identità, storia, missione, visione, valori, filosofia e informazioni istituzionali.',
          cta: 'Scopri l’Ordine',
        },
        heritage: {
          label: 'Storia e Stemma',
          text: 'La costruzione dell’identità istituzionale, il sigillo e il significato dello stemma.',
          cta: 'Vedi storia e stemma',
        },
        society: {
          label: 'Cultura e Azione Sociale',
          text: 'ABTL, Dame Templari e gli ambiti culturali, educativi e sociali dell’Ordine.',
          cta: 'Scopri l’azione sociale',
        },
        participate: {
          label: 'Partecipa e Contatti',
          text: 'Come manifestare interesse, contattare l’Ordine e ottenere indicazioni sui contributi.',
          cta: 'Partecipa e contatta',
        },
      },
    },
    society: {
      kicker: 'Cultura e Azione Sociale',
      title: 'Una tradizione che si traduce in servizio',
      lead:
        'L’OICMCTB riunisce iniziative culturali, educative, filantropiche e di preservazione della memoria storica.',
      items: [
        {
          title: 'Academia Brasileira Templária de Letras (ABTL)',
          text: 'Braccio culturale e letterario dell’Ordine, dedicato alla ricerca storica, alla produzione intellettuale e alle pubblicazioni culturali.',
        },
        {
          title: 'Consiglio Nazionale delle Dame Templari',
          text: 'Partecipazione delle donne alla vita culturale, istituzionale e comunitaria dell’Ordine.',
        },
        {
          title: 'Educazione, salute e assistenza sociale',
          text: 'Ambiti di azione dedicati alla conoscenza, al benessere e al sostegno a chi è più bisognoso.',
        },
        {
          title: 'Ambiente e memoria civica',
          text: 'Protezione dell’Amazzonia, sensibilizzazione ambientale e valorizzazione della memoria degli eroi civici locali.',
        },
      ],
      cta: 'Scopri l’azione sociale',
    },
    finalCta: {
      kicker: 'Partecipa',
      title: 'Scopri l’Ordine e manifesta il tuo interesse',
      lead: 'L’Ordine è a disposizione per accoglierti, rispondere alle domande e ricevere manifestazioni di interesse.',
      primary: 'Partecipa e Contatti',
      secondary: 'Parla con l’Ordine',
    },
  },

  pages: {
    order: {
      kicker: 'L’Ordine',
      title: 'L’Ordine',
      lead: 'Identità, storia, missione, visione, valori, filosofia e informazioni istituzionali dell’OICMCTB.',
    },
    heritage: {
      kicker: 'Identità e simbologia',
      title: 'Storia e Stemma',
      lead: 'Il percorso dell’identità istituzionale dell’OICMCTB e il significato del sigillo e dello stemma.',
    },
    society: {
      kicker: 'Cultura e Azione Sociale',
      title: 'Cultura e Azione Sociale',
      lead: 'La dimensione culturale, letteraria e comunitaria dell’OICMCTB.',
    },
    participate: {
      kicker: 'Partecipa',
      title: 'Partecipa e Contatti',
      lead: 'Informazioni per conoscere, contattare e manifestare interesse verso l’OICMCTB.',
    },
    privacy: {
      kicker: 'Legale',
      title: 'Informativa sulla Privacy',
      lead: 'Come l’OICMCTB tratta i dati inviati attraverso questo sito.',
    },
    terms: {
      kicker: 'Legale',
      title: 'Termini di Utilizzo',
      lead: 'Condizioni di utilizzo del sito istituzionale dell’OICMCTB.',
    },
    cookies: {
      kicker: 'Legale',
      title: 'Cookie',
      lead: 'Informazioni sull’uso dei cookie in questo sito.',
    },
  },

  order: {
    kicker: 'L’Ordine',
    title: 'L’Ordine',
    lead: 'Identità, storia, missione, visione, valori, filosofia e informazioni istituzionali dell’OICMCTB.',
    sections: [
      {
        id: 'quem-somos',
        title: 'Chi siamo',
        paragraphs: [
          'L’Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) è un’organizzazione civile brasiliana senza scopo di lucro, di carattere fraterno, culturale, filosofico, civico e filantropico.',
          'L’istituzione cerca di unire la valorizzazione delle tradizioni cavalleresche all’impegno contemporaneo per lo sviluppo umano, la preservazione della memoria storica, la conoscenza e il servizio alla società.',
          'Formalizzata come persona giuridica nel 2021, secondo le informazioni istituzionali fornite, l’Ordine orienta le proprie attività secondo principi come fede, speranza, carità, giustizia, prudenza, fortezza e temperanza.',
          'Il suo proposito comprende il rafforzamento dei legami fraterni, la ricerca storica, la valorizzazione della cultura, il riconoscimento del merito civico e l’incoraggiamento di iniziative che contribuiscano al bene comune.',
        ],
      },
      {
        id: 'historia',
        title: 'Storia dell’OICMCTB',
        paragraphs: [
          'L’ideazione e la guida dell’Ordem Internacional Civil Militar Cavaleiros Templários do Brasil sono attribuite al Gran Maestro Roberto Aguiar Guazzelli, secondo il materiale istituzionale fornito.',
          'L’Ordine è stata formalizzata come persona giuridica nel 2021. Questo traguardo è associato all’iscrizione "MMXXI" presente nel sigillo istituzionale.',
          'La costruzione dell’identità istituzionale ha compreso lo sviluppo del sigillo e dello stemma, la valorizzazione degli ideali cavallereschi e l’attività culturale e letteraria dell’Academia Brasileira Templária de Letras (ABTL).',
          'La storia dell’organizzazione brasiliana contemporanea è distinta dalla storia medievale dei Cavalieri Templari. L’uso di simboli e l’ispirazione a una tradizione non provano, di per sé, una continuità giuridica o istituzionale con l’ordine medievale.',
          'La storia dell’identità visiva e la spiegazione degli elementi araldici sono presentate nella pagina Storia e Stemma.',
        ],
      },
      {
        id: 'missao-visao-e-valores',
        title: 'Missione, visione e valori',
        paragraphs: [
          'Missione: contribuire a creare il futuro in modo diverso, promuovendo lo sviluppo umano, la preservazione della storia dei Cavalieri Templari e la conservazione della memoria degli eroi civici locali, attraverso azioni comunitarie, progetti educativi e iniziative di riconoscimento del merito, nel rispetto del modo di vivere, delle tradizioni e delle leggi locali.',
          'Visione: essere riconosciuta a livello internazionale come un ordine templare legittimamente brasiliano, un’organizzazione civile senza scopo di lucro che contribuisce in modo efficace al miglioramento della vita dei suoi associati e delle comunità in cui è inserita, con fede in Dio, rispetto delle tradizioni locali e impegno per la preservazione della memoria storica dei Templari e degli eroi civici regionali.',
          'La visione esprime un proposito istituzionale. La sua formulazione non costituisce, di per sé, una dichiarazione di riconoscimento internazionale già ottenuto.',
          'Valori: fede in Dio, speranza, carità, giustizia, prudenza, fortezza e temperanza.',
        ],
      },
      {
        id: 'lema',
        title: 'Motto ufficiale',
        paragraphs: [
          'CREARE FUTURUM MUTATO MODO.',
          'Traduzione istituzionale: "Creare il futuro in modo diverso."',
          'Il motto rimane identico in tutte le versioni del sito. La traduzione esplicativa può variare secondo la lingua.',
        ],
      },
      {
        id: 'filosofia-e-mistica',
        title: 'Filosofia di lavoro e mistica',
        paragraphs: [
          'La filosofia di lavoro dell’Ordine guida i suoi membri a dare prova di umiltà, riconoscere e correggere i propri errori, agire con sincerità, amare la giustizia, essere misericordiosi, dimostrare fede, vivere nella verità, sopportare le avversità quando necessario e servire il bene comune.',
          'La mistica dell’OICMCTB è intesa come dimensione filosofica e spirituale della vita dei valori: una ricerca di senso, consapevolezza, introspezione e responsabilità individuale, orientata al servizio della collettività.',
          'L’Ordine presenta la propria attività con trasparenza. La sua mistica non è descritta come un insieme di poteri soprannaturali, segreti o pratiche occulte, e l’istituzione non si presenta come detentrice di conoscenze riservate.',
          'La dimensione spirituale è vissuta nel rispetto della fede, della coscienza e della diversità delle persone, senza trasformare l’Ordine in un’istituzione ecclesiastica.',
        ],
      },
      {
        id: 'independencia',
        title: 'Indipendenza dalla Massoneria',
        paragraphs: [
          'L’Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) è un’organizzazione civile indipendente e non costituisce un Ordine Massonico. L’istituzione non ha alcun legame istituzionale con la Massoneria.',
          'L’eventuale partecipazione di persone che sono anche membri della Massoneria avviene esclusivamente a titolo individuale, mediante ammissione e accettazione formale come membri dell’OICMCTB, senza stabilire alcun legame istituzionale tra le organizzazioni.',
          'L’assenza di un legame istituzionale non implica divieto o restrizione alla partecipazione individuale di persone che sono anche membri della Massoneria.',
        ],
      },
    ],
    info: {
      title: 'Informazioni istituzionali',
      lead: 'Dati istituzionali dell’Ordem Internacional Civil Militar Cavaleiros Templários do Brasil.',
      note:
        'Dati registrali forniti dall’Ordine. Non sostituiscono un certificato o una consultazione dei registri ufficiali.',
      items: [
        { label: 'Denominazione legale', value: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil' },
        { label: 'CNPJ', value: '42.071.770/0001-75' },
        { label: 'Gran Magistero', value: 'Roberto Aguiar Guazzelli' },
        { label: 'Consiglio Nazionale delle Dame Templari', value: 'Sueli Teodoro — Prima Dama' },
        { label: 'Braccio culturale e letterario', value: 'Academia Brasileira Templária de Letras (ABTL)' },
        { label: 'E-mail istituzionale', value: 'oicmctb@gmail.com' },
        { label: 'Social', value: '@oicmctb — Facebook e Instagram' },
      ],
    },
  },

  heritage: {
    kicker: 'Identità e simbologia',
    title: 'Storia e Stemma',
    lead: 'Il percorso dell’identità istituzionale dell’OICMCTB e il significato del sigillo e dello stemma.',
    intro:
      'Questa pagina riunisce la storia dell’identità istituzionale dell’Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) e la spiegazione degli elementi del sigillo e dello stemma, sulla base del materiale araldico fornito dall’istituzione.',
    history: {
      title: 'La costruzione dell’identità istituzionale',
      paragraphs: [
        'L’ideazione e la guida dell’OICMCTB sono attribuite al Gran Maestro Roberto Aguiar Guazzelli. L’Ordine è stata formalizzata come persona giuridica nel 2021, traguardo associato all’iscrizione "MMXXI" del sigillo.',
        'Lo sviluppo del sigillo e dello stemma ha fatto parte della costruzione dell’identità istituzionale, nel rispetto della tradizione araldica e dei valori cavallereschi. L’attività culturale e letteraria dell’Academia Brasileira Templária de Letras (ABTL) fa parte di questo percorso.',
        'L’origine storica del modello iconografico dei due cavalieri è distinta dalla creazione del sigillo specifico dell’OICMCTB. L’ispirazione a una tradizione non prova una continuità giuridica o istituzionale con l’ordine medievale.',
      ],
    },
    seal: {
      id: 'selo',
      title: 'Il sigillo istituzionale',
      paragraphs: [
        'Il sigillo rotondo presenta due Cavalieri Templari che condividono lo stesso cavallo, composizione ispirata all’iconografia templare storica.',
        'Secondo l’interpretazione istituzionale presentata dall’OICMCTB, i cavalieri si muovono visivamente da destra verso sinistra, in direzione opposta alla rappresentazione tradizionale citata nel documento.',
        'Questa inversione simboleggia, per l’Ordine:',
        'L’iscrizione che accompagna il sigillo è "SIGNUM TEMPLARIORUM BRASILIAE", tradotta come "Segno dei Templari Brasiliani". Piccole croci di Malta separano le parole dell’iscrizione, secondo la rappresentazione ufficiale.',
        'L’iscrizione "MMXXI" corrisponde al 2021, anno associato alla formalizzazione dell’istituzione come persona giuridica.',
        'Questi significati sono presentati come interpretazione dell’OICMCTB stessa, non come fatto storico universalmente stabilito.',
      ],
      items: [
        'Una posizione di contrappunto all’inversione contemporanea dei valori.',
        'Il rifiuto simbolico di uno stato di cose considerato contrario ai principi dell’Ordine.',
        'Il ritorno al cammino della rettitudine, delle virtù morali e della fede.',
        'La necessità di recuperare valori antichi senza smettere di guardare al futuro.',
      ],
    },
    shield: {
      id: 'brasao',
      title: 'Lo stemma: lo scudo',
      paragraphs: [
        'Lo scudo è classico, ogivale e lanceolato, con divisione simmetrica in quattro parti.',
        'Le due fasce perpendicolari che si incrociano al centro formano una croce greca rossa.',
        'I campi dello scudo utilizzano il verde, chiamato Sinople nella descrizione araldica; il giallo, chiamato Oro; il rosso, chiamato Gules; e l’argento nel contorno e negli elementi descritti.',
        'Secondo l’interpretazione del documento, i colori verde e giallo richiamano i colori nazionali brasiliani, e la croce rossa evoca gli ideali templari, la giustizia e la verità.',
        'Al centro dello scudo si trova il sigillo rotondo con i due cavalieri.',
      ],
    },
    helmet: {
      id: 'elmo',
      title: 'L’elmo',
      paragraphs: [
        'L’elmo è primitivo, senza corona, rappresentato a tre quarti e in argento. Fa parte della composizione araldica come elemento dell’identità cavalleresca dell’Ordine.',
      ],
    },
    mantling: {
      id: 'paquifes',
      title: 'I paquifes',
      paragraphs: [
        'I paquifes sono gli ornamenti laterali della composizione, descritti con elementi in blu, oro e argento.',
        'Il documento collega la loro composizione alla tradizione araldica della famiglia Guazzelli. Questo riferimento familiare è presentato come informazione del materiale istituzionale, senza estendersi a dichiarazioni di lignaggio medievale.',
      ],
    },
    crest: {
      id: 'timbre',
      title: 'Il cimiero',
      paragraphs: [
        'Il cimiero è una croce di Malta templare rossa, con punte aperte, posizionata nella parte superiore della composizione.',
      ],
    },
    warCry: {
      id: 'grito-de-guerra',
      title: 'Il grido di guerra',
      paragraphs: [
        'Il grido di guerra è l’iscrizione latina "CREARE FUTURUM MUTATO MODO", associata alla traduzione "Creare il futuro in modo diverso".',
        'Il motto sintetizza l’orientamento istituzionale a costruire il futuro attraverso valori, atteggiamenti e azioni impegnati per il bene comune.',
      ],
    },
    divisa: {
      id: 'divisa',
      title: 'La divisa',
      paragraphs: [
        'La divisa è un nastro giallo o dorato che presenta la sigla "O.I.C.M.C.T.B.".',
        'La sigla corrisponde a Ordem Internacional Civil Militar Cavaleiros Templários do Brasil.',
      ],
    },
    colors: {
      id: 'cores',
      title: 'Colori ufficiali',
      paragraphs: [
        'Il documento presenta riferimenti cromatici in RGB, CMYK e Pantone per alcuni elementi. Alcuni dettagli devono essere verificati tra le descrizioni testuali e i codici indicati.',
        'Il file vettoriale ufficiale dello stemma è il principale riferimento per la rappresentazione visiva. I colori ufficiali non devono essere modificati sulla base della sola interpretazione dei numeri.',
      ],
      items: [
        'Argento: RGB 208, 211, 212; Pantone 427 C.',
        'Rosso Gules: RGB 239, 51, 64; Pantone Red 032 C.',
        'Verde Sinople: RGB 0, 150, 57; Pantone 355 C.',
        'Giallo Oro: RGB 254, 221, 0.',
        'Blu Azzurro: RGB 16, 6, 159; Pantone Blue 072 C.',
        'Nero Sable: RGB 45, 41, 38; Pantone Black C.',
      ],
    },
    fidelity: {
      id: 'fidelidade-grafica',
      title: 'Fedeltà grafica',
      paragraphs: [
        'Lo stemma ufficiale è materiale istituzionale e deve essere trattato preservando proporzioni, leggibilità e colori. Non devono essere aggiunti elementi che non facciano parte della composizione ufficiale.',
        'Il sito non ricrea lo stemma per approssimazione né lo sostituisce con una versione generata artificialmente. La rappresentazione ufficiale in file vettoriale è conservata dall’Ordine e deve essere utilizzata nelle applicazioni che richiedono l’arte finale.',
      ],
    },
  },

  society: {
    kicker: 'Cultura e Azione Sociale',
    title: 'Cultura e Azione Sociale',
    lead: 'La dimensione culturale, letteraria e comunitaria dell’OICMCTB.',
    intro:
      'L’Ordine intende la tradizione cavalleresca come impegno per la conoscenza, la cultura e il servizio al bene comune. Questa pagina riunisce il braccio culturale dell’istituzione, la partecipazione delle Dame Templari e i suoi ambiti di azione.',
    abtl: {
      kicker: 'Braccio culturale e letterario',
      title: 'Academia Brasileira Templária de Letras (ABTL)',
      paragraphs: [
        'L’Academia Brasileira Templária de Letras (ABTL) è il braccio culturale e letterario associato all’Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB), secondo la descrizione istituzionale fornita.',
        'La sua attività è dedicata alla ricerca storica, alla letteratura e alla produzione intellettuale, alle pubblicazioni culturali, agli studi araldici, alla preservazione delle tradizioni e all’incoraggiamento delle arti, delle scienze e della produzione di conoscenza.',
        'Gli studi teologici sono considerati quando compatibili con l’attività effettiva dell’Accademia. L’Ordine non attribuisce all’ABTL membri, pubblicazioni, premi, progetti o incarichi non confermati.',
      ],
      areasTitle: 'Ambiti di attività dell’ABTL',
      areas: [
        'Ricerca storica.',
        'Letteratura e produzione intellettuale.',
        'Pubblicazioni culturali.',
        'Studi araldici.',
        'Preservazione delle tradizioni.',
        'Incoraggiamento delle arti, delle scienze e della produzione di conoscenza.',
        'Studi teologici, quando compatibili con l’attività effettiva.',
      ],
    },
    ladies: {
      kicker: 'Consiglio Nazionale delle Dame Templari',
      title: 'Dame Templari',
      paragraphs: [
        'Il Consiglio Nazionale delle Dame Templari partecipa alla vita culturale, istituzionale e comunitaria dell’Ordine, contribuendo alle sue iniziative e al rafforzamento dei legami fraterni.',
        'La partecipazione delle donne è valorizzata senza creare incarichi, progetti o responsabilità non documentati.',
      ],
      firstLadyLabel: 'Prima Dama',
      firstLadyName: 'Sueli Teodoro',
      firstLadyNote:
        'Identificazione secondo l’informazione istituzionale fornita. Il titolo di Prima Dama non è automaticamente convertito in presidenza, direzione esecutiva o altro incarico non confermato.',
    },
    areas: {
      kicker: 'Ambiti di azione',
      title: 'Ambiti di azione e obiettivi istituzionali',
      lead: 'Gli ambiti seguenti sono settori di lavoro e obiettivi dell’Ordine, secondo il materiale istituzionale.',
      items: [
        {
          title: 'Assistenza sociale',
          text: 'Sostegno ai bisognosi e iniziative di solidarietà e supporto comunitario.',
        },
        {
          title: 'Educazione',
          text: 'Sostegno all’accesso all’educazione, alla cultura e alla conoscenza, intendendo l’apprendimento come percorso lungo tutta la vita.',
        },
        {
          title: 'Salute',
          text: 'Azioni di sostegno alla salute, al benessere e all’assistenza a chi è più bisognoso.',
        },
        {
          title: 'Sport',
          text: 'Incentivo alla pratica sportiva come disciplina, integrazione sociale e sviluppo umano.',
        },
        {
          title: 'Ambiente',
          text: 'Protezione dell’Amazzonia, sensibilizzazione ambientale e rispetto per la Terra e la diversità della vita.',
        },
        {
          title: 'Cultura',
          text: 'Valorizzazione della cultura, delle tradizioni e della produzione intellettuale.',
        },
        {
          title: 'Ricerca storica',
          text: 'Preservazione della memoria storica e stimolo alla ricerca, inclusi gli studi araldici.',
        },
        {
          title: 'Azioni comunitarie',
          text: 'Iniziative di avvicinamento alle comunità e di servizio al bene comune.',
        },
        {
          title: 'Memoria degli eroi civici',
          text: 'Valorizzazione della memoria degli eroi civici locali e regionali e riconoscimento del merito civico.',
        },
      ],
      note:
        'La presentazione di questi ambiti non implica affermare che tutti abbiano già progetti in corso. Quando esisteranno progetti documentati, saranno pubblicati con nome, obiettivo, pubblico, luogo, periodo e risultati.',
    },
    publications: {
      kicker: 'Conoscenza',
      title: 'Pubblicazioni e studi',
      paragraphs: [
        'L’Ordine e l’ABTL incoraggiano la ricerca storica, la produzione intellettuale e le pubblicazioni culturali. Quando saranno disponibili pubblicazioni verificate, saranno annunciate in questa pagina.',
        'Non vengono presentati articoli, conferenze, premi o pubblicazioni fittizie per riempire la sezione.',
      ],
    },
    cta: {
      title: 'Scopri anche l’Ordine',
      lead: 'La storia, la missione e i valori istituzionali sono riuniti ne L’Ordine.',
      primary: 'L’Ordine',
      secondary: 'Partecipa e Contatti',
    },
  },

  participate: {
    kicker: 'Partecipa',
    title: 'Partecipa e Contatti',
    lead: 'Informazioni per conoscere, contattare e manifestare interesse verso l’OICMCTB.',
    interest: {
      kicker: 'Come partecipare',
      title: 'Manifesta il tuo interesse',
      paragraphs: [
        'Il primo passo è conoscere l’Ordine, la sua storia, la sua missione e i suoi ambiti di azione.',
        'Chi desidera conoscere meglio l’istituzione o manifestare interesse a partecipare può contattarci tramite il modulo di questa pagina o l’e-mail istituzionale.',
        'L’Ordine fornirà indicazioni sulle tappe, sui criteri e sulle condizioni vigenti. Quote, contributi, benefici o regole di ammissione non vengono pubblicati senza validazione istituzionale.',
      ],
      stepsTitle: 'Un percorso semplice',
      steps: [
        { title: 'Conosci l’Ordine', text: 'Leggi la presentazione istituzionale, la storia e l’azione culturale e sociale.' },
        { title: 'Contattaci', text: 'Invia il tuo messaggio tramite il modulo, presentando il tuo interesse.' },
        { title: 'Ricevi indicazioni', text: 'L’Ordine risponderà con le informazioni applicabili al tuo caso.' },
      ],
    },
    activities: {
      kicker: 'Attività e cerimonie',
      title: 'Incontri, cerimonie e solennità',
      paragraphs: [
        'Le cerimonie, le investiture, le elevazioni e le concessioni di titoli e onorificenze sono atti civili e cavallereschi dell’Ordine.',
        'Quando confermato dall’istituzione, questi incontri possono essere aperti a invitati, familiari e alla comunità.',
        'I titoli e le onorificenze concessi dall’OICMCTB non equivalgono a gradi militari ufficiali, titoli accademici, decorazioni governative o titoli pubblici.',
        'Non esiste un calendario fittizio in questa pagina. Eventi e attività confermati saranno annunciati attraverso i canali ufficiali dell’Ordine.',
      ],
    },
    donations: {
      kicker: 'Contributi',
      title: 'Donazioni e contributi',
      paragraphs: [
        'L’OICMCTB non pubblica in questa pagina coordinate bancarie, importi o modalità di pagamento. Non vengono inoltre presentati come garantiti benefici fiscali, detrazioni fiscali o incentivi tributari.',
        'Per ricevere indicazioni su eventuali contributi, contatta l’Ordine attraverso i canali ufficiali.',
      ],
      note: 'L’Ordine non fornisce consulenza fiscale. Le informazioni fiscali devono essere confermate con l’istituzione e con un professionista qualificato.',
    },
    contact: {
      kicker: 'Contatti',
      title: 'Parla con l’OICMCTB',
      emailLabel: 'E-mail istituzionale',
      emailNote: 'Canale ufficiale fornito dall’Ordine.',
      socialLabel: 'Social',
      socialHandle: '@oicmctb',
      platforms: 'Facebook e Instagram',
      note:
        'Indirizzo e telefono non sono pubblicati in questa pagina perché non sono stati confermati dall’istituzione.',
      formTitle: 'Invia un messaggio',
      formIntro: 'Compila i campi sottostanti. Le tue informazioni saranno utilizzate per rispondere al tuo contatto.',
    },
    faq: {
      kicker: 'Domande frequenti',
      title: 'Domande Frequenti',
      lead: 'Risposte basate sulle informazioni istituzionali ufficiali.',
      items: [
        {
          q: 'Che cos’è l’OICMCTB?',
          a: 'L’Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) è un’organizzazione civile brasiliana senza scopo di lucro, di carattere fraterno, culturale, filosofico, civico e filantropico, formalizzata come persona giuridica nel 2021.',
        },
        {
          q: 'Qual è la sua missione?',
          a: 'Contribuire a creare il futuro in modo diverso, promuovendo lo sviluppo umano, la preservazione della storia dei Cavalieri Templari e la conservazione della memoria degli eroi civici locali, attraverso azioni comunitarie, progetti educativi e iniziative di riconoscimento del merito, nel rispetto del modo di vivere, delle tradizioni e delle leggi locali.',
        },
        {
          q: 'Quali sono i suoi valori?',
          a: 'Fede in Dio, speranza, carità, giustizia, prudenza, fortezza e temperanza.',
        },
        {
          q: 'Qual è il rapporto con i Cavalieri Templari storici?',
          a: 'L’OICMCTB preserva e valorizza la memoria e gli ideali cavallereschi associati alla tradizione templare. L’istituzione è un’organizzazione brasiliana contemporanea e non afferma una continuità giuridica o istituzionale diretta con l’ordine medievale.',
        },
        {
          q: 'Qual è il rapporto con la Massoneria?',
          a: 'L’OICMCTB è un’organizzazione civile indipendente e non costituisce un Ordine Massonico. L’istituzione non ha alcun legame istituzionale con la Massoneria. L’eventuale partecipazione di persone che sono anche membri della Massoneria avviene esclusivamente a titolo individuale, mediante ammissione e accettazione formale come membri dell’OICMCTB, senza stabilire alcun legame istituzionale tra le organizzazioni.',
        },
        {
          q: 'Che cosa rappresenta lo stemma?',
          a: 'Lo stemma riunisce uno scudo ogivale, la croce greca rossa, i colori nazionali brasiliani e il sigillo dei due cavalieri. La pagina Storia e Stemma spiega ogni elemento e la sua interpretazione istituzionale.',
        },
        {
          q: 'Qual è l’attività dell’ABTL?',
          a: 'L’Academia Brasileira Templária de Letras (ABTL) è il braccio culturale e letterario associato all’Ordine, dedicato alla ricerca storica, alla letteratura, alle pubblicazioni culturali, agli studi araldici e alla preservazione delle tradizioni.',
        },
        {
          q: 'Come ottenere informazioni su partecipazione e attività?',
          a: 'Contatta l’Ordine tramite il modulo di questa pagina o l’e-mail istituzionale. L’Ordine fornirà indicazioni su partecipazione, attività ed eventuali contributi, senza pubblicare regole o condizioni non confermate.',
        },
      ],
    },
  },

  legal: {
    updatedLabel: 'Ultimo aggiornamento',
    reviewNote:
      'Questo documento è un testo istituzionale iniziale e deve essere rivisto legalmente dall’Ordine prima di essere considerato definitivo.',
    privacy: {
      title: 'Informativa sulla Privacy',
      paragraphs: [
        'L’OICMCTB tratta i dati inviati volontariamente tramite il modulo di contatto — nome, e-mail, telefono, città, oggetto e messaggio — esclusivamente per rispondere alla richiesta e mantenere il relativo contatto amministrativo.',
        'I dati non sono venduti né condivisi con terzi per finalità commerciali. L’accesso è riservato alle persone responsabili della gestione delle richieste.',
        'L’interessato può richiedere informazioni, correzione o cancellazione dei propri dati scrivendo all’e-mail istituzionale oicmctb@gmail.com.',
        'Questo sito è statico e non mantiene un registro dei visitatori. I fornitori di hosting possono registrare dati tecnici di accesso secondo le proprie politiche.',
      ],
    },
    terms: {
      title: 'Termini di Utilizzo',
      paragraphs: [
        'Questo sito ha finalità informativa e istituzionale. Il contenuto presentato non costituisce offerta di servizi, consulenza legale, fiscale o finanziaria.',
        'La riproduzione di testi e immagini istituzionali deve rispettare l’autorialità e l’identità dell’OICMCTB. Lo stemma e il sigillo sono materiali istituzionali e non possono essere alterati o utilizzati in modo da suggerire un legame inesistente.',
        'I link esterni, quando presenti, sono offerti per comodità del visitatore. L’OICMCTB non è responsabile del contenuto di siti di terzi.',
        'Le informazioni istituzionali possono essere aggiornate senza preavviso.',
      ],
    },
    cookies: {
      title: 'Cookie',
      paragraphs: [
        'Questo sito non utilizza cookie propri di pubblicità o di profilazione dei visitatori.',
        'Risorse tecniche di hosting o di sicurezza possono utilizzare cookie strettamente necessari al funzionamento e alla protezione del sito.',
        'Il visitatore può gestire i cookie nelle impostazioni del proprio browser.',
      ],
    },
  },

  notFound: {
    kicker: 'Pagina non trovata',
    title: 'Questo percorso non esiste',
    text: 'La pagina che cerchi potrebbe essere stata spostata o non esistere. Torna all’inizio ed esplora l’Ordine.',
    cta: 'Torna alla home',
  },
};
