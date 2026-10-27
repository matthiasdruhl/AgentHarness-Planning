# ForeCode — frozen implementation queue, PR-sized handoffs
**Prepared:** October 27, 2026. **Status:** planning instructions ONLY; no actual app implementation or approval implied. **Authority order:** organizer's accepted rules/FAQ -> [critical path](HACKATHON-CRITICAL-PATH.md) -> [canonical M0–M10 and 68 tickets](CODEX-TICKETS.md) -> [stretch plan](COMPETITIVE-STRETCH-ROADMAP-2026-10-27.md). These are **handoff slices**, not new milestone/ticket IDs.

**Application target:** the separate, post-kickoff public `matthiasdruhl/ForeCode` repository. Never transplant planning-repo code/schema/fixtures/history/assets to the submitted repo. Auditors should re-read app `main`, `AGENTS.md`, tests and latest PRs before editing. **As of Oct 27**, merged PR #6 establishes a restricted **no-inference** grader for a pinned booking/Webpack scope, *not* agent containment, live Meta use or a fair measured A/B experiment.

## Ready queue and dependencies
A PR means a narrow change on a new branch. Each PR returns exact commit, test commands/exits, covered and untested risks, synthetic-versus-real evidence labels, and next unblocker. Owner reviews every PR; passing CI alone does not authorize a merge, paid call or real agent.

| Order / lane | Scope, suggested new branch | Existing tickets | Code ownership / expected edits (confirm current app paths) | Required exit / test evidence |
| --- | --- | --- | --- | --- |
| **P0-R1 — lane Meta** | Provider config, budgets, actual authorized Meta request; `codex/meta-live-transport` | M0.2.1, M1.5.1, M4.3.1, M4.6.1 | `src/server/config/`, `src/server/meta/`, provider tests, consent-safe API routes | One **real** eligible provider identity+schema-valid output when authorized, limits/timeouts/error/quota tests, no key to client/log, no inference in CI. **Do not** claim Meta use from mock only |
| **P0-R2 — lane Meta** | Confirmed intention -> competing candidates -> hypothesis + deliberate counterexample, strict cross-validation; `codex/meta-scientist` | M4.2.1–M4.5.1, M6.1.1–M6.4.1, M6.6.1 | `src/lib/intents/`, `src/server/meta/{candidates,hypotheses,challenger}.ts`, `src/lib/contracts/`, typed API + unit/security tests | Fixed IDs tie approved intent/revision and graph; observable falsifier; challenge labeled proposed/not heldout; forged provider, missing consent, stale IDs and malicious suggested commands rejected |
| **P0-R3 — parallel safety** | Separate reviewed real-agent source/credential/egress/cost envelope; `codex/agent-execution-gate` | M2.3.1–M2.6.1, M7.1.1 | Developer-local `scripts/experiments/isolation/`, `runner/`, operator runbooks, failure tests. Avoid public route changes | Independent owner-reviewed actual permitted runtime OR explicit **BLOCKED** decision; enforce hard stop/cancel/recovery/exact source and oracle custody; earlier no-inference approval is insufficient. No agent execution while blocked |
| **P0-R4 — parallel frontend** | Real source-limited booking dependency graph/Atlas, stable A/B node IDs, truth labels; `codex/atlas-source-backed` | M5.1.1–M5.4.1, M8.2.1, M9.2.1 | `src/lib/graph/` and existing app UI components per v4.4 handoff; fixtures/tests | Only supported source-backed edges; unresolved imports marked unknown; no fictitious measured impact; desktop/mobile keyboard + reduced motion; A doesn't show B-specific modules |
| **P0-R5 — after R3** | First real permitted single-arm coding-agent task and independent grading; `codex/agent-smoke-booking` | M2.4.1–M2.6.1, M3.1.1–M3.7.1 | Existing private **operator** workflow, frozen booking source, independent protected grader, append-only private artifacts; docs only if no public source changes needed | Actual post-agent tree digest, protected type/build/domain/HTTP/boundary checks and authenticated receipt; cancellation and cleanup; denial/failed attempts retained; never host execution API |
| **P0-R6 — after R1,R2,R4; parallel R5** | End-to-end intent -> real Meta -> research state -> honest measured/absent evidence UI; `codex/foresight-vertical-slice` | M6.5.1–M6.7.1, M8.1.1–M8.3.1 | `src/lib/foresight/`, app workbench and API routes, server-only protected artifact loader | Clean browser flow with live/recorded/template status and measured/absent status **independent**; cannot run agent via HTTP or forge success; no fabricated source, provider or results |
| **P0-R7 — after R3,R5 and frozen protocol** | Fair two-arm booking study and source/telemetry envelopes; `codex/booking-paired-study` | M7.1.1–M7.3.1, M7.5.1–M7.7.1 | Existing developer-local experiment runner, paired manifest, evaluation/report; `docs/ARCHITECTURE-TOURNAMENT-PROTOCOL.md` is *external planning only* | A and B initial present-day correctness; same future task, agent/tool/version/limits/oracle, both real final trees, independent grading; report B prep cost and all failures. If no approval/budget, report NOT_RUN |
| **P0-R8 — after R6,R7 or their honest blocked state** | Evidence ledger, scoped certificate, authenticated replay and deploy; `codex/evidence-workbench` | M8.3.1–M8.7.1, M9.3.1–M9.5.1 | `src/lib/evidence/`, `src/lib/report/`, server allowlisted loader and read-only UI; e2e/security | Rejection/insufficient evidence work, exact run/check/tree IDs, null telemetry unknown, no private oracle/paths/keys, clean judge browser, read-only live deployment |
| **P0-R9 — finish by feature freeze** | Demo rehearsal and submission assets; `codex/demo-submission-hardening` | M9.1.1, M9.6.1, M10.1.1–M10.5.1 | Newly authored app repo `submission/`, README, public deploy and recorded video; organizer portal submission is **human** action | 3-min max video opens with pre-event disclosure, real Meta role, credible actual/absent experiment, verified public links; owner confirms submission and stores receipt |

**Only if P0-R1–R8 genuinely pass with time remaining, promote:**
- **S1-R1** strong *equally informed* non-Meta comparator as third arm C — M6.7.1/M7.1–M7.7; same task/model/runner and predeclared metric. Extra provider calls/runs require explicit spend approval.
- **S2-R1** source-backed Architecture Time Machine — M5/M8/M9; snapshots for before / after preparation / after future task, computed diff, stable graph.
- **S3-R1** controlled holdout — M7.4.1; **only** if independently sealed *before* architecture selection and never visible to candidate/agent.
- **S4-R1** detailed read-only experiment replay — M8/M9; proof-first, no new execution endpoint.
- **S5/S6** adaptive scenario chooser / SCBench / open-weight adapter — only with all P0 and first demo draft passing by Nov 1. Usually cut.

## Definition of a PR being ready to merge
1. Includes exact **scope and threat boundary** and matching canonical ticket IDs; read app main first to avoid repeating completed work.
2. Tests include success, invalid/revoked/stale/fake input, timeout/error and relevant isolation failure. Use `npm run check`, `npm run test:e2e`, `npm run test:fixture-e2e`, and `npm run test:plan` **when applicable**, not claims they ran if not executed.
3. Reports actual command outputs/exits, HEAD SHA, screenshot or artifact ID where relevant. CI unit tests are synthetic and **not** an actual agent/Meta experiment.
4. No model calls, guest lifecycle actions or paid use without separate owner authorization; immutable private receipts remain out of public Git.
5. Review checks hard boundaries, correctness and genuine changed behavior; avoid automatic merge because tests are green.

## Freeze and owner decisions
- **Oct 27:** sign off eligibility/rubric ambiguity; freeze experiment manifest **before seeing trial outcomes**; route Meta and agent review in parallel.
- **Oct 28:** prefer actual live Meta reasoning plus authorized single-arm agent smoke, else clearly blocked state.
- **Oct 29–30:** produce working source-backed browser vertical slice; first fair A/B if approved.
- **Oct 31–Nov 1:** finish reliable reports, optional third arm and simple diff Time Machine; video draft.
- **Nov 2: feature freeze.** After it, fixes to correctness/claims/accessibility/deployment/video only.
- **Nov 3–4:** rehearse, verify source/provenance, record, deploy, submit before **Nov 4 9 PM ET**.

**Stop the workstream, not the deadline**, if eligibility is not cleared, real agent containment fails or runtime custody is stale. Continue independently permitted frontend/provider/demo work with accurate blocked/absent states.

See [experimental manifest](ARCHITECTURE-TOURNAMENT-PROTOCOL.md), [judge gates](JUDGE-SUCCESS-GATES.md), [rule reconciliation](RULES-VERIFICATION-2026-10-27.md) and [stretch triggers](STRETCH-PROMOTION-GATES.md).
