import { localeTags, type Locale } from '@/i18n/config';

/** Format an ISO date in the visitor's locale, without timezone drift. */
export function formatDate(iso: string, locale: Locale, opts: Intl.DateTimeFormatOptions = {}): string {
  const date = new Date(`${iso}T12:00:00`);
  return new Intl.DateTimeFormat(localeTags[locale], {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    ...opts,
  }).format(date);
}

/** Machine-readable datetime value for <time datetime="...">. */
export function isoDate(iso: string): string {
  return iso;
}

/** True when an event date is today or later. */
export function isUpcoming(iso: string, now = new Date()): boolean {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return new Date(`${iso}T12:00:00`) >= today;
}