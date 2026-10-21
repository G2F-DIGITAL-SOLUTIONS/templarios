import type { RouteKey } from '@/i18n/routes';
import type { Localized } from './localize';

export interface Initiative {
  id: string;
  routeKey: RouteKey;
  /** Lucide-style icon key resolved by the Icon component. */
  icon: 'leaf' | 'trophy' | 'heart-pulse' | 'graduation' | 'hand-heart' | 'book' | 'shield';
  name: Localized<string>;
  tagline: Localized<string>;
  description: Localized<string>;
  /** Areas of action described in institutional terms, without unverified claims. */
  focus: { pt: string[]; en?: string[] };
}

/**
 * Frentes de atuação da OICMCTB, apresentadas com base no material institucional.
 * Cada frente é descrita de forma cautelosa, sem apresentar campanhas, resultados,
 * números de beneficiários, parcerias ou ações concluídas sem evidências concretas.
 */
export const initiatives: Initiative[] = [
  {
    id: 'environment',
    routeKey: 'initiativeEnvironment',
    icon: 'leaf',
    name: { pt: 'Meio Ambiente', en: 'Environment' },
    tagline: {
      pt: 'Proteção da Amazônia e conscientização ambiental.',
      en: 'Amazon protection and environmental awareness.',
    },
    description: {
      pt: 'Frente de atuação voltada à proteção ambiental, à conscientização sobre a preservação da Amazônia e ao respeito à Terra e à diversidade da vida.',
      en: 'Area of action focused on environmental protection, awareness-raising about Amazon preservation and respect for the Earth and the diversity of life.',
    },
    focus: {
      pt: [
        'Conscientização ambiental junto às comunidades.',
        'Proteção da Amazônia e conscientização ambiental.',
        'Educação para o respeito à Terra e à diversidade.',
      ],
      en: [
        'Environmental awareness within communities.',
        'Amazon protection and environmental awareness.',
        'Education for respect of the Earth and diversity.',
      ],
    },
  },
  {
    id: 'sport',
    routeKey: 'initiativeSport',
    icon: 'trophy',
    name: { pt: 'Esporte', en: 'Sport' },
    tagline: {
      pt: 'O esporte como caminho de integração e desenvolvimento.',
      en: 'Sport as a path of integration and development.',
    },
    description: {
      pt: 'Incentivo ao esporte, à integração social e ao desenvolvimento humano, especialmente entre jovens e comunidades.',
      en: 'Encouragement of sport, social integration and human development, especially among young people and communities.',
    },
    focus: {
      pt: [
        'Incentivo à prática esportiva como disciplina e formação.',
        'Apoio a iniciativas de integração social por meio do esporte.',
        'Valorização do desenvolvimento humano e do trabalho em equipe.',
      ],
      en: [
        'Encouraging sport as discipline and formation.',
        'Supporting social-integration initiatives through sport.',
        'Valuing human development and teamwork.',
      ],
    },
  },
  {
    id: 'health',
    routeKey: 'initiativeHealth',
    icon: 'heart-pulse',
    name: { pt: 'Saúde', en: 'Health' },
    tagline: {
      pt: 'Saúde e bem-estar social.',
      en: 'Health and social wellbeing.',
    },
    description: {
      pt: 'Ações de apoio à saúde, ao bem-estar e à assistência aos que mais precisam, em espírito de caridade e serviço.',
      en: 'Actions supporting health, wellbeing and assistance to those most in need, in a spirit of charity and service.',
    },
    focus: {
      pt: [
        'Apoio a entidades de assistência e de cuidado à saúde.',
        'Iniciativas de promoção do bem-estar e da dignidade.',
        'Caridade e serviço aos necessitados.',
      ],
      en: [
        'Support for care and health-assistance bodies.',
        'Initiatives promoting wellbeing and dignity.',
        'Charity and service to those in need.',
      ],
    },
  },
  {
    id: 'education',
    routeKey: 'initiativeEducation',
    icon: 'graduation',
    name: { pt: 'Educação', en: 'Education' },
    tagline: {
      pt: 'Conhecimento, cultura e oportunidades.',
      en: 'Knowledge, culture and opportunity.',
    },
    description: {
      pt: 'Projetos voltados ao acesso à educação, à cultura e ao conhecimento, compreendendo a aprendizagem como caminho ao longo de toda a vida.',
      en: 'Projects aimed at access to education, culture and knowledge, understanding learning as a lifelong path.',
    },
    focus: {
      pt: [
        'Apoio ao acesso à educação e à cultura.',
        'Valorização do estudo e da aprendizagem contínua.',
        'Promoção do conhecimento como bem comum.',
      ],
      en: [
        'Support for access to education and culture.',
        'Valuing study and continuous learning.',
        'Promoting knowledge as a common good.',
      ],
    },
  },
  {
    id: 'social',
    routeKey: 'initiativeSocial',
    icon: 'hand-heart',
    name: { pt: 'Assistência Social', en: 'Social Assistance' },
    tagline: {
      pt: 'Amparo aos necessitados e solidariedade.',
      en: 'Support for those in need and solidarity.',
    },
    description: {
      pt: 'Frente de atuação voltada à assistência social e ao amparo aos necessitados, em caráter filantrópico e de solidariedade.',
      en: 'Area of action focused on social assistance and support for those in need, in a philanthropic and solidarity spirit.',
    },
    focus: {
      pt: [
        'Assistência social e amparo aos necessitados.',
        'Iniciativas de solidariedade e apoio comunitário.',
        'Ação filantrópica em benefício da comunidade.',
      ],
      en: [
        'Social assistance and support for those in need.',
        'Solidarity and community support initiatives.',
        'Philanthropic action for the benefit of the community.',
      ],
    },
  },
  {
    id: 'culture',
    routeKey: 'initiativeCulture',
    icon: 'book',
    name: { pt: 'Cultura, História e Pesquisa', en: 'Culture, History and Research' },
    tagline: {
      pt: 'Preservação da memória histórica e cultural.',
      en: 'Preservation of historical and cultural memory.',
    },
    description: {
      pt: 'Frente de atuação voltada à cultura, à história e à pesquisa, incluindo estudos heráldicos e a valorização das tradições.',
      en: 'Area of action focused on culture, history and research, including heraldic studies and the appreciation of traditions.',
    },
    focus: {
      pt: [
        'Cultura, história e pesquisa.',
        'Publicações e estudos heráldicos.',
        'Valorização das tradições e da memória histórica.',
      ],
      en: [
        'Culture, history and research.',
        'Publications and heraldic studies.',
        'Appreciation of traditions and historical memory.',
      ],
    },
  },
  {
    id: 'heraldry',
    routeKey: 'initiativeHeraldry',
    icon: 'shield',
    name: { pt: 'Estudos Heráldicos', en: 'Heraldic Studies' },
    tagline: {
      pt: 'Simbologia e identidade heráldica.',
      en: 'Symbolism and heraldic identity.',
    },
    description: {
      pt: 'Estudos e publicações sobre heráldica, incluindo o brasão e o selo da OICMCTB, com base nos materiais institucionais fornecidos.',
      en: 'Studies and publications on heraldry, including the OICMCTB coat of arms and seal, based on the institutional materials provided.',
    },
    focus: {
      pt: [
        'Estudos heráldicos baseados nos materiais institucionais.',
        'Divulgação do brasão e do selo da OICMCTB.',
        'Preservação da simbologia institucional.',
      ],
      en: [
        'Heraldic studies based on institutional materials.',
        'Dissemination of the OICMCTB coat of arms and seal.',
        'Preservation of institutional symbolism.',
      ],
    },
  },
  {
    id: 'civicMemory',
    routeKey: 'initiativeCivicMemory',
    icon: 'shield',
    name: { pt: 'Memória de Heróis Cívicos', en: 'Civic Heroes Memory' },
    tagline: {
      pt: 'Valorização da memória de heróis cívicos locais.',
      en: 'Appreciation of the memory of local civic heroes.',
    },
    description: {
      pt: 'Frente de atuação voltada à valorização da memória de heróis cívicos locais e regionais.',
      en: 'Area of action focused on appreciating the memory of local and regional civic heroes.',
    },
    focus: {
      pt: [
        'Valorização da memória de heróis cívicos locais.',
        'Reconhecimento do mérito cívico.',
        'Preservação da memória histórica regional.',
      ],
      en: [
        'Appreciation of the memory of local civic heroes.',
        'Recognition of civic merit.',
        'Preservation of regional historical memory.',
      ],
    },
  },
];

export function getInitiative(id: string): Initiative | undefined {
  return initiatives.find((i) => i.id === id);
}
