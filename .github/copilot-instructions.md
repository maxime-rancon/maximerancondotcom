# Copilot Instructions for maximerancondotcom

## Project Purpose

This repository contains the source code for maximerancon.com, a personal website.
The current phase is mostly static content served through AdonisJS and Inertia.

Core content areas to support:

- Home: introduction, skills, experience, contact, social links
- AI: AI-related projects and experiments
- Dev: software development projects
- Multimedia: multimedia and creative projects

## Tech Stack

- Backend: AdonisJS 7, TypeScript, Node.js
- Frontend: Inertia.js + React
- Styling: Bootstrap-first approach (plus custom CSS when needed)
- API client integration: Tuyau client/provider
- Database capability: Lucid + SQLite configured, but DB usage is optional while site remains static
- Build tooling: Vite, TypeScript, ESLint, Prettier
- Runtime/hosting: Docker on VPS behind Nginx
- Deployment: GitHub Actions auto-deploys on push/merge to main

## Runtime and Tooling Constraints

- Node version must satisfy engines requirement in package.json (>= 24).
- Use TypeScript for app and inertia code.
- Respect existing path aliases in package.json imports and inertia tsconfig.
- Keep ESM import style consistent with current codebase.

## Architecture Notes

### Backend

- HTTP routes are defined in start/routes.ts.
- Route handlers should use Adonis patterns (router, controllers, middleware groups).
- Keep controllers thin; move request validation to validators and business logic to services when complexity grows.
- Middleware should remain focused and composable.

### Frontend

- Inertia client bootstrap is in inertia/app.tsx.
- Shared app layout currently resolves through inertia/layouts/default.tsx.
- Pages live under inertia/pages and are resolved by name.
- Keep page components simple and composable.

## Coding Guidelines

### General

- Prefer small, focused changes over broad refactors.
- Preserve existing naming conventions and folder structure.
- Avoid introducing new dependencies unless clearly justified.
- Keep comments concise and only where they add clarity.

### TypeScript and React

- Favor explicit, readable types for component props and public function boundaries.
- Avoid any unless there is no practical typed alternative.
- Follow React hooks rules strictly.
- Do not set state inside useEffect when a lazy useState initializer can be used for derived or persisted initial state.

### UI and Styling

- Prefer Bootstrap utility/classes first.
- Add custom styles in inertia/css/app.css only when Bootstrap is insufficient.
- Keep visual style consistent across pages.
- Ensure responsive behavior for mobile and desktop.

## Content and Feature Evolution

When adding new sections/pages:

- Keep page names consistent with Inertia resolver conventions.
- Add or update route entries in start/routes.ts.
- Update navigation and internal links coherently.
- Keep copy and structure maintainable for future expansion.

When moving from static to data-driven pages:

- Introduce database models/migrations incrementally.
- Validate all user input with validators.
- Keep DB writes explicit and avoid hidden side effects.

## Quality Gates Before Finishing Work

Run the relevant commands after code changes:

- npm run lint
- npm run typecheck

If formatting is needed:

- npm run format

## Deployment Safety

- Assume every merge/push to main can trigger production deployment.
- Avoid risky or speculative changes in deployment, Docker, Nginx, or CI without clear intent.
- Prefer incremental, review-friendly PRs.

## What Copilot Should Optimize For

- Correctness and maintainability over cleverness.
- Consistency with AdonisJS + Inertia + React patterns already in this repo.
- Minimal, safe changes that are easy to review.
- Clear typing, predictable routing, and responsive UI behavior.
