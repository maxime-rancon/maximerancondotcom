# maximerancon.com

Personal portfolio website for Maxime Rançon. The site presents professional experience, software projects, automation work, artificial intelligence experiments, and multimedia projects.

## Tech stack

- AdonisJS 7 and Node.js
- Inertia.js with React 19
- TypeScript and Vite
- Bootstrap 5

## Requirements

- Node.js 24 or newer
- npm

## Getting started

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the project root with the values required by AdonisJS:

```dotenv
NODE_ENV=development
PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY=generate-a-secure-key
APP_URL=http://localhost:3333
SESSION_DRIVER=cookie
```

Generate an application key with:

```bash
node ace generate:key
```

Start the development server with hot module replacement:

```bash
npm run dev
```

The site is then available at <http://localhost:3333>.

## Available pages

| Route         | Purpose                                                  |
| ------------- | -------------------------------------------------------- |
| `/`           | Professional overview, skills, contact, and social links |
| `/video`      | Video and multimedia projects                            |
| `/dev`        | Software development projects                            |
| `/automation` | Automation projects and experiments                      |
| `/ai`         | Artificial intelligence projects and experiments         |

## Scripts

| Command             | Description                           |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Start the development server with HMR |
| `npm run build`     | Build the application for production  |
| `npm start`         | Start the production server           |
| `npm run lint`      | Run ESLint                            |
| `npm run typecheck` | Type-check server and Inertia code    |
| `npm run format`    | Format the repository with Prettier   |

## Project structure

```text
app/                    AdonisJS backend code
config/                 Framework and service configuration
database/               SQLite schema and migrations
inertia/                React application, pages, components, and styles
public/                 Static assets
resources/views/        Inertia HTML shell
start/routes.ts         HTTP route definitions
```

Frontend pages live in `inertia/pages`, shared components in `inertia/components`, and the default layout in `inertia/layouts/default.tsx`. Routes are defined in `start/routes.ts` and rendered through Inertia.

## Quality checks

Run the main checks before opening a pull request:

```bash
npm run lint
npm run typecheck
```
