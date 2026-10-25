# Forecode — implementation module and interface registry

This maps **owners and dependencies**, not a competing schema definition. [machine-readable contracts](../contracts/schemas/forecode-v1.schema.json) are authoritative for exact field shapes, [CONTRACT-FREEZE-v1](CONTRACT-FREEZE-v1.md) for semantic constraints, [docs/03](03-data-contracts.md) for artifact meaning, and [docs/04](04-api-contracts.md) plus [API registry](../contracts/api-registry.json) for routes. Never revise schemas here alone.

| Module | Expected location in app repo | Owned capability | Depends on | Must not do |
|---|---|---|---|---|
| Contracts | `src/lib/contracts/` | Strict Zod validation, versioned types | docs/03 | interpret model as truth |
| Intent | `src/lib/intents/` | confirmed/tentative/rejected provenance | Contracts | silently ingest chat |
| Meta | `src/server/meta/` | structured Muse proposals, mock adapter | Contracts, Intents | expose key / execute proposals |
| TS graph | `src/lib/graph/` | imports, exports, route metadata, unknowns | Contracts, ts-morph | claim runtime proof from imports |
| Decision | `src/lib/decision/` | deterministic impact and regret estimates | Graph, scenarios | claim predictions are measured |
| Foresight | `src/lib/foresight/` | candidate/scenario orchestration | Meta, Decision | inspect held-out evaluator |
| Verify | `src/lib/verify/` | typed check verdict and boundary findings | Contracts | trust agent-written success |
| Experiment runner | `scripts/experiments/` | reviewed task execution with isolation | Fixture, Eval oracle | execute from hosted API |
| Trusted evaluator | `scripts/evaluator/` | protected independent oracle, checks | Pinned fixtures | share hidden tests with agent |
| Evaluation/report | `src/lib/evaluation/`, `src/lib/report/` | measured paired metrics, certificate | Experiment, Verify | fabricate token counts |
| Public UI | `src/app/` | intent, decision, evidence and export | Sanitized API/recordings | spawn shell or run uploads |
| Fixtures | `fixtures/booking-v1/` | minimal legal reproducible target | Benchmark protocol | contain user private data |

## Canonical artifact dependency flow
`intent.v1 → scenario.v1 + architecture-candidate.v1 → graph.v1 → decision.v1 → experiment-run.v1 → verification.v1 → certificate.v1`. Graph may be derived before intent; named flow denotes provenance relationships, not a mandatory call sequence.

## Contract updates
Modify the machine-readable schema, endpoint registry, contract freeze (when affected), docs/03/04, Zod implementation, fixtures/tests, milestone, and ADR together. Preserve strict untrusted-model parsing. Server-controlled run attestations are necessary: the client may render a verdict request but may **not** mint trusted measured results.

## Known alignment limits
The schema catalog now defines required/optional fields, strict nested object shapes, null handling, enums and bounds. M1.3 must implement schema-equivalent Zod **plus** cross-record semantic validation using contract fixtures. This is a specification, not a production integration.

## Canonical clarification
**src/lib/report/** owns pure certificate validation; **src/server/artifacts/** owns trusted server-only artifact lookup. **fixtures/booking-v1/** is the controlled target. A client check record cannot mint trusted VERIFIED; require evaluator receipt tied to final tree, check policy, test suite and evaluator. See [implementation contract](CANONICAL-IMPLEMENTATION-CONTRACT.md).

## Artifact relationships (frozen)
`intent.v1` → confirmed `scenario.v1` → `architecture-candidate.v1` + `graph.v1` → `decision.v1` → `pair-manifest.v1` → `experiment-run.v1` → protected `evaluator-receipt.v1` + `verification.v1` → `certificate.v1`. `meta-comparison-manifest.v1` describes the **separate** Meta-vs-template question. Relationships are versioned IDs and checked hashes, not schema nesting alone.

## Meta Scientist ownership (additive)
- `src/server/meta/hypotheses.ts` → `MetaHypothesisV1`, directional prediction plus falsification criteria, **no execution**.
- `src/server/meta/challenger.ts` → `MetaChallengeV1` from confirmed visible context, always proposed and not heldout.
- `src/server/artifacts/scientist-summary.ts` → protected, sanitized `ScientistEvidenceSummaryV1` derived from verified allowlisted local records; no client-supplied path as authority.
- `src/server/meta/interpret.ts` → `MetaEvidenceInterpretationV1` advisory interpretation, not evaluator verdict.
- `src/app/api/foresight/{hypothesize,challenge,interpret-evidence}` → strict consented, bounded model API only; NEVER hosted agent/CLI execution.
- Existing `src/lib/decision/` pure regret calculator and `scripts/evaluator/` trusted independent grader **do not change owners or accept Meta override**.

See [Meta Scientist protocol](META-ARCHITECTURE-SCIENTIST.md) and [all exact v1 field schemas](../contracts/schemas/forecode-v1.schema.json).
