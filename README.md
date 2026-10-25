# Forecode — Foresight + Verify | Meta Hackathon Planning

**Status:** Planning only; no application or benchmark execution has been completed. **Window:** October 26–November 4, 2026. **Repository:** AgentHarness-Planning remains the source of planning truth; proposed implementation repo name `forecode` is provisional pending name clearance and organizer rules.

**Pitch:** Build fast. Keep the code. Prove the architecture. Forecode helps coding agents choose software boundaries informed by confirmed future product intentions, probes those choices against counterfactual requirement changes, and independently checks implementation evidence.

## Product contract
- **Foresight:** ingest explicit developer intents; propose 2 bounded architecture candidates using Meta Muse; estimate deterministic dependency impact and scenario regret with transparent assumptions.
- **Experiment:** run matched, vetted TypeScript/Next.js feature-change tasks on isolated baseline and candidate repositories; collect independently checked outcomes. No claim of better maintainability without held-out evidence.
- **Verify:** trusted tests and type/build/boundary checks yield scoped VERIFIED, REJECTED, or INSUFFICIENT_EVIDENCE with evidence paths. No guarantee of full correctness, no '100% implemented' promise.
- **Certificate:** export decision alternatives, intent provenance, assumptions, static estimates, agent-run evidence, costs, caveats and held-out outcome.

## Build sequence
1. Review official rules and credits; do not presume prebuilt implementation eligibility.
2. Prepare a small vetted booking-app experiment and protected acceptance oracle **first**.
3. Build trusted verifier and controlled experiment runner.
4. Add intent registry, Meta structured proposals, static graph/regret scorer.
5. Wire one end-to-end counterfactual comparison, evidence ledger and demo.

## P0 definition of done
Two comparable architectures satisfy initial acceptance tests; one frozen future-change task is run against both under equal agent/Verify conditions; results include tests, time, tokens/cost where available, and evidence artifacts. Meta is called live for structured intent/scenario or architectural hypothesis with validation and clear provenance. A simple web UI walks through the decision and result; hosted app never executes arbitrary uploaded code. If real experiments cannot run safely, publish a **recorded, labeled case study** without improvement claims.

## Read order
[AGENTS.md](AGENTS.md) → [execution index](docs/21-execution-index.md) → [requirements](docs/01-product-requirements.md) → [architecture](docs/02-system-architecture.md) → [contracts](docs/03-data-contracts.md) → [API](docs/04-api-contracts.md) → [security](docs/10-security-and-privacy.md) → [evaluation](docs/09-evaluation-plan.md) → [tasks](docs/13-codex-task-board.md).

**Document rule:** these Forecode documents supersede the earlier Verify-only planning. The earlier open PR #1 is **not** the active product specification. All metrics and demos are targets until a run produces evidence.
