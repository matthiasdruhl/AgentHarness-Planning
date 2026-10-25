# Forecode canonical implementation clarifications

These are **implementation requirements**, not a replacement for authoritative [data schemas](03-data-contracts.md) and [API routes](04-api-contracts.md). Update those documents, Zod validators, tests and migration record together when contracts change.

## Canonical names

- Controlled target: **fixtures/booking-v1/**, not fixtures/booking/.
- Pure certificate module: **src/lib/report/**, not src/server/report(s).
- Server-only trusted sanitized artifact loader: **src/server/artifacts/**.
- Protected evaluator: **scripts/evaluator/** outside agent writable tree.
- Developer-local agent/sandbox runner: **scripts/experiments/**, never public API.
- Graph parser may be scoped to actual TS/JS fixture; Next static imports/routes imply no behavioral proof.

## Normative schema and cost rules

All schema objects: literal schemaVersion, stable IDs, strict extra-key rejection, explicit required/optional fields, ISO-UTC timestamps, bounded strings/arrays, valid graph references, normalized paths and source consent; default JSON cap 64 KiB. No unknown executable proposal operations. Only user confirmation promotes an intent; editing/rejecting it invalidates dependent analysis.

**Ordinal ranks must not be subtracted.** Rename prior estimatedCostUnit=ordinal_points to **modeled_effort_points_v1**, with documented *additive* same-rubric cost components for upfront architecture work and each future scenario. These are transparent heuristic units, **not hours, dollars or tokens**. Default selection is minimax regret over comparable costs; show all modeled totals and sensitivity. If units/data aren't comparable, abstain with recommendationId=null. No fabricated future scenario probabilities. Always allow credible status quo.

**Verification:** VERIFIED iff all *required, scoped, fresh, trusted* independent checks pass; REJECTED when a trusted required check fails; INSUFFICIENT_EVIDENCE for missing, invalid, forged, stale or unverifiable results. This is limited evidence, never universal correctness.

## Trusted evaluator receipt v1 proposal

Fields: schemaVersion=evaluator-receipt.v1, runId, evaluatedTreeSha256, evaluatorSha256, testSuiteSha256, requiredPolicySha256, requiredCheckIds, checkArtifactSha256, startedAt/finishedAt (ISO UTC), issuer and integrity (kind, manifestSha256). SHA-256 digests must be 64 lowercase hex chars. Canonicalize the receipt **excluding its own integrity.manifestSha256** before calculating integrity digest to avoid self-referential hashing.

**Hashes are not authentication by themselves.** Only an evaluator-controlled process writes to a protected allowlisted artifact root (or signs results with separately trusted verification keys across an untrusted boundary). Client-submitted checks/receipts are *untrusted previews*, never capable of minting a trusted VERIFIED verdict.

**Freshness:** trusted outcome binds exact *post-agent* evaluated tree, fixture/test suite, evaluator/config and required check policy. Any relevant mutation invalidates earlier passes. Check results must not be detached from their evaluated source, suite and policy. Public report contains sanitized check IDs/statuses, not hidden test code or secrets. Unknown usage is null, never zero. Recorded playback cannot be labeled live.

## Implementation tests required

Duplicate/missing IDs; invalid enum/path; deleted intent; malformed Meta output; invented commands; stale pass after code edit; changed required policy or test suite; fake check JSON; tampered receipt or digest; mixed-run check IDs; trusted failed requirement; negative/no-benefit architecture case; missing usage; static import without exercised route.

See [demo acceptance](DEMO-ACCEPTANCE.md) and [evaluation](09-evaluation-plan.md).
