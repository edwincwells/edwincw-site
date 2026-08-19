import type { DiagramMetrics } from "./DiagramPrimitives";
import { Desktop as After } from "./DeliveryModelAfter";

/* The Selected Work row visual for the leadership case study.
 *
 * Only the after flow. The row used to stack DIAGRAM 1 above DIAGRAM 2 with
 * "Before" and "After" labels, which was the case study's whole argument
 * compressed into a 560×420 box — too busy to read at that size, and an
 * argument is not what a thumbnail is for. This one signals the kind of entry
 * the row leads to and leaves the reasoning to the page itself.
 *
 * The drawing is DeliveryModelAfter's own Desktop, unmodified: same
 * coordinates, same node sizes, same proportions. Two things are passed in —
 * heavier metrics, because the row displays it well below the size it was drawn
 * for, and a cropped viewBox. */

/* The after flow's content sits at x 14–866, y 62–268. Framing 0 48 880 234
 * leaves 14 units clear on all four sides — the same margin the drawing already
 * had left and right, now matched top and bottom. Those margins are what absorb
 * WorkRow's hover translate under its overflow: hidden: 14 units is 8.9px at the
 * 0.636 desktop scale, against an 8px horizontal shift and a 4px lift. */
const ROW_VIEW_BOX = "0 48 880 234";

/* The row displays 880 units in roughly 560px (0.64) on desktop and 327px
 * (0.37) on mobile. Strokes and text can't be corrected by one multiplier:
 * strokes can grow freely, but node text is capped by the box it sits in —
 * "Product Design" runs to 115 units at fontSize 15 against about 124 units of
 * usable width inside a 140-unit node, so 15 is the practical ceiling. Node
 * text therefore lands near 9.5px on desktop and 5.6px on mobile, and there is
 * no setting of this that makes it readable at row size. That is the accepted
 * trade rather than a defect: what the row needs from this drawing is the shape
 * of a delivery flow, and the labels are what stop that shape reading as
 * decoration. The argument itself is on the page the row links to.
 *
 * chipFontSize is inert here — the after flow draws no chips — but the type is
 * shared with the diagrams that do, so it carries a sensible value rather than
 * a placeholder. */
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

export function DeliveryModelRow() {
  return (
    /* Centred by absolute positioning rather than flex. WorkRow.tsx:151 records
       why: an SVG with width="100%" sizes to its container in normal flow but
       falls back toward its intrinsic size as a flex item. `inset-x-0` gives
       each branch a definite width, so the SVG still resolves against the box,
       and top-1/2 with a half-height translate centres it in a container it is
       deliberately much shorter than. */
    <div aria-hidden="true" className="relative h-full w-full">
      <div className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2">
        <After metrics={ROW} idSuffix="-row" viewBox={ROW_VIEW_BOX} />
      </div>
      <div className="md:hidden absolute inset-x-0 top-1/2 -translate-y-1/2">
        <After metrics={ROW_MOBILE} idSuffix="-row-mobile" viewBox={ROW_VIEW_BOX} />
      </div>
    </div>
  );
}
