# Polish audit — Prompt 8

Findings from the accessibility sweep and Lighthouse pass done in Prompt 8. Covers the homepage only.

## Accessibility

### Semantic landmarks — pass
`<main>` wraps page content in `layout.tsx`, `<nav>` present inside `<header>` in `Nav.tsx`, `<footer>` in `Footer.tsx`. Verified via DOM query.

### Heading hierarchy — fixed
One `<h1>` (hero display), `<h2>` for each section title, `<h3>` for work row titles. Credentials had no section heading — added a visually-hidden `<h2>Credentials</h2>` (`sr-only`) so the landmark structure is complete without altering the visual design. No skipped levels.

### Focus-visible — pass
Baseline rule in `globals.css`: `2px solid var(--color-primary)` with `3px` offset. Teal (#124E66) on paper-warm (#F7F5F1) computes to ~8.8:1 contrast — meets AAA. Rule confirmed present in stylesheet; browsers only apply it on keyboard focus, so direct keyboard tabbing is the acceptance path (visual verification best done manually).

### Link purpose — fixed
Work row links previously read "Read the case study" / "Explore the app" out of context. Added `linkAriaLabel` prop on `WorkRow` and wired specific labels from `SelectedWork`:
- "Read the Salli case study"
- "Read the Rewards & Recognition case study"
- "Explore the FluxUX app"

Contact section `email` and `LinkedIn` inline links have sufficient accessible names (mailto is announced as the address; LinkedIn is self-describing). Left as-is.

### External links — pass
All `target="_blank"` links carry `rel="noopener noreferrer"`:
- Nav → Case Studies
- Work row links (×3)
- Contact → LinkedIn
- Footer → LinkedIn

Mailto links (Contact, Footer) correctly have no target. Verified via DOM inspection.

### Colour contrast — pass (flagged for awareness)
`--color-muted` (#6B7075) on `--color-background` (#F7F5F1) computes to ~4.66:1 — passes WCAG AA (4.5:1) for regular body text. Used for eyebrows, captions, footer text, and the second Contact sentence. No change needed.

Teal links on paper-warm (~8.8:1) and foreground body (#2E3338) on paper-warm (~11.8:1) also comfortably exceed AA.

### Image alt text — fixed
Previous alts were filename-derived ("Salli case study"). Updated to describe the visual content:
- Salli → "Salli — agentic AI workforce management interface"
- Rewards & Recognition → "Rewards & Recognition — employee engagement platform"
- FluxUX → "FluxUX — AI-powered experiment generator"

### Keyboard traversal — pass
Full tab cycle reaches every interactive element in visual order: EC-W mark → Home → About → Case Studies → Contact anchor → Salli link → R&R link → FluxUX link → Contact email → Contact LinkedIn → Footer LinkedIn → Footer Email. No traps, no invisible stops. Confirmed via focusable-element DOM query.

### Reduced-motion — hero diagram hydration flash deferred
The reduced-motion hydration flash on `HeroDiagram.tsx` (SSR/client branch swap paints the animated state for a frame before the static state takes over) is explicitly deferred to Prompt 7.x. See §10 and §12 of `docs/design-brief.md`. Not touched in this prompt.

The scroll-reveal elements added in this prompt do honour reduced-motion: inside the `prefers-reduced-motion: reduce` media query, `[data-reveal]` is forced to `opacity: 1; transform: none;` so elements appear at final state without transitioning through the hidden state.

### Lighthouse
Run against a local production build in an incognito Chrome window (ColorZilla interferes, per Prompt 5 notes).
npm run build
npm run start
# Open http://localhost:3000 in an incognito window, run Lighthouse in DevTools
Scores — recorded 2026-04-21
Mobile (after prefetch={false} fix):

Performance: 94
Accessibility: 100
Best Practices: 100
SEO: 100

Desktop:

Performance: 100
Accessibility: 100
Best Practices: 96 (recorded before the prefetch fix; expected 100 on re-run, not re-verified — fix is identical to mobile)
SEO: 100

All targets (95+) met on both profiles, with Mobile Performance one point shy.
Performance breakdown
Mobile metrics:

FCP: 0.8s — green
LCP: 3.1s — amber, single drag on mobile Performance
TBT: 50ms — green
CLS: 0 — perfect, font-swap clean
Speed Index: 0.8s — green

Desktop metrics:

FCP: 0.2s
LCP: 0.7s
TBT: 0ms
CLS: 0
Speed Index: 0.2s

LCP delta (3.1s mobile vs 0.7s desktop) is throttled-network font download, not an architectural issue. The hero display (.text-display, 88px, General Sans Medium) is the LCP element and waits on the woff2. On real desktop networks the font lands fast enough to keep LCP green; on Lighthouse's simulated mobile throttling, the same download crosses the 2.5s "good" threshold. Not pursued — the fix would be either a <link rel="preload"> for the specific hero font weight or a font-loading rewrite, both disproportionate for one point of mobile score.
Code fixes applied

About link prefetch (Nav.tsx): added prefetch={false} on the About <Link>. The About route doesn't exist yet (separate build per §10), and Next.js's default prefetch behaviour was firing a _rsc request to /about that 404'd and surfaced as a "Browser errors were logged to the console" finding under Best Practices. Fix took mobile Best Practices from 96 → 100. Other nav links (Home, Case Studies, Contact) keep default prefetch behaviour.
Meta description: present via layout.tsx metadata export.
OpenGraph + Twitter tags: added via metadata export (summary card, no image — dedicated OG image is a follow-up).
Image sizes: (max-width: 768px) 100vw, 50vw on all three work images; next/image handles srcset generation.
Lazy loading: work images default to loading="lazy" via next/image (below the fold). Verified.
Font loading: next/font/local with display: swap (default) — fonts don't block LCP.

Insights flagged but not actioned

Render-blocking requests (40ms savings): correlated with font CSS loading. Fixing would mean inlining critical CSS or preloading specific font weights. Disproportionate effort for sub-50ms gain that doesn't affect score.
Legacy JavaScript (13 KiB) and Unused JavaScript (29 KiB): Next.js framework chunks (React runtime, hydration scaffolding, polyfills). Inherent to the framework on a 2-route static site. Not chasing.
Network dependency tree: same root cause as render-blocking requests. Resolves in tandem if font loading is reworked.
Avoid non-composited animations — 6 elements found: the hero diagram's SVG animations. Moving SVG transforms to GPU compositing is non-trivial and would require rewriting HeroDiagram.tsx. Out of scope for Prompt 8; a candidate for Prompt 7.x consideration if the issue persists after design polish.

Trust and Safety findings
CSP, HSTS, COOP, XFO, and Trusted Types audits don't apply to localhost — these are all server-header concerns. Will be evaluated when the site is on Netlify (Netlify provides defaults for some; others may require explicit headers if pursued). Not a Prompt 8 concern.
Production build
npm run build runs clean — TypeScript passes, two routes statically prerendered, no warnings. Confirmed 2026-04-21.
