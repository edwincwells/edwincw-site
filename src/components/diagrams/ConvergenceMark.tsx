import { Converge, type Geometry } from "./ConvergenceHero";

/* The convergence figure sized for a Selected Work row's 4:3 box.
 *
 * Rendered rather than exported as a raster on purpose: a .webp would bake in
 * light-mode colours, and every stroke here resolves through --color-primary,
 * so the mark follows the colour scheme the way the rest of the page does.
 *
 * Same renderer as the case study hero, different numbers. The hero is a wide
 * band, so its lanes travel a long way horizontally; a 4:3 box needs more
 * vertical spread over a shorter run, and the merge sits further right to
 * leave less empty single lane.
 *
 * Decorative — Converge already renders aria-hidden. The row's heading and
 * description carry what the entry is, and an abstract line figure has nothing
 * to announce that they don't already say. */

/* Desktop and mobile differ only in id and stroke: the box is 4:3 at both
 * breakpoints but renders around 560px wide against 327px, so a stroke tuned
 * for one goes sub-pixel and patchy at the other. */
const DESKTOP: Geometry = {
  id: "work-converge-desktop",
  frameW: 800,
  frameH: 600,
  entries: [100, 230, 370, 500],
  merge: { x: 540, y: 300 },
  bendOuter: [190, 330],
  bendInner: [230, 400],
  strokeWidth: 1.5,
};

const MOBILE: Geometry = {
  ...DESKTOP,
  id: "work-converge-mobile",
  strokeWidth: 2.75,
};

export function ConvergenceMark() {
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
