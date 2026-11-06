import type { Widen } from '../dictionaries';
import type { Dictionary } from './pt';

/**
 * English dictionary — complete, not a partial override.
 * The official name and acronym are kept in Portuguese; only the descriptive
 * text is translated.
 */
export const en: Widen<Dictionary> = {
  meta: {
    siteName: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
    shortName: 'OICMCTB',
    tagline: 'Chivalric tradition, culture and service to the common good.',
    defaultDescription:
      'Discover OICMCTB: institutional identity, history, coat of arms, the Brazilian Templar Academy of Letters, the Templar Ladies and its cultural and social work.',
    ogLocale: 'en_US',
  },

  common: {
    skipToContent: 'Skip to main content',
    enter: 'Enter',
    home: 'Home',
    breadcrumb: 'You are at',
    onThisPage: 'On this page',
  },

  language: {
    label: 'Language',
    switchTo: 'Switch language to',
    current: 'Current language',
  },

  nav: {
    label: 'Main navigation',
    home: 'Home',
    order: 'The Order',
    heritage: 'History and Coat of Arms',
    society: 'Culture and Social Action',
    participate: 'Participate and Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    ctaPrimary: 'Discover the Order',
    ctaSecondary: 'Participate',
  },

  footer: {
    aboutTitle: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
    aboutText:
      'A Brazilian civil nonprofit organization of a fraternal, cultural, philosophical, civic and philanthropic nature, dedicated to human development, the preservation of historical memory and the common good.',
    institutionalTitle: 'Institutional',
    contactTitle: 'Contact',
    legalTitle: 'Legal',
    languagesTitle: 'Languages',
    socialTitle: 'Social media',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    cookies: 'Cookies',
    rights: 'All rights reserved.',
    motto: 'CREARE FUTURUM MUTATO MODO',
    dataNote: 'Institutional data provided by the Order.',
  },

  a11y: {
    decorative: 'Decorative element',
    requiredField: 'required field',
    formError: 'We could not send your message now. Please try again or write to our email.',
    formOpening: 'Opening your email programme…',
  },

  forms: {
    name: 'Full name',
    email: 'Email',
    phone: 'Phone',
    city: 'City',
    subject: 'Subject',
    message: 'Message',
    interest: 'Tell us about your interest in learning about or participating in the Order.',
    send: 'Send message',
    consent: 'I authorise the use of my data to respond to this contact.',
    requiredNote: 'Fields marked with * are required.',
    mailSubject: 'Message from the OICMCTB website',
  },

  home: {
    hero: {
      kicker: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
      title: 'Chivalric tradition, culture and service to the common good.',
      lead: 'CREARE FUTURUM MUTATO MODO — To create the future in a different way.',
      intro:
        'The Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) is a Brazilian civil nonprofit organization of a fraternal, cultural, philosophical, civic and philanthropic nature.',
      primaryCta: 'Discover the Order',
      secondaryCta: 'History and Coat of Arms',
    },
    about: {
      kicker: 'Who we are',
      title: 'A Brazilian Templar order, civil and autonomous',
      lead:
        'OICMCTB combines the appreciation of chivalric traditions with a contemporary commitment to human development, historical memory, knowledge and service to society.',
      body:
        'Formalised as a legal entity in 2021, according to the institutional information provided, the Order guides its activities by principles such as faith, hope, charity, justice, prudence, fortitude and temperance. Its purpose includes strengthening fraternal bonds, historical research, the appreciation of culture, the recognition of civic merit and the encouragement of initiatives that contribute to the common good.',
      highlights: {
        identity: 'Identity',
        identityText: 'An independent Brazilian civil organization, with no institutional link to Freemasonry.',
        origin: 'Formalisation',
        originText: 'A legal entity since 2021, under the Grand Mastery of Roberto Aguiar Guazzelli.',
        values: 'Values',
        valuesText: 'Faith in God, hope, charity, justice, prudence, fortitude and temperance.',
        today: 'Work',
        todayText: 'Culture, historical research, education, health, sport, environment and social assistance.',
      },
      cta: 'Discover the Order',
      ctaSecondary: 'Our history and coat of arms',
    },
    motto: {
      title: 'Official motto',
      latin: 'CREARE FUTURUM MUTATO MODO',
      translation: 'To create the future in a different way.',
      text: 'The motto summarises the institutional orientation to build the future through values, attitudes and actions committed to the common good.',
    },
    values: {
      kicker: 'Values',
      title: 'Seven values guide the Order',
      lead: 'Institutional values are lived as commitments of conduct and service.',
      items: ['Faith in God.', 'Hope.', 'Charity.', 'Justice.', 'Prudence.', 'Fortitude.', 'Temperance.'],
    },
    independence: {
      kicker: 'Institutional independence',
      title: 'A civil organization, not Masonic',
      text:
        'OICMCTB is an independent civil organization and does not constitute a Masonic Order. The institution has no institutional link with Freemasonry. The eventual participation of people who are also Freemasons occurs exclusively on an individual basis, through admission and formal acceptance as members of OICMCTB, without establishing any institutional link between the organizations.',
      cta: 'Learn more in The Order',
    },
    doors: {
      kicker: 'Discover OICMCTB',
      title: 'Where to begin',
      lead: 'Choose the subject you wish to explore. The whole institution is organised into four main pages.',
      items: {
        order: {
          label: 'The Order',
          text: 'Identity, history, mission, vision, values, philosophy and institutional information.',
          cta: 'Discover the Order',
        },
        heritage: {
          label: 'History and Coat of Arms',
          text: 'The construction of the institutional identity, the seal and the meaning of the coat of arms.',
          cta: 'See history and coat of arms',
        },
        society: {
          label: 'Culture and Social Action',
          text: 'ABTL, the Templar Ladies and the cultural, educational and social work of the Order.',
          cta: 'Discover our work',
        },
        participate: {
          label: 'Participate and Contact',
          text: 'How to express interest, contact the Order and obtain guidance on contributions.',
          cta: 'Participate and contact',
        },
      },
    },
    society: {
      kicker: 'Culture and Social Action',
      title: 'A tradition translated into service',
      lead:
        'OICMCTB brings together cultural, educational, philanthropic and historical-memory initiatives.',
      items: [
        {
          title: 'Brazilian Templar Academy of Letters (ABTL)',
          text: 'The cultural and literary arm of the Order, dedicated to historical research, intellectual production and cultural publications.',
        },
        {
          title: 'National Council of Templar Ladies',
          text: 'The participation of women in the cultural, institutional and community life of the Order.',
        },
        {
          title: 'Education, health and social assistance',
          text: 'Areas of work dedicated to knowledge, wellbeing and support for those most in need.',
        },
        {
          title: 'Environment and civic memory',
          text: 'Protection of the Amazon, environmental awareness and appreciation of the memory of local civic heroes.',
        },
      ],
      cta: 'Discover our social work',
    },
    finalCta: {
      kicker: 'Participate',
      title: 'Discover the Order and express your interest',
      lead: 'The Order is available to welcome you, answer questions and receive expressions of interest.',
      primary: 'Participate and Contact',
      secondary: 'Talk to the Order',
    },
  },

  pages: {
    order: {
      kicker: 'The Order',
      title: 'The Order',
      lead: 'Identity, history, mission, vision, values, philosophy and institutional information of OICMCTB.',
    },
    heritage: {
      kicker: 'Identity and symbolism',
      title: 'History and Coat of Arms',
      lead: 'The journey of OICMCTB institutional identity and the meaning of the seal and coat of arms.',
    },
    society: {
      kicker: 'Culture and Social Action',
      title: 'Culture and Social Action',
      lead: 'The cultural, literary and community dimension of OICMCTB.',
    },
    participate: {
      kicker: 'Participate',
      title: 'Participate and Contact',
      lead: 'Information to learn about, contact and express interest in OICMCTB.',
    },
    privacy: {
      kicker: 'Legal',
      title: 'Privacy Policy',
      lead: 'How OICMCTB handles data submitted through this website.',
    },
    terms: {
      kicker: 'Legal',
      title: 'Terms of Use',
      lead: 'Conditions for using the OICMCTB institutional website.',
    },
    cookies: {
      kicker: 'Legal',
      title: 'Cookies',
      lead: 'Information about the use of cookies on this website.',
    },
  },

  order: {
    kicker: 'The Order',
    title: 'The Order',
    lead: 'Identity, history, mission, vision, values, philosophy and institutional information of OICMCTB.',
    sections: [
      {
        id: 'quem-somos',
        title: 'Who we are',
        paragraphs: [
          'The Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) is a Brazilian civil nonprofit organization of a fraternal, cultural, philosophical, civic and philanthropic nature.',
          'The institution seeks to unite the appreciation of chivalric traditions with a contemporary commitment to human development, the preservation of historical memory, knowledge and service to society.',
          'Formalised as a legal entity in 2021, according to the institutional information provided, the Order guides its activities by principles such as faith, hope, charity, justice, prudence, fortitude and temperance.',
          'Its purpose includes strengthening fraternal bonds, historical research, the appreciation of culture, the recognition of civic merit and the encouragement of initiatives that contribute to the common good.',
        ],
      },
      {
        id: 'historia',
        title: 'History of OICMCTB',
        paragraphs: [
          'The ideation and leadership of the Ordem Internacional Civil Militar Cavaleiros Templários do Brasil are attributed to Grand Master Roberto Aguiar Guazzelli, according to the institutional material provided.',
          'The Order was formalised as a legal entity in 2021. This milestone is associated with the inscription "MMXXI" on the institutional seal.',
          'The construction of the institutional identity included the development of the seal and coat of arms, the appreciation of chivalric ideals and the cultural and literary work of the Brazilian Templar Academy of Letters (ABTL).',
          'The history of the contemporary Brazilian organization is distinct from the medieval history of the Knights Templar. The use of symbols and inspiration from a tradition does not, by itself, prove legal or institutional continuity with the medieval order.',
          'The history of the visual identity and the explanation of the heraldic elements are presented on the History and Coat of Arms page.',
        ],
      },
      {
        id: 'missao-visao-e-valores',
        title: 'Mission, vision and values',
        paragraphs: [
          'Mission: to contribute to creating the future in a different way, promoting human development, the preservation of the history of the Knights Templar and the maintenance of the memory of local civic heroes, through community actions, educational projects and merit recognition initiatives, respecting the way of life, traditions and local laws.',
          'Vision: to be recognised internationally as a legitimately Brazilian Templar order, a civil nonprofit organization that effectively contributes to improving the lives of its members and the communities in which it operates, with faith in God, respect for local traditions and commitment to preserving the historical memory of the Templars and regional civic heroes.',
          'The vision expresses an institutional purpose. Its formulation does not, by itself, constitute a claim of international recognition already achieved.',
          'Values: faith in God, hope, charity, justice, prudence, fortitude and temperance.',
        ],
      },
      {
        id: 'lema',
        title: 'Official motto',
        paragraphs: [
          'CREARE FUTURUM MUTATO MODO.',
          'Institutional translation: "To create the future in a different way."',
          'The motto remains identical in every language version of the website. The explanatory translation may vary according to the language.',
        ],
      },
      {
        id: 'filosofia-e-mistica',
        title: 'Working philosophy and mysticism',
        paragraphs: [
          'The working philosophy of the Order guides its members to show humility, acknowledge and correct their own errors, act with sincerity, love justice, be merciful, demonstrate faith, live in truth, endure adversity when necessary and serve the common good.',
          'The mysticism of OICMCTB is understood as a philosophical and spiritual dimension of living the values: a search for meaning, awareness, introspection and individual responsibility, oriented towards service to the community.',
          'The Order presents its work transparently. Its mysticism is not described as a set of supernatural powers, secrets or occult practices, and the institution does not present itself as the holder of reserved knowledge.',
          'The spiritual dimension is lived in respect for faith, conscience and the diversity of people, without turning the Order into an ecclesiastical institution.',
        ],
      },
      {
        id: 'independencia',
        title: 'Independence from Freemasonry',
        paragraphs: [
          'The Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) is an independent civil organization and does not constitute a Masonic Order. The institution has no institutional link with Freemasonry.',
          'The eventual participation of people who are also Freemasons occurs exclusively on an individual basis, through admission and formal acceptance as members of OICMCTB, without establishing any institutional link between the organizations.',
          'The absence of an institutional link does not imply a prohibition or restriction on the individual participation of people who are also members of Freemasonry.',
        ],
      },
    ],
    info: {
      title: 'Institutional information',
      lead: 'Institutional data of the Ordem Internacional Civil Militar Cavaleiros Templários do Brasil.',
      note:
        'Registration data provided by the Order. It does not replace a certificate or consultation of official records.',
      items: [
        { label: 'Legal name', value: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil' },
        { label: 'CNPJ', value: '42.071.770/0001-75' },
        { label: 'Grand Mastery', value: 'Roberto Aguiar Guazzelli' },
        { label: 'National Council of Templar Ladies', value: 'Sueli Teodoro — First Lady' },
        { label: 'Cultural and literary arm', value: 'Brazilian Templar Academy of Letters (ABTL)' },
        { label: 'Institutional email', value: 'oicmctb@gmail.com' },
        { label: 'Social media', value: '@oicmctb — Facebook and Instagram' },
      ],
    },
  },

  heritage: {
    kicker: 'Identity and symbolism',
    title: 'History and Coat of Arms',
    lead: 'The journey of OICMCTB institutional identity and the meaning of the seal and coat of arms.',
    intro:
      'This page brings together the history of the institutional identity of the Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) and the explanation of the elements of the seal and coat of arms, based on the heraldic material provided by the institution.',
    history: {
      title: 'The construction of the institutional identity',
      paragraphs: [
        'The ideation and leadership of OICMCTB are attributed to Grand Master Roberto Aguiar Guazzelli. The Order was formalised as a legal entity in 2021, a milestone associated with the inscription "MMXXI" on the seal.',
        'The development of the seal and coat of arms was part of building the institutional identity, respecting heraldic tradition and chivalric values. The cultural and literary work of the Brazilian Templar Academy of Letters (ABTL) is part of this journey.',
        'The historical origin of the iconographic model of the two knights is distinct from the creation of the specific OICMCTB seal. Inspiration from a tradition does not prove legal or institutional continuity with the medieval order.',
      ],
    },
    seal: {
      id: 'selo',
      title: 'The institutional seal',
      paragraphs: [
        'The round seal presents two Knights Templar sharing the same horse, a composition inspired by historical Templar iconography.',
        'According to the institutional interpretation presented by OICMCTB, the knights move visually from right to left, in the opposite direction to the traditional representation referred to in the document.',
        'This inversion symbolises, for the Order:',
        'The inscription accompanying the seal is "SIGNUM TEMPLARIORUM BRASILIAE", translated as "Sign of the Brazilian Templars". Small Maltese crosses separate the words of the inscription, according to the official representation.',
        'The inscription "MMXXI" corresponds to 2021, the year associated with the institution\'s formalisation as a legal entity.',
        'These meanings are presented as the interpretation of OICMCTB itself, not as a universally established historical fact.',
      ],
      items: [
        'A stance of counterpoint to the contemporary inversion of values.',
        'The symbolic rejection of a state of affairs considered contrary to the principles of the Order.',
        'A return to the path of rectitude, moral virtues and faith.',
        'The need to recover ancient values while still looking to the future.',
      ],
    },
    shield: {
      id: 'brasao',
      title: 'The coat of arms: shield',
      paragraphs: [
        'The shield is classical, ogival and lanceolate, with a symmetrical division into four parts.',
        'The two perpendicular bands crossing at the centre form a red Greek cross.',
        'The fields of the shield use green, called Sinople in heraldic description; yellow, called Or; red, called Gules; and silver in the outline and in the described elements.',
        'According to the interpretation of the document, the green and yellow colours refer to the Brazilian national colours, and the red cross evokes Templar ideals, justice and truth.',
        'At the centre of the shield is the round seal with the two knights.',
      ],
    },
    helmet: {
      id: 'elmo',
      title: 'The helmet',
      paragraphs: [
        'The helmet is primitive, without a wreath, represented in three-quarter view and in silver. It forms part of the heraldic composition as an element of the Order\'s chivalric identity.',
      ],
    },
    mantling: {
      id: 'paquifes',
      title: 'The mantling',
      paragraphs: [
        'The mantling consists of the lateral ornaments of the composition, described with elements in blue, gold and silver.',
        'The document relates its composition to the heraldic tradition of the Guazzelli family. This family reference is presented as information from the institutional material, without extending to claims of medieval lineage.',
      ],
    },
    crest: {
      id: 'timbre',
      title: 'The crest',
      paragraphs: [
        'The crest is a red Templar Maltese cross with open points, positioned at the top of the composition.',
      ],
    },
    warCry: {
      id: 'grito-de-guerra',
      title: 'The war cry',
      paragraphs: [
        'The war cry is the Latin inscription "CREARE FUTURUM MUTATO MODO", associated with the translation "To create the future in a different way".',
        'The motto summarises the institutional orientation to build the future through values, attitudes and actions committed to the common good.',
      ],
    },
    divisa: {
      id: 'divisa',
      title: 'The motto scroll',
      paragraphs: [
        'The scroll is a yellow or gold ribbon bearing the acronym "O.I.C.M.C.T.B.".',
        'The acronym stands for Ordem Internacional Civil Militar Cavaleiros Templários do Brasil.',
      ],
    },
    colors: {
      id: 'cores',
      title: 'Official colours',
      paragraphs: [
        'The document provides colour references in RGB, CMYK and Pantone for some elements. Some details need to be checked between the textual descriptions and the codes provided.',
        'The official vector file of the coat of arms is the main reference for visual representation. Official colours must not be changed based only on the interpretation of the numbers.',
      ],
      items: [
        'Silver: RGB 208, 211, 212; Pantone 427 C.',
        'Red Gules: RGB 239, 51, 64; Pantone Red 032 C.',
        'Green Sinople: RGB 0, 150, 57; Pantone 355 C.',
        'Yellow Or: RGB 254, 221, 0.',
        'Blue Azure: RGB 16, 6, 159; Pantone Blue 072 C.',
        'Black Sable: RGB 45, 41, 38; Pantone Black C.',
      ],
    },
    fidelity: {
      id: 'fidelidade-grafica',
      title: 'Graphic fidelity',
      paragraphs: [
        'The official coat of arms is institutional material and must be treated with preservation of proportion, legibility and colours. Elements that are not part of the official composition must not be added.',
        'The website does not recreate the coat of arms by approximation or replace it with an artificially generated version. The official vector representation is held by the Order and must be used in applications that require the final artwork.',
      ],
    },
  },

  society: {
    kicker: 'Culture and Social Action',
    title: 'Culture and Social Action',
    lead: 'The cultural, literary and community dimension of OICMCTB.',
    intro:
      'The Order understands the chivalric tradition as a commitment to knowledge, culture and service to the common good. This page brings together the cultural arm of the institution, the participation of the Templar Ladies and its areas of work.',
    abtl: {
      kicker: 'Cultural and literary arm',
      title: 'Brazilian Templar Academy of Letters (ABTL)',
      paragraphs: [
        'The Academia Brasileira Templária de Letras (ABTL) is the cultural and literary arm associated with the Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB), according to the institutional description provided.',
        'Its work is dedicated to historical research, literature and intellectual production, cultural publications, heraldic studies, the preservation of traditions and the encouragement of the arts, sciences and the production of knowledge.',
        'Theological studies are considered when compatible with the Academy\'s effective work. The Order does not attribute to ABTL members, publications, awards, projects or positions that have not been confirmed.',
      ],
      areasTitle: 'Areas of work of ABTL',
      areas: [
        'Historical research.',
        'Literature and intellectual production.',
        'Cultural publications.',
        'Heraldic studies.',
        'Preservation of traditions.',
        'Encouragement of the arts, sciences and the production of knowledge.',
        'Theological studies, when compatible with its effective work.',
      ],
    },
    ladies: {
      kicker: 'National Council of Templar Ladies',
      title: 'Templar Ladies',
      paragraphs: [
        'The National Council of Templar Ladies participates in the cultural, institutional and community life of the Order, contributing to its initiatives and to strengthening fraternal bonds.',
        'The participation of women is valued without creating duties, projects or responsibilities that have not been documented.',
      ],
      firstLadyLabel: 'First Lady',
      firstLadyName: 'Sueli Teodoro',
      firstLadyNote:
        'Identification according to the institutional information provided. The title of First Lady is not automatically converted into a presidency, executive direction or any other unconfirmed role.',
    },
    areas: {
      kicker: 'Areas of work',
      title: 'Areas of work and institutional objectives',
      lead: 'The areas below are areas of work and objectives of the Order, according to the institutional material.',
      items: [
        {
          title: 'Social assistance',
          text: 'Support for those in need and initiatives of solidarity and community support.',
        },
        {
          title: 'Education',
          text: 'Support for access to education, culture and knowledge, understanding learning as a lifelong path.',
        },
        {
          title: 'Health',
          text: 'Actions supporting health, wellbeing and assistance to those most in need.',
        },
        {
          title: 'Sport',
          text: 'Encouragement of sport as discipline, social integration and human development.',
        },
        {
          title: 'Environment',
          text: 'Protection of the Amazon, environmental awareness and respect for the Earth and the diversity of life.',
        },
        {
          title: 'Culture',
          text: 'Appreciation of culture, traditions and intellectual production.',
        },
        {
          title: 'Historical research',
          text: 'Preservation of historical memory and encouragement of research, including heraldic studies.',
        },
        {
          title: 'Community actions',
          text: 'Initiatives bringing the Order closer to communities and serving the common good.',
        },
        {
          title: 'Memory of civic heroes',
          text: 'Appreciation of the memory of local and regional civic heroes and recognition of civic merit.',
        },
      ],
      note:
        'Presenting these areas does not imply that all of them already have projects underway. When documented projects exist, they will be published with name, objective, audience, location, period and results.',
    },
    publications: {
      kicker: 'Knowledge',
      title: 'Publications and studies',
      paragraphs: [
        'The Order and ABTL encourage historical research, intellectual production and cultural publications. When verified publications are available, they will be announced on this page.',
        'No fictitious articles, lectures, awards or publications are presented to fill the section.',
      ],
    },
    cta: {
      title: 'Discover the Order as well',
      lead: 'The institutional history, mission and values are brought together in The Order.',
      primary: 'The Order',
      secondary: 'Participate and Contact',
    },
  },

  participate: {
    kicker: 'Participate',
    title: 'Participate and Contact',
    lead: 'Information to learn about, contact and express interest in OICMCTB.',
    interest: {
      kicker: 'How to participate',
      title: 'Express your interest',
      paragraphs: [
        'The first step is to learn about the Order, its history, its mission and its areas of work.',
        'Those who wish to learn more about the institution or express an interest in participating may contact us through the form on this page or by institutional email.',
        'The Order will provide guidance on the applicable stages, criteria and conditions. Fees, dues, benefits or admission rules are not published without institutional validation.',
      ],
      stepsTitle: 'A simple path',
      steps: [
        { title: 'Discover the Order', text: 'Read the institutional presentation, history and cultural and social work.' },
        { title: 'Get in touch', text: 'Send your message through the form, presenting your interest.' },
        { title: 'Receive guidance', text: 'The Order will reply with the information applicable to your case.' },
      ],
    },
    activities: {
      kicker: 'Activities and ceremonies',
      title: 'Gatherings, ceremonies and solemnities',
      paragraphs: [
        'Ceremonies, investitures, elevations and grants of titles and honours are civil and chivalric acts of the Order.',
        'When confirmed by the institution, these gatherings may be open to guests, family members and the community.',
        'Titles and honours granted by OICMCTB are not equivalent to official military ranks, academic degrees, government decorations or public titles.',
        'There is no fictitious calendar on this page. Confirmed events and activities will be announced through the official channels of the Order.',
      ],
    },
    donations: {
      kicker: 'Contributions',
      title: 'Donations and contributions',
      paragraphs: [
        'OICMCTB does not publish bank details, amounts or payment methods on this page. Tax benefits, income tax deductions or tax incentives are not presented as guaranteed.',
        'To receive guidance on possible contributions, please contact the Order through its official channels.',
      ],
      note: 'The Order does not provide tax advice. Tax information must be confirmed with the institution and with a qualified professional.',
    },
    contact: {
      kicker: 'Contact',
      title: 'Talk to OICMCTB',
      emailLabel: 'Institutional email',
      emailNote: 'Official channel provided by the Order.',
      socialLabel: 'Social media',
      socialHandle: '@oicmctb',
      platforms: 'Facebook and Instagram',
      note:
        'Address and telephone are not published on this page because they have not been confirmed by the institution.',
      formTitle: 'Send a message',
      formIntro: 'Complete the fields below. Your information will be used to reply to your contact.',
    },
    faq: {
      kicker: 'Frequently asked questions',
      title: 'Frequently Asked Questions',
      lead: 'Answers based on official institutional information.',
      items: [
        {
          q: 'What is OICMCTB?',
          a: 'The Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) is a Brazilian civil nonprofit organization of a fraternal, cultural, philosophical, civic and philanthropic nature, formalised as a legal entity in 2021.',
        },
        {
          q: 'What is its mission?',
          a: 'To contribute to creating the future in a different way, promoting human development, the preservation of the history of the Knights Templar and the maintenance of the memory of local civic heroes, through community actions, educational projects and merit recognition initiatives, respecting the way of life, traditions and local laws.',
        },
        {
          q: 'What are its values?',
          a: 'Faith in God, hope, charity, justice, prudence, fortitude and temperance.',
        },
        {
          q: 'What is its relationship with the historical Knights Templar?',
          a: 'OICMCTB preserves and values the memory and chivalric ideals associated with the Templar tradition. The institution is a contemporary Brazilian organization and does not claim direct legal or institutional continuity with the medieval order.',
        },
        {
          q: 'What is its relationship with Freemasonry?',
          a: 'OICMCTB is an independent civil organization and does not constitute a Masonic Order. The institution has no institutional link with Freemasonry. The eventual participation of people who are also Freemasons occurs exclusively on an individual basis, through admission and formal acceptance as members of OICMCTB, without establishing any institutional link between the organizations.',
        },
        {
          q: 'What does the coat of arms represent?',
          a: 'The coat of arms brings together an ogival shield, the red Greek cross, the Brazilian national colours and the seal of the two knights. The History and Coat of Arms page explains each element and its institutional interpretation.',
        },
        {
          q: 'What does ABTL do?',
          a: 'The Brazilian Templar Academy of Letters (ABTL) is the cultural and literary arm associated with the Order, dedicated to historical research, literature, cultural publications, heraldic studies and the preservation of traditions.',
        },
        {
          q: 'How can I obtain information about participation and activities?',
          a: 'Contact us through the form on this page or by institutional email. The Order will provide guidance on participation, activities and possible contributions, without publishing unconfirmed rules or conditions.',
        },
      ],
    },
  },

  legal: {
    updatedLabel: 'Last updated',
    reviewNote:
      'This document is an initial institutional text and must be reviewed by the Order\'s legal counsel before being considered final.',
    privacy: {
      title: 'Privacy Policy',
      paragraphs: [
        'OICMCTB processes the data voluntarily submitted through the contact form — name, email, telephone, city, subject and message — exclusively to reply to the request and maintain the corresponding administrative contact.',
        'The data is not sold or shared with third parties for commercial purposes. Access is restricted to the people responsible for handling enquiries.',
        'Data subjects may request information, correction or deletion of their data by writing to the institutional email oicmctb@gmail.com.',
        'This website is static and does not maintain a register of visitors. Hosting providers may record technical access data in accordance with their own policies.',
      ],
    },
    terms: {
      title: 'Terms of Use',
      paragraphs: [
        'This website has an informative and institutional purpose. The content presented does not constitute an offer of services, legal, tax or financial advice.',
        'Reproduction of institutional texts and images must respect the authorship and identity of OICMCTB. The coat of arms and seal are institutional materials and may not be altered or used in a way that suggests a non-existent link.',
        'External links, where they exist, are offered for the visitor\'s convenience. OICMCTB is not responsible for the content of third-party websites.',
        'Institutional information may be updated without prior notice.',
      ],
    },
    cookies: {
      title: 'Cookies',
      paragraphs: [
        'This website does not use its own advertising or visitor-profiling cookies.',
        'Technical hosting or security resources may use cookies strictly necessary for the operation and protection of the website.',
        'Visitors may manage cookies in their browser settings.',
      ],
    },
  },

  notFound: {
    kicker: 'Page not found',
    title: 'This path does not exist',
    text: 'The page you are looking for may have been moved or does not exist. Return to the beginning and explore the Order.',
    cta: 'Back to home',
  },
};
