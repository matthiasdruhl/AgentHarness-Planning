# 31 — Conditional actual-agent gate and feedback experiment

Status: P1 ONLY; no implementation or measurements. Refines [27](27-real-agent-experiment.md) and ticket T15. Not a hosted runtime.

## Research question
Do an evidence-driven completion gate and optional bounded correction improve coding-agent truthfulness while preserving actual solved-task performance?

## Arms and fairness
- **A** identical pinned agent/task without gate.
- **B** same agent/task with deterministic completion gate; unsupported success is rejected or labeled incomplete.
- **C (optional)** B plus exactly one controlled agent continuation after an evidence-linked gate failure. A trusted component sends a fixed `feedback.v1` record with run ID, reason codes, evidence IDs, allowlisted missing check, gate version and remaining capped budget. Feedback is data, not tool authorization or a generated shell instruction. Only a trusted runner can authorize further tool calls; never extend total caps. A/B is sufficient if C isn't safe and ready.
- Reinitialize a new vetted synthetic workspace from pinned hash for every arm. Hold constant model, task, tools, oracle, prompts and budgets except the explicitly tested gate and continuation. Alternate arm order using a recorded seed.

## Pilot and outcomes
Pilot **5–10** frozen, independently labeled tasks before any 20–30 task expansion. Include failed tests, truthful pass, truthful failure, missing result, unsupported file claim and stale test after edit. Report per-arm numerator/denominator for *unsupported explicit success claims among runs with conclusive independent oracle*, *legitimate successes blocked*, *actual independent task solves among attempts*, refusals, unknown outcomes, timeout/error cases, latency, inference tokens and cost. Preserve failed runs and disclose exclusions. Don't use Muse as ground truth; don't pretend small N proves population-wide improvement. Keep synthetic diagnostic benchmark separate.

## Safety gates
P0 deployed/tested first; official rules and budget confirmed; developer-only trusted CLI; non-root disposable isolation; no host credentials/privileged socket; pinned static tool/test allowlist; closed network except approved model mediation; process/memory/time/token/spend caps; kill switch and cleanup proof. Never execute imported traces, submitted commands or model-written scripts. No `/api/execute` and no browser runner control. Stop by Nov 2 freeze. If any gate fails, status is **NOT RUN**.

## Output disclosure
'In N paired independently scored tasks, false success changed from A/N to B/N; genuine solves were X and Y, and valid successes blocked were Z. C was [run/not run]. Results apply only to the pinned setup.' Do not fill until measured.
