# 23 — Baselines and scoring (aligned with benchmark program)

**Product demo paired trial:** booking-v1 Architecture A (good direct checks) vs Architecture B (Forecode-proposed boundary), same agent model/config, tools, task prompt, budget, evaluator and Verify gates. Include B's preparation/refactor costs. Optional arm C: A with strong roadmap-aware AGENTS.md instructions.

**Independent external pilot:** SlopCodeBench JS subset by fixed selection criteria, upstream checkpoint sequence and grader; same agent and Verify in baseline vs Forecode. Continuation must be sequential and later checkpoint spec unavailable before its turn. Report deviations from upstream official harness.

**Verify-only optional:** SWE-bench Pro V2 selected public tasks for check quality; task solve rate does not prove future maintainability. SWE-Milestone optional, SWE-CI deferred.

**Heuristic scoring:** ordinal estimate for static scenario regret, never relabel as actual minutes/dollars/tokens. `regret(A,s) = modeled_total_cost(A,s) - min_candidate_modeled_total_cost(s)` in a single consistent unit. Model decision may remain INSUFFICIENT_EVIDENCE when missing data. Real experiment verdict and static hypothesis remain separate.

**Outcome statistics:** primary held-out task success and no regression; report N, run IDs, per-checkpoint passed tests, upfront development effort, downstream agent iterations, elapsed time, tokens where observable, actual cost if available. Never claim smaller touched-file count = better software.
