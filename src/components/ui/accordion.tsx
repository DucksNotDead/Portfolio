"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  id: string;
  title: ReactNode;
  meta?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  forceOpen?: boolean;
  disableToggle?: boolean;
  accent?: boolean;
}

export function AccordionItem({
  title,
  meta,
  children,
  defaultOpen = false,
  forceOpen = false,
  disableToggle = false,
  accent = false,
}: AccordionItemProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = disableToggle ? true : forceOpen || internalOpen;

  const headerClassName = cn(
    "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
    disableToggle ? "cursor-default" : undefined,
  );

  const headerContent = (
    <>
      <span className="flex items-baseline gap-3">
        <span className="font-medium text-foreground">{title}</span>
        {meta ? (
          <span className="hidden font-mono text-xs text-muted sm:inline">{meta}</span>
        ) : null}
      </span>
      {!disableToggle ? (
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex h-5 w-5 shrink-0 items-center justify-center font-mono text-lg leading-none",
            accent ? "text-accent" : "text-muted",
          )}
        >
          +
        </motion.span>
      ) : null}
    </>
  );

  return (
    <div
      className={cn(
        "rounded-lg border bg-card transition-colors",
        accent ? "border-accent/40" : "border-card-border",
      )}
    >
      {disableToggle ? (
        <div className={headerClassName} aria-expanded={true}>
          {headerContent}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setInternalOpen((prev) => !prev)}
          className={headerClassName}
          aria-expanded={open}
        >
          {headerContent}
        </button>
      )}
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
