# T15 — Optional paired real-agent benchmark (P1, NOT P0)

**Start gate:** deployed P0 hero workflow and required tests green; explicit safety review, official rules, and credits confirmed; remaining time before Nov 2 freeze. Otherwise record SKIPPED. Not a dependency for T14 submission.

**Read:** [27 experiment architecture](../docs/27-real-agent-experiment.md), [10 security](../docs/10-security-and-privacy.md), [23 scoring](../docs/23-baselines-and-scoring.md).

## Task
Implement developer-only local TS CLI, immutable trusted synthetic task manifest and independent oracle, fixed agent/tool adapter, isolated A/B sessions (guard off/on) with reset, offline scorer and sanitized results. No public service or browser-execution interface.

## Allowed
`benchmark/real-agent/` manifest, task fixtures, CLI and tests, scored results, optional **read-only** UI rendering of safe report.

## Forbidden
Any Next route to execute tasks; arbitrary imported/user/model-supplied shell or code; persistent job runners, autonomous PRs, remote repo execution, unsafe sandbox credentials. If isolation is unverified, skip implementation/runs.

## Acceptance
- Same agent/model/task initial state and oracle per paired trial, with seed/order recorded.
- Isolation and spend limits documented and actually tested; task tools strictly allowlisted.
- Feasibility pilot contains at least one independently scored pair, or ticket marked skipped with reason; do not fabricate target N.
- Report false claims, legitimate blocked success, real solve rate, unknowns, overhead, failures and spend provenance.
- P0 code paths remain unchanged and safe; no effect on submission deadline.
