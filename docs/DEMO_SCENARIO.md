# Demo scenario — the false-success guard

**Narrative:** A coding agent says “fixed” after its test tool returned nonzero. AgentHarness Verify exposes the mismatch, uses a live Meta Muse analysis to propose a grounded diagnosis and allowed test, then shows a deterministic policy guard preventing the false completion claim. It does **not** claim the code defect itself was repaired.

## 2–3-minute judge path (rehearsal target)
| Time target | Action | Evidence and honest claim |
|---|---|---|
| 0:00–0:20 | Explain false-success problem; open deployed app | One concrete failure mode, not a general reliability platform |
| 0:20–0:45 | Select bundled `false-success` trace | Ordered events; failing test exit code, agent success statement and immutable evidence IDs |
| 0:45–1:20 | Trigger **live** Muse analysis | Show model/status/latency where available; evidence-linked candidate diagnosis and uncertainty. If unavailable show visibly labeled recorded fallback |
| 1:20–1:45 | Inspect candidate DSL assertion and baseline | Assertion validated against allowlist; baseline deterministically fails |
| 1:45–2:10 | Apply `require_passing_tests` to bundled scripted scenario | Replay prevents unsupported success: policy/compliance PASS; underlying test still failed |
| 2:10–2:35 | Compare before/after event evidence | Guard outcome differs, no code execution or source fix occurred |
| 2:35–3:00 | Export JSON, highlight provenance and limitations | Source event IDs, scenario, exact policy delta, version, live vs recorded |

## Demo fixtures
Primary: `FALSE_SUCCESS`. Secondary for Q&A: `UNSUPPORTED_CLAIM` and `UNSAFE_ACTION_ATTEMPT`. Use [07 fixtures](07-scenarios-and-fixtures.md) and [06 replay semantics](06-replay-and-fixes.md). Arbitrary uploads are **analysis only**, not executed replay.

## Failure rehearsals
- Missing/expired Meta key: deterministic flow continues; show RECORDED fallback with explicit provenance, no fabricated “live”.
- 429/timeout: actionable error; use bounded retry; avoid draining credits live on stage.
- Invalid model evidence IDs: show validation rejection, never silently cite nonexistent events.
- Unsupported uploaded trace replay: explanatory disabled state.
- External dependency/network failure: replay baseline and guard locally, export sanitized report.

## Evidence capture
Keep one verified live call's request metadata and sanitized result, 5 identical deterministic replay runs, passing tests, production smoke, and backup recorded demo clearly labeled. Capture final commit and URL. Avoid made-up benchmark percentages. Match the official submission format once organizer rules are confirmed.

## Current demo sequence (supersedes older timeline)
Start with a deterministic UNVERIFIED verdict for F1 and direct test/claim links. Muse is an optional explanation and bounded assertion proposer, never ground truth. Show scripted baseline FAIL and guard policy PASS, keeping original failed test visible. End with scoped report. Only completed T15 may support observed real-agent improvement figures. See [28](28-verify-product-north-star.md) and [26](26-demo-rehearsal-and-fallback.md).
