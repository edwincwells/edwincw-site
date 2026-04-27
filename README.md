# edwincw-site

Personal site for Edwin Collings-Wells — Director of UX, currently at Harri.

Live: [www.edwincw.com](https://www.edwincw.com)

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4 (CSS-based `@theme`, no config file)
- Self-hosted fonts via `next/font/local`
- Deployed via Netlify from the `develop` branch

## Local development

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

## Build

```bash
npm run build
```

## Structure

- `src/app/` — App Router routes (`/` and `/about`)
- `src/components/` — shared components (Hero, Nav, Footer, Credentials, etc.)
- `src/app/globals.css` — design tokens (`@theme`), reduced-motion rules, scroll behaviour
- `src/app/typography.css` — type scale utilities
- `public/` — static assets (OG image, fonts, portrait, etc.)

## License

MIT — see [LICENSE](./LICENSE).
