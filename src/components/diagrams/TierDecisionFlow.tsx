import {
  ArrowDefs,
  Connector,
  DiagramSvg,
  EdgeLabel,
  Node,
} from "./DiagramPrimitives";

/* DIAGRAM 3 — how a piece of work gets its tier.
 *
 * Four questions in sequence. A yes to any one routes to Tier 1; only work
 * that answers no to all four is Tier 2. That asymmetry is the whole point, so
 * the geometry carries it: every yes leaves the chain immediately onto a
 * shared rail, and the chain itself is the no path.
 *
 * The four criteria are Edwin's tier guidance verbatim — they are line-broken
 * to fit, never reworded.
 *
 * No entry node, deliberately. D1 and D2 both open on "Work scoped", but this
 * diagram zooms into a single step rather than continuing that flow, so
 * reusing the same entry would misplace the reader. The questions are self-
 * evidently the start.
 *
 * Desktop runs the chain horizontally with the yes rail above it; mobile runs
 * it vertically with the rail down the right. Same content, same logic, no
 * simplified variant — this diagram is the authoritative statement of the
 * rules, and two versions of that could drift apart. */

const TITLE = "Diagram: how work is assigned to a tier";
const DESC =
  "Four questions are asked in sequence: is it a key flow or hero feature; " +
  "is it new, a revamp or structurally significant; does it cross product " +
  "areas or shared platform features; does it need a new design system " +
  "component or pattern. A yes to any one of them routes the work to Tier 1. " +
  "Only work that answers no to all four goes to Tier 2.";

const DESKTOP_CRITERIA = [
  ["Key flow or", "hero feature?"],
  ["New, revamp or", "structurally", "significant?"],
  ["Crosses product", "areas or shared", "platform features?"],
  ["Needs a new design", "system component", "or pattern?"],
];

const MOBILE_CRITERIA = [
  ["Key flow or hero", "feature?"],
  ["New, revamp or", "structurally significant?"],
  ["Crosses product areas", "or shared platform", "features?"],
  ["Needs a new design system", "component or pattern?"],
];

function Desktop() {
  const arrow = "tier-decision-arrow-desktop";
  /* Frame kept tight to the content so the figure doesn't carry a large empty
     upper-left quadrant: the chain runs through the vertical centre and both
     outcomes stack on the right, so weight sits on both axes. */
  const railY = 52;
  const chainY = 158;
  const xs = [82, 262, 442, 622];
  const nodeW = 150;
  const half = nodeW / 2;
  const nodeTop = chainY - 46;
  const tierX = 795;

  return (
    <DiagramSvg viewBox="0 0 880 240" title={TITLE} desc={DESC}>
      <ArrowDefs id={arrow} />

      {/* Every yes leaves the chain upward onto one shared rail. The branches
          curve into the rail like tributaries rather than meeting it at a
          right angle — four parallel verticals under a horizontal line read as
          a row of empty boxes, which is not what is being drawn. The stubs are
          unarrowed; the rail carries the single arrow into Tier 1. */}
      {xs.map((x) => (
        <Connector
          key={`yes-${x}`}
          d={`M ${x} ${nodeTop} C ${x} ${nodeTop - 28}, ${x + 16} ${railY}, ${x + 46} ${railY}`}
        />
      ))}
      <Connector d={`M ${xs[0] + 46} ${railY} L 730 ${railY}`} markerId={arrow} />

      {/* The chain itself is the no path. */}
      <Connector d={`M ${xs[0] + half} ${chainY} L ${xs[1] - half} ${chainY}`} markerId={arrow} />
      <Connector d={`M ${xs[1] + half} ${chainY} L ${xs[2] - half} ${chainY}`} markerId={arrow} />
      <Connector d={`M ${xs[2] + half} ${chainY} L ${xs[3] - half} ${chainY}`} markerId={arrow} />
      <Connector d={`M ${xs[3] + half} ${chainY} L 730 ${chainY}`} markerId={arrow} />

      {/* Left of the branch, which bends right — keeps label and line apart. */}
      {xs.map((x) => (
        <EdgeLabel key={`yl-${x}`} x={x - 8} y={88} text="Yes" anchor="end" />
      ))}
      <EdgeLabel x={172} y={chainY - 10} text="No" />
      <EdgeLabel x={352} y={chainY - 10} text="No" />
      <EdgeLabel x={532} y={chainY - 10} text="No" />
      <EdgeLabel x={713} y={chainY - 10} text="No" />

      {DESKTOP_CRITERIA.map((lines, i) => (
        <Node
          key={lines[0]}
          cx={xs[i]}
          cy={chainY}
          w={nodeW}
          h={92}
          lines={lines}
        />
      ))}

      {/* Eyebrow-only, so a tier reads as the same object it is in DIAGRAM 2. */}
      <Node cx={tierX} cy={railY} w={130} h={56} lines={[]} eyebrow="TIER 1" />

      <Node cx={tierX} cy={chainY} w={130} h={56} lines={[]} eyebrow="TIER 2" />
    </DiagramSvg>
  );
}

function Mobile() {
  const arrow = "tier-decision-arrow-mobile";
  const railX = 300;
  const chainX = 120;
  const ys = [60, 170, 280, 390];
  const nodeH = 78;
  const half = nodeH / 2;
  const nodeRight = chainX + 100;

  return (
    <DiagramSvg viewBox="0 0 340 545" title={TITLE} desc={DESC}>
      <ArrowDefs id={arrow} />

      {/* Same tributary treatment as desktop, rotated: the branch leaves the
          node's right edge and bends down into the rail. */}
      {ys.map((y) => (
        <Connector
          key={`yes-${y}`}
          d={`M ${nodeRight} ${y} C ${nodeRight + 32} ${y}, ${railX - 24} ${y + 6}, ${railX} ${y + 24}`}
        />
      ))}
      <Connector d={`M ${railX} ${ys[0] + 24} L ${railX} 452`} />
      <Connector d={`M ${railX} 452 C ${railX} 466, 255 462, 255 474`} markerId={arrow} />

      <Connector d={`M ${chainX} ${ys[0] + half} L ${chainX} ${ys[1] - half}`} markerId={arrow} />
      <Connector d={`M ${chainX} ${ys[1] + half} L ${chainX} ${ys[2] - half}`} markerId={arrow} />
      <Connector d={`M ${chainX} ${ys[2] + half} L ${chainX} ${ys[3] - half}`} markerId={arrow} />
      <Connector d={`M ${chainX} ${ys[3] + half} C ${chainX} 450, 95 452, 95 474`} markerId={arrow} />

      {ys.map((y) => (
        <EdgeLabel key={`yl-${y}`} x={252} y={y - 13} text="Yes" />
      ))}
      <EdgeLabel x={132} y={115} text="No" anchor="start" />
      <EdgeLabel x={132} y={225} text="No" anchor="start" />
      <EdgeLabel x={132} y={335} text="No" anchor="start" />
      <EdgeLabel x={132} y={445} text="No" anchor="start" />

      {MOBILE_CRITERIA.map((lines, i) => (
        <Node
          key={lines[0]}
          cx={chainX}
          cy={ys[i]}
          w={200}
          h={nodeH}
          lines={lines}
          fontSize={12}
          lineHeight={15}
        />
      ))}

      <Node cx={95} cy={500} w={140} h={52} lines={[]} eyebrow="TIER 2" fontSize={12} />
      <Node cx={255} cy={500} w={140} h={52} lines={[]} eyebrow="TIER 1" fontSize={12} />
    </DiagramSvg>
  );
}

export function TierDecisionFlow() {
  return (
    <>
      <div className="hidden md:block">
        <Desktop />
      </div>
      {/* Capped: the mobile geometry is drawn for ~340 units, and an uncapped
          SVG keeps scaling with its container, so by 767px it renders half
          again as tall for no gain in legibility. See DiagramPrimitives. */}
      <div className="md:hidden mx-auto max-w-[400px]">
        <Mobile />
      </div>
    </>
  );
}
