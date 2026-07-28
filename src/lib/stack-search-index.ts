import { en } from "@/content/en";
import { ru } from "@/content/ru";
import type { Locale } from "@/content/types";
import {
  generateTrigrams,
  normalizeForSearch,
  tokenizeForSearch,
  type TrigramCandidate,
} from "@/lib/trigram";

export interface StackSearchEntry extends TrigramCandidate {
  value: string;
  tokens: TrigramCandidate[];
}

export type StackSearchIndex = Map<string, StackSearchEntry[]>;

function buildToken(value: string): TrigramCandidate {
  return {
    normalized: normalizeForSearch(value),
    trigrams: generateTrigrams(value),
  };
}

function buildIndex(categories: { id: string; items: string[] }[]): StackSearchIndex {
  const index: StackSearchIndex = new Map();

  for (const category of categories) {
    index.set(
      category.id,
      category.items.map((value) => ({
        value,
        ...buildToken(value),
        tokens: tokenizeForSearch(value).map((token) => buildToken(token)),
      })),
    );
  }

  return index;
}

export const stackSearchIndex: Record<Locale, StackSearchIndex> = {
  ru: buildIndex(ru.stack.categories),
  en: buildIndex(en.stack.categories),
};
