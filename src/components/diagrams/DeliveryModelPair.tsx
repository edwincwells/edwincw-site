import type { DiagramMetrics } from "./DiagramPrimitives";
import { Desktop as After } from "./DeliveryModelAfter";
import { Desktop as Before } from "./DeliveryModelBefore";

/* The before/after delivery model pair, stacked, for the Selected Work row.
 *
 * Both halves are viewBox "0 0 880 330" with the same AXIS, the same entry node
 * at cx 84 and the same exit node at cx 796 — so stacking them gives 880×660,
 * which is exactly the 4:3 of the row box, and "Work scoped" and "Build" line
 * up vertically between the two. That alignment is the whole reason this reads
 * as one state and then the same state changed; if either half's geometry
 * moves, this stops working.
 *
 * Rendered rather than exported: a .webp would bake in light-mode colours,
 * and every stroke here resolves through the theme tokens.
 *
 * Decorative — the wrapper carries aria-hidden, which removes the whole
 * subtree from the accessibility tree, so the role="img" and title/desc inside
 * each half need no change. The row's h3 and description carry the meaning. */

/* The row displays 880 units in roughly 560px (0.64) on desktop and 327px
 * (0.37) on mobile. Strokes and text can't be corrected by one multiplier:
 * strokes can grow freely, but node text is capped by the box it sits in —
 * "Product Design" runs to 115 units at fontSize 15 against about 124 units of
 * usable width inside a 140-unit node, so 15 is the practical ceiling.
 * Node text therefore lands near 9.5px and stays unreadable, which is the
 * accepted trade: the labels are what make this read as real work, and the
 * screenshot rows are illegible at the same size without looking broken. */
const ROW: DiagramMetrics = {
  fontSize: 15,
  lineHeight: 18,
  chipFontSize: 14,
  nodeStroke: 1.4,
  connectorStroke: 1.6,
};

/* Same drawing, heavier strokes: at 0.37 scale a 1.6-unit line renders at
 * 0.6px and goes patchy, so the hairlines need roughly 2.7 units to hold. */
const ROW_MOBILE: DiagramMetrics = {
  ...ROW,
  nodeStroke: 2.2,
  connectorStroke: 2.7,
};

/* Sits over the empty top-left of each half — the first node spans x 14–154 at
 * y 135–195 in both, so there is nothing to collide with. Deliberately HTML
 * rather than SVG text: SVG would shrink with the drawing and be unreadable at
 * exactly the size where the label matters most, whereas this holds a true 12px
 * at every breakpoint and uses the site's own eyebrow class. */
function StateLabel({ children }: { children: string }) {
  return (
    /* Inset rather than flush: the row box clips at its rounded corners, and a
       label hard against the edge clipped its first letter. The first node
       starts at x 14 / y 135 in the geometry, so there is room to move in. */
    <span className="absolute left-3 top-2 text-eyebrow text-[var(--color-muted)]">
      {children}
    </span>
  );
}

function Pair({
  metrics,
  idSuffix,
}: {
  metrics: DiagramMetrics;
  idSuffix: string;
}) {
  return (
    <>
      <div className="relative">
        <Before metrics={metrics} idSuffix={idSuffix} />
        <StateLabel>Before</StateLabel>
      </div>
      <div className="relative">
        <After metrics={metrics} idSuffix={idSuffix} />
        <StateLabel>After</StateLabel>
      </div>
    </>
  );
}

export function DeliveryModelPair() {
  return (
    <div aria-hidden="true" className="h-full w-full">
      <div className="hidden md:block">
        <Pair metrics={ROW} idSuffix="-row" />
      </div>
      <div className="md:hidden">
        <Pair metrics={ROW_MOBILE} idSuffix="-row-mobile" />
      </div>
    </div>
  );
}
