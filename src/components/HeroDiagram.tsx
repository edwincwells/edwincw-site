"use client";

import { useEffect, useState } from "react";

const NODE_FILL = "#F7F5F1";
const NODE_STROKE = "#D1D5DB";
const NEAR_BLACK = "#111214";
const PATH_STROKE = "#124E66";
const SIGNAL = "#B8804A";

const NODE_W = 130;
const NODE_H = 48;

type NodeDef = {
  id: string;
  label: string;
  cx: number;
  cy: number;
  enterDelay: number;
  pulseDelay: number;
};

type PathDef = {
  id: string;
  d: string;
  enterDelay: number;
};

type DiagramGeometry = {
  viewBox: string;
  nodes: NodeDef[];
  paths: PathDef[];
  loopPath: string;
  intent: { cx: number; cy: number };
};

const DESKTOP: DiagramGeometry = {
  viewBox: "0 0 550 500",
  nodes: [
    { id: "intent",       label: "Intent",       cx: 120, cy: 90,  enterDelay: 0.1, pulseDelay: 2.4 },
    { id: "transparency", label: "Transparency", cx: 420, cy: 140, enterDelay: 0.6, pulseDelay: 4.0 },
    { id: "trust",        label: "Trust",        cx: 460, cy: 330, enterDelay: 1.0, pulseDelay: 5.6 },
    { id: "adoption",     label: "Adoption",     cx: 280, cy: 430, enterDelay: 1.4, pulseDelay: 7.2 },
    { id: "growth",       label: "Growth",       cx: 80,  cy: 290, enterDelay: 1.8, pulseDelay: 8.8 },
  ],
  paths: [
    { id: "d-p1", d: "M 185 90 C 250 50, 330 80, 355 140",    enterDelay: 0.3 },
    { id: "d-p2", d: "M 420 164 C 510 200, 510 270, 460 306", enterDelay: 0.8 },
    { id: "d-p3", d: "M 460 354 C 440 400, 400 425, 345 430", enterDelay: 1.2 },
    { id: "d-p4", d: "M 215 430 C 140 440, 70 390, 80 314",   enterDelay: 1.6 },
    { id: "d-p5", d: "M 80 266 C 30 220, 50 130, 120 114",    enterDelay: 2.0 },
  ],
  loopPath:
    "M 185 90 " +
    "C 250 50, 330 80, 355 140 " +
    "L 420 164 " +
    "C 510 200, 510 270, 460 306 " +
    "L 460 354 " +
    "C 440 400, 400 425, 345 430 " +
    "L 215 430 " +
    "C 140 440, 70 390, 80 314 " +
    "L 80 266 " +
    "C 30 220, 50 130, 120 114 " +
    "L 185 90 Z",
  intent: { cx: 120, cy: 90 },
};

const MOBILE: DiagramGeometry = {
  viewBox: "0 0 320 460",
  nodes: [
    { id: "intent",       label: "Intent",       cx: 160, cy: 40,  enterDelay: 0.1, pulseDelay: 2.4 },
    { id: "transparency", label: "Transparency", cx: 250, cy: 140, enterDelay: 0.6, pulseDelay: 4.0 },
    { id: "trust",        label: "Trust",        cx: 210, cy: 260, enterDelay: 1.0, pulseDelay: 5.6 },
    { id: "adoption",     label: "Adoption",     cx: 110, cy: 350, enterDelay: 1.4, pulseDelay: 7.2 },
    { id: "growth",       label: "Growth",       cx: 70,  cy: 160, enterDelay: 1.8, pulseDelay: 8.8 },
  ],
  paths: [
    { id: "m-p1", d: "M 160 64 C 175 95, 170 120, 185 140",    enterDelay: 0.3 },
    { id: "m-p2", d: "M 250 164 C 275 190, 240 220, 210 236",  enterDelay: 0.8 },
    { id: "m-p3", d: "M 210 284 C 205 315, 195 340, 175 350",  enterDelay: 1.2 },
    { id: "m-p4", d: "M 110 326 C 30 300, 15 220, 70 184",     enterDelay: 1.6 },
    { id: "m-p5", d: "M 70 136 C 50 100, 70 50, 95 40",        enterDelay: 2.0 },
  ],
  loopPath:
    "M 160 64 " +
    "C 175 95, 170 120, 185 140 " +
    "L 250 164 " +
    "C 275 190, 240 220, 210 236 " +
    "L 210 284 " +
    "C 205 315, 195 340, 175 350 " +
    "L 110 326 " +
    "C 30 300, 15 220, 70 184 " +
    "L 70 136 " +
    "C 50 100, 70 50, 95 40 " +
    "L 160 64 Z",
  intent: { cx: 160, cy: 40 },
};

const ANIMATION_CSS = `
@keyframes hero-diagram-node-enter {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes hero-diagram-path-draw {
  from { stroke-dashoffset: 1; }
  to   { stroke-dashoffset: 0; }
}
@keyframes hero-diagram-signal-appear {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes hero-diagram-node-pulse {
  0%     { transform: scale(1); }
  1.875% { transform: scale(1.03); }
  3.75%  { transform: scale(1); }
  100%   { transform: scale(1); }
}
.hero-diagram-node-enter {
  transform-box: fill-box;
  transform-origin: center;
  animation: hero-diagram-node-enter 300ms ease-out both;
}
.hero-diagram-node-pulse {
  transform-box: fill-box;
  transform-origin: center;
  animation: hero-diagram-node-pulse 8s ease-in-out infinite;
}
.hero-diagram-path {
  stroke-dasharray: 1;
  animation: hero-diagram-path-draw 400ms ease-out both;
}
.hero-diagram-signal {
  animation: hero-diagram-signal-appear 300ms ease-out both 2.8s;
}
`;

function Diagram({
  geometry,
  reducedMotion,
  loopId,
}: {
  geometry: DiagramGeometry;
  reducedMotion: boolean;
  loopId: string;
}) {
  return (
    <svg
      role="img"
      aria-label="Diagram: Trust UX as a growth loop"
      viewBox={geometry.viewBox}
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className="block h-auto"
    >
      <title>Diagram: Trust UX as a growth loop</title>
      <desc>
        A five-node loop showing how user intent flows through transparency
        into trust, which drives adoption and growth, which in turn creates
        new intent.
      </desc>

      {/* Invisible continuous motion track (references the same geometry as the 5 visible paths) */}
      <path id={loopId} d={geometry.loopPath} fill="none" stroke="none" />

      {/* Visible paths — drawn on entrance */}
      {geometry.paths.map((p) => (
        <path
          key={p.id}
          d={p.d}
          fill="none"
          stroke={PATH_STROKE}
          strokeOpacity="0.5"
          strokeWidth="1"
          pathLength="1"
          className={reducedMotion ? undefined : "hero-diagram-path"}
          style={
            reducedMotion ? undefined : { animationDelay: `${p.enterDelay}s` }
          }
        />
      ))}

      {/* Nodes — entrance scale/opacity on the outer wrapper, pulse on the inner */}
      {geometry.nodes.map((n) => (
        <g key={n.id} transform={`translate(${n.cx} ${n.cy})`}>
          <g
            className={reducedMotion ? undefined : "hero-diagram-node-enter"}
            style={
              reducedMotion
                ? undefined
                : { animationDelay: `${n.enterDelay}s` }
            }
          >
            <g
              className={reducedMotion ? undefined : "hero-diagram-node-pulse"}
              style={
                reducedMotion
                  ? undefined
                  : { animationDelay: `${n.pulseDelay}s` }
              }
            >
              <rect
                x={-NODE_W / 2}
                y={-NODE_H / 2}
                width={NODE_W}
                height={NODE_H}
                rx="6"
                fill={NODE_FILL}
                stroke={NODE_STROKE}
                strokeWidth="0.8"
              />
              <text
                x="0"
                y="0"
                fill={NEAR_BLACK}
                fontFamily="var(--font-sans), system-ui, sans-serif"
                fontSize="13"
                fontWeight="500"
                letterSpacing="0.04em"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {n.label}
              </text>
            </g>
          </g>
        </g>
      ))}

      {/* Signal — animated along the loop, or static at Intent when reduced */}
      {reducedMotion ? (
        <g>
          <circle
            cx={geometry.intent.cx}
            cy={geometry.intent.cy}
            r="8"
            fill={SIGNAL}
            opacity="0.25"
          />
          <circle
            cx={geometry.intent.cx}
            cy={geometry.intent.cy}
            r="4"
            fill={SIGNAL}
          />
        </g>
      ) : (
        <g className="hero-diagram-signal" opacity="0">
          <circle cx="0" cy="0" r="8" fill={SIGNAL} opacity="0.25" />
          <circle cx="0" cy="0" r="4" fill={SIGNAL} />
          <animateMotion dur="8s" repeatCount="indefinite" begin="2.4s">
            <mpath href={`#${loopId}`} />
          </animateMotion>
        </g>
      )}
    </svg>
  );
}

export function HeroDiagram() {
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mql.matches);
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return (
    <div className="w-full max-w-[550px] mx-auto">
      {!reducedMotion && <style>{ANIMATION_CSS}</style>}
      <div className="hidden md:block">
        <Diagram
          geometry={DESKTOP}
          reducedMotion={reducedMotion}
          loopId="hero-diagram-loop-desktop"
        />
      </div>
      <div className="md:hidden">
        <Diagram
          geometry={MOBILE}
          reducedMotion={reducedMotion}
          loopId="hero-diagram-loop-mobile"
        />
      </div>
    </div>
  );
}
