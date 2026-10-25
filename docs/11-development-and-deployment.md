# 11 — Development and deployment

Planning repo stays docs-only. Separate `forecode` implementation repo is proposed; name and rules are provisional. Build Next.js App Router/TypeScript strict, Zod, ts-morph, Vitest, Playwright, ESLint and one server-only Meta adapter. CLI experiment logic lives in `scripts/experiments` and MUST NOT be accessible as public routes. No database needed; bundled demo reports and ephemeral UI state.

Suggested structure: `src/app`, `src/lib/contracts`, `src/lib/graph`, `src/lib/decision`, `src/lib/verify`, `src/server/meta`, `src/server/reports`, `scripts/experiments`, `fixtures/booking`, `tests`, `reports/recorded`.

Commands to implement from Day 1: `npm ci`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, `npm run test:e2e`, `npm run benchmark:local -- --fixture booking --budget ...`. Last command must fail closed without verified isolation. Never claim commands exist until implemented.

CI: deterministic unit/schema checks, no paid model calls, no real agent benchmark on public CI unless explicit isolation. Production web cannot spawn child processes or run shells; Meta endpoint Node only. Deploy early (target Oct 30), feature freeze Nov 2, validate credits/spend cap and recorded offline demo.
