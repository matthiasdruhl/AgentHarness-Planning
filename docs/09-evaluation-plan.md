# 09 — Evaluation protocol (canonical claims and scoring)

## Evaluation strategy
1. **External:** run a selected public SlopCodeBench **JavaScript** iterative checkpoint subset under matched agent conditions, if feasibility and safety gate passes. This is the preferred *generalization pilot*, not guaranteed official benchmark leaderboard comparability. SWE-Milestone optional real-world extension; SWE-bench Pro V2 optional Verify-only sanity; SWE-CI deferred due to resource cost. See [public selection](../benchmarks/PUBLIC-BENCHMARK-STRATEGY.md) and [run protocol](../benchmarks/PUBLIC-RUN-PROTOCOL.md).
2. **Custom:** use [booking-v1](../benchmarks/booking-v1/README.md) to demonstrate the full Meta→Foresight→Verify→certificate product and run a controlled, **non-independent** architecture study.

## Study F — architecture effect
A (plain good baseline) vs B (targeted authorization boundary) under **identical** coding agent/config, budgets, tool allowlists, Verify gates and independently protected acceptance oracle. Only changed architecture is treatment, not verification behavior. Include cost of creating B. Compare known, negative control and legitimately frozen held-out scenarios. If private held-out requirements are described in public planning or earlier model context, trial is **not blinded** and cannot be reported as genuinely unseen.

## Study V — Verify effect, P1
Same architecture with/without bounded trusted feedback. Separate from Foresight effects; measure false completion assertions and legitimate-success blocks.

## Meta ablation, P1
Meta-generated scenarios/architecture vs deterministic templates or strong roadmap AGENTS.md while other settings are matched.

## Metrics
Primary: future checkpoint/feature success after independent tests and preservation of previous working behavior. Secondary: regressions, upfront + downstream measured effort, elapsed time, tokens/cost where observable, iterations, boundary violations. Report task IDs, sample count, failures, confidence limitations, missing metrics as null. Static estimated dependency blast radius is **not** measured rework.

## Task selection and leakage
Freeze external pilot tasks and versions before treatment runs. Don't select only scenarios where Meta happens to win. Public benchmark next checkpoint specs/tests and reference implementation must remain unavailable to the architecture proposer before the decision stage, even if publicly downloadable. Hidden booking heldout material stored outside this public repo. Test evidence generated independently, never agent self-report.

## Claims and fallback
Do not compare our small adapted pilot as an official benchmark score or directly against leaderboard entries with different models. If external runner cannot safely integrate by Oct 30, mark external evaluation incomplete; keep small custom control as demonstration with no claim of external generalization. No statistically robust superiority claims from N=1. Retain negative outcomes.
