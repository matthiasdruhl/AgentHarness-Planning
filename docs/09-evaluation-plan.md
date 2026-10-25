# 09 — Evaluation, benchmark protocol and evidence integrity

## Questions to answer
0. Does deterministic completion verification distinguish verified, contradicted, and insufficient-evidence claims without suppressing legitimate successes?
1. Does Meta identify gold failure classes without fabricating evidence?
2. Does the model add useful reasoning over deterministic rules?
3. Are proposed regression assertions valid in the **closed** DSL?
4. Does replay enforce the tested invariant reproducibly?
5. What is the actual token/cost/latency budget per live audit?

## Dataset
Use the 12–18 synthetic labeled traces defined in [07](07-scenarios-and-fixtures.md). Three positive failures, four true-negative examples, five perturbed versions minimum. Gold labels written independently and frozen prior to inference. Split 3 primary for demo and remaining 9+ for evaluation; do not tune prompts after examining hidden results without noting leakage.

## Metric definitions
- Class-level precision = TP/(TP+FP); recall = TP/(TP+FN); micro and per-category breakdown. Undefined denominator => N/A, not 100%.
- Evidence precision = cited valid and relevant event IDs / total cited IDs. Separate `reference validity` (ID exists) from human-adjudicated `relevance` (supports claim).
- Hallucinated reference count = any nonexistent event IDs in model response (before parser filtering); must track rejected candidates.
- DSL validity = model candidate assertions accepted by validation / total candidate assertions. Report unsupported separately.
- Replay repeatability = identical verdict + normalized trace hash across 5 runs / total supported replay repetitions; target 100%.
- Safe-fix efficacy = gold fixture policy assertions that transition from FAIL to PASS with allowlisted mitigation / applicable replayable scenarios. Do **not** label this percentage agent coding improvement.
- Meta added value = gold failure detection with model + checks versus rule-only baseline, with example analysis quality notes. No cherry-picked 'wins'.
- Efficiency = latency p50/p95 from live runs, provider tokens, failed request count, estimated USD based on contemporaneous published price, plus spend dashboard screenshot if useful.

## Protocol
1. Check schema and unit tests without Meta.
2. Compute rules-only baseline on frozen evaluation set.
3. Invoke `muse-spark-1.3` with exact prompt and model ID, max output and budget, at least one run per trace.
4. Record raw model candidate only in local sanitized benchmark artifacts, plus post-validation result separately; keep secrets/private inputs out of Git.
5. If possible, repeat 3 examples 3 times to describe non-determinism. Do not infer universal stability from these.
6. Manually adjudicate category and evidence relevance against prewritten gold; no LLM judging its own correctness.
7. Run supported scenario replays five times each and validate expected baseline/after.
8. Write a dated benchmark report with numerator/denominator, exclusions, methodology and limitations.

## Required report template (fill only with measured values)
| Metric | Result | N | Notes |
|---|---|---|---|
| Category precision | TBD | TBD | per class |
| Category recall | TBD | TBD | per class |
| Evidence ref validity | TBD | TBD | pre-filter and post-filter |
| Evidence relevance | TBD | TBD | human adjudicated |
| DSL validity | TBD | TBD | unsupported counted |
| Replay repeatability | TBD | TBD | 5 runs x supported cases |
| Policy guard efficacy | TBD | TBD | only simulated fixture harness |
| Live latency p50/p95 | TBD | TBD | actual calls |
| Model token usage / cost | TBD | TBD | date and model price |

## Failure interpretation
If model classification is weaker than deterministic rules, **say so** and present Muse as explaining/triaging complex traces, not as magically increasing precision. If Meta cannot be called during judge demo, use recording with prominent label and provide one reproducible invocation command. Never manufacture benchmark figures or silently exclude failures.

## Launch gate
Every demo finding tied to actual event evidence, model output schema valid, benchmark artifacts reproducible, and primary policy outcome independently deterministic.

## Separate optional real-agent evaluation
After P0 is complete, T15 may compare identical agent/task conditions with completion guard off/on ([27](27-real-agent-experiment.md)). Score genuine task resolution and unjustified completion separately. Also count legitimate completion claims blocked, abstentions, unknown oracle outcomes, errors, latency, tokens and cost. These numbers have different denominators from the existing synthetic diagnosis benchmark and must never be merged or called directly comparable to AgentRx/HALO results. Target 20–30 tasks only if credits/time allow; smaller pilots must report honest N and uncertainty.

## Verify primary outcome hierarchy
**P0 measures deterministic verdict correctness and scripted guard enforcement**, not population-level real-agent success improvements. Add fixture expected tri-state verdict confusion counts, especially F1 `UNVERIFIED`, N1 supported claim `VERIFIED`, N2 honest failure/no completion claim `INSUFFICIENT_EVIDENCE`, and missing exit status `INSUFFICIENT_EVIDENCE`. Report sample size and scope explicitly. Maintain existing rules/Muse/combined *diagnostic* ablation as a separate secondary endpoint. **P1 T15, if actually run:** primary false completion claims per eligible real-agent execution with measured valid-success false blocks, task resolution and overhead. No mixed denominators. See [28](28-verify-product-north-star.md).


## Competition-alignment update (2026-10-24)

Current scope, gates and precedence: [30 competition vision](30-competition-vision.md), [31 conditional feedback study](31-feedback-study.md), [32 Meta hard case](32-hard-case.md), [33 demo and early release](33-release-and-demo.md). These supersede earlier *priority, calendar and demo ordering* only; original versioned contracts and security prohibitions remain authoritative. P0 is evidence-first tri-state + live Muse analysis + **scripted** policy comparison; P1 is developer-local, independently scored A/B (optional C one bounded feedback continuation) only after deployed P0, validated isolation, rules and credits. No P1 result may be labeled measured unless actually executed. Target first deployment Oct 30 and hard freeze Nov 2. Never call scripted guard compliance a fixed code bug.
