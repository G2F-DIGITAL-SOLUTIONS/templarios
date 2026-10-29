import type { DeepPartial, Widen } from '../dictionaries';
import type { Dictionary } from './pt';

/**
 * English dictionary. Any key omitted here falls back to Portuguese.
 */
export const en: DeepPartial<Widen<Dictionary>> = {
  meta: {
    siteName: "Ordem Internacional Civil Militar Cavaleiros Templários do Brasil",
    shortName: "OICMCTB",
    tagline: "CREARE FUTURUM MUTATO MODO — To create the future in a different way.",
    defaultDescription:
      "The International Civil Military Order of Knights Templar of Brazil (OICMCTB) is a Brazilian non-profit civil organisation of a fraternal, cultural, philosophical, civic and philanthropic character, dedicated to chivalric values, human development, culture and the common good.",
    ogLocale: 'en_US',
  },

  common: {
    skipToContent: 'Skip to main content',
    readMore: 'Read more',
    learnMore: 'Learn about',
    enter: 'Enter',
    explore: 'Explore',
    viewAll: 'View all',
    backHome: 'Back to home',
    backTo: 'Back',
    home: 'Home',
    breadcrumb: 'You are at',
    onThisPage: 'On this page',
    scrollHint: 'Continue',
    underlineMotif: 'CREARE FUTURUM MUTATO MODO',
    imageCredit: 'Image',
    loading: 'Loading',
  },

  language: {
    label: 'Language',
    switchTo: 'Switch language to',
    current: 'Current language',
  },

  nav: {
    label: 'Main navigation',
    order: 'Order',
    initiatives: "Culture and Social Action",
    knowledge: "Culture and Knowledge",
    events: 'Events',
    citiesDay: 'Day of Cities',
    donations: 'Donations',
    faq: 'FAQ',
    contact: 'Contact',
    affiliation: 'Affiliation',
    shop: 'Shop',
    tv: 'Templar TV',
    about: 'About Us',
    history: "History and Coat of Arms",
    purposes: 'Purposes',
    teachings: 'Teachings',
    environment: 'Environment',
    sport: 'Sport',
    health: 'Health',
    education: 'Education',
    lectures: 'Lectures',
    studies: 'Studies',
    articles: 'Articles',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    ctaPrimary: 'Discover the Order',
    ctaSecondary: 'Join us',
  },

  footer: {
    aboutTitle: "Ordem Internacional Civil Militar Cavaleiros Templários do Brasil",
    aboutText:
      "A Brazilian non-profit civil organisation of a fraternal, cultural, philosophical, civic and philanthropic character, with its own identity and autonomy, dedicated to chivalric values, culture and the common good.",
    navTitle: 'Navigation',
    institutionalTitle: 'Institutional',
    initiativesTitle: 'Initiatives',
    knowledgeTitle: 'Knowledge',
    contactTitle: 'Contact',
    languagesTitle: 'Languages',
    socialTitle: 'Social media',
    legalTitle: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    cookies: 'Cookies',
    rights: 'All rights reserved.',
    motif: 'CREARE FUTURUM MUTATO MODO',
  },

  a11y: {
    logoAlt: "Coat of arms of the OICMCTB",
    decorative: 'Decorative element',
    externalLink: 'Opens in a new tab',
    requiredField: 'required field',
    formSuccess: 'We received your message. Thank you for reaching out.',
    formError: 'We could not send your message now. Please try again or email us.',
  },

  forms: {
    name: 'Full name',
    email: 'Email',
    phone: 'Phone',
    city: 'City',
    state: 'State',
    message: 'Message',
    subject: 'Subject',
    cpf: 'Tax ID',
    birthDate: 'Date of birth',
    maritalStatus: 'Marital status',
    address: 'Full residential address',
    postalCode: 'Postal code',
    education: 'Education',
    profession: 'Profession',
    motivation: 'Tell us why you wish to affiliate and to join the Order:',
    send: 'Send message',
    submit: 'Send affiliation request',
    consent: 'I authorise the use of my data to respond to this enquiry.',
    requiredNote: 'Fields marked with * are required.',
    selectPlaceholder: 'Select',
    mailSubject: 'Message via the OICMCTB website',
    mailOpening: 'Opening your e-mail program…',
  },

  home: {
    hero: {
      kicker: 'OICMCTB',
      title: 'A tradition of centuries at the service of values that remain current.',
      lead: 'Tradition, knowledge and service to others.',
      intro:
        'We are a fraternity of men and women who cultivate ethics, study and charity. Enter and discover the different halls of the Order.',
      primaryCta: 'Explore the Order',
      secondaryCta: 'Learn our mission',
      bridgeAlt: 'The entrance of a medieval castle at dawn',
    },
    doors: {
      kicker: 'The Doors of the Castle',
      title: 'Each door leads to an area of the Order',
      lead: 'Choose where to begin your visit. You may walk through every hall whenever you wish.',
      items: {
        order: {
          label: 'The Order',
          text: 'Discover our history, identity, mission and purpose.',
          cta: 'Enter',
        },
        history: {
          label: 'Our History',
          text: 'Discover the historic path of the Templar tradition and its evolution through the centuries.',
          cta: 'Discover the history',
        },
        purposes: {
          label: 'Our Purposes',
          text: 'Discover the values and principles that guide the Order.',
          cta: 'Discover our purposes',
        },
        teachings: {
          label: 'Teachings',
          text: 'Studies, knowledge, culture and personal development.',
          cta: 'Explore the studies',
        },
        initiatives: {
          label: 'Our Initiatives',
          text: 'Discover the actions carried out for the benefit of society.',
          cta: 'Discover the initiatives',
        },
        events: {
          label: 'Events',
          text: 'Follow the events and activities of the Order.',
          cta: 'See events',
        },
      },
    },
    about: {
      kicker: 'About the Order',
      title: 'Who we are',
      lead: 'An Order of Knights of the Temple — not Masonic — bringing together men and women around ethics, knowledge and service.',
      body: 'The OICMCTB seeks to gather tolerant people of goodwill, who love justice and nobility of character, who wish to be useful to others and who truly understand the meaning of the word fraternity.',
      highlights: {
        identity: 'Identity',
        identityText: "A Brazilian non-profit civil organisation of a fraternal, cultural, philosophical, civic and philanthropic character, with its own identity and autonomy.",
        origin: 'Origin',
        originText: "The institution was formally incorporated as a legal entity in 2021. Its Grand Master is Roberto Aguiar Guazzelli.",
        values: 'Values',
        valuesText: "Faith in God, Hope, Charity, Justice, Prudence, Fortitude and Temperance.",
        today: 'Today',
        todayText: 'Studies, mutual aid and social initiatives in education, health, sport and the environment.',
      },
      cta: 'Discover the Order',
      ctaSecondary: 'Our history',
    },
    quote: {
      text: 'Our mission is, above all, here and now.',
      source: 'From the Teachings of the Order',
    },
    purposes: {
      kicker: 'Mission and Purposes',
      title: 'Principles that guide our work',
      lead: 'The purposes of the Order are clothed in nobility and virtue, and translate into concrete commitments to society.',
      pillars: {
        education: {
          title: 'Education',
          text: 'Promote knowledge, culture and lifelong learning opportunities.',
        },
        health: {
          title: 'Health',
          text: 'Contribute to the wellbeing and dignity of people.',
        },
        environment: {
          title: 'Environment',
          text: 'Respect and care for the Earth and life in all its diversity.',
        },
        justice: {
          title: 'Justice and Citizenship',
          text: 'Promote ethical values, dignity, responsibility and social participation.',
        },
        cooperation: {
          title: 'Fraternity and Mutual Aid',
          text: 'Maintain an effective programme of mutual aid among members and their families.',
        },
        culture: {
          title: 'Culture and Study',
          text: 'Prioritise study as a main foundation of human fulfilment and personal development.',
        },
      },
      cta: 'Discover our purposes',
    },
    initiatives: {
      kicker: 'The Order in action',
      title: 'Initiatives for the benefit of society',
      lead: 'The Order does not exist only to preserve a tradition. It uses its values to contribute to contemporary society.',
      items: {
        environment: {
          title: 'Environment',
          text: 'Projects, actions and initiatives related to environmental preservation.',
        },
        sport: {
          title: 'Sport',
          text: 'Encouragement of sport, social integration and human development.',
        },
        health: {
          title: 'Health',
          text: 'Actions supporting health, wellbeing and assistance.',
        },
        education: {
          title: 'Education',
          text: 'Projects aimed at access to education, culture and knowledge.',
        },
      },
      cardCta: 'Discover initiative',
      cta: 'Discover initiatives',
    },
    donations: {
      kicker: 'Be part of something greater',
      title: 'Your contribution sustains what the Order accomplishes',
      lead: 'Contributions received go to a general operating fund of the Order, to its humanitarian and charitable activities and to its research and investigation.',
      reasons: {
        mission: {
          title: 'Where the funds go',
          text: 'Registration fees and monthly dues sustain the institutional, humanitarian and charitable activities and the research of the Order.',
        },
        transparency: {
          title: 'Commitment to transparency',
          text: 'The Order is committed to accountability and the responsible use of the funds received.',
        },
        impact: {
          title: 'Social impact',
          text: 'Support initiatives in education, health, sport and the environment for the benefit of the community.',
        },
      },
      ctaPrimary: 'I want to contribute',
      ctaSecondary: 'Contact us',
    },
    events: {
      kicker: 'Agenda',
      title: 'Upcoming events',
      lead: 'Ceremonies, gatherings and activities of the Order.',
      ctaAll: 'See all events',
      emptyState: 'No events announced at the moment. Follow our agenda soon.',
      dateLabel: 'Date',
      locationLabel: 'Location',
      externalNote: 'The full agenda is kept on our events platform.',
    },
    knowledge: {
      kicker: 'Knowledge is part of our tradition',
      title: 'Lectures, studies and articles',
      lead: 'Materials from the Order for study and personal development.',
      ctaAll: 'Explore knowledge',
      types: {
        lecture: 'Lecture',
        study: 'Study',
        article: 'Article',
        video: 'Video',
      },
    },
    citiesDay: {
      kicker: 'Project',
      title: 'Day of Cities',
      lead: 'An initiative that brings the Order closer to cities and their communities.',
      body: 'Discover the purpose of the project, how it works and how to bring the Day of Cities to your city.',
      cta: 'I want to bring the Day of Cities to my city',
      ctaSecondary: 'Understand the project',
    },
    affiliation: {
      kicker: 'Join us',
      title: 'The Order is opening its doors to you',
      lead: 'We gather tolerant men and women of goodwill, eager to be useful to others.',
      cta: 'Discover affiliation',
    },
    finalCta: {
      title: 'Discover your place in the Order',
      lead: 'To discover, to trust, to participate and to contribute — this is the path.',
      primary: 'Explore the Order',
      secondary: 'Contact us',
    },
  },

  pages: {
    order: {
      kicker: 'The Order',
      title: 'Who We Are',
      lead: "A Brazilian non-profit civil organisation of a fraternal, cultural, philosophical, civic and philanthropic character, with its own identity and autonomy.",
      intro:
        'The OICMCTB is an Order of Knights of the Temple — it is therefore not a Masonic Order, nor connected to one, except historically.',
    },
    history: {
      kicker: 'Journey',
      title: 'History',
      lead: 'The path of the Templar tradition, from its medieval origins to its contemporary expression.',
    },
    purposes: {
      kicker: 'Mission',
      title: 'Purposes',
      lead: 'The purposes of the OICMCTB are clothed in nobility with the white cloak of virtue.',
    },
    teachings: {
      kicker: 'Studies',
      title: 'Teachings',
      lead: 'We work with Templar studies towards a common goal: the improvement of our character.',
    },
    initiatives: {
      kicker: 'The Order in action',
      title: 'Initiatives',
      lead: 'The areas in which the Order contributes to contemporary society.',
    },
    events: {
      kicker: 'Agenda',
      title: 'Events',
      lead: 'Follow the events and activities of the Order.',
    },
    knowledge: {
      kicker: 'Knowledge',
      title: 'Lectures, Studies and Articles',
      lead: 'Materials from the Order for study, reflection and personal development.',
    },
    citiesDay: {
      kicker: 'Project',
      title: 'Day of Cities',
      lead: 'An initiative that brings the Order closer to cities and their communities.',
    },
    donations: {
      kicker: 'Contribute',
      title: 'Donations',
      lead: 'Be part of something greater. Your contribution sustains the humanitarian, charitable and research activities of the Order.',
    },
    affiliation: {
      kicker: 'Join us',
      title: 'Affiliation',
      lead: 'The OICMCTB is opening its doors to you.',
    },
    faq: {
      kicker: 'Questions',
      title: 'Frequently Asked Questions',
      lead: 'Answers based exclusively on the official information of the Order.',
    },
    contact: {
      kicker: 'Get in touch',
      title: 'Contact',
      lead: 'We are available to answer your questions about the Order.',
    },
  },

  sections: {
    related: 'Keep exploring',
    relatedLead: 'Other halls of the Order that may interest you.',
    gallery: 'Gallery',
    faqTitle: 'Frequently Asked Questions',
  },

  faq: {
    categories: {
      about: 'About the Order',
      affiliation: 'Affiliation',
      events: "Participation in institutional life, as guided by the Order.",
      donations: 'Donations',
    },
    ctaTitle: 'Didn’t find your answer?',
    ctaText: 'Contact us and we will be glad to help.',
    ctaButton: 'Get in touch',
  },

  affiliation: {
    purposeTitle: 'Why affiliate',
    purposeText:
      'The purpose of the Order is to have a society of Knights Templar with the same standard of nobility and virtue as the traditional OICMCTB, maintaining an effective programme of mutual aid.',
    whoTitle: 'Who may affiliate',
    whoText:
      "Confirmed guidance on participation is provided by the Order to those who express interest through the form. We do not publish unconfirmed admission rules, benefits or contributions.",
    processTitle: 'How the process works',
    steps: {
      one: { title: 'Discover the Order', text: 'Read about our identity, history and purposes before any decision.' },
      two: { title: 'Check the requirements', text: 'Understand who may take part and what is expected of a member.' },
      three: { title: 'Send your request', text: 'Complete the form with your details and your motivations.' },
      four: { title: 'Follow the reply', text: 'Our team will get in touch to guide the next steps.' },
    },
    benefitsTitle: 'Benefits',
    benefits: {
      study: "Study, culture and preservation of historical memory.",
      fraternity: "Fraternity and service to the common good.",
      events: 'Participation in events and ceremonies.',
      growth: "Human and cultural development.",
    },
    responsibilitiesTitle: 'Responsibilities',
    responsibilitiesText:
      "Participants are invited to live the Order’s values — Faith in God, Hope, Charity, Justice, Prudence, Fortitude and Temperance — with humility, sincerity and service to the common good. Specific conditions, where they exist, are communicated directly by the Order.",
    feesTitle: 'Registration fee and monthly dues',
    feesText:
      "Information about any contributions is provided directly by the Order, after official confirmation. No amount is published on this site without proof.",
    feeRegistrationLabel: 'Registration fee',
    feeMonthlyLabel: 'Minimum monthly contribution',
    formTitle: 'Affiliation request',
    formIntro: 'Complete the fields below. Your information will be treated confidentially.',
  },

  donations: {
    whyTitle: 'Why donate',
    whyText:
      'To donate is to take part in what the Order accomplishes. Contributions sustain the institutional, humanitarian and charitable activities and the research and investigation of the Order.',
    whereTitle: 'Where the funds go',
    whereItems: {
      operations: 'General operating fund of the Order.',
      humanitarian: 'Humanitarian and charitable activities.',
      research: 'Scientific and cultural research and investigation.',
      initiatives: 'Initiatives in education, health, sport and the environment.',
    },
    howTitle: 'How to donate',
    howText:
      'Contact the Order to receive the guidance and details needed to make your donation securely.',
    howCta: 'I want to contribute',
    legalNote:
      'The Order does not provide tax advice. Always consult the official rules and a qualified professional.',
  },

  citiesDay: {
    whatTitle: 'What it is',
    whatText:
      'The Day of Cities is an institutional initiative that brings the Order closer to cities and their communities, celebrating the values of fraternity, culture and service.',
    purposeTitle: 'Its purpose',
    purposeText:
      'To gather the community around values that remain current: ethics, solidarity, culture and citizenship.',
    howTitle: 'How it works',
    howText: 'Any edition is only announced after official confirmation by the Order, with city, date and programme defined.',
    whyTitle: 'Why it exists',
    whyText: 'Because a tradition stays alive only when it translates into concrete service to society.',
    participateTitle: 'How a city can take part',
    participateText:
      'Interested cities may express interest through the form. Our team will advise on requirements, schedule and available support.',
    bringTitle: 'Bring the Day of Cities to your city',
    bringText: 'Complete the form telling us about your city and your interest. We will be in touch.',
    cta: 'I want to bring the Day of Cities to my city',
  },

  events: {
    upcomingTitle: 'Upcoming events',
    pastTitle: "Past events",
    platformNote: 'Registration and the full agenda are kept on our external events platform.',
    ctaPlatform: 'See all events',
    emptyState: 'No events announced at the moment.',
  },

  knowledge: {
    filterAll: 'All',
    ctaWatch: 'Watch',
    ctaRead: 'Read',
    ctaKnow: 'Learn',
    emptyState: 'No content published yet.',
  },

  contact: {
    infoTitle: 'Contact information',
    formTitle: 'Send a message',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    emailCta: 'Send email',
    hoursLabel: 'Hours',
    hoursValue: 'Please contact the Order for opening hours.',
  },

  legal: {
    privacyTitle: 'Privacy Policy',
    termsTitle: 'Terms of Use',
    cookiesTitle: 'Cookies',
    updatedLabel: 'Last updated',
    placeholderNote:
      "To request the current version of this document, contact us at the institutional e-mail oicmctb@gmail.com. The official legal text will be published after validation by those responsible.",
  },

  notFound: {
    kicker: 'Page not found',
    title: 'This corridor of the castle does not exist',
    text: 'The page you are looking for may have been moved or does not exist. Return to the entrance and explore the Order.',
    cta: 'Back to home',
  },
};