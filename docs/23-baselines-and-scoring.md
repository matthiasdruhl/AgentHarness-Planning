# 23 — Baselines, scoring and ablation protocol

**Design only; scores not yet measured.** Supplements [09 evaluation](09-evaluation-plan.md) and [07 fixtures](07-scenarios-and-fixtures.md), which remain authoritative for target counts and gold trace semantics.

## Three controlled variants
1. **Rules-only (R):** deterministic trace checks on canonical `trace.v1`. No model. Output matched category plus evidence IDs where rule fires; abstain when information insufficient.
2. **Muse-only (M):** same sanitized trace evidence with category/evidence schema but **without rule-derived signals**; model output parsed and evidence IDs scored *before* safety/reference filtering. It cannot execute tests or policy fixes.
3. **Combined (C):** deterministic signals plus Muse structured reasoning; existing AgentHarness evidence validator and DSL allowlist. Report both raw model candidates and post-validation findings. Keep provider/model/temperature/prompt and token limits recorded.

**Important:** If combined uses a different prompt or extra rule features, label it an ablation, not a same-information model comparison. Budget equal or log exact differences. Test on frozen gold labels, same event IDs and data versions.

## Corpus and partitions
- Frozen synthetic benchmark target: 3 failure fixtures F1–F3, 4 negative controls N1–N4, 5 adversarial perturbations minimum = **12 examples**; up to 18 if time. Preserve one fixture family across related perturbations to avoid claiming independence.
- Write gold labels and required evidence IDs **before** reviewing model responses.
- Diagnostic positives vs negatives scored per category; no unsupported claim treated positive by default.
- Fixed representative primary demo F1 excluded from claims of blind validation; show evaluation with/without F1 where useful.
- External pilot, if licensed and actually available, is **separate** dataset/report with explicit domain shift and category mapping. Never blend denominators into synthetic evaluation.

## Matching and scoring
- A predicted category is TP only when independently labeled positive for that same trace/category. FP when predicted on a labeled negative. FN when a labeled positive is absent/abstained. TN for negative with no prediction. State whether multiple labels per trace are supported.
- Precision TP/(TP+FP); recall TP/(TP+FN); F1=2PR/(P+R). Undefined fractions are `N/A`, never default 100%. Report per class and micro average; preserve actual TP/FP/FN.
- Reference validity = existing event IDs / all cited event IDs **pre-filter**; report rejected IDs separately, and post-filter validity separately. Evidence relevance = manually judged supportive references / references adjudicated; invalid/missing references are not ignored in claim-level quality.
- Claim-level support = findings with all required relevant evidence / all emitted findings. Separately count unsupported or fabricated findings.
- DSL validity = accepted closed-schema candidate assertions / all emitted candidate assertions; count zero-output/abstentions.
- Replay consistency = identical policy verdict and normalized output digest over five repeated runs per supported baseline+guard pair. Simulated policy guard efficacy is **not** SWE-bench bug-fixing accuracy.
- Measure provider p50/p95 only when sample sizes justify them; include N, failures, censored timeouts and retry policy. Token/cost 'unknown' unless measured and rate confirmed.

## Adjudication and leakage
- Save manifest revision, prompt hashes, model ID, code SHA, evidence validator version and item IDs with outputs. Never bake expected labels into Muse prompt.
- Convert no records based on desired model scores. Log any post-hoc gold correction with independent rationale and invalidate affected prior comparison.
- Two-person independent adjudication if available; otherwise explicitly label single-annotator limits.
- Treat result differences on 12 synthetic records as **illustrative**, with uncertainty caveat; do not claim statistically significant superiority.
- No purchased/paid provider calls in CI. Live evaluation is explicit and rate-capped.

## Report skeleton (replace TBD only with actual output)
| Dataset | Variant | N items | TP | FP | FN | Precision | Recall | Evidence relevance | DSL validity | Calls/tokens/cost |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| synthetic v1 | R | TBD | TBD | TBD | TBD | TBD | TBD | TBD | n/a | 0 live calls |
| synthetic v1 | M | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| synthetic v1 | C | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |
| external pilot (if eligible) | C | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD |

## Falsification checks
- Negative control: passing tests with truthful success => no false-success finding.
- Negative control: failed test honestly reported as failed => no false-success finding.
- Unknown exit code => no asserted pass.
- Incorrect/nonexistent evidence ID => pre-filter violation logged; cannot be verified output.
- File claim without supporting tool access => candidate, not automatic proof of file modification.
- Repeat experiment with same frozen inputs; log model nondeterminism rather than hiding it.

## Distinct optional real-agent A/B experiment
The R/M/C variants above test trace **diagnosis**, not actual task-level improvements. T15 ([27](27-real-agent-experiment.md)) separately compares unguarded vs guarded real agent runs on paired vetted tasks with independent oracles. Do not merge its denominators into synthetic diagnosis results or compare its completion-policy rates to other projects' bug-resolution metrics. Include legitimate successful runs blocked and actual task solve rate alongside false-completion claims.
