# 22 — External benchmark landscape and feasibility

**Research date:** 2026-10-24. **Scope:** Meta hackathon AgentHarness Audit, not a long-term agent platform. Benchmark publications and data licensing change; recheck at use. This is a research inventory, not a claim we have downloaded or evaluated any benchmark.

## Evidence-appropriate shortlist
| Source | Verified facts / primary source | Fit for this MVP | Data/access caveat | Decision |
|---|---|---|---|---|
| **AgentRx** (Microsoft Research) | 115 annotated *failed* trajectories with a critical failure step and taxonomy; research article https://www.microsoft.com/en-us/research/publication/agentrx-diagnosing-ai-agent-failures-from-execution-trajectories/ ; code https://github.com/microsoft/AgentRx | Closest analogue for evidence-grounded failure localization; taxonomy and localization methodology useful | Hugging Face dataset https://huggingface.co/datasets/microsoft/AgentRx is **gated** as checked Oct 24; listing declares CC-BY-4.0, code repository MIT. Access approval/redistribution conditions must be checked. Blog says nine categories while current GitHub README says ten: pin exact dataset version and taxonomy; do not assert universal category count. Dataset comprises failed cases, so alone cannot measure false positives/specificity | **Priority 1 research**, optional post-access exploratory external test |
| **SWE-bench Verified** | Human-validated **500 software issue instances**; https://www.swebench.com/verified.html ; dataset specification https://www.swebench.com/SWE-bench/guides/datasets/ | Motivation / genuine coding-task context; failure cases may be derived *only if actual agent run traces and labels are obtained separately* | **Problem/patch/test records are not the same as instrumented agent trajectories**. Do not pretend downloading tasks yields trace-audit benchmark. Verify license at selected distribution and underlying repository content before redistributing | **Context only by default**; optional licensed trace subset if feasible |
| **HAL Reliability** (Princeton) | Evaluation framework for consistency, predictability, robustness, safety; https://hal.cs.princeton.edu/reliability/ and https://hal.cs.princeton.edu/reliability/methodology/ | Useful ideas for repeated runs, perturbations, failure-case reporting and resource variation | Reliability leaderboard scores measure different targets than evidence-grounded failure findings. Some HAL trace distributions are encrypted and have access requirements. Not apples-to-apples numerical comparator | **Methodology citation**, no leaderboard score comparison |
| **HALO** (Context Labs) | Trace-driven harness improvement loop with AppWorld benchmark examples; https://github.com/context-labs/HALO | Relevant neighboring product and differentiation pressure | HALO reported task-success gains on AppWorld are not comparable to AgentHarness simulated **policy-guard** pass rates; check precise repo license before copying material | **Competitor/related work**, not direct baseline |

## External data decision gate
Before ingesting any external record, log: source URL, commit/release, retrieval date, license, access status, allowed derivative use, source task ID, trace availability, true output/evidence labels, conversion mapping, and redaction review. Only data that actually contains an execution sequence and a defensible reference failure label can enter diagnostic scoring.

### AgentRx pilot (conditional, not mandatory)
1. Confirm account approved for gated data; retain license and dataset revision privately.
2. Inspect 2–3 records locally, **without committing original gated records**.
3. Build a provenance-tracked converter into `trace.v1` *only for representable event semantics*. Flag dropped content, ambiguous timestamps and label mapping; no invented tool outcomes.
4. Independently label whether each trace contains one of `FALSE_SUCCESS`, `UNSUPPORTED_CLAIM`, `UNSAFE_ACTION_ATTEMPT`; mark **OUT_OF_SCOPE** otherwise.
5. To measure false positives, add matched genuinely negative traces from a separate suitable source or curated synthetic controls. Avoid using a failures-only set as precision evidence.
6. Report small sample descriptive results separately from synthetic benchmark and from AgentRx's published methodology/results.

## Hard comparison rules
- Same input, same gold labels, same measured denominator and same adjudication protocol for any within-project baseline comparison.
- Never present AgentRx step-localization accuracy as AgentHarness failure-class precision, or SWE-bench resolution percentage as policy guard efficacy.
- Report `N/A` when categories do not map or evidence is unavailable; abstentions have defined denominators.
- No downloaded external samples, official scores, licensed benchmark integrations or tested results exist in this **planning** repository.

## Primary sources reviewed October 24, 2026
- https://www.microsoft.com/en-us/research/blog/systematic-debugging-for-ai-agents-introducing-the-agentrx-framework/
- https://github.com/microsoft/AgentRx
- https://huggingface.co/datasets/microsoft/AgentRx
- https://www.swebench.com/verified.html
- https://www.swebench.com/SWE-bench/guides/datasets/
- https://hal.cs.princeton.edu/reliability/methodology/
- https://github.com/context-labs/HALO
