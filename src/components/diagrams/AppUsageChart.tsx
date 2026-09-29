import {
  CHIP_LABEL_STYLE,
  DiagramSvg,
  NODE_LABEL_STYLE,
} from "./DiagramPrimitives";

/* VISUAL 4 — app usage at the two beta operators.
 *
 * Evidence rather than argument, so it follows AgentGrouping's rule: no accent.
 * Participating is --color-foreground, the comparison is --color-muted, and
 * everything structural — baseline, parity, the campaign band, the Rewards
 * marker — is --color-hairline. A label takes the colour of its line, except
 * where the line is hairline: hairline is too faint to set type in, so those
 * labels take muted. No ochre; that is the hero's signal and nothing else's.
 *
 * Two panels because the effect shows up in different measures. The US moved
 * sessions per user; the UK moved the number of people using the app. One
 * chart of sessions per user would show the UK line drifting under parity and
 * contradict the prose, and dropping the UK would look like picking the
 * operator that suits the argument. Each panel names its operator and its
 * measure, since the two are not the same thing.
 *
 * Both panels share one month axis, January to August, at the same step, so a
 * month sits at the same x in each and the two read against each other when
 * they are side by side. The US series starts in March — the account was
 * restructured before then — which leaves January and February empty on that
 * panel rather than stretching the US axis to fill it.
 *
 * Drawn 1:1 at the slot's measured widths, as the Salli figures are: 824 at
 * lg and above, where the wide measure is always 824px, and 327 below it. The
 * stacked drawing is shown right up to lg and capped at 400px, so between md
 * and lg it renders at up to 1.22× rather than squeezing the side-by-side
 * drawing below 12px type. Nothing animates; the Figure owns the reveal.
 *
 * SVG presentation attributes (fill="…", stroke="…") do not resolve var() in
 * any current browser, so every colour goes through `style` — same constraint
 * DiagramPrimitives.tsx:7-9 documents. No font family is set; the <text>
 * elements inherit General Sans from body. */

/* The spec's alt text, verbatim. It is the accessible name, and there is no
   <desc>: the caption underneath already carries the method. */
const TITLE =
  "Two line charts. The left shows participating US locations rising from " +
  "about three quarters of the rest of the estate’s sessions per user in " +
  "March to 1.21 times it in August, crossing parity in July. The right " +
  "shows monthly users at participating UK locations rising 39% between " +
  "January and August while users across the rest of the estate fell by " +
  "about 10%.";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

/* Plotted values, straight from the spec tables. `null` is a month with no
   data — the US series before March. */
const US_RATIO = [null, null, 0.74, 0.53, 0.84, 0.91, 1.13, 1.21];
const UK_PARTICIPATING = [100, 105, 108, 107, 116, 120, 131, 139];
const UK_REST = [100, 100, 100, 91, 90, 87, 91, 90];

const FOREGROUND_LINE = { stroke: "var(--color-foreground)" };
const MUTED_LINE = { stroke: "var(--color-muted)" };
const FOREGROUND_DOT = { fill: "var(--color-foreground)" };
const MUTED_DOT = { fill: "var(--color-muted)" };
const HAIRLINE = { stroke: "var(--color-hairline)" };
const BAND_STYLE = { fill: "var(--color-hairline)" };

type Frame = {
  /** Panel origin in the viewBox. */
  x: number;
  y: number;
  /** Plot area, relative to the origin. x0 is January, x1 is August. */
  x0: number;
  x1: number;
  top: number;
  bottom: number;
  /** Measure line of the title; an array when it has to wrap. */
  measure: string[];
};

type Scale = { min: number; max: number; ticks: number[]; format: (v: number) => string };

const US_SCALE: Scale = {
  min: 0.4,
  max: 1.3,
  ticks: [0.5, 0.75, 1, 1.25],
  format: (v) => v.toFixed(2),
};
const UK_SCALE: Scale = {
  min: 80,
  max: 145,
  ticks: [80, 100, 120, 140],
  format: (v) => String(v),
};

function scales(frame: Frame, scale: Scale) {
  const step = (frame.x1 - frame.x0) / (MONTHS.length - 1);
  const x = (i: number) => frame.x + frame.x0 + i * step;
  const y = (v: number) =>
    frame.y +
    frame.bottom -
    ((v - scale.min) / (scale.max - scale.min)) * (frame.bottom - frame.top);
  return { x, y, step };
}

/* Title, baseline, y ticks and month labels — the parts both panels share.
   The operator is foreground at weight 500, the measure muted beneath it, the
   same header-over-content hierarchy AgentGrouping uses. */
function Axes({
  frame,
  scale,
  operator,
}: {
  frame: Frame;
  scale: Scale;
  operator: string;
}) {
  const { x, y } = scales(frame, scale);
  const monthY = frame.y + frame.bottom + 20;

  return (
    <>
      <text
        x={frame.x}
        y={frame.y + 18}
        fontSize="14"
        fontWeight="500"
        style={NODE_LABEL_STYLE}
      >
        {operator}
      </text>
      <text fontSize="14" style={CHIP_LABEL_STYLE}>
        {frame.measure.map((line, i) => (
          <tspan key={line} x={frame.x} y={frame.y + 38 + i * 18}>
            {line}
          </tspan>
        ))}
      </text>

      {/* A light baseline and nothing else — no gridlines, no y-axis rule. */}
      <line
        x1={x(0)}
        y1={frame.y + frame.bottom}
        x2={x(MONTHS.length - 1)}
        y2={frame.y + frame.bottom}
        strokeWidth="1"
        style={HAIRLINE}
      />

      {scale.ticks.map((tick) => (
        <text
          key={tick}
          x={frame.x + frame.x0 - 8}
          y={y(tick)}
          fontSize="12"
          textAnchor="end"
          dominantBaseline="middle"
          style={CHIP_LABEL_STYLE}
        >
          {scale.format(tick)}
        </text>
      ))}

      {MONTHS.map((month, i) => (
        <text
          key={month}
          x={x(i)}
          y={monthY}
          fontSize="12"
          textAnchor="middle"
          style={CHIP_LABEL_STYLE}
        >
          {month}
        </text>
      ))}
    </>
  );
}

/** One plotted series: the line, a dot per month, and its label at the end. */
function Series({
  frame,
  scale,
  values,
  label,
  id,
  muted = false,
}: {
  frame: Frame;
  scale: Scale;
  values: (number | null)[];
  label: string;
  /** Read by the data check, which inverts each dot back to its table value. */
  id: string;
  muted?: boolean;
}) {
  const { x, y } = scales(frame, scale);
  const points = values
    .map((v, i) => (v === null ? null : { i, v, cx: x(i), cy: y(v) }))
    .filter((p) => p !== null);
  const last = points[points.length - 1];

  return (
    <g data-series={id}>
      <polyline
        points={points.map((p) => `${p.cx},${p.cy}`).join(" ")}
        fill="none"
        strokeWidth={muted ? 1.5 : 2}
        strokeLinejoin="round"
        strokeLinecap="round"
        style={muted ? MUTED_LINE : FOREGROUND_LINE}
      />
      {points.map((p) => (
        <circle
          key={p.i}
          cx={p.cx}
          cy={p.cy}
          r="2.5"
          data-value={p.v}
          style={muted ? MUTED_DOT : FOREGROUND_DOT}
        />
      ))}
      <text
        x={last.cx + 8}
        y={last.cy}
        fontSize="14"
        dominantBaseline="middle"
        style={muted ? CHIP_LABEL_STYLE : NODE_LABEL_STYLE}
      >
        {label}
      </text>
    </g>
  );
}

/* Annotations are labelled above the plot rather than inside it, so no label
   can land on a line: the band label and "Rewards live" both sit in the strip
   between the title and the top of the plot area. */
function UsPanel({ frame }: { frame: Frame }) {
  const { x, y, step } = scales(frame, US_SCALE);
  /* May and June are months 4 and 5; the band covers both, edge to edge. */
  const bandX0 = x(4) - step / 2;
  const bandX1 = x(5) + step / 2;

  return (
    <>
      <rect
        x={bandX0}
        y={frame.y + frame.top}
        width={bandX1 - bandX0}
        height={frame.bottom - frame.top}
        fillOpacity="0.5"
        style={BAND_STYLE}
      />
      <text
        x={(bandX0 + bandX1) / 2}
        y={frame.y + frame.top - 10}
        fontSize="12"
        textAnchor="middle"
        style={CHIP_LABEL_STYLE}
      >
        targets live, then campaigns
      </text>

      <Axes frame={frame} scale={US_SCALE} operator="US operator" />

      <line
        x1={x(0)}
        y1={y(1)}
        x2={x(MONTHS.length - 1)}
        y2={y(1)}
        strokeWidth="1"
        strokeDasharray="4 3"
        style={HAIRLINE}
      />
      <text
        x={x(MONTHS.length - 1) + 8}
        y={y(1)}
        fontSize="14"
        dominantBaseline="middle"
        style={CHIP_LABEL_STYLE}
      >
        parity
      </text>

      <Series
        frame={frame}
        scale={US_SCALE}
        values={US_RATIO}
        label="Participating"
        id="us-ratio"
      />
    </>
  );
}

function UkPanel({ frame }: { frame: Frame }) {
  const { x } = scales(frame, UK_SCALE);
  /* Mid-February. Months are plotted at their centres, so that is Feb's x. */
  const markerX = x(1);

  return (
    <>
      <line
        x1={markerX}
        y1={frame.y + frame.top - 4}
        x2={markerX}
        y2={frame.y + frame.bottom}
        strokeWidth="1"
        style={HAIRLINE}
      />
      <text
        x={markerX}
        y={frame.y + frame.top - 10}
        fontSize="12"
        textAnchor="middle"
        style={CHIP_LABEL_STYLE}
      >
        Rewards live
      </text>

      <Axes frame={frame} scale={UK_SCALE} operator="UK operator" />

      <Series
        frame={frame}
        scale={UK_SCALE}
        values={UK_REST}
        label="Rest of estate"
        id="uk-rest"
        muted
      />
      <Series
        frame={frame}
        scale={UK_SCALE}
        values={UK_PARTICIPATING}
        label="Participating"
        id="uk-participating"
      />
    </>
  );
}

const US_MEASURE = "Sessions per user, ratio to rest of estate";
const UK_MEASURE = "Monthly active users, January = 100";

/* Two 392-wide panels with a 40-unit gap. The plot runs 40 → 292 within each,
   a 36-unit month step, leaving 100 on the right for the end labels. */
function Desktop() {
  const plot = { x0: 40, x1: 292, top: 84, bottom: 292 };
  return (
    <DiagramSvg viewBox="0 0 824 328" title={TITLE}>
      <UsPanel frame={{ x: 0, y: 0, ...plot, measure: [US_MEASURE] }} />
      <UkPanel frame={{ x: 432, y: 0, ...plot, measure: [UK_MEASURE] }} />
    </DiagramSvg>
  );
}

/* The same two panels stacked, US above UK. 327 wide so it renders 1:1 at a
   375px viewport; the plot runs 36 → 225, leaving 102 for "Rest of estate". */
function Mobile() {
  const plot = { x0: 36, x1: 225, top: 76, bottom: 224 };
  return (
    <DiagramSvg viewBox="0 0 327 560" title={TITLE}>
      <UsPanel frame={{ x: 0, y: 0, ...plot, measure: [US_MEASURE] }} />
      <UkPanel frame={{ x: 0, y: 300, ...plot, measure: [UK_MEASURE] }} />
    </DiagramSvg>
  );
}

export function AppUsageChart() {
  return (
    <>
      <div className="hidden lg:block">
        <Desktop />
      </div>
      <div className="lg:hidden mx-auto max-w-[400px]">
        <Mobile />
      </div>
    </>
  );
}
