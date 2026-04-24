# edwincw.com — Design Brief & Build Plan

> Self-contained design brief and build plan for a full rebuild of edwincw.com. If this conversation is hitting context limits, paste this document into a new Claude chat with: *"I'm rebuilding my personal site with Claude Code. Here's the full design brief. We're about to run Prompt N. Please pick up where the previous chat left off."*
>
> All decisions below are locked. Do not re-open unless Edwin explicitly asks.

---

## 1. Context

**Person:** Edwin Collings-Wells. Director of UX at Harri (enterprise HCM platform). Based in Bournemouth, UK. Leads a globally distributed design team of 6, with cross-functional influence across 50+ product, engineering, and commercial colleagues.

**Existing assets:**
- Current site: edwincw.com (built in Framer — being replaced)
- Portfolio: portfolio.edwincw.com (slide-based case study site, stays as-is, linked externally)
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

**Known issue (post-ship, tracked in Prompt 9.2):** mobile view is horizontally scrollable — content overflow introduced during the Prompt 9 build. Desktop composition is correct. To be resolved in the Prompt 9.2 mobile pass alongside the burger-nav work.

---

## 5. Visual System

### 5.1 Colour (implemented as CSS custom properties in globals.css @theme block)

| Token | Hex | Role |
|---|---|---|
| `--color-background` | `#F7F5F1` | Paper-warm surface |
| `--color-foreground` | `#111214` | Headings, emphasis |
| `--color-body` | `#2E3338` | Body text |
| `--color-muted` | `#6B7075` | Captions, meta, supporting |
| `--color-primary` | `#124E66` | Teal — accent, links, focus, diagram structure |
| `--color-secondary` | `#B8804A` | Ochre — sparingly, diagram signal, specific moments |
| `--color-border` | `#E5E7EB` | Dividers |

**Rules:**
- Three-tier text hierarchy (foreground / body / muted) — inspired by Linear's "multiple whites" trick, adapted for light mode
- Ochre used only in specific places (~5% of palette). Primarily: the diagram's traveling signal.
- Teal is the primary editorial accent, not just a link colour

### 5.2 Typography

| Family | Weights | Role |
|---|---|---|
| **General Sans** (free, Fontshare) | 400 Regular, 500 Medium, 600 SemiBold (hero only) | All functional type |
| **Source Serif 4 Italic** (free, Google Fonts — self-hosted) | 400 | Name/signature only |

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

**Plus:** `.font-serif-italic` for name/signature

**Notes:**
- Body at 17px (not 16px) — slightly more considered, magazine-like
- Hero subtitle deliberately quieter (20px not 24px) — display type carries the weight
- 500 Medium preferred over 600 SemiBold for editorial register
- Running text utility is named `.text-prose`, not `.text-body`, because Tailwind v4 auto-generates a `.text-body` utility from the `--color-body` token in `@theme` — using both causes a cascade collision. Do not rename back to `.text-body`.

### 5.3 Layout (implemented via Container and Section components in src/components/)

- **Max content width:** 1280px (`Container` default)
- **Narrow reading width:** 680px (`Container width="narrow"` — thesis body)
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
- **Deployment:** Netlify, free tier, deploying from `develop` branch
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
│       └── useScrollReveal.ts (IntersectionObserver hook for Tier 2 entrance motion)
├── next.config.ts            (turbopack.root set explicitly)
├── package.json
└── tsconfig.json
```

Note: `src/app/about/page.tsx` does not exist — the About route is a deferred build (see §10). The About `<Link>` in `Nav.tsx` has `prefetch={false}` to prevent a 404 on the prefetched RSC payload; when the About page lands, re-enable prefetch.

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
| 9.2 | Mobile pass — About page overflow fix + homepage mobile nav (burger) | Pending |

### Prompting principles

- Each prompt is **self-contained** — includes verbatim design system references so a fresh Claude Code session produces consistent output
- Each prompt includes: what it builds, exact paste-ready instruction, what to check after, exact git commit commands, what to verify on Netlify preview
- Prompts run sequentially on the `develop` branch; each commits before the next runs
- Only Prompt 7 (hero diagram) expects iteration in dialogue within Claude Code; everything else is one-shot
- Continue using the same Claude Code session across prompts unless something goes seriously wrong (cheap context-wise; preserves conventions)

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
- [x] **Prompt 8** — Polish pass shipped in a fresh Claude Code session (context hygiene; previous session was long from Prompt 7's 10 iterations). Tier 2 scroll-reveal implemented via new `src/components/useScrollReveal.ts` hook (IntersectionObserver, `-10%` bottom `rootMargin`, `observer.unobserve` after first trigger — no re-fire on scroll back up) and `[data-reveal]` / `[data-revealed="true"]` CSS in `globals.css`, with a `prefers-reduced-motion: reduce` override forcing final state (`opacity: 1; transform: none;`). Wired into `Thesis.tsx`, `Contact.tsx`, `Credentials.tsx` (per-cell, indices 0–3) and `SelectedWork.tsx`'s three `WorkRow` instances (per-row, indices 0–2 passed as `revealIndex` prop). Stagger implemented via `transition-delay: calc(var(--reveal-index, 0) * 80ms)` per §5.4 Tier 2 spec. Hero deliberately excluded — has its own Tier 1 entrance via the diagram. A11y fixes: added visually-hidden `<h2>Credentials</h2>` (`sr-only`) so landmark structure is complete without visual change; added `linkAriaLabel` prop on `WorkRow` with destination-aware labels ("Read the Salli case study", "Read the Rewards & Recognition case study", "Explore the FluxUX app"); upgraded work image alt text from filename-derived to descriptive. Page metadata added via `Metadata` export in `layout.tsx` — title ("Edwin Collings-Wells — Experience Strategy & Product Leadership"), description (reuses the exact §2 subtitle + credential), OpenGraph, Twitter summary card. No `og:image` (dedicated OG image deferred as follow-up). `HeroDiagram.tsx` not touched — the reduced-motion hydration flash is explicitly noted in the audit as deferred to Prompt 7.x to avoid double-tracking. Verification: manual tab-through confirmed focus ring visible on all 12 tab stops against paper-warm; scroll-reveal fires cleanly on first viewport entry and is bypassed correctly under emulated reduced-motion. Lighthouse run against local production build (`npm run build && npm run start`) in incognito Chrome with ColorZilla isolated per Prompt 5 notes. Scores recorded 2026-04-21 — Mobile: Performance 94, Accessibility 100, Best Practices 100, SEO 100; Desktop: Performance 100, Accessibility 100, Best Practices 96 (recorded before prefetch fix; expected 100 on re-run, not re-verified), SEO 100. LCP delta (mobile 3.1s vs desktop 0.7s) is throttled-network font download, not architectural — hero display waits on General Sans Medium woff2; fix would be disproportionate for one point of mobile score. Best Practices initially 96 on both profiles due to a "Browser errors were logged to the console" finding — Next.js's default `<Link>` prefetch was firing a `_rsc` request to `/about` which 404'd (About route doesn't exist yet). Fixed with `prefetch={false}` on the About link in `Nav.tsx` only; other nav links retain default prefetch. When the About page lands, revert this. Full audit in `docs/polish-audit.md`. Commits: two local commits — (1) scroll-reveal + a11y fixes; (2) metadata + prefetch fix + audit doc. Not pushed.
- [ ] **Prompt 8.1** — Not created. Prompt 8 landed clean after the prefetch fix; any future Lighthouse re-runs or deeper perf work would start here if needed.
- [x] **Prompt 9 (About page)** — Shipped in a fresh Claude Code session for context hygiene (prior session carried Prompt 8's verification state). `src/app/about/page.tsx` created as a Server Component, mirroring `Thesis.tsx`'s composition: single narrow `Container` (680px), `Section` primitive for vertical rhythm, eyebrow → h1 → photo → five-paragraph prose, then a centred contact block below. Top block (eyebrow, h1, photo, prose) left-aligned; contact block centred to match homepage `Contact.tsx` composition. Scroll-reveal wraps the whole page as a single reveal unit per the Thesis pattern (not per-block staggered). Photo rendered via `next/image` with `width={1200} height={800}` intrinsic + `w-full max-w-[480px] h-auto` for display sizing, `sizes="(max-width: 768px) 100vw, 480px"`, alt `"Edwin Collings-Wells"`, `rounded-[var(--radius-md)]`. Source file `public/about/edwin-portrait.webp` (landscape 3:2, 1200×800) placed by Edwin pre-build, not regenerated. Contact block duplicates the homepage prose/link pattern inline rather than parameterising `Contact.tsx` — the two callers differ (eyebrow "Get in touch" vs "Contact", About drops the second "Based in the UK, working globally." sentence because the final prose paragraph already handles location). Single centred sentence: "Reach me by email, or connect on LinkedIn." — `email` and `LinkedIn` as inline `.link` anchors (mailto + https), teal hover, 3px → 1px underline-offset at 180ms. `Nav.tsx` prefetch revert: `prefetch={false}` removed from the About `<Link>` in the same commit — the route now exists, default prefetch restored. Page metadata via `Metadata` export: title `"About — Edwin Collings-Wells"`, description `"Director of UX at Harri. Leading design for an AI-enabled enterprise HCM platform used by two million frontline workers each month."`. No `og:image` (inherits from root layout / still deferred per Prompt 8). Verified locally on desktop — narrow container composition clean, photo left-aligned at 480px cap, all `.link` hover states correct, reduced-motion bypass confirmed via DevTools emulation, `npm run build` clean with `/about` emitted as a static route. Commits: one local commit — About page + Nav prefetch revert. Not pushed (batching for Netlify credit discipline).
  - **Known issue deferred to Prompt 9.2:** mobile view is horizontally scrollable. Content additions on the About page have introduced overflow at narrow breakpoints — likely the photo's intrinsic `width={1200}` interacting with a missing `min-width: 0` on a flex/grid parent, or a long unbroken string (email/LinkedIn anchor text) escaping its container, or the narrow `Container` gutter math. Not yet diagnosed. Reproduce via DevTools device emulation (375px) and inspect `document.documentElement.scrollWidth` vs `clientWidth` to identify the offending element. Resolution deferred — see Prompt 9.2.
- [x] **Prompt 9.1 (Nav refinements)** — Shipped in a fresh Claude Code session. Three coordinated changes to `src/components/Nav.tsx` plus supporting edits to `Contact.tsx` and `globals.css`. (1) Home link removed from the nav item list — EC-W brand mark already links to `/` and serves as the home affordance; a separate Home link was redundant. Nav item list is now three: About, Case Studies ↗, Contact. (2) Contact link converted from its previous target to `<Link href="/#contact">`. On `/` it smooth-scrolls to the Contact section; on `/about` it navigates to `/` and lands on the `#contact` anchor. Contact section in `Contact.tsx` already had `id="contact"` on its `<Section>` wrapper — only `scroll-mt-[80px]` was added (measured nav height ~61px: `py-4` + text-sm content + 1px border; 80px gives a ~19px buffer above the section element, putting the eyebrow well clear of the sticky nav). (3) Active-page indication via `usePathname()` — current route's nav item gets `aria-current="page"`, `text-decoration: underline` with 1px thickness in `var(--color-primary)` teal, `text-underline-offset: 3px`, plus `--color-foreground` text colour for subtle tonal reinforcement. Static — no transition. Only About is route-backed among the remaining nav items; Case Studies is an external link (to `portfolio.edwincw.com`, `target="_blank"` / `rel="noopener noreferrer"` preserved, ↗ arrow preserved) and Contact is an in-page anchor — both are permanently excluded from active-state logic. In practice this means About is the only nav item that can ever be active, and on the homepage no nav item is active (the EC-W mark is the home affordance by convention). `Nav.tsx` was not previously a Client Component — `"use client"` directive added along with `usePathname` import. Supporting change: `html { scroll-behavior: smooth }` added to `globals.css` grouped with other `html` rules. The existing `prefers-reduced-motion: reduce` block in `globals.css` already sets `scroll-behavior: auto !important` via the universal selector, so no second `html`-specific override was added — that would be redundant with the `*` rule. Single source of truth for reduced-motion behaviour preserved. Verified in preview: on `/` three nav items render with no `aria-current` and no underline; on `/about` the About link has `aria-current="page"`, computed `color: #111214`, `text-decoration: underline 1px #124E66`, `underline-offset: 3px`; Case Studies retains external-link attributes and arrow; Contact click from `/` scrolls to Contact section (last on page — lands at max scroll, meaning `scroll-mt-[80px]` is not load-bearing on this path but would be if another section were ever added below Contact; from `/about` it navigates + lands on anchor correctly). Console clean on both routes. Commits: one local commit. Not pushed.
- [ ] **Prompt 9.2 (Mobile pass)** — Two threads:
  1. **About page horizontal overflow fix.** Diagnose and resolve the mobile horizontal scroll introduced in Prompt 9. Likely candidates: photo container missing `min-width: 0`, unbroken inline link text, or container-gutter interaction. "Case Studies" nav item (12 chars + ↗ arrow) may also contribute on narrow widths — worth inspecting alongside the About page content. Inspect `document.documentElement.scrollWidth` vs `clientWidth` delta in DevTools (375px emulated), identify the offending element, patch minimally — no broad mobile redesign, just the overflow.
  2. **Homepage mobile nav (burger).** Current `Nav.tsx` shows all three links on mobile; at narrow widths this is cramped and competes with the EC-W mark. Replace with a burger-triggered overlay or drawer pattern. Match the editorial register of the rest of the site — no hamburger-icon-library default, no heavy drawer animations, no full-screen colour flood. Lean Browser Company rather than generic SaaS. Maintain keyboard accessibility (escape to close, focus trap while open, return focus to trigger on close) and `prefers-reduced-motion` respect. EC-W mark stays visible in the sticky bar. Active-state underline pattern from Prompt 9.1 should carry through into whatever the burger drawer renders — same rule (only About when on `/about`). Scope includes updating `Nav.tsx` (and possibly a new `NavMobile.tsx` sibling) — does not touch any other component.

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
