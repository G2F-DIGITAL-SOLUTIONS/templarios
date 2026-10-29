import type { Localized } from './localize';
export type KnowledgeType = 'lecture' | 'study' | 'article' | 'video';
export interface KnowledgeItem {
  id: string; type: KnowledgeType; title: Localized<string>; summary: Localized<string>;
  date?: string; url?: string; draft?: boolean;
}
/**
 * No article, study or lecture with confirmed publication data was provided.
 * Draft/sample items are intentionally NOT published (see AUDIT.md).
 */
export const knowledgeItems: KnowledgeItem[] = [];
