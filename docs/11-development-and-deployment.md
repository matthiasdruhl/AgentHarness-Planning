# 11 — Developer setup, toolchain and deployment plan

## Chosen runtime
Single **Next.js App Router + React + TypeScript strict** monorepo application, Node 22 LTS target (verify current support at setup), Vercel deployment. Use current stable Next.js pinned with lockfile during kickoff, Tailwind for UI, Zod for runtime schema, Vitest + Testing Library for units/components, Playwright for one E2E flow. OpenAI TypeScript SDK pointed at Meta endpoint. No DB, Redis, queue, worker, Docker or Python service in MVP.

## Initialization (at kickoff, after rules)
1. Create separate app repository with template; commit starting state/time.
2. Enable pnpm (or npm) with committed lockfile; pin runtime and package manager.
3. Create `.env.example` with `MODEL_API_KEY=`, `META_MODEL=muse-spark-1.3`, `LIVE_ANALYSIS_ENABLED=false` and request budget flags; `.env.local` gitignored.
4. Implement Zod contracts in `src/lib/schemas` and synthetic fixtures first.
5. Implement pure checks/replay, then Meta adapter; keep tests entirely offline by mocking transport.
6. Implement UI and route handlers; deploy preview; enable live model only with spending control.
7. Add GitHub Actions CI with typecheck, lint, unit/integration tests, production build and Playwright smoke as time permits.

## Suggested local commands (adapt to package-manager scaffold)
```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm exec playwright test
```
These are **planned commands**, not evidence that a code repo already exists or has been tested.

## Environment contract
| Variable | Purpose | Public? |
|---|---|---|
| `MODEL_API_KEY` | Meta authentication | **Never** |
| `META_MODEL` | Model ID pinned for reproducibility | Server only |
| `LIVE_ANALYSIS_ENABLED` | Circuit breaker for billable inference | Server only |
| `META_REQUEST_TIMEOUT_MS` | Upper bound per live attempt | Server only |
| `META_MAX_OUTPUT_TOKENS` | Output token budget | Server only |
| `MAX_TRACE_BYTES` | Explicit ingress size cap | Server only |

Avoid any setting with `NEXT_PUBLIC_MODEL_API_KEY`. No other credentials necessary for baseline simulation.

## Deployment plan
- Push app implementation repository to GitHub after kickoff and connect Vercel to main.
- Production web route (static/SSR) serves fixtures and replay even when Meta unavailable.
- API route handlers use Node runtime and validated env. Provision key only in server environment.
- Configure spend hard stop/alerts and suitable public-access protection; before external distribution test live path and fallback.
- Verify HTTPS, correct response headers, no secrets in build artifacts, and functional browser navigation.
- Test real public URL from incognito with no previous browser state. Keep rollback deployment SHA handy.
- Lock demo URL and keep one screenshot/recording of expected flow.

## Offline-first developer workflow
Every feature has synthetic fixture and transport stub to avoid paid inference during daily testing. Use controlled live invocations at gates (Day 3, Day 6, final). Require explicit opt-in for live test command. CI must never use production MODEL_API_KEY.

## Review/merge gates
A task is done only with: changed-file summary, typecheck/lint pass, relevant unit/integration result, screenshot for UI changes, no scope creep, ADR for architecture deviations. No unverified 'all tests pass' language in changelog.

## Operational runbook
Meta outage: deactivate live inference flag; deterministic demo remains accessible. Deployment failure: roll back to last successful build. Fixture corruption: restore from tested commit. Security issue: immediately disable live route and rotate key.

## Verify-first implementation and deployment gate
Implement `completion-verdict.v1` as a pure tested TS module before embellishing the trace viewer. The primary F1 screen must instantly show `UNVERIFIED` with evidence without a network request; negative controls must distinguish `VERIFIED` and `INSUFFICIENT_EVIDENCE`. Meta requests remain explicit, backend-only, and optional. `npm run check` and production smoke must exercise these status transitions and verify that no app route runs a real agent. Static read-only T15 reports, if ever produced, must not block the production release. See [28](28-verify-product-north-star.md).
