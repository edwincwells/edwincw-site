"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

export type WorkRowProps = {
  imageSrc: string;
  /** Dark-theme plate variant. Hand-authored alongside imageSrc — see
   *  docs/design-brief.md §5.1 for the plate colours and export spec. */
  imageSrcDark: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  linkAriaLabel?: string;
  linkExternal?: boolean;
  reverse?: boolean;
  revealIndex?: number;
};

export function WorkRow({
  imageSrc,
  imageSrcDark,
  imageAlt,
  eyebrow,
  title,
  description,
  linkText,
  linkHref,
  linkAriaLabel,
  linkExternal = false,
  reverse = false,
  revealIndex = 0,
}: WorkRowProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const imgRef = useRef<HTMLImageElement>(null);
  const imageShift = reverse
    ? "group-hover:-translate-x-2"
    : "group-hover:translate-x-2";

  /* Safety net for an OS theme switch with the tab already open. Browsers are
     specced to re-run <picture> source selection when a media query changes,
     but that is the one path we could not verify locally — DevTools colour
     scheme emulation flips matchMedia().matches without dispatching a change
     event, so neither the native behaviour nor this handler is observable
     under it. Re-assigning src forces reselection; if the browser already did
     it, this resolves to the same URL and is a cached no-op. The markup still
     carries the correct source on first paint, so nothing here runs on load. */
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => {
      if (imgRef.current) {
        imgRef.current.src = mql.matches ? imageSrcDark : imageSrc;
      }
    };
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [imageSrc, imageSrcDark]);

  return (
    <div
      ref={ref}
      data-reveal
      data-revealed={isRevealed}
      style={{ ["--reveal-index" as string]: revealIndex }}
      className="group grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
    >
      <div className={reverse ? "md:order-2" : ""}>
        <div
          className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-background)]"
          style={{ borderRadius: "var(--radius-lg)" }}
        >
          {/* next/image has no prefers-color-scheme art-direction API, so the
              theme swap has to go through <picture>. The exports are pre-sized
              to 1600w against a 560px display box, so no srcSet is needed. */}
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcSet={imageSrcDark}
            />
            <img
              ref={imgRef}
              src={imageSrc}
              alt={imageAlt}
              width={1600}
              height={1200}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[240ms] ease-out group-hover:-translate-y-1 ${imageShift}`}
            />
          </picture>
        </div>
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <p className="text-eyebrow text-[var(--color-muted)] mb-4">
          {eyebrow}
        </p>
        <h3 className="text-h2 text-[var(--color-foreground)] mb-4 transition-colors duration-[240ms] ease-out group-hover:text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="text-prose text-[var(--color-body)] mb-6">
          {description}
        </p>
        <a
          href={linkHref}
          aria-label={linkAriaLabel}
          {...(linkExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="inline-flex items-center gap-2 text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors duration-[180ms]"
        >
          <span>{linkText}</span>
          <ArrowUpRight
            className="w-4 h-4 transition-transform duration-[240ms] ease-out group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}
