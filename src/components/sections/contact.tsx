"use client";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/lib/locale-context";

const REPO_URL = "https://github.com/DucksNotDead/Portfolio";
const TELEGRAM_URL = "https://t.me/DucksNotDead";
const GITHUB_URL = "https://github.com/DucksNotDead";

export function Contact() {
  const { dictionary } = useLocale();
  const { contact } = dictionary;
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="scroll-mt-20 py-12 md:scroll-mt-0 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} />

        <Reveal delay={0.1}>
          <p className="max-w-xl leading-relaxed text-foreground/90">
            {contact.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              {contact.email}
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-md border border-border px-5 py-2.5 font-mono text-sm font-medium text-foreground transition-colors hover:border-border-strong"
            >
              {contact.telegramLabel}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-md border border-border px-5 py-2.5 font-mono text-sm font-medium text-foreground transition-colors hover:border-border-strong"
            >
              {contact.githubLabel}
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-md border border-border px-5 py-2.5 font-mono text-sm font-medium text-foreground transition-colors hover:border-border-strong"
            >
              {contact.resumeLabel}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 font-mono text-xs text-muted sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {contact.footerNote}
            </p>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-foreground"
            >
              {contact.sourceLabel} →
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
