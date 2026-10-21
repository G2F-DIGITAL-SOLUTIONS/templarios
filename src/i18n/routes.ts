import { defaultLocale, type Locale } from './config';

/**
 * Route keys and their per-locale URL segments.
 *
 * Keeping slugs here (rather than hardcoded in pages) means:
 *  - every page knows all of its language alternates (for hreflang + switcher);
 *  - a new locale only needs a segment added per key.
 *
 * A segment may contain a `/` for nested routes.
 */
export const routeKeys = [
  'home',
  'order',
  'history',
  'purposes',
  'teachings',
  'initiatives',
  'initiativeEnvironment',
  'initiativeSport',
  'initiativeHealth',
  'initiativeEducation',
  'initiativeSocial',
  'initiativeCulture',
  'initiativeHeraldry',
  'initiativeCivicMemory',
  'events',
  'knowledge',
  'lectures',
  'studies',
  'articles',
  'citiesDay',
  'donations',
  'affiliation',
  'faq',
  'contact',
  'brasao',
  'abtl',
  'damas',
  'informacoes',
  'shop',
  'tv',
  'privacy',
  'terms',
  'cookies',
  'notFound',
] as const;

export type RouteKey = (typeof routeKeys)[number];

export const routeSegments: Record<RouteKey, Record<Locale, string>> = {
  home: { pt: '', en: '', it: '', fr: '', es: '' },
  order: { pt: 'ordem', en: 'order', it: 'ordine', fr: 'ordre', es: 'orden' },
  history: { pt: 'historia', en: 'history', it: 'storia', fr: 'histoire', es: 'historia' },
  purposes: { pt: 'propositos', en: 'purposes', it: 'propositi', fr: 'propos', es: 'propositos' },
  teachings: {
    pt: 'ensinamentos',
    en: 'teachings',
    it: 'insegnamenti',
    fr: 'enseignements',
    es: 'ensenanzas',
  },
  initiatives: {
    pt: 'iniciativas',
    en: 'initiatives',
    it: 'iniziative',
    fr: 'initiatives',
    es: 'iniciativas',
  },
  initiativeEnvironment: {
    pt: 'iniciativas/meio-ambiente',
    en: 'initiatives/environment',
    it: 'iniziative/ambiente',
    fr: 'initiatives/environnement',
    es: 'iniciativas/medio-ambiente',
  },
  initiativeSport: {
    pt: 'iniciativas/esporte',
    en: 'initiatives/sport',
    it: 'iniziative/sport',
    fr: 'initiatives/sport',
    es: 'iniciativas/deporte',
  },
  initiativeHealth: {
    pt: 'iniciativas/saude',
    en: 'initiatives/health',
    it: 'iniziative/salute',
    fr: 'initiatives/sante',
    es: 'iniciativas/salud',
  },
  initiativeEducation: {
    pt: 'iniciativas/educacao',
    en: 'initiatives/education',
    it: 'iniziative/educazione',
    fr: 'initiatives/education',
    es: 'iniciativas/educacion',
  },
  initiativeSocial: {
    pt: 'iniciativas/assistencia-social',
    en: 'initiatives/social-assistance',
    it: 'iniziative/assistenza-sociale',
    fr: 'initiatives/aide-sociale',
    es: 'iniciativas/asistencia-social',
  },
  initiativeCulture: {
    pt: 'iniciativas/cultura-historia-pesquisa',
    en: 'initiatives/culture-history-research',
    it: 'iniziative/cultura-storia-ricerca',
    fr: 'initiatives/culture-histoire-recherche',
    es: 'iniciativas/cultura-historia-investigacion',
  },
  initiativeHeraldry: {
    pt: 'iniciativas/estudos-heraldicos',
    en: 'initiatives/heraldic-studies',
    it: 'iniziative/studi-araldici',
    fr: 'initiatives/etudes-heraldiques',
    es: 'iniciativas/estudios-heraldicos',
  },
  initiativeCivicMemory: {
    pt: 'iniciativas/memoria-herois-civicos',
    en: 'initiatives/civic-heroes-memory',
    it: 'iniziative/memoria-eroi-civici',
    fr: 'initiatives/memoire-heros-civiques',
    es: 'iniciativas/memoria-heroes-civicos',
  },
  events: { pt: 'eventos', en: 'events', it: 'eventi', fr: 'evenements', es: 'eventos' },
  knowledge: {
    pt: 'conhecimento',
    en: 'knowledge',
    it: 'conoscenza',
    fr: 'connaissance',
    es: 'conocimiento',
  },
  lectures: { pt: 'palestras', en: 'lectures', it: 'conferenze', fr: 'conferences', es: 'conferencias' },
  studies: { pt: 'estudos', en: 'studies', it: 'studi', fr: 'etudes', es: 'estudios' },
  articles: { pt: 'artigos', en: 'articles', it: 'articoli', fr: 'articles', es: 'articulos' },
  citiesDay: {
    pt: 'dia-das-cidades',
    en: 'day-of-cities',
    it: 'giorno-delle-citta',
    fr: 'jour-des-villes',
    es: 'dia-de-las-ciudades',
  },
  donations: { pt: 'doacoes', en: 'donations', it: 'donazioni', fr: 'dons', es: 'donaciones' },
  affiliation: { pt: 'afiliacao', en: 'affiliation', it: 'affiliazione', fr: 'affiliation', es: 'afiliacion' },
  faq: { pt: 'faq', en: 'faq', it: 'faq', fr: 'faq', es: 'faq' },
  contact: { pt: 'contato', en: 'contact', it: 'contatti', fr: 'contact', es: 'contacto' },
  brasao: { pt: 'brasao', en: 'coat-of-arms', it: 'stemma', fr: 'blason', es: 'escudo' },
  abtl: { pt: 'abtl', en: 'abtl', it: 'abtl', fr: 'abtl', es: 'abtl' },
  damas: { pt: 'damas-templarias', en: 'templar-ladies', it: 'dame-templari', fr: 'dames-templieres', es: 'damas-templarias' },
  informacoes: { pt: 'informacoes-institucionais', en: 'institutional-info', it: 'info-istituzionali', fr: 'infos-institutionnelles', es: 'info-institucionales' },
  shop: { pt: 'loja', en: 'shop', it: 'negozio', fr: 'boutique', es: 'tienda' },
  tv: { pt: 'tv', en: 'tv', it: 'tv', fr: 'tv', es: 'tv' },
  privacy: {
    pt: 'politica-de-privacidade',
    en: 'privacy-policy',
    it: 'informativa-privacy',
    fr: 'politique-de-confidentialite',
    es: 'politica-de-privacidad',
  },
  terms: { pt: 'termos', en: 'terms', it: 'termini', fr: 'conditions', es: 'terminos' },
  cookies: { pt: 'cookies', en: 'cookies', it: 'cookie', fr: 'cookies', es: 'cookies' },
  notFound: { pt: '404', en: '404', it: '404', fr: '404', es: '404' },
};

/** Build an absolute, locale-aware pathname (leading slash, no trailing slash except root). */
export function localizedPath(locale: Locale, key: RouteKey): string {
  const segment = routeSegments[key][locale];
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const path = `${prefix}/${segment}`.replace(/\/+$/, '');
  return path === '' ? '/' : path;
}

/** Every locale variant of a route — used for the language switcher and hreflang. */
export function alternatesFor(key: RouteKey): { locale: Locale; path: string }[] {
  return (Object.keys(routeSegments[key]) as Locale[]).map((locale) => ({
    locale,
    path: localizedPath(locale, key),
  }));
}

/**
 * Reverse lookup: given a pathname, find the route key it belongs to.
 * Used so the language switcher links to the *equivalent* page, not home.
 * The longest matching segment wins (so `/iniciativas/meio-ambiente` beats
 * `/iniciativas`).
 */
export function matchRouteKey(pathname: string): RouteKey | undefined {
  const clean = pathname.replace(/\/+$/, '') || '/';

  let best: RouteKey | undefined;
  let bestLength = -1;

  for (const key of routeKeys) {
    for (const locale of Object.keys(routeSegments[key]) as Locale[]) {
      const path = localizedPath(locale, key);
      const matches = path === '/' ? clean === '/' : clean === path || clean.startsWith(`${path}/`);
      if (matches && path.length > bestLength) {
        best = key;
        bestLength = path.length;
      }
    }
  }

  return best;
}