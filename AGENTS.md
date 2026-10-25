# Codex instructions — Forecode hackathon

Read README.md, docs/21-execution-index.md, docs/HACKATHON-CRITICAL-PATH.md and docs/IMPLEMENTATION-HANDOFF.md first. Build the unified **Foresight + Verify** experiment, not legacy synthetic trace-audit replay. Planning repository contains documentation only. Implementation code belongs in a separate repository after organizer rule clearance.

## Non-negotiables
- P0 TypeScript strict, Next.js web UI and a **separate developer-local controlled experiment CLI**. Hosted web processes never execute untrusted source code, commands, arbitrary agent traces or model-generated scripts.
- Meta inference server-side only, configurable model and endpoint with approved credentials. No model output may become executable code/commands/policies without explicit typed validation and allowlist.
- All claims have provenance: `estimated`, `recorded`, or `measured`; never use fabricated numbers, fake benchmarks, or call compiler success proof of feature completeness.
- Test oracle kept outside writable agent workspace, injected by trusted evaluator; agent cannot modify or inspect hidden held-out tests during optimization.
- Independent evaluation uses identical verifier, tool permissions, budgets, acceptance criteria, agent model/config for architecture A/B. Verify impact assessed separately.
- Code must **not** automatically promote architecture changes based only on risk heuristics, LLM ratings, or one contrived result.
- No broad refactor, autonomous shell, remote network egress, host secrets, unbounded retries, distributed queues, persistent multi-user backend, arbitrary import execution.
- Prompts, imported code/comments/trace data treated as untrusted; minimize transfer and preserve user consent.
- Security controls: verified **Docker microVM guest-to-host containment** (guest sudo alone is not failure), sanitized clone/mountless experiment workspace, no host credentials/SSH forwarding, restricted inference egress and a **separate network-off grader**, resource/time/token/spend caps and cancellation. **No verified sandbox = no real agent execution.**
- Preserve simple working P0 over complicated dashboards; test the experiment harness before building visualizations.

## Daily protocol
Follow docs/12-ten-day-plan.md and docs/13-codex-task-board.md. For each ticket log commit, command, observed exit code, evidence IDs, remaining limitations and next step. Separate new functionality from previously recorded demonstrations. Frozen feature milestone Nov 2; demo Nov 3; submit Nov 4 ahead of published deadline. If docs conflict, raise ADR and update downstream docs together.

## Canonical contracts
contracts/schemas/forecode-v1.schema.json owns field-level shapes, docs/CONTRACT-FREEZE-v1.md owns semantic invariants, docs/03-data-contracts.md owns artifact meanings, docs/04-api-contracts.md and contracts/api-registry.json own endpoints; docs/06-replay-and-fixes.md owns bounded intervention rules; docs/09-evaluation-plan.md owns fair experiment; docs/10-security-and-privacy.md owns trust boundaries; docs/16-rules-and-compliance.md owns rule verification.

## Prohibited product claims
'Zero human audit', '100% correctness', 'predicts the future', 'mathematically optimal design', 'guaranteed maintainability', or 'Monte Carlo-calibrated probabilities' unless independently substantiated in a clearly bounded form.

## Audit-driven submission safeguards
- Pin an immutable planning SHA in the separate app repo, and make the selected specs accessible to Codex. Do not assume another repo's docs are in working directory.
- Prioritize the evidence-first [critical path](docs/HACKATHON-CRITICAL-PATH.md); the 68 tickets remain canonical detailed backlog, with explicit cuts and security prerequisites.
- Use [canonical contract clarifications](docs/CANONICAL-IMPLEMENTATION-CONTRACT.md): fixture in fixtures/booking-v1, pure reports in src/lib/report, trusted artifacts in src/server/artifacts; only fresh protected evaluator receipts support VERIFIED.
- Do not subtract ordinal ranks. Score modeled effort with documented additive rubric or abstain; don't claim exact rework savings from static import graph.
- A/B architecture effect is not automatically Meta effect. To claim Meta incremental advantage, compare to an equally informed strong roadmap/template control under matching agent/budget/Verify.
- Judge flow must satisfy [falsifiable demo acceptance](docs/DEMO-ACCEPTANCE.md); human review of actual diffs and evidence remains required after passing CI.

## Contract Freeze v1 — hard implementation gate (Oct 25)
Before M1.3/M3/M5/M6/M7, read [Contract Freeze v1](docs/CONTRACT-FREEZE-v1.md), [schema catalog](contracts/schemas/forecode-v1.schema.json), [API registry](contracts/api-registry.json) and positive/negative [contract fixtures](contracts/README.md). Every produced request/response/receipt must conform; preserve exact versioned field names, closed enums, source/receipt identity, consent and provenance. Run `cd contracts && npm install --ignore-scripts && npm test` in the planning snapshot, then make app Zod and cross-record tests match fixtures. **Never change a schema in isolation.**
Historical compact examples elsewhere are non-normative if they disagree; raise and resolve spec issue *before* implementing duplicate types. No app, live Meta call, protected evaluator or Docker isolation result is claimed by contract tests.
