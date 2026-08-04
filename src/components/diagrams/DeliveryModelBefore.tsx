import {
  ArrowDefs,
  Chip,
  Connector,
  DiagramSvg,
  Node,
} from "./DiagramPrimitives";

/* DIAGRAM 1 — the delivery model before the change.
 *
 * Work is scoped, four kinds of work fan out, and all four funnel back into a
 * single Product Design queue before build. The funnel is the argument: one
 * lane carries every type of work, regardless of complexity.
 *
 * Paired with DeliveryModelAfter. Both share the same viewBox, the same entry
 * node at cx 84 and the same exit node at cx 796, so the reader recognises the
 * second as the first resolved. Only the middle changes. Keep them in step if
 * either is edited.
 *
 * Desktop and mobile are separate geometry rather than responsive coordinate
 * maths, per the precedent set by HeroDiagram in Prompt 7.0. */

const TITLE = "Diagram: how design work was routed before the change";
const DESC =
  "Work is scoped, and every kind of work — from small settings changes and " +
  "new reports through to navigation updates and new surfaces — routes into a " +
  "single Product Design queue, where it backs up and waits its turn before " +
  "build. One lane carries all of it, whatever its complexity.";

/* Plural on purpose: these are categories of work, not four specific tickets.
   The set is chosen to span the complexity range — two obviously small, two
   structural — because the argument is that everything went down one lane
   regardless of which it was. */
const WORK_TYPES = [
  "Settings changes",
  "New reports",
  "Navigation updates",
  "New surfaces",
];

/* Vertical centre line of the flow. Shared with DeliveryModelAfter. */
const AXIS = 165;

function Desktop() {
  const arrow = "delivery-before-arrow-desktop";
  /* Chip rows, spanning 62–268 so the stack matches the vertical extent of the
     two lanes in DeliveryModelAfter. */
  const rows = [79, 136, 193, 250];

  return (
    <DiagramSvg viewBox="0 0 880 330" title={TITLE} desc={DESC}>
      <ArrowDefs id={arrow} />

      {/* Work scoped → each work type */}
      <Connector d={`M 154 ${AXIS} C 195 ${AXIS}, 205 ${rows[0]}, 252 ${rows[0]}`} markerId={arrow} />
      <Connector d={`M 154 ${AXIS} C 195 ${AXIS}, 210 ${rows[1]}, 252 ${rows[1]}`} markerId={arrow} />
      <Connector d={`M 154 ${AXIS} C 195 ${AXIS}, 210 ${rows[2]}, 252 ${rows[2]}`} markerId={arrow} />
      <Connector d={`M 154 ${AXIS} C 195 ${AXIS}, 205 ${rows[3]}, 252 ${rows[3]}`} markerId={arrow} />

      {/* Every work type → the one queue */}
      <Connector d={`M 428 ${rows[0]} C 465 ${rows[0]}, 462 ${AXIS}, 495 ${AXIS}`} markerId={arrow} />
      <Connector d={`M 428 ${rows[1]} C 465 ${rows[1]}, 470 ${AXIS}, 495 ${AXIS}`} markerId={arrow} />
      <Connector d={`M 428 ${rows[2]} C 465 ${rows[2]}, 470 ${AXIS}, 495 ${AXIS}`} markerId={arrow} />
      <Connector d={`M 428 ${rows[3]} C 465 ${rows[3]}, 462 ${AXIS}, 495 ${AXIS}`} markerId={arrow} />

      {/* Queue → build */}
      <Connector d={`M 645 ${AXIS} L 726 ${AXIS}`} markerId={arrow} />

      <Node cx={84} cy={AXIS} w={140} h={60} lines={["Work scoped"]} />
      {WORK_TYPES.map((label, i) => (
        <Chip key={label} cx={340} cy={rows[i]} w={176} h={34} label={label} />
      ))}
      <Node
        cx={570}
        cy={AXIS}
        w={150}
        h={60}
        lines={["Product Design", "queue"]}
        stack={2}
      />
      <Node cx={796} cy={AXIS} w={140} h={60} lines={["Build"]} />
    </DiagramSvg>
  );
}

function Mobile() {
  const arrow = "delivery-before-arrow-mobile";
  const rows = [120, 164, 208, 252];

  return (
    <DiagramSvg viewBox="0 0 340 500" title={TITLE} desc={DESC}>
      <ArrowDefs id={arrow} />

      {/* Work scoped out to the left rail, which feeds every work type */}
      <Connector d="M 170 57 C 170 82, 26 78, 26 120" />
      <Connector d={`M 26 ${rows[0]} L 26 ${rows[3]}`} />
      {rows.map((y) => (
        <Connector key={`in-${y}`} d={`M 26 ${y} L 82 ${y}`} markerId={arrow} />
      ))}

      {/* Every work type back out to the right rail, and down into the queue */}
      {rows.map((y) => (
        <Connector key={`out-${y}`} d={`M 258 ${y} L 314 ${y}`} />
      ))}
      <Connector d={`M 314 ${rows[0]} L 314 300`} />
      {/* Lands on the top of the outermost stack layer (334 − 2 × 6), not the
          front node, so the arrowhead isn't painted over by the pile. */}
      <Connector d="M 314 300 C 314 316, 170 312, 170 322" markerId={arrow} />

      {/* Queue → build */}
      <Connector d="M 170 398 L 170 429" markerId={arrow} />

      <Node cx={170} cy={34} w={160} h={46} lines={["Work scoped"]} fontSize={12} />
      {WORK_TYPES.map((label, i) => (
        <Chip key={label} cx={170} cy={rows[i]} w={176} h={32} label={label} />
      ))}
      <Node
        cx={170}
        cy={366}
        w={190}
        h={64}
        lines={["Product Design", "queue"]}
        stack={2}
        stackOffset={6}
        fontSize={12}
        lineHeight={15}
      />
      <Node cx={170} cy={452} w={160} h={46} lines={["Build"]} fontSize={12} />
    </DiagramSvg>
  );
}

export function DeliveryModelBefore() {
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
