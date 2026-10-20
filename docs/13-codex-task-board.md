# 13 — Codex task board: dependency-ordered implementation tickets

Use each ticket as a self-contained Codex prompt anchored in the documents cited. Do not start tickets dependent on an incomplete predecessor. Test commands are examples until scaffolded. Commit after each ticket. **This repository contains specifications only.**

## Foundation
**T01 — Scaffold (Day 1, ~3h).** Create Next App Router strict TS app and lockfile; `src/lib`, `src/server`, `src/components`, test runner, lint/typecheck, `.env.example`, safe `.gitignore`. Depends: official rules reviewed. Done: local start, build, lint, types work; no secrets.

**T02 — Runtime contracts (Day 1, ~4h).** Implement trace v1, analysis v1, replay and report Zod parsers from [03](03-data-contracts.md) with property guards, discriminated unions, version checks. Done: valid fixtures parse; malicious/invalid examples rejected; type inference used in UI/server.

**T03 — Fixtures and canonicalizer (Day 2, ~4h).** Build three synthetic traces, gold labels, stable canonical hashing, immutable replay manifest from [07](07-scenarios-and-fixtures.md). Done: unique event IDs, stable digest, hash mismatch detection.

**T04 — Timeline/checks (Day 2, ~5h).** Build event index, conservative deterministic rules, timeline with evidence anchors. Done: false-success signals correct, four negative controls not falsely flagged; keyboard navigation.

## Inference and replay
**T05 — Meta provider adapter (Day 3, ~5h).** Build server-only client, strict structured schema, timeouts/retries/circuit breaker, privacy filtering. Mock SDK in standard tests; one manually controlled live smoke. Done: real primary fixture analysis saved with request ID and token usage if returned.

**T06 — Analysis route + validator (Day 3, ~4h).** `POST /api/analyze` from [04](04-api-contracts.md); resolve evidence refs, reject DSL abuse, distinguish model hypothesis and direct observation. Done: malformed, oversized, unavailable, invalid JSON / orphan IDs handled correctly.

**T07 — Replay engine (Day 4, ~6h).** Implement pure scripted state machine and three assert ops from [06](06-replay-and-fixes.md). Add `POST /api/replay` and blocked/guarded semantic outcomes. Done: 5x deterministic replay per case and **no shell/network code path**.

**T08 — Verification route (Day 5, ~4h).** Implement single-switch mitigation with baseline/after results, restrict scenario/fix pairs, `POST /api/verify`. Done: hero guard PASS with failing underlying test plainly visible.

**T09 — Report provenance (Day 5, ~3h).** Assemble sanitized export with trace hash, provider mode, evidence, policy result, limitations, version. Done: download/import sample round-trip, no inadvertent full-secret export.

## UX and launch
**T10 — Four-stage UI (Days 5–6, ~8h).** Implement load/import, Inspect, Diagnose, Replay, Export; badge observed vs inferred vs verified; evidence deep linking. Done: playwright hero journey with mocked Meta; no orphan links.

**T11 — Evaluation harness (Day 7, ~5h).** Run 12 labeled traces through rule baseline and live Meta, calculate denominators and invalid outputs; save sanitized artifacts. Done: reproducible script or documented manual commands, no unmeasured numbers.

**T12 — Security/reliability (Day 8, ~4h).** Test injection, schema attacks, non-replayable import, credits/abuse safeguard, key protection, 429/timeout, no raw server logs. Done: fail-closed; budget safe.

**T13 — Deploy (Day 8, ~3h).** Vercel config, environment, no-store, production smoke; rollback plan. Done: URL working from incognito, health route, proper live status.

**T14 — Demo + submission (Days 9–10, ~8h).** Record 2–3-minute video, capture before/after and real live call; benchmark table, README, official submission requirements; verify all URLs and submit early. Done: receipt, final SHA and smoke verified.

## Assignment discipline
Each ticket requires: goal, files to create/edit, schema dependencies, tests to write first, acceptance evidence, prohibitions, and exact git commit. For parallel Codex sessions split only independent areas (e.g., UI styling vs benchmark fixtures); do not concurrently modify shared schema files. Use short reviewable pull requests if parallel.

## Prompt template to copy into Codex
'Implement ticket Txx from the AgentHarness Meta planning repo at pinned planning commit SHA. Read AGENTS.md and the referenced contracts first. Do not implement any P1/P2 feature. Write tests and report commands executed with actual results. Keep provider secrets server-only and deterministic replay free of arbitrary code execution. Return changed paths, test output, known limits, and commit SHA.'
