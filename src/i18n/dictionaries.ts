import { defaultLocale, type Locale } from './config';
import { pt, type Dictionary } from './dictionaries/pt';
import { en } from './dictionaries/en';
import { it } from './dictionaries/it';
import { fr } from './dictionaries/fr';
import { es } from './dictionaries/es';

/** Recursively widen string literal types (so translations are assignable). */
export type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? Widen<U>[]
        : { [K in keyof T]: Widen<T[K]> };

/** Recursively-optional version of a nested object type. */
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

/**
 * Every locale ships a complete dictionary. There is intentionally **no
 * Portuguese fallback** for foreign locales: a missing key must fail the
 * build (`npm run check:i18n`) instead of silently rendering Portuguese.
 */
const dictionaries: Record<Locale, Dictionary> = {
  pt,
  en: en as unknown as Dictionary,
  it: it as unknown as Dictionary,
  fr: fr as unknown as Dictionary,
  es: es as unknown as Dictionary,
};

const cache = new Map<Locale, Dictionary>();

/** Get the fully-resolved dictionary for a locale. */
export function getDictionary(locale: Locale): Dictionary {
  const cached = cache.get(locale);
  if (cached) return cached;
  const dictionary = dictionaries[locale] ?? dictionaries[defaultLocale];
  cache.set(locale, dictionary);
  return dictionary;
}

export { defaultLocale };
export type { Dictionary };
