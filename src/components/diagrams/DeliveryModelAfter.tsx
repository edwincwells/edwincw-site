import {
  ArrowDefs,
  CASE_STUDY_METRICS,
  Connector,
  type DiagramMetrics,
  DiagramSvg,
  Node,
} from "./DiagramPrimitives";

/* DIAGRAM 2 — the delivery model after the change.
 *
 * Work is scoped, a tier is assigned, and two lanes run in parallel until they
 * meet at the same design review, which then goes to build. Tier 1 keeps
 * Product Design at kickoff; Tier 2 is PM-led.
 *
 * Paired with DeliveryModelBefore on the case study. Same default viewBox, same
 * entry node at cx 84, same exit node at cx 796, same node vocabulary — the only
 * thing that changes is the middle. Where DIAGRAM 1 converges before design, this
 * converges at design review, and that difference is the whole argument. Keep
 * the two in step if either is edited.
 *
 * DeliveryModelRow renders this half alone for the Selected Work row, with a
 * cropped viewBox and heavier metrics. Nothing it passes moves a coordinate, so
 * the pairing above is unaffected by it. */

const TITLE = "Diagram: how design work is routed after the change";
const DESC =
  "Work is scoped and a tier is assigned. Tier 1 work goes to Product Design " +
  "at kickoff. Tier 2 work is designed by product managers in Claude Design. " +
  "Both lanes then go through the same design review before build.";

/* Vertical centre line of the flow. Shared with DeliveryModelBefore. */
const AXIS = 165;

/* Exported so DeliveryModelRow can render this half on its own at row size.
 * `metrics` and `viewBox` both default to what the case study was drawn at, so
 * its call site passes nothing and renders exactly as before. */
export function Desktop({
  metrics = CASE_STUDY_METRICS,
  idSuffix = "",
  viewBox = "0 0 880 330",
}: {
  metrics?: DiagramMetrics;
  /** Namespaces the arrowhead marker when this is rendered more than once on
   *  a page — ids must stay unique across every variant in the DOM. */
  idSuffix?: string;
  /** Crops the canvas without moving anything on it. A min-y offset is a
   *  translate by another name, so a caller that wants the drawing tight to its
   *  content changes what is framed rather than where the nodes sit — which is
   *  what keeps this half aligned with DeliveryModelBefore on the case study. */
  viewBox?: string;
} = {}) {
  const arrow = `delivery-after-arrow-desktop${idSuffix}`;
  /* Lanes span 62–268, matching the chip stack in DeliveryModelBefore. */
  const tier1 = 100;
  const tier2 = 230;

  const node = {
    fontSize: metrics.fontSize,
    lineHeight: metrics.lineHeight,
    strokeWidth: metrics.nodeStroke,
  };
  const line = { strokeWidth: metrics.connectorStroke };

  return (
    <DiagramSvg viewBox={viewBox} title={TITLE} desc={DESC}>
      <ArrowDefs id={arrow} />

      <Connector d={`M 154 ${AXIS} L 192 ${AXIS}`} markerId={arrow} {...line} />

      {/* Tier assigned → the two lanes */}
      <Connector d={`M 332 ${AXIS} C 350 ${AXIS}, 352 ${tier1}, 370 ${tier1}`} markerId={arrow} {...line} />
      <Connector d={`M 332 ${AXIS} C 350 ${AXIS}, 352 ${tier2}, 370 ${tier2}`} markerId={arrow} {...line} />

      {/* Both lanes → the same design review */}
      <Connector d={`M 510 ${tier1} C 528 ${tier1}, 530 ${AXIS}, 548 ${AXIS}`} markerId={arrow} {...line} />
      <Connector d={`M 510 ${tier2} C 528 ${tier2}, 530 ${AXIS}, 548 ${AXIS}`} markerId={arrow} {...line} />

      {/* Design review → build */}
      <Connector d={`M 688 ${AXIS} L 726 ${AXIS}`} markerId={arrow} {...line} />

      <Node cx={84} cy={AXIS} w={140} h={60} lines={["Work scoped"]} {...node} />
      <Node cx={262} cy={AXIS} w={140} h={60} lines={["Tier assigned"]} {...node} />

      <Node
        cx={440}
        cy={tier1}
        w={140}
        h={76}
        eyebrow="TIER 1"
        lines={["Product Design", "at kickoff"]}
        {...node}
      />

      <Node
        cx={440}
        cy={tier2}
        w={140}
        h={76}
        eyebrow="TIER 2"
        lines={["PM designs in", "Claude Design"]}
        {...node}
      />
      <Node cx={618} cy={AXIS} w={140} h={60} lines={["Design review"]} {...node} />

      <Node cx={796} cy={AXIS} w={140} h={60} lines={["Build"]} {...node} />
    </DiagramSvg>
  );
}

function Mobile() {
  const arrow = "delivery-after-arrow-mobile";
  const laneA = 88;
  const laneB = 252;

  return (
    <DiagramSvg viewBox="0 0 340 470" title={TITLE} desc={DESC}>
      <ArrowDefs id={arrow} />

      <Connector d="M 170 57 L 170 89" markerId={arrow} />

      {/* Tier assigned → the two lanes */}
      <Connector d={`M 170 135 C 170 158, ${laneA} 157, ${laneA} 180`} markerId={arrow} />
      <Connector d={`M 170 135 C 170 158, ${laneB} 157, ${laneB} 180`} markerId={arrow} />

      {/* Both lanes → the same design review */}
      <Connector d={`M ${laneA} 256 C ${laneA} 272, 170 272, 170 288`} markerId={arrow} />
      <Connector d={`M ${laneB} 256 C ${laneB} 272, 170 272, 170 288`} markerId={arrow} />

      {/* Design review → build */}
      <Connector d="M 170 344 L 170 397" markerId={arrow} />

      <Node cx={170} cy={34} w={160} h={46} lines={["Work scoped"]} fontSize={12} />
      <Node cx={170} cy={112} w={160} h={46} lines={["Tier assigned"]} fontSize={12} />

      <Node
        cx={laneA}
        cy={218}
        w={150}
        h={76}
        eyebrow="TIER 1"
        lines={["Product Design", "at kickoff"]}
        fontSize={12}
        lineHeight={15}
      />

      <Node
        cx={laneB}
        cy={218}
        w={150}
        h={76}
        eyebrow="TIER 2"
        lines={["PM designs in", "Claude Design"]}
        fontSize={12}
        lineHeight={15}
      />
      <Node
        cx={170}
        cy={316}
        w={160}
        h={56}
        lines={["Design review"]}
        fontSize={12}
        lineHeight={15}
      />

      <Node cx={170} cy={420} w={160} h={46} lines={["Build"]} fontSize={12} />
    </DiagramSvg>
  );
}

export function DeliveryModelAfter() {
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
