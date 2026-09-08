<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Instructions

- Keep responses short and direct. Do not over-explain unless asked.
- When asked to identify a problem, state the problem directly before suggesting a fix.
- Use the Next.js App Router. Put routes and global styles in `app/`, reusable UI in `components/`, and static assets in `public/`.
- Keep metadata in `app/layout.tsx` and global styling in `app/globals.css`.
- Use the existing Tailwind CSS v4 setup; do not add another styling system without a clear need.
- Prefer npm commands because `package-lock.json` is committed: `npm run dev`, `npm run lint`, `npm run build`, and `npm start`.
- There is no test script or test framework. Do not claim tests passed; run lint and build when relevant.
- Read [README.md](README.md) for standard setup and deployment information.
