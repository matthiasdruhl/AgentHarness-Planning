# Forecode — Foresight + Verify | Meta Hackathon Planning

**Status:** Planning-only documentation, no tested app or completed benchmarks. **Hackathon:** October 26–November 4, 2026. **Repo:** AgentHarness-Planning; separate implementation `forecode` repo provisional pending organizer terms.

**Pitch:** Build fast. Keep the code. Prove the architecture. Forecode accepts developer-confirmed future intentions, uses Meta for bounded architecture hypotheses, measures architecture evolution in isolated experiments, and independently checks results.

## Where to start
- [AGENTS.md](AGENTS.md) safety and Codex rules; [canonical execution index](docs/21-execution-index.md).
- [Implementation master plan](docs/IMPLEMENTATION-MASTER-PLAN.md) M0–M10 and [68 Codex tickets](docs/CODEX-TICKETS.md).
- [Milestone specs](milestones/README.md) and [contract ownership](docs/CONTRACT-REGISTRY.md).
- **[Benchmark plan](benchmarks/README.md)** — public SlopCodeBench JS feasibility pilot; optional SWE-Milestone and SWE-bench Pro V2; SWE-CI deferred due to resource costs.
- **[Custom booking-v1 benchmark/demo spec](benchmarks/booking-v1/README.md)** — detailed domain behavior, architecture A/B, test oracle, progressive requirements, control experiment and Codex build tickets.
- [Evaluation authority](docs/09-evaluation-plan.md), [security](docs/10-security-and-privacy.md), [fallback and validation](docs/MILESTONE-VALIDATION.md).

## Key distinctions
Public benchmarks provide a better independent evidence source, conditional on safe runtime integration. The custom booking app provides coherent product demonstration and a controlled but non-independent comparison. All proposed 'held-out' requirements must be stored privately and frozen before optimization; mentioning detailed requirements in public planning **does not make them hidden**.

No improvement, correctness or generalization claim without actual matched independent test outcomes. The web app never executes arbitrary code; local vetted experiments require verified isolation. Rule eligibility and Meta credentials must be checked at kickoff. Feature freeze Nov 2.
