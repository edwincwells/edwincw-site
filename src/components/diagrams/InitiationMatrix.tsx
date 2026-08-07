import { DiagramSvg } from "./DiagramPrimitives";

/* VISUAL 6 — who starts, and when.
 *
 * The essay's argument diagram. Two independent dimensions, not one spectrum:
 * who initiates the session, and who sets the content. Cowork is not a midpoint
 * between the agent library and the alerts — it is a different combination, and
 * the composition has to say so. A slider or a single axis would quietly assert
 * the opposite, which is why this is a cross with four plotted corners.
 *
 * The four positions form a rectangle. Library and Cowork share a y, alerts and
 * the vacant combination share a y, library and the vacant combination share an
 * x, Cowork and alerts share an x. That is what makes the empty corner read as
 * a hole in a grid rather than as something merely absent — and the empty
 * corner is the point, because it shows the two axes are genuinely independent.
 *
 * The vacant combination carries no dot and no number, deliberately. A dot
 * would plot it as a fourth mode; a number would put it in the sequence.
 *
 * viewBox 824×464 is the slot's measured box at 1280px, so the drawing renders
 * 1:1 there and 14 units is a true 14px, matching .text-small. Below that the
 * SVG scales with its container like any viewBox, so the type goes under 14px
 * between md and roughly 1016px — the accepted trade, and the reason mobile is
 * a table instead.
 *
 * SVG presentation attributes (fill="…", stroke="…") do not resolve var() in
 * any current browser, so every colour goes through `style` — same constraint
 * DiagramPrimitives.tsx:7-9 documents.
 *
 * No font family is set here, unlike the other four diagrams: the <text>
 * elements inherit General Sans from body. */

const TITLE = "Diagram: who initiates a session, and who sets its content";
const DESC =
  "Two independent axes. The vertical axis is who initiates the session, " +
  "person above and system below. The horizontal axis is who sets the " +
  "content, person to the left and system to the right. The agent library " +
  "sits top left: the person initiates the session and sets the content. " +
  "Alerts sit bottom right: the system does both. Cowork sits top right: the " +
  "person initiates the session and the system sets the content. The bottom " +
  "left combination, where the system initiates and the person sets the " +
  "content, has no sensible mode. Cowork is a different combination rather " +
  "than a midpoint between the other two.";

/* --color-hairline rather than --color-border: border measures about 1.13:1
   against the page in light mode, which leaves the cross all but invisible at
   the one breakpoint where it is the whole structure. Hairline is also what
   NODE_STYLE uses for every drawn stroke in the other diagrams. */
const AXIS_STYLE = { stroke: "var(--color-hairline)" };
const POLE_STYLE = { fill: "var(--color-muted)" };
const MUTED_DOT_STYLE = { fill: "var(--color-muted)" };
const ACCENT_STYLE = { fill: "var(--color-primary)" };
const LABEL_STYLE = { fill: "var(--color-foreground)" };

/* En dash with spaces, not a hyphen — these match the numbering in the prose. */
const POINTS = [
  { label: "1 – Agent library", x: 292, y: 154, accent: false, dot: true },
  { label: "3 – Cowork", x: 532, y: 154, accent: true, dot: true },
  { label: "2 – Alerts", x: 532, y: 310, accent: false, dot: true },
  { label: "no sensible mode", x: 292, y: 310, accent: false, dot: false },
];

/* Labels sit below and to the left of their dot, start-anchored at the same
   offset in both columns, so each column aligns on its own left edge. The left
   column's labels run out well short of the vertical axis and the right
   column's well short of the frame, so nothing collides at any point. */
const LABEL_DX = -10;
const LABEL_DY = 26;

function Desktop() {
  return (
    <DiagramSvg viewBox="0 0 824 464" title={TITLE} desc={DESC}>
      {/* A plain cross. No frame and no boxed grid — a box would read as a
          bounded space with an inside and an outside, when the argument is
          about two open-ended dimensions. */}
      <line
        x1="412"
        y1="56"
        x2="412"
        y2="408"
        strokeWidth="2"
        style={AXIS_STYLE}
      />
      <line
        x1="182"
        y1="232"
        x2="642"
        y2="232"
        strokeWidth="2"
        style={AXIS_STYLE}
      />

      <text
        x="412"
        y="36"
        fontSize="14"
        textAnchor="middle"
        style={POLE_STYLE}
      >
        person initiates session
      </text>
      <text
        x="412"
        y="436"
        fontSize="14"
        textAnchor="middle"
        style={POLE_STYLE}
      >
        system initiates session
      </text>
      <text
        x="168"
        y="232"
        fontSize="14"
        textAnchor="end"
        dominantBaseline="middle"
        style={POLE_STYLE}
      >
        person sets content
      </text>
      <text
        x="656"
        y="232"
        fontSize="14"
        textAnchor="start"
        dominantBaseline="middle"
        style={POLE_STYLE}
      >
        system sets content
      </text>

      {POINTS.map((point) => (
        <g key={point.label}>
          {point.dot && (
            <circle
              cx={point.x}
              cy={point.y}
              r="5"
              style={point.accent ? ACCENT_STYLE : MUTED_DOT_STYLE}
            />
          )}
          <text
            x={point.x + LABEL_DX}
            y={point.y + LABEL_DY}
            fontSize="14"
            fontWeight={point.accent ? 500 : 400}
            style={
              point.accent
                ? ACCENT_STYLE
                : point.dot
                  ? LABEL_STYLE
                  : POLE_STYLE
            }
          >
            {point.label}
          </text>
        </g>
      ))}
    </DiagramSvg>
  );
}

/* The cross is unreadable at 327px and the type can't go below 14px to make it
   fit, so mobile states the same three combinations as a table. Real table
   markup rather than SVG <text> rows: the type holds a true 14px instead of
   scaling with a viewBox, the cells wrap properly, and a screen reader gets
   real row and column semantics. Figure's svg variant takes arbitrary children,
   so nothing here has to be an <svg>.

   The vacant combination is dropped, not shown as an empty row. On desktop its
   position in the grid is the argument; in a table of modes it would just be a
   blank line, and the axes it demonstrates are already named in the headers. */
function Mobile() {
  return (
    <table className="text-small w-full border-collapse text-left">
      {/* Named rather than described: DESC narrates the desktop cross — its
          axes, its left and right — which would be actively misleading read
          against a table. The columns carry that meaning here. */}
      <caption className="sr-only">
        Who initiates the session and who sets the content, by mode
      </caption>
      {/* The headers are the only thing here long enough to wrap at 327px, and
          both wrap to two lines. Left alone they break before "by" and leave it
          orphaned on a line of its own, so the qualifier is bound with a
          non-breaking space: the only break opportunity left is after the first
          word, giving "Session" / "initiated by" and "Content" / "set by".
          align-top then keeps the two headers on a shared first line instead of
          one centring against the other, and the mode names carry nowrap so the
          wrap only ever happens in those two deliberate places. Above md there
          is room for all three on one line and none of this applies. */}
      <thead>
        <tr className="text-[var(--color-muted)]">
          <th scope="col" className="font-normal" />
          <th scope="col" className="py-2 pr-4 align-top font-normal">
            {"Session initiated\u00A0by"}
          </th>
          <th scope="col" className="py-2 align-top font-normal">
            {"Content set\u00A0by"}
          </th>
        </tr>
      </thead>
      <tbody className="text-[var(--color-foreground)]">
        <tr className="border-t border-[var(--color-border)]">
          <th scope="row" className="py-3 pr-4 text-left font-normal whitespace-nowrap">
            1 – Agent library
          </th>
          <td className="py-3 pr-4">person</td>
          <td className="py-3">person</td>
        </tr>
        <tr className="border-t border-[var(--color-border)]">
          <th scope="row" className="py-3 pr-4 text-left font-normal whitespace-nowrap">
            2 – Alerts
          </th>
          <td className="py-3 pr-4">system</td>
          <td className="py-3">system</td>
        </tr>
        <tr className="border-t border-[var(--color-border)] text-[var(--color-primary)]">
          <th scope="row" className="py-3 pr-4 text-left font-medium whitespace-nowrap">
            3 – Cowork
          </th>
          <td className="py-3 pr-4">person</td>
          <td className="py-3">system</td>
        </tr>
      </tbody>
    </table>
  );
}

export function InitiationMatrix() {
  return (
    <>
      <div className="hidden md:block">
        <Desktop />
      </div>
      <div className="md:hidden">
        <Mobile />
      </div>
    </>
  );
}
