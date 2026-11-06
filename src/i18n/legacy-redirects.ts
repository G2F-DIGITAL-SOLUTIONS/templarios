/**
 * Permanent redirects for the previous, more fragmented public architecture.
 *
 * This file is intentionally self-contained (no project imports) so that both
 * TypeScript and the Node build scripts can read it directly.
 *
 * The source of truth is this list:
 *  - `scripts/generate-redirects.mjs` writes `redirects.generated.mjs`,
 *    `public/_redirects` and the `redirects` block of `vercel.json`;
 *  - `astro.config.mjs` turns the generated map into static redirect pages.
 */
export type LegacyLocale = 'pt' | 'en' | 'it' | 'fr' | 'es';

const LOCALES: LegacyLocale[] = ['pt', 'en', 'it', 'fr', 'es'];

interface LegacyRoute {
  /** URL segments used by the old architecture, per locale. */
  segments: Record<LegacyLocale, string>;
  /** Consolidated destination segment, per locale. */
  target: Record<LegacyLocale, string>;
  /** Optional in-page anchor. */
  hash?: string;
}

const legacyRoutes: LegacyRoute[] = [
  {
    segments: { pt: 'historia', en: 'history', it: 'storia', fr: 'histoire', es: 'historia' },
    target: {
      pt: 'historia-e-brasao',
      en: 'history-and-coat-of-arms',
      it: 'storia-e-stemma',
      fr: 'histoire-et-blason',
      es: 'historia-y-escudo',
    },
  },
  {
    segments: { pt: 'propositos', en: 'purposes', it: 'propositi', fr: 'propos', es: 'propositos' },
    target: { pt: 'ordem', en: 'order', it: 'ordine', fr: 'ordre', es: 'orden' },
    hash: 'missao-visao-e-valores',
  },
  {
    segments: {
      pt: 'ensinamentos',
      en: 'teachings',
      it: 'insegnamenti',
      fr: 'enseignements',
      es: 'ensenanzas',
    },
    target: { pt: 'ordem', en: 'order', it: 'ordine', fr: 'ordre', es: 'orden' },
    hash: 'filosofia-e-mistica',
  },
  {
    segments: {
      pt: 'iniciativas',
      en: 'initiatives',
      it: 'iniziative',
      fr: 'initiatives',
      es: 'iniciativas',
    },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'atuacao-social',
  },
  {
    segments: {
      pt: 'iniciativas/meio-ambiente',
      en: 'initiatives/environment',
      it: 'iniziative/ambiente',
      fr: 'initiatives/environnement',
      es: 'iniciativas/medio-ambiente',
    },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'atuacao-social',
  },
  {
    segments: {
      pt: 'iniciativas/esporte',
      en: 'initiatives/sport',
      it: 'iniziative/sport',
      fr: 'initiatives/sport',
      es: 'iniciativas/deporte',
    },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'atuacao-social',
  },
  {
    segments: {
      pt: 'iniciativas/saude',
      en: 'initiatives/health',
      it: 'iniziative/salute',
      fr: 'initiatives/sante',
      es: 'iniciativas/salud',
    },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'atuacao-social',
  },
  {
    segments: {
      pt: 'iniciativas/educacao',
      en: 'initiatives/education',
      it: 'iniziative/educazione',
      fr: 'initiatives/education',
      es: 'iniciativas/educacion',
    },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'atuacao-social',
  },
  {
    segments: {
      pt: 'iniciativas/assistencia-social',
      en: 'initiatives/social-assistance',
      it: 'iniziative/assistenza-sociale',
      fr: 'initiatives/aide-sociale',
      es: 'iniciativas/asistencia-social',
    },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'atuacao-social',
  },
  {
    segments: {
      pt: 'iniciativas/cultura-historia-pesquisa',
      en: 'initiatives/culture-history-research',
      it: 'iniziative/cultura-storia-ricerca',
      fr: 'initiatives/culture-histoire-recherche',
      es: 'iniciativas/cultura-historia-investigacion',
    },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'cultura',
  },
  {
    segments: {
      pt: 'iniciativas/estudos-heraldicos',
      en: 'initiatives/heraldic-studies',
      it: 'iniziative/studi-araldici',
      fr: 'initiatives/etudes-heraldiques',
      es: 'iniciativas/estudios-heraldicos',
    },
    target: {
      pt: 'historia-e-brasao',
      en: 'history-and-coat-of-arms',
      it: 'storia-e-stemma',
      fr: 'histoire-et-blason',
      es: 'historia-y-escudo',
    },
  },
  {
    segments: {
      pt: 'iniciativas/memoria-herois-civicos',
      en: 'initiatives/civic-heroes-memory',
      it: 'iniziative/memoria-eroi-civici',
      fr: 'initiatives/memoire-heros-civiques',
      es: 'iniciativas/memoria-heroes-civicos',
    },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'atuacao-social',
  },
  {
    segments: { pt: 'eventos', en: 'events', it: 'eventi', fr: 'evenements', es: 'eventos' },
    target: { pt: 'participe', en: 'participate', it: 'partecipa', fr: 'participer', es: 'participa' },
    hash: 'atividades',
  },
  {
    segments: {
      pt: 'conhecimento',
      en: 'knowledge',
      it: 'conoscenza',
      fr: 'connaissance',
      es: 'conocimiento',
    },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'cultura',
  },
  {
    segments: {
      pt: 'palestras',
      en: 'lectures',
      it: 'conferenze',
      fr: 'conferences',
      es: 'conferencias',
    },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'cultura',
  },
  {
    segments: { pt: 'estudos', en: 'studies', it: 'studi', fr: 'etudes', es: 'estudios' },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'cultura',
  },
  {
    segments: { pt: 'artigos', en: 'articles', it: 'articoli', fr: 'articles', es: 'articulos' },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'cultura',
  },
  {
    segments: {
      pt: 'dia-das-cidades',
      en: 'day-of-cities',
      it: 'giorno-delle-citta',
      fr: 'jour-des-villes',
      es: 'dia-de-las-ciudades',
    },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'atuacao-social',
  },
  {
    segments: { pt: 'doacoes', en: 'donations', it: 'donazioni', fr: 'dons', es: 'donaciones' },
    target: { pt: 'participe', en: 'participate', it: 'partecipa', fr: 'participer', es: 'participa' },
    hash: 'contribuicoes',
  },
  {
    segments: {
      pt: 'afiliacao',
      en: 'affiliation',
      it: 'affiliazione',
      fr: 'affiliation',
      es: 'afiliacion',
    },
    target: { pt: 'participe', en: 'participate', it: 'partecipa', fr: 'participer', es: 'participa' },
    hash: 'participar',
  },
  {
    segments: { pt: 'faq', en: 'faq', it: 'faq', fr: 'faq', es: 'faq' },
    target: { pt: 'participe', en: 'participate', it: 'partecipa', fr: 'participer', es: 'participa' },
    hash: 'perguntas-frequentes',
  },
  {
    segments: { pt: 'contato', en: 'contact', it: 'contatti', fr: 'contact', es: 'contacto' },
    target: { pt: 'participe', en: 'participate', it: 'partecipa', fr: 'participer', es: 'participa' },
    hash: 'contato',
  },
  {
    segments: { pt: 'brasao', en: 'coat-of-arms', it: 'stemma', fr: 'blason', es: 'escudo' },
    target: {
      pt: 'historia-e-brasao',
      en: 'history-and-coat-of-arms',
      it: 'storia-e-stemma',
      fr: 'histoire-et-blason',
      es: 'historia-y-escudo',
    },
    hash: 'brasao',
  },
  {
    segments: { pt: 'abtl', en: 'abtl', it: 'abtl', fr: 'abtl', es: 'abtl' },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'abtl',
  },
  {
    segments: {
      pt: 'damas-templarias',
      en: 'templar-ladies',
      it: 'dame-templari',
      fr: 'dames-templieres',
      es: 'damas-templarias',
    },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'damas',
  },
  {
    segments: {
      pt: 'informacoes-institucionais',
      en: 'institutional-info',
      it: 'info-istituzionali',
      fr: 'infos-institutionnelles',
      es: 'info-institucionales',
    },
    target: { pt: 'ordem', en: 'order', it: 'ordine', fr: 'ordre', es: 'orden' },
    hash: 'informacoes-institucionais',
  },
  {
    segments: { pt: 'loja', en: 'shop', it: 'negozio', fr: 'boutique', es: 'tienda' },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'publicacoes',
  },
  {
    segments: { pt: 'tv', en: 'tv', it: 'tv', fr: 'tv', es: 'tv' },
    target: {
      pt: 'cultura-e-atuacao-social',
      en: 'culture-and-social-action',
      it: 'cultura-e-azione-sociale',
      fr: 'culture-et-action-sociale',
      es: 'cultura-y-accion-social',
    },
    hash: 'publicacoes',
  },
];

export interface RedirectRule {
  from: string;
  to: string;
}

function legacyPath(locale: LegacyLocale, segment: string): string {
  const prefix = locale === 'pt' ? '' : `/${locale}`;
  return `${prefix}/${segment}`.replace(/\/+$/, '');
}

function targetPath(locale: LegacyLocale, segment: string): string {
  const prefix = locale === 'pt' ? '' : `/${locale}`;
  return `${prefix}/${segment}`.replace(/\/+$/, '');
}

export const legacyRedirects: RedirectRule[] = legacyRoutes.flatMap((route) =>
  LOCALES.map((locale) => ({
    from: legacyPath(locale, route.segments[locale]),
    to: `${targetPath(locale, route.target[locale])}${route.hash ? `#${route.hash}` : ''}`,
  })),
);

/** Old route keys that were also exposed by the previous route map. */
export const legacyRouteKeys = legacyRoutes.map((route) => route.segments.pt);
