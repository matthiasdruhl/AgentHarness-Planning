# 18 — Hackathon risk register and contingency matrix

Scale: likelihood L/M/H; impact L/M/H as planning estimates, not statistical probabilities. Owner: solo developer unless team assignment changes. Review every morning.

| ID | Risk | L/I | Leading signal | Mitigation / fallback |
|---|---|---|---|---|
| R01 | Official rules disallow prebuilt work | M/H | rules wording at kickoff | planning-only repo; inspect before new implementation, rewrite scope if necessary |
| R02 | Muse access / key unavailable | M/H | 401/403 or insufficient credits | verify by Day 3; isolate SDK; recorded response labeled, deterministic demo intact |
| R03 | Live model makes wrong claims | H/H | orphan refs, false positives | strict validator, gold tests, show hypothesis not fact, fall back to rule evidence |
| R04 | Model output invalid JSON | M/M | 400 schema or invalid parse | test supported schema subset, simplified schema, 502 with graceful UI |
| R05 | Replay semantics misleading | M/H | judge thinks source code fixed | explicit policy-only claim and unchanged test evidence |
| R06 | Public inference endpoint abused | M/H | spike in token spend | provider hard cap + WAF/rate control; disable live for untrusted public users |
| R07 | Time overruns | H/H | replay not working by Oct 30 | cut second/third replay UI, freeze features Nov 2, ship hero proof |
| R08 | Scope creep to multi-agent / sandbox | H/H | new dependencies without acceptance | ADR scope gate; no arbitrary executor |
| R09 | Deployment broken | M/H | 5xx, build fails or domain issue | daily preview smoke, rollback SHA, offline static fixtures work |
| R10 | Benchmark overstates capability | M/H | N missing, gold altered after run | pre-freeze labels, documented denominator, manual relevance adjudication |
| R11 | Demo video delayed | M/H | no storyboard by Nov 1 | script in advance, record by Nov 3 morning, use incognito deployment |
| R12 | Import leaks sensitive user data | M/H | raw logs/analytics or unsanitized reports | synthetic by default, client warning, no persistence, excerpt-only export |
| R13 | Platform timeout for inference | M/M | long provider requests / Vercel limit | 1 call per click, bounded payload/output, UI timeout, offline results |
| R14 | Final rules/submission portal change | M/H | new organizer message | check on kickoff + Nov 2 + Nov 4, keep submission buffer |

## Failure gates and action owners
- **Oct 28:** if no live Muse call, stop UI polish and fix credentials/SDK/schema.
- **Oct 30:** if deterministic replay missing, cut feature branches and finish false-success reference scenario.
- **Nov 2:** if external security protection incomplete, disable public live inference before sharing site.
- **Nov 3:** if production flow unstable, revert to last green deployment and record proof from that version.
- **Nov 4:** if portal slow, submit minimal eligible artifacts early and edit only if officially permitted.

## Contingency demo order
A: deployed live analysis + deterministic verification; B: deployed recorded analysis clearly labeled + deterministic verification, with authentic pre-recorded live call in video; C: locally recorded complete demonstration with source and reproducible tests if live site fails. Never mislabel B/C as A.

## Decision log discipline
When a risk triggers, record date, evidence, concrete change, tradeoff, and new planned gate in implementation daily log. The benchmark and final video must reflect what was *actually shipped*, not earlier planned behavior.

## Additional Verify-specific risks and mitigations
- **Trivial-rule objection:** a failed exit code already reveals F1. Mitigation: demonstrate the end-to-end evidence-to-verdict-to-constrained-test-to-guard workflow and honestly compare Muse added value in a more ambiguous example if feasible; never imply detecting a simple exit code needs an LLM.
- **False green:** test PASS is treated as universal software correctness. Mitigation: label `scope:completion_claim`, show exact passed checks and unknowns; no claim of whole-code correctness.
- **Overblocking:** guard prevents legitimate completion and falsely boosts apparent reliability. Mitigation: N1 controls and, if T15 runs, explicit valid-success blocked and task-solved metrics.
- **Ambiguous trace:** missing tool output causes invented PASS/FAIL. Mitigation: `INSUFFICIENT_EVIDENCE` by default with reason code and absent-data message.
- **Muse overrides ground truth:** model hallucination changes deterministic verdict. Mitigation: pure TS authoritative verdict and contract test V05.
- **Scope collision:** P1 real-agent runner delays P0. Mitigation: skip T15 until P0 green, honor Nov 2 freeze and isolate runner outside deployed app.
