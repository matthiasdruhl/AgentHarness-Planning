# 15 — Demo story, evidence packet and submission plan

## Judge-facing story
**Hook:** 'Coding agents sometimes say they're done when tests show otherwise.'  
**Problem:** Raw tool transcripts make contradictions hard to spot.  
**Product:** AgentHarness Verify uses Meta Muse to turn the trace into an evidence-linked diagnosis and constrained regression assertion.  
**Proof:** Replay the synthetic reference scenario: without the guard, the agent reports success after a failing test; with the guard, it cannot claim success.  
**Trust:** Show the unchanged failing test and say this proves a **completion policy**, not a code repair.

## 2:30–3:00 recorded demo storyboard
| Time | On screen | Narration point |
|---|---|---|
| 0:00–0:15 | Hero scenario + conflicting '1 failed' and 'All tests pass' | Failure matters |
| 0:15–0:35 | Trace viewer, event IDs and statuses | Real source of evidence |
| 0:35–1:00 | Live Muse analysis action; result, model ID and evidence | Why Meta is needed |
| 1:00–1:25 | Candidate regression assertion, exact supporting events | Translate reasoning into executable check |
| 1:25–1:45 | Baseline replay FAIL, observed sequence | Reproducible reference scenario |
| 1:45–2:05 | Apply approved policy guard; after replay policy PASS | Controlled mitigation |
| 2:05–2:25 | Side-by-side and caveat 'tests still fail' | Honest verification |
| 2:25–2:45 | Export report + metric table | Developer utility |
| 2:45–3:00 | Closing pitch / availability | Takeaway |

Record the actual live Meta run and retain an offline recording. Do not cut between different traces while claiming it is one continuous run; if video uses a pre-recorded response, label it.

## Submission artifacts
1. Deployed demo URL with deterministic fixture path, no sign-in needed for inspection.
2. Implementation GitHub repository URL at immutable final commit/tag (subject to organizer visibility requirements).
3. 2–3-minute product video (requirement **to verify against final official rules**, not assumed mandatory).
4. Project description, specific Meta models and why used.
5. Architecture diagram, privacy/safety details and exact limitations.
6. Benchmark markdown with raw numerators/denominators, methodology and honest results.
7. Installation instructions, `.env.example`, licensing and fixture provenance.
8. Submission receipt/screenshot and timestamp saved privately.

## Suggested entry narrative (adapt to form limits)
'AgentHarness Verify helps coding-agent builders detect and prevent false success claims. It parses execution traces, uses Meta Muse Spark to identify evidence-backed contradictions and propose regression checks, and evaluates those checks on bounded, deterministic reference scenarios. A side-by-side before/after demonstration shows how an allowlisted policy guard prevents a false completion while preserving the failed test as visible evidence. Every claim is tied to trace IDs and measured results.'

## Checklist at freeze (Nov 2)
- [ ] All demo steps work in deployed production (including provider-disabled fallback).
- [ ] No real Meta key, private traces or PII in repository/video.
- [ ] Model name and mode in UI are correct.
- [ ] Replay simulated nature and policy-only verdict are obvious.
- [ ] No 404 from links; app usable in incognito.
- [ ] Runbook/rollback ready; support plan for live outage.
- [ ] Benchmark includes version/commit and excludes unmeasured claims.

## Submission-day protocol
By Nov 4 morning: verify official form requirements, confirm deadline/timezone in portal, finish video upload early (processing can take time), test URLs from a second browser/device, submit several hours before deadline, capture receipt. Avoid risky deployments after submission unless necessary for a blocking defect. Official dates can change; event portal is authoritative.

## Judging alignment (qualitative, not invented weights)
- **Creativity/technical ambition:** convert LLM qualitative reasoning to a validated DSL; evidence-verifiable diagnostics.
- **Functional reliability:** deterministic replay harness, negative controls, error handling, clear provenance.
- **Meta use:** a real Muse inference call with strict JSON and highlighted analysis value.
- **Presentation:** one before/after story, live evidence, measurable results.
Theme suggestion: `Push the Frontier`. Likely indie developer track for a solo builder **unless acceptance registered another track**; verify actual selection in organizer portal before entry.

## Verify-first judge script (supersedes diagnosis-first opening)
**Opening 15 seconds:** 'This coding agent says it fixed the problem, but its tests failed. AgentHarness Verify immediately marks the completion **UNVERIFIED** and shows exactly why.' Immediately display the verdict plus test/claim evidence IDs, without spending a Muse call. **Next:** request Muse explanation and a bounded candidate assertion, explaining that Muse does not decide truth. **Then:** show scripted baseline FAIL and guard policy PASS **while the underlying test remains failed**; export the scoped result. If separately measured T15 evidence is available and safe, present it as *real-agent* data with honest N and false-block rate, not as simulation.

Use product name **AgentHarness Verify** throughout pitch, recording, README and form. The phrase 'reliable agents' is aspirational; the demonstrated P0 claim is **evidence-backed completion status plus scripted guard behavior**. No claims of code repair or beating AgentRx/HALO without corresponding measurements. Maintain organizer video and eligibility verification.
