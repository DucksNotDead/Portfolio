import { normalizeForSearch } from "@/lib/trigram";

export interface HighlightSegment {
  text: string;
  highlighted: boolean;
}

export function getHighlightSegments(value: string, query: string): HighlightSegment[] | null {
  const normalizedQuery = normalizeForSearch(query);

  if (!normalizedQuery) {
    return null;
  }

  const normalizedValue = normalizeForSearch(value);
  const matchIndex = normalizedValue.indexOf(normalizedQuery);

  if (matchIndex === -1) {
    return null;
  }

  const before = value.slice(0, matchIndex);
  const match = value.slice(matchIndex, matchIndex + normalizedQuery.length);
  const after = value.slice(matchIndex + normalizedQuery.length);

  return [
    ...(before ? [{ text: before, highlighted: false }] : []),
    { text: match, highlighted: true },
    ...(after ? [{ text: after, highlighted: false }] : []),
  ];
}
