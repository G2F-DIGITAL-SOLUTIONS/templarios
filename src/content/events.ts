import type { Localized } from './localize';
export interface EventItem {
  id: string;
  title: Localized<string>;
  summary: Localized<string>;
  date: string;
  endDate?: string;
  location: Localized<string>;
  url?: string;
  image?: string;
  placeholder?: boolean;
}
/**
 * No event with confirmed date and venue was provided for publication.
 * Placeholder/sample events are intentionally NOT published (see AUDIT.md).
 * Add only events confirmed by the Order, with real date and venue.
 */
export const events: EventItem[] = [];
