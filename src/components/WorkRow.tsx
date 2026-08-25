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
  /** External links open in a new tab, carry the ↗ arrow, and say so in an
   *  sr-only span. Internal ones go through next/link with none of the three. */
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

/* The stretched link. The ::after carries no visible styling — it exists only
 * to extend the title anchor's hit area across the whole row, so the hover
 * treatment stops promising a click target that isn't there. The anchor stays
 * on the title rather than wrapping the row, which keeps the accessible name
 * the title instead of every word in the entry.
 *
 * `inset-0` resolves against the row root because nothing between the two is
 * positioned: the column wrapper and the <h3> are both static.
 *
 * `z-[1]` is load-bearing, not defensive. The visual box is a positioned
 * element in the sibling column, and grid painting uses order-modified document
 * order — so on `reverse` rows the `md:order-1` / `md:order-2` swap would paint
 * this overlay *below* the image, and the image would swallow clicks over its
 * own area. The row root is already a stacking context (globals.css gives
 * [data-reveal] `will-change: transform`), so the z-index stays local to the
 * row. Pointer cursor needs no rule: `cursor` inherits, so the ::after picks up
 * the UA's `a:any-link { cursor: pointer }` from the anchor it belongs to. */
const STRETCHED_LINK =
  "after:absolute after:inset-0 after:z-[1] after:content-['']";

/* Hover flourish, defined once so both kinds of visual lift and shift
 * identically. Direction follows `reverse` so the movement is always away from
 * the text column.
 *
 * The two triggers are written out rather than collapsed, because they are
 * gated differently and that is deliberate. Tailwind v4 compiles `hover:` to
 * `&:hover { @media (hover: hover) { … } }`, so every `group-hover:` rule here
 * is already behind that media query and will not fire on touch — do not add a
 * hand-written one. The `group-has-[:focus-visible]:` half is ungated on
 * purpose: keyboard focus is not a hover capability.
 *
 * `has-[:focus-visible]` rather than `focus-within`: focus-within also matches
 * on mouse-down, and on the external rows the anchor keeps focus while the new
 * tab is open — so returning to the site would leave the row latched in the
 * lifted teal state with no pointer anywhere near it. */
const visualHoverClass = (reverse: boolean) =>
  `transition-transform duration-[240ms] ease-out group-hover:-translate-y-1 group-has-[:focus-visible]:-translate-y-1 ${
    reverse
      ? "group-hover:-translate-x-2 group-has-[:focus-visible]:-translate-x-2"
      : "group-hover:translate-x-2 group-has-[:focus-visible]:translate-x-2"
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
    linkExternal = false,
    reverse = false,
    revealIndex = 0,
  } = props;
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    /* `relative` is what the stretched link sizes against; `group` is what
       drives the treatment on the visual, the title and the CTA together. */
    <div
      ref={ref}
      data-reveal
      data-revealed={isRevealed}
      style={{ ["--reveal-index" as string]: revealIndex }}
      className="group relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
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
        <h3 className="text-h2 text-[var(--color-foreground)] mb-4 transition-colors duration-[240ms] ease-out group-hover:text-[var(--color-primary)] group-has-[:focus-visible]:text-[var(--color-primary)]">
          {/* No aria-label on either branch: the name is built from real text
              inside the anchor, so it reads as the title plus whatever the
              title doesn't say. Internal titles are editorial and don't name
              the kind of page, so they take the row's own eyebrow — sentence
              case in the prop, uppercased only by .text-eyebrow's
              text-transform, which sr-only does not apply. External titles
              already open on their destination ("seedbank.design…", "FluxUX:…")
              and instead carry the new-tab signal the CTA copy used to, now
              that the CTA is out of the accessibility tree. */}
          {linkExternal ? (
            <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className={STRETCHED_LINK}
            >
              {title}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <Link href={linkHref} className={STRETCHED_LINK}>
              {title}
              <span className="sr-only">, {eyebrow}</span>
            </Link>
          )}
        </h3>
        <p className="text-prose text-[var(--color-body)] mb-6">{description}</p>
        {/* Not a link any more. The whole row is the link, so a second anchor
            to the same destination would be a redundant tab stop and a second
            entry in the links list. aria-hidden rather than a bare span: the
            copy is a visual affordance now, and the anchor above already says
            where the row goes. */}
        <span
          aria-hidden="true"
          className="inline-flex items-center gap-2 text-[var(--color-foreground)] transition-colors duration-[180ms] group-hover:text-[var(--color-primary)] group-has-[:focus-visible]:text-[var(--color-primary)]"
        >
          {/* Underlined below sm because there is no hover state on touch, so
              without it nothing on a phone marks the row as tappable. Dropped
              at sm, where the hover treatment takes over. */}
          <span className="underline underline-offset-4 sm:no-underline">
            {linkText}
          </span>
          {/* Arrow marks leaving the site — internal rows don't get one. */}
          {linkExternal ? (
            <ArrowUpRight
              className="w-4 h-4 transition-transform duration-[240ms] ease-out group-hover:translate-x-1 group-has-[:focus-visible]:translate-x-1"
              aria-hidden="true"
            />
          ) : null}
        </span>
      </div>
    </div>
  );
}
