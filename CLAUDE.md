# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Local dev (uses placeholder data in src/data/)
npm run dev

# Fetch real content from Sanity then dev
npm run fetch && npm run dev

# Production build (uses whatever is in src/data/)
npm run build

# Fetch from Sanity + build (used in CI)
npm run build:full

# Sanity Studio (from studio/ directory)
cd studio && npm run dev   # local studio
cd studio && npm run deploy  # deploy to sanity.studio
```

Local dev server runs at `http://localhost:5173/`.

## Architecture

React + Vite static site deployed to GitHub Pages via GitHub Actions. Content is managed in Sanity CMS.

**Data flow:**
1. `scripts/fetch-content.js` queries Sanity API and writes to `src/data/*.json` (pre-builds image URLs)
2. Vite builds the React app, which imports from those static JSON files
3. The output in `dist/` is fully static — no runtime API calls

**Routing:** Uses `HashRouter` (`/#/project`, `/#/gallery`, etc.) for GitHub Pages compatibility. All routes are in [src/App.jsx](src/App.jsx).

**Content editing flow:** Company edits content in Sanity Studio → publishes → Sanity fires a webhook → GitHub Actions rebuilds and deploys (~1–2 min).

## Key Files

- [src/data/](src/data/) — JSON files consumed by React components. Placeholder versions are committed; `npm run fetch` overwrites them with live Sanity data.
- [scripts/fetch-content.js](scripts/fetch-content.js) — fetches all Sanity content and pre-builds image CDN URLs
- [studio/schemas/](studio/schemas/) — Sanity content schemas (siteSettings, homePage, projectPage, galleryImage, teamMember)
- [.github/workflows/deploy.yml](.github/workflows/deploy.yml) — builds and deploys on push to `main` or `repository_dispatch` from Sanity webhook

## Environment Variables

Copy `.env.example` to `.env` for local Sanity fetching:
- `SANITY_PROJECT_ID` — from sanity.io/manage
- `SANITY_DATASET` — defaults to `production`
- `SANITY_TOKEN` — only needed for private datasets
- `VITE_BASE` — asset base path (`/pages-test/` for GitHub Pages, `/` for custom domain)

GitHub Actions secrets needed: `SANITY_PROJECT_ID`, `SANITY_TOKEN`.

## Sanity Setup (first time)

1. Create project at sanity.io → get your Project ID
2. Set `projectId` in [studio/sanity.config.js](studio/sanity.config.js)
3. `cd studio && npm install && npm run deploy`
4. Add `SANITY_PROJECT_ID` secret to GitHub repo settings
5. Set up a Sanity webhook: POST to `https://api.github.com/repos/Fallatori/pages-test/dispatches` with `event_type: sanity-update` and a GitHub PAT as the Bearer token

## Newsletter Signup

The Contact page has a Mailchimp newsletter signup form. Replace `YOUR_MAILCHIMP_URL` in [src/pages/Contact.jsx](src/pages/Contact.jsx) with the form action URL from Mailchimp → Audience → Signup forms → Embedded forms.

## Custom Domain

When adding a custom domain:
1. Set GitHub Pages custom domain in repo settings
2. Change `VITE_BASE` in the deploy workflow from `/${{ github.event.repository.name }}/` to `/`
