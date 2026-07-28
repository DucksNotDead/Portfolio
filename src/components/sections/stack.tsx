"use client";

import { useState, useSyncExternalStore } from "react";
import { AccordionItem } from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { StackSearchInput } from "@/components/ui/stack-search-input";
import type { StackCategory } from "@/content/types";
import { getHighlightSegments } from "@/lib/highlight-match";
import { useLocale } from "@/lib/locale-context";
import { useStackSearch } from "@/lib/use-stack-search";

function subscribeSm(callback: () => void) {
  const media = window.matchMedia("(min-width: 640px)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function useTwoColumns() {
  return useSyncExternalStore(
    subscribeSm,
    () => window.matchMedia("(min-width: 640px)").matches,
    () => false,
  );
}

function CompetencyTag({ item, query }: { item: string; query?: string }) {
  const segments = query ? getHighlightSegments(item, query) : null;

  return (
    <span className="rounded border border-border px-2.5 py-1 font-mono text-xs text-foreground/85">
      {segments
        ? segments.map((segment, index) =>
            segment.highlighted ? (
              <span key={index} className="font-semibold text-accent">
                {segment.text}
              </span>
            ) : (
              <span key={index}>{segment.text}</span>
            ),
          )
        : item}
    </span>
  );
}

function CategoryAccordion({
  category,
  delay,
  defaultOpen,
  items,
  query,
  forceOpen,
  disableToggle,
}: {
  category: StackCategory;
  delay: number;
  defaultOpen?: boolean;
  items: string[];
  query?: string;
  forceOpen?: boolean;
  disableToggle?: boolean;
}) {
  return (
    <Reveal delay={delay}>
      <AccordionItem
        id={category.id}
        title={category.title}
        meta={`${items.length}`}
        defaultOpen={defaultOpen}
        forceOpen={forceOpen}
        disableToggle={disableToggle}
      >
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <CompetencyTag key={item} item={item} query={query} />
          ))}
        </div>
      </AccordionItem>
    </Reveal>
  );
}

function AiAccordion({
  title,
  description,
  points,
  delay,
}: {
  title: string;
  description: string;
  points: string[];
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <AccordionItem id="ai-workflow" title={title} meta="AI" accent>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
        <ul className="mt-4 space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex gap-2 text-sm leading-relaxed text-foreground/85">
              <span className="mt-1 text-accent">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </AccordionItem>
    </Reveal>
  );
}

export function Stack() {
  const { locale, dictionary } = useLocale();
  const { stack } = dictionary;
  const { categories, aiWorkflow } = stack;
  const twoColumns = useTwoColumns();
  const [query, setQuery] = useState("");
  const { isSearching, matchesByCategory, totalMatches } = useStackSearch(locale, query);

  const leftCategories = categories.filter((_, index) => index % 2 === 0);
  const rightCategories = categories.filter((_, index) => index % 2 === 1);
  const testingIndex = categories.findIndex((category) => category.id === "testing");
  const aiDelay = 0.03 * (testingIndex + 1);

  const matchedCategories = categories.filter((category) => matchesByCategory.has(category.id));

  return (
    <section id="stack" className="scroll-mt-20 border-b border-border py-12 md:scroll-mt-0 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={stack.eyebrow}
          title={stack.title}
          action={
            <StackSearchInput
              value={query}
              onChange={setQuery}
              placeholder={stack.searchPlaceholder}
              ariaLabel={stack.searchAriaLabel}
              resultsLabel={stack.searchResultsLabel}
              totalMatches={totalMatches}
              isSearching={isSearching}
            />
          }
        />

        {isSearching ? (
          matchedCategories.length === 0 ? (
            <p className="font-mono text-sm text-muted">{stack.searchNoResults}</p>
          ) : (
            <div className="flex flex-col gap-3">
              {matchedCategories.map((category, index) => (
                <CategoryAccordion
                  key={category.id}
                  category={category}
                  delay={0.03 * index}
                  items={matchesByCategory.get(category.id) ?? []}
                  query={query}
                  forceOpen
                  disableToggle
                />
              ))}
            </div>
          )
        ) : twoColumns ? (
          <div className="flex items-start gap-3">
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              {leftCategories.map((category, index) => (
                <CategoryAccordion
                  key={category.id}
                  category={category}
                  delay={0.03 * index * 2}
                  defaultOpen={index === 0}
                  items={category.items}
                />
              ))}
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              {rightCategories.map((category, index) => (
                <CategoryAccordion
                  key={category.id}
                  category={category}
                  delay={0.03 * (index * 2 + 1)}
                  items={category.items}
                />
              ))}
              <AiAccordion
                title={aiWorkflow.title}
                description={aiWorkflow.description}
                points={aiWorkflow.points}
                delay={aiDelay}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {categories.map((category, index) => (
              <div key={category.id} className="flex flex-col gap-3">
                <CategoryAccordion
                  category={category}
                  delay={0.03 * index}
                  defaultOpen={index === 0}
                  items={category.items}
                />
                {category.id === "testing" ? (
                  <AiAccordion
                    title={aiWorkflow.title}
                    description={aiWorkflow.description}
                    points={aiWorkflow.points}
                    delay={aiDelay}
                  />
                ) : null}
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
