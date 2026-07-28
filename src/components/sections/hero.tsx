"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { useLocale } from "@/lib/locale-context";

export function Hero() {
  const { dictionary } = useLocale();
  const { hero } = dictionary;

  return (
    <section
      id="top"
      className="relative flex min-h-0 flex-1 flex-col overflow-hidden border-b border-border lg:block"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 w-full [mask-image:linear-gradient(to_bottom,black_0%,black_55%,rgba(0,0,0,0.55)_78%,transparent_100%)] lg:inset-y-0 lg:left-auto lg:right-0 lg:flex lg:w-[min(58vw,900px)] lg:items-end lg:justify-end lg:[mask-composite:intersect] lg:[mask-image:linear-gradient(to_top,transparent_0%,transparent_10%,rgba(0,0,0,0.2)_22%,rgba(0,0,0,0.65)_50%,black_80%),radial-gradient(ellipse_90%_75%_at_0%_100%,transparent_0%,transparent_40%,black_75%)] lg:[-webkit-mask-composite:source-in]"
      >
        <Image
          src="/images/avatar.png"
          alt=""
          width={900}
          height={1070}
          priority
          className="h-auto w-full -scale-x-100 object-contain object-top lg:h-[min(calc(100vh-4rem),920px)] lg:w-auto lg:max-w-none lg:object-contain lg:object-bottom"
        />
      </motion.div>

      {/* Mobile: затемнение от контента до scroll-down */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[min(62%,520px)] bg-gradient-to-t from-background from-15% via-background/80 via-55% to-transparent lg:hidden"
      />

      <Container className="relative z-10 flex h-full min-h-0 flex-1 flex-col justify-end pb-28 pt-2 lg:absolute lg:inset-0 lg:flex-none lg:items-center lg:justify-center lg:py-24">
        <div className="w-full lg:mr-auto lg:max-w-lg">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-accent"
          >
            {hero.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-5xl lg:mt-3 lg:text-6xl"
          >
            {hero.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="terminal-caret mt-2 font-mono text-base text-muted lg:mt-3 lg:text-xl"
          >
            {hero.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-3 text-balance text-sm leading-relaxed text-foreground/90 lg:mt-6 lg:text-lg"
          >
            {hero.pitch}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-5 flex flex-wrap items-center gap-3 lg:mt-8"
          >
            <a
              href="/resume.pdf"
              download
              className="rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              {hero.ctaResume}
            </a>
            <a
              href="#contact"
              className="rounded-md border border-border px-5 py-2.5 font-mono text-sm font-medium text-foreground transition-colors hover:border-border-strong"
            >
              {hero.ctaContact}
            </a>
          </motion.div>
        </div>
      </Container>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-foreground"
        aria-label={hero.scrollHint}
      >
        <span>
          <span className="text-accent">$</span> {hero.scrollHint}
        </span>
        <motion.span
          aria-hidden="true"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-base leading-none text-accent"
        >
          ▾
        </motion.span>
      </motion.a>

      <span className="sr-only">{hero.avatarAlt}</span>
    </section>
  );
}
