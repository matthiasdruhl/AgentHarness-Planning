# Forecode — Foresight + Verify | Meta Hackathon Planning

**Status:** Planning-only; no working implementation or benchmark measurements claimed. **Event:** October 26–November 4, 2026.

**Pitch:** Build fast. Keep the code. Prove the architecture.

## Main entry points
- [AGENTS.md](AGENTS.md), [execution index](docs/21-execution-index.md).
- [Master implementation plan](docs/IMPLEMENTATION-MASTER-PLAN.md), [milestone specs](milestones/README.md), [68 Codex tickets](docs/CODEX-TICKETS.md), [contracts](docs/CONTRACT-REGISTRY.md).
- [Benchmark index](benchmarks/README.md), [booking-v1 spec](benchmarks/booking-v1/README.md), [evaluation rules](docs/09-evaluation-plan.md).
- **[Local M4 Pro sandbox setup](docs/LOCAL-MAC-SANDBOX.md)** — 48 GB RAM, ~294 GB free; recommended Docker sizing and isolation verification.
- **[SCBench Apple Silicon compatibility review](benchmarks/SCBENCH-MAC-COMPATIBILITY.md)** — Python 3.12+, Docker network differences, uncertain ARM64 images, **upstream Codex sandbox bypass and authentication mount risk**.

## Hard safety and evaluation contract
Hosted UI never executes arbitrary code. Developer-local vetted coding-agent runs require demonstrated isolation and protected evaluator. Stock SCBench Codex adapter needs credential and sandbox safety review before any untrusted benchmark runs. Architecture A/B compares under identical Verify; measured, recorded and estimated evidence never conflated. Public benchmark pilot is conditional; benchmark compatibility is not assumed.

Official rules and API credits must be verified at kickoff. Feature freeze Nov 2. Don't add major features instead of finishing one reproducible experiment.
