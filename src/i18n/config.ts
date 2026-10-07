/**
 * Locale configuration.
 *
 * Portuguese (pt) is the source of truth for institutional content.
 * Other locales are fully supported for site chrome and are ready for
 * content translation — untranslated content falls back to pt gracefully.
 */
export const locales = ['pt', 'en', 'it', 'fr', 'es'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt';

/** Native locale names, used for the accessible language switcher labels. */
export const localeNames: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  it: 'Italiano',
  fr: 'Français',
  es: 'Español',
};

/** Short codes shown in the switcher (never flag-only). */
export const localeShort: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
  it: 'IT',
  fr: 'FR',
  es: 'ES',
};

/** BCP-47 tags used for <html lang>, hreflang and structured data. */
export const localeTags: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en',
  it: 'it',
  fr: 'fr',
  es: 'es',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}