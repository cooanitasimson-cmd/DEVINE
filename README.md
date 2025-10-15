# DEVINE

This repository tracks the DEVINARCH product initiative. The initial implementation step is a Turborepo workspace that mirrors the
architecture blueprint and provides our first web shell plus shared packages.

## Getting started

Use the bundled pnpm shim to avoid Corepack fetching in restricted environments:

```bash
npm run bootstrap
npm run dev:web
```

Under the hood these commands delegate to `tools/pnpm.mjs`, a thin wrapper around a preinstalled global pnpm binary that avoids
Corepack downloads. You can also call the shim directly if you prefer:

```bash
node ./tools/pnpm.mjs install
node ./tools/pnpm.mjs --filter web dev
```

The `dev:web` script launches the administrative control-center shell located in `apps/web`. The app currently renders sample
roadmap widgets that demonstrate how shared packages can be composed from the monorepo. You can also run `npm run dev:web`,
which delegates to the same pnpm shim under the hood.

## Workspace layout

- `apps/web` – Next.js app for the admin/staff experience. Uses the shared UI kit and utilities.
- `packages/ui` – Headless/styled UI primitives (currently a button component with `asChild` support for Radix-style composition).
- `packages/utils` – Runtime helpers that can be consumed by apps/services (currently contains currency formatting helpers).
- `docs/` – Living product and architecture references. The existing `devinarch-architecture.md` outlines the full platform plan.

Future steps include scaffolding for mobile (`apps/connect`), gateway/services (under `services/`), and CI + infrastructure codified in
`infra/` once runtime choices are finalized.
