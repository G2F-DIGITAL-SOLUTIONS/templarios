import type { Widen } from '../dictionaries';
import type { Dictionary } from './pt';

/**
 * Spanish dictionary — complete, not a partial override.
 * The official name and acronym are kept in Portuguese; only the descriptive
 * text is translated.
 */
export const es: Widen<Dictionary> = {
  meta: {
    siteName: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
    shortName: 'OICMCTB',
    tagline: 'Tradición caballeresca, cultura y servicio al bien común.',
    defaultDescription:
      'Conozca la OICMCTB: identidad institucional, historia, escudo, Academia Brasileña Templaria de Letras, Damas Templarias y sus frentes de actuación cultural y social.',
    ogLocale: 'es_ES',
  },

  common: {
    skipToContent: 'Ir al contenido principal',
    enter: 'Entrar',
    home: 'Inicio',
    breadcrumb: 'Usted está en',
    onThisPage: 'En esta página',
  },

  language: {
    label: 'Idioma',
    switchTo: 'Cambiar idioma a',
    current: 'Idioma actual',
  },

  nav: {
    label: 'Navegación principal',
    home: 'Inicio',
    order: 'La Orden',
    heritage: 'Historia y escudo',
    society: 'Cultura y acción social',
    participate: 'Participar y contacto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    ctaPrimary: 'Conocer la Orden',
    ctaSecondary: 'Participar',
  },

  footer: {
    aboutTitle: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
    aboutText:
      'Organización civil brasileña sin fines de lucro, de carácter fraterno, cultural, filosófico, cívico y filantrópico, dedicada al desarrollo humano, a la preservación de la memoria histórica y al bien común.',
    institutionalTitle: 'Institucional',
    contactTitle: 'Contacto',
    legalTitle: 'Legal',
    languagesTitle: 'Idiomas',
    socialTitle: 'Redes sociales',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Uso',
    cookies: 'Cookies',
    rights: 'Todos los derechos reservados.',
    motto: 'CREARE FUTURUM MUTATO MODO',
    dataNote: 'Datos institucionales informados por la Orden.',
  },

  a11y: {
    decorative: 'Elemento decorativo',
    requiredField: 'campo obligatorio',
    formError: 'No fue posible enviar ahora. Inténtelo de nuevo o escriba a nuestro correo.',
    formOpening: 'Abriendo su programa de correo…',
  },

  forms: {
    name: 'Nombre completo',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    city: 'Ciudad',
    subject: 'Asunto',
    message: 'Mensaje',
    interest: 'Cuéntenos sobre su interés en conocer o participar en la Orden.',
    send: 'Enviar mensaje',
    consent: 'Autorizo el uso de mis datos para responder a este contacto.',
    requiredNote: 'Los campos marcados con * son obligatorios.',
    mailSubject: 'Mensaje por el sitio de la OICMCTB',
  },

  home: {
    hero: {
      kicker: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
      title: 'Tradición caballeresca, cultura y servicio al bien común.',
      lead: 'CREARE FUTURUM MUTATO MODO — Para crear el futuro de un modo diferente.',
      intro:
        'La Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) es una organización civil brasileña sin fines de lucro, de carácter fraterno, cultural, filosófico, cívico y filantrópico.',
      primaryCta: 'Conocer la Orden',
      secondaryCta: 'Historia y escudo',
    },
    about: {
      kicker: 'Quiénes somos',
      title: 'Una orden templaria brasileña, civil y autónoma',
      lead:
        'La OICMCTB une la valoración de las tradiciones caballerescas con el compromiso contemporáneo con el desarrollo humano, la memoria histórica, el conocimiento y el servicio a la sociedad.',
      body:
        'Formalizada como persona jurídica en 2021, según la información institucional proporcionada, la Orden orienta sus actividades por principios como la fe, la esperanza, la caridad, la justicia, la prudencia, la fortaleza y la templanza. Su propuesta incluye el fortalecimiento de los vínculos fraternos, la investigación histórica, la valoración de la cultura, el reconocimiento del mérito cívico y el incentivo a iniciativas que contribuyan al bien común.',
      highlights: {
        identity: 'Identidad',
        identityText:
          'Organización civil brasileña independiente, sin vínculo institucional con la masonería.',
        origin: 'Formalización',
        originText:
          'Persona jurídica desde 2021, bajo el Gran Maestrazgo de Roberto Aguiar Guazzelli.',
        values: 'Valores',
        valuesText:
          'Fe en Dios, esperanza, caridad, justicia, prudencia, fortaleza y templanza.',
        today: 'Actuación',
        todayText:
          'Cultura, investigación histórica, educación, salud, deporte, medio ambiente y asistencia social.',
      },
      cta: 'Conocer la Orden',
      ctaSecondary: 'Nuestra historia y escudo',
    },
    motto: {
      title: 'Lema oficial',
      latin: 'CREARE FUTURUM MUTATO MODO',
      translation: 'Para crear el futuro de un modo diferente.',
      text:
        'El lema sintetiza la orientación institucional de construir el futuro mediante valores, actitudes y acciones comprometidas con el bien común.',
    },
    values: {
      kicker: 'Valores',
      title: 'Siete valores orientan la Orden',
      lead:
        'Los valores institucionales se viven como compromisos de conducta y de servicio.',
      items: [
        'Fe en Dios.',
        'Esperanza.',
        'Caridad.',
        'Justicia.',
        'Prudencia.',
        'Fortaleza.',
        'Templanza.',
      ],
    },
    independence: {
      kicker: 'Independencia institucional',
      title: 'Una organización civil, no masónica',
      text:
        'La OICMCTB es una organización civil independiente y no constituye una Orden Masónica. La institución no posee vínculo institucional con la masonería. La eventual participación de personas que también sean miembros de la masonería ocurre exclusivamente a título individual, mediante ingreso y aceptación formal como miembros de la OICMCTB, sin establecer vínculo institucional entre las organizaciones.',
      cta: 'Saber más en La Orden',
    },
    doors: {
      kicker: 'Conozca la OICMCTB',
      title: 'Por dónde empezar',
      lead:
        'Elija el tema que desea conocer. Toda la institución está organizada en cuatro páginas principales.',
      items: {
        order: {
          label: 'La Orden',
          text: 'Identidad, historia, misión, visión, valores, filosofía e información institucional.',
          cta: 'Conocer la Orden',
        },
        heritage: {
          label: 'Historia y escudo',
          text: 'La construcción de la identidad institucional, el sello y el significado del escudo de armas.',
          cta: 'Ver historia y escudo',
        },
        society: {
          label: 'Cultura y acción social',
          text: 'ABTL, Damas Templarias y las frentes culturales, educativas y sociales de la Orden.',
          cta: 'Conocer la actuación',
        },
        participate: {
          label: 'Participar y contacto',
          text: 'Cómo manifestar interés, hablar con la Orden y obtener orientación sobre contribuciones.',
          cta: 'Participar y contactar',
        },
      },
    },
    society: {
      kicker: 'Cultura y acción social',
      title: 'Una tradición que se traduce en servicio',
      lead:
        'La OICMCTB reúne iniciativas culturales, educativas, filantrópicas y de preservación de la memoria histórica.',
      items: [
        {
          title: 'Academia Brasileña Templaria de Letras (ABTL)',
          text: 'Brazo cultural y literario de la Orden, orientado a la investigación histórica, la producción intelectual y las publicaciones culturales.',
        },
        {
          title: 'Consejo Nacional de las Damas Templarias',
          text: 'Participación de las mujeres en la vida cultural, institucional y comunitaria de la Orden.',
        },
        {
          title: 'Educación, salud y asistencia social',
          text: 'Frentes de actuación orientadas al conocimiento, el bienestar y el amparo de quienes más lo necesitan.',
        },
        {
          title: 'Medio ambiente y memoria cívica',
          text: 'Protección de la Amazonía, concienciación ambiental y valoración de la memoria de héroes cívicos locales.',
        },
      ],
      cta: 'Conocer la actuación social',
    },
    finalCta: {
      kicker: 'Participe',
      title: 'Conozca la Orden y manifieste su interés',
      lead: 'Para conocer, contactar o manifestar interés, la Orden está a su disposición.',
      primary: 'Participar y contacto',
      secondary: 'Hablar con la Orden',
    },
  },

  pages: {
    order: {
      kicker: 'La Orden',
      title: 'La Orden',
      lead:
        'Identidad, historia, misión, visión, valores, filosofía e información institucional de la OICMCTB.',
    },
    heritage: {
      kicker: 'Identidad y simbología',
      title: 'Historia y escudo',
      lead:
        'La trayectoria de la identidad institucional de la OICMCTB y el significado del sello y del escudo de armas.',
    },
    society: {
      kicker: 'Cultura y acción social',
      title: 'Cultura y acción social',
      lead: 'La dimensión cultural, literaria y comunitaria de la OICMCTB.',
    },
    participate: {
      kicker: 'Participe',
      title: 'Participar y contacto',
      lead: 'Información para conocer, contactar y manifestar interés en la OICMCTB.',
    },
    privacy: {
      kicker: 'Legal',
      title: 'Política de Privacidad',
      lead: 'Cómo la OICMCTB trata los datos enviados a través de este sitio.',
    },
    terms: {
      kicker: 'Legal',
      title: 'Términos de Uso',
      lead: 'Condiciones de uso del sitio institucional de la OICMCTB.',
    },
    cookies: {
      kicker: 'Legal',
      title: 'Cookies',
      lead: 'Información sobre el uso de cookies en este sitio.',
    },
  },

  order: {
    kicker: 'La Orden',
    title: 'La Orden',
    lead:
      'Identidad, historia, misión, visión, valores, filosofía e información institucional de la OICMCTB.',
    sections: [
      {
        id: 'quem-somos',
        title: 'Quiénes somos',
        paragraphs: [
          'La Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) es una organización civil brasileña sin fines de lucro, de carácter fraterno, cultural, filosófico, cívico y filantrópico.',
          'La institución busca unir la valoración de las tradiciones caballerescas con el compromiso contemporáneo con el desarrollo humano, la preservación de la memoria histórica, el conocimiento y el servicio a la sociedad.',
          'Formalizada como persona jurídica en 2021, según la información institucional proporcionada, la Orden orienta sus actividades por principios como la fe, la esperanza, la caridad, la justicia, la prudencia, la fortaleza y la templanza.',
          'Su propuesta incluye el fortalecimiento de los vínculos fraternos, la investigación histórica, la valoración de la cultura, el reconocimiento del mérito cívico y el incentivo a iniciativas que contribuyan al bien común.',
        ],
      },
      {
        id: 'historia',
        title: 'Historia de la OICMCTB',
        paragraphs: [
          'La idealización y el liderazgo de la Ordem Internacional Civil Militar Cavaleiros Templários do Brasil se atribuyen al Gran Maestro Roberto Aguiar Guazzelli, según el material institucional proporcionado.',
          'La Orden fue formalizada como persona jurídica en 2021. Ese hito está asociado a la inscripción «MMXXI» presente en el sello institucional.',
          'La construcción de la identidad institucional incluyó el desarrollo del sello y del escudo de armas, la valoración de los ideales caballerescos y la actuación cultural y literaria de la Academia Brasileña Templaria de Letras (ABTL).',
          'La historia de la organización brasileña contemporánea es distinta de la historia medieval de los Caballeros Templarios. El uso de símbolos y la inspiración en una tradición no prueban, por sí solos, continuidad jurídica o institucional directa con la orden medieval.',
          'La historia de la identidad visual y la explicación de los elementos heráldicos se presentan en la página Historia y escudo.',
        ],
      },
      {
        id: 'missao-visao-e-valores',
        title: 'Misión, visión y valores',
        paragraphs: [
          'Misión: contribuir a crear el futuro de un modo diferente, promoviendo el desarrollo humano, la preservación de la historia de los caballeros templarios y el mantenimiento de la memoria de los héroes cívicos locales, mediante acciones comunitarias, proyectos educativos e iniciativas de reconocimiento del mérito, respetando el modo de vida, las tradiciones y las leyes locales.',
          'Visión: ser reconocida internacionalmente como una orden templaria legítimamente brasileña, una organización civil sin fines de lucro que contribuye de forma efectiva a la mejora de la vida de sus asociados y de las comunidades en las que está inserta, con fe en Dios, respeto a las tradiciones locales y compromiso con la preservación de la memoria histórica de los templarios y de los héroes cívicos regionales.',
          'La visión expresa un propósito institucional. Su formulación no constituye, por sí sola, una afirmación de reconocimiento internacional ya alcanzado.',
          'Valores: fe en Dios, esperanza, caridad, justicia, prudencia, fortaleza y templanza.',
        ],
      },
      {
        id: 'lema',
        title: 'Lema oficial',
        paragraphs: [
          'CREARE FUTURUM MUTATO MODO.',
          'Traducción institucional: «Para crear el futuro de un modo diferente».',
          'El lema permanece idéntico en todas las versiones del sitio. La traducción explicativa puede variar según el idioma.',
        ],
      },
      {
        id: 'filosofia-e-mistica',
        title: 'Filosofía de trabajo y mística',
        paragraphs: [
          'La filosofía de trabajo de la Orden orienta a sus miembros a dar prueba de humildad, reconocer y corregir los propios errores, actuar con sinceridad, amar la justicia, ser misericordiosos, demostrar fe, vivir en la verdad, soportar adversidades cuando sea necesario y servir al bien común.',
          'La mística de la OICMCTB se comprende como una dimensión filosófica y espiritual de la vivencia de los valores: una búsqueda de sentido, de conciencia, de introspección y de responsabilidad individual, orientada al servicio del colectivo.',
          'La Orden presenta su actuación con transparencia. Su mística no se describe como un conjunto de poderes sobrenaturales, secretos o prácticas ocultas, y la institución no se presenta como poseedora de conocimientos reservados.',
          'La dimensión espiritual se vive en el respeto a la fe, a la conciencia y a la diversidad de las personas, sin convertir la Orden en una institución eclesiástica.',
        ],
      },
      {
        id: 'independencia',
        title: 'Independencia respecto a la masonería',
        paragraphs: [
          'La Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) es una organización civil independiente y no constituye una Orden Masónica. La institución no posee vínculo institucional con la masonería.',
          'La eventual participación de personas que también sean miembros de la masonería ocurre exclusivamente a título individual, mediante ingreso y aceptación formal como miembros de la OICMCTB, sin establecer vínculo institucional entre las organizaciones.',
          'La ausencia de vínculo institucional no implica prohibición ni restricción a la participación individual de personas que también integren la masonería.',
        ],
      },
    ],
    info: {
      title: 'Información institucional',
      lead:
        'Datos institucionales de la Ordem Internacional Civil Militar Cavaleiros Templários do Brasil.',
      note:
        'Datos registrales informados por la Orden. No sustituyen un certificado ni una consulta a los registros oficiales.',
      items: [
        {
          label: 'Razón social',
          value: 'Ordem Internacional Civil Militar Cavaleiros Templários do Brasil',
        },
        { label: 'CNPJ', value: '42.071.770/0001-75' },
        { label: 'Gran Maestrazgo', value: 'Roberto Aguiar Guazzelli' },
        {
          label: 'Consejo Nacional de las Damas Templarias',
          value: 'Sueli Teodoro — Primera Dama',
        },
        {
          label: 'Brazo cultural y literario',
          value: 'Academia Brasileña Templaria de Letras (ABTL)',
        },
        { label: 'Correo institucional', value: 'oicmctb@gmail.com' },
        { label: 'Redes sociales', value: '@oicmctb — Facebook e Instagram' },
      ],
    },
  },

  heritage: {
    kicker: 'Identidad y simbología',
    title: 'Historia y escudo',
    lead:
      'La trayectoria de la identidad institucional de la OICMCTB y el significado del sello y del escudo de armas.',
    intro:
      'Esta página reúne la historia de la identidad institucional de la Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) y la explicación de los elementos del sello y del escudo de armas, con base en el material heráldico proporcionado por la institución.',
    history: {
      title: 'La construcción de la identidad institucional',
      paragraphs: [
        'La idealización y el liderazgo de la OICMCTB se atribuyen al Gran Maestro Roberto Aguiar Guazzelli. La Orden fue formalizada como persona jurídica en 2021, hito asociado a la inscripción «MMXXI» del sello.',
        'El desarrollo del sello y del escudo de armas formó parte de la construcción de la identidad institucional, respetando la tradición heráldica y los valores caballerescos. La actuación cultural y literaria de la Academia Brasileña Templaria de Letras (ABTL) integra ese recorrido.',
        'El origen histórico del modelo iconográfico de los dos caballeros es distinto de la creación del sello específico de la OICMCTB. La inspiración en una tradición no prueba continuidad jurídica o institucional con la orden medieval.',
      ],
    },
    seal: {
      id: 'selo',
      title: 'El sello institucional',
      paragraphs: [
        'El sello redondo presenta dos caballeros templarios compartiendo el mismo caballo, composición inspirada en la iconografía templaria histórica.',
        'Según la interpretación institucional presentada por la OICMCTB, los caballeros se desplazan visualmente de derecha a izquierda, en sentido opuesto al de la representación tradicional referida en el documento.',
        'Esa inversión simboliza, para la Orden:',
        'La inscripción que acompaña al sello es «SIGNUM TEMPLARIORUM BRASILIAE», traducida como «Signo de los Templarios Brasileños». Pequeñas cruces de Malta separan las palabras de la inscripción, conforme a la representación oficial.',
        'La inscripción «MMXXI» corresponde a 2021, año asociado a la formalización de la institución como persona jurídica.',
        'Estos significados se presentan como interpretación de la propia OICMCTB, y no como hecho histórico universalmente establecido.',
      ],
      items: [
        'Una postura de contrapunto a la inversión de valores del mundo contemporáneo.',
        'El rechazo simbólico de un estado de cosas considerado contrario a los principios de la Orden.',
        'El retorno al camino de la rectitud, de las virtudes morales y de la fe.',
        'La necesidad de rescatar valores antiguos sin dejar de mirar al futuro.',
      ],
    },
    shield: {
      id: 'brasao',
      title: 'El escudo de armas: el escudo',
      paragraphs: [
        'El escudo es clásico, ojival y lanceolado, con división simétrica en cuatro partes.',
        'Las dos bandas perpendiculares que se cruzan en el centro forman una cruz griega roja.',
        'Los campos del escudo utilizan verde, denominado Sinople en la descripción heráldica; amarillo, denominado Oro; rojo, denominado Gules; y plata en el contorno y en los elementos descritos.',
        'Según la interpretación del documento, los colores verde y amarillo remiten a los colores nacionales brasileños, y la cruz roja evoca los ideales templarios, la justicia y la verdad.',
        'En el centro del escudo está el sello redondo con los dos caballeros.',
      ],
    },
    helmet: {
      id: 'elmo',
      title: 'El yelmo',
      paragraphs: [
        'El yelmo es primitivo, sin burelete, representado a tres cuartos y en plata. Integra la composición heráldica como elemento de la identidad caballeresca de la Orden.',
      ],
    },
    mantling: {
      id: 'paquifes',
      title: 'Los lambrequines',
      paragraphs: [
        'Los lambrequines son los ornamentos laterales de la composición, descritos con elementos en azul, oro y plata.',
        'El documento relaciona su composición con la tradición heráldica de la familia Guazzelli. Esa referencia familiar se presenta como información del material institucional, sin extrapolar a afirmaciones de linaje medieval.',
      ],
    },
    crest: {
      id: 'timbre',
      title: 'El timbre',
      paragraphs: [
        'El timbre es una cruz de Malta templaria, roja, con puntas abiertas, situada en la parte superior de la composición.',
      ],
    },
    warCry: {
      id: 'grito-de-guerra',
      title: 'El grito de guerra',
      paragraphs: [
        'El grito de guerra es la inscripción latina «CREARE FUTURUM MUTATO MODO», asociada a la traducción «Para crear el futuro de un modo diferente».',
        'El lema sintetiza la orientación institucional de construir el futuro mediante valores, actitudes y acciones comprometidas con el bien común.',
      ],
    },
    divisa: {
      id: 'divisa',
      title: 'La divisa',
      paragraphs: [
        'La divisa es un listel amarillo u oro que presenta la sigla «O.I.C.M.C.T.B.».',
        'La sigla corresponde a Ordem Internacional Civil Militar Cavaleiros Templários do Brasil.',
      ],
    },
    colors: {
      id: 'cores',
      title: 'Colores oficiales',
      paragraphs: [
        'El documento presenta referencias cromáticas en RGB, CMYK y Pantone para algunos elementos. Hay detalles que deben verificarse entre las descripciones textuales y los códigos indicados.',
        'El archivo vectorial oficial del escudo es la principal referencia para la representación visual. Los colores oficiales no deben alterarse con base únicamente en la interpretación de los números.',
      ],
      items: [
        'Plata: RGB 208, 211, 212; Pantone 427 C.',
        'Rojo Gules: RGB 239, 51, 64; Pantone Red 032 C.',
        'Verde Sinople: RGB 0, 150, 57; Pantone 355 C.',
        'Amarillo Oro: RGB 254, 221, 0.',
        'Azul: RGB 16, 6, 159; Pantone Blue 072 C.',
        'Negro Sable: RGB 45, 41, 38; Pantone Black C.',
      ],
    },
    fidelity: {
      id: 'fidelidade-grafica',
      title: 'Fidelidad gráfica',
      paragraphs: [
        'El escudo oficial es material institucional y debe tratarse preservando proporción, legibilidad y colores. No deben añadirse elementos que no formen parte de la composición oficial.',
        'El sitio no recrea el escudo por aproximación ni lo sustituye por una versión generada artificialmente. La representación oficial en archivo vectorial es mantenida por la Orden y debe utilizarse en aplicaciones que exijan el arte final.',
      ],
    },
  },

  society: {
    kicker: 'Cultura y acción social',
    title: 'Cultura y acción social',
    lead: 'La dimensión cultural, literaria y comunitaria de la OICMCTB.',
    intro:
      'La Orden entiende la tradición caballeresca como compromiso con el conocimiento, la cultura y el servicio al bien común. Esta página reúne el brazo cultural de la institución, la participación de las Damas Templarias y sus frentes de actuación.',
    abtl: {
      kicker: 'Brazo cultural y literario',
      title: 'Academia Brasileña Templaria de Letras (ABTL)',
      paragraphs: [
        'La Academia Brasileña Templaria de Letras (ABTL) es el brazo cultural y literario asociado a la Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB), conforme a la descripción institucional proporcionada.',
        'Su actuación está orientada a la investigación histórica, la literatura y la producción intelectual, las publicaciones culturales, los estudios heráldicos, la preservación de las tradiciones y el incentivo a las artes, las ciencias y la producción de conocimiento.',
        'Los estudios teológicos se consideran cuando son compatibles con la actuación efectiva de la Academia. La Orden no atribuye a la ABTL miembros, publicaciones, premios, proyectos o cargos no confirmados.',
      ],
      areasTitle: 'Frentes de actuación de la ABTL',
      areas: [
        'Investigación histórica.',
        'Literatura y producción intelectual.',
        'Publicaciones culturales.',
        'Estudios heráldicos.',
        'Preservación de las tradiciones.',
        'Incentivo a las artes, las ciencias y la producción de conocimiento.',
        'Estudios teológicos, cuando sean compatibles con la actuación efectiva.',
      ],
    },
    ladies: {
      kicker: 'Consejo Nacional de las Damas Templarias',
      title: 'Damas Templarias',
      paragraphs: [
        'El Consejo Nacional de las Damas Templarias participa en la vida cultural, institucional y comunitaria de la Orden, contribuyendo a sus iniciativas y al fortalecimiento de los vínculos fraternos.',
        'La participación de las mujeres se valora sin crear atribuciones, proyectos o responsabilidades no documentados.',
      ],
      firstLadyLabel: 'Primera Dama',
      firstLadyName: 'Sueli Teodoro',
      firstLadyNote:
        'Identificación conforme a la información institucional proporcionada. El título de Primera Dama no se convierte automáticamente en presidencia, dirección ejecutiva u otra función no confirmada.',
    },
    areas: {
      kicker: 'Frentes de actuación',
      title: 'Áreas de actuación y objetivos institucionales',
      lead:
        'Las áreas siguientes son frentes de trabajo y objetivos de la Orden, conforme al material institucional.',
      items: [
        {
          title: 'Asistencia social',
          text: 'Amparo a los necesitados e iniciativas de solidaridad y apoyo comunitario.',
        },
        {
          title: 'Educación',
          text: 'Apoyo al acceso a la educación, la cultura y el conocimiento, comprendiendo el aprendizaje como un camino a lo largo de toda la vida.',
        },
        {
          title: 'Salud',
          text: 'Acciones de apoyo a la salud, el bienestar y la asistencia a quienes más lo necesitan.',
        },
        {
          title: 'Deporte',
          text: 'Incentivo a la práctica deportiva como disciplina, integración social y desarrollo humano.',
        },
        {
          title: 'Medio ambiente',
          text: 'Protección de la Amazonía, concienciación ambiental y respeto a la Tierra y a la diversidad de la vida.',
        },
        {
          title: 'Cultura',
          text: 'Valoración de la cultura, las tradiciones y la producción intelectual.',
        },
        {
          title: 'Investigación histórica',
          text: 'Preservación de la memoria histórica y estímulo a la investigación, incluidos los estudios heráldicos.',
        },
        {
          title: 'Acciones comunitarias',
          text: 'Iniciativas de acercamiento a las comunidades y de servicio al bien común.',
        },
        {
          title: 'Memoria de héroes cívicos',
          text: 'Valoración de la memoria de héroes cívicos locales y regionales y reconocimiento del mérito cívico.',
        },
      ],
      note:
        'La presentación de estas áreas no implica afirmar que todas ya tengan proyectos en ejecución. Cuando haya proyectos documentados, se divulgarán con nombre, objetivo, público, lugar, período y resultados.',
    },
    publications: {
      kicker: 'Conocimiento',
      title: 'Publicaciones y estudios',
      paragraphs: [
        'La Orden y la ABTL incentivan la investigación histórica, la producción intelectual y las publicaciones culturales. Cuando haya publicaciones disponibles y verificadas, se divulgarán en esta página.',
        'No se presentan artículos, conferencias, premios o publicaciones ficticias para completar la sección.',
      ],
    },
    cta: {
      title: 'Conozca también la Orden',
      lead: 'La historia, la misión y los valores institucionales están reunidos en La Orden.',
      primary: 'La Orden',
      secondary: 'Participar y contacto',
    },
  },

  participate: {
    kicker: 'Participe',
    title: 'Participar y contacto',
    lead: 'Información para conocer, contactar y manifestar interés en la OICMCTB.',
    interest: {
      kicker: 'Cómo participar',
      title: 'Manifieste su interés',
      paragraphs: [
        'El primer paso es conocer la Orden, su historia, su misión y sus frentes de actuación.',
        'Quien desee conocer mejor la institución o manifestar interés en participar puede contactar mediante el formulario de esta página o por el correo institucional.',
        'La Orden orientará sobre las etapas, los criterios y las condiciones vigentes. No se publican tasas, cuotas, beneficios ni reglas de ingreso sin validación institucional.',
      ],
      stepsTitle: 'Un camino sencillo',
      steps: [
        {
          title: 'Conozca la Orden',
          text: 'Lea la presentación institucional, la historia y la actuación cultural y social.',
        },
        {
          title: 'Contacte',
          text: 'Envíe su mensaje mediante el formulario, presentando su interés.',
        },
        {
          title: 'Reciba orientación',
          text: 'La Orden responderá con la información aplicable a su caso.',
        },
      ],
    },
    activities: {
      kicker: 'Actividades y ceremonias',
      title: 'Encuentros, ceremonias y solemnidades',
      paragraphs: [
        'Las ceremonias, investiduras, elevaciones y concesiones de títulos y honores son actos civiles y caballerescos de la Orden.',
        'Cuando la institución lo confirme, esos encuentros pueden estar abiertos a invitados, familiares y a la comunidad.',
        'Los títulos y honores concedidos por la OICMCTB no equivalen a cargos militares oficiales, diplomas académicos, condecoraciones gubernamentales o títulos públicos.',
        'No hay un calendario ficticio en esta página. Los eventos y actividades confirmados se divulgarán por los canales oficiales de la Orden.',
      ],
    },
    donations: {
      kicker: 'Contribuciones',
      title: 'Donaciones y contribuciones',
      paragraphs: [
        'La OICMCTB no divulga en esta página datos bancarios, importes ni formas de pago. Tampoco se presentan beneficios fiscales, deducciones del impuesto sobre la renta o incentivos tributarios como garantizados.',
        'Para recibir orientación sobre eventuales contribuciones, contacte con la Orden por sus canales oficiales.',
      ],
      note:
        'La Orden no presta asesoría tributaria. La información fiscal debe confirmarse con la institución y con un profesional habilitado.',
    },
    contact: {
      kicker: 'Contacto',
      title: 'Hable con la OICMCTB',
      emailLabel: 'Correo institucional',
      emailNote: 'Canal oficial informado por la Orden.',
      socialLabel: 'Redes sociales',
      socialHandle: '@oicmctb',
      platforms: 'Facebook e Instagram',
      note:
        'La dirección y el teléfono no se divulgan en esta página por no haber sido confirmados por la institución.',
      formTitle: 'Envíe un mensaje',
      formIntro:
        'Complete los campos siguientes. Su información se utilizará para responder a su contacto.',
    },
    faq: {
      kicker: 'Preguntas frecuentes',
      title: 'Preguntas frecuentes',
      lead: 'Respuestas basadas en la información institucional oficial.',
      items: [
        {
          q: '¿Qué es la OICMCTB?',
          a: 'La Ordem Internacional Civil Militar Cavaleiros Templários do Brasil (OICMCTB) es una organización civil brasileña sin fines de lucro, de carácter fraterno, cultural, filosófico, cívico y filantrópico, formalizada como persona jurídica en 2021.',
        },
        {
          q: '¿Cuál es su misión?',
          a: 'Contribuir a crear el futuro de un modo diferente, promoviendo el desarrollo humano, la preservación de la historia de los caballeros templarios y el mantenimiento de la memoria de los héroes cívicos locales, mediante acciones comunitarias, proyectos educativos e iniciativas de reconocimiento del mérito, respetando el modo de vida, las tradiciones y las leyes locales.',
        },
        {
          q: '¿Cuáles son sus valores?',
          a: 'Fe en Dios, esperanza, caridad, justicia, prudencia, fortaleza y templanza.',
        },
        {
          q: '¿Cuál es la relación con los Caballeros Templarios históricos?',
          a: 'La OICMCTB preserva y valora la memoria y los ideales caballerescos asociados a la tradición templaria. La institución es una organización brasileña contemporánea y no afirma continuidad jurídica o institucional directa con la orden medieval.',
        },
        {
          q: '¿Cuál es la relación con la masonería?',
          a: 'La OICMCTB es una organización civil independiente y no constituye una Orden Masónica. La institución no posee vínculo institucional con la masonería. La eventual participación de personas que también sean miembros de la masonería ocurre exclusivamente a título individual, mediante ingreso y aceptación formal como miembros de la OICMCTB, sin establecer vínculo institucional entre las organizaciones.',
        },
        {
          q: '¿Qué representa el escudo?',
          a: 'El escudo reúne un escudo ojival, la cruz griega roja, los colores nacionales brasileños y el sello de los dos caballeros. La página Historia y escudo explica cada elemento y su interpretación institucional.',
        },
        {
          q: '¿Cuál es la actuación de la ABTL?',
          a: 'La Academia Brasileña Templaria de Letras (ABTL) es el brazo cultural y literario asociado a la Orden, orientado a la investigación histórica, la literatura, las publicaciones culturales, los estudios heráldicos y la preservación de las tradiciones.',
        },
        {
          q: '¿Cómo obtener información sobre participación y actividades?',
          a: 'Contacte mediante el formulario de esta página o por el correo institucional. La Orden orientará sobre participación, actividades y eventuales contribuciones, sin publicar reglas o condiciones no confirmadas.',
        },
      ],
    },
  },

  legal: {
    updatedLabel: 'Última actualización',
    reviewNote:
      'Este documento es un texto institucional inicial y debe ser revisado jurídicamente por la Orden antes de considerarse definitivo.',
    privacy: {
      title: 'Política de Privacidad',
      paragraphs: [
        'La OICMCTB trata los datos enviados voluntariamente mediante el formulario de contacto —nombre, correo electrónico, teléfono, ciudad, asunto y mensaje— exclusivamente para responder a la solicitud y mantener el contacto administrativo correspondiente.',
        'Los datos no se venden ni se comparten con terceros con fines comerciales. El acceso está restringido a las personas responsables de la atención.',
        'El titular puede solicitar información, corrección o eliminación de sus datos por el correo institucional oicmctb@gmail.com.',
        'Este sitio es estático y no mantiene registro de visitantes. Los proveedores de alojamiento pueden registrar datos técnicos de acceso conforme a sus propias políticas.',
      ],
    },
    terms: {
      title: 'Términos de Uso',
      paragraphs: [
        'Este sitio tiene finalidad informativa e institucional. El contenido presentado no constituye oferta de servicios, asesoría jurídica, tributaria o financiera.',
        'La reproducción de textos e imágenes institucionales debe respetar la autoría y la identidad de la OICMCTB. El escudo y el sello son materiales institucionales y no pueden alterarse ni utilizarse de forma que sugiera un vínculo inexistente.',
        "Los enlaces externos, cuando existan, se ofrecen para comodidad del visitante. La OICMCTB no se responsabiliza por el contenido de sitios de terceros.",
        'La información institucional puede actualizarse sin aviso previo.',
      ],
    },
    cookies: {
      title: 'Cookies',
      paragraphs: [
        'Este sitio no utiliza cookies propios de publicidad o de perfilado de visitantes.',
        'Recursos técnicos de alojamiento o seguridad pueden utilizar cookies estrictamente necesarios para el funcionamiento y la protección del sitio.',
        'El visitante puede gestionar las cookies en la configuración de su navegador.',
      ],
    },
  },

  notFound: {
    kicker: 'Página no encontrada',
    title: 'Esta ruta no existe',
    text: 'La página que busca puede haber sido movida o no existe. Vuelva al inicio y explore la Orden.',
    cta: 'Volver al inicio',
  },
};
