import type { Locale } from '@/i18n/config';

/**
 * A value that exists in Portuguese (source of truth) and optionally in other
 * locales. Reading through `tx()` always yields a usable value.
 */
export type Localized<T> = { pt: T } & Partial<Record<Exclude<Locale, 'pt'>, T>>;

/** Resolve a localized value for a locale, falling back to Portuguese. */
export function tx<T>(value: Localized<T>, locale: Locale): T {
  return (value as Partial<Record<Locale, T>>)[locale] ?? value.pt;
}