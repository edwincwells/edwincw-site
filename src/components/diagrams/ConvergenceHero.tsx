import { CONNECTOR_STYLE } from "./DiagramPrimitives";

/* Hero visual — derived from DIAGRAM 1's convergence: several lanes of work
 * funnelling into one. It states the title before the reader has read a word,
 * and pays off when they reach the full before/after pair.
 *
 * Decorative, so no role="img", no <title>, no <desc> — CaseStudyLayout wraps
 * the hero slot in aria-hidden, and giving hidden content an accessible name
 * would be worse than giving it none.
 *
 * Lines only, on purpose, and it resolves several things at once:
 *   — nothing can be bisected by the frame, because there is no object to cut.
 *     Only lines meet the edges, and a cut line reads as continuation rather
 *     than as a rendering clip;
 *   — nothing terminates on a flat edge. The lowest lane is a curve on its way
 *     up, so the composition has no horizontal floor;
 *   — dark mode has no fills to go heavy on. An earlier version used the node
 *     vocabulary and its --color-surface fills read as solid blocks against
 *     the dark background, much weightier than in light.
 *
 * Both side edges run through a luminance mask so the lanes dissolve out of
 * frame instead of hard-stopping. The black and white in that gradient are
 * mask channels, not colours — nothing here is a hardcoded theme value. */

/* Exported so other convergence figures can supply their own numbers rather
 * than duplicating the renderer — see ConvergenceMark.tsx, which draws the
 * same idea into the Selected Work row's 4:3 box. */
export type Geometry = {
  id: string;
  frameW: number;
  frameH: number;
  /** y at which each lane enters the left edge, outermost first. */
  entries: number[];
  merge: { x: number; y: number };
  /** Control-point x pairs shaping how tightly the outer and inner lanes
   *  funnel. Outer lanes turn earlier so the mouth opens wider. */
  bendOuter: [number, number];
  bendInner: [number, number];
  /** Compensates for scale: mobile renders at ~0.55, so a 1.25 stroke there
   *  would come out under a pixel and go patchy. */
  strokeWidth: number;
};

const DESKTOP: Geometry = {
  id: "hero-converge-desktop",
  frameW: 1176,
  frameH: 260,
  entries: [26, 92, 168, 234],
  merge: { x: 700, y: 130 },
  bendOuter: [260, 420],
  bendInner: [300, 500],
  strokeWidth: 1.25,
};

const MOBILE: Geometry = {
  id: "hero-converge-mobile",
  frameW: 600,
  frameH: 240,
  entries: [20, 85, 155, 220],
  merge: { x: 340, y: 120 },
  bendOuter: [130, 200],
  bendInner: [150, 250],
  strokeWidth: 2,
};

export function Converge({ geometry }: { geometry: Geometry }) {
  const { id, frameW, frameH, entries, merge, bendOuter, bendInner, strokeWidth } =
    geometry;

  const lane = (y: number, index: number) => {
    const isOuter = index === 0 || index === entries.length - 1;
    const [c1, c2] = isOuter ? bendOuter : bendInner;
    return `M 0 ${y} C ${c1} ${y}, ${c2} ${merge.y}, ${merge.x} ${merge.y}`;
  };

  const stroke = {
    ...CONNECTOR_STYLE,
    strokeWidth,
    strokeOpacity: 0.45,
    fill: "none",
  };

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 ${frameW} ${frameH}`}
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className="block h-auto"
    >
      <defs>
        <linearGradient id={`${id}-grad`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" />
          <stop offset="0.10" stopColor="#fff" />
          <stop offset="0.86" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <mask id={`${id}-fade`}>
          <rect
            x="0"
            y="0"
            width={frameW}
            height={frameH}
            fill={`url(#${id}-grad)`}
          />
        </mask>
      </defs>

      <g mask={`url(#${id}-fade)`}>
        {entries.map((y, i) => (
          <path key={y} d={lane(y, i)} style={stroke} />
        ))}
        {/* The single lane out, dissolving through the right edge. */}
        <path
          d={`M ${merge.x} ${merge.y} L ${frameW} ${merge.y}`}
          style={stroke}
        />
      </g>
    </svg>
  );
}

export function ConvergenceHero() {
  return (
    <>
      <div className="hidden md:block">
        <Converge geometry={DESKTOP} />
      </div>
      <div className="md:hidden">
        <Converge geometry={MOBILE} />
      </div>
    </>
  );
}
