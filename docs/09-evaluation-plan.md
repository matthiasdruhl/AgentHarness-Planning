# 09 — Evaluation protocol and truth conditions

## Claims and studies
**Study F (architecture effect):** A baseline architecture vs B candidate architecture; same coding model/config, sandbox, task, Verify gates, continuation policy, budgets and acceptance oracle. Measure independently checked feature success, regressions, elapsed time, tokens (if observable), iterations and spend. Include upfront work cost for B in total cost. Run a known scenario and at least one frozen hidden scenario. Repeat paired seeds where feasible; report each run and variability, no significance claims from tiny N.

**Study V (Verify effect, optional):** Same architecture with/without bounded independent verification feedback. Measure false completion assertions and legitimate completion blocks. Do not attribute Study V improvements to Foresight.

**Meta ablation (optional):** Meta proposals vs fixed-template candidates; same evaluator. Test incremental benefit before claiming essential Meta capability.

## Selection and leakage prevention
Freeze evaluator acceptance tests and held-out requirements before generating A/B candidates. Held-out requirements unavailable to proposer/optimizer. Maintain manifest with hashes, model/prompt revisions, budgets and isolation attestation. No cherry-picked failed baselines or invented results.

## Metrics
Primary: held-out future-feature success under trusted tests. Secondary: regression count, total development effort including candidate upfront cost, tokens, wall clock, iterations, scorecard evidence. Static estimated blast radius is **not** counted as measured rework. Legitimate blocks and false positives mandatory if claiming Verify improvement. Count only files that materially changed, avoid equating fewer files with quality.

## Reporting
Every table shows N, scenario, seeds, source, and whether measured or recorded; retain losing outcomes. If tests cannot run safely or result is inconclusive, say so. The certificate is a reproducible scoped evidence record, **not** formal proof of universal optimality.
