import type { RouteKey } from '@/i18n/routes';
import type { Dictionary } from '@/i18n/dictionaries';

/**
 * The "doors of the castle" shown on the homepage. Each maps a copy key
 * from the dictionary to a destination route, so the copy stays translatable
 * and the links stay locale-aware.
 */
export interface Door {
  id: string;
  copyKey: keyof Dictionary['home']['doors']['items'];
  routeKey: RouteKey;
  /** Icon key resolved by the Icon component. */
  icon: 'shield' | 'scroll' | 'compass' | 'book' | 'hand-heart' | 'calendar';
  /** Emphasise the first door as the primary entrance. */
  featured?: boolean;
}

export const doors: Door[] = [
  { id: 'order', copyKey: 'order', routeKey: 'order', icon: 'shield', featured: true },
  { id: 'history', copyKey: 'history', routeKey: 'history', icon: 'scroll' },
  {
    id: 'missionVisionValues',
    copyKey: 'missionVisionValues',
    routeKey: 'purposes',
    icon: 'compass',
  },
  { id: 'coatOfArms', copyKey: 'coatOfArms', routeKey: 'brasao', icon: 'shield' },
  { id: 'academy', copyKey: 'academy', routeKey: 'abtl', icon: 'book' },
  { id: 'damas', copyKey: 'damas', routeKey: 'damas', icon: 'hand-heart' },
  { id: 'initiatives', copyKey: 'initiatives', routeKey: 'initiatives', icon: 'hand-heart' },
  { id: 'contact', copyKey: 'contact', routeKey: 'contact', icon: 'calendar' },
];
