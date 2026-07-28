"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { PhotoFocus } from "@/components/ui/photo-focus";
import type { HackathonPhotoFocus } from "@/content/types";
import { cn } from "@/lib/utils";

interface LightboxImage {
  src: string;
  alt: string;
}

function LightboxInner({
  images,
  initialIndex,
  onClose,
}: {
  images: LightboxImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, goPrev, goNext]);

  const current = images[index];

  if (!current) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card font-mono text-lg text-foreground transition-colors hover:border-border-strong"
        aria-label="Close"
      >
        ×
      </button>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 z-10 hidden h-10 w-10 items-center justify-center rounded-md border border-border bg-card font-mono text-lg text-foreground transition-colors hover:border-border-strong sm:flex"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goNext();
            }}
            className="absolute right-14 z-10 hidden h-10 w-10 items-center justify-center rounded-md border border-border bg-card font-mono text-lg text-foreground transition-colors hover:border-border-strong sm:flex"
            aria-label="Next image"
          >
            ›
          </button>
        </>
      ) : null}

      <motion.div
        key={current.src}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.2 }}
        className="relative max-h-[85vh] max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt}
          width={1600}
          height={1200}
          className="max-h-[85vh] w-auto rounded-lg border border-border object-contain"
          priority
        />
        <p className="mt-3 text-center text-sm text-muted">{current.alt}</p>
      </motion.div>
    </motion.div>
  );
}

export function ImageLightbox({
  images,
  initialIndex = 0,
  open,
  onClose,
}: {
  images: LightboxImage[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && images.length > 0 ? (
        <LightboxInner
          key={initialIndex}
          images={images}
          initialIndex={initialIndex}
          onClose={onClose}
        />
      ) : null}
    </AnimatePresence>
  );
}

export function ClickablePhoto({
  src,
  alt,
  className,
  onClick,
  focus,
}: {
  src: string;
  alt: string;
  className?: string;
  onClick: () => void;
  focus?: HackathonPhotoFocus;
}) {
  if (focus) {
    return (
      <PhotoFocus
        src={src}
        alt={alt}
        focus={focus}
        className={className}
        onOpen={onClick}
      />
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className,
      )}
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        draggable={false}
        className="pointer-events-none h-full w-full object-cover"
      />
      <span className="pointer-events-none absolute inset-0 bg-accent/0 transition-colors group-hover:bg-accent/5" />
    </div>
  );
}
