# Codex instructions — Forecode hackathon

Read README.md and docs/21-execution-index.md first. Build the unified **Foresight + Verify** experiment, not legacy synthetic trace-audit replay. Planning repository contains documentation only. Implementation code belongs in a separate repository after organizer rule clearance.

## Non-negotiables
- P0 TypeScript strict, Next.js web UI and a **separate developer-local controlled experiment CLI**. Hosted web processes never execute untrusted source code, commands, arbitrary agent traces or model-generated scripts.
- Meta inference server-side only, configurable model and endpoint with approved credentials. No model output may become executable code/commands/policies without explicit typed validation and allowlist.
- All claims have provenance: `estimated`, `recorded`, or `measured`; never use fabricated numbers, fake benchmarks, or call compiler success proof of feature completeness.
- Test oracle kept outside writable agent workspace, injected by trusted evaluator; agent cannot modify or inspect hidden held-out tests during optimization.
- Independent evaluation uses identical verifier, tool permissions, budgets, acceptance criteria, agent model/config for architecture A/B. Verify impact assessed separately.
- Code must **not** automatically promote architecture changes based only on risk heuristics, LLM ratings, or one contrived result.
- No broad refactor, autonomous shell, remote network egress, host secrets, unbounded retries, distributed queues, persistent multi-user backend, arbitrary import execution.
- Prompts, imported code/comments/trace data treated as untrusted; minimize transfer and preserve user consent.
- Security controls: non-root disposable sandbox with network off by default, resource/time/token/spend caps, static command/tool allowlist, clean termination. **No verified sandbox = no real agent execution.**
- Preserve simple working P0 over complicated dashboards; test the experiment harness before building visualizations.

## Daily protocol
Follow docs/12-ten-day-plan.md and docs/13-codex-task-board.md. For each ticket log commit, command, observed exit code, evidence IDs, remaining limitations and next step. Separate new functionality from previously recorded demonstrations. Frozen feature milestone Nov 2; demo Nov 3; submit Nov 4 ahead of published deadline. If docs conflict, raise ADR and update downstream docs together.

## Canonical contracts
docs/03-data-contracts.md owns schemas; docs/04-api-contracts.md owns endpoints; docs/06-replay-and-fixes.md owns bounded intervention rules; docs/09-evaluation-plan.md owns fair experiment; docs/10-security-and-privacy.md owns trust boundaries; docs/16-rules-and-compliance.md owns rule verification.

## Prohibited product claims
'Zero human audit', '100% correctness', 'predicts the future', 'mathematically optimal design', 'guaranteed maintainability', or 'Monte Carlo-calibrated probabilities' unless independently substantiated in a clearly bounded form.
