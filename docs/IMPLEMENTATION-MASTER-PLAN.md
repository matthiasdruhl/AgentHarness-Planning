# Forecode — Implementation master plan

**Scope:** Meta hackathon Oct 26–Nov 4, 2026. **Current state:** documentation only. A milestone is complete only after recorded acceptance evidence in implementation repo. More granular planning **does not extend P0**.

## Traceability and schedule
- **[M0 Kickoff readiness](../milestones/m0.md)** — Oct 25–26, 5 executable sub-milestones; parent F01
- **[M1 Application foundation](../milestones/m1.md)** — Oct 26, 5 executable sub-milestones; parent F01
- **[M2 Trusted experimental infrastructure](../milestones/m2.md)** — Oct 27, 6 executable sub-milestones; parent F02/F03
- **[M3 Verify engine](../milestones/m3.md)** — Oct 28, 7 executable sub-milestones; parent F04
- **[M4 Future Intent Registry](../milestones/m4.md)** — Oct 29, 6 executable sub-milestones; parent F05/F06
- **[M5 Architectural intelligence](../milestones/m5.md)** — Oct 30, 7 executable sub-milestones; parent F07/F08
- **[M6 Meta Foresight reasoning](../milestones/m6.md)** — Oct 31, 7 executable sub-milestones; parent F06/F08
- **[M7 Architecture evolution experiment](../milestones/m7.md)** — Nov 1, 7 executable sub-milestones; parent F09/F10
- **[M8 System integration and freeze](../milestones/m8.md)** — Nov 2, 7 executable sub-milestones; parent F10/F11
- **[M9 Demo and evidence](../milestones/m9.md)** — Nov 3, 6 executable sub-milestones; parent F11/F12
- **[M10 Submission](../milestones/m10.md)** — Nov 4, 5 executable sub-milestones; parent F12

## Critical path
M0 eligibility → M1 contracts → M2 trusted evaluator and safe runner → M3 Verify → M7 real paired experiment → M8 certificate/working integration → M9 credible demo → M10 submission. M4–M6 feed architecture selection and must be cut to one candidate plus one scenario if time slips.

## Stage gates
- **Oct 28:** M2/M3 trusted evidence gate. No secure isolation → do not run an agent.
- **Oct 30:** First safe read-only web deployment with no execution APIs.
- **Nov 1:** M7 paired result gate. No matched experiment → no claim of measured architecture improvement.
- **Nov 2:** Feature freeze. Only fixes, evidence integrity, deploy and demo from here.
- **Nov 4:** Submission confirmation required.

## Priority policy
- **P0:** One vetted TS/Next booking fixture, protected oracle, matched A/B with same Verify, held-out future, Meta structured proposals, deterministic graph regret scoring, evidence ledger, honest demo.
- **P1:** Repetition, Meta-vs-template ablation, Verify-off study, adaptive experiment selection.
- **P2/out:** Massive Monte Carlo, general-purpose agents, arbitrary hosted code execution, multi-language, long-term memory integrations and fancy animations.
- Sub-milestone count is a work-breakdown aid, not a requirement to sacrifice a valid end-to-end demo for administrative completion.

## Per-ticket completion contract
A ticket is not done until code + tests + exact commands/exit codes + SHA + evidence references are logged. Each [milestone file](../milestones/README.md) owns its sub-milestone output. [Contracts](CONTRACT-REGISTRY.md) own module/interface boundaries; [evaluation](09-evaluation-plan.md) owns scoring semantics; [security](10-security-and-privacy.md) owns trust boundaries. Do not invent test outcomes.

## Workstream mapping
- F01 → M0,M1
- F02–F03 → M2
- F04 → M3
- F05–F06 → M4,M6
- F07–F08 → M5,M6
- F09–F10 → M7,M8
- F11–F12 → M8,M9,M10
- F13–F14 → optional after M7
