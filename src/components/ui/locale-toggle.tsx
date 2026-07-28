"use client";

import { useLocale } from "@/lib/locale-context";

export function LocaleToggle() {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label="Switch language"
      className="flex h-8 items-center gap-1 rounded-md border border-border px-2 font-mono text-xs text-foreground/80 transition-colors hover:border-border-strong hover:text-foreground"
    >
      <span className={locale === "ru" ? "text-accent" : undefined}>RU</span>
      <span className="text-border-strong">/</span>
      <span className={locale === "en" ? "text-accent" : undefined}>EN</span>
    </button>
  );
}
