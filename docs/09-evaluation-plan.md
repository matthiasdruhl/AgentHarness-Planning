# 09 — Evaluation protocol (canonical claims and scoring)

## Evaluation strategy
1. **External:** run a selected public SlopCodeBench **JavaScript** iterative checkpoint subset under matched agent conditions, if feasibility and safety gate passes. This is the preferred *generalization pilot*, not guaranteed official benchmark leaderboard comparability. SWE-Milestone optional real-world extension; SWE-bench Pro V2 optional Verify-only sanity; SWE-CI deferred due to resource cost. See [public selection](../benchmarks/PUBLIC-BENCHMARK-STRATEGY.md) and [run protocol](../benchmarks/PUBLIC-RUN-PROTOCOL.md).
2. **Custom:** use [booking-v1](../benchmarks/booking-v1/README.md) to demonstrate the full Meta→Foresight→Verify→certificate product and run a controlled, **non-independent** architecture study.

## Study F — architecture effect
A (plain good baseline) vs B (targeted authorization boundary) under **identical** coding agent/config, budgets, tool allowlists, Verify gates and independently protected acceptance oracle. Only changed architecture is treatment, not verification behavior. Include cost of creating B. Compare known, negative control and legitimately frozen held-out scenarios. If private held-out requirements are described in public planning or earlier model context, trial is **not blinded** and cannot be reported as genuinely unseen.

## Study M — Meta contribution (competition-critical comparator)
A/B architecture study isolates the effect of architecture; it does **not** show Meta helped merely because Meta proposed B. For Meta attribution compare a candidate from the eligible real Meta model to a strong equally informed roadmap-aware AGENTS.md or deterministic/template candidate, using identical visible current code/future intentions, downstream coding agent/model, independent Verify and budget. Include Meta inference and upfront changes in cost. Record all attempts; if this comparison is missing, limit claims to **Meta produced a hypothesis**, not superior results.

## Study V — Verify effect, P1
Same architecture with/without bounded trusted feedback. Separate from Foresight effects; measure false completion assertions and legitimate-success blocks.

## Extended Meta ablation and repeated trials, P1
Meta-generated scenarios/architecture vs deterministic templates or strong roadmap AGENTS.md while other settings are matched.

## Metrics
Primary: future checkpoint/feature success after independent tests and preservation of previous working behavior. Secondary: regressions, upfront + downstream measured effort, elapsed time, tokens/cost where observable, iterations, boundary violations. Report task IDs, sample count, failures, confidence limitations, missing metrics as null. Static estimated dependency blast radius is **not** measured rework.

## Task selection and leakage
Freeze external pilot tasks and versions before treatment runs. Don't select only scenarios where Meta happens to win. Public benchmark next checkpoint specs/tests and reference implementation must remain unavailable to the architecture proposer before the decision stage, even if publicly downloadable. Hidden booking heldout material stored outside this public repo. Test evidence generated independently, never agent self-report.

## Claims and fallback
Do not compare our small adapted pilot as an official benchmark score or directly against leaderboard entries with different models. If external runner cannot safely integrate by Oct 30, mark external evaluation incomplete; keep small custom control as demonstration with no claim of external generalization. No statistically robust superiority claims from N=1. Retain negative outcomes.

## Submission-first sequencing
Prefer first real protected evaluator evidence by Oct 28 and first valid matched A/B by Oct 30, **if** isolation permits, rather than deferring all experiments until Nov 1. External SCBench is conditional and cannot delay demo. If no safe runner/valid pair, report no empirical superiority. See [critical path](HACKATHON-CRITICAL-PATH.md) and [demo](DEMO-ACCEPTANCE.md).

## Meta Architecture Scientist ablation (Oct 25)
The addition of [hypothesis generation, adversarial challenge, and evidence interpretation](META-ARCHITECTURE-SCIENTIST.md) creates a *testable* Meta-specific role, not automatic proof of benefit. Define two explicitly separate claims:
- **Workflow:** Meta formed a falsifiable hypothesis, supplied a plausible counterexample and interpreted sanitized independent evidence. Show real eligible model records and prompt provenance; no performance claim required.
- **Added value:** compare a Meta hypothesis/challenge-guided candidate with a strong **equally informed** non-Meta roadmap/template candidate. Both see identical permitted initial intent, visible scenarios, code context, and receive the same downstream coding agent, budget, tools, evaluation/Verify. Charge Meta preparation/inference cost and count failures. Freeze tasks/control before seeing results.

Meta-generated stress proposals can be displayed, but they are **not** independent hidden holdouts; a model may neither choose favorable evaluation tasks after observing outcomes nor modify evaluator acceptance criteria. Real independent scoring requires separately precommitted evaluator-only scenarios. Negative/neutral outcomes are valid scientific evidence. Interpretation happens only on sanitized, server-authorized receipt-backed facts, is displayed separately from `VERIFIED`, and must not alter results or orchestrate new runs.

## Muse vs Codex is not architecture lift
For any single A/B or Meta-versus-strong-template comparator, **hold coding agent, underlying model/version, prompt, budgets, policies, tools, trusted grader and acceptance constant**. If A uses Codex and B uses Muse, reject the pair as evidence of architecture effect. A separate runner comparison may be P1, but cannot establish Meta Scientist superiority. Log actual Muse model/CLI/version, prompt/task IDs, final tree, policy/receipt hashes and token/cost data only if observed; missing data is null. Meta [headless docs](https://dev.meta.ai/docs/muse-code/extending) distinguish agent turn completion from actual task success. [Runner gating](MUSE-CODE-INTEGRATION.md).
