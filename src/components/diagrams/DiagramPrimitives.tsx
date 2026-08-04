/* Shared vocabulary for the case study diagrams.
 *
 * Server Components — pure SVG, no hooks. HeroDiagram.tsx carries "use client"
 * only because it tracks prefers-reduced-motion in state; nothing here moves,
 * and the scroll-reveal is owned by the Figure wrapper in CaseStudyLayout.
 *
 * SVG presentation attributes (fill="…", stroke="…") do not resolve var() in
 * any current browser — every colour below goes through `style` for that
 * reason. Same constraint HeroDiagram.tsx:5-6 documents. Keeping the tokens in
 * one place is also what makes two diagrams parallel by construction rather
 * than by discipline, which matters when Salli adds more here.
 */

export const NODE_STYLE = {
  fill: "var(--color-surface)",
  stroke: "var(--color-hairline)",
};
export const NODE_LABEL_STYLE = { fill: "var(--color-foreground)" };
export const CHIP_LABEL_STYLE = { fill: "var(--color-muted)" };
export const EYEBROW_STYLE = { fill: "var(--color-primary)" };
export const CONNECTOR_STYLE = { stroke: "var(--color-primary)" };
export const ARROW_STYLE = { fill: "var(--color-primary)" };

const FONT_STACK = "var(--font-sans), system-ui, sans-serif";

/* Arrowhead. HeroDiagram needs none — it's a closed loop with a travelling
 * signal — but a delivery flow has to show direction. The marker path is
 * styled directly rather than via context-stroke, which isn't reliable enough
 * to depend on. `id` must be unique per rendered variant: desktop and mobile
 * are both in the DOM at once. */
export function ArrowDefs({ id }: { id: string }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 8 8"
        refX="7"
        refY="4"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 8 4 L 0 8 Z" style={ARROW_STYLE} fillOpacity="0.5" />
      </marker>
    </defs>
  );
}

export function Connector({
  d,
  markerId,
}: {
  d: string;
  /** Omit on segments that feed into a rail rather than arriving somewhere. */
  markerId?: string;
}) {
  return (
    <path
      d={d}
      fill="none"
      strokeWidth="1"
      strokeOpacity="0.5"
      style={CONNECTOR_STYLE}
      markerEnd={markerId ? `url(#${markerId})` : undefined}
    />
  );
}

/* Process step. Metrics carried from HeroDiagram §6.3: rx 6, 0.8px hairline
 * stroke, --color-surface fill, label at weight 500 with 0.04em tracking. */
export function Node({
  cx,
  cy,
  w,
  h,
  lines,
  eyebrow,
  stack = 0,
  stackOffset = 7,
  fontSize = 13,
  lineHeight = 16,
}: {
  cx: number;
  cy: number;
  w: number;
  h: number;
  lines: string[];
  /** Small teal label above the node text — used to name a lane at its entry. */
  eyebrow?: string;
  /** Layers drawn behind the node, so a queue reads as work piling up rather
   *  than as one more step in a process. Offset straight up and kept to the
   *  node's own width, which keeps the stack clear of the connectors arriving
   *  at the left edge and leaving from the right. */
  stack?: number;
  stackOffset?: number;
  fontSize?: number;
  lineHeight?: number;
}) {
  /* Backmost first, each a little fainter, so the pile recedes. The fill is
     opaque, so every layer hides the one behind it below its own top edge. */
  const layers = Array.from({ length: stack }, (_, i) => stack - i);

  /* An eyebrow with no body lines is a node whose whole label is the eyebrow —
     used for terminal nodes naming a tier, so "TIER 1" looks identical
     wherever it appears across the set. It centres rather than sitting high. */
  const hasLines = lines.length > 0;
  const blockHeight = hasLines ? (lines.length - 1) * lineHeight : 0;
  const eyebrowOffset = eyebrow && hasLines ? lineHeight * 0.7 : 0;
  const firstLineY = -blockHeight / 2 + eyebrowOffset;
  const eyebrowY = hasLines ? firstLineY - lineHeight - 2 : 0;

  return (
    <g transform={`translate(${cx} ${cy})`}>
      {layers.map((layer) => (
        <rect
          key={layer}
          x={-w / 2}
          y={-h / 2 - layer * stackOffset}
          width={w}
          height={h}
          rx="6"
          strokeWidth="0.8"
          strokeOpacity={0.35 + (stack - layer) * 0.25}
          style={NODE_STYLE}
        />
      ))}
      <rect
        x={-w / 2}
        y={-h / 2}
        width={w}
        height={h}
        rx="6"
        strokeWidth="0.8"
        style={NODE_STYLE}
      />
      {eyebrow && (
        <text
          x="0"
          y={eyebrowY}
          style={EYEBROW_STYLE}
          fontFamily={FONT_STACK}
          fontSize={fontSize - 2}
          fontWeight="500"
          letterSpacing="0.08em"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {eyebrow}
        </text>
      )}
      {hasLines && (
        <text
          style={NODE_LABEL_STYLE}
          fontFamily={FONT_STACK}
          fontSize={fontSize}
          fontWeight="500"
          letterSpacing="0.04em"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {lines.map((line, i) => (
            <tspan key={line} x="0" y={firstLineY + i * lineHeight}>
              {line}
            </tspan>
          ))}
        </text>
      )}
    </g>
  );
}

/* Work item. Deliberately a different class of thing to a process step —
 * pill-shaped and muted, so a reader never mistakes a kind of work for a
 * stage of delivery. */
export function Chip({
  cx,
  cy,
  w,
  h,
  label,
  fontSize = 12,
}: {
  cx: number;
  cy: number;
  w: number;
  h: number;
  label: string;
  fontSize?: number;
}) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <rect
        x={-w / 2}
        y={-h / 2}
        width={w}
        height={h}
        rx={h / 2}
        strokeWidth="0.8"
        style={NODE_STYLE}
      />
      <text
        x="0"
        y="0"
        style={CHIP_LABEL_STYLE}
        fontFamily={FONT_STACK}
        fontSize={fontSize}
        fontWeight="400"
        letterSpacing="0.02em"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {label}
      </text>
    </g>
  );
}

/* Label sitting on a connector rather than inside a node — "Yes" / "No" on a
 * decision branch. Muted so it stays subordinate to the node labels it sits
 * between, and never teal: teal is doing structural work everywhere else. */
export function EdgeLabel({
  x,
  y,
  text,
  anchor = "middle",
  fontSize = 10,
}: {
  x: number;
  y: number;
  text: string;
  anchor?: "start" | "middle" | "end";
  fontSize?: number;
}) {
  return (
    <text
      x={x}
      y={y}
      style={CHIP_LABEL_STYLE}
      fontFamily={FONT_STACK}
      fontSize={fontSize}
      fontWeight="500"
      letterSpacing="0.06em"
      textAnchor={anchor}
      dominantBaseline="middle"
    >
      {text}
    </text>
  );
}

/** Shared <svg> shell: role, accessible name, and responsive sizing. */
export function DiagramSvg({
  viewBox,
  title,
  desc,
  children,
}: {
  viewBox: string;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      role="img"
      aria-label={title}
      viewBox={viewBox}
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className="block h-auto"
    >
      <title>{title}</title>
      <desc>{desc}</desc>
      {children}
    </svg>
  );
}
