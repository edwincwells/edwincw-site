"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

type WorkRowBase = {
  eyebrow: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  linkAriaLabel?: string;
  /** External links open in a new tab and carry the ↗ arrow. Internal ones go
   *  through next/link with neither. */
  linkExternal?: boolean;
  reverse?: boolean;
  revealIndex?: number;
};

/* A row shows either a raster plate or a rendered component, never both and
 * never neither. The `never` guards are what enforce that — without them the
 * props would compile with an empty visual, or with an image silently ignored
 * behind a component. */
export type WorkRowProps = WorkRowBase &
  (
    | {
        imageSrc: string;
        /** Dark-theme plate variant. Hand-authored alongside imageSrc — see
         *  docs/design-brief.md §5.1 for the plate colours and export spec. */
        imageSrcDark: string;
        imageAlt: string;
        visual?: never;
      }
    | {
        /** For visuals that must follow the colour scheme rather than bake it
         *  in — a diagram rendered from tokens, not exported to .webp. */
        visual: ReactNode;
        imageSrc?: never;
        imageSrcDark?: never;
        imageAlt?: never;
      }
  );

/* Hover flourish, defined once so both kinds of visual lift and shift
 * identically. Direction follows `reverse` so the movement is always away from
 * the text column. */
const visualHoverClass = (reverse: boolean) =>
  `transition-transform duration-[240ms] ease-out group-hover:-translate-y-1 ${
    reverse ? "group-hover:-translate-x-2" : "group-hover:translate-x-2"
  }`;

/* Split out so the prefers-color-scheme listener below only ever mounts for
 * rows that actually have two plates to swap between. Hooks can't be
 * conditional, so leaving it in WorkRow would attach a matchMedia listener to
 * component rows that have no image to re-select. */
function WorkRowImage({
  imageSrc,
  imageSrcDark,
  imageAlt,
  reverse,
}: {
  imageSrc: string;
  imageSrcDark: string;
  imageAlt: string;
  reverse: boolean;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

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
    /* next/image has no prefers-color-scheme art-direction API, so the theme
       swap has to go through <picture>. The exports are pre-sized to 1600w
       against a 560px display box, so no srcSet is needed. */
    <picture>
      <source media="(prefers-color-scheme: dark)" srcSet={imageSrcDark} />
      <img
        ref={imgRef}
        src={imageSrc}
        alt={imageAlt}
        width={1600}
        height={1200}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover ${visualHoverClass(
          reverse,
        )}`}
      />
    </picture>
  );
}

export function WorkRow(props: WorkRowProps) {
  const {
    eyebrow,
    title,
    description,
    linkText,
    linkHref,
    linkAriaLabel,
    linkExternal = false,
    reverse = false,
    revealIndex = 0,
  } = props;
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

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
          {/* Narrowed on imageSrc rather than visual: imageSrc is `string` on
              one branch and `undefined` on the other, which discriminates
              cleanly. ReactNode already includes undefined, so testing
              `visual` tells TypeScript nothing about which branch this is. */}
          {props.imageSrc !== undefined ? (
            <WorkRowImage
              imageSrc={props.imageSrc}
              imageSrcDark={props.imageSrcDark}
              imageAlt={props.imageAlt}
              reverse={reverse}
            />
          ) : (
            /* Plain block, not flex: an SVG with width="100%" sizes to its
               container in normal flow, but as a flex item it falls back
               toward its intrinsic size and renders undersized. */
            <div className={`absolute inset-0 ${visualHoverClass(reverse)}`}>
              {props.visual}
            </div>
          )}
        </div>
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <p className="text-eyebrow text-[var(--color-muted)] mb-4">{eyebrow}</p>
        <h3 className="text-h2 text-[var(--color-foreground)] mb-4 transition-colors duration-[240ms] ease-out group-hover:text-[var(--color-primary)]">
          {title}
        </h3>
        <p className="text-prose text-[var(--color-body)] mb-6">{description}</p>
        {linkExternal ? (
          <a
            href={linkHref}
            aria-label={linkAriaLabel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors duration-[180ms]"
          >
            <span>{linkText}</span>
            {/* Arrow marks leaving the site — internal links don't get one. */}
            <ArrowUpRight
              className="w-4 h-4 transition-transform duration-[240ms] ease-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        ) : (
          <Link
            href={linkHref}
            aria-label={linkAriaLabel}
            className="inline-flex items-center gap-2 text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors duration-[180ms]"
          >
            <span>{linkText}</span>
          </Link>
        )}
      </div>
    </div>
  );
}
