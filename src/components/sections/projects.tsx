"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GithubWidget } from "@/components/github-widget";
import { projects } from "@/content/projects";
import type { GithubData } from "@/lib/github";
import { useLocale } from "@/lib/locale-context";

export function Projects({ githubData }: { githubData: GithubData }) {
  const { dictionary, t } = useLocale();
  const { projects: dict } = dictionary;
  const { flagship } = dict;

  return (
    <section id="projects" className="scroll-mt-20 border-b border-border py-12 md:scroll-mt-0 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} />

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-lg border border-accent/40 bg-card">
            <div className="border-b border-accent/30 bg-accent/5 px-6 py-4 sm:px-8">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                {flagship.badge}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight">{flagship.title}</h3>
              <p className="mt-2 font-mono text-sm text-muted">{flagship.subtitle}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {flagship.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-border px-2 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {flagship.steps.map((step) => (
                  <div key={step.label} className="border-t-2 border-accent pt-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-accent">
                      {step.label}
                    </p>
                    <h4 className="mt-2 font-medium leading-snug">{step.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border">
                {flagship.resultStats.map((stat) => (
                  <div key={stat.label} className="bg-card px-4 py-4 text-center sm:text-left">
                    <p className="font-mono text-xl font-semibold text-accent">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 sm:mt-16">
          <Reveal delay={0.05}>
            <h3 className="text-xl font-semibold">{dict.gridTitle}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              {dict.gridSubtitle}
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal
                key={project.id}
                delay={0.05 * (index % 3)}
                className="flex flex-col rounded-lg border border-card-border bg-card p-6"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="font-semibold leading-snug">{t(project.title)}</h4>
                  <span className="shrink-0 font-mono text-xs text-muted">
                    {t(project.period)}
                  </span>
                </div>

                {project.badge ? (
                  <span className="mt-2 w-fit rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
                    {t(project.badge)}
                  </span>
                ) : null}

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t(project.description)}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex gap-2 text-sm leading-relaxed text-foreground/85"
                    >
                      <span className="mt-1 text-accent">▸</span>
                      <span>{t(bullet)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5">
                  {project.link ? (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-mono text-sm text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-80"
                    >
                      {t(project.link.label)} →
                    </a>
                  ) : (
                    <span className="font-mono text-xs text-muted">{dict.noLinkLabel}</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-10">
            <GithubWidget data={githubData} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
