import { defaultLocale, type Locale } from './config';

/**
 * Route keys and their per-locale URL segments.
 *
 * The public architecture is deliberately compact:
 *   home · order · heritage · society · participate · legal pages · 404
 *
 * Old routes are permanently redirected to their consolidated destinations
 * (see `src/i18n/legacy-redirects.ts`).
 */
export const routeKeys = [
  'home',
  'order',
  'heritage',
  'society',
  'teachings',
  'participate',
  'privacy',
  'terms',
  'cookies',
  'notFound',
] as const;

export type RouteKey = (typeof routeKeys)[number];

export const routeSegments: Record<RouteKey, Record<Locale, string>> = {
  home: { pt: '', en: '', it: '', fr: '', es: '' },
  order: { pt: 'ordem', en: 'order', it: 'ordine', fr: 'ordre', es: 'orden' },
  heritage: {
    pt: 'historia-e-brasao',
    en: 'history-and-coat-of-arms',
    it: 'storia-e-stemma',
    fr: 'histoire-et-blason',
    es: 'historia-y-escudo',
  },
  society: {
    pt: 'cultura-e-atuacao-social',
    en: 'culture-and-social-action',
    it: 'cultura-e-azione-sociale',
    fr: 'culture-et-action-sociale',
    es: 'cultura-y-accion-social',
  },
  teachings: {
    pt: 'registros',
    en: 'records',
    it: 'registri',
    fr: 'registres',
    es: 'registros',
  },
  participate: {
    pt: 'participe',
    en: 'participate',
    it: 'partecipa',
    fr: 'participer',
    es: 'participa',
  },
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

/**
 * Extra URL segments that serve the same page as the canonical segment.
 * Nav, CTAs and canonical SEO keep using `routeSegments` / `localizedPath`.
 */
export const routeAliases: Partial<Record<RouteKey, Partial<Record<Locale, string[]>>>> = {
  teachings: {
    pt: ['ensinamentos'],
    en: ['teachings'],
    it: ['insegnamenti'],
    fr: ['enseignements'],
    es: ['ensenanzas'],
  },
};

/** Build an absolute, locale-aware pathname (leading slash, no trailing slash except root). */
export function localizedPath(locale: Locale, key: RouteKey): string {
  const segment = routeSegments[key][locale];
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const path = `${prefix}/${segment}`.replace(/\/+$/, '');
  return path === '' ? '/' : path;
}

/** Locale-aware pathname for an alias segment of a route. */
export function localizedAliasPath(locale: Locale, segment: string): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const path = `${prefix}/${segment}`.replace(/\/+$/, '');
  return path === '' ? '/' : path;
}

/** Every pathname (canonical + aliases) that should render a given route. */
export function pathsForRoute(locale: Locale, key: RouteKey): string[] {
  const canonical = localizedPath(locale, key);
  const aliases = (routeAliases[key]?.[locale] ?? []).map((segment) =>
    localizedAliasPath(locale, segment),
  );
  return [canonical, ...aliases];
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
 */
export function matchRouteKey(pathname: string): RouteKey | undefined {
  const clean = pathname.replace(/\/+$/, '') || '/';

  let best: RouteKey | undefined;
  let bestLength = -1;

  for (const key of routeKeys) {
    for (const locale of Object.keys(routeSegments[key]) as Locale[]) {
      for (const path of pathsForRoute(locale, key)) {
        const matches = path === '/' ? clean === '/' : clean === path || clean.startsWith(`${path}/`);
        if (matches && path.length > bestLength) {
          best = key;
          bestLength = path.length;
        }
      }
    }
  }

  return best;
}
