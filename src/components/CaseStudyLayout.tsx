"use client";

import Image, { getImageProps } from "next/image";
import type { ReactNode } from "react";
import { Container } from "./Container";
import { Section } from "./Section";
import { useScrollReveal } from "./useScrollReveal";

/* Long-form case study layout. Built for reuse — Salli migrates into this next,
   so nothing here is tuned to a single piece.

   The blocks below (Prose, Heading, Figure, Placeholder) are parts of this
   layout rather than site-wide primitives, which is why they live in this file
   instead of getting their own components. A case study composes them; the
   layout owns the measure, the rhythm and the reveal behaviour. */

type Measure = "column" | "wide";

/* The reading column is the site's narrow Container (680px) — same measure as
   the About page and the homepage thesis. Diagrams step out to 920px, which is
   enough room for the tier flow's node labels without abandoning the reading
   rhythm or competing with the hero at full container width. */
function Measured({
  width,
  children,
}: {
  width: Measure;
  children: ReactNode;
}) {
  if (width === "wide") {
    return (
      <div className="mx-auto w-full max-w-[920px] px-6 md:px-12">
        {children}
      </div>
    );
  }
  return <Container width="narrow">{children}</Container>;
}

/* Empty labelled slot for a visual that has not been built yet. Holds its
   aspect ratio so nothing shifts when the real visual lands. */
export function Placeholder({
  label,
  aspect,
}: {
  label: string;
  aspect: string;
}) {
  return (
    <div
      className={`flex w-full items-center justify-center border border-dashed border-[var(--color-border)] ${aspect}`}
      style={{ borderRadius: "var(--radius-lg)" }}
    >
      <span className="text-small text-[var(--color-muted)] px-6 text-center">
        {label}
      </span>
    </div>
  );
}

type FigureBase = {
  caption: string;
  width?: Measure;
  /** Tailwind aspect-ratio classes, e.g. "aspect-[4/3] md:aspect-[16/9]".
   *  Governs the empty slot, and an art-directed raster where two sources mean
   *  no single pair of intrinsic dimensions can describe both boxes. Ignored
   *  for an SVG child or a single image, both of which carry their own ratio. */
  aspect?: string;
  /** Label for the empty slot, shown until the visual exists. */
  placeholder?: string;
};

type RasterSource = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/* Inline SVG and raster images have different constraints, so they are
   different shapes of the same component: an SVG is rendered as-is and left to
   scale, a raster goes through next/image with explicit intrinsic dimensions
   and --radius-md corners to match the other image treatments on the site. */
type FigureProps =
  | (FigureBase & { variant: "svg"; children?: ReactNode })
  | (FigureBase & {
      variant: "raster";
      image?: RasterSource;
      /** A genuinely different crop to serve below md — art direction, not the
       *  same picture scaled down. Optional and additive: omit it and the
       *  figure renders exactly as it did before this existed. No `alt` of its
       *  own, because <picture> resolves to a single <img> and therefore a
       *  single accessible name. */
      mobileImage?: Omit<RasterSource, "alt">;
    });

/* next/image cannot art-direct from one <Image>, so this is the getImageProps
   + <picture> pattern from Next's own docs — 01-app/03-api-reference/
   02-components/image.md, "Art direction". The browser fetches only the source
   that matches, rather than downloading both and hiding one with CSS.

   Reserving the right box is the awkward part. The <img> can only carry one
   pair of width/height attributes — the mobile file's — so above md the
   browser would reserve a portrait box and then reflow the moment the
   landscape file arrived. The <source> carries width/height too, which is what
   the spec says should govern once that source is selected, but that is not
   dependable enough to hang layout stability on. So `aspect` does the work: it
   is the one place where the prop is load-bearing for a real visual rather
   than only for an empty slot, because two sources cannot both be described by
   one set of intrinsic dimensions. Ratios are within a tenth of a percent of
   the files' own, so object-cover crops nothing visible. */
function ArtDirected({
  image,
  mobileImage,
  sizes,
  aspect,
}: {
  image: RasterSource;
  mobileImage: Omit<RasterSource, "alt">;
  sizes: string;
  aspect?: string;
}) {
  const common = { alt: image.alt, sizes };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, ...image });
  const { props: mobileProps } = getImageProps({ ...common, ...mobileImage });

  return (
    <picture>
      <source
        media="(min-width: 768px)"
        srcSet={desktopSrcSet}
        sizes={sizes}
        width={image.width}
        height={image.height}
      />
      {/* A bare <img> because <picture> is the point: next/image renders its
          own <img> and cannot host a sibling <source>. Both sources still go
          through the image optimiser, via getImageProps above. `alt` is
          repeated rather than left to the spread so it is visible to a reader
          and to jsx-a11y, which cannot see through {...props}. */}
      <img
        {...mobileProps}
        alt={image.alt}
        className={`w-full rounded-[var(--radius-md)] ${
          aspect ? `${aspect} h-full object-cover` : "h-auto"
        }`}
      />
    </picture>
  );
}

export function Figure(props: FigureProps) {
  const { caption, width = "column", aspect, placeholder } = props;
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  let visual: ReactNode;
  if (props.variant === "svg" && props.children) {
    visual = props.children;
  } else if (props.variant === "raster" && props.image) {
    const sizes =
      width === "wide"
        ? "(max-width: 768px) 100vw, 920px"
        : "(max-width: 768px) 100vw, 680px";
    visual = props.mobileImage ? (
      <ArtDirected
        image={props.image}
        mobileImage={props.mobileImage}
        sizes={sizes}
        aspect={aspect}
      />
    ) : (
      <Image
        src={props.image.src}
        alt={props.image.alt}
        width={props.image.width}
        height={props.image.height}
        sizes={sizes}
        className="h-auto w-full rounded-[var(--radius-md)]"
      />
    );
  } else {
    visual = (
      <Placeholder
        label={placeholder ?? caption}
        aspect={aspect ?? "aspect-[16/9]"}
      />
    );
  }

  return (
    <figure
      ref={ref}
      data-reveal
      data-revealed={isRevealed}
      className="my-12 md:my-16"
    >
      <Measured width={width}>{visual}</Measured>
      {/* Captions always sit at the reading measure, never the figure's. A
          breakout diagram is wider than the text, but its caption is text —
          hanging it off the diagram's left edge puts it out of step with every
          other line on the page. */}
      <Container width="narrow">
        <figcaption className="text-small text-[var(--color-muted)] mt-4">
          {caption}
        </figcaption>
      </Container>
    </figure>
  );
}

/** Running text. Children are `<p className="text-prose">` elements. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 md:mt-10">
      <Container width="narrow">
        <div className="space-y-6 text-[var(--color-body)]">{children}</div>
      </Container>
    </div>
  );
}

/** Section subheading within the body. */
export function Heading({ children }: { children: ReactNode }) {
  return (
    <div className="mt-16 md:mt-24">
      <Container width="narrow">
        <h2 className="text-h2 text-[var(--color-foreground)]">{children}</h2>
      </Container>
    </div>
  );
}

type CaseStudyLayoutProps = {
  eyebrow: string;
  title: string;
  standfirst: string;
  /** Decorative, wider than the reading column, no caption. */
  heroVisual?: ReactNode;
  children: ReactNode;
};

export function CaseStudyLayout({
  eyebrow,
  title,
  standfirst,
  heroVisual,
  children,
}: CaseStudyLayoutProps) {
  const { ref: headerRef, isRevealed: headerRevealed } =
    useScrollReveal<HTMLDivElement>();
  const { ref: heroRef, isRevealed: heroRevealed } =
    useScrollReveal<HTMLDivElement>();

  return (
    <Section>
      <article>
        <div ref={headerRef} data-reveal data-revealed={headerRevealed}>
          <Container width="narrow">
            <p className="text-eyebrow text-[var(--color-primary)] mb-4">
              {eyebrow}
            </p>
            <h1 className="text-h1 text-[var(--color-foreground)] mb-6 md:mb-8">
              {title}
            </h1>
            <p className="text-subtitle text-[var(--color-body)]">
              {standfirst}
            </p>
          </Container>
        </div>

        {heroVisual ? (
          <div
            ref={heroRef}
            data-reveal
            data-revealed={heroRevealed}
            aria-hidden="true"
            className="mt-8 md:mt-10"
          >
            <Container>{heroVisual}</Container>
          </div>
        ) : null}

        {/* Blocks carry their own top margins — headings, figures and quotes
            each need different spacing, which space-y can't express. Adjacent
            margins collapse, so the larger of the two always wins. The first
            block is reset so its margin doesn't collapse through this wrapper. */}
        <div className="mt-12 md:mt-16 [&>*:first-child]:mt-0">{children}</div>
      </article>
    </Section>
  );
}
