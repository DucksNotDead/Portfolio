"use client";

import { cn } from "@/lib/utils";

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 text-accent"
    >
      <path
        d="M8.75 14.5a5.75 5.75 0 1 0 0-11.5 5.75 5.75 0 0 0 0 11.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m13.25 13.25 3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface StackSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  ariaLabel: string;
  resultsLabel: string;
  totalMatches: number;
  isSearching: boolean;
}

export function StackSearchInput({
  value,
  onChange,
  placeholder,
  ariaLabel,
  resultsLabel,
  totalMatches,
  isSearching,
}: StackSearchInputProps) {
  const resultsText = isSearching
    ? resultsLabel.replace("{count}", String(totalMatches))
    : "";

  return (
    <div className="w-full sm:w-72">
      <div
        className={cn(
          "relative flex items-center rounded-full border-2 bg-card px-4 py-2.5 shadow-sm transition-colors",
          "border-accent/40 focus-within:border-accent",
        )}
      >
        <span className="pointer-events-none mr-2.5 shrink-0">
          <SearchIcon />
        </span>
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              onChange("");
            }
          }}
          placeholder={placeholder}
          aria-label={ariaLabel}
          className="w-full bg-transparent font-mono text-sm text-foreground outline-none placeholder:text-muted"
        />
        {value ? (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="ml-2 shrink-0 font-mono text-sm text-muted transition-colors hover:text-foreground"
          >
            ×
          </button>
        ) : null}
      </div>
      <p aria-live="polite" className="sr-only">
        {resultsText}
      </p>
    </div>
  );
}
