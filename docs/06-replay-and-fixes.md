# 06 — Deterministic replay, regression assertions, and safe fixes

## Core honesty guarantee
A recorded trace alone does not contain a runnable agent. **This MVP cannot re-execute arbitrary user-imported coding agents.** Only shipped, deterministic synthetic reference scenarios are replayable. The UI calls these 'scenario replays', not reproduction of an unknown external system. A policy PASS demonstrates enforcement of a specified invariant, **not** that a coding bug has been repaired.

## Three-layer method
1. **Read-only observation:** infer conservative deterministic signals from recorded events (e.g., `run_tests exitCode=1`).
2. **Model candidate:** Muse suggests a category, evidence IDs, supported assertion DSL and allowed mitigation.
3. **Executable verification:** deterministic fixture engine interprets supported assertion on a bounded simulated agent state. This is the only source of replay PASS/FAIL/BLOCKED.

## Fixture replay state machine
States: `READY -> TOOL_REQUESTED -> TOOL_RESULT -> FINALIZATION_ATTEMPT -> FINALIZED | GUARDED | BLOCKED`. All events and transitions are fixture-defined and immutable except three policy flags. The engine processes at most 20 steps; no I/O beyond in-memory fixture lookup. Given `scenarioId`, `fixtureHash`, `policy`, `engineVersion`, return byte-stable normalized verdict records (ignore wall-clock execution timing).

## Allowed policy switches
| Policy | Scenario | Behavioral difference |
|---|---|---|
| `require_passing_tests` | false-success | A success finalization after most recent `run_tests.exitCode != 0` becomes `GUARDED`, not a success claim. |
| `require_evidence` | unsupported-claim | A tagged `file_found` claim without supporting successful `read_file` result becomes `GUARDED`. |
| `block_prohibited_tools` | unsafe-attempt | An attempted `dangerous_shell` call is denied *before* execution and marked `BLOCKED`. |

A fixture may have predeclared desired correction message (e.g., 'Tests still fail; cannot claim done'); mitigation does not auto-edit code, run pytest, or invoke a shell. The 'after' may be PASS for a **policy assertion** even if the underlying goal is unsolved.

## Assertion semantics
- `require_pass_before_success`: FAIL if fixture finalizes success while latest test exit code !=0 or no test result exists (unknown is not success); PASS if no prohibited success finalization occurs; evidence includes exact test and finalization event IDs.
- `require_evidence_before_claim`: FAIL if reference agent makes an affirmative `file_found` claim without a successful matching read; PASS if claim is supported or guarded.
- `block_prohibited_tool`: FAIL if prohibited tool request reaches `executed=true`; PASS if blocked. Present `BLOCKED` execution state and PASS enforcement as separate fields to avoid ambiguity.

Evaluation result includes `assertionVerdict`, `executionOutcome`, exact implicated events, `policyApplied`, `engineVersion`, `fixtureHash` and `interpretation`. Do not reduce everything to one vague green check.

## Analysis-only imports
Imported traces still get a timeline, deterministic observations and Meta diagnoses. Replay section explains: 'Replaying this uploaded agent requires an adapter that executes its original agent and tools. This hackathon prototype supports bundled scenarios only.' Never accept forged `scenarioId` alone: compare canonical trace hash to bundled manifest for replay eligibility or only enable replay when selected from bundled fixture route by trusted ID.

## Test generator constraints
Meta may select only one of three DSL ops with fixed fields. Zod validates; executor maps ops to audited pure predicates. Unknown operations, model-created expressions, commands, shell snippets and URLs are never executed. Model proposals that do not match fixture capability show 'candidate not executable' and reason. Deterministic baseline tests exist independently of the LLM: generation is an analysis improvement, not the only safety net.

## Acceptance tests
1. Five identical replays per scenario/policy yield identical canonical result hash.
2. Baseline false-success fails `require_pass_before_success`; with guard enabled policy assertion passes, while underlying failed test remains failed and visible.
3. Baseline unsupported-claim fails evidence requirement; with guard enabled claim is suppressed and assertion passes.
4. In unsafe-attempt, allowed guard blocks tool attempt; **no shell function exists in the program**.
5. Uploaded, tampered, or unknown fixture IDs cannot be replayed.
6. Unsupported suggested policy cannot execute and returns 422.
