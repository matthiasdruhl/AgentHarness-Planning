# Forecode — Foresight + Verify | Meta Hackathon Planning

**Status:** Planning only; no application code, real benchmark evidence or working Meta integration is implied. **Window:** October 26–November 4, 2026. **Repo:** AgentHarness-Planning, with proposed separate application repository `forecode` subject to event rules and naming clearance.

**Pitch:** Build fast. Keep the code. Prove the architecture. Forecode uses developer-confirmed future requirements and Meta-generated architecture hypotheses to compare architectural changes and independently verify their implementation outcomes.

## Start here
1. [AGENTS.md](AGENTS.md) — Codex safety and implementation constraints.
2. [Execution index](docs/21-execution-index.md) — canonical source-of-truth priority.
3. [Implementation master plan](docs/IMPLEMENTATION-MASTER-PLAN.md) — M0–M10, dates, prerequisites and exit gates.
4. [Milestone directory](milestones/README.md) — detailed sub-milestones and acceptance criteria.
5. [Codex ticket queue](docs/CODEX-TICKETS.md) — 68 ready-to-assign tickets.
6. [Module/contract registry](docs/CONTRACT-REGISTRY.md) — ownership/interfaces; exact fields in [data contracts](docs/03-data-contracts.md) and [API contracts](docs/04-api-contracts.md).
7. [Benchmark protocol](docs/BENCHMARK-PROTOCOL.md) and [validation gates](docs/MILESTONE-VALIDATION.md).

## P0 proof
Create a vetted booking fixture and protected independent tests, run a safe matched A/B architecture experiment under **identical Verify**, test a frozen future feature, and report real outcomes with provenance. Meta helps interpret confirmed developer intent and propose bounded architecture/scenario hypotheses; deterministic graph scoring is labeled an estimate. Honest held-out comparisons matter more than animation and synthetic scores.

## Execution rules
Review official participant rules before implementing potentially disallowed code. Hosted app cannot execute arbitrary code or agent actions. Developer-local experiments must fail closed without provable isolated execution. Never invent results or imply every code defect is caught. November 2 is feature freeze; submit ahead of November 4 cutoff after rechecking portal details.

These documents supersede legacy Verify-only audit/replay plans. Older task files are references only; the single actionable queue is docs/CODEX-TICKETS.md.
