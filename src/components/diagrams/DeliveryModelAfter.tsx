import { ArrowDefs, Connector, DiagramSvg, Node } from "./DiagramPrimitives";

/* DIAGRAM 2 — the delivery model after the change.
 *
 * Work is scoped, a tier is assigned, and two lanes run in parallel until they
 * meet at the same build node. Tier 1 keeps Product Design at kickoff; Tier 2
 * is PM-led with a design review before build.
 *
 * Paired with DeliveryModelBefore. Same viewBox, same entry node at cx 84,
 * same exit node at cx 796, same node vocabulary — the only thing that changes
 * is the middle. Where DIAGRAM 1 converges before design, this converges at
 * build, and that difference is the whole argument. Keep the two in step if
 * either is edited. */

const TITLE = "Diagram: how design work is routed after the change";
const DESC =
  "Work is scoped and a tier is assigned. Tier 1 work goes to Product Design " +
  "at kickoff and then into specs and wireframes. Tier 2 work is designed by " +
  "product managers in Claude Design and then goes through design review. " +
  "Both lanes arrive at the same build step.";

/* Vertical centre line of the flow. Shared with DeliveryModelBefore. */
const AXIS = 165;

function Desktop() {
  const arrow = "delivery-after-arrow-desktop";
  /* Lanes span 62–268, matching the chip stack in DeliveryModelBefore. */
  const tier1 = 100;
  const tier2 = 230;

  return (
    <DiagramSvg viewBox="0 0 880 330" title={TITLE} desc={DESC}>
      <ArrowDefs id={arrow} />

      <Connector d={`M 154 ${AXIS} L 192 ${AXIS}`} markerId={arrow} />

      {/* Tier assigned → the two lanes */}
      <Connector d={`M 332 ${AXIS} C 350 ${AXIS}, 352 ${tier1}, 370 ${tier1}`} markerId={arrow} />
      <Connector d={`M 332 ${AXIS} C 350 ${AXIS}, 352 ${tier2}, 370 ${tier2}`} markerId={arrow} />

      {/* Within each lane */}
      <Connector d={`M 510 ${tier1} L 548 ${tier1}`} markerId={arrow} />
      <Connector d={`M 510 ${tier2} L 548 ${tier2}`} markerId={arrow} />

      {/* Both lanes → the same build node */}
      <Connector d={`M 688 ${tier1} C 706 ${tier1}, 710 ${AXIS}, 726 ${AXIS}`} markerId={arrow} />
      <Connector d={`M 688 ${tier2} C 706 ${tier2}, 710 ${AXIS}, 726 ${AXIS}`} markerId={arrow} />

      <Node cx={84} cy={AXIS} w={140} h={60} lines={["Work scoped"]} />
      <Node cx={262} cy={AXIS} w={140} h={60} lines={["Tier assigned"]} />

      <Node
        cx={440}
        cy={tier1}
        w={140}
        h={76}
        eyebrow="TIER 1"
        lines={["Product Design", "at kickoff"]}
      />
      {/* Two lines at 13px: "Specs & wireframes" measures ~129px against 134px
          of usable node width, which is too tight to set on one. */}
      <Node cx={618} cy={tier1} w={140} h={60} lines={["Specs &", "wireframes"]} />

      <Node
        cx={440}
        cy={tier2}
        w={140}
        h={76}
        eyebrow="TIER 2"
        lines={["PM designs in", "Claude Design"]}
      />
      <Node cx={618} cy={tier2} w={140} h={60} lines={["Design review"]} />

      <Node cx={796} cy={AXIS} w={140} h={60} lines={["Build"]} />
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

      {/* Within each lane */}
      <Connector d={`M ${laneA} 256 L ${laneA} 288`} markerId={arrow} />
      <Connector d={`M ${laneB} 256 L ${laneB} 288`} markerId={arrow} />

      {/* Both lanes → the same build node */}
      <Connector d={`M ${laneA} 344 C ${laneA} 370, 170 372, 170 397`} markerId={arrow} />
      <Connector d={`M ${laneB} 344 C ${laneB} 370, 170 372, 170 397`} markerId={arrow} />

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
        cx={laneA}
        cy={316}
        w={150}
        h={56}
        lines={["Specs & wireframes"]}
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
        cx={laneB}
        cy={316}
        w={150}
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
