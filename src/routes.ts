import type { RouteKey } from '@/i18n/routes';

/**
 * Views available to the route renderer. Each key maps to a component in
 * `src/views`. The public architecture is intentionally compact: institutional
 * content is consolidated into five main pages instead of one page per topic.
 */
export type ViewName =
  | 'home'
  | 'order'
  | 'heritage'
  | 'society'
  | 'participate'
  | 'legal'
  | 'notFound';

export interface RouteDefinition {
  routeKey: RouteKey;
  view: ViewName;
  /** Legal pages share one renderer. */
  meta?: {
    legal?: 'privacy' | 'terms' | 'cookies';
  };
}

export const routeDefinitions: RouteDefinition[] = [
  { routeKey: 'home', view: 'home' },
  { routeKey: 'order', view: 'order' },
  { routeKey: 'heritage', view: 'heritage' },
  { routeKey: 'society', view: 'society' },
  { routeKey: 'participate', view: 'participate' },
  { routeKey: 'privacy', view: 'legal', meta: { legal: 'privacy' } },
  { routeKey: 'terms', view: 'legal', meta: { legal: 'terms' } },
  { routeKey: 'cookies', view: 'legal', meta: { legal: 'cookies' } },
  { routeKey: 'notFound', view: 'notFound' },
];

const byKey = new Map(routeDefinitions.map((definition) => [definition.routeKey, definition]));

export function getRouteDefinition(routeKey: RouteKey): RouteDefinition | undefined {
  return byKey.get(routeKey);
}
