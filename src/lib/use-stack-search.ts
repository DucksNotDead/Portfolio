import { useMemo } from "react";
import type { Locale } from "@/content/types";
import { stackSearchIndex } from "@/lib/stack-search-index";
import { MIN_STACK_SEARCH_LENGTH, scoreFuzzyMatch, TRIGRAM_SIMILARITY_THRESHOLD } from "@/lib/trigram";

export interface StackSearchResult {
  isSearching: boolean;
  matchesByCategory: Map<string, string[]>;
  totalMatches: number;
}

export function useStackSearch(locale: Locale, query: string): StackSearchResult {
  return useMemo(() => {
    const trimmed = query.trim();

    if (trimmed.length < MIN_STACK_SEARCH_LENGTH) {
      return { isSearching: false, matchesByCategory: new Map(), totalMatches: 0 };
    }

    const index = stackSearchIndex[locale];
    const matchesByCategory = new Map<string, string[]>();
    let totalMatches = 0;

    for (const [categoryId, entries] of index) {
      const scored = entries
        .map((entry) => {
          const score = scoreFuzzyMatch(trimmed, entry);
          return score >= TRIGRAM_SIMILARITY_THRESHOLD ? { value: entry.value, score } : null;
        })
        .filter((item): item is { value: string; score: number } => item !== null)
        .sort((a, b) => b.score - a.score);

      if (scored.length > 0) {
        matchesByCategory.set(
          categoryId,
          scored.map((item) => item.value),
        );
        totalMatches += scored.length;
      }
    }

    return { isSearching: true, matchesByCategory, totalMatches };
  }, [locale, query]);
}
