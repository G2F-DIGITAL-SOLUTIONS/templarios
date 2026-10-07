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
 * Merge a partial translation over the Portuguese source.
 *
 * Only plain objects are merged; arrays and primitives are taken wholesale
 * from the override when present. Undefined leaves fall back to pt, so a
 * partially-translated locale never renders an empty string.
 */
function deepMerge<T>(base: T, override: DeepPartial<T> | undefined): T {
  if (override === undefined) return base;
  if (Array.isArray(base) || typeof base !== 'object' || base === null) {
    return (override as T) ?? base;
  }
  const result = { ...(base as Record<string, unknown>) };
  for (const key of Object.keys(override as Record<string, unknown>)) {
    const baseValue = (base as Record<string, unknown>)[key];
    const overrideValue = (override as Record<string, unknown>)[key];
    if (overrideValue === undefined) continue;
    result[key] =
      typeof baseValue === 'object' && baseValue !== null && !Array.isArray(baseValue)
        ? deepMerge(baseValue, overrideValue as never)
        : overrideValue;
  }
  return result as T;
}

const overrides: Record<Locale, DeepPartial<Dictionary>> = {
  pt: {},
  en,
  it,
  fr,
  es,
};

const cache = new Map<Locale, Dictionary>();

/** Get the fully-resolved dictionary for a locale (with pt fallback applied). */
export function getDictionary(locale: Locale): Dictionary {
  const cached = cache.get(locale);
  if (cached) return cached;
  const merged = deepMerge(pt, overrides[locale]);
  cache.set(locale, merged);
  return merged;
}

export { defaultLocale };
export type { Dictionary };