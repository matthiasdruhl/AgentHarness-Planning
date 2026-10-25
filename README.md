# Forecode — Foresight + Verify | Meta Hackathon Planning

**Status:** planning specifications; no benchmark execution or performance results. **Event:** October 26–November 4, 2026. **Project:** AgentHarness-Planning.

**Forecode is a Meta-powered architecture research tool.** Developers confirm future intentions; **Meta forms falsifiable architecture hypotheses, adversarially challenges them, and interprets verified evidence**. Codex executes only human-approved controlled experiments inside an isolated sandbox; a separate evaluator issues scoped verification certificates. We compare strong status quo/template alternatives and retain losing results.

## Start here
- **[Meta Architecture Scientist — P0 protocol](docs/META-ARCHITECTURE-SCIENTIST.md)** · **[Contract Freeze v1](docs/CONTRACT-FREEZE-v1.md)** · [Machine-readable schemas and conformance tests](contracts/README.md) · **[Hackathon submission-first plan](docs/HACKATHON-CRITICAL-PATH.md)** · [Existing Codex Docker Sandbox booking-first runbook](docs/DOCKER-SANDBOX-BOOKING-FIRST.md) · [app/Codex handoff](docs/IMPLEMENTATION-HANDOFF.md) · [demo acceptance](docs/DEMO-ACCEPTANCE.md) · [audit tracker](docs/AUDIT-REMEDIATION.md)
- [AGENTS.md](AGENTS.md) and [execution index](docs/21-execution-index.md)
- [Master implementation plan](docs/IMPLEMENTATION-MASTER-PLAN.md), [milestones](milestones/README.md), [68 Codex tickets](docs/CODEX-TICKETS.md)
- [Benchmark registry](benchmarks/README.md) and [booking-v1 demo specification](benchmarks/booking-v1/README.md)
- **[Local M4 Pro sandbox plan](docs/LOCAL-MAC-SANDBOX.md)** and **[Docker Sandbox–first SlopCodeBench integration decision](benchmarks/SCBENCH-SANDBOX-ADAPTER-PLAN.md)**
- [Evaluation standards](docs/09-evaluation-plan.md), [security gates](docs/10-security-and-privacy.md)

## Critical constraints
No app-hosted arbitrary code execution. No untrusted task access to personal Codex auth, host files or hidden tests. SCBench stock Codex adapter is blocked pending reviewed isolation; Docker Sandboxes is first *candidate*, not a verified integration. External public benchmark pilot is conditional, and local booking controlled study is not standalone evidence of generalization. Results must be actually measured and failures reported. Nov 2 feature freeze.

## Audit clarification (Oct 25)
This repository is documentation-only. M0–M10 and 68 tickets remain full specs, **not** all mandatory by Nov 4. No app, live model call, secure sandbox or measured A/B result is claimed. The [critical path](docs/HACKATHON-CRITICAL-PATH.md) controls near-term scope.

## What Meta uniquely does
**Hypothesis:** predicts a specific observable architectural tradeoff and states how to disprove it. **Challenge:** proposes a plausible counterexample that could make its own hypothesis fail (model-generated, **not secretly held out**). **Interpretation:** after a genuine protected evaluator run, contextualizes sanitized results without changing the verdict. An actual live call and strong equally informed non-Meta comparator are required before claiming measurable incremental Meta benefit. See [P0 protocol](docs/META-ARCHITECTURE-SCIENTIST.md). Adaptive experiment selection and multi-agent debate are P1, not kickoff blockers.
