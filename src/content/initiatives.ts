import type { RouteKey } from '@/i18n/routes';
import type { Localized } from './localize';

export interface Initiative {
  id: string;
  routeKey: RouteKey;
  /** Lucide-style icon key resolved by the Icon component. */
  icon: 'leaf' | 'trophy' | 'heart-pulse' | 'graduation';
  name: Localized<string>;
  tagline: Localized<string>;
  description: Localized<string>;
  /** Concrete areas of action described in the institutional spirit of the Order. */
  focus: { pt: string[]; en?: string[] };
}

export const initiatives: Initiative[] = [
  {
    id: 'environment',
    routeKey: 'initiativeEnvironment',
    icon: 'leaf',
    name: { pt: 'Meio Ambiente', en: 'Environment' },
    tagline: {
      pt: 'Respeito e cuidado com a comunidade da vida.',
      en: 'Respect and care for the community of life.',
    },
    description: {
      pt: 'Projetos, ações e iniciativas relacionadas à preservação ambiental e ao respeito à Terra e à diversidade da vida.',
      en: 'Projects, actions and initiatives related to environmental preservation and to respect for the Earth and the diversity of life.',
    },
    focus: {
      pt: [
        'Conscientização ambiental junto às comunidades.',
        'Apoio a projetos de preservação e recuperação de áreas naturais.',
        'Educação para o respeito à Terra e à diversidade.',
      ],
      en: [
        'Environmental awareness within communities.',
        'Support for projects preserving and restoring natural areas.',
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
      pt: 'Bem-estar e dignidade das pessoas.',
      en: 'The wellbeing and dignity of people.',
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
];

export function getInitiative(id: string): Initiative | undefined {
  return initiatives.find((i) => i.id === id);
}