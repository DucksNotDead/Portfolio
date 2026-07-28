export function normalizeForSearch(input: string): string {
  return input.toLowerCase().trim().replace(/\s+/g, " ");
}

export function tokenizeForSearch(input: string): string[] {
  return normalizeForSearch(input)
    .split(/[^a-z0-9+#.]+/)
    .filter((token) => token.length > 0);
}

export function generateTrigrams(input: string): Set<string> {
  const padded = `  ${normalizeForSearch(input)}  `;
  const trigrams = new Set<string>();

  for (let i = 0; i <= padded.length - 3; i++) {
    trigrams.add(padded.slice(i, i + 3));
  }

  return trigrams;
}

export function trigramSimilarity(a: Set<string>, b: Set<string>): number {
  let intersection = 0;

  for (const trigram of a) {
    if (b.has(trigram)) {
      intersection++;
    }
  }

  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

export function trigramQueryCoverage(
  queryTrigrams: Set<string>,
  targetTrigrams: Set<string>,
): number {
  if (queryTrigrams.size === 0) {
    return 0;
  }

  let intersection = 0;

  for (const trigram of queryTrigrams) {
    if (targetTrigrams.has(trigram)) {
      intersection++;
    }
  }

  return intersection / queryTrigrams.size;
}

export interface TrigramCandidate {
  normalized: string;
  trigrams: Set<string>;
}

export function getBestTrigramScore(
  queryTrigrams: Set<string>,
  candidate: TrigramCandidate,
): number {
  const jaccard = trigramSimilarity(queryTrigrams, candidate.trigrams);
  const coverage = trigramQueryCoverage(queryTrigrams, candidate.trigrams);

  if (jaccard >= TRIGRAM_SIMILARITY_THRESHOLD) {
    return jaccard;
  }

  if (coverage >= 0.45) {
    return coverage;
  }

  if (jaccard >= 0.2 && coverage >= 0.38) {
    return coverage;
  }

  return jaccard;
}

function isWeakPrefix(normalizedQuery: string, token: string): boolean {
  return normalizedQuery.length === 3 && token.length >= normalizedQuery.length + 2;
}

function hasSubstringMatch(
  normalizedQuery: string,
  entry: TrigramCandidate & { tokens: TrigramCandidate[] },
): boolean {
  return entry.tokens.some((token) => {
    if (token.normalized === normalizedQuery) {
      return true;
    }

    if (token.normalized.startsWith(normalizedQuery)) {
      return !isWeakPrefix(normalizedQuery, token.normalized);
    }

    return normalizedQuery.length >= 4 && token.normalized.includes(normalizedQuery);
  });
}

export function damerauLevenshtein(a: string, b: string): number {
  const aLength = a.length;
  const bLength = b.length;

  if (aLength === 0) {
    return bLength;
  }

  if (bLength === 0) {
    return aLength;
  }

  const maxDistance = aLength + bLength;
  const da = new Map<string, number>();

  const score = Array.from({ length: aLength + 2 }, () =>
    Array.from({ length: bLength + 2 }, () => 0),
  );

  score[0][0] = maxDistance;

  for (let i = 0; i <= aLength; i++) {
    score[i + 1][0] = maxDistance;
    score[i + 1][1] = i;
  }

  for (let j = 0; j <= bLength; j++) {
    score[0][j + 1] = maxDistance;
    score[1][j + 1] = j;
  }

  for (let i = 1; i <= aLength; i++) {
    let db = 0;

    for (let j = 1; j <= bLength; j++) {
      const i1 = da.get(b[j - 1]) ?? 0;
      const j1 = db;
      let cost = 1;

      if (a[i - 1] === b[j - 1]) {
        cost = 0;
        db = j;
      }

      score[i + 1][j + 1] = Math.min(
        score[i][j] + cost,
        score[i + 1][j] + 1,
        score[i][j + 1] + 1,
        score[i1][j1] + (i - i1 - 1) + 1 + (j - j1 - 1),
      );
    }

    da.set(a[i - 1], i);
  }

  return score[aLength + 1][bLength + 1];
}

function maxAllowedEditDistance(query: string, candidate: string): number {
  const maxLength = Math.max(query.length, candidate.length);

  if (maxLength <= 5) {
    return 1;
  }

  if (maxLength <= 10) {
    return 2;
  }

  return Math.max(2, Math.floor(maxLength * 0.2));
}

export function scoreFuzzyMatch(
  query: string,
  entry: TrigramCandidate & { tokens: TrigramCandidate[] },
): number {
  const normalizedQuery = normalizeForSearch(query);

  if (!normalizedQuery) {
    return 0;
  }

  if (hasSubstringMatch(normalizedQuery, entry)) {
    return 1;
  }

  const queryTrigrams = generateTrigrams(query);
  let bestScore = 0;

  if (normalizedQuery.length >= 4) {
    for (const token of entry.tokens) {
      bestScore = Math.max(bestScore, getBestTrigramScore(queryTrigrams, token));
    }

    if (entry.tokens.length === 0) {
      bestScore = Math.max(bestScore, getBestTrigramScore(queryTrigrams, entry));
    }
  }

  if (bestScore >= TRIGRAM_SIMILARITY_THRESHOLD) {
    return bestScore;
  }

  if (normalizedQuery.length >= 3) {
    const editCandidates = entry.tokens.map((token) => token.normalized);

    for (const candidate of editCandidates) {
      if (Math.abs(candidate.length - normalizedQuery.length) > 1) {
        continue;
      }

      const distance = damerauLevenshtein(normalizedQuery, candidate);

      if (distance > 0 && distance <= maxAllowedEditDistance(normalizedQuery, candidate)) {
        return Math.max(bestScore, TRIGRAM_SIMILARITY_THRESHOLD);
      }
    }
  }

  return bestScore;
}

export const MIN_STACK_SEARCH_LENGTH = 2;
export const TRIGRAM_SIMILARITY_THRESHOLD = 0.3;
