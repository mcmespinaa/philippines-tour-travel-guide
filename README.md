# KAPULUAN OS · Philippines 32-Day Personal Travel Guide (Astro)

Interactive, mobile-first personal travel software built with **Astro** and **Leaflet** for **MC & Christian's 32-Day Philippines Couples Tour (Nov 8 – Dec 9)**:

- **Interactive Archipelago Map:** 7 destination hubs, **43 vetted 4–5★ hotels** (minimum 6 options per destination closest to primary landmarks), key landmark pins, and curved Cebu Pacific (`5J` / `DG` / `T6`) + Tao Paraw / OceanJet transit arcs.
- **Cebu Pacific Flight Telemetry:** Interactive SVG schematic and route cards with flight numbers, baggage tips, fares, and direct booking links to [CebuPacificAir.com](https://www.cebupacificair.com/en-PH/pages/plan/book-flights).
- **Live Currency Switcher & Hotel Shortlist Calculator:** Instant conversion between `DKK`, `PHP (₱)`, and `EUR (€)` + persistent `localStorage` hotel shortlist estimator across all 29 nights.
- **32-Day Interactive Master Schedule:** Filterable by destination hub; tapping any day flies the map directly to that day's coordinates and displays civilized pacing + rainy-day backups.
- **Persistent Mobile Packing Checklist:** Synced with `travel/packing-list.md`, with automatic state saving on mobile or desktop.

## Commands

```bash
npm install
npm run dev     # Start local dev server at http://localhost:4321
npm run build   # Build static production site into ./dist/
npm run preview # Preview production build locally
```

## GitHub Pages Deployment

Includes `.github/workflows/deploy.yml` configured with `withastro/action@v3` and `actions/deploy-pages@v4`, plus a static `docs/` output folder so GitHub Pages can deploy either via **GitHub Actions** or **Deploy from a branch (`main` / `/docs`)**.
