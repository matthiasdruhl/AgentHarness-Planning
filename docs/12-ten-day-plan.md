# 12 — Oct 26–Nov 4 execution calendar

The [submission-first critical path](HACKATHON-CRITICAL-PATH.md) is authoritative for *hackathon priority and early evidence gates*; the [master plan](IMPLEMENTATION-MASTER-PLAN.md) remains authoritative for full technical dependencies; the [milestone specs](../milestones/README.md) describe concrete sub-milestones. Dates are targets, not permission to skip acceptance gates.

| Date | Milestone | Primary exit gate |
|---|---|---|
| Oct 24–25 | M0 preparations | rules/credits/isolation plan; implementation eligibility unresolved until official signoff |
| Oct 26 | M0/M1 | official approval + strict app foundation |
| Oct 27 | M2 | safe controlled runner and protected evaluator |
| Oct 28 | M3 | evidence-backed Verify |
| Oct 29 | M4 | confirmed intent + validated Meta drafts |
| Oct 30 | M5 | graph + deterministic regret; first read-only deployment |
| Oct 31 | M6 | bounded Foresight candidates / challenges |
| Nov 1 | M7 | matched A/B with frozen held-out evaluation |
| Nov 2 | M8 | end-to-end integration; **feature freeze** |
| Nov 3 | M9 | measured-evidence demo and video |
| Nov 4 | M10 | smoke/secure/submit; verify official portal cutoff |

If M2 isolation or M7 fair comparison fails, preserve safe read-only fallback and **drop improvement claims** instead of fabricating numbers. Never spend final days on P1 while P0 is unstable.

## Timing interpretation (post-audit)
The table groups full M0–M10 workstreams and must **not** be read as a requirement to delay the first safe evaluator result until Oct 28 or a paired experiment until Nov 1. Target real evidence earlier when the technical gates permit, with an A/B by Oct 30 and external SCBench a strictly conditional pilot. Nov 2 remains feature freeze. Recheck 9 PM ET Nov 4 portal deadline after Nov 1 daylight-saving change.

## Docker Sandboxes setup advancement
User reports installing and initializing Docker Sandbox + Codex; this avoids a speculative installation task but does not discharge isolation proof. Oct 27: inspect current sandbox and attest sanitized booking target, host secret/SSH forwarding and grader separation; Oct 28: run the minimal bounded booking smoke if verified; Oct 30: only attempt external SCBench if booking A/B evidence has a credible pathway. See [operator runbook](DOCKER-SANDBOX-BOOKING-FIRST.md).

## Meta Scientist reprioritization (no new milestone)
Keep Oct 26 M0/M1 setup and live eligible model access. By Oct 29 target at least one typed falsifiable hypothesis and one adversarial *proposed* counterexample; connect to already planned M6.1/M6.3 deliverables rather than delay first experiment. Once real independent booking receipts are available, add optional Meta evidence interpretation without mutating verdict. Defer adaptive selection, multi-agent debate and SCBench until safe P0 is complete. [P0 protocol](META-ARCHITECTURE-SCIENTIST.md).

## Official October 26 kickoff rule override
The preceding calendar is a project-management target; **the allowed code-building window starts only after the Oct 26 noon Eastern kickoff** (organizer explicit correction). The first deliverable is a **new event-created, publicly accessible, standalone submission repo** and fresh provenance log; the pre-event `AgentHarness-Planning` source/docs/JSON contracts/fixtures are **reference-only, never files to copy into entry**. Only approved human collaborators may contribute. Preserve first-commit provenance. Equal judge weighting (impact, Meta AI, technical execution and demo) favors live meaningful Meta integration and a compelling strictly 3-minute video. See [confirmed rules](OFFICIAL-PARTICIPANT-RULES-2026-10-26.md).
