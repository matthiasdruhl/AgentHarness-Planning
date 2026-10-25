# Benchmark program — Forecode

**Status:** specifications only, no benchmark harness installed or executed. The [external benchmark strategy](PUBLIC-BENCHMARK-STRATEGY.md) defines evaluation; [booking-v1](booking-v1/README.md) is the owned product demo and controlled architecture-test fixture. No benchmark source code is checked into this planning repository.

## Evaluation hierarchy
1. Public iterative benchmark pilot: SlopCodeBench JavaScript subset, **subject to actual environment/agent compatibility**. Use upstream harness/tests unmodified; report every chosen problem and checkpoint.
2. External follow-up: SWE-Milestone selectively if its workspace and model toolchain can run safely; SWE-bench Pro V2 for independent coding-task verification, not proof of architecture foresight. SWE-CI is reference only under 10-day constraints.
3. Owned golden booking app: reproducible TypeScript/Next.js product demonstration with tightly controlled roadmap/negative/holdout requirements; not independent evidence of generalization.

## Sources of truth
- [External selection and gating](PUBLIC-BENCHMARK-STRATEGY.md)
- [External reproducibility protocol](PUBLIC-RUN-PROTOCOL.md)
- [Booking build contract](booking-v1/README.md)
- [Booking requirements](booking-v1/BASELINE-REQUIREMENTS.md)
- [Implementation modules](booking-v1/ARCHITECTURE-AND-MODULES.md)
- [Roadmap and holdout](booking-v1/FUTURE-CHANGES.md)
- [Acceptance and security](booking-v1/ACCEPTANCE-TEST-PLAN.md)
- [Arms and scoring](booking-v1/EXPERIMENT-PROTOCOL.md)
- [Codex implementation tickets](booking-v1/BUILD-TICKETS.md)
- [Manifest template](booking-v1/MANIFEST-TEMPLATE.md)

For product-wide claims defer to docs/09-evaluation-plan.md. Never compare independently published leaderboard scores to our own runs without same harness/model/task protocol.
