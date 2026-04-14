# Project Overview

Privexio Website is a frontend-only React 18 marketing site built with Vite, Tailwind CSS, React Router, Radix UI, Framer Motion, and Lucide React.

# Project Structure

- `src/` contains the React app, routes, pages, shared components, hooks, and utilities.
- `src/data/serviceCatalog.js` defines all service hubs and their trend-focused category pages.
- `src/data/caseStudies.js` defines case studies and dedicated case study detail pages.
- `public/` contains static assets, robots.txt, 404 SPA redirect support, and the generated sitemap.
- `plugins/` contains custom Vite and visual editor plugins.
- `tools/` contains local scripts used by build/setup workflows.

# Replit Setup

- Node.js 20 is configured through `.replit` and `.nvmrc`.
- The development workflow runs `npx vite --host 0.0.0.0 --port 5000`.
- Vite `server.allowedHosts` is enabled so the Replit preview proxy can load the app.
- Deployment is intended as a static site with `npm run build` outputting to `dist/`.

# Recent Changes

- Expanded every service page into a service hub with trending category pages for North American SEO.
- Added dedicated category routes under each service, such as `/web-development/technical-seo-websites`.
- Added realistic case study data and detail pages under `/case-studies/:slug`.
- Added global WhatsApp direct chat CTAs using `+1 (226) 868-8363`.
- Updated homepage metadata, structured data, and sitemap coverage for the expanded page set.
- Added dashboard-style reveal motion inspired by Circula's clean SaaS presentation style.
