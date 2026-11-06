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
}

/**
 * Primary navigation — the five consolidated pages of the public architecture.
 *
 * Each page aggregates related content: "A Ordem" holds identity, history
 * summary, mission, vision, values, philosophy and institutional data;
 * "História e Brasão" holds the seal and heraldry; "Cultura e Atuação Social"
 * holds ABTL, the Templar Ladies and the areas of action; "Participar e
 * Contato" holds participation, donations, FAQ and the contact form.
 */
export const primaryNav: NavItem[] = [
  { labelKey: 'home', routeKey: 'home' },
  { labelKey: 'order', routeKey: 'order' },
  { labelKey: 'heritage', routeKey: 'heritage' },
  { labelKey: 'society', routeKey: 'society' },
  { labelKey: 'participate', routeKey: 'participate' },
];

/** Secondary links shown in the mobile menu and used by the footer. */
export const secondaryNav: NavItem[] = [
  { labelKey: 'participate', routeKey: 'participate' },
];

/** Footer column structure. */
export const footerColumns: { titleKey: keyof Dictionary['footer']; items: NavChild[] }[] = [
  {
    titleKey: 'institutionalTitle',
    items: [
      { labelKey: 'order', routeKey: 'order' },
      { labelKey: 'heritage', routeKey: 'heritage' },
      { labelKey: 'society', routeKey: 'society' },
      { labelKey: 'participate', routeKey: 'participate' },
    ],
  },
];
