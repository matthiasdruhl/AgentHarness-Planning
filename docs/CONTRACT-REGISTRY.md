# Forecode — implementation module and interface registry

This maps **owners and dependencies**, not a competing schema definition. [docs/03](03-data-contracts.md) is authoritative for exact data fields; [docs/04](04-api-contracts.md) for actual web routes. Never revise schemas here alone.

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
| Fixtures | `fixtures/booking/` | minimal legal reproducible target | Benchmark protocol | contain user private data |

## Canonical artifact dependency flow
`intent.v1 → scenario.v1 + architecture-candidate.v1 → graph.v1 → decision.v1 → experiment-run.v1 → verification.v1 → certificate.v1`. Graph may be derived before intent; named flow denotes provenance relationships, not a mandatory call sequence.

## Contract updates
Modify docs/03 or 04, Zod implementation, fixtures, tests, relevant milestone, and ADR together. Preserve strict untrusted-model parsing. Server-controlled run attestations are necessary: the client may render a verdict request but may **not** mint trusted measured results.

## Known alignment limits
Existing docs/03 expresses several record types as compact object examples rather than full normative field-level JSON schema. M1.3 must pin required/optional fields and unknown-key policy in Zod/tests. Do not infer a production integration from this planning document.
