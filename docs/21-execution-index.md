# 21 — Canonical document precedence

1. Current official organizer rules (docs/16) govern hackathon eligibility.
2. README.md and AGENTS.md govern current Forecode Foresight + Verify mission and trust boundaries.
3. docs/01 PRD governs product requirements; docs/03 and docs/04 **alone** own exact data/API contracts.
4. docs/02 and docs/10 govern architecture/security; docs/09 governs study interpretation.
5. [Implementation master plan](IMPLEMENTATION-MASTER-PLAN.md) governs dependencies, stage gates and cut order; [milestone directory](../milestones/README.md) owns detailed sub-milestone specs.
6. [CODEX-TICKETS](CODEX-TICKETS.md) owns the *sole* executable ticket inventory; [docs/13](13-codex-task-board.md) maps parent F01–F14 workstreams.
7. [CONTRACT-REGISTRY](CONTRACT-REGISTRY.md) maps modules but does not override docs/03/04. [BENCHMARK-PROTOCOL](BENCHMARK-PROTOCOL.md) elaborates docs/09 without contradicting it. [MILESTONE-VALIDATION](MILESTONE-VALIDATION.md) owns exit gates.
8. docs/12 remains the calendar; docs/15 demo/submission; docs/17 ADR, docs/18 risks, docs/20 readiness. docs/28–29 remain historical transitions.
9. Prior Verify-only PR #1 is closed/superseded.

If any active files conflict, stop, log an ADR and reconcile schemas, milestones, tests and demo claims together. Planning repository has no implementation or measured benchmarks.
