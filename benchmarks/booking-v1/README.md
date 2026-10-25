# Booking v1 — controlled demo and architecture evolution fixture

**Purpose:** tiny realistic TS/Next.js booking SaaS to demonstrate the Forecode product flow and test structural claims under a protected evaluator. **Not** external generalization evidence. **State:** only planning, no implementation created before organizer approval.

Canonical docs:
- [Current requirements](BASELINE-REQUIREMENTS.md)
- [Module blueprint and state transitions](ARCHITECTURE-AND-MODULES.md)
- [Progressive requirements and held-out plan](FUTURE-CHANGES.md)
- [Acceptance tests, fixtures and safety](ACCEPTANCE-TEST-PLAN.md)
- [Fair comparison arms, measurement](EXPERIMENT-PROTOCOL.md)
- [Granular build tickets](BUILD-TICKETS.md)
- [Hashable manifest skeleton](MANIFEST-TEMPLATE.md)

## V1 scope boundaries
Deterministic domain functions and minimal API/web UI; no real payment integration, external email, timezone booking provider, live OAuth, production user data, mutable database/complex ORM. Use in-memory repository or local SQLite if environment supports and both arms are identical. Auth is a trusted synthetic viewer identity passed by safe test harness; do **not** suggest production-level authentication.

**Central challenge:** permission checks are sufficiently realistic to expose whether a tiny authorization boundary helps future organization or delegation changes while current single-user behavior stays unchanged. Status quo must be reasonable, not sabotaged.

## Completion
Initial test oracle passes on baseline and any architecture variant before future tasks. Non-visible hidden acceptance oracle and public sanity tests are versioned and immutable from agent perspective. A/B trials under identical Verify measure more than code size; upfront B refactor cost included. Demo never suggests one synthetic app establishes universally improved architecture.
