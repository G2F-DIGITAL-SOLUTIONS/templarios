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

/** Primary navigation — mirrors the proposed information architecture. */
export const primaryNav: NavItem[] = [
  {
    labelKey: 'order',
    routeKey: 'order',
    children: [
      { labelKey: 'about', routeKey: 'order' },
      { labelKey: 'history', routeKey: 'history' },
      { labelKey: 'purposes', routeKey: 'purposes' },
      { labelKey: 'teachings', routeKey: 'teachings' },
    ],
  },
  {
    labelKey: 'initiatives',
    routeKey: 'initiatives',
    children: [
      { labelKey: 'environment', routeKey: 'initiativeEnvironment' },
      { labelKey: 'sport', routeKey: 'initiativeSport' },
      { labelKey: 'health', routeKey: 'initiativeHealth' },
      { labelKey: 'education', routeKey: 'initiativeEducation' },
    ],
  },
  {
    labelKey: 'knowledge',
    routeKey: 'knowledge',
    children: [
      { labelKey: 'lectures', routeKey: 'lectures' },
      { labelKey: 'studies', routeKey: 'studies' },
      { labelKey: 'articles', routeKey: 'articles' },
    ],
  },
  { labelKey: 'events', routeKey: 'events' },
  { labelKey: 'citiesDay', routeKey: 'citiesDay' },
];

/** Secondary links (may live in the header utility area and the footer). */
export const secondaryNav: NavItem[] = [
  { labelKey: 'donations', routeKey: 'donations' },
  { labelKey: 'faq', routeKey: 'faq' },
  { labelKey: 'contact', routeKey: 'contact' },
];

/** Footer column structure. */
export const footerColumns: { titleKey: keyof Dictionary['footer']; items: NavChild[] }[] = [
  {
    titleKey: 'institutionalTitle',
    items: [
      { labelKey: 'about', routeKey: 'order' },
      { labelKey: 'history', routeKey: 'history' },
      { labelKey: 'purposes', routeKey: 'purposes' },
      { labelKey: 'teachings', routeKey: 'teachings' },
      { labelKey: 'affiliation', routeKey: 'affiliation' },
    ],
  },
  {
    titleKey: 'initiativesTitle',
    items: [
      { labelKey: 'environment', routeKey: 'initiativeEnvironment' },
      { labelKey: 'sport', routeKey: 'initiativeSport' },
      { labelKey: 'health', routeKey: 'initiativeHealth' },
      { labelKey: 'education', routeKey: 'initiativeEducation' },
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