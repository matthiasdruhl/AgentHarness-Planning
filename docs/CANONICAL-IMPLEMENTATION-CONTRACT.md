# Canonical implementation contract — Forecode v1

**Frozen authoritative sources (Oct 25, 2026):**
- [Machine-readable schema catalog](../contracts/schemas/forecode-v1.schema.json) defines all exact structural fields and enums, not these prose summaries.
- [Contract Freeze v1](CONTRACT-FREEZE-v1.md) defines mandatory cross-record semantics: consent, revisions, graph references, deterministic scoring formula, protected receipt hash algorithm, check verdict state machine, provenance, experiment equality, and HTTP authority.
- [Versioned data contracts](03-data-contracts.md) own descriptions; [HTTP/API contracts](04-api-contracts.md) and [endpoint registry](../contracts/api-registry.json) own API paths.
- [Conformance fixtures](../contracts/README.md) supply testable positive, negative and semantic cases.

**Do not implement this document's superseded pre-freeze shorthand as another schema.** After kickoff any incompatible change is versioned/migrated, validated, and reviewed across all consumers.

## Stable file ownership

`fixtures/booking-v1/`: controlled booking app; `src/lib/report/`: pure certificates; `src/server/artifacts/`: protected server-only read-only artifact loader; `scripts/evaluator/`: independent protected hidden grader; `scripts/experiments/`: **developer-local** controlled runner; `src/server/meta/`: server-only model adapter. Public app cannot execute code/agents.

## Minimum blocking tests

- All JSON Schema + semantic positive/negative fixtures and app Zod parity.
- Rejected intent/invalid revision; baseline, path and graph mismatch; model executable commands/unknown enums.
- Complete scoring matrix and **fixed additive** point formula, minimax regret tie/abstain; no ordinal arithmetic.
- Forged or stale check/receipt; changed tree/suite/required policy; cross-run mismatch; trusted failure vs missing; JCS self-hash and protected custody.
- Recorded vs live source; separate measured evidence provenance; fake credentials; sandbox no-host-access; no public agent execution.
- A/B paired budgets, oracle, agent config, upfront cost; strong equally informed control required for Meta performance claims.

This planning repo supplies specifications and executable contract-fixture checks, not attested runtime/security evidence.
