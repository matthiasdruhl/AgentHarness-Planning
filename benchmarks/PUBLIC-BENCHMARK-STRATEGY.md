# Public benchmark selection and feasibility gates (2026-10-25)

**Research-backed selection, not an execution result.** Public tasks are useful for independent validation, but suitability for *architectural foresight* is not assumed. Preserve upstream protocol, record git SHA/dataset revision and licensing before copying any assets.

| Dataset | Verified upstream | Fit | Gate / recommendation |
|---|---|---|---|
| **SlopCodeBench (SCBench)** | https://github.com/SprocketLab/slop-code-bench ; https://github.com/SprocketLab/scb-problems ; https://huggingface.co/datasets/gabeorlanski/slopcodebench | Iterative specification checkpoints, with **js** subset in data; evaluates evolution, unlike one-shot tasks | **P0 pilot**: inspect JS subset tasks/runtime; pick 2–3 suitable task sequences by written criteria *before running treatments*; if too expensive, one sequence labeled case study. Current analyzer is TS/Next-specific, so language adapter may need to operate on JS import/exports. No unsupported Next-specific claims. |
| **SWE-Milestone** | https://swe-milestone.com/ ; https://github.com/DeepCommit-ai/SWE-Milestone | Real release-history milestone DAG; available TypeScript task(s) but costly deps/data | **P1 stretch**: feasibility check Docker/Python, pinned workspace tags, test conditions; only run targeted compatible release range and report deviation from standard benchmark. |
| **SWE-bench Pro V2** | https://github.com/scaleapi/SWE-bench_Pro-os/tree/main/v2 ; https://labs.scale.com/leaderboard/swe_bench_pro_public_v2 | Strong independent issue-resolution/regression oracle; not normally a multi-stage architecture test | **P1 Verify-only**, 2–5 approved public tasks with fresh-sandbox grading if budget allows; avoid treating one-shot solve rate as evidence of future-proof architecture. Public V2 has 642 tasks (Sep 22 release); only 4 TS tasks per dataset card. |
| **SWE-CI** | https://github.com/SKYLENAGE-AI/SWE-CI | Real long-term maintenance, architect/programmer loop | **Research backlog**, not P0: upstream documents ~50 GB dataset and ~48h for full experiments on 32-core/64-GB, 16 workers. Don't promise full benchmark in ten-day solo build. |

## Pilot task selection protocol (decide before outcomes)
1. Read upstream quick start, dataset license, task language, checkpoint count and workload; verify access without running paid agents.
2. Prefer JS tasks with 3+ incremental checkpoints, isolated tests, no browser/frontend dependency, no need for external network or special secrets, and execution supported by reviewed sandbox. Prefer two different abstractions (state/model vs rule/config).
3. Record all candidates considered and **fixed selection** with reason, task IDs, dataset revision, public/private status and intended count. Never choose tasks based on Forecode winning.
4. Translate intent input from **past and current checkpoint specs only**. The next checkpoint is unseen at architecture decision time. Meta cannot inspect future checkpoint text/tests, source answer, benchmark leaderboard traces or reference solution.
5. Baseline agent vs agent+Forecode must use same model, maximum tokens, timeout, allowed tools, prompts excluding condition-specific Forecode architecture artifact, independent upstream tests and regrade isolation. A separate roadmap-informed AGENTS.md arm is P1.
6. Preserve checkpoint-by-checkpoint success, pass-to-pass regressions, time, token use if reported, paid credits/cost if reported, architecture upfront cost, and any invalid trials. Report both absolute results and paired differences, not unsupported broad conclusions.
7. Do not change reference tests to improve results. If adaptations necessary, record as **adapted pilot** not official benchmark score.
8. If safe implementation demands new JS-language dependency analysis, cap it to imports/exports supported by existing TypeScript AST tooling; no general multi-language rewrite.

## Success gate Oct 27–30
A smoke run of **one checkpoint** using upstream runner or a clearly disclosed adapted isolated runner must pass safety, version pinning, grading and artifact capture. If not, use custom controlled fixture for P0 demo and list public benchmark integration as incomplete.

## Relevance and limitations
SCBench tests iterative coding under changing requirements, but this is not itself an architecture-selection benchmark. We must expose a legitimate opportunity for Foresight to reason on earlier intentions, and measure later extension with no leakage. Tests verify scoped function, not generic maintainability or code readability. Reports disclose sample size and adapter changes.

## Source verification
SCBench harness README: https://github.com/SprocketLab/slop-code-bench/blob/main/README.md
SCBench HF language rows: https://huggingface.co/datasets/gabeorlanski/slopcodebench
SWE-Milestone setup: https://github.com/DeepCommit-ai/SWE-Milestone/blob/main/docs/setup.md
SWE-bench Pro V2: https://github.com/scaleapi/SWE-bench_Pro-os/blob/main/v2/README.md
SWE-CI upstream: https://github.com/SKYLENAGE-AI/SWE-CI/blob/main/README.md
