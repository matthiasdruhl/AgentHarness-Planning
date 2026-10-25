# 03 — Forecode versioned data contracts (authoritative)

**Frozen shape catalog:** [contracts/schemas/forecode-v1.schema.json](../contracts/schemas/forecode-v1.schema.json). **Semantic reference:** [CONTRACT-FREEZE-v1.md](CONTRACT-FREEZE-v1.md). **Valid/invalid examples:** [contracts](../contracts/README.md). This file documents artifact meanings; do not implement historical abbreviated object sketches.

## Required record catalog

| Name | JSON Schema definition | Identity, purpose and authority |
|---|---|---|
| `intent.v1` | `IntentV1` | User-affirmed future feature with status, revision, priority, source, dependencies and updatedAt. Only confirmed user action enables a recommendation. |
| Draft | `IntentDraftV1` | Model-suggested tentative content with explicit uncertainty; never autonomously confirmed. |
| `scenario.v1` | `ScenarioV1` | Future task, source, intent references, assumptions, frozen baseline and acceptance references. Heldout stays outside planner/agent. |
| `architecture-candidate.v1` | `ArchitectureCandidateV1` | Baseline SHA, structured allowlisted change plan, guard constraints, explicitly modeled upfront cost, provenance and limitations. Not executable instructions. |
| `graph.v1` | `GraphV1` | Explicit id and baseline, bounded path-normalized modules/edges/unknowns; cycles permitted, unknown runtime behavior remains unknown. |
| `decision.v1` | `DecisionV1` + `Score` + `ScoreBasis` | Complete scenario×candidate matrix when comparable, or **empty** perScenario with null recommendation and explicit limitations when abstaining; documented additive point costs and minimax regret. |
| `check-result.v1` | `CheckResultV1` | Run-bound check kind/status/exit code/evidence digest, *not* evidence authority on its own. |
| `evaluator-receipt.v1` | `EvaluatorReceiptV1` | Trusted-store-validated final source/fixture/suite/evaluator/policy/check digest identity. |
| `verification.v1` | `VerificationV1` | Evidence origin, receipt linkage, named scope, required checks and scoped verdict. Preview never authoritative. |
| `experiment-run.v1` | `ExperimentRunV1` + `Metrics` | Run state, variant, identity hashes, isolation, wall-clock time and measured usage; presentation and evidence origin distinct. |
| `pair-manifest.v1` | `PairManifestV1` | A/B frozen initial trees, budgets, common agent/config/fixture/oracle and upfront cost. |
| `meta-comparison-manifest.v1` | `MetaComparisonManifestV1` | Separate equally informed Meta-vs-template experimental attribution. |
| `certificate.v1` | `CertificateV1` | Report with explicit intent revisions, experiment, verified receipts, decision and self-digest. |
| API helpers | `ProviderInfo`, `ApiError`, `DemoResponse`, request/response definitions | Stable web protocol without mutable evaluator authority. |

**Parsing requirements:** JSON Schema Draft 2020-12, strict nested objects, bounded strings/arrays, 64 KiB request max, no arbitrary model commands or path escapes. The app must implement equivalent strict Zod schemas and *semantic cross-record checks*; JSON Schema alone cannot guarantee trust, validity of references, arithmetic or provenance.

## Critical invariants

- Only a human-confirmed intent with tracked revision may affect scenario analysis. Revocation/edits invalidate derived decisions, not immutable historical run evidence.
- `candidate.baselineCommit = graph.repoCommit = scenario.baselineCommit`; all scenario, module, receipt and check references resolve to the same pinned context.
- `Score.basis` defines reviewed projected module/routes/unknowns. `upfrontCost` is computed from allowlisted action weights; downstream and regret follow exact versioned formulas in [freeze](CONTRACT-FREEZE-v1.md). Units are `modeled_effort_points_v1`, never ordinal subtraction, measured development time or probability.
- Check verdicts originate from a protected evaluator and fresh receipt, not client check JSON or Meta opinion. A partial stale pass cannot become VERIFIED. Receipt JCS hash and certificate self-hash exclude their own digest leaf as specified.
- Separate model source `live|recorded|template`, measured origin `measured|none`, and presentation mode `live|recorded`. Synthetic examples are *not* actual measured artifacts.
- All relevant fields and primitive constraints, defaults/absence/null behavior, status enums and ID patterns are in the schema; **no second inconsistent versions** of these fields should be written in individual milestone documentation.

Contract edits must modify schema, this document, [API contracts](04-api-contracts.md) if needed, positive/negative fixtures, validation script, Zod and integration tests, ticket acceptance and ADR in one review.
