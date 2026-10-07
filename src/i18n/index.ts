import { defaultLocale, isLocale, localeNames, localeShort, localeTags, locales, type Locale } from './config';
import { getDictionary, type Dictionary } from './dictionaries';
import { alternatesFor, localizedPath, routeSegments, type RouteKey } from './routes';

export {
  defaultLocale,
  getDictionary,
  isLocale,
  localeNames,
  localeShort,
  localeTags,
  locales,
  localizedPath,
  alternatesFor,
  routeSegments,
  type Dictionary,
  type Locale,
  type RouteKey,
};

/** Resolve the active locale from an Astro URL by inspecting the first path segment. */
export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  if (first && isLocale(first)) return first;
  return defaultLocale;
}

export interface I18nContext {
  locale: Locale;
  dict: Dictionary;
  /** Build a locale-aware path for a route key (or pass a raw path through). */
  t: (key: RouteKey) => string;
  /** Absolute pathname for the current URL in another locale (for the switcher). */
  localizedPath: (key: RouteKey) => string;
}

/**
 * Convenience bundle used inside components. `routeKey` lets `#switchLocale`
 * links point at the equivalent page in the other language.
 */
export function useI18n(locale: Locale): I18nContext {
  return {
    locale,
    dict: getDictionary(locale),
    t: (key: RouteKey) => localizedPath(locale, key),
    localizedPath: (key: RouteKey) => localizedPath(locale, key),
  };
}

/** All locales with their alternate path for a given route — for the language switcher. */
export function languageAlternates(routeKey: RouteKey) {
  return alternatesFor(routeKey).map(({ locale, path }) => ({
    locale,
    path,
    short: localeShort[locale],
    name: localeNames[locale],
    tag: localeTags[locale],
  }));
}