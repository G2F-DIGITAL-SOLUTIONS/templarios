import type { Widen } from '../dictionaries';
import type { Dictionary } from './pt';

/**
 * French dictionary — complete, not a partial override.
 * The official name and acronym are kept in Portuguese; only the descriptive
 * text is translated.
 */
export const fr: Widen<Dictionary> = {
  meta: {
    siteName: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
    shortName: 'OICMCTB',
    tagline: 'Tradition chevaleresque, culture et service du bien commun.',
    defaultDescription:
      "Découvrez l'OICMCTB : identité institutionnelle, histoire, blason, Académie brésilienne templière des lettres, Dames templières et actions culturelles et sociales.",
    ogLocale: 'fr_FR',
  },

  common: {
    skipToContent: 'Aller au contenu principal',
    enter: 'Entrer',
    home: 'Accueil',
    breadcrumb: 'Vous êtes ici',
    onThisPage: 'Sur cette page',
  },

  language: {
    label: 'Langue',
    switchTo: 'Changer de langue pour',
    current: 'Langue actuelle',
  },

  nav: {
    label: 'Navigation principale',
    home: 'Accueil',
    order: "L'Ordre",
    heritage: 'Histoire et blason',
    society: 'Culture et action sociale',
    participate: 'Participer et contact',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    ctaPrimary: "Découvrir l'Ordre",
    ctaSecondary: 'Participer',
  },

  footer: {
    aboutTitle: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
    aboutText:
      "Organisation civile brésilienne à but non lucratif, de caractère fraternel, culturel, philosophique, civique et philanthropique, dédiée au développement humain, à la préservation de la mémoire historique et au bien commun.",
    institutionalTitle: 'Institutionnel',
    contactTitle: 'Contact',
    legalTitle: 'Mentions légales',
    languagesTitle: 'Langues',
    socialTitle: 'Réseaux sociaux',
    privacy: 'Politique de confidentialité',
    terms: "Conditions d'utilisation",
    cookies: 'Cookies',
    rights: 'Tous droits réservés.',
    motto: 'CREARE FUTURUM MUTATO MODO',
    dataNote: "Données institutionnelles fournies par l'Ordre.",
  },

  a11y: {
    decorative: 'Élément décoratif',
    requiredField: 'champ obligatoire',
    formError:
      "L'envoi n'a pas pu être effectué. Réessayez ou écrivez à notre adresse électronique.",
    formOpening: 'Ouverture de votre logiciel de messagerie…',
  },

  forms: {
    name: 'Nom complet',
    email: 'Courriel',
    phone: 'Téléphone',
    city: 'Ville',
    subject: 'Objet',
    message: 'Message',
    interest: "Parlez-nous de votre intérêt à connaître ou à rejoindre l'Ordre.",
    send: 'Envoyer le message',
    consent: "J'autorise l'utilisation de mes données pour répondre à ce contact.",
    requiredNote: 'Les champs marqués d’un * sont obligatoires.',
    mailSubject: "Message via le site de l'OICMCTB",
  },

  home: {
    hero: {
      kicker: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
      title: 'Tradition chevaleresque, culture et service du bien commun.',
      lead: 'CREARE FUTURUM MUTATO MODO — Créer l’avenir d’une manière différente.',
      intro:
        "L'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) est une organisation civile brésilienne à but non lucratif, de caractère fraternel, culturel, philosophique, civique et philanthropique.",
      primaryCta: "Découvrir l'Ordre",
      secondaryCta: 'Histoire et blason',
    },
    about: {
      kicker: 'Qui sommes-nous',
      title: 'Un ordre templier brésilien, civil et autonome',
      lead:
        "L'OICMCTB allie la valorisation des traditions chevaleresques à un engagement contemporain en faveur du développement humain, de la mémoire historique, du savoir et du service à la société.",
      body:
        "Formalisé comme personne morale en 2021, selon les informations institutionnelles fournies, l'Ordre oriente ses activités par des principes tels que la foi, l'espérance, la charité, la justice, la prudence, la force d'âme et la tempérance. Sa proposition comprend le renforcement des liens fraternels, la recherche historique, la valorisation de la culture, la reconnaissance du mérite civique et l'encouragement d'initiatives qui contribuent au bien commun.",
      highlights: {
        identity: 'Identité',
        identityText:
          'Organisation civile brésilienne indépendante, sans lien institutionnel avec la franc-maçonnerie.',
        origin: 'Formalisation',
        originText:
          'Personne morale depuis 2021, sous la Grande Maîtrise de Roberto Aguiar Guazzelli.',
        values: 'Valeurs',
        valuesText:
          "Foi en Dieu, espérance, charité, justice, prudence, force d'âme et tempérance.",
        today: 'Action',
        todayText:
          'Culture, recherche historique, éducation, santé, sport, environnement et assistance sociale.',
      },
      cta: "Découvrir l'Ordre",
      ctaSecondary: 'Notre histoire et notre blason',
    },
    motto: {
      title: 'Devise officielle',
      latin: 'CREARE FUTURUM MUTATO MODO',
      translation: 'Créer l’avenir d’une manière différente.',
      text:
        "La devise résume l'orientation institutionnelle consistant à construire l'avenir par des valeurs, des attitudes et des actions engagées en faveur du bien commun.",
    },
    values: {
      kicker: 'Valeurs',
      title: "Sept valeurs orientent l'Ordre",
      lead:
        "Les valeurs institutionnelles sont vécues comme des engagements de conduite et de service.",
      items: [
        'Foi en Dieu.',
        'Espérance.',
        'Charité.',
        'Justice.',
        'Prudence.',
        "Force d'âme.",
        'Tempérance.',
      ],
    },
    independence: {
      kicker: 'Indépendance institutionnelle',
      title: 'Une organisation civile, non maçonnique',
      text:
        "L'OICMCTB est une organisation civile indépendante et ne constitue pas un Ordre maçonnique. L'institution n'a aucun lien institutionnel avec la franc-maçonnerie. L'éventuelle participation de personnes également membres de la franc-maçonnerie se fait exclusivement à titre individuel, après adhésion et acceptation formelle comme membres de l'OICMCTB, sans établir de lien institutionnel entre les organisations.",
      cta: "En savoir plus dans L'Ordre",
    },
    doors: {
      kicker: "Découvrir l'OICMCTB",
      title: 'Par où commencer',
      lead:
        "Choisissez le sujet que vous souhaitez découvrir. Toute l'institution est organisée en quatre pages principales.",
      items: {
        order: {
          label: "L'Ordre",
          text: 'Identité, histoire, mission, vision, valeurs, philosophie et informations institutionnelles.',
          cta: "Découvrir l'Ordre",
        },
        heritage: {
          label: 'Histoire et blason',
          text: "La construction de l'identité institutionnelle, le sceau et la signification du blason.",
          cta: "Voir l'histoire et le blason",
        },
        society: {
          label: 'Culture et action sociale',
          text: "ABTL, Dames templières et les domaines culturels, éducatifs et sociaux de l'Ordre.",
          cta: "Découvrir l'action",
        },
        participate: {
          label: 'Participer et contact',
          text: "Comment manifester son intérêt, contacter l'Ordre et obtenir des informations sur les contributions.",
          cta: 'Participer et contacter',
        },
      },
    },
    society: {
      kicker: 'Culture et action sociale',
      title: 'Une tradition qui se traduit en service',
      lead:
        "L'OICMCTB réunit des initiatives culturelles, éducatives, philanthropiques et de préservation de la mémoire historique.",
      items: [
        {
          title: 'Académie brésilienne templière des lettres (ABTL)',
          text: "Bras culturel et littéraire de l'Ordre, consacré à la recherche historique, à la production intellectuelle et aux publications culturelles.",
        },
        {
          title: 'Conseil national des Dames templières',
          text: "Participation des femmes à la vie culturelle, institutionnelle et communautaire de l'Ordre.",
        },
        {
          title: 'Éducation, santé et assistance sociale',
          text: 'Actions consacrées au savoir, au bien-être et au soutien des personnes les plus fragiles.',
        },
        {
          title: 'Environnement et mémoire civique',
          text: "Protection de l'Amazonie, sensibilisation environnementale et valorisation de la mémoire des héros civiques locaux.",
        },
      ],
      cta: "Découvrir l'action sociale",
    },
    finalCta: {
      kicker: 'Participer',
      title: "Découvrez l'Ordre et manifestez votre intérêt",
      lead: "Pour découvrir, contacter ou manifester votre intérêt, l'Ordre est à votre disposition.",
      primary: 'Participer et contact',
      secondary: "Parler à l'Ordre",
    },
  },

  pages: {
    order: {
      kicker: "L'Ordre",
      title: "L'Ordre",
      lead:
        "Identité, histoire, mission, vision, valeurs, philosophie et informations institutionnelles de l'OICMCTB.",
    },
    heritage: {
      kicker: 'Identité et symbolique',
      title: 'Histoire et blason',
      lead:
        "Le parcours de l'identité institutionnelle de l'OICMCTB et la signification du sceau et du blason.",
    },
    society: {
      kicker: 'Culture et action sociale',
      title: 'Culture et action sociale',
      lead: "La dimension culturelle, littéraire et communautaire de l'OICMCTB.",
    },
    participate: {
      kicker: 'Participer',
      title: 'Participer et contact',
      lead:
        "Informations pour découvrir, contacter et manifester votre intérêt pour l'OICMCTB.",
    },
    privacy: {
      kicker: 'Mentions légales',
      title: 'Politique de confidentialité',
      lead: "Comment l'OICMCTB traite les données envoyées via ce site.",
    },
    terms: {
      kicker: 'Mentions légales',
      title: "Conditions d'utilisation",
      lead: "Conditions d'utilisation du site institutionnel de l'OICMCTB.",
    },
    cookies: {
      kicker: 'Mentions légales',
      title: 'Cookies',
      lead: "Informations sur l'utilisation des cookies sur ce site.",
    },
  },

  order: {
    kicker: "L'Ordre",
    title: "L'Ordre",
    lead:
      "Identité, histoire, mission, vision, valeurs, philosophie et informations institutionnelles de l'OICMCTB.",
    sections: [
      {
        id: 'quem-somos',
        title: 'Qui sommes-nous',
        paragraphs: [
          "L'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) est une organisation civile brésilienne à but non lucratif, de caractère fraternel, culturel, philosophique, civique et philanthropique.",
          "L'institution cherche à allier la valorisation des traditions chevaleresques à un engagement contemporain en faveur du développement humain, de la préservation de la mémoire historique, du savoir et du service à la société.",
          "Formalisé comme personne morale en 2021, selon les informations institutionnelles fournies, l'Ordre oriente ses activités par des principes tels que la foi, l'espérance, la charité, la justice, la prudence, la force d'âme et la tempérance.",
          "Sa proposition comprend le renforcement des liens fraternels, la recherche historique, la valorisation de la culture, la reconnaissance du mérite civique et l'encouragement d'initiatives qui contribuent au bien commun.",
        ],
      },
      {
        id: 'historia',
        title: "Histoire de l'OICMCTB",
        paragraphs: [
          "L'idéalisation et la direction de l'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil sont attribuées au Grand Maître Roberto Aguiar Guazzelli, selon le matériel institutionnel fourni.",
          "L'Ordre a été formalisé comme personne morale en 2021. Ce jalon est associé à l'inscription « MMXXI » présente sur le sceau institutionnel.",
          "La construction de l'identité institutionnelle a inclus l'élaboration du sceau et du blason, la valorisation des idéaux chevaleresques et l'action culturelle et littéraire de l'Académie brésilienne templière des lettres (ABTL).",
          "L'histoire de l'organisation brésilienne contemporaine est distincte de l'histoire médiévale des Chevaliers templiers. L'utilisation de symboles et l'inspiration d'une tradition ne prouvent pas, à elles seules, une continuité juridique ou institutionnelle directe avec l'ordre médiéval.",
          "L'histoire de l'identité visuelle et l'explication des éléments héraldiques sont présentées sur la page Histoire et blason.",
        ],
      },
      {
        id: 'missao-visao-e-valores',
        title: 'Mission, vision et valeurs',
        paragraphs: [
          "Mission : contribuer à créer l'avenir d'une manière différente, en promouvant le développement humain, la préservation de l'histoire des chevaliers templiers et le maintien de la mémoire des héros civiques locaux, par des actions communautaires, des projets éducatifs et des initiatives de reconnaissance du mérite, dans le respect du mode de vie, des traditions et des lois locales.",
          "Vision : être reconnue internationalement comme un ordre templier légitimement brésilien, une organisation civile à but non lucratif qui contribue effectivement à l'amélioration de la vie de ses membres et des communautés dans lesquelles elle s'inscrit, avec foi en Dieu, respect des traditions locales et engagement en faveur de la préservation de la mémoire historique des templiers et des héros civiques régionaux.",
          "La vision exprime une intention institutionnelle. Sa formulation ne constitue pas, en soi, une affirmation d'une reconnaissance internationale déjà obtenue.",
          "Valeurs : foi en Dieu, espérance, charité, justice, prudence, force d'âme et tempérance.",
        ],
      },
      {
        id: 'lema',
        title: 'Devise officielle',
        paragraphs: [
          'CREARE FUTURUM MUTATO MODO.',
          'Traduction institutionnelle : « Créer l’avenir d’une manière différente. »',
          "La devise reste identique dans toutes les versions du site. La traduction explicative peut varier selon la langue.",
        ],
      },
      {
        id: 'filosofia-e-mistica',
        title: 'Philosophie de travail et mystique',
        paragraphs: [
          "La philosophie de travail de l'Ordre invite ses membres à faire preuve d'humilité, à reconnaître et corriger leurs propres erreurs, à agir avec sincérité, à aimer la justice, à être miséricordieux, à témoigner de la foi, à vivre dans la vérité, à supporter les adversités lorsque cela est nécessaire et à servir le bien commun.",
          "La mystique de l'OICMCTB est comprise comme une dimension philosophique et spirituelle de l'expérience des valeurs : une recherche de sens, de conscience, d'introspection et de responsabilité individuelle, orientée vers le service du collectif.",
          "L'Ordre présente son action avec transparence. Sa mystique n'est pas décrite comme un ensemble de pouvoirs surnaturels, de secrets ou de pratiques occultes, et l'institution ne se présente pas comme détentrice de connaissances réservées.",
          "La dimension spirituelle est vécue dans le respect de la foi, de la conscience et de la diversité des personnes, sans faire de l'Ordre une institution ecclésiastique.",
        ],
      },
      {
        id: 'independencia',
        title: 'Indépendance à l’égard de la franc-maçonnerie',
        paragraphs: [
          "L'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) est une organisation civile indépendante et ne constitue pas un Ordre maçonnique. L'institution n'a aucun lien institutionnel avec la franc-maçonnerie.",
          "L'éventuelle participation de personnes également membres de la franc-maçonnerie se fait exclusivement à titre individuel, après adhésion et acceptation formelle comme membres de l'OICMCTB, sans établir de lien institutionnel entre les organisations.",
          "L'absence de lien institutionnel n'implique ni interdiction ni restriction à la participation individuelle de personnes également membres de la franc-maçonnerie.",
        ],
      },
    ],
    info: {
      title: 'Informations institutionnelles',
      lead:
        "Données institutionnelles de l'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil.",
      note:
        "Données d'enregistrement fournies par l'Ordre. Elles ne remplacent pas un certificat ou une consultation des registres officiels.",
      items: [
        {
          label: 'Dénomination légale',
          value: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
        },
        { label: 'CNPJ', value: '42.071.770/0001-75' },
        { label: 'Grande Maîtrise', value: 'Roberto Aguiar Guazzelli' },
        {
          label: 'Conseil national des Dames templières',
          value: 'Sueli Teodoro — Première dame',
        },
        {
          label: 'Bras culturel et littéraire',
          value: 'Académie brésilienne templière des lettres (ABTL)',
        },
        { label: 'Courriel institutionnel', value: 'oicmctb@gmail.com' },
        { label: 'Réseaux sociaux', value: '@oicmctb — Facebook et Instagram' },
      ],
    },
  },

  heritage: {
    kicker: 'Identité et symbolique',
    title: 'Histoire et blason',
    lead:
      "Le parcours de l'identité institutionnelle de l'OICMCTB et la signification du sceau et du blason.",
    intro:
      "Cette page réunit l'histoire de l'identité institutionnelle de l'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) et l'explication des éléments du sceau et du blason, sur la base du matériel héraldique fourni par l'institution.",
    history: {
      title: "La construction de l'identité institutionnelle",
      paragraphs: [
        "L'idéalisation et la direction de l'OICMCTB sont attribuées au Grand Maître Roberto Aguiar Guazzelli. L'Ordre a été formalisé comme personne morale en 2021, jalon associé à l'inscription « MMXXI » du sceau.",
        "L'élaboration du sceau et du blason a fait partie de la construction de l'identité institutionnelle, dans le respect de la tradition héraldique et des valeurs chevaleresques. L'action culturelle et littéraire de l'Académie brésilienne templière des lettres (ABTL) s'inscrit dans ce parcours.",
        "L'origine historique du modèle iconographique des deux chevaliers est distincte de la création du sceau propre à l'OICMCTB. L'inspiration d'une tradition ne prouve pas une continuité juridique ou institutionnelle avec l'ordre médiéval.",
      ],
    },
    seal: {
      id: 'selo',
      title: 'Le sceau institutionnel',
      paragraphs: [
        "Le sceau rond présente deux chevaliers templiers partageant le même cheval, une composition inspirée de l'iconographie templière historique.",
        "Selon l'interprétation institutionnelle présentée par l'OICMCTB, les chevaliers se déplacent visuellement de droite à gauche, en sens inverse de la représentation traditionnelle mentionnée dans le document.",
        "Cette inversion symbolise, pour l'Ordre :",
        "L'inscription qui accompagne le sceau est « SIGNUM TEMPLARIORUM BRASILIAE », traduite par « Signe des Templiers brésiliens ». De petites croix de Malte séparent les mots de l'inscription, conformément à la représentation officielle.",
        "L'inscription « MMXXI » correspond à 2021, année associée à la formalisation de l'institution comme personne morale.",
        "Ces significations sont présentées comme l'interprétation de l'OICMCTB elle-même, et non comme un fait historique universellement établi.",
      ],
      items: [
        "Une posture de contrepoint à l'inversion des valeurs du monde contemporain.",
        "Le rejet symbolique d'un état de choses considéré comme contraire aux principes de l'Ordre.",
        "Le retour au chemin de la droiture, des vertus morales et de la foi.",
        "La nécessité de retrouver des valeurs anciennes sans cesser de regarder l'avenir.",
      ],
    },
    shield: {
      id: 'brasao',
      title: 'Le blason : l’écu',
      paragraphs: [
        "L'écu est classique, ogival et lancéolé, avec une division symétrique en quatre parties.",
        'Les deux bandes perpendiculaires qui se croisent au centre forment une croix grecque rouge.',
        "Les champs de l'écu utilisent le vert, appelé Sinople dans la description héraldique ; le jaune, appelé Or ; le rouge, appelé Gueules ; et l'argent pour le contour et les éléments décrits.",
        "Selon l'interprétation du document, les couleurs verte et jaune renvoient aux couleurs nationales brésiliennes, et la croix rouge évoque les idéaux templiers, la justice et la vérité.",
        "Au centre de l'écu se trouve le sceau rond avec les deux chevaliers.",
      ],
    },
    helmet: {
      id: 'elmo',
      title: 'Le heaume',
      paragraphs: [
        "Le heaume est primitif, sans bourrelet, représenté de trois quarts et en argent. Il fait partie de la composition héraldique comme élément de l'identité chevaleresque de l'Ordre.",
      ],
    },
    mantling: {
      id: 'paquifes',
      title: 'Les lambrequins',
      paragraphs: [
        "Les lambrequins sont les ornements latéraux de la composition, décrits avec des éléments en bleu, or et argent.",
        "Le document relie leur composition à la tradition héraldique de la famille Guazzelli. Cette référence familiale est présentée comme une information du matériel institutionnel, sans extrapoler vers des prétentions de lignage médiéval.",
      ],
    },
    crest: {
      id: 'timbre',
      title: 'Le cimier',
      paragraphs: [
        "Le cimier est une croix de Malte templière, rouge, aux pointes ouvertes, placée dans la partie supérieure de la composition.",
      ],
    },
    warCry: {
      id: 'grito-de-guerra',
      title: 'Le cri de guerre',
      paragraphs: [
        "Le cri de guerre est l'inscription latine « CREARE FUTURUM MUTATO MODO », associée à la traduction « Créer l'avenir d'une manière différente ».",
        "La devise résume l'orientation institutionnelle consistant à construire l'avenir par des valeurs, des attitudes et des actions engagées en faveur du bien commun.",
      ],
    },
    divisa: {
      id: 'divisa',
      title: 'La devise',
      paragraphs: [
        "La devise est un listel jaune ou or qui présente le sigle « O.I.C.M.C.T.B. ».",
        "Le sigle correspond à Ordem Internacional Civil Militar Cavaleiros Templários do Brasil.",
      ],
    },
    colors: {
      id: 'cores',
      title: 'Couleurs officielles',
      paragraphs: [
        "Le document présente des références chromatiques en RVB, CMJN et Pantone pour certains éléments. Certains détails doivent être vérifiés entre les descriptions textuelles et les codes indiqués.",
        "Le fichier vectoriel officiel du blason est la principale référence pour la représentation visuelle. Les couleurs officielles ne doivent pas être modifiées sur la seule base de l'interprétation des chiffres.",
      ],
      items: [
        'Argent : RVB 208, 211, 212 ; Pantone 427 C.',
        'Rouge Gueules : RVB 239, 51, 64 ; Pantone Red 032 C.',
        'Vert Sinople : RVB 0, 150, 57 ; Pantone 355 C.',
        'Jaune Or : RVB 254, 221, 0.',
        'Bleu : RVB 16, 6, 159 ; Pantone Blue 072 C.',
        'Noir Sable : RVB 45, 41, 38 ; Pantone Black C.',
      ],
    },
    fidelity: {
      id: 'fidelidade-grafica',
      title: 'Fidélité graphique',
      paragraphs: [
        "Le blason officiel est un matériel institutionnel et doit être traité en préservant les proportions, la lisibilité et les couleurs. Aucun élément ne doit être ajouté à la composition officielle.",
        "Le site ne recrée pas le blason par approximation et ne le remplace pas par une version générée artificiellement. La représentation officielle en fichier vectoriel est conservée par l'Ordre et doit être utilisée pour les applications exigeant l'art final.",
      ],
    },
  },

  society: {
    kicker: 'Culture et action sociale',
    title: 'Culture et action sociale',
    lead: "La dimension culturelle, littéraire et communautaire de l'OICMCTB.",
    intro:
      "L'Ordre conçoit la tradition chevaleresque comme un engagement en faveur du savoir, de la culture et du service du bien commun. Cette page réunit le bras culturel de l'institution, la participation des Dames templières et ses domaines d'action.",
    abtl: {
      kicker: 'Bras culturel et littéraire',
      title: 'Académie brésilienne templière des lettres (ABTL)',
      paragraphs: [
        "L'Académie brésilienne templière des lettres (ABTL) est le bras culturel et littéraire associé à l'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB), selon la description institutionnelle fournie.",
        "Son action est consacrée à la recherche historique, à la littérature et à la production intellectuelle, aux publications culturelles, aux études héraldiques, à la préservation des traditions et à l'encouragement des arts, des sciences et de la production de savoir.",
        "Les études théologiques sont prises en compte lorsqu'elles sont compatibles avec l'action effective de l'Académie. L'Ordre n'attribue pas à l'ABTL des membres, publications, prix, projets ou fonctions non confirmés.",
      ],
      areasTitle: "Domaines d'action de l'ABTL",
      areas: [
        'Recherche historique.',
        'Littérature et production intellectuelle.',
        'Publications culturelles.',
        'Études héraldiques.',
        'Préservation des traditions.',
        'Encouragement des arts, des sciences et de la production de savoir.',
        "Études théologiques, lorsqu'elles sont compatibles avec l'action effective.",
      ],
    },
    ladies: {
      kicker: 'Conseil national des Dames templières',
      title: 'Dames templières',
      paragraphs: [
        "Le Conseil national des Dames templières participe à la vie culturelle, institutionnelle et communautaire de l'Ordre, en contribuant à ses initiatives et au renforcement des liens fraternels.",
        "La participation des femmes est valorisée sans créer de fonctions, de projets ou de responsabilités non documentés.",
      ],
      firstLadyLabel: 'Première dame',
      firstLadyName: 'Sueli Teodoro',
      firstLadyNote:
        "Identification conforme aux informations institutionnelles fournies. Le titre de Première dame n'est pas automatiquement converti en présidence, direction exécutive ou autre fonction non confirmée.",
    },
    areas: {
      kicker: "Domaines d'action",
      title: "Domaines d'action et objectifs institutionnels",
      lead:
        "Les domaines ci-dessous sont des axes de travail et des objectifs de l'Ordre, conformément au matériel institutionnel.",
      items: [
        {
          title: 'Assistance sociale',
          text: "Soutien aux personnes dans le besoin et initiatives de solidarité et d'appui communautaire.",
        },
        {
          title: 'Éducation',
          text: "Appui à l'accès à l'éducation, à la culture et au savoir, en concevant l'apprentissage comme un chemin tout au long de la vie.",
        },
        {
          title: 'Santé',
          text: 'Actions de soutien à la santé, au bien-être et à l’assistance aux personnes les plus fragiles.',
        },
        {
          title: 'Sport',
          text: "Encouragement de la pratique sportive comme discipline, intégration sociale et développement humain.",
        },
        {
          title: 'Environnement',
          text: "Protection de l'Amazonie, sensibilisation environnementale et respect de la Terre et de la diversité de la vie.",
        },
        {
          title: 'Culture',
          text: 'Valorisation de la culture, des traditions et de la production intellectuelle.',
        },
        {
          title: 'Recherche historique',
          text: "Préservation de la mémoire historique et stimulation de la recherche, y compris les études héraldiques.",
        },
        {
          title: 'Actions communautaires',
          text: 'Initiatives de rapprochement avec les communautés et de service du bien commun.',
        },
        {
          title: 'Mémoire des héros civiques',
          text: 'Valorisation de la mémoire des héros civiques locaux et régionaux et reconnaissance du mérite civique.',
        },
      ],
      note:
        "La présentation de ces domaines n'implique pas que tous disposent déjà de projets en cours. Lorsqu'il existera des projets documentés, ils seront présentés avec leur nom, objectif, public, lieu, période et résultats.",
    },
    publications: {
      kicker: 'Savoir',
      title: 'Publications et études',
      paragraphs: [
        "L'Ordre et l'ABTL encouragent la recherche historique, la production intellectuelle et les publications culturelles. Lorsque des publications disponibles et vérifiées existeront, elles seront présentées sur cette page.",
        "Aucun article, conférence, prix ou publication fictif n'est présenté pour remplir la section.",
      ],
    },
    cta: {
      title: "Découvrez aussi l'Ordre",
      lead: "L'histoire, la mission et les valeurs institutionnelles sont réunies dans L'Ordre.",
      primary: "L'Ordre",
      secondary: 'Participer et contact',
    },
  },

  participate: {
    kicker: 'Participer',
    title: 'Participer et contact',
    lead: "Informations pour découvrir, contacter et manifester votre intérêt pour l'OICMCTB.",
    interest: {
      kicker: 'Comment participer',
      title: 'Manifestez votre intérêt',
      paragraphs: [
        "La première étape consiste à découvrir l'Ordre, son histoire, sa mission et ses domaines d'action.",
        "Ceux qui souhaitent mieux connaître l'institution ou manifester leur intérêt à participer peuvent nous contacter via le formulaire de cette page ou par courriel institutionnel.",
        "L'Ordre indiquera les étapes, les critères et les conditions en vigueur. Aucun tarif, cotisation, avantage ou règle d'adhésion n'est publié sans validation institutionnelle.",
      ],
      stepsTitle: 'Un parcours simple',
      steps: [
        {
          title: "Découvrir l'Ordre",
          text: "Lisez la présentation institutionnelle, l'histoire et l'action culturelle et sociale.",
        },
        {
          title: 'Prendre contact',
          text: 'Envoyez votre message via le formulaire, en présentant votre intérêt.',
        },
        {
          title: 'Recevoir des informations',
          text: "L'Ordre répondra avec les informations applicables à votre situation.",
        },
      ],
    },
    activities: {
      kicker: 'Activités et cérémonies',
      title: 'Rencontres, cérémonies et solennités',
      paragraphs: [
        "Les cérémonies, investitures, élévations et concessions de titres et d'honneurs sont des actes civils et chevaleresques de l'Ordre.",
        "Lorsqu'elles sont confirmées par l'institution, ces rencontres peuvent être ouvertes aux invités, aux familles et à la communauté.",
        "Les titres et honneurs accordés par l'OICMCTB ne correspondent pas à des fonctions militaires officielles, à des diplômes académiques, à des décorations gouvernementales ou à des titres publics.",
        "Il n'y a pas de calendrier fictif sur cette page. Les événements et activités confirmés seront annoncés par les canaux officiels de l'Ordre.",
      ],
    },
    donations: {
      kicker: 'Contributions',
      title: 'Dons et contributions',
      paragraphs: [
        "L'OICMCTB ne publie pas sur cette page de coordonnées bancaires, de montants ou de moyens de paiement. Aucun avantage fiscal, déduction d'impôt sur le revenu ou incitation fiscale n'est présenté comme garanti.",
        "Pour recevoir des informations sur d'éventuelles contributions, contactez l'Ordre par ses canaux officiels.",
      ],
      note:
        "L'Ordre ne fournit pas de conseil fiscal. Les informations fiscales doivent être confirmées auprès de l'institution et d'un professionnel qualifié.",
    },
    contact: {
      kicker: 'Contact',
      title: "Parler à l'OICMCTB",
      emailLabel: 'Courriel institutionnel',
      emailNote: "Canal officiel indiqué par l'Ordre.",
      socialLabel: 'Réseaux sociaux',
      socialHandle: '@oicmctb',
      platforms: 'Facebook et Instagram',
      note:
        "L'adresse et le téléphone ne sont pas publiés sur cette page car ils n'ont pas été confirmés par l'institution.",
      formTitle: 'Envoyer un message',
      formIntro:
        'Remplissez les champs ci-dessous. Vos informations seront utilisées pour répondre à votre demande.',
    },
    faq: {
      kicker: 'Questions fréquentes',
      title: 'Questions fréquentes',
      lead: 'Réponses fondées sur les informations institutionnelles officielles.',
      items: [
        {
          q: "Qu'est-ce que l'OICMCTB ?",
          a: "L'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) est une organisation civile brésilienne à but non lucratif, de caractère fraternel, culturel, philosophique, civique et philanthropique, formalisée comme personne morale en 2021.",
        },
        {
          q: 'Quelle est sa mission ?',
          a: "Contribuer à créer l'avenir d'une manière différente, en promouvant le développement humain, la préservation de l'histoire des chevaliers templiers et le maintien de la mémoire des héros civiques locaux, par des actions communautaires, des projets éducatifs et des initiatives de reconnaissance du mérite, dans le respect du mode de vie, des traditions et des lois locales.",
        },
        {
          q: 'Quelles sont ses valeurs ?',
          a: "Foi en Dieu, espérance, charité, justice, prudence, force d'âme et tempérance.",
        },
        {
          q: 'Quel est le rapport avec les Chevaliers templiers historiques ?',
          a: "L'OICMCTB préserve et valorise la mémoire et les idéaux chevaleresques associés à la tradition templière. L'institution est une organisation brésilienne contemporaine et n'affirme pas de continuité juridique ou institutionnelle directe avec l'ordre médiéval.",
        },
        {
          q: 'Quel est le rapport avec la franc-maçonnerie ?',
          a: "L'OICMCTB est une organisation civile indépendante et ne constitue pas un Ordre maçonnique. L'institution n'a aucun lien institutionnel avec la franc-maçonnerie. L'éventuelle participation de personnes également membres de la franc-maçonnerie se fait exclusivement à titre individuel, après adhésion et acceptation formelle comme membres de l'OICMCTB, sans établir de lien institutionnel entre les organisations.",
        },
        {
          q: 'Que représente le blason ?',
          a: "Le blason réunit un écu ogival, la croix grecque rouge, les couleurs nationales brésiliennes et le sceau des deux chevaliers. La page Histoire et blason explique chaque élément et son interprétation institutionnelle.",
        },
        {
          q: "Quelle est l'action de l'ABTL ?",
          a: "L'Académie brésilienne templière des lettres (ABTL) est le bras culturel et littéraire associé à l'Ordre, consacré à la recherche historique, à la littérature, aux publications culturelles, aux études héraldiques et à la préservation des traditions.",
        },
        {
          q: 'Comment obtenir des informations sur la participation et les activités ?',
          a: "Contactez-nous via le formulaire de cette page ou par courriel institutionnel. L'Ordre indiquera les modalités de participation, les activités et les éventuelles contributions, sans publier de règles ou de conditions non confirmées.",
        },
      ],
    },
  },

  legal: {
    updatedLabel: 'Dernière mise à jour',
    reviewNote:
      "Ce document est un texte institutionnel initial et doit être révisé juridiquement par l'Ordre avant d'être considéré comme définitif.",
    privacy: {
      title: 'Politique de confidentialité',
      paragraphs: [
        "L'OICMCTB traite les données envoyées volontairement via le formulaire de contact — nom, courriel, téléphone, ville, objet et message — exclusivement pour répondre à la demande et maintenir la correspondance administrative correspondante.",
        "Les données ne sont ni vendues ni partagées avec des tiers à des fins commerciales. L'accès est réservé aux personnes responsables du traitement des demandes.",
        "La personne concernée peut demander des informations, la correction ou la suppression de ses données par courriel institutionnel oicmctb@gmail.com.",
        "Ce site est statique et ne tient pas de registre des visiteurs. Les fournisseurs d'hébergement peuvent enregistrer des données techniques d'accès conformément à leurs propres politiques.",
      ],
    },
    terms: {
      title: "Conditions d'utilisation",
      paragraphs: [
        "Ce site a une finalité informative et institutionnelle. Le contenu présenté ne constitue pas une offre de services, un conseil juridique, fiscal ou financier.",
        "La reproduction des textes et images institutionnels doit respecter l'auteur et l'identité de l'OICMCTB. Le blason et le sceau sont des matériels institutionnels et ne peuvent être modifiés ou utilisés d'une manière suggérant un lien inexistant.",
        "Les liens externes, lorsqu'ils existent, sont proposés pour la commodité du visiteur. L'OICMCTB n'est pas responsable du contenu des sites tiers.",
        "Les informations institutionnelles peuvent être mises à jour sans préavis.",
      ],
    },
    cookies: {
      title: 'Cookies',
      paragraphs: [
        "Ce site n'utilise pas de cookies propres à des fins publicitaires ou de profilage des visiteurs.",
        "Des ressources techniques d'hébergement ou de sécurité peuvent utiliser des cookies strictement nécessaires au fonctionnement et à la protection du site.",
        "Le visiteur peut gérer les cookies dans les paramètres de son navigateur.",
      ],
    },
  },

  notFound: {
    kicker: 'Page introuvable',
    title: "Ce chemin n'existe pas",
    text: "La page que vous cherchez a peut-être été déplacée ou n'existe pas. Revenez à l'accueil et découvrez l'Ordre.",
    cta: "Retour à l'accueil",
  },
};
