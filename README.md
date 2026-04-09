# Privexio Website

Privexio Website is a React 18 marketing site for an enterprise technology services brand. It is built with Vite, Tailwind CSS, React Router, and a Radix UI based component layer.

## Overview

This project presents Privexio's service offering across a multi-page frontend experience, including:

- Home page with service highlights and trust messaging
- Managed IT Services (MSP) page
- Custom Software Development page
- Web Development page
- Mobile App Development page
- Cloud Solutions page
- AI/ML Services page
- Additional Services page
- About page
- Contact page with a client inquiry form

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 3
- React Router DOM
- Radix UI
- Framer Motion
- Lucide React
- ESLint

## Requirements

- Node.js `20.19.1`
- npm

The expected Node version is defined in [.nvmrc](./.nvmrc).

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app runs locally at:

```text
http://localhost:3000
```

## Available Scripts

Development server:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Production preview:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## Project Structure

```text
src/        App entry, routes, pages, shared components, hooks, and utilities
public/     Static public assets
plugins/    Custom Vite and visual-editor related plugins
tools/      Local scripts used by build/setup workflows
```

## Highlights

- Route-based multi-page marketing site using React Router
- Shared header, footer, CTA, testimonial, and service card components
- Contact form UX with toast-based submission feedback
- Tailwind-powered responsive layout across pages
- Custom Vite plugin setup under `plugins/`
- `@` import alias mapped to `src`

## Quality Status

This repository has been verified with:

- `npm audit`
- `npm run lint`
- `npm run build`

Current status:

- `npm audit`: 0 vulnerabilities
- `npm run lint`: passing
- `npm run build`: passing

## Deployment Notes

This is a frontend-only Vite application and can be deployed to common static hosting platforms such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

For production deployment, the standard output directory is:

```text
dist/
```

## Notes

- The project is configured as private in [package.json](./package.json)
- The repo includes custom visual editing and iframe-related Vite plugins
- The contact form currently provides frontend-only success feedback and is not connected to a backend submission service
