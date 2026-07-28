"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { ClickablePhoto, ImageLightbox } from "@/components/ui/image-lightbox";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { hackathons } from "@/content/hackathons";
import { useLocale } from "@/lib/locale-context";

const PREVIEW_COUNT = 4;

export function About() {
  const { dictionary, t } = useLocale();
  const { about } = dictionary;
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<{
    images: { src: string; alt: string }[];
    index: number;
  } | null>(null);

  const allPhotos = useMemo(
    () =>
      hackathons.flatMap((event) =>
        event.photos.map((photo) => ({ src: photo.src, alt: t(photo.alt) })),
      ),
    [t],
  );

  const previewPhotos = useMemo(() => allPhotos.slice(0, PREVIEW_COUNT), [allPhotos]);

  const openPhoto = (src: string) => {
    const index = allPhotos.findIndex((photo) => photo.src === src);
    if (index >= 0) setLightbox({ images: allPhotos, index });
  };

  return (
    <section id="about" className="scroll-mt-20 border-b border-border py-12 md:scroll-mt-0 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />

        <Reveal delay={0.1} className="max-w-3xl space-y-5">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <div className="mt-10 sm:mt-16">
          <Reveal delay={0.05}>
            <h3 className="text-xl font-semibold">{about.hackathonTitle}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              {about.hackathonSubtitle}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                className="inline-flex h-10 items-center rounded-md bg-accent px-5 font-mono text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                {expanded ? about.collapseLabel : about.expandLabel}
              </button>

              <AnimatePresence initial={false}>
                {!expanded ? (
                  <motion.div
                    key="hackathon-previews"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 14 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="flex items-center gap-2"
                  >
                    {previewPhotos.map((photo) => (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() => openPhoto(photo.src)}
                        className="relative h-10 w-[3.75rem] shrink-0 overflow-hidden rounded-md border border-border transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label={photo.alt}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={photo.src}
                          alt=""
                          className="h-full w-full object-cover"
                          loading="eager"
                          decoding="async"
                        />
                      </button>
                    ))}
                    {allPhotos.length > previewPhotos.length ? (
                      <button
                        type="button"
                        onClick={() => setExpanded(true)}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-card font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground"
                        aria-label={about.expandLabel}
                      >
                        +{allPhotos.length - previewPhotos.length}
                      </button>
                    ) : null}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </Reveal>

          <AnimatePresence initial={false}>
            {expanded ? (
              <motion.div
                key="hackathon-timeline"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="relative mt-10 space-y-8 before:absolute before:bottom-0 before:left-[11px] before:top-0 before:w-px before:bg-border sm:before:left-[15px]">
                  {hackathons.map((event, index) => (
                    <Reveal key={event.id} delay={0.05 * (index + 1)}>
                      <article className="relative pl-8 sm:pl-10">
                        <span className="absolute left-0 top-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-accent bg-background sm:h-[30px] sm:w-[30px]">
                          <span className="h-2 w-2 rounded-full bg-accent" />
                        </span>

                        <div className="rounded-lg border border-card-border bg-card p-5 sm:p-6">
                          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <time className="font-mono text-xs text-accent">
                              {t(event.date)}
                            </time>
                            <span className="font-mono text-xs text-muted">
                              · {t(event.location)}
                            </span>
                            <span className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted">
                              {t(event.stage)}
                            </span>
                          </div>

                          <h4 className="mt-3 font-semibold leading-snug">
                            {t(event.title)}
                          </h4>
                          <p className="mt-1 font-mono text-xs text-muted">
                            {t(event.client)}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                            {t(event.description)}
                          </p>
                          <p className="mt-3 font-mono text-sm text-accent">
                            {t(event.result)}
                          </p>

                          {event.photos.length > 0 ? (
                            <div
                              className={
                                event.photos.length > 1
                                  ? "mt-4 grid gap-3 sm:grid-cols-2"
                                  : "mt-4"
                              }
                            >
                              {event.photos.map((photo) => (
                                <ClickablePhoto
                                  key={photo.src}
                                  src={photo.src}
                                  alt={t(photo.alt)}
                                  onClick={() => openPhoto(photo.src)}
                                  focus={photo.focus}
                                  className="aspect-[4/3] w-full"
                                />
                              ))}
                            </div>
                          ) : null}

                          <a
                            href={event.sourceUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="mt-4 inline-block font-mono text-xs text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-80"
                          >
                            {about.sourceLabel} →
                          </a>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </Container>

      <ImageLightbox
        images={lightbox?.images ?? []}
        initialIndex={lightbox?.index ?? 0}
        open={lightbox !== null}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
}
