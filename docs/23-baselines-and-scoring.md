# 23 — Baselines and scoring (aligned with benchmark program)

**Product demo paired trial:** booking-v1 Architecture A (good direct checks) vs Architecture B (Forecode-proposed boundary), same agent model/config, tools, task prompt, budget, evaluator and Verify gates. Include B's preparation/refactor costs. Optional arm C: A with strong roadmap-aware AGENTS.md instructions.

**Independent external pilot:** SlopCodeBench JS subset by fixed selection criteria, upstream checkpoint sequence and grader; same agent and Verify in baseline vs Forecode. Continuation must be sequential and later checkpoint spec unavailable before its turn. Report deviations from upstream official harness.

**Verify-only optional:** SWE-bench Pro V2 selected public tasks for check quality; task solve rate does not prove future maintainability. SWE-Milestone optional, SWE-CI deferred.

**Heuristic scoring:** fixed `modeled_effort_points_v1` weights and per-scenario `ScoreBasis` in [Contract Freeze v1](CONTRACT-FREEZE-v1.md). Deterministically derive upfront/downstream costs and minimax regret; never subtract ordinal categories or pretend the points are real hours/dollars/tokens. `regret(A,s) = modeled_total_cost(A,s) - min_candidate_modeled_total_cost(s)` in a single consistent unit. Model decision may remain INSUFFICIENT_EVIDENCE when missing data. Real experiment verdict and static hypothesis remain separate.

**Outcome statistics:** primary held-out task success and no regression; report N, run IDs, per-checkpoint passed tests, upfront development effort, downstream agent iterations, elapsed time, tokens where observable, actual cost if available. Never claim smaller touched-file count = better software.

## Decision and Meta comparator correction
Use modeled_effort_points_v1 for comparable upfront plus per-scenario future-cost components and default minimax regret. Show per-scenario totals and a sensitivity check; no hypothetical probabilities. If the scoring rubric cannot support meaningful differences, show tradeoffs and **recommendationId:null**. Preserve credible status quo/no abstraction. To claim Meta adds advantage, prioritize C: an **equally informed strong roadmap-aware/template** control under the same coding agent, budget and independent Verify. A/B architectural effect alone cannot establish Meta attribution.

## Contract-frozen math
Upfront per candidate = sum structured action weights (introduce_boundary=3; extract/move/add_interface=2; leave_unchanged=0). Downstream per candidate/scenario = 2 × projected changed modules + projected route changes + 2 × unresolved relevant dependencies. Regret per scenario = modeled total minus the lowest comparable modeled total for that scenario. Pick lowest maximum regret; tie lower upfront, then lexical candidate ID. Missing incomparable input → recommendationId=null with limitations. This is a deliberately coarse decision aid, **not** calibrated cost prediction.

## Meta Scientist ablation and cost reporting
New `MetaHypothesisV1` predictions are **qualitative directional hypotheses**, not confidence-calibrated performance estimates. They do **not** override `modeled_effort_points_v1`, scenario matrix, or the minimax decision. A strong equally informed template/roadmap planner must have access to the *same visible current and future intent* as Meta for any claim of incremental value. Both use the same downstream Codex, budget, tools, task and protected scorer. Include hypothesis/challenge generation/interpretation overhead for Meta where measurable. If no comparator run, say **Meta generated hypotheses**, not that it outperformed planning alternatives. [Protocol](META-ARCHITECTURE-SCIENTIST.md).
