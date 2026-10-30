# Forecode — Foresight + Verify | Meta Hackathon Planning

**Status:** pre-event planning reference, **NOT the submitted project**; no benchmark execution or performance results. **Authorized code build:** after **Oct 26, 2026 noon ET kickoff** through Nov 4, 9 PM ET. **Project:** AgentHarness-Planning.

**Forecode is a Meta-powered architecture research tool.** Developers confirm future intentions; **Meta forms falsifiable architecture hypotheses, adversarially challenges them, and interprets verified evidence**. Codex executes only human-approved controlled experiments inside an isolated sandbox; a separate evaluator issues scoped verification certificates. We compare strong status quo/template alternatives and retain losing results.

## Official rule override — begin here
**Critical:** Organizer requires a **fresh public standalone submission repo with only features/code built after the Oct 26 noon kickoff**. This pre-event repo and its contracts, CI, JSON examples and fixture scripts must **NOT** be copied into the submission; read for conceptual guidance only and implement anew. Only organizer-approved humans may help. The opening line of the **required 3-minute demo** must distinguish pre-event idea/planning from new submitted features. Four judging categories weighted **equally** (impact, Meta tooling, technical execution, demo). [Official participant rules summary](docs/OFFICIAL-PARTICIPANT-RULES-2026-10-26.md).

## Start here
- **[Meta Architecture Scientist — P0 protocol](docs/META-ARCHITECTURE-SCIENTIST.md)** · **[Contract Freeze v1](docs/CONTRACT-FREEZE-v1.md)** · [Machine-readable schemas and conformance tests](contracts/README.md) · **[Hackathon submission-first plan](docs/HACKATHON-CRITICAL-PATH.md)** · [Existing Codex Docker Sandbox booking-first runbook](docs/DOCKER-SANDBOX-BOOKING-FIRST.md) · [app/Codex handoff](docs/IMPLEMENTATION-HANDOFF.md) · [demo acceptance](docs/DEMO-ACCEPTANCE.md) · [audit tracker](docs/AUDIT-REMEDIATION.md)
- [AGENTS.md](AGENTS.md) and [execution index](docs/21-execution-index.md)
- [Master implementation plan](docs/IMPLEMENTATION-MASTER-PLAN.md), [milestones](milestones/README.md), [68 Codex tickets](docs/CODEX-TICKETS.md)
- **[Evidence-Driven Architecture Learning Loop](docs/ARCHITECTURE-LEARNING-LOOP.md)** · **[Codex implementation and verification plan](docs/LEARNING-LOOP-IMPLEMENTATION-PLAN.md)** — planned P1 evidence memory -> constrained contextual bandit -> post-event sequential RL. Learns from admissible independent tournament receipts; preserves KEEP/abstain, cost and uncertainty. Not currently a trained system, and never a P0 dependency.
- **[Competitive stretch execution roadmap (Oct 27)](docs/COMPETITIVE-STRETCH-ROADMAP-2026-10-27.md)** — preplanned architecture tournament, Meta Scientist, Time Machine, protected evidence and Codex handoffs. Optional packages never displace P0 or Nov 2 feature freeze.
- **[PR-sized implementation queue](docs/IMPLEMENTATION-QUEUE-2026-10-27.md)** · **[Precommitted tournament experiment](docs/ARCHITECTURE-TOURNAMENT-PROTOCOL.md)** — exact dependencies, Codex branch/testing handoffs, valid A/B vs B/C comparisons.
- **[Impact and demonstrability refinement (Oct 29)](docs/IMPACT-AND-DEMONSTRABILITY-REFINEMENT-2026-10-29.md)** — detailed Future Breakage booking story, user-facing consequences, evidence-backed refactor/wait/inconclusive Decision Report, honest no-refactor outcomes and three-minute demo acceptance, without expanding the milestone tree.
- **[Competitor-inspired feature coverage audit (Oct 30)](docs/COMPETITOR-INSPIRED-FEATURE-COVERAGE-2026-10-30.md)** — maps all four competitive improvements to current P0/S2/S4 planning; specifies strictly optional, read-only priority what-if and post-result stress-probe safeguards without changing milestone or demo scope.
- **[Judge success gates](docs/JUDGE-SUCCESS-GATES.md)** · **[Rule and eligibility reconciliation](docs/RULES-VERIFICATION-2026-10-27.md)** · **[Stretch-feature promotion/kill switches](docs/STRETCH-PROMOTION-GATES.md)** — how to select, prove, demonstrate and cut work before Nov 2.
- [Benchmark registry](benchmarks/README.md) and [booking-v1 demo specification](benchmarks/booking-v1/README.md)
- **[Local M4 Pro sandbox plan](docs/LOCAL-MAC-SANDBOX.md)** and **[Docker Sandbox–first SlopCodeBench integration decision](benchmarks/SCBENCH-SANDBOX-ADAPTER-PLAN.md)**
- [Evaluation standards](docs/09-evaluation-plan.md), [security gates](docs/10-security-and-privacy.md)


## Frontend design — v5 tournament edition (Oct 28)

- **[Open the current interactive frontend prototype (v5)](design/forecode-v5/README.md)** — tournament-centered landing, four connected workbench views, optional three-arm A/B/C comparison, Architecture Time Machine and independent Evidence Laboratory. All examples remain clearly fictional; no claim of measured execution.
- **[v5 visual and interaction specification](design/forecode-v5/design-spec.md)** — full feature vision, P0/stretch scope, research fairness and implementation guardrails.
- **[Impact-first v5.1 frontend design](design/forecode-v5/impact-first-design-spec.md)** · **[desktop/mobile page wireframes](design/forecode-v5/impact-first-wireframes.md)** · **[Codex-ready impact UI handoff](docs/FORECODE-UI-IMPLEMENTATION-HANDOFF-impact-v5.md)** — new Future Breakage opening, dedicated Decision Report destination, fairness/verification clarity and honest no-run layouts. Conceptual design updates; current v5 HTML prototype is not yet updated.
- **[Original v4.4 visual system and UX specification](docs/FORECODE-UI-UX-FINAL-v4.4.md)** — editorial landing + engineering workbench, Architecture Atlas, Meta hypothesis/challenge, A/B traces, independent evidence certificate, colors, typography, responsive and motion rules.
- **[Codex frontend implementation handoff](docs/FORECODE-UI-IMPLEMENTATION-HANDOFF-v4.4.md)** — scope-ranked P0/P1 plan mapped to existing M8/M9 tickets, trust-state requirements, accessibility and acceptance tests.
- **[Browse the actual V4.4 interactive design reference](design/forecode-v4.4/README.md)** — self-contained HTML prototype with the original design notes. Open the HTML locally; it is **not** submitted code.

These documents are **design-only planning references**. Do not copy prototype HTML/CSS/JS or historical planning artifacts into the hackathon submission; all eligible code must be newly authored after kickoff in the standalone entry. The critical-path and frozen trust/contract specs remain authoritative.

The v4.4 reference remains preserved and its security/contract requirements are not superseded by the v5 concept design. The new prototype is a **pre-event planning reference**, never eligible submission source.

## Critical constraints
No app-hosted arbitrary code execution. No untrusted task access to personal Codex auth, host files or hidden tests. SCBench stock Codex adapter is blocked pending reviewed isolation; Docker Sandboxes is first *candidate*, not a verified integration. External public benchmark pilot is conditional, and local booking controlled study is not standalone evidence of generalization. Results must be actually measured and failures reported. Nov 2 feature freeze.

## Audit clarification (Oct 25)
This repository is documentation-only. M0–M10 and 68 tickets remain full specs, **not** all mandatory by Nov 4. No app, live model call, secure sandbox or measured A/B result is claimed. The [critical path](docs/HACKATHON-CRITICAL-PATH.md) controls near-term scope.

## What Meta uniquely does
**Hypothesis:** predicts a specific observable architectural tradeoff and states how to disprove it. **Challenge:** proposes a plausible counterexample that could make its own hypothesis fail (model-generated, **not secretly held out**). **Interpretation:** after a genuine protected evaluator run, contextualizes sanitized results without changing the verdict. An actual live call and strong equally informed non-Meta comparator are required before claiming measurable incremental Meta benefit. See [P0 protocol](docs/META-ARCHITECTURE-SCIENTIST.md). Adaptive experiment selection and multi-agent debate are P1, not kickoff blockers.

## Optional stretch, only after P0 is stable
[Meta open-weight inference extension](docs/OPEN-WEIGHT-STRETCH.md) is **P1**: optionally compare Muse Spark Open (for example Baseten's organizer-provided model ID) with the direct Meta Model API for the Architecture Scientist. The extra backend could support provider portability and potentially the open-weight bonus, but **does not replace required P0**, guarantee awards, or justify changing the evaluator or delaying the deadline.

## Conditional Muse Code runner for the demo (Oct 26)
[Integration and go/no-go protocol](docs/MUSE-CODE-INTEGRATION.md): Muse Code is an **optional preferred developer-local coding-agent backend** for controlled booking experiments, only after the same sandbox/evaluator tests. Codex remains the existing first validation target and fallback. Neither coding tool replaces the **Meta Architecture Scientist** or independent Verify, and using Muse to *write the app* does not alone prove qualifying end-product Meta inference. See [ADR-016](docs/17-architecture-decisions.md).
