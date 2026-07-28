"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { HackathonPhotoFocus } from "@/content/types";
import { cn } from "@/lib/utils";

export function PhotoFocus({
  src,
  alt,
  focus,
  className,
  onOpen,
}: {
  src: string;
  alt: string;
  focus: HackathonPhotoFocus;
  className?: string;
  onOpen?: () => void;
}) {
  const cx = focus.x + focus.w / 2;
  const cy = focus.y + focus.h / 2;
  const rx = focus.w / 2;
  const ry = focus.h / 2;

  // Soft hole over the subject: veil only outside the ellipse
  const veilMask = `radial-gradient(ellipse ${rx}% ${ry}% at ${cx}% ${cy}%, transparent 0%, transparent 45%, black 100%)`;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={
        onOpen
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onOpen();
              }
            }
          : undefined
      }
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

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-black/55"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          WebkitMaskImage: veilMask,
          maskImage: veilMask,
        }}
      />

      <span className="pointer-events-none absolute inset-0 bg-accent/0 transition-colors group-hover:bg-accent/5" />
    </div>
  );
}
