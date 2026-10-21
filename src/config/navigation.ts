import type { Dictionary } from '@/i18n/dictionaries';
import type { RouteKey } from '@/i18n/routes';

export interface NavChild {
  /** Key into `dict.nav` for the link label. */
  labelKey: keyof Dictionary['nav'];
  routeKey: RouteKey;
}

export interface NavItem {
  labelKey: keyof Dictionary['nav'];
  routeKey: RouteKey;
  children?: NavChild[];
}

/**
 * Primary navigation.
 *
 * "A Ordem" groups Quem Somos, Missão Visão e Valores, and Informações
 * Institucionais. História and Brasão e Simbologia are top-level items.
 * Academia (ABTL), Atuação Social and Contato are top-level items.
 * No empty pages are created solely to fill the menu.
 */
export const primaryNav: NavItem[] = [
  {
    labelKey: 'order',
    routeKey: 'order',
    children: [
      { labelKey: 'about', routeKey: 'order' },
      { labelKey: 'missionVisionValues', routeKey: 'purposes' },
      { labelKey: 'institutionalInfo', routeKey: 'informacoes' },
    ],
  },
  { labelKey: 'history', routeKey: 'history' },
  { labelKey: 'coatOfArms', routeKey: 'brasao' },
  { labelKey: 'academy', routeKey: 'abtl' },
  { labelKey: 'templarLadies', routeKey: 'damas' },
  { labelKey: 'initiatives', routeKey: 'initiatives' },
  { labelKey: 'contact', routeKey: 'contact' },
];

/** Secondary links (may live in the header utility area and the footer). */
export const secondaryNav: NavItem[] = [
  { labelKey: 'faq', routeKey: 'faq' },
  { labelKey: 'contact', routeKey: 'contact' },
];

/** Footer column structure. */
export const footerColumns: { titleKey: keyof Dictionary['footer']; items: NavChild[] }[] = [
  {
    titleKey: 'institutionalTitle',
    items: [
      { labelKey: 'about', routeKey: 'order' },
      { labelKey: 'missionVisionValues', routeKey: 'purposes' },
      { labelKey: 'history', routeKey: 'history' },
      { labelKey: 'coatOfArms', routeKey: 'brasao' },
      { labelKey: 'academy', routeKey: 'abtl' },
      { labelKey: 'templarLadies', routeKey: 'damas' },
      { labelKey: 'institutionalInfo', routeKey: 'informacoes' },
    ],
  },
  {
    titleKey: 'initiativesTitle',
    items: [
      { labelKey: 'environment', routeKey: 'initiativeEnvironment' },
      { labelKey: 'sport', routeKey: 'initiativeSport' },
      { labelKey: 'health', routeKey: 'initiativeHealth' },
      { labelKey: 'education', routeKey: 'initiativeEducation' },
      { labelKey: 'social', routeKey: 'initiativeSocial' },
      { labelKey: 'culture', routeKey: 'initiativeCulture' },
      { labelKey: 'heraldry', routeKey: 'initiativeHeraldry' },
      { labelKey: 'civicMemory', routeKey: 'initiativeCivicMemory' },
    ],
  },
  {
    titleKey: 'knowledgeTitle',
    items: [
      { labelKey: 'lectures', routeKey: 'lectures' },
      { labelKey: 'studies', routeKey: 'studies' },
      { labelKey: 'articles', routeKey: 'articles' },
      { labelKey: 'events', routeKey: 'events' },
      { labelKey: 'citiesDay', routeKey: 'citiesDay' },
    ],
  },
];
