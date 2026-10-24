# 21 — Operational index and document precedence

**Prepared:** 2026-10-24. **Scope:** Meta Global AI Developer Hackathon, October 26–November 4, 2026. This is a planning repository, not the runtime application.

## Precedence, without duplicating contracts
1. Organizer's current official rules control competition eligibility (see [16](16-rules-and-compliance.md)); unresolved terms are **not** permissions.
2. [AGENTS.md](../AGENTS.md) sets agent execution and safety rules.
3. [01 PRD](01-product-requirements.md) sets P0/P1/out-of-scope and acceptance goals.
4. [03 data contracts](03-data-contracts.md) and [04 API contracts](04-api-contracts.md) own exact interfaces.
5. [02 architecture](02-system-architecture.md), [06 replay](06-replay-and-fixes.md), and [17 ADRs](17-architecture-decisions.md) own implementation constraints.
6. [13 task board](13-codex-task-board.md) sets dependency order; [tasks](../tasks/README.md) provide executable individual prompts.
7. [12 calendar](12-ten-day-plan.md) defines milestone dates; [15 submission](15-demo-and-submission.md) and [16 rules](16-rules-and-compliance.md) define submission checks.

If documents disagree, **stop and log the conflict in an ADR**, amend affected specifications and tasks together, and do not silently select a convenient interpretation. Dates/rules from organizers supersede planning assumptions.

## Operational files
- [Codex workflow](CODEX_WORKFLOW.md): exact task lifecycle and handoff.
- [Session handoff](SESSION_HANDOFF.md): blank, truthful current-state template to copy to app repo.
- [Resource budget](RESOURCE_BUDGET.md): credit caps and telemetry without fictitious dollar amounts.
- [Demo scenario](DEMO_SCENARIO.md): primary judge narrative and truth-in-advertising controls.
- [Submission checklist](SUBMISSION_CHECKLIST.md): day-zero and final evidence gates.
- [Preflight](PREFLIGHT.md): remaining preparations and stop/go decisions.
- [Task files](../tasks/README.md): prompts linked to existing T01–T14, not another competing roadmap.

## Non-goals
Do not create a database, broad agent framework, autonomous code edits, production multi-tenant system, or executable untrusted replay. Do not call a guard-policy PASS a fixed code bug.

## Optional architecture extension
[27 — real-agent experiment](27-real-agent-experiment.md) is the definitive P1-only execution boundary and paired protocol; [task 06](../tasks/06-real-agent-experiment.md) is Codex ticket T15. ADR-011 documents the exception for a developer-local runner; it does not supersede P0 contracts or authorize public app execution.
