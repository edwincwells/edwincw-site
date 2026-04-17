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
- Body: 150–250 words (Edwin will write — angle: trust is the most important thing to design for in the age of AI-powered products, with an enterprise SaaS sharpening)
- Single-column, narrow (680px reading width), centred on page

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

### About page (separate, handled after homepage)

Content TBD. Not part of current build sequence.

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
| `.text-body` | 17px | 16px | 400 | 1.65 |
| `.text-small` | 14px | 14px | 400 | 1.5 |
| `.text-eyebrow` | 12px | 12px | 500 | 1 (uppercase, tracking 0.08em) |

**Plus:** `.font-serif-italic` for name/signature

**Notes:**
- Body at 17px (not 16px) — slightly more considered, magazine-like
- Hero subtitle deliberately quieter (20px not 24px) — display type carries the weight
- 500 Medium preferred over 600 SemiBold for editorial register

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
│   └── design-brief.md  (this file)
├── public/
│   ├── fonts/
│   │   ├── GeneralSans-Regular.woff2
│   │   ├── GeneralSans-Medium.woff2
│   │   ├── GeneralSans-Semibold.woff2
│   │   └── SourceSerif4-Italic.ttf
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── fonts.ts          (next/font/local setup)
│   │   ├── globals.css       (Tailwind v4 @theme + tokens + base styles)
│   │   ├── typography.css    (type scale utility classes)
│   │   ├── layout.tsx        (root layout with Nav + Footer)
│   │   └── page.tsx          (placeholder home)
│   └── components/
│       ├── Container.tsx     (default 1280px / narrow 680px)
│       ├── Section.tsx       (py-16 md:py-24 wrapper)
│       ├── Nav.tsx           (sticky top, 4 links, EC-W mark)
│       └── Footer.tsx        (copyright + LinkedIn/Mail icons)
├── next.config.ts            (turbopack.root set explicitly)
├── package.json
└── tsconfig.json
```

---

## 9. Prompt Sequence Plan

| # | Prompt | Status |
|---|---|---|
| 0 | Repo + Netlify setup (manual, not Claude Code) | ✅ Complete |
| 1 | Scaffold — fonts, file structure, base config | ✅ Complete |
| 2 | Design tokens — CSS variables, Tailwind config, globals | ✅ Complete |
| 3 | Layout shell — nav, footer, container, typography primitives | ✅ Complete |
| 4 | Hero section — asymmetric layout with diagram placeholder | ⏳ Next |
| 5 | Thesis + Credentials + Contact sections | Pending |
| 6 | Selected work — staggered editorial layout with flourish | Pending |
| 7 | Hero diagram — kinetic loop (expect iteration) | Pending |
| 8 | Polish pass — scroll motion, reduced-motion, a11y, Lighthouse | Pending |

**After homepage stable:** Separate About page build.

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
- [ ] **Prompt 4** — Hero section (next)
- [ ] **Prompt 5** — Thesis + Credentials + Contact
- [ ] **Prompt 6** — Selected work
- [ ] **Prompt 7** — Hero diagram
- [ ] **Prompt 8** — Polish pass
- [ ] **About page** — Separate build after homepage

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

---

## 12. Prompt 4 — Ready to Draft

The next prompt is **Prompt 4: Hero section.** Scope:

- Replace the current placeholder page content with the real Hero section
- Asymmetric 55/45 desktop layout (type left, diagram placeholder right), stacked on mobile
- Left side: the name in serif italic (small, above display), the display tagline "Experience Strategy & Product Leadership" at 88px desktop / 52px mobile using `.text-display`, subtitle "Designing intelligent product experiences that drive growth, adoption and trust." at 20px desktop using `.text-subtitle text-[var(--color-body)]`
- Right side: a placeholder element for the hero diagram — simple outlined box with dashed border and text "[ Hero diagram — Prompt 7 ]" centred inside. Matches the 45% width. Roughly square aspect ratio.
- Name placement: small serif italic, ~20px, sits above the display as a light personal anchor (NOT the primary focus — the display is). Positioned tightly above the display.
- Offset baseline: the diagram's visual centre should sit slightly below the display tagline's baseline, not centred vertically against the whole type block — creates the "composed, not aligned" feeling
- Padding: significant top padding so the hero breathes below the nav (`pt-24 md:pt-40` or similar within the Section)
- Use `Section` and `Container` (default width) primitives from `src/components/`
- No scroll animations yet — Prompt 8 handles entrance motion

Ready to draft this prompt in the new chat when Edwin confirms.
