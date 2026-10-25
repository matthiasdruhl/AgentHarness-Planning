# 23 — Baselines and scoring

**Primary fair experiment:** architecture A (status quo) vs B (proposed boundary), same coding agent and identical independent Verify gates, feedback, tests, budget, allowed tools, fixture seed and task. Evaluate *task success* first; then regressions, total measured effort including B upfront work, tokens/cost/wall clock where available.

**Secondary studies (P1):** same architecture with and without Verify feedback; Meta proposal vs simple requirements-aware template/AGENTS.md. Do not mix these comparisons or attribute combined improvement to one component.

Static cost units: ordinal risk points only; report scoring formula/weights, sensitivity and unknowns; do not relabel as hours/dollars. Regret per scenario = modeled candidate total - best modeled candidate total in same units, not universal optimum.

Report N, distributions if repeated, raw failures, uncertainty and all comparison scenarios. Acceptance oracle never rewritten to favor B. Smaller file-touch count doesn't automatically mean better code.
