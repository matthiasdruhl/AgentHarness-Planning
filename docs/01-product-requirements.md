# 01 — Product requirements and scope (PRD)

**Version:** meta-hackathon-1.1 (Verify positioning). **Status:** Design baseline, pending official rules review.

## Product thesis
Coding agents can say a task is complete without supporting execution evidence. **AgentHarness Verify makes completion claims inspectable and testable.** Its primary loop is **observe -> verify evidence -> diagnose with Muse -> propose constrained check -> enforce in a scripted harness -> report**, with optional, separately measured actual-agent outcomes.

## Audience and scenario
Primary user: a developer debugging a coding assistant. Secondary: a hackathon judge who needs to understand the outcome in two minutes. Input is a bundled or uploaded JSON agent-execution trace; no GitHub permissions, account creation or local repository access. Primary demo: an agent reports 'fixed' even though the test tool returned an exit code of 1.

## Product outcomes
1. Produce an immediate, explainable `VERIFIED` / `UNVERIFIED` / `INSUFFICIENT_EVIDENCE` completion verdict and show the exact supporting or contradicting source events.
2. Identify probable failure category, confidence level, supporting evidence, and explicit unknowns using Meta Muse.
3. Generate a candidate assertion from a closed test DSL and validate it before replay.
4. For bundled reproducible scenarios, show deterministic failure before a policy mitigation and deterministic pass/blocked outcome afterward.
5. Export evidence, methods, model used, and explicit 'observed' versus 'inferred' labels.

## MVP user stories and acceptance gates

**P0-00 — Verify completion:** On loading F1, show `UNVERIFIED` from the observed failing `run_tests` result and contradictory success claim, with direct links to both source events; on a passing, supported completion show `VERIFIED` only for the explicitly scoped claim; on missing/ambiguous test evidence show `INSUFFICIENT_EVIDENCE` rather than fabricating a PASS. The deterministic verdict must appear before any Meta call. This new story is part of P0 and has regression tests.
| ID | Story | Acceptance |
|---|---|---|
| P0-01 | Load a sample trace | Three bundled fixtures render with stable event IDs, ordered timeline, input provenance, and no model call. |
| P0-02 | Import a trace | Valid `trace.v1` JSON <=256 KiB loads. Malformed, oversized, unknown-version, duplicate-ID payloads show actionable errors. |
| P0-03 | Baseline deterministic checks | Contradictory success claims and unsafe requested action are checked against observed tool results; no LLM required. |
| P0-04 | Muse analysis | Live `muse-spark-1.3` structured response yields >=1 validated finding for golden primary case; all evidence IDs resolve. |
| P0-05 | Candidate regression assertion | Model output is in supported assertion DSL or rejected safely; UI never runs generated code. |
| P0-06 | Replay | Each supported scenario has reproducible baseline outcome; non-demo arbitrary uploads show 'replay unsupported'. |
| P0-07 | Verify mitigation | Switching an allowlisted policy produces reproducible after-state; results include exact policy delta and linked assertion verdicts. |
| P0-08 | Explain results | Trace, failure diagnosis, assertion, before/after evidence and limitations appear in one inspectable view. |
| P0-09 | Report | Export JSON with schema version, fixture ID, Meta model/analysis status, evidence links, engine version and verdicts. |
| P0-10 | Ship | Public deployed demo, documented local setup, deterministic CI and video ready before Nov 4 deadline. |

## Three failure categories
- `FALSE_SUCCESS`: assistant final message asserts success after explicitly failing tests.
- `UNSUPPORTED_CLAIM`: assistant asserts result for a file or tool datum contradicted or not supported by observed trace (candidate claim requires conservative matching).
- `UNSAFE_ACTION_ATTEMPT`: agent requested a prohibited capability, which the fixture tool layer rejects. Never run the action.

## Must-have user journey
Open -> load 'False success' -> see `UNVERIFIED` with reasons and evidence -> inspect event pair -> request Muse explanation / constrained assertion -> scripted baseline FAIL -> apply `require_passing_tests` -> scripted guard policy PASS while test still fails -> export report. The user must see the verdict **without** requesting model analysis.

## Quality / nonfunctional targets
- Interactive deterministic fixture load <2 seconds locally on normal laptop (target, not measured).
- Constrain Meta analysis to one request per click, bounded tokens, timeout and max two retries. UI tolerates 429/503.
- Evidence cannot reference nonexistent events; schema-invalid model output is rejected.
- No raw imported payloads persisted to server or sent to analytics.
- Keyboard navigation, screen-reader labels, contrasting status text, visible loading/error states.
- Replay output identical across five repeated runs for same fixture/policy/engine version.
- Build/test/deploy reproducible from lockfile and environment instructions.

## Out of scope
Arbitrary third-party agent replay, real code execution, remote repository access, browser automation, autonomous repair PRs, multi-agent orchestration, SaaS multi-tenancy, accounts, billing, databases, continuous monitoring, enterprise security certification, sales, and support for external trace formats beyond the documented v1 importer.

## Integrity and launch gates
- **Never claim code correctness from a policy compliance PASS.** Distinguish 'guard blocks false completion' from 'software bug resolved'.
- **Never present a recorded response as a live inference.**
- Final evaluation percentages must come from labeled runs; until measured use blanks/unknown.
- Review final event rules after publication; modify dates and submission requirements accordingly.

## Optional P1 — measured actual-agent improvement
The ten P0 stories are unchanged. Conditional T15 compares a pinned coding agent on matched vetted tasks with enforcement off versus on; see [27](27-real-agent-experiment.md). Primary outcome is false completion claims per real eligible run. Required countermetrics are valid completions blocked, solved tasks, unknown outcomes and overhead. This local evaluation cannot become a public execution endpoint and is not required for submission.

## Scope decisions for Verify repositioning
- **North-star question:** Can this coding agent justify its completion claim from observable evidence?
- **P0:** trustworthy claim-to-evidence verdict, reason codes, timeline evidence links, analysis on demand, constrained policy demonstration, provenance and export. Three planned fixture types remain, but F1 is the hero. The UI shows verdict first and deep traces second.
- **P1:** T15 optional safely isolated actual-agent paired measurements only if the core demo is complete. Additional ambiguous-evidence fixture is P1 unless safely implemented with existing contract; no new broad integrations.
- **P2/out:** advanced observability dashboards, animations and generalized framework adapters.
- **Primary measured outcome only if T15 runs:** false completion claims per eligible real run, with legitimate-success blocking and actual task resolution always reported. P0 reports **fixture policy invariant correctness**, not measured agent improvement. See [28](28-verify-product-north-star.md).


## Competition-alignment update (2026-10-24)

Current scope, gates and precedence: [30 competition vision](30-competition-vision.md), [31 conditional feedback study](31-feedback-study.md), [32 Meta hard case](32-hard-case.md), [33 demo and early release](33-release-and-demo.md). These supersede earlier *priority, calendar and demo ordering* only; original versioned contracts and security prohibitions remain authoritative. P0 is evidence-first tri-state + live Muse analysis + **scripted** policy comparison; P1 is developer-local, independently scored A/B (optional C one bounded feedback continuation) only after deployed P0, validated isolation, rules and credits. No P1 result may be labeled measured unless actually executed. Target first deployment Oct 30 and hard freeze Nov 2. Never call scripted guard compliance a fixed code bug.
