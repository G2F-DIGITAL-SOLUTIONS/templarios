import type { Localized } from './localize';

export type KnowledgeType = 'lecture' | 'study' | 'article' | 'video';

export interface KnowledgeItem {
  id: string;
  type: KnowledgeType;
  title: Localized<string>;
  summary: Localized<string>;
  /** ISO date used for ordering. */
  date?: string;
  /** External URL for a video/lecture, when available. */
  url?: string;
  /** Set when the piece lives on its own page instead of an external link. */
  draft?: boolean;
}

/**
 * Editorial content for the Knowledge area: lectures, studies and articles.
 *
 * TODO(Order/CMS): these are editorial placeholders describing the kind of
 * material the Order publishes. Replace with real content or connect a CMS.
 */
export const knowledgeItems: KnowledgeItem[] = [
  {
    id: 'sobre-a-tradicao',
    type: 'article',
    title: {
      pt: 'Sobre a tradição templária e seu significado hoje',
      en: 'On the Templar tradition and what it means today',
    },
    summary: {
      pt: 'Uma reflexão introdutória sobre o que significa preservar uma tradição e colocá-la a serviço do presente.',
      en: 'An introductory reflection on what it means to preserve a tradition and place it at the service of the present.',
    },
    date: '2026-09-01',
    draft: true,
  },
  {
    id: 'conhece-te-a-ti-mesmo',
    type: 'study',
    title: {
      pt: '“Conhece a ti mesmo”: o estudo como caminho',
      en: '“Know thyself”: study as a path',
    },
    summary: {
      pt: 'O estudo como base do desenvolvimento pessoal, segundo o espírito dos Ensinamentos da Ordem.',
      en: 'Study as the foundation of personal development, in the spirit of the Order’s Teachings.',
    },
    date: '2026-08-10',
    draft: true,
  },
  {
    id: 'palestra-fraternidade',
    type: 'lecture',
    title: {
      pt: 'Palestra: Fraternidade e serviço na sociedade contemporânea',
      en: 'Lecture: Fraternity and service in contemporary society',
    },
    summary: {
      pt: 'Reflexão sobre o sentido da fraternidade e o papel da Ordem diante dos desafios atuais.',
      en: 'A reflection on the meaning of fraternity and the role of the Order before today’s challenges.',
    },
    draft: true,
  },
];