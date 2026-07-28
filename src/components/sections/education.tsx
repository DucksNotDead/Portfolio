"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLocale } from "@/lib/locale-context";

const DIPLOMA_PHOTOS = [
  {
    src: "/images/diploma/defense.jpg",
    altRu: "Защита дипломной работы в ИРНИТУ",
    altEn: "Thesis defense at INRTU",
  },
  {
    src: "/images/diploma/ceremony.jpg",
    altRu: "Вручение диплома на сцене ИРНИТУ",
    altEn: "Diploma ceremony on stage at INRTU",
  },
] as const;

export function Education() {
  const { dictionary, locale } = useLocale();
  const { education } = dictionary;

  return (
    <section id="education" className="scroll-mt-20 border-b border-border py-12 md:scroll-mt-0 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={education.eyebrow} title={education.title} />

        <Reveal delay={0.1}>
          <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-lg border border-card-border bg-card p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{education.university}</h3>
                <span className="font-mono text-xs text-muted">
                  {education.city} · {education.year}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted">{education.degree}</p>

              <div className="mt-6 border-t border-border pt-6">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  {education.thesisLabel}
                </p>
                <p className="mt-2 font-medium leading-relaxed text-foreground/90">
                  {education.thesisTitle}
                </p>
                <p className="mt-2 font-mono text-sm text-accent">{education.thesisGrade}</p>
                <p className="mt-4 leading-relaxed text-muted">{education.description}</p>
                <p className="mt-4 leading-relaxed text-foreground/85">
                  {education.originStory}
                </p>

                <blockquote className="mt-6 border-l-2 border-accent pl-4">
                  <p className="text-sm italic leading-relaxed text-foreground/85">
                    «{education.quote}»
                  </p>
                  <footer className="mt-2 font-mono text-xs text-muted">
                    {education.quoteAuthor}
                  </footer>
                </blockquote>

                <a
                  href={education.sourceUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 block font-mono text-xs text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
                >
                  {education.sourceLabel} →
                </a>
              </div>
            </div>

            <div className="grid gap-4 self-start sm:grid-cols-2 lg:grid-cols-1">
              {DIPLOMA_PHOTOS.map((photo) => (
                <div
                  key={photo.src}
                  className="overflow-hidden rounded-lg border border-card-border bg-card"
                >
                  <Image
                    src={photo.src}
                    alt={locale === "ru" ? photo.altRu : photo.altEn}
                    width={1600}
                    height={1067}
                    className="h-auto w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
