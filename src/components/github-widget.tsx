"use client";

import type { GithubData } from "@/lib/github";
import { useLocale } from "@/lib/locale-context";

const MONTHS_RU = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
] as const;

const MONTHS_EN = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/** Deterministic formatter: Intl month names differ between Node ICU and browsers. */
function formatDate(iso: string, locale: string) {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";

  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();

  if (locale === "ru") {
    return `${day} ${MONTHS_RU[month]} ${year}`;
  }

  return `${MONTHS_EN[month]} ${day}, ${year}`;
}

export function GithubWidget({ data }: { data: GithubData }) {
  const { dictionary, locale } = useLocale();
  const { githubWidget } = dictionary.projects;
  const { profile, repos } = data;

  return (
    <div className="rounded-lg border border-card-border bg-card p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {githubWidget.title}
          </p>
          <h3 className="mt-2 text-lg font-semibold">{githubWidget.subtitle}</h3>
        </div>
        <a
          href={profile?.htmlUrl ?? "https://github.com/DucksNotDead"}
          target="_blank"
          rel="noreferrer noopener"
          className="font-mono text-sm text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-80"
        >
          github.com/DucksNotDead →
        </a>
      </div>

      {!profile ? (
        <p className="mt-6 text-sm text-muted">{githubWidget.errorLabel}</p>
      ) : null}

      {repos.length > 0 ? (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {repos.map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.htmlUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="block rounded-md border border-border p-4 transition-colors hover:border-border-strong"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate font-mono text-sm font-medium text-foreground">
                    {repo.name}
                  </span>
                  {repo.stars > 0 ? (
                    <span className="shrink-0 font-mono text-xs text-accent">
                      ★ {repo.stars}
                    </span>
                  ) : null}
                </div>
                {repo.description ? (
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">
                    {repo.description}
                  </p>
                ) : null}
                <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-muted">
                  {repo.language ? <span>{repo.language}</span> : null}
                  {repo.language && repo.updatedAt ? (
                    <span className="text-border-strong">·</span>
                  ) : null}
                  {repo.updatedAt ? (
                    <span>
                      {githubWidget.updatedLabel} {formatDate(repo.updatedAt, locale)}
                    </span>
                  ) : null}
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
