# Project Overview

Privexio Website is a frontend-only React 18 marketing site built with Vite, Tailwind CSS, React Router, Radix UI, Framer Motion, and Lucide React.

# Project Structure

- `src/` contains the React app, routes, pages, shared components, hooks, and utilities.
- `public/` contains static assets.
- `plugins/` contains custom Vite and visual editor plugins.
- `tools/` contains local scripts used by build/setup workflows.

# Replit Setup

- Node.js 20 is configured through `.replit` and `.nvmrc`.
- The development workflow runs `npx vite --host 0.0.0.0 --port 5000`.
- Vite `server.allowedHosts` is enabled so the Replit preview proxy can load the app.
- Deployment is intended as a static site with `npm run build` outputting to `dist/`.