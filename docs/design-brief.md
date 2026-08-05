# edwincw.com — Design Brief & Build Plan

> Self-contained design brief and build plan for a full rebuild of edwincw.com. If this conversation is hitting context limits, paste this document into a new Claude chat with: *"I'm rebuilding my personal site with Claude Code. Here's the full design brief. We're about to run Prompt N. Please pick up where the previous chat left off."*
>
> All decisions below are locked. Do not re-open unless Edwin explicitly asks.

---

## 1. Context

**Person:** Edwin Collings-Wells. Director of UX at Harri (enterprise HCM platform). Based in Bournemouth, UK. Leads a globally distributed design team of 6, with cross-functional influence across 50+ product, engineering, and commercial colleagues.

**Existing assets:**
- Current site: edwincw.com (built in Framer — being replaced)
- Portfolio: portfolio.edwincw.com (slide-based case study site) — **superseded by Prompt 10.** Case studies are migrating onto this site at `/work/[slug]`, starting with "The bottleneck was us". The nav's "Case Studies" link still points at the portfolio for now; it moves once enough case studies have migrated (Prompt 12+). The portfolio itself is unchanged.
- FluxUX: AI app built in v0, currently hosted separately
- Case studies: Rewards & Recognition, Salli (agentic AI companion)

**Working preferences:** Concise, direct, evaluative. Pushes back on drafts rather than accepting wholesale — takes the push-back seriously when it happens, Edwin's editorial judgment has consistently improved drafts during strategy work. Prefers brevity over comprehensiveness. Responds well to candid critique without diplomatic hedging.

**Terminal/infrastructure patterns:** Comfortable with npm and git basics but wants exact commands for anything non-routine. Asks good infrastructure questions (DevTools, git auth, config options) — treat as real questions, not hand-waves. Prefers explicit steps over "figure it out."

---

## 2. Strategy & Positioning

**Purpose of the rebuild:**
Personal brand and positioning tool. First place hiring managers visit after receiving an application. Job is to **confirm**, not re-pitch — visitors already have the CV; the site makes them lean in and think "this is the real thing."

**Hero tagline (exact):** Experience Strategy & Product Leadership

**Hero subtitle (exact):** Designing intelligent product experiences that drive growth, adoption and trust.

**Positioning thread:** AI-enabled product experience at enterprise scale. Differentiates Edwin from most design leaders — few can credibly claim hands-on AI product work (FluxUX, Salli) *and* enterprise scale (Harri) *and* strategic framing.

**The CV is deliberately not linked** on this site. Signals selectivity and seniority. CV is shared in applications and direct conversations only.

---

## 3. Design Direction (the animating idea)

**One-line summary:**
Editorial publication meets systems diagram.

**Full:**
An editorial site with the quiet confidence of a considered magazine, anchored by a single conceptual-kinetic hero that behaves like a diagram coming into focus. Serif accents and measured teal colour carry warmth; greyscale hierarchy carries rigour; small micro-interactions throughout signal taste without shouting.

**Tone axes:**
- Warm > cool
- Serious with character (not playful, but not austere)
- Spacious > dense
- Accent-led colour (teal + ochre) sitting on disciplined greyscale hierarchy
- Kinetic energy present but restrained — Browser Company register, never Rauno register

**Reference register:**
- Browser Company (thebrowser.company) — editorial micro-interactions, taste/POV signalling
- Linear (linear.app) — colour discipline, typographic rigour
- Rauno (rauno.me) — explicitly *too technical*, wrong register for a design leader positioning
- Craig Mod — explicitly *too restrained*, not design-forward enough

**What we're ruling out:**
- Cursor followers, custom cursors
- Magnetic buttons
- Parallax on scroll
- Horizontal scroll sections
- Scroll-triggered counters
- Page-transition animations
- Generic SaaS landing-page aesthetics

---

## 4. Content Architecture

### Homepage (single long-scroll page)

Five sections, in order:

**1. Hero**
- Name (serif italic)
- Positioning: "Experience Strategy & Product Leadership"
- Subtitle: "Designing intelligent product experiences that drive growth, adoption and trust."
- Conceptual-kinetic diagram (see §6 — the signature moment)
- Asymmetric 55/45 layout on desktop (type left, diagram right)
- Stacked on mobile

**2. Thesis**
- Eyebrow: "On designing trust"
- Title: "What experience strategy means when the product can think back"
- Single-column, narrow (680px reading width), centred on page
- **Body copy (LOCKED — ~235 words, finalised 2026-04-22). Five paragraphs. Loop line in the final paragraph (Intent → Transparency → Trust → Adoption → Growth) wrapped in `<span class="font-semibold">` — deliberate one-off exception to §5.2's "500 Medium preferred" rule; it's the typographic bridge from thesis prose to the hero diagram's node labels.**

  > Until recently, trust in enterprise software was someone else's job. Sales vouched for the product. Customer Success absorbed the failures. Data and Security teams handled the technical integrity. The buyer trusted the people; the end user tolerated the software.
  >
  > That model breaks when the product itself starts making judgment calls.
  >
  > Agentic workflows and chat interfaces have changed the relationship. A frontline manager acting on an AI recommendation isn't trusting a brand or an account team. They're trusting the product, in real time, on a decision that affects their work, their team, their numbers. There's no human between them and the model. Trust has become a UX problem, and an urgent one.
  >
  > In practice, this means three moves. Understand user intent more precisely than before, not just what they asked for, but what they'd accept if the product got it wrong. Pattern transparency and feedback into the interface itself, so users can read the product's reasoning without having to ask for it. And surface ROI in-product, so trust compounds into adoption rather than stalling at tolerance.
  >
  > **Intent → Transparency → Trust → Adoption → Growth.** This is the loop. It's how software earns its place in workflows that can't afford to be wrong.

**3. Selected work** — 3 teasers, in this order:
1. **Salli** — "Reimagining Workforce Management Through Agentic AI" — "Designing a proactive intelligence layer to guide frontline decision-making at scale" — links to portfolio.edwincw.com (new tab)
2. **Rewards & Recognition** — "Designing Employee Engagement as a Platform Growth Lever" — "How Rewards & Recognition became a platform growth lever – and a commercial differentiator" — links to portfolio.edwincw.com (new tab)
3. **FluxUX** — title and one-liner TBD (Edwin to provide) — links to FluxUX (new tab)

Layout: **staggered editorial rows**, alternating image-left / image-right / image-left. Full-width rows with generous vertical separation. NOT a three-up card grid.

**4. Credentials strip** — 2×2 grid on desktop, 1×4 stack on mobile:
- Current role: Director of UX, Harri
- Cross-functional influence: 50+
- Sectors: Enterprise HCM & Workforce Platforms
- Team: Globally distributed team of 6

No tag chips. Clean grid. Each cell: small label + value.

**5. Contact**
- Email: ed.collings.wells@gmail.com
- LinkedIn: linkedin.com/in/edwincw/
- Location: Bournemouth & London
- Single centred block, narrow

### Navigation

- Home · About · Case Studies · Contact
- "Case Studies" links out to portfolio.edwincw.com (new tab)
- No CV link (deliberate — signals selectivity)
- No FluxUX link (folded into Selected Work)
- Mark on the left: "EC-W" text mark, links to `/`

### About page (separate, deferred build after homepage)

Route: `/about`. File: `src/app/about/page.tsx` (does not yet exist). Reuses `Container`, `Section`, typography classes, and the Tier 2 scroll-reveal mechanism from the homepage — no new design primitives needed.

**Job of the page:** humanise, credential, open a warmer contact moment. Does NOT re-state positioning (homepage hero does that) or re-argue the thesis (homepage thesis section does that). One page, one photo, one piece of writing, one way to get in touch.

**Layout (Option A — single column, centred):**
- `Container width="narrow"` (680px reading width), matching the thesis section's composition
- Section vertical padding consistent with the rest of the site (`Section` primitive)
- Order, top to bottom:
  1. Eyebrow: "About"
  2. `<h1>` title: "Edwin Collings-Wells"
  3. Photo — see spec below
  4. Prose body (five paragraphs)
  5. Small eyebrow: "Get in touch"
  6. Contact block — reuses the homepage `Contact.tsx` prose pattern exactly (two centred sentences with inline `.link` anchors); DO NOT introduce a button, form, or repeated location line
- No CV link anywhere. No location repetition in the contact block — the location sentence already lives in the final prose paragraph.

**Photo spec:**
- One photo, Edwin has a suitable image ready
- Sits above the prose, left-aligned (not centred), ~400px wide on desktop
- Environmental/editorial register — NOT a corporate headshot, NOT a LinkedIn-style portrait
- Black and white or muted acceptable; natural light preferred
- File lives in `public/about/` (create directory when building). Use `next/image` with explicit `width`/`height` and appropriate `alt` text.
- Rounded corners: `--radius-md` (8px) to match other image treatments

**Body copy (LOCKED — ~240 words). Five paragraphs:**

> I'm Director of UX at Harri, a global enterprise HCM platform used by two million frontline workers each month. I lead a globally distributed design team of six, working across product, engineering, and commercial functions.
>
> Before I worked in software, I spent years in hospitality operations, running high-volume bars and restaurants. In my last role before moving into design, I led a team of 80. I was on the other side of the users I now design for, and that perspective still shapes how I think about software built for work that can't afford to be wrong.
>
> The problem I find most compelling is multi-product platform coherence: making a complex suite of tools feel like a single, considered experience rather than a collection of features. It's harder than it looks, and it's where I do my best work.
>
> Right now I'm especially focused on what AI changes about this. Designing Salli, an agentic AI companion for frontline decision-making at scale, and building FluxUX, a small independent experiment in AI-powered tools for designers, has convinced me that the design teams who learn to build trust into these systems will shape the next era of enterprise software.
>
> I'm based between Bournemouth and London. Always happy to talk about work, AI in enterprise, or the smallholding I'm quietly planning on the side.

**Contact block (LOCKED — reuses homepage `Contact.tsx` prose pattern):**

Two centred sentences, same `.link` styling as homepage (teal hover, animated underline-offset). Exact wording to be finalised during build, but pattern:
- Sentence 1: invites email/LinkedIn with inline `.link` anchors
- Sentence 2 (optional, quieter): any small closing line in muted grey

Match the homepage Contact block's styling and tone exactly — this is a deliberate consistency move, not an opportunity to invent a new pattern.

**When this page ships, revert `prefetch={false}` on the About link in `Nav.tsx`** (added in Prompt 8 to prevent RSC 404 — see §10).

**Known issue at ship, resolved in Prompt 9.2:** mobile horizontal scroll was observed in local dev-server emulation but did not reproduce on the deployed Netlify build. Issue was a dev-server artefact, not a real layout problem. No fix needed.

---

## 5. Visual System

### 5.1 Colour (implemented as CSS custom properties in globals.css @theme block)

| Token | Light | Dark | Role |
|---|---|---|---|
| `--color-background` | `#F7F5F1` | `#1C1B18` | Paper-warm surface / warm charcoal |
| `--color-surface` | `#F7F5F1` | `#262420` | Elevated panel — diagram nodes. Identical to background in light. |
| `--color-foreground` | `#111214` | `#F4F2ED` | Headings, emphasis |
| `--color-body` | `#2E3338` | `#C8C4BC` | Body text |
| `--color-muted` | `#6B7075` | `#96928A` | Captions, meta, supporting |
| `--color-primary` | `#124E66` | `#4FA3C0` | Teal — accent, links, focus, diagram structure |
| `--color-secondary` | `#B8804A` | `#C99861` | Ochre — sparingly, diagram signal, specific moments |
| `--color-border` | `#E5E7EB` | `#33322E` | Dividers |
| `--color-hairline` | `#D1D5DB` | `#3F3E38` | Diagram node stroke |

**Rules:**
- Three-tier text hierarchy (foreground / body / muted) — inspired by Linear's "multiple whites" trick, adapted for light mode
- Ochre used only in specific places (~5% of palette). Primarily: the diagram's traveling signal.
- Teal is the primary editorial accent, not just a link colour

**Dark theme (added after the original build — additive revision, light values unchanged):**
- Driven by `prefers-color-scheme` only. **No toggle**, no theme state, no hydration script.
- The dark surface is the *hue-mirror* of paper-warm, not an inversion: `#1C1B18` is hsl(45°, 8%, 10%) against paper's hsl(40°, 27%, 96%). This is what keeps the "Warm > cool" tone axis intact in both themes.
- Teal lifts to `#4FA3C0` because `#124E66` is 1.9:1 on charcoal — unusable. Hue moves only 197° → 196°, so it stays the same teal rather than drifting to cyan.
- Overrides are declared **unlayered** in `globals.css`, after the `@theme` block. Tailwind v4 compiles `@theme` into `@layer theme`, and unlayered declarations beat layered ones in the cascade regardless of source order. Do not move them inside `@theme` — theme blocks cannot be conditionally re-declared.
- All 37 `var(--color-*)` call sites across the components inherit this for free. Only three surfaces needed real work: the hero diagram, the case-study images, and the `viewport` export in `layout.tsx`.
- `--color-surface` and `--color-hairline` were added for the diagram. Both are safe names — neither collides with the typography utilities (see §5.2). Adding a token named `display`, `h1`, `h2`, `subtitle`, `prose`, `small` or `eyebrow` **would** collide.

**Case-study image export spec (`public/work/`):**

Each project ships two hand-authored plates — `name.webp` and `name-dark.webp` — swapped by a `<picture>` element in `WorkRow.tsx`. Two baked plates rather than one transparent asset, so the light-mode drop shadows survive as authored.

| | |
|---|---|
| Size | **1600 × 1200**, exactly 4:3 (matches the Figma frames 1:1) |
| Light plate | `#F7F5F1` — flat, edge to edge |
| Dark plate | `#1C1B18` — flat, edge to edge |
| Colour profile | **sRGB, not Display P3** — a P3 export shifts the plate hex |
| Corners | Square. The container clips to `--radius-lg` (12px); rounding in the PNG too gives a double-rounded notch |
| Margins | ~50px floor. Existing margins vary deliberately — optically balanced, not mechanically padded |
| Encode | Export PNG @2× (3200 × 2400), downscale **2:1** to 1600 × 1200 with Lanczos3, WebP quality **88** |
| Budget | ~80 KB each; over 110 KB means a setting slipped |

**Why the plate hex has to be right:** the container behind the image is painted `--color-background`, and on hover the image translates up 4px and sideways 8px, revealing up to 8px of container. A mismatched plate shows as a sliver mid-hover — the same bug Prompt 6.1 fixed. Colour-picking the *exported WebP* will read ~4/255 off; that is lossy WebP redistributing flat colour and is imperceptible. Get the PNG exact.

**Two measured findings, so they are not relitigated:**
- Output size is the sharpness lever, not codec quality. At the real render size (1120 device px) 1280 × 960 scored 5.24 against 1600 × 1200 at 6.04. WebP q82 → q92 moved detail under 1% for 40% more bytes — do not chase quality above 88.
- Downscale by an integer ratio. 3200 → 1600 averages exactly four pixels per output pixel; the 3200 → 1280 (2.5:1) used briefly had to interpolate and read visibly soft.

Dark plates must be flat *throughout*, including gaps between mockups and the frame corners — not just around the outside of the artwork. An earlier automated attempt recomposited only outside the artwork's bounding box and left 21% residual cream in the Salli frame.

### 5.2 Typography

| Family | Weights | Role |
|---|---|---|
| **General Sans** (free, Fontshare) | 400 Regular, 500 Medium, 600 SemiBold (hero only) | All functional type |
| **Source Serif 4 Italic** (free, Google Fonts — self-hosted) | 400 | Name/signature, and long-form pull quotes |

Loaded via `next/font/local` with CSS variables `--font-sans` and `--font-serif`. Files live in `public/fonts/`.

**Scale (implemented as utility classes in src/app/typography.css):**

| Class | Desktop | Mobile | Weight | Line-height |
|---|---|---|---|---|
| `.text-display` | 88px | 52px | 500 | 1.05 |
| `.text-h1` | 48px | 32px | 500 | 1.15 |
| `.text-h2` | 28px | 24px | 500 | 1.15 |
| `.text-subtitle` | 20px | 17px | 400 | 1.4 |
| `.text-prose` | 17px | 16px | 400 | 1.65 |
| `.text-small` | 14px | 14px | 400 | 1.5 |
| `.text-eyebrow` | 12px | 12px | 500 | 1 (uppercase, tracking 0.08em) |

**Plus:** `.font-serif-italic` for name/signature and pull quotes

**Pull quote treatment (established Prompt 10 — `src/components/PullQuote.tsx`):**

Source Serif 4 Italic, `--color-foreground`, line-height 1.3, tracking -0.01em. **One size only** — 24px mobile / 32px desktop. Wrapped in curly quotation marks (`&ldquo;` / `&rdquo;`), applied inside the component rather than typed into each case study's copy. Above it, a 40px × 1px teal (`--color-primary`) rule — the only other ornament. No left border, no background, no tint panel. Sits at the 680px reading measure with `my-14 md:my-20`.

**No size variants.** A larger `variant="lead"` (28px / 40px) was built in Prompt 10 for the one quote carrying a piece's thesis, then removed the same prompt — too big on the page, and a second size isn't needed to do the job. If a quote needs to dominate, that's a job for its position in the piece, not its point size.

Decided against, so it isn't re-argued: whitespace-only with no rule (too close to the Craig Mod register §3 rules out), a hanging outdent into the left margin (reads as broken layout against a centred column), and a large decorative opening quote mark set as a display glyph (drifts to conventional blockquote and competes with the teal/ochre discipline in §5.1) — note this is distinct from the inline quotation marks the component now uses.

Pull quotes carry `aria-hidden="true"`. Every one repeats a sentence verbatim from the paragraph below it, so without this a screen reader announces each twice; the emphasis is a visual device and the sentence is still read in place. Rendered as `<p>`, not `<blockquote>` — the piece is quoting itself, not an external source.

**Notes:**
- Body at 17px (not 16px) — slightly more considered, magazine-like
- Hero subtitle deliberately quieter (20px not 24px) — display type carries the weight
- 500 Medium preferred over 600 SemiBold for editorial register
- Running text utility is named `.text-prose`, not `.text-body`, because Tailwind v4 auto-generates a `.text-body` utility from the `--color-body` token in `@theme` — using both causes a cascade collision. Do not rename back to `.text-body`.

### 5.3 Layout (implemented via Container and Section components in src/components/)

- **Max content width:** 1280px (`Container` default)
- **Narrow reading width:** 680px (`Container width="narrow"` — thesis body, About page, case study prose)
- **Case study diagram measure:** 920px (Prompt 10, local to `CaseStudyLayout`, not a `Container` variant) — body diagrams step out wider than the reading column, collapsing to it below `md`. Rationale in §10, Prompt 10.
- **Page gutter:** 24px mobile → 48px desktop (`px-6 md:px-12`)
- **Vertical rhythm:** 96px unit between major sections on desktop, 64px mobile (`Section` component: `py-16 md:py-24`)

**Section-level grids (each section uses a different composition deliberately):**
- Hero: asymmetric 55/45 split, offset baseline (diagram does NOT centre-align with type)
- Thesis: narrow single-column, centred
- Selected work: full-width staggered rows, alternating image-left / image-right / image-left
- Credentials: 2×2 grid desktop, 1×4 stack mobile
- Contact: centred narrow block

### 5.4 Motion — three tiers

**Tier 1 — The signature moment (kinetic hero diagram).** See §6.

**Tier 2 — Entrance motion (scroll-reveal).**
- Duration: 0.6s
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo — slow settle at end) — available as `--ease-out-expo` CSS var
- Transform: 16px Y-translate → 0, opacity 0 → 1
- Stagger: 80ms between elements within a section

**Tier 3 — Micro-interactions.**
- Everything interactive has a response
- Small and linear, not bouncy — 180ms linear or ease-out (available as `--duration-micro` CSS var)
- One property at a time (colour OR subtle translate, not both at once)
- Links: animated underline-offset (2–3px below baseline at rest → 1px on hover)
- Nav items: colour shift foreground → primary (teal) on hover, 180ms (already implemented in Nav)
- Contact links: border colour shifts to teal on hover
- Section eyebrows: static (not every element needs to respond)

**Work teasers — editorial flourish:**
- Image shifts 8px horizontally on hover while title stays still (small parallax between image and text)
- Plus standard: image lifts 4px, title colour shifts to teal, arrow icon translates 4px right
- 240ms ease-out (`--duration-hover`)

**Reduced motion:**
- Global `prefers-reduced-motion` reset already implemented in globals.css (animation/transition durations reduced to 0.01ms)
- Hero diagram gets a static composed state (see §6)

### 5.5 Border radius (CSS custom properties)

- `--radius-sm`: 6px (diagram nodes)
- `--radius-md`: 8px (base — cards, buttons)
- `--radius-lg`: 12px (larger surfaces)
- `--radius-full`: 9999px (pills)

### 5.6 Icon system

- **Lucide React** (installed in Prompt 3)
- Size: 16px inline (`w-4 h-4`), 20–24px for navigation
- Colour inherits from parent

---

## 6. Signature Moment — The Hero Diagram

**Concept:** A closed-loop feedback diagram — "Trust UX as a growth loop." Directly encodes the thesis. Represents Edwin's view that trust UX converts user intent into business growth.

**The loop (clockwise):**
**Intent → Transparency → Trust → Adoption → Growth → (back to Intent)**

5 nodes, 5 paths, 1 traveling signal.

**Rationale for the labels:**
- Argues something (trust UX drives commercial outcomes) rather than just describing a system
- Ties directly to the thesis below and the subtitle above ("...drive growth, adoption and trust")
- Growth → Intent closes the loop: new users bring new intent; the loop compounds

### 6.1 Composition

**Desktop (~550px wide, ~500px tall, 45% of 1280px container):**
- Asymmetric 5-node loop, NOT a regular pentagon. Nodes positioned with editorial intent.
- Paths: thin curves (1px, teal at 0.5 opacity). Organic but precise. No straight lines.
- Central area left empty — composition breathes.

**Mobile (vertical reorientation, ~320px wide × 440–480px tall):**
- Loop re-composed vertically, not scaled down
- Intent at top → Transparency → Trust → Adoption → Growth flowing down
- Loop closes via curved path on the side back up to Intent
- Same nodes, labels, signal — different geometry

### 6.2 Visual constants (borrowed/adapted from portfolio spec)

| Constant | Hex | Role |
|---|---|---|
| `ACCENT` | `#124E66` | Teal structure strokes, node emphasis |
| `NEAR_BLACK` | `#111214` | Node labels |
| `MID_GREY` | `#5F6368` | Secondary labels, captions |
| `LIGHT_GREY` | `#C8CBD0` | Thin connector lines |
| `PANEL_FILL` | `#EDE9E1` | Warm panel fill (adapted for main site warmth) |
| `NODE_FILL` | `#F7F5F1` | Matches site background |
| `NODE_STROKE` | `#D1D5DB` | Subtle node borders |
| `BG` | `#F7F5F1` | SVG canvas background |
| `SIGNAL` | `#B8804A` | Ochre — the traveling signal, ONLY used here |

### 6.3 Node styling

- Node: rounded panel (rx 6–8)
- Fill: `NODE_FILL`
- Stroke: `NODE_STROKE` at 0.8px
- Label: `NEAR_BLACK`, 12–13px (slightly larger than portfolio's 10–11px for scannability at hero size), weight 500, letter-spacing 0.04em, font inherits General Sans

### 6.4 Entrance motion (plays once on load)

| Time | Action |
|---|---|
| 0.0s | Canvas appears |
| 0.1s | Intent node fades in, scale 0.95 → 1 (300ms) |
| 0.3s | Path Intent → Transparency draws itself (400ms, stroke-dasharray animation) |
| 0.6s | Transparency fades in |
| 0.8s | Path draws |
| 1.0s | Trust fades in |
| 1.2s | Path draws |
| 1.4s | Adoption fades in |
| 1.6s | Path draws |
| 1.8s | Growth fades in |
| 2.0s | Final path (Growth → Intent) draws, closing loop |
| 2.4s | Ochre signal appears at Intent, begins first traversal |

Total composition: ~2.4s.

### 6.5 Ongoing motion (after composition)

- Ochre signal (~6px soft-edge dot) travels clockwise around the loop
- **Cycle: 8 seconds per full loop**
- When signal passes through a node: node pulses once (scale 1.0 → 1.03 → 1.0 over 300ms)
- Signal never stops, never speeds up
- No other motion on the page competes

### 6.6 Reduced motion

- Entrance: all nodes and paths appear simultaneously at 1.0s via single fade-in. No sequential composition, no path-drawing.
- Ongoing: signal is static — sits at Intent as small ochre marker. No travel, no pulse.
- Diagram still reads as a diagram. Motion is additive, not essential.

### 6.7 Accessibility

- `<svg role="img">` with `<title>` ("Diagram: Trust UX as a growth loop") and `<desc>` describing the five nodes and their relationships
- Node labels as actual `<text>` elements — screen-readable
- Respects `prefers-reduced-motion`

---

## 7. Technical Stack

- **Framework:** Next.js 16.2.4 (App Router, Server Components by default, `"use client"` for interactive components)
- **Styling:** Tailwind CSS v4 (CSS-based `@theme` configuration in `globals.css` — NO `tailwind.config.ts`) + CSS custom properties
- **Language:** TypeScript
- **Fonts:** Self-hosted via `next/font/local`:
  - General Sans (Regular 400, Medium 500, SemiBold 600) → `--font-sans`
  - Source Serif 4 Italic (static .ttf, 400) → `--font-serif`
  - Files in `public/fonts/`
- **Icons:** Lucide React (installed)
- **Deployment:** Netlify, free tier, deploying from `main` branch (`develop` is the working branch; `main` is production)
- **Repo:** github.com/edwincwells/edwincw-site (public)
- **Preview URL:** edwincw-site.netlify.app
- **Local dev:** macOS, Node v24, npm 11, Claude Code in desktop Claude app
- **Project path:** `~/Development/edwincw-site`
- **Budget:** £0 running cost (all free tier)

**Important project-specific config:**
- `next.config.ts` has explicit `turbopack.root: path.resolve(__dirname)` to prevent workspace root misinference (a stray lockfile in home dir caused issues during Prompt 1)
- React Compiler: NOT enabled (stability/compatibility choice for Claude Code)
- AGENTS.md: present at repo root, included by create-next-app

---

## 8. Current File Structure

```
edwincw-site/
├── AGENTS.md
├── docs/
│   ├── design-brief.md       (this file)
│   └── polish-audit.md       (Prompt 8 a11y + Lighthouse audit findings)
├── public/
│   ├── fonts/
│   │   ├── GeneralSans-Regular.woff2
│   │   ├── GeneralSans-Medium.woff2
│   │   ├── GeneralSans-Semibold.woff2
│   │   └── SourceSerif4-Italic.ttf
│   ├── work/
│   │   ├── salli.webp
│   │   ├── rewards-recognition.webp
│   │   └── fluxux.webp
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   ├── page.tsx      (Server Component — exports Metadata)
│   │   │   └── AboutContent.tsx (Client Component — useScrollReveal)
│   │   ├── work/
│   │   │   └── [slug]/
│   │   │       ├── page.tsx  (generateStaticParams + generateMetadata, dynamicParams=false)
│   │   │       ├── caseStudies.ts (slug → metaTitle / description / Content)
│   │   │       └── RepositioningProductDesignContent.tsx (essay prose, Server Component)
│   │   ├── fonts.ts          (next/font/local setup)
│   │   ├── globals.css       (Tailwind v4 @theme + tokens + base styles + .link helper + scroll-reveal CSS)
│   │   ├── typography.css    (type scale utility classes)
│   │   ├── layout.tsx        (root layout with Nav + Footer; exports Metadata — title, description, OG, Twitter)
│   │   └── page.tsx          (renders Hero, Thesis, SelectedWork, Credentials, Contact)
│   └── components/
│       ├── Container.tsx     (default 1280px / narrow 680px)
│       ├── Section.tsx       (py-16 md:py-24 wrapper)
│       ├── Nav.tsx           (sticky top, 4 links, EC-W mark; About link has prefetch={false} until route exists)
│       ├── Footer.tsx        (copyright + LinkedIn/Mail icons)
│       ├── Hero.tsx          (asymmetric 55/45 hero + HeroDiagram)
│       ├── HeroDiagram.tsx   (kinetic loop — 5 nodes, 5 paths, traveling signal; Client Component)
│       ├── Thesis.tsx        (narrow, eyebrow + h2 + body placeholder; scroll-reveal)
│       ├── SelectedWork.tsx  (section wrapper — header + three WorkRow instances; passes revealIndex 0–2)
│       ├── WorkRow.tsx       (reusable row with reverse prop, editorial hover flourish, scroll-reveal)
│       ├── Credentials.tsx   (2×2 grid, framed by thin top/bottom dividers; per-cell scroll-reveal indices 0–3)
│       ├── Contact.tsx       (narrow centred, eyebrow + h2 + prose block with inline links; scroll-reveal)
│       ├── CaseStudyLayout.tsx (long-form layout + Prose / Heading / Figure / Placeholder blocks)
│       ├── PullQuote.tsx     (serif italic + teal hairline; single size, quotes supplied by the component)
│       ├── useScrollReveal.ts (IntersectionObserver hook for Tier 2 entrance motion)
│       └── diagrams/         (case study visuals — static, Server Components)
│           ├── DiagramPrimitives.tsx  (token styles + Node / Chip / Connector / EdgeLabel / ArrowDefs / DiagramSvg)
│           ├── DeliveryModelBefore.tsx (DIAGRAM 1 — fan and funnel into one queue)
│           ├── DeliveryModelAfter.tsx  (DIAGRAM 2 — tier assigned, two lanes, one build)
│           ├── TierDecisionFlow.tsx    (DIAGRAM 3 — four questions, any yes → Tier 1)
│           ├── ConvergenceHero.tsx     (decorative hero; exports the Converge renderer + Geometry)
│           ├── ConvergenceMark.tsx     (4:3 convergence figure — built Prompt 12, unused since 13)
│           └── DeliveryModelPair.tsx   (before/after stacked 880×660 for the Selected Work row)
├── next.config.ts            (turbopack.root set explicitly)
├── package.json
└── tsconfig.json
```

Note: the file tree above is current as of Prompt 10. Root-level files not shown: `AGENTS.md`, `CLAUDE.md`, `LICENSE`, `README.md`, `next.config.ts`, `package.json`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`.

---

## 9. Prompt Sequence Plan

| # | Prompt | Status |
|---|---|---|
| 0 | Repo + Netlify setup (manual, not Claude Code) | ✅ Complete |
| 1 | Scaffold — fonts, file structure, base config | ✅ Complete |
| 2 | Design tokens — CSS variables, Tailwind config, globals | ✅ Complete |
| 3 | Layout shell — nav, footer, container, typography primitives | ✅ Complete |
| 4 | Hero section — asymmetric layout with diagram placeholder | ✅ Complete |
| 5 | Thesis + Credentials + Contact sections | ✅ Complete |
| 6 | Selected work — staggered editorial layout with flourish | ✅ Complete |
| 7 | Hero diagram — kinetic loop (expect iteration) | 🟡 Structural complete, design notes + polish pending |
| 7.x | Hero diagram — design-notes iteration (tune positions, curves, resolve flash) | Pending |
| 8 | Polish pass — scroll motion, reduced-motion, a11y, Lighthouse | ✅ Complete |
| 9 | About page — `/about` route with locked copy (see §4), photo, reused contact block | ✅ Complete |
| 9.1 | Nav refinements — remove Home, Contact → `/#contact`, active-state indication | ✅ Complete |
| 9.2 | Mobile verification — About page overflow + nav at narrow viewports + font scaling | ✅ Complete (no changes needed) |
| 9.3 | Hero name in teal + GitHub icon in footer | ✅ Complete |
| 9.4 | Cross-functional value as function list + About final sentence update | ✅ Complete |
| 9.5 | OG image + OpenGraph/Twitter metadata | ✅ Complete |
| 9.6 | V1 prep — case study URLs, favicon, README, MIT license, repo audit + Rewards image refresh | ✅ Complete |
| 10 | Long-form case study route — `/work/[slug]`, `CaseStudyLayout`, `PullQuote`, first essay, empty visual slots | ✅ Complete |
| 11 | Build the five case study visuals (3 diagrams, hero, review-agent screenshot) | ✅ Complete |
| 12 | Homepage `SelectedWork` entry for the case study (first row, section now 0–4) | ✅ Complete |
| 13 | Selected Work row visual — before/after pair replaces the convergence mark | ✅ Complete |

### Prompting principles

- Each prompt is **self-contained** — includes verbatim design system references so a fresh Claude Code session produces consistent output
- Each prompt includes: what it builds, exact paste-ready instruction, what to check after, exact git commit commands, what to verify on Netlify preview
- Prompts run sequentially on the `develop` branch; each commits before the next runs
- Only Prompt 7 (hero diagram) expects iteration in dialogue within Claude Code; everything else is one-shot
- Continue using the same Claude Code session across prompts unless something goes seriously wrong (cheap context-wise; preserves conventions)
- For prompts that create or modify files in a Next.js App Router route (anything in `src/app/*`), the "Report back" section should explicitly request a full list of files created or modified — including any components extracted to satisfy the Server/Client boundary (e.g. `"use client"` splits required when `Metadata` can't coexist with client hooks on the same file). This caught a late-arriving `AboutContent.tsx` in Prompt 9 that was untracked after the initial `git add`; making the report explicit prevents recurrence. Alternative: use directory-level `git add src/app/<route>/` rather than specific-file adds, paired with `git status` pre-commit verification.
- For audit-style or inspection-style prompts, the git directive should be precise: "Do not run state-changing git commands (`git add`, `git commit`, `git push`, `git rm`, `git reset`, `git checkout`, `git branch`)" rather than the blanket "Do not run git commands" used in earlier build prompts. Read-only git commands (`git ls-files`, `git status`, `git log`, `git diff`) are needed for repo audits and should be allowed. Caught in Prompt 9.6 where the audit needed `git ls-files` for tracked-file checks.
- Lessons from production verification: when a layout issue is observed in local dev-server emulation but the cause is unclear, verify against the deployed Netlify build before scoping a fix. Caught in Prompt 9.2 where a "horizontal overflow" issue turned out to be a dev-server artefact, not a real layout problem. Saves wasted prompt scope on non-issues.

---

## 10. Progress Log

- [x] **Prompt 0** — Repo created on GitHub (edwincwells/edwincw-site, public), local Next.js 16 scaffold with TypeScript + Tailwind v4 + App Router + AGENTS.md, Netlify connected deploying from `develop`, preview URL live with default Next.js page. SSH auth configured.
- [x] **Prompt 1** — Fonts self-hosted (General Sans + Source Serif 4 Italic) via `next/font/local` with CSS variables `--font-sans` and `--font-serif`. `src/app/fonts.ts` created. Minimal placeholder page renders eyebrow + serif italic name + sans tagline on paper-warm bg (#F7F5F1). `next.config.ts` includes explicit `turbopack.root` to prevent workspace misinference. Git user.name/email configured globally (was defaulting to local hostname). Local + Netlify verified.
- [x] **Prompt 2** — Design tokens implemented in globals.css (Tailwind v4 `@theme` block for colours + fonts, `:root` for layout/motion/radius constants). Typography utility classes in `src/app/typography.css` (`.text-display`, `.text-h1`, etc., responsive at 768px breakpoint). Base styles: body bg/colour/font, antialiasing, reduced-motion reset, selection styling, focus-visible baseline. Placeholder page refactored to use utility classes instead of inline styles. Verified via DevTools Console: `getComputedStyle(document.documentElement).getPropertyValue('--color-primary')` returns `#124E66`.
- [x] **Prompt 3** — Layout shell complete. `src/components/Container.tsx` (default 1280px / narrow 680px variant), `src/components/Section.tsx` (py-16 md:py-24 vertical rhythm), `src/components/Nav.tsx` (sticky top with backdrop blur, EC-W mark + 4 nav links with teal hover, ArrowUpRight icon on external Case Studies link), `src/components/Footer.tsx` (copyright + LinkedIn/Mail icons). Root layout wraps content with Nav/main/Footer. Lucide-react installed. Local + Netlify verified.
- [x] **Prompt 4** — Hero section complete. `src/components/Hero.tsx` created and rendered from `src/app/page.tsx`. Asymmetric 55/45 grid on desktop (`grid-cols-[55fr_45fr]`), single-column stack on mobile. Left column: name in Source Serif 4 Italic, 20px, `--color-muted`, as `<p class="font-serif-italic text-[20px] text-[var(--color-muted)] mb-4">` sitting tightly above the display; display tagline as `<h1 class="text-display text-[var(--color-foreground)]">` (semantic H1 confirmed in DevTools); subtitle as `<p class="text-subtitle text-[var(--color-body)] mt-6 md:mt-8 max-w-[540px]">`. Right column: dashed-border square placeholder (`aspect-square`, `border-dashed`, `--color-border`, `--radius-lg`) with "[ Hero diagram — Prompt 7 ]" centred in `.text-small` muted. Section padding overridden with `!pt-24 md:!pt-40 !pb-16 md:!pb-24` on the existing `Section` to give the hero room below the sticky nav. Offset baseline: right column set to `mt-0 md:mt-20` so diagram visual centre sits below the display's baseline — "composed, not aligned." Verified in DevTools: display computes `generalSans` family at 88px weight 500, name computes `sourceSerif` family italic at 20px weight 400, both loading from network (not fallback). Local + Netlify verified.
- [x] **Prompt 5** — Thesis, Credentials, Contact sections shipped in one pass. `Thesis.tsx` uses narrow Container with teal eyebrow ("On designing trust"), `<h2>` title ("What experience strategy means when the product can think back"), and a `[TBD]` body placeholder at `.text-prose`. `Credentials.tsx` uses default Container with a 2×2 grid on desktop / 1×4 stack on mobile, framed by thin top and bottom borders, cell values rendered as `<p>` (not `<h2>`) at `.text-h2` size for data-not-headings semantics. `Contact.tsx` initially shipped as a label/value row stack but was revised mid-prompt to a prose block — two centred sentences, sentence 1 "Reach me by [email], or connect on [LinkedIn]." (with `email` and `LinkedIn` as inline `.link` class anchors in foreground colour, teal on hover, 3px → 1px underline offset transition, 180ms), sentence 2 "Based in the UK, working globally." in muted grey. No exposed URLs. `.link` helper class added to `globals.css`. During verification, Contact sentence 2 was rendering in body colour instead of muted — DevTools traced this to a name collision: Tailwind v4 auto-generates a `.text-body` utility from the `--color-body` token in `@theme`, which collided with the hand-written `.text-body` type utility in `typography.css`. Resolved by renaming the type utility `.text-body` → `.text-prose` in `typography.css` and updating consumers (`Thesis.tsx`). Documented in §5.2 Notes so the collision doesn't get reintroduced. Also noted: a hydration warning in local dev traced to the ColorZilla browser extension injecting `cz-shortcut-listen` on `<body>`; not a code issue, ignored. Local + Netlify verified. **Thesis body copy landed 2026-04-21, revised 2026-04-22** (as a small follow-up within this row rather than a new prompt): the `[TBD]` placeholder was replaced with five `<p class="text-prose">` paragraphs inside a `space-y-6` wrapper `<div>`. Final paragraph's loop line ("Intent → Transparency → Trust → Adoption → Growth") wrapped in `<span class="font-semibold">` — a deliberate one-off exception to §5.2's "500 Medium preferred" rule, acting as the typographic bridge from thesis prose to the hero diagram's node labels; if another semibold case comes up later, check against this precedent rather than re-debating the rule. Scroll-reveal wrapper from Prompt 8 preserved (data-reveal on the outer element, body wrapper sits inside so the whole thesis section reveals as one unit). Copy tightened on 2026-04-22 from ~282 words to ~235 words — two paragraphs cut (the "design fundamentals still apply" paragraph and the forward-looking closing paragraph) so the piece ends on the loop line, which ties directly to the hero diagram below. The live `Thesis.tsx` matches the copy locked in §4. Verified locally; not pushed.
- [x] **Prompt 6** — Selected Work section shipped. `SelectedWork.tsx` renders the section wrapper (header: "Selected work" eyebrow + "Recent projects" `<h2>` title, left-aligned) and three `WorkRow` instances with `space-y-24 md:space-y-32` separation. `WorkRow.tsx` is a reusable component with a `reverse` boolean prop controlling image-left / image-right composition via `md:order-1` / `md:order-2`. Row 1 Salli (image left), Row 2 Rewards & Recognition (image right), Row 3 FluxUX (image left). Real URLs wired: Salli → `portfolio.edwincw.com/slide/12`, R&R → `portfolio.edwincw.com/slide/2`, FluxUX → `fluxux.vercel.app`. FluxUX uses "Project" eyebrow instead of "Case study 03" to frame it as exploration rather than case study. Editorial hover flourish: image lifts 4px up and shifts 8px horizontally (direction parameterised by `reverse`), title colour shifts to teal, arrow translates 4px right, all at 240ms ease-out. Images prepared at 1600×1200 WebP in `public/work/` with `#F7F5F1` panel backgrounds matching the site background colour. Used `next/image` with `fill` and `sizes="(max-width: 768px) 100vw, 50vw"`. Accessibility: titles are `<h3>`, the whole row is NOT a wrapping link (only the explicit text link is interactive). Patched in Prompt 6.1: image container background was initially `--color-border` (`#E5E7EB`), which showed through as a grey sliver during the hover translate — changed to `--color-background` so the revealed area matches the page and the hover reads as pure image movement. Local verified; pushed to Netlify prior to Prompt 8.
- [🟡] **Prompt 7** — Hero diagram structural build complete across 10 iterative passes (7.0 initial through 7.9 flash tuning). Design polish deferred to a later 7.x pass.
  - **7.0** — `src/components/HeroDiagram.tsx` created as a Client Component. Five-node asymmetric loop (Intent → Transparency → Trust → Adoption → Growth → Intent) with five cubic-Bézier paths, rendered as inline SVG. Desktop viewBox `0 0 550 500`, mobile viewBox `0 0 320 460` — separate geometry constants (`DESKTOP`, `MOBILE`) toggled via `hidden md:block` / `md:hidden` wrapper divs; duplicated markup accepted as less fragile than responsive coordinate math. Node positions per §6.1. Paths use `pathLength="1"` for normalised `stroke-dasharray` drawing animation. Entrance sequence (~2.4s total) implemented via CSS keyframes (`hero-diagram-node-enter`, `hero-diagram-path-draw`, `hero-diagram-signal-appear`, `hero-diagram-node-pulse`) with staggered `animation-delay` per element. Pulse-on-pass uses the CSS-only approach from the spec: each node pulses once per 8s cycle with `animation-delay` computed to line up with the signal's expected position, accepting first-pass drift vs actual path-length distribution. Signal is a 4px/8px ochre circle pair with `<animateMotion>` following an invisible sixth path (`#loop-path-desktop` / `#loop-path-mobile`) that concatenates the five visible paths into one continuous track. `<mpath href={...}>` reference (not `xlink:href`) since this is modern React/SVG. Accessibility: `role="img"`, `<title>`, `<desc>`, `aria-label`, node labels as real `<text>` elements. Imported into `Hero.tsx` replacing the dashed-border placeholder. Reduced-motion detection via `useState` initialiser reading `window.matchMedia` synchronously (SSR-safe via `typeof window !== 'undefined'` guard) plus a `useEffect` subscribing to `change` events.
  - **7.1** — Reduced-motion rendering fixed. Initial build had the `<style>` block rendered unconditionally, relying on the global reduced-motion reset in `globals.css` to neutralise animations. The global reset only zeroed `animation-duration`, not `animation-delay`, so the entrance sequence still played as a staircase of instant snaps across 2.4s. Fix: gate the `<style>` block on `!reducedMotion`; also extend the global reset in `globals.css` to include `animation-delay: 0s !important` and `transition-delay: 0s !important` so future animations (e.g. Prompt 8's scroll-reveal stagger) don't hit the same issue. Verified in DevTools: with reduced-motion emulated, `animation-name` on node wrapper groups computes to `none` rather than being zeroed-out `node-enter`.
  - **7.2 → 7.9** — Signal entrance flash debugging loop. After entrance completes, the ochre signal was briefly appearing at the SVG origin `(0, 0)` for ~1 frame before `<animateMotion>` positioned it on the loop path. Resolution attempts tried in sequence:
    - 7.2: Set `cx`/`cy` on the signal `<circle>` elements to path 1's starting coordinate (desktop `(185, 90)`, mobile `(160, 64)`). Killed the origin flash but `<animateMotion>` applied its motion additively on top of `cx`/`cy`, offsetting the whole loop by `signalStart`.
    - 7.3: Moved initial positioning from `<circle>` attributes to a `transform="translate(...)"` on the wrapping `<g>`, expecting `<animateMotion>` to replace the group's transform during playback. In Chrome the transform attribute is not replaced — SMIL motion is applied via a separate internal transform list, so the static translate still stacks with motion. Offset bug returned.
    - 7.4: Removed the static transform entirely, relied on the CSS `hero-diagram-signal-appear` keyframe's `animation-fill-mode: both` to hold opacity 0 until 2.4s. Reintroduced the original flash at origin.
    - 7.5: Added `opacity="0"` as an SVG presentation attribute directly on the signal group, so it takes effect on first paint without CSS dependency. Flash still present.
    - 7.6: Offset the CSS fade-in delay to `2.45s` (50ms after `<animateMotion>`'s `begin="2.4s"`), hypothesising a one-frame race between motion position being computed and opacity becoming non-zero. Flash reduced but still intermittent.
    - 7.7: Diagnostic — bumped fade-in delay to 3.4s (full 1-second gap after motion) to disambiguate race-vs-other-cause. Claude Code instrumented the iframe over 253 frames and confirmed clean handoff at 3.4s, consistent with the race hypothesis.
    - 7.8: Dialled back to `2.55s` (150ms gap). Flash still intermittent after 15 refreshes.
    - 7.9: Bumped to `2.8s` (400ms gap). Animated-branch flash substantially reduced to an occasional, very brief blip that's borderline imperceptible. Accepted as good-enough for now; commit and move on.
  - **Final state of the animated signal:** `<g className="hero-diagram-signal" opacity="0">` wraps two `<circle cx="0" cy="0" ...>` elements and `<animateMotion dur="8s" begin="2.4s" repeatCount="indefinite">`. `.hero-diagram-signal` CSS animation is `hero-diagram-signal-appear 300ms ease-out both 2.8s`. The `opacity="0"` attribute and the delayed CSS fade-in are doing complementary work — attribute gives initial frame certainty, delay gives motion a head start.
  - **Known issues for the 7.x iteration:**
    - **Reduced-motion flash every refresh** (separate from the animated-branch flash). The static branch renders a `<circle>` at Intent with no animation, yet a brief ochre flash occurs on every page load with reduced-motion emulated. Almost certainly the SSR/client hydration mismatch we knowingly accepted: the server renders with `reducedMotion: false` (no `window`), producing HTML with the animated branch. The client's first render then reads the actual preference and swaps to the static branch — but the animated branch's DOM was already painted. This matters more than the animated flash: reduced-motion is an accessibility affordance for users with vestibular disorders / migraine triggers, and a consistent flash on every refresh there is worse than an intermittent one on the animated path. Fix likely involves either (a) suppressing the initial render until `useEffect` runs (loses SSR content), (b) using a CSS-only approach that renders both states and toggles via media query (no JS state), or (c) accepting the SSR flash and adding a brief opacity-0 gate on the whole SVG until hydration.
    - **Animated-branch intermittent flash** even at 400ms delay. Good enough for shipping but not clean. Likely a second-order interaction between Chrome's frame scheduling and Next.js dev server load. May behave differently on a production build served from Netlify — worth re-testing post-`npm run build` before treating it as permanent.
    - **Design feel-tests not yet run.** Node positions, path curvature, entrance timing, signal appearance (size, blur, opacity), and pulse legibility are all at first-pass values from §6/§12. Edwin has separate design notes to apply in the 7.x iteration.
  - **Commits:** `abf3e9f` (7.0), `8fd6216` (7.1), `ebd560f` (7.2–7.9 bundled, also includes `.gitignore` adding `.claude/`). Pushed to Netlify prior to Prompt 8; production preview reflects the structural build.
- [ ] **Prompt 7.x** — Hero diagram polish: apply Edwin's design notes (node/path tuning), resolve reduced-motion hydration flash, re-test animated flash on production build
- [x] **Prompt 8** — Polish pass shipped in a fresh Claude Code session (context hygiene; previous session was long from Prompt 7's 10 iterations). Tier 2 scroll-reveal implemented via new `src/components/useScrollReveal.ts` hook (IntersectionObserver, `-10%` bottom `rootMargin`, `observer.unobserve` after first trigger — no re-fire on scroll back up) and `[data-reveal]` / `[data-revealed="true"]` CSS in `globals.css`, with a `prefers-reduced-motion: reduce` override forcing final state (`opacity: 1; transform: none;`). Wired into `Thesis.tsx`, `Contact.tsx`, `Credentials.tsx` (per-cell, indices 0–3) and `SelectedWork.tsx`'s three `WorkRow` instances (per-row, indices 0–2 passed as `revealIndex` prop). Stagger implemented via `transition-delay: calc(var(--reveal-index, 0) * 80ms)` per §5.4 Tier 2 spec. Hero deliberately excluded — has its own Tier 1 entrance via the diagram. A11y fixes: added visually-hidden `<h2>Credentials</h2>` (`sr-only`) so landmark structure is complete without visual change; added `linkAriaLabel` prop on `WorkRow` with destination-aware labels ("Read the Salli case study", "Read the Rewards & Recognition case study", "Explore the FluxUX app"); upgraded work image alt text from filename-derived to descriptive. Page metadata added via `Metadata` export in `layout.tsx` — title ("Edwin Collings-Wells — Experience Strategy & Product Leadership"), description (reuses the exact §2 subtitle + credential), OpenGraph, Twitter summary card. No `og:image` (dedicated OG image deferred as follow-up). `HeroDiagram.tsx` not touched — the reduced-motion hydration flash is explicitly noted in the audit as deferred to Prompt 7.x to avoid double-tracking. Verification: manual tab-through confirmed focus ring visible on all 12 tab stops against paper-warm; scroll-reveal fires cleanly on first viewport entry and is bypassed correctly under emulated reduced-motion. Lighthouse run against local production build (`npm run build && npm run start`) in incognito Chrome with ColorZilla isolated per Prompt 5 notes. Scores recorded 2026-04-21 — Mobile: Performance 94, Accessibility 100, Best Practices 100, SEO 100; Desktop: Performance 100, Accessibility 100, Best Practices 96 (recorded before prefetch fix; expected 100 on re-run, not re-verified), SEO 100. LCP delta (mobile 3.1s vs desktop 0.7s) is throttled-network font download, not architectural — hero display waits on General Sans Medium woff2; fix would be disproportionate for one point of mobile score. Best Practices initially 96 on both profiles due to a "Browser errors were logged to the console" finding — Next.js's default `<Link>` prefetch was firing a `_rsc` request to `/about` which 404'd (About route doesn't exist yet). Fixed with `prefetch={false}` on the About link in `Nav.tsx` only; other nav links retain default prefetch. When the About page lands, revert this. Full audit in `docs/polish-audit.md`. Commits: two local commits — (1) scroll-reveal + a11y fixes; (2) metadata + prefetch fix + audit doc. Pushed to `origin/develop` as part of the Prompt 9.2 push batch.
- [ ] **Prompt 8.1** — Not created. Prompt 8 landed clean after the prefetch fix; any future Lighthouse re-runs or deeper perf work would start here if needed.
- [x] **Prompt 9 (About page)** — Shipped in a fresh Claude Code session for context hygiene (prior session carried Prompt 8's verification state). `src/app/about/page.tsx` created as a Server Component, mirroring `Thesis.tsx`'s composition: single narrow `Container` (680px), `Section` primitive for vertical rhythm, eyebrow → h1 → photo → five-paragraph prose, then a centred contact block below. Top block (eyebrow, h1, photo, prose) left-aligned; contact block centred to match homepage `Contact.tsx` composition. Scroll-reveal wraps the whole page as a single reveal unit per the Thesis pattern (not per-block staggered). Photo rendered via `next/image` with `width={1200} height={800}` intrinsic + `w-full max-w-[480px] h-auto` for display sizing, `sizes="(max-width: 768px) 100vw, 480px"`, alt `"Edwin Collings-Wells"`, `rounded-[var(--radius-md)]`. Source file `public/about/edwin-portrait.webp` (landscape 3:2, 1200×800) placed by Edwin pre-build, not regenerated. Contact block duplicates the homepage prose/link pattern inline rather than parameterising `Contact.tsx` — the two callers differ (eyebrow "Get in touch" vs "Contact", About drops the second "Based in the UK, working globally." sentence because the final prose paragraph already handles location). Single centred sentence: "Reach me by email, or connect on LinkedIn." — `email` and `LinkedIn` as inline `.link` anchors (mailto + https), teal hover, 3px → 1px underline-offset at 180ms. `Nav.tsx` prefetch revert: `prefetch={false}` removed from the About `<Link>` in the same commit — the route now exists, default prefetch restored. Page metadata via `Metadata` export: title `"About — Edwin Collings-Wells"`, description `"Director of UX at Harri. Leading design for an AI-enabled enterprise HCM platform used by two million frontline workers each month."`. No `og:image` (inherits from root layout / still deferred per Prompt 8). Verified locally on desktop — narrow container composition clean, photo left-aligned at 480px cap, all `.link` hover states correct, reduced-motion bypass confirmed via DevTools emulation, `npm run build` clean with `/about` emitted as a static route. **Architecture note:** `page.tsx` is a Server Component (exports `Metadata`) and renders `<AboutContent />` from `src/app/about/AboutContent.tsx`, which carries the `"use client"` directive because it uses the `useScrollReveal` hook. `Metadata` export and `"use client"` can't coexist on the same file, so the split is necessary; the pattern is standard for Next.js App Router pages that need both. Commits: two local commits — (1) About page + `AboutContent` client component + Nav prefetch revert, (2) late-arriving `AboutContent.tsx` add (Claude Code created the file during the build but the initial `git add` with specific file paths missed it — untracked file caught by subsequent `git status`). Pushed to `origin/develop` as part of the Prompt 9.2 push batch.
  - **Known issue noted at ship, resolved in Prompt 9.2:** mobile horizontal scroll was observed in local dev-server emulation at 375px and was scoped for diagnosis as part of 9.2. On verification against the deployed Netlify build, the overflow did not reproduce — issue was a dev-server artefact (likely HMR overlay, RSC dev injections, or similar dev-only content), not a real layout problem. Lesson: verify suspected layout issues against production builds before scoping fixes.
- [x] **Prompt 9.1 (Nav refinements)** — Shipped in a fresh Claude Code session. Three coordinated changes to `src/components/Nav.tsx` plus supporting edits to `Contact.tsx` and `globals.css`. (1) Home link removed from the nav item list — EC-W brand mark already links to `/` and serves as the home affordance; a separate Home link was redundant. Nav item list is now three: About, Case Studies ↗, Contact. (2) Contact link converted from its previous target to `<Link href="/#contact">`. On `/` it smooth-scrolls to the Contact section; on `/about` it navigates to `/` and lands on the `#contact` anchor. Contact section in `Contact.tsx` already had `id="contact"` on its `<Section>` wrapper — only `scroll-mt-[80px]` was added (measured nav height ~61px: `py-4` + text-sm content + 1px border; 80px gives a ~19px buffer above the section element, putting the eyebrow well clear of the sticky nav). (3) Active-page indication via `usePathname()` — current route's nav item gets `aria-current="page"`, `text-decoration: underline` with 1px thickness in `var(--color-primary)` teal, `text-underline-offset: 3px`, plus `--color-foreground` text colour for subtle tonal reinforcement. Static — no transition. Only About is route-backed among the remaining nav items; Case Studies is an external link (to `portfolio.edwincw.com`, `target="_blank"` / `rel="noopener noreferrer"` preserved, ↗ arrow preserved) and Contact is an in-page anchor — both are permanently excluded from active-state logic. In practice this means About is the only nav item that can ever be active, and on the homepage no nav item is active (the EC-W mark is the home affordance by convention). `Nav.tsx` was not previously a Client Component — `"use client"` directive added along with `usePathname` import. Supporting change: `html { scroll-behavior: smooth }` added to `globals.css` grouped with other `html` rules. The existing `prefers-reduced-motion: reduce` block in `globals.css` already sets `scroll-behavior: auto !important` via the universal selector, so no second `html`-specific override was added — that would be redundant with the `*` rule. Single source of truth for reduced-motion behaviour preserved. Verified in preview: on `/` three nav items render with no `aria-current` and no underline; on `/about` the About link has `aria-current="page"`, computed `color: #111214`, `text-decoration: underline 1px #124E66`, `underline-offset: 3px`; Case Studies retains external-link attributes and arrow; Contact click from `/` scrolls to Contact section (last on page — lands at max scroll, meaning `scroll-mt-[80px]` is not load-bearing on this path but would be if another section were ever added below Contact; from `/about` it navigates + lands on anchor correctly). Console clean on both routes. Commits: one local commit. Pushed to `origin/develop` as part of the Prompt 9.2 push batch.
- [x] **Prompt 9.2 (Mobile verification)** — Closed without code changes after empirical mobile testing on the live Netlify preview. The original 9.2 scope had two threads: (1) About page horizontal overflow fix, (2) homepage mobile nav (burger) implementation. Both threads were dropped. **About overflow:** the issue noted in §10 Prompt 9's known-issue list did not reproduce on the deployed Netlify build — only manifested in local dev-server emulation, suggesting it was an artefact of the dev server (HMR overlay, RSC dev injections, or similar dev-only injected content) rather than a real layout problem. Diagnostic steps would have been wasted on a non-issue. Lesson logged: when in doubt about layout artefacts, verify against production builds, not the dev server. **Mobile nav (burger):** decided against after a structured argument-and-counter-argument exercise (real arguments for: font-scaling accessibility headroom, future-proofing for a fourth nav item, signal of design considered-ness; real arguments against: extra tap on the primary CTA, reduced discoverability for less tech-literate users, more code surface for accessibility bugs, burger is overengineering for three short items). Tipping factor: empirical verification on the live site. Test matrix run on `edwincw-site.netlify.app` at 375px viewport: default text size renders cleanly with all three nav items + EC-W mark on one line, no wrapping, comfortable spacing. At 120% font-scaling (`document.documentElement.style.fontSize = '19.2px'`) "Case Studies" wraps to two lines but layout remains usable, all items still visible and tappable. At 130% (`20.8px`) same wrap, still usable. WCAG 1.4.10 reflow criterion satisfied (content usable, no horizontal scroll). Concluded the wrap-at-scaled-text state is "aesthetically imperfect but functionally fine" — the cognitive contract with text-scaled users is that layouts will reflow, and a two-line nav item is consistent with that expectation rather than a layout failure. Burger nav would solve a degraded-but-functional state for an accessibility minority while regressing the experience for the default case (every other mobile user gets one extra tap to reach Contact, the primary CTA). Roadmap state: burger nav is **off the roadmap permanently**. The condition under which it'd reopen: a fourth nav item is added (blog, writing, `/now`, etc.) which would crowd default-size mobile too, at which point the calculation flips. Until then, the inline three-item nav is the stable answer. No commits.
- [x] **Prompt 9.3 (Hero name colour + GitHub footer icon)** — Two small unrelated polish items shipped together. (1) **Hero name colour:** the serif italic signature "Edwin Collings-Wells" above the display h1 in `src/components/Hero.tsx` changed from `text-[var(--color-muted)]` to `text-[var(--color-primary)]` — single Tailwind arbitrary-value swap on the existing `<p>`, all other classes preserved (`font-serif-italic text-[20px] mb-4`). Computed colour verified as `rgb(18, 78, 102)` = `#124E66`. Intentional decision to bring real teal into the landing state and let the signature pop — accepts that this is the only place teal is used non-interactively (other uses: eyebrows, `.link` rest, active-nav underline, all of which are interactive or accent contexts), but the reasoning was that the signature reads as a decorative personal flourish rather than competing with the active-state vocabulary. (2) **GitHub footer icon:** added to `src/components/Footer.tsx` to the left of the existing LinkedIn icon. Final order left-to-right: GitHub, LinkedIn, Mail. Icon is inline SVG using GitHub's official mark path, matching the existing brand-mark convention (LinkedIn is also inline SVG; Mail uses `lucide-react`). New `GithubIcon` component sits alongside `LinkedinIcon`. Anchor: `href="https://github.com/edwincwells/"`, `target="_blank"`, `rel="noopener noreferrer"`, `aria-label="GitHub"`, shared `iconLinkClass` (rest `text-[var(--color-muted)]`, `hover:text-[var(--color-primary)]`, 180ms transition), `w-4 h-4` (16×16, matching existing). **Convention noted:** brand marks (LinkedIn, GitHub) are deliberately inline SVG in this codebase rather than from `lucide-react`; generic icons (Mail) use `lucide-react`. The split is reasonable — brand marks need official artwork for trademark/recognisability reasons, generic icons benefit from library consistency. Worth applying the same rule to any future icon additions. Verified on `/` and `/about` (footer renders identically), `npm run build` clean. Commits: one local commit.
- [x] **Prompt 9.4 (Cross-functional value + About final sentence)** — Two small content edits shipped together. (1) **Cross-functional influence credential:** in `src/components/Credentials.tsx`, the value of the "Cross-functional Influence" cell changed from `50+` to `Design · Product · Engineering · Executive` (typographic middle dot, U+00B7, single space either side). The original `50+` was a unit-less number in a four-cell block where the other three cells are descriptive text values ("Director of UX, Harri", "Enterprise HCM & Workforce Platforms", "Globally distributed team of 6") — the number didn't match the pattern and didn't tell a specific story about which functions are influenced. Function list matches the existing cell pattern, removes unit ambiguity, and aligns with Edwin's positioning for senior leadership roles. Choice of "Executive" over "Commercial" was deliberate: Executive frames vertically-integrated leadership (influencing upward to senior decision-makers), Commercial frames horizontally-integrated leadership (peer collaboration across product/sales/CS). For senior leadership / experience strategy / product strategy targets, the Executive signal is stronger — provided it's honest to Edwin's day-to-day, which it is at Harri. (2) **About final sentence:** in `src/app/about/AboutContent.tsx`, the second sentence of the final prose paragraph changed from "Always happy to talk about work, AI in enterprise, or the smallholding I'm quietly planning on the side." to "Always happy to talk about work and the future of design, or swap gardening and food growing tips." First sentence ("I'm based between Bournemouth and London.") preserved. The new line is more present-tense and accessible — readers can imagine taking Edwin up on the offer immediately, vs. "smallholding" which signalled a private long-game project. Trade-off: drops the explicit "AI in enterprise" thread; "future of design" is broader and vaguer but reads as openness rather than evasion in a personal-bio context. Edwin's choice. Apostrophe encoding pattern (`&apos;`) preserved to match surrounding paragraphs. Commits: one local commit.
- [x] **Prompt 9.6 (V1 prep)** — Final pre-cutover bundle: five small items shipped together. (1) **Case study URLs:** `src/components/SelectedWork.tsx` updated with the live portfolio slide URLs. Salli case study now links to `https://portfolio.edwincw.com/slide/2`, Rewards & Recognition to `https://portfolio.edwincw.com/slide/14`. External link treatment (`target="_blank"`, `rel="noopener noreferrer"`, ↗ arrow) preserved. (2) **Favicon:** Edwin designed and dropped `src/app/icon.svg` (824 B, teal `#124E66` background, paper-warm "E" mark, 32×32 viewBox) and `src/app/apple-icon.png` (2.5 KB, 180×180, same composition). The default `create-next-app` `favicon.ico` was deleted from `src/app/`. Next.js App Router auto-generates `<link rel="icon">` and `<link rel="apple-touch-icon">` tags from these files — no manual `<link>` tags or `metadata.icons` config in `layout.tsx` needed (verified absent). Build output confirms `/icon.svg` and `/apple-icon.png` registered as auto-generated static routes. (3) **README:** replaced `create-next-app` boilerplate with concise project overview — stack, local dev commands, structure, license. (4) **LICENSE:** MIT, dated 2026, named for Edwin Collings-Wells. Repo root. (5) **Public-repo audit (report-only with one auto-fix exception):** ran six checks — tracked secret files (`✅` no issue; one false positive on `Credentials.tsx` matching the regex on the substring "Credentials"); hardcoded API keys/tokens/passwords (`✅` no issue); `.gitignore` coverage (`⚠️` IDE entries `.vscode/` and `.idea/` missing — Edwin added these manually pre-commit); TODO/FIXME comments (`✅` no issue); image alt text audit (`✅` no issue — all `<Image>` usages have descriptive alts: "Salli — agentic AI workforce management interface", "Rewards & Recognition — employee engagement platform", "FluxUX — AI-powered experiment generator", "Edwin Collings-Wells"); personal info exposure (`✅` no issue — only public-facing contact details exposed: gmail, LinkedIn, GitHub, general regions). The audit's one auto-fix-safe item (append `.DS_Store` and `.env*` to `.gitignore`) wasn't needed because both were already present. Note on prompt evolution: this prompt's broad "Do not run git commands" directive from earlier prompts was refined to "Do not run state-changing git commands" — read-only git operations (`git ls-files`, `git status`) are needed for audits and should be allowed. Folded into §9 prompting principles for future prompts. (6) **Rewards & Recognition image refresh:** separate small commit after the V1 prep — Edwin replaced `public/work/rewards-recognition.webp` with a fresh image. No code change needed (path-based reference unchanged); cache cleared via `rm -rf .next` to force Next.js image-optimization cache refresh. `npm run build` clean post-everything: `Compiled successfully in 2.8s`, all routes static-prerendered, no warnings. Commits: two local commits (V1 prep bundle, then image swap).
- [x] **Prompt 10 (Long-form case study route)** — First case study migrated onto this site at `/work/repositioning-product-design` ("The bottleneck was us — Repositioning Product Design for agentic engineering"). Supersedes §2's "portfolio stays as-is, linked externally"; §2 updated. Five files created, four modified. **Route:** `src/app/work/[slug]/page.tsx` is a Server Component exporting `generateStaticParams`, `generateMetadata` and `dynamicParams = false`, looking the slug up in `src/app/work/[slug]/caseStudies.ts` (a `Record<string, { metaTitle, description, Content }>`) and calling `notFound()` on a miss. `dynamicParams = false` makes unknown slugs a routing-layer 404 rather than an on-demand render — verified, `/work/nope` returns 404, the known slug 200. The registry holds only metadata strings and the component; each case study owns its own eyebrow/title/standfirst inside its content component, so there is no duplicated title to drift. Salli adds one registry entry plus one content file. **Metadata:** title `"The bottleneck was us — Edwin Collings-Wells"`, a ~150-char description, `alternates.canonical`, `openGraph` with `type: "article"`, and a `summary_large_image` Twitter card. Reuses the site `/og-image.png`; a bespoke per-case-study OG image is deferred, consistent with how About shipped. **Layout:** `src/components/CaseStudyLayout.tsx` (Client Component — `useScrollReveal`) reuses `Container`, `Section` and `useScrollReveal` with no new site-wide primitives. It exports the layout plus four block components — `Prose`, `Heading`, `Figure`, `Placeholder` — which live in the same file deliberately: they are parts of this layout rather than site-wide vocabulary, and one module means Salli imports the same set. A case study composes blocks; the layout owns measure, rhythm and reveal. Vertical rhythm is per-block top margins rather than `space-y-*`, because headings (`mt-16 md:mt-24`), figures (`my-12 md:my-16`) and pull quotes (`my-14 md:my-20`) each need different spacing; the wrapper is a plain block so adjacent margins collapse to the larger of the two, and `[&>*:first-child]:mt-0` stops the first block's margin collapsing through the wrapper. **Reading measure:** prose sits in `Container width="narrow"` — verified as 680px, identical to `/about` and the homepage thesis. **Diagram breakout — decided, not assumed:** body diagrams step out to 920px (824px of content after the 48px desktop gutter) against the 584px prose measure, collapsing to the reading column below `md`. Rationale: Diagram 2's two branching paths and Diagram 3's four sequential decision nodes both cramp at 680px, and 920px is a visible step out without abandoning the reading rhythm. Implemented as a local `Measured` helper inside `CaseStudyLayout`, *not* a new `Container` variant, and not a negative-margin breakout. The hero sits wider still at full `Container` width (1184px of content) so the page reads hero > diagrams > prose rather than two competing widths. **Pull quotes:** `src/components/PullQuote.tsx` — see §5.2 for the treatment and the rejected alternatives. All three sit above the sentences they are pulled from, as hooks rather than echoes, exactly where the source marked them. A larger `variant="lead"` was built for quote 2 (the thesis quote, "We gave up execution on the work where our design system already knew the answer…") and removed on review the same prompt — too big, and the second size earned nothing. Single size, and the component supplies the quotation marks so no case study has to remember them. **Content:** `RepositioningProductDesignContent.tsx` follows `AboutContent.tsx`'s naming convention (PascalCase + `Content`, colocated in the route folder) but is a plain **Server** Component — the client boundary sits on `CaseStudyLayout`, `Figure` and `PullQuote`, so the essay text never enters the client bundle. `AboutContent` carries `"use client"` only because it calls `useScrollReveal` directly; the naming convention carries over, the directive does not. **Scroll reveal:** header block as one unit, hero as one unit, each `Figure` and each `PullQuote` individually; prose paragraphs deliberately do not animate — a long article of popping paragraphs is the wrong register. No bespoke transitions or keyframes were introduced anywhere (grep-verified), so the existing `[data-reveal]` reduced-motion override in `globals.css` governs entirely and needed no new CSS. **Visual slots — five, not six.** The prompt said "six in total" then listed 1 hero + 3 inline SVG diagrams + 1 raster = five, and the marked-up source has exactly five slot comments. Built the five that are marked; flagged the discrepancy rather than inventing a sixth. All ship as empty dashed-border placeholders (`--color-border`, `--radius-lg`, `.text-small` muted label) matching the Prompt 4 hero-placeholder precedent, each holding its aspect ratio so nothing shifts when the visual lands. Measured at 1280px: hero 21/9 (2.33), Diagrams 1 and 2 identical at 16/9 (1.78) so the before/after pair reads as one state then the same state changed, Diagram 3 at 16/10, raster at 16/10. At 375px they switch to 16/9, 4/3, 4/3, 3/4 and 16/10 respectively — Diagram 3's tall mobile box is deliberate, since four stacked decision nodes are the constraint the source itself calls out, and building the container now means Prompt 11 designs mobile-first against a real box. The raster `Figure` renders its placeholder while `image` is absent and switches to `next/image` (explicit `width`/`height`, `--radius-md` corners, `sizes`) when Prompt 11 supplies the file — no fake image, no guessed dimensions. **Figure captions are provisional.** The source marked "needs a caption" on each figure without supplying text, so they were authored during this prompt as placeholders. Edwin's call: finalise them in Prompt 11 once the visuals are settled, since the caption should describe what the diagram actually ends up showing. **Docs corrections in scope:** `README.md` and §7 both said Netlify deploys from `develop`. The prompt's correction said `production`, but no such branch exists on the remote — Edwin confirmed the deploy branch is **`main`**, with `develop` as the working branch. Both places corrected to `main`, along with §14 item 1, which carried the same stale fact as an open question ("`develop` if that's the production branch; `main` if…"). Historical `develop` references in §9 and earlier §10 rows left alone — they record what was true at the time. **Verification:** `npm run build` clean with `/work/[slug]` emitted as SSG with one path; `npm run lint` clean (one real catch fixed mid-build — `react-hooks/refs` fires when `useScrollReveal`'s return object is accessed as `hook.ref` rather than destructured, so both hooks in `CaseStudyLayout` are destructured like every other consumer); console clean; heading order h1 → seven h2s with no skips; every figure has a real `figcaption`; hero slot and all three pull quotes carry `aria-hidden="true"`; no horizontal overflow at 375px. **Post-review revisions (same prompt):** eyebrow changed from "Case study" to "Leadership Case Study"; the `variant="lead"` pull-quote size removed entirely; quotation marks added inside `PullQuote`; deploy branch corrected from `production` to `main`.
- [x] **Prompt 11 (Case study visuals)** — All five slots filled. Four new files in `src/components/diagrams/` plus `DiagramPrimitives.tsx`; `CaseStudyLayout.tsx` and the content file modified. Built in four gated stages, with a stop for review after the before/after pair.
  - **Construction rules.** `HeroDiagram.tsx` is the reference for *how* diagrams are built here, not for behaviour — it stays the site's only kinetic element and everything in this prompt is static. Three things carry over and will silently break if ignored: `var()` colours must go through `style`, never presentation attributes (no browser resolves `fill="var(…)"`, documented at `HeroDiagram.tsx:5-6`); desktop and mobile are separate geometry objects toggled by `hidden md:block` / `md:hidden` rather than responsive coordinate maths; and because both variants sit in the DOM at once, every `id` must be namespaced per variant — here that is the arrowhead markers. Two deliberate departures: these are **Server Components** (no hooks, and `Figure` already owns the reveal, so they stay out of the client bundle), and they add arrowhead `<marker>`s, which the hero loop never needed. Markers are styled directly rather than via `context-stroke`, which isn't reliable enough to depend on.
  - **No ochre.** §5.1 and §6.2 reserve `--color-secondary` for the hero diagram's travelling signal. Structure is `--color-primary` at 0.5, nodes `--color-surface` on `--color-hairline`, process labels `--color-foreground`, work-item chips and edge labels `--color-muted`. Recorded so it isn't re-argued.
  - **Node vocabulary.** Process steps are rounded rects (rx 6, 0.8 hairline, 13px/500/0.04em label, multi-line via `tspan`). Work items are pills in muted — deliberately a different class of object so a kind of work never reads as a stage of delivery. A tier is always a teal eyebrow (`TIER 1` / `TIER 2`, 0.08em, `--color-primary`), whether it labels a lane entry in D2 or is the whole label of a terminal node in D3; `Node` supports an eyebrow with no body lines for that case.
  - **D1 / D2 — parallel by construction.** Both are `0 0 880 330`, rendering 824 × 309, with the entry node at cx 84 and the exit at cx 796 in both, so "Work scoped" and "Build" land on identical pixels as the reader moves between them. Only the middle changes: D1 converges *before* design (four work types funnel into one queue), D2 converges *at build* (two tier lanes stay separate). Work-type labels are plural on purpose — categories, not four specific tickets — and the set spans the complexity range (two obviously small, two structural) because the argument is that everything went down one lane regardless.
  - **The queue reads as a backlog, not a hub.** Reviewed as too flat on first pass: a routing node with the same weight as every other node describes a process rather than showing a bottleneck. Three approaches were put up (narrow the lane at the pinch; weight the node's stroke; stack it). Chosen: **stack**, via a `stack` prop on `Node` that draws layers behind the front rect, offset straight up, each fainter. Straight up rather than up-and-right because an offset to the right would cross the outgoing connector, and up-and-left would cross the four incoming funnel lines. On mobile the incoming arrow had to land on the top of the outermost layer (334 → 322) or the pile paints over the arrowhead. Rejected: weighting the stroke, which reads as "important" rather than "stuck" — close to the opposite of the point.
  - **D3 — tier decision flow.** `0 0 880 240` desktop (824 × 225), `0 0 340 545` mobile. Every yes leaves the chain immediately onto one shared rail into Tier 1; the chain itself is the no path, so Tier 2 is only reachable by surviving all four questions. That asymmetry is the argument, drawn rather than captioned. **The branches curve into the rail like tributaries** — the first pass ran them as straight verticals meeting a horizontal, and four parallel verticals under a horizontal line render as a row of empty boxes, so the diagram read as a table. Mobile had the same latent problem rotated. No entry node, deliberately: D1 and D2 open on "Work scoped", but D3 zooms into one step rather than continuing that flow, so reusing the entry would misplace the reader. The four criteria are Edwin's guidance verbatim, line-broken to fit, never reworded — "or pattern" was restored on review after the source markdown comment turned out to have dropped it. **The tier guidance doc is not in this repo**, so the other three criteria could carry the same drift; they were listed back for checking rather than claimed as verified.
  - **Mobile SVGs are width-capped at 400px.** Found on review, and a genuine miss: verification had only tested 375px, where D3 measured a comfortable 524px. But an uncapped SVG keeps scaling with its container, so by a 600px viewport D3 rendered **885px** tall (D1 812, D2 763) for no gain in legibility. The fix is `mx-auto max-w-[400px]` on each mobile wrapper, applied to all three. **This is why a simplified mobile variant was not needed** — the content was never the problem, unbounded scaling was, and a second variant would have meant two copies of the tiering rules to keep in step.
  - **Hero — rebuilt from a different source.** First two attempts derived it from D3 and both failed: whole nodes read as empty boxes, and enlarged arcs read as a generic wave pattern carrying no meaning before the reader has scrolled. Rebuilt from **D1's convergence** instead — several lanes funnelling into one is legible as constriction even fully abstracted, and it states the title. `ConvergenceHero.tsx` (renamed from `TierDecisionHero` once the source changed). **Lines only**, which resolves four separate review points at once: nothing can be bisected by the frame because there is no object to cut; nothing terminates on a flat edge because the lowest lane is a curve on its way up; dark mode has no fills to go heavy on (the earlier node-based version's `--color-surface` fills read as solid blocks against charcoal); and both side edges run through an SVG **luminance mask** so lanes dissolve out of frame instead of hard-stopping. The black and white in that mask gradient are mask channels, not theme colours — the only hex in `src/components/diagrams/`, and noted in the file so a future grep doesn't flag it. Dead space between standfirst and hero closed from roughly 250px to **40px**, by starting the composition at the top of its own frame and tightening the layout's hero margin from `mt-12 md:mt-16` to `mt-8 md:mt-10`. Mobile keeps the hero: a steeper spread plus a heavier stroke (2 units against desktop's 1.25, compensating for the ~0.55 render scale that would otherwise put the line under a pixel) makes the funnel clearly legible at 375px.
  - **Raster slot wired.** `next/image`, explicit 1400 × 875, `--radius-md`, rendering 584 × 365 at exactly 16:10 through the Next optimiser with a srcset. Edwin supplied a stand-in at the requested dimensions first, then the real capture at the same size — `public/work/review-agent-comment.webp`, a review comment pinned to a Figma design headed "Claude review", flagging a naming inconsistency between a tile, the agent screen and the spec. Alt text was rewritten against the real image once it landed; the first version had been written blind to the intended subject and was accurate but generic.
  - **Dark mode and the raster — decided, no dark variant.** The screenshot is a light interface, so it sits brighter than the charcoal page around it. `WorkRow.tsx` solves this on the homepage with hand-authored `-dark` plates swapped via `<picture>`, and that pattern exists precisely because **`next/image` has no `prefers-color-scheme` art-direction API** — adopting it here would mean dropping `next/image` for this one figure. **Edwin's call: leave it.** A screenshot of a light product is light, and a case study figure is evidence rather than site chrome, so it doesn't need to match the page's tone the way the work-row plates do. Case study rasters do not need dark variants; don't reopen unless a future case study ships imagery that genuinely jars.
  - **Figure captions final** (revised after the visuals settled): D1 "Before. Every request went through Product Design, whatever its complexity."; D2 "After. Tier 1 puts Product Design at kickoff. Tier 2 is PM-led, with design review before build."; D3 "A single yes sends work to Tier 1. Tier 2 has to clear all four."; image "The review agent flagging an inconsistency between a tile label, the screen it opens, and the spec."
  - **Captions align to the reading column, never the figure's measure.** A breakout diagram is wider than the text, but its caption *is* text — hanging it off the diagram's left edge puts it out of step with every other line on the page. `Figure` renders the visual inside `Measured` and the `figcaption` inside `Container width="narrow"`, so all four captions share the prose left edge (348px at 1280, 92 at 768, 24 at 375) while the three diagrams keep their 824px breakout.
  - **Screenshot legibility — measured, and a trap worth recording.** The comment text renders at roughly **7px on desktop** (584px column) and **4px at 375px**. A first re-crop zoomed the Figma canvas in, which magnified the design tiles but barely moved the comment: **Figma's comment panel is fixed-size UI chrome and does not scale with canvas zoom**, so zooming makes everything *except* the thing you need bigger. The only lever is cropping the frame tighter around the panel itself. **Decided: ships as-is, don't reopen.** The caption states exactly what the comment flags, so a reader who can't read the screenshot loses nothing, and the image is doing the job of evidence — proof that review happens on real designs — rather than being a document to be read. If a future crop is attempted anyway, the trap above is the thing to remember: zooming the Figma canvas will not help.
  - **Lighthouse, run against a production build** (`npx lighthouse`, headless Chrome, `next start`): desktop **100 accessibility / 100 best practices / 100 SEO** with zero failing audits; mobile **94 performance / 100 / 100 / 100**. The mobile performance figure is LCP under simulated 4G, consistent with the 94–98 this site has recorded since Prompt 8, and not introduced by the visuals. Earlier prompt-11 reports said Lighthouse was unavailable — it is available via `npx`, which is worth remembering rather than re-deriving.
  - **Verification.** `npm run build` and `npm run lint` clean throughout. No hardcoded hex in `src/components/diagrams/` apart from the documented mask channels. No duplicate ids page-wide, so desktop and mobile marker defs are not colliding. Heading order h1 → seven h2s, no skips; 4/4 figures carry a real `figcaption`; 6/6 body diagram SVGs carry `role="img"` with `<title>` and `<desc>`; the hero carries none of those and sits inside `aria-hidden` with zero focusable descendants. Computed styles confirm **zero animation and zero transition inside every diagram**, so the existing `[data-reveal]` reduced-motion override in `globals.css` remains the only motion mechanism. No horizontal overflow at 375, 600, 768 or 1280, light and dark. Lighthouse results are in the row above.
  - **Swapping an image file without renaming it needs two caches cleared, not one.** Prompt 9.6 already recorded `rm -rf .next` for this when the Rewards image was replaced; it recurred here and cost a debugging round, so the specifics are worth having. Next's optimiser caches by URL, so a same-named replacement is invisible to it and it keeps serving the old bytes — the tell is `x-nextjs-cache: STALE` on the `/_next/image?...` response. **Next 16 keeps two image caches: `.next/cache/images` for production and `.next/dev/cache/images` for the dev server.** Clearing only the production one changes nothing in dev. Clear both, restart, and the header flips to `MISS`. Second lesson, on verifying it: checking the replacement with a `?v=` cache-buster on the raw file proves nothing, because it bypasses the optimiser — it will show the new image while the page still serves the old one. Verify against the page's own un-busted `/_next/image` URL, and compare pixels with a tolerance rather than a hash, since the optimiser re-encodes (a correct match here measured 0.68 mean channel difference, not 0).
- [x] **Prompt 12 (Homepage Selected Work entry)** — The leadership case study added as the **first** Selected Work row, taking the section from four to five. Three files modified, one created.
  - **WorkRow now takes an image path or a component**, as a discriminated union with `never` guards: `{ imageSrc, imageSrcDark, imageAlt, visual?: never } | { visual, imageSrc?: never, ... }`. The four existing call sites are untouched and the compiler rejects both passing both and passing neither — **verified with a throwaway type-check file rather than assumed**, which confirmed errors on exactly those two cases and none on the two valid ones.
  - **Narrow on `imageSrc`, not `visual`.** The first attempt branched on `props.visual` and failed to type check: `ReactNode` already includes `undefined`, so it isn't a usable discriminant. `imageSrc` is `string` on one branch and `undefined` on the other, which narrows cleanly. Worth remembering for any future union of this shape.
  - **The image branch moved into an internal `WorkRowImage`.** It owns the `imgRef` and the `prefers-color-scheme` re-selection effect. Hooks can't be conditional, so leaving that effect in `WorkRow` would attach a `matchMedia` listener to the diagram row that has no second plate to swap to; extracting means it simply doesn't mount there.
  - **A component visual must not sit in a flex wrapper.** The first build centred it with `flex items-center justify-center` and the SVG rendered **300×225 inside a 560×420 box** — `width="100%"` resolves against the container in normal flow, but as a flex item the SVG falls back toward its intrinsic size. A plain `absolute inset-0` block fixes it; measured 560×420 filling the box exactly. The hero never hit this because its wrapper was already a plain div.
  - **Link treatment now splits on `linkExternal`.** External keeps `target="_blank"`, `rel="noopener noreferrer"` and the `ArrowUpRight`; internal renders `next/link` with neither. The arrow was previously unconditional, so it becomes conditional — the only change the existing four see, and it resolves identically for them. The arrow now means "this leaves the site", which is worth preserving as more studies migrate.
  - **The visual is rendered, not exported.** `ConvergenceMark.tsx` supplies 4:3 geometry to the `Converge` renderer already in `ConvergenceHero.tsx`, which gained two `export` keywords and nothing else — so the hero's own output is unchanged by construction. A `.webp` would have baked in light-mode colours; instead every stroke resolves through `--color-primary`, confirmed rendering in the dark-scheme teal against charcoal. Desktop and mobile presets differ only in `id` and stroke (1.5 against 2.75) because the box is 4:3 at both breakpoints but renders 560px wide against 327px.
  - **No alt text on the mark, deliberately** — `Converge` renders `aria-hidden` with `focusable="false"`. The row's `h3` and description already say what the entry is, and an abstract line figure has nothing to add that they don't. A deliberate divergence from the four image rows, which do carry descriptive alt because a screenshot has content the text doesn't.
  - **Sequence.** Inserting first flipped `reverse` on all four existing rows, as expected. Verified rendered rather than assumed: image side runs **left, right, left, right, left**, and `--reveal-index` runs **0–4**. `revealIndex` needed no code change — it is a plain number written to a custom property and multiplied by 80ms in `globals.css`. Index 4 means the last row waits 320ms after entering the viewport; on a slow scroll each row hesitates by its own delay, on a fast scroll several cross the threshold together and it reads as an intended cascade. Kept as-is.
  - **`id="selected-work"` added to the section.** Introduced so the section could be anchored to during verification (the preview pane only repaints on navigation, so scrolling to it by script produced blank captures). Kept because it matches the existing `id="contact"` convention and is the natural target if a `/work` index or nav link ever needs it. Flagged rather than slipped in.
  - **Label and grouping — answered, not built.** No label mechanism is needed: `eyebrow` already does that job and already varies by type across the four. No grouping either — five entries split by type gives groups of one and two, so headers would advertise how thin each group is rather than organising anything, and §11 warns off adding homepage structure. Sequence carries the emphasis. Noted in passing: **the four existing eyebrows are already inconsistent** — two numbered, two descriptive, and mixed casing ("Design System Project" against "Product innovation project"). A fifth entry makes that more visible; left alone.
  - **Nav flag — decided: stays external for now.** "Case Studies" still points at portfolio.edwincw.com while the homepage's first entry is internal, so a visitor clicking the nav lands somewhere that doesn't contain the piece they just saw. Edwin's call to leave it. Awkward but not untenable with one migrated study — and worth reopening on a specific trigger rather than on taste: **when Salli migrates**, because at that point the nav points away from most of the work. Likely resolution then is a `/work` index the nav targets, rather than repointing it at a single study.
  - **Verification.** Build and lint clean. Five rows at 375, 768 and 1280, light and dark; no horizontal overflow. Row 1 confirmed in the DOM as an internal href with no `target`, no `rel` and no arrow; rows 2–5 still carry all three plus their descriptive alt. Lighthouse on the **homepage** against a production build: desktop **100 accessibility / 100 best practices / 100 SEO** with zero failing audits; mobile **92 performance / 100 / 100 / 100**. Accessibility — the figure the prompt asked to hold — is unchanged at 100. On the mobile performance number: the brief's pre-cutover homepage reading of 98 was taken against the deployed Netlify build, so it is not directly comparable to a localhost run, but a fifth row does add weight and the honest check is a deployed run before this reaches `main`.
- [x] **Prompt 13 (Selected Work row visual)** — The convergence mark replaced by the before/after delivery model pair. It was too sparse against four product screenshots, and it duplicated the case study's hero exactly, so clicking through showed the same figure twice. `ConvergenceMark.tsx` left in place, unused, as instructed. One file created, four modified.
  - **The pair stacks because the geometry already agreed.** Both halves are `viewBox="0 0 880 330"` with the same `AXIS = 165`, entry node at `cx 84` and exit at `cx 796` — a constraint held deliberately since Prompt 11. Stacked they give **880×660, exactly the 4:3 of the row box**, and "Work scoped" and "Build" line up vertically between the two. **Verified in the rendered DOM, not from the source**: both halves render 560×210 (stacking to 420 in a 420-tall box), and the entry nodes measure at the same page x in both, as do the exits. That alignment is what makes it read as one state and then the same state changed; if either half's geometry moves, this silently stops working.
  - **Two scale factors, not one.** The row displays 880 units in ~560px (0.64) and ~327px on mobile (0.37). Strokes and text can't be corrected by the same multiplier: strokes can grow freely, but **node text is capped by the box it sits in** — "Product Design" runs to 115 units at fontSize 15 against about 124 units of usable width inside a 140-unit node, so 15 is the ceiling. A single `scale` prop would have been the wrong instrument. `DiagramMetrics` in `DiagramPrimitives.tsx` carries the values explicitly: row uses fontSize 15 / stroke 1.6 / node stroke 1.4, mobile the same text with strokes at 2.7 / 2.2 because a 1.6-unit line renders 0.59px at that scale and goes patchy.
  - **Node text lands near 9.5px and stays unreadable — accepted, not a defect.** The labels are what make it read as real work rather than decoration, and the Salli row's UI text is illegible at exactly the same size without reading as broken. Edwin's call, and mobile held up better than predicted: at 327px the structure and the before/after difference are both perfectly clear.
  - **Defaults are what protect the case study.** `Connector`, `Node` and `Chip` gained an optional `strokeWidth`; `Desktop` in both delivery diagrams gained an optional `metrics` defaulting to `CASE_STUDY_METRICS`. The case study passes nothing, so it renders exactly as before — **verified rather than assumed**: connector stroke still 1, node stroke 0.8, text 13px, marker ids unsuffixed. That was the main regression risk in this change.
  - **Marker ids need namespacing when a diagram appears twice on one page.** `Desktop` gained an `idSuffix` because the homepage now renders the same arrowhead marker definitions the case study does; without it the ids would collide across pages' worth of markup in the same DOM. The row uses `-row` and `-row-mobile`.
  - **"Before" and "After" are HTML, not SVG text.** SVG text would shrink with the drawing and be unreadable at exactly the size where the label matters most; HTML holds a true 12px at every breakpoint and uses `.text-eyebrow` with `--color-muted` — literally the site's eyebrow vocabulary rather than an imitation. Positioned over the empty top-left of each half. First pass used `left-0 top-0` and the row box's rounded corner clipped the "B"; inset to `left-3 top-2`.
  - **Decorative.** The wrapper carries `aria-hidden="true"`, which removes the whole subtree from the accessibility tree, so the `role="img"` and `<title>`/`<desc>` inside each half need no change. The row's `h3` and description carry the meaning, consistent with the mark it replaced. Verified: zero focusable descendants inside anything aria-hidden.
  - **Verification.** Build and lint clean. Five rows at 375, 768 and 1280, light and dark, no horizontal overflow. Row 1 still internal with no `target` and no arrow; rows 2–5 unchanged with their descriptive alt and external treatment; `--reveal-index` still 0–4. Lighthouse on the homepage against a production build: desktop **100 accessibility / 100 best practices / 100 SEO**, mobile **90 performance / 100 / 100 / 100**, with no accessibility-related audit failures on either. **Mobile performance moved 92 → 90** against Prompt 12's reading — the pair puts four diagrams' worth of SVG in the DOM where the mark put two, since both breakpoint variants ship and are hidden with CSS. Still clear of the ≥90 target, but it is a real cost of the `hidden md:block` pattern and worth knowing if more rendered visuals land here.
- [x] **Prompt 13.1 (Cross-page scroll fix)** — Edwin noticed that moving between pages rendered the new page at the *old* scroll position for a moment and then visibly scrolled to the top: homepage → case study, case study → home or About, all of it. **Cause: `html { scroll-behavior: smooth }` in `globals.css`.** It was added in Prompt 9.1 for the `/#contact` anchor, but it applies to every programmatic scroll — including the `scrollTo(0, 0)` the App Router performs on each navigation, which therefore animated instead of jumping. A well-known Next.js interaction, and confirmed rather than assumed: computed `scroll-behavior` on `html` was `smooth`, and a plain `scrollTo` did not land synchronously.
  - **Fix:** the global rule is gone, and smooth scrolling now lives on the one link that wants it. `Nav.tsx` intercepts the Contact click **only when already on `/`**, calls `scrollIntoView({ behavior: "smooth" })` and updates the URL with `replaceState`; from `/about` or a case study it doesn't intercept at all, so the `Link` navigates and the router lands on the anchor. `replaceState` rather than `pushState` because it's a move within the current page and shouldn't cost a back press to undo.
  - **Reduced motion had to move with it.** The old CSS rule was covered by the global `prefers-reduced-motion` reset in `globals.css`; a `scrollIntoView` call is not, so the handler checks `matchMedia` and passes `behavior: "auto"` when reduce is set. Easy thing to lose in this kind of refactor.
  - **Verified behaviourally, not just by reading the CSS.** From a scrolled page, every cross-page navigation now measures scroll 0 within 60ms of the click — home → About, About → home, home → case study (from 2116px), case study → home (from 1800px). Computed `scroll-behavior` is `auto`. The cross-page Contact case still works: from `/about` scrolled to 800px, clicking Contact navigates to `/#contact`.
  - **One thing not verified here:** the smooth animation itself on the same-page Contact scroll. The preview pane reports `document.visibilityState === "hidden"`, and a hidden page is not given animation frames, so a smooth scroll cannot progress in it — the handler was confirmed to run (preventDefault fired, URL updated, page moved toward the target) but the animation quality needs a real browser. Worth a manual check.
- [x] **Pre-cutover Lighthouse (Netlify deploy preview)** — Lighthouse run against the deployed Netlify preview after pushing all V1 work to `develop`. Scores: **mobile 98 Performance / 100 Accessibility / 100 Best Practices / 100 SEO**; **desktop 100 / 100 / 100 / 100**. Comfortably clear of the ≥90 target. The mobile Performance dropping a single point from 100 is almost certainly LCP throttling on the OG-image or hero portrait under Lighthouse's simulated 4G conditions — not worth chasing for V1, but a baseline if V1.1 work ever moves the score in either direction. Cleared for cutover.
- [x] **OG image replacement** — Edwin dropped a new share card into `public/`. Two files modified, one file renamed.
  - **It closes a real copy drift, not just a refresh.** The old card read "Experience Strategy & Product Leadership" — the site title as it stood at Prompt 8. The title has since become "Edwin Collings-Wells — Product Design Leadership for AI", and the card had never followed. The new card reads "Product Design Leadership" over "AI-Augmented Design Transformation", so the headline now matches the metadata. The subtitle is OG-only copy and appears nowhere else on the site; that is fine, but it means the card is a third place the positioning is written, and it will need checking the next time §2 moves.
  - **The file itself needed nothing.** 1200×630, 37 KB, background `#F7F5F1` matching the light `themeColor`. Checked for transparency because a PNG with an alpha channel gets composited by scrapers onto a background of their choosing, and near-black text on the composite would have been the failure — **it is fully opaque, but only a filtered decode shows that**. A first pass read the raw IDAT bytes without undoing the PNG per-row filters and reported alpha 0, which was an artefact of the unfiltered read. Worth knowing if this check is ever repeated: PNG scanlines are filtered, so raw byte inspection of a channel is meaningless until the filters are reversed.
  - **Renamed to `og-image-v2.png` to bust share caches.** LinkedIn, Facebook and Slack key their unfurl cache on the image URL, so a same-named replacement keeps serving the old card for days to weeks regardless of what is deployed. This is the same class of problem Prompt 11 hit with the Next optimiser (recorded there as needing `rm -rf .next`), with the difference that **social caches are not ours to clear** — the debuggers are a request, not a flush. Changing the URL is the only fix that works on first share. §14 item 8 keeps the LinkedIn Post Inspector step as a fallback rather than the mechanism.
  - **Case study OG alt corrected while in the file.** `work/[slug]/page.tsx` was passing `study.metaTitle` as the image alt, so the case study advertised alt text of "The bottleneck was us — Edwin Collings-Wells" for the generic site card. Alt describes the image, not the page; it now matches the string in `layout.tsx`. A comment marks it to go back to being per-study if a bespoke per-case-study card ever lands (still deferred, per Prompt 10).
  - **Verification.** Build and lint clean; `/` still static, `/work/[slug]` still SSG. Both routes emit `og:image` and `twitter:image` as `https://www.edwincw.com/og-image-v2.png` with width 1200 / height 630 — absolute, via the existing `metadataBase`. New path serves 200 `image/png` with an ETag matching the new file's byte length; old path 404s, and nothing in the repo still references it.

---

## 11. Critical Do-Nots

- Do not reopen locked design decisions unless Edwin explicitly asks
- Do not suggest adding more sections to the homepage (keep to the 5)
- Do not suggest a blog or writing section for the initial build (may come later, not now)
- Do not default to generic SaaS patterns (three-up card grids, hero+three-columns, testimonial sliders, etc.)
- Do not over-format responses with heavy bullets and bold — Edwin prefers concise, prose-led responses
- Do not add Lorem Ipsum — use real copy from this brief, or leave clearly marked `[TBD]` placeholders
- Do not add emoji anywhere on the site
- Do not use Inter — use General Sans
- Do not use SemiBold (600) for headings except the hero display if Medium doesn't hold — use Medium (500)
- Do not introduce additional accent colours beyond teal + ochre
- Do not add a cursor follower, magnetic button, parallax, or page-transition animation
- Do not create `tailwind.config.ts` — Tailwind v4 is CSS-based
- Do not add `@apply` directives — use utility classes or plain CSS custom properties
- Do not add a CTA button, contact form, or new contact pattern on the About page — reuse the homepage `Contact.tsx` prose + inline `.link` pattern exactly (see §4 About spec)
- Do not re-state the hero positioning or re-argue the thesis on the About page — it's humanising and credentialling, not a positioning page

---

## 12. Prompt 7.x — Scope

Prompt 7 is structurally complete across 10 iterative passes (see §10). The component `src/components/HeroDiagram.tsx` renders the full five-node loop with entrance composition, 8s ongoing signal traversal, pulse-on-pass, and reduced-motion handling. What remains is a design polish pass driven by Edwin's separate notes, plus two known technical issues to resolve.

**Scope of 7.x**

Three threads, sequenced by whichever Edwin prioritises:

1. **Design tuning (Edwin's notes).** Node positions, path curvature, entrance timing, signal appearance, and pulse legibility are all at first-pass values. Edwin has separate design notes — apply those in dialogue with Claude Code. Expect this to be the bulk of 7.x and to need multiple turns.

2. **Reduced-motion hydration flash.** The static reduced-motion branch currently flashes ochre at Intent on every page load because the SSR/client state mismatch was knowingly deferred in 7.0. Server renders `reducedMotion: false` (no `window`), producing HTML with the animated branch; client's first render swaps to the static branch but the animated DOM has already painted. This is the more serious of the two flash issues — reduced-motion is an accessibility affordance and a consistent flash undermines its purpose. Likely approaches:
   - CSS-only state: render both branches with `display` controlled by `@media (prefers-reduced-motion: reduce)` — no JS state, no hydration mismatch. Requires duplicating the SVG markup but sidesteps the React lifecycle entirely.
   - Suppressed initial render: return `null` or an empty SVG until `useEffect` runs. Loses SSR content for the diagram area (first paint has no diagram), which may cause a visible pop-in — probably worse than the current flash.
   - Whole-SVG opacity gate: render everything at `opacity: 0` until the client-side state has resolved, then fade in. Adds a mount-time hesitation.
   - The CSS-only approach is likely cleanest. Worth trying first.

3. **Animated-branch flash (lower priority).** After settling on a 400ms fade-in delay (`2.8s`) in Prompt 7.9, an occasional brief blip still occurs on some refreshes. Acceptable for shipping but not clean. Worth re-testing on a production build (`npm run build && npm run start`) before investing more debugging time — dev-server load and HMR may be contributing. If it persists on the production build, deeper diagnosis needed.

**Constraints carried over from 7.0**

- No external dependencies (no Framer Motion, GSAP, anime.js, motion.dev). Pure SVG + CSS + minimal React.
- Component file under ~300 lines where possible; SVG verbosity is accepted.
- No Tailwind config changes, no `@apply`, no `tailwind.config.ts`.
- All diagram-specific hex constants (`NODE_FILL`, `NODE_STROKE`, `NEAR_BLACK`, `PATH_STROKE`, `SIGNAL`) stay hard-coded inside the component per §6.2.
- Reduced-motion behaviour from §6.6 still applies: entrance collapses to a single fade-in, signal is a static ochre marker at Intent, no pulse.
- Spec references: §6 (signature moment detail), §5.1 (colour), §5.2 (typography for labels), §11 (do-nots).

**Reference: original 7.0 scope**

The initial Prompt 7 scope (the specification that produced the current structural build) is preserved in git history — see commit `abf3e9f`'s accompanying documentation in the Prompt 7 row of §10 above, and the original brief referenced there. If a fresh Claude Code session needs the full structural spec (node coordinates, entrance timeline, path-drawing implementation details), §6 in this brief still holds as the canonical reference; the 7.0 commit and §10's detailed iteration log show the concrete choices made.

**Expect dialogue, not a one-shot**

Unlike Prompts 1–6, this iteration is explicitly interactive. Paste Edwin's design notes into the Claude Code session as they come, tune against rendered output, commit when visually verified.

---

## 13. V1.1 Backlog

Items deferred from V1 — none are blocking the live launch. Order is loose; pick up based on appetite and time.

- **`robots.txt` and `sitemap.xml`.** A `public/robots.txt` allowing all crawlers and pointing at the sitemap, plus a Next.js App Router `sitemap.ts` (or `public/sitemap.xml`) listing the two routes. Modest SEO benefit. Easy.
- **Schema.org / JSON-LD structured data.** A `Person` schema in `layout.tsx` (name, job title, employer, social profile URLs). Helps search engines surface a richer card in results. Optional but cheap.
- **Custom 404 page.** Override the default Next.js 404 with a `not-found.tsx` in `src/app/`. Match the editorial register — quiet, single line, link back home. Small craft signal.
- **Analytics decision.** Currently no analytics. Options: Plausible (privacy-respecting, paid, no cookie banner needed), Vercel Analytics (easy if hosted on Vercel — note Edwin is on Netlify, so this is moot), Fathom (similar to Plausible), GA4 (most data, requires cookie banner under UK GDPR, more setup). Decide before adding. For a job-search portfolio, knowing referrers and which routes attract attention is genuinely useful.
- **GitHub repo settings.** Enable Dependabot alerts and secret scanning (free for public repos, two clicks each in repo settings). Reduces the risk of dependency CVEs and accidental secret commits going unnoticed.
- **`npm audit`.** Run periodically and address genuine vulnerabilities. Most output is dev-only noise; rare real findings.
- **Pretty 404, robots, sitemap, schema, analytics** are roughly equally low-effort. The decision worth thinking about is analytics — the others are mechanical.

---

## 14. Cutover Checklist

Sequence for the Framer → Next.js (Netlify) DNS cutover. Do this when V1 code is fully shipped and the design brief is up to date.

1. **Netlify production branch.** Netlify deploys from `main`. Confirm this is still the configured branch in Netlify build settings before cutting over.
2. **Custom domain in Netlify.** In Netlify: Site settings → Domain management → Add custom domain → `www.edwincw.com`. Netlify provides specific DNS records to configure.
3. **DNS at 123 Reg.** Currently pointing at Framer. Update records per Netlify's instructions:
   - CNAME `www` → Netlify URL (typical), OR
   - A/AAAA records as Netlify recommends
   - Apex `edwincw.com` → redirect to `www.edwincw.com` (Netlify's domain alias feature handles this)
4. **Wait for propagation.** Typically 1–4 hours, sometimes up to 48. Use `dig www.edwincw.com` from Terminal to check resolution.
5. **HTTPS provisioning.** Netlify auto-provisions Let's Encrypt certificates. Takes a few minutes after DNS resolves. Verify via `https://www.edwincw.com` in browser.
6. **Live verification.** Click through every route, every link, on desktop and mobile. Confirm OG image renders correctly via browser DevTools → Network → check meta tags.
7. **Lighthouse on production.** Run Lighthouse against `https://www.edwincw.com` (NOT localhost). Aim for ≥90 on Performance, Accessibility, Best Practices, SEO. Below 90 = fix or defer.
8. **OG cache bust — now a fallback, not a required step.** The card is served from a versioned filename (`og-image-v2.png`), so social caches keyed on the old URL can't serve a stale card. If a stale preview somehow appears, run LinkedIn Post Inspector on `https://www.edwincw.com`, `/about` and `/work/repositioning-product-design` to force a refresh; Slack/iMessage caches expire on their own. **Any future card replacement should bump the version rather than overwrite the file** — LinkedIn's cache runs 7+ days and is not ours to clear.
9. **Manual share test.** Send the live URL to yourself in iMessage and Slack. Confirm preview renders with the new OG image. If old preview shows, wait or use platform-specific cache-bust tools.
10. **Done.** Site is live.

**Failure-recovery note.** If the Netlify deploy is materially broken post-cutover, point DNS back to Framer at 123 Reg as an emergency rollback. DNS propagation back to Framer also takes 1–4 hours, so this isn't instant — but it's the path. Don't attempt to fix in production under pressure if the broken state is severe; rollback first, fix second.

