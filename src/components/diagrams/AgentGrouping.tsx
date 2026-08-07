import { DiagramSvg } from "./DiagramPrimitives";

/* VISUAL 3 — the same capability, presented two ways.
 *
 * Some of the team wanted every sub-agent exposed as its own entry in the
 * library. What shipped groups them into ten named focuses. The diagram has one
 * job: show that nothing is hidden between the two. The marks are identical in
 * number — 120 either side — and only the grouping differs, because the argument
 * was never about how much the system could do, it was about how much of its
 * structure a manager has to hold in their head.
 *
 * Two panels side by side, sharing a baseline. No arrow, no connector, no
 * funnel, no constriction, no layered stack: every one of those says one side
 * becomes the other, and these are alternatives.
 *
 * NO ACCENT ANYWHERE, deliberately, and this is the one rule that separates
 * this component from InitiationMatrix. Teal there marks the resolution of a
 * question. This diagram presents a decision rather than a finding, so tinting
 * either panel would argue for it. Muted, foreground and hairline only.
 *
 * The right panel's clusters are single runs rather than clumps. A run reads as
 * a unary bar, so ten unequal groups can be compared at a glance — which is the
 * difference between the two panels made visible: one field is uncounted, the
 * other is counted.
 *
 * The left field is a plain uniform grid — no jitter, no displacement. An
 * earlier version scattered the marks to stop them reading as a grid, but a
 * scatter is a pattern too, and a loose one invites the eye to look for
 * meaning in the gaps. Regular and tight reads as undifferentiated stock,
 * which is the point: there is nothing in it to attend to.
 *
 * SVG presentation attributes (fill="…", stroke="…") do not resolve var() in
 * any current browser, so every colour goes through `style` — same constraint
 * DiagramPrimitives.tsx:7-9 documents. No font family is set; the <text>
 * elements inherit General Sans from body. */

const TITLE =
  "Diagram: the same sub-agents, exposed individually or grouped into ten " +
  "focuses";
const DESC =
  "Two alternatives side by side, with the same number of marks in each. On " +
  "the left, every sub-agent exposed: an undifferentiated field of identical " +
  "unlabelled marks. On the right, ten focuses: the same marks " +
  "gathered into ten named groups of unequal size — Guided learning, Sales " +
  "snapshot, Labor snapshot, Team communication, Schedule warnings, " +
  "Compliance oversight, Timekeeping intelligence, Team requests, Timesheet " +
  "review, and Weather impact analysis. Nothing is hidden between the two. " +
  "Only the grouping differs.";

const MARK_STYLE = { fill: "var(--color-muted)" };
const HEADER_STYLE = { fill: "var(--color-muted)" };
const RULE_STYLE = { stroke: "var(--color-hairline)" };
/* --color-text does not exist; --color-foreground is what NODE_LABEL_STYLE
   uses for every diagram label on the site. Same resolution as visual 6. */
const LABEL_STYLE = { fill: "var(--color-foreground)" };

/* Sums to 120 — the same total as the left field, and the reason the two panels
   can be counted against each other. Deliberately uneven so the groups read as
   groups rather than as a second, tidier grid. Scaled from an earlier set that
   summed to 60, doubled exactly, so the relative sizes are untouched. */
const CLUSTERS = [10, 12, 8, 14, 10, 16, 12, 8, 12, 18];

/* "Labor snapshot" is the product's own label and keeps its US spelling. */
const FOCUSES = [
  "Guided learning",
  "Sales snapshot",
  "Labor snapshot",
  "Team communication",
  "Schedule warnings",
  "Compliance oversight",
  "Timekeeping intelligence",
  "Team requests",
  "Timesheet review",
  "Weather impact analysis",
];

const TOTAL = CLUSTERS.reduce((sum, n) => sum + n, 0);

/** The undifferentiated field: every sub-agent, no labels, no hierarchy. */
function Field({
  x,
  y,
  columns,
  step,
  radius,
}: {
  x: number;
  y: number;
  columns: number;
  /** Uniform on both axes — a square grid, so neither rows nor columns read as
   *  the organising direction. */
  step: number;
  radius: number;
}) {
  return (
    <>
      {Array.from({ length: TOTAL }, (_, i) => (
        <circle
          key={i}
          cx={x + (i % columns) * step}
          cy={y + Math.floor(i / columns) * step}
          r={radius}
          style={MARK_STYLE}
        />
      ))}
    </>
  );
}

/** One focus: its marks as a run, then its name. */
function Row({
  x,
  y,
  count,
  label,
  labelX,
  step,
  radius,
}: {
  x: number;
  y: number;
  count: number;
  label: string;
  labelX: number;
  step: number;
  radius: number;
}) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <circle
          key={i}
          cx={x + i * step}
          cy={y}
          r={radius}
          style={MARK_STYLE}
        />
      ))}
      <text
        x={labelX}
        y={y}
        fontSize="14"
        dominantBaseline="middle"
        style={LABEL_STYLE}
      >
        {label}
      </text>
    </>
  );
}

/* The rule under each header is the shared baseline the two panels hang from —
   it is not a frame, and there is no box around either panel. */
function Header({
  x,
  y,
  width,
  children,
}: {
  x: number;
  y: number;
  width: number;
  children: string;
}) {
  return (
    <>
      <text x={x} y={y} fontSize="14" style={HEADER_STYLE}>
        {children}
      </text>
      <line
        x1={x}
        y1={y + 16}
        x2={x + width}
        y2={y + 16}
        strokeWidth="1"
        style={RULE_STYLE}
      />
    </>
  );
}

function Desktop() {
  const leftX = 24;
  const rightX = 444;
  const panelW = 356;
  const headerY = 26;
  const rowH = 33;

  return (
    <DiagramSvg viewBox="0 0 824 464" title={TITLE} desc={DESC}>
      <Header x={leftX} y={headerY} width={panelW}>
        every sub-agent exposed
      </Header>
      {/* 12 × 10 at a 31 step. The two constraints pull against each other: the
          field has to span the panel's width and reach roughly the same
          baseline as the tenth row opposite, and 120 marks across ~340 × ~280
          units fixes the step at about 31 for a square grid. Starts on the same
          y as the first row opposite, so both panels open together. */}
      <Field x={leftX + 4} y={90} columns={12} step={31} radius={2} />

      <Header x={rightX} y={headerY} width={panelW}>
        ten focuses exposed
      </Header>
      {/* The longest run is now 18, so the run step comes down from 11 to 8 and
          the labels move right to 604 — at 11 an 18-mark run would have driven
          straight through the label column. */}
      {CLUSTERS.map((count, i) => (
        <Row
          key={FOCUSES[i]}
          x={rightX + 8}
          y={90 + i * rowH}
          count={count}
          label={FOCUSES[i]}
          labelX={rightX + 160}
          step={8}
          radius={2}
        />
      ))}
    </DiagramSvg>
  );
}

/* Portrait viewBox rather than a squeezed version of the desktop drawing: the
   two panels stack, left above right, and nothing is truncated — all 120
   marks and all ten labels are present at both breakpoints.
 *
 * 327 units wide is not arbitrary. The figure slot measures 327px at a 375px
 * viewport, so the drawing renders 1:1 there and 14 units is a true 14px. The
 * wrapper caps the width for the same reason TierDecisionFlow's does: uncapped,
 * this keeps scaling with its container to 719px at the md boundary and the
 * type balloons past 30px for no gain in legibility. */
function Mobile() {
  const x = 14;
  const panelW = 299;
  /* 22 rather than the desktop's 33, and the second header pulled up to 176:
     ten rows plus two headers into 436 units is the tight constraint here, and
     at 22 the last label clears the bottom edge by 21 units instead of 4. */
  const rowH = 22;

  return (
    <DiagramSvg viewBox="0 0 327 436" title={TITLE} desc={DESC}>
      <Header x={x} y={20} width={panelW}>
        every sub-agent exposed
      </Header>
      {/* 20 × 6 at a 15 step. The field has only the band between the rule and
          the second header to work in, so 120 marks here are packed far tighter
          than on desktop — which suits it, since this is the panel that should
          read as stock rather than as items. Radius drops to 1.75 so the runs
          below can hold 18 marks in the width left beside a label. */}
      <Field x={x + 6} y={58} columns={20} step={15} radius={1.75} />

      <Header x={x} y={176} width={panelW}>
        ten focuses exposed
      </Header>
      {/* 18 marks in the width available beside a 14px label is the binding
          constraint on this whole drawing. At a 5.5 step the longest run closes
          at 111 and the labels start at 120, which still leaves the longest of
          them — "Timekeeping intelligence" — ending well inside 327. */}
      {CLUSTERS.map((count, i) => (
        <Row
          key={FOCUSES[i]}
          x={x + 4}
          y={210 + i * rowH}
          count={count}
          label={FOCUSES[i]}
          labelX={x + 106}
          step={5.5}
          radius={1.75}
        />
      ))}
    </DiagramSvg>
  );
}

export function AgentGrouping() {
  return (
    <>
      <div className="hidden md:block">
        <Desktop />
      </div>
      <div className="md:hidden mx-auto max-w-[400px]">
        <Mobile />
      </div>
    </>
  );
}
