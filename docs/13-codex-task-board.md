# 13 — Canonical Codex workstreams (parent tickets)

The earlier F01–F14 are **workstream IDs**, not complete execution tickets. [CODEX-TICKETS.md](CODEX-TICKETS.md) is the canonical detailed queue containing 68 executable `M*.x.1` tickets. [Milestone specifications](../milestones/README.md) own each ticket's scope and acceptance.

| Parent | Primary milestones | Implementation ownership |
|---|---|---|
| F01 | M0–M1 | rules, app setup, contracts, CI |
| F02–F03 | M2 | vetted fixture, oracle, isolated runner |
| F04 | M3 | independent Verify checks, evidence verdict |
| F05–F06 | M4, M6 | intent registry, Meta adapter, candidates/scenarios |
| F07–F08 | M5–M6 | graph, regret, Foresight orchestration |
| F09 | M7 | matched A/B held-out experiment |
| F10 | M7–M8 | evidence, certificate |
| F11 | M8–M9 | UX and demo |
| F12 | M8–M10 | deploy, submit |
| F13–F14 | P1 only | ablations and repeated runs after P0 |

**Critical path:** protected evaluator / sandbox / Verify → fair experiment → read-only evidence/certificate → submission. The exact date and fallback gates live in [master plan](IMPLEMENTATION-MASTER-PLAN.md) and [validation](MILESTONE-VALIDATION.md). No substantive code, model call or run is implied by marking these tickets planned.
