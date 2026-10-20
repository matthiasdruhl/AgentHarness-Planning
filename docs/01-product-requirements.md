# 01 — Product requirements and scope (PRD)

**Version:** meta-hackathon-1.0. **Status:** Design baseline, pending official rules review.

## Product thesis
Coding agents can produce plausible success messages that contradict their actual tools, tests or permissions. Existing raw traces are hard to audit. AgentHarness Audit demonstrates a short feedback loop: **observe -> diagnose with Muse -> create a machine-checkable regression assertion -> replay a supported scenario -> validate an allowlisted mitigation**.

## Audience and scenario
Primary user: a developer debugging a coding assistant. Secondary: a hackathon judge who needs to understand the outcome in two minutes. Input is a bundled or uploaded JSON agent-execution trace; no GitHub permissions, account creation or local repository access. Primary demo: an agent reports 'fixed' even though the test tool returned an exit code of 1.

## Product outcomes
1. Turn a messy agent trace into a canonical event timeline with source references.
2. Identify probable failure category, confidence level, supporting evidence, and explicit unknowns using Meta Muse.
3. Generate a candidate assertion from a closed test DSL and validate it before replay.
4. For bundled reproducible scenarios, show deterministic failure before a policy mitigation and deterministic pass/blocked outcome afterward.
5. Export evidence, methods, model used, and explicit 'observed' versus 'inferred' labels.

## MVP user stories and acceptance gates
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
Open -> choose 'False success' sample -> inspect failing test -> Run analysis (live Meta) -> see evidence-linked finding -> Review proposed assertion -> Replay baseline (FAIL) -> apply `require_passing_tests` -> Replay after (PASS as policy compliance, not proof code bug fixed) -> export report.

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
