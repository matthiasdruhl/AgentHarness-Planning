# 21 — Canonical document precedence

1. Official organizer rules (docs/16) override planning; [submission-first critical path](HACKATHON-CRITICAL-PATH.md) governs hackathon priority while schemas/technical gates remain canonical elsewhere.
2. README.md, AGENTS.md, docs/01 define Forecode mission/scope; docs/03, docs/04 own exact contracts.
3. docs/02 and [docs/10](10-security-and-privacy.md) own execution/security invariants; [local Mac plan](LOCAL-MAC-SANDBOX.md) adds proposed machine settings only.
4. [docs/09](09-evaluation-plan.md) owns claim interpretation; [SCBench Mac review](../benchmarks/SCBENCH-MAC-COMPATIBILITY.md) owns upstream compatibility findings; [public benchmark strategy](../benchmarks/PUBLIC-BENCHMARK-STRATEGY.md) owns conditional selection.
5. docs/IMPLEMENTATION-MASTER-PLAN.md, milestones, docs/CODEX-TICKETS.md own schedule and tasks. docs/13 is parent mapping.
6. benchmarks/booking-v1 owns custom demo fixture; docs/17–20 risk/ADR/preflight; docs/28–29 are legacy.

Never run upstream Codex integration with personal auth mount or bypass flag without a reviewed trusted outer boundary. If documents conflict, update ADR, security, milestones and tests before implementation. Documentation does not prove tools installed or experiments run.

## 2026-10-25 audit remediation references
- [Critical path](HACKATHON-CRITICAL-PATH.md): must-ship, conditional and post-event scope; earlier measurement gates.
- [Implementation handoff](IMPLEMENTATION-HANDOFF.md): immutable spec lock, app layout and Codex execution.
- [Canonical clarifications](CANONICAL-IMPLEMENTATION-CONTRACT.md): no ordinal subtraction, receipt authority/staleness and unambiguous paths.
- [Demo acceptance](DEMO-ACCEPTANCE.md): judge UX, attribution and E2E gates.
- [Remediation tracker](AUDIT-REMEDIATION.md): issues and unverified code-level follow-up.
These are documentation additions only; no recorded experiments or final organizer approvals.
