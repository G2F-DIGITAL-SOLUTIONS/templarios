import type { RouteKey } from '@/i18n/routes';

/**
 * Views available to the route renderer. Each key maps to a component in
 * `src/views`. Keeping the mapping in one place means adding a page is a
 * one-line change and there is a single source of truth for the URL space.
 */
export type ViewName =
  | 'home'
  | 'institution'
  | 'initiatives'
  | 'initiative'
  | 'events'
  | 'knowledge'
  | 'donations'
  | 'citiesDay'
  | 'faq'
  | 'contact'
  | 'affiliation'
  | 'legal'
  | 'brasao'
  | 'abtl'
  | 'damas'
  | 'informacoes';

export interface RouteDefinition {
  routeKey: RouteKey;
  view: ViewName;
  /** Extra, view-specific props resolved inside the dynamic page. */
  meta?: {
    institution?: 'about' | 'history' | 'purposes' | 'teachings';
    initiativeId?: string;
    knowledgeType?: 'lecture' | 'study' | 'article' | 'video';
    page?: 'brasao' | 'abtl' | 'damas' | 'informacoes';
  };
}

/**
 * Every content route the site exposes. The `notFound` route is handled by a
 * dedicated static 404 file instead (see `src/pages/404.astro`).
 */
export const routeDefinitions: RouteDefinition[] = [
  { routeKey: 'home', view: 'home' },
  { routeKey: 'order', view: 'institution', meta: { institution: 'about' } },
  { routeKey: 'history', view: 'institution', meta: { institution: 'history' } },
  { routeKey: 'purposes', view: 'institution', meta: { institution: 'purposes' } },
  { routeKey: 'teachings', view: 'institution', meta: { institution: 'teachings' } },
  { routeKey: 'initiatives', view: 'initiatives' },
  { routeKey: 'initiativeEnvironment', view: 'initiative', meta: { initiativeId: 'environment' } },
  { routeKey: 'initiativeSport', view: 'initiative', meta: { initiativeId: 'sport' } },
  { routeKey: 'initiativeHealth', view: 'initiative', meta: { initiativeId: 'health' } },
  { routeKey: 'initiativeEducation', view: 'initiative', meta: { initiativeId: 'education' } },
  { routeKey: 'initiativeSocial', view: 'initiative', meta: { initiativeId: 'social' } },
  { routeKey: 'initiativeCulture', view: 'initiative', meta: { initiativeId: 'culture' } },
  { routeKey: 'initiativeHeraldry', view: 'initiative', meta: { initiativeId: 'heraldry' } },
  { routeKey: 'initiativeCivicMemory', view: 'initiative', meta: { initiativeId: 'civicMemory' } },
  { routeKey: 'events', view: 'events' },
  { routeKey: 'knowledge', view: 'knowledge' },
  { routeKey: 'lectures', view: 'knowledge', meta: { knowledgeType: 'lecture' } },
  { routeKey: 'studies', view: 'knowledge', meta: { knowledgeType: 'study' } },
  { routeKey: 'articles', view: 'knowledge', meta: { knowledgeType: 'article' } },
  { routeKey: 'citiesDay', view: 'citiesDay' },
  { routeKey: 'donations', view: 'donations' },
  { routeKey: 'affiliation', view: 'affiliation' },
  { routeKey: 'faq', view: 'faq' },
  { routeKey: 'contact', view: 'contact' },
  { routeKey: 'brasao', view: 'brasao', meta: { page: 'brasao' } },
  { routeKey: 'abtl', view: 'abtl', meta: { page: 'abtl' } },
  { routeKey: 'damas', view: 'damas', meta: { page: 'damas' } },
  { routeKey: 'informacoes', view: 'informacoes', meta: { page: 'informacoes' } },
  { routeKey: 'privacy', view: 'legal' },
  { routeKey: 'terms', view: 'legal' },
  { routeKey: 'cookies', view: 'legal' },
];

const byKey = new Map(routeDefinitions.map((definition) => [definition.routeKey, definition]));

export function getRouteDefinition(routeKey: RouteKey): RouteDefinition | undefined {
  return byKey.get(routeKey);
}