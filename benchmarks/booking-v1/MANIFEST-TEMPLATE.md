# Booking experiment manifest — Contract Freeze v1

**Source of truth:** [PairManifestV1](../../contracts/schemas/forecode-v1.schema.json) and [semantic rules](../../docs/CONTRACT-FREEZE-v1.md). The older `booking-experiment-manifest.v1` YAML sketch is **superseded**; do not implement it as a competing live contract.

Use the valid structural [PairManifestV1 synthetic example](../../contracts/examples/valid-records.json) to understand required typed fields. For an actual experiment, the developer-local controller must create a **real** `pair-manifest.v1` record with:

- Exactly A and B arm, two valid initial commits/trees, fixed identical underlying fixture and source baseline, same future task/known roadmap, pinned agent model/config/allowed tools, evaluator, policy and budget.
- Protected tests and (if legitimately frozen) holdout commitment kept outside any model or agent context.
- Independent evaluator receipts and measured `ExperimentRunV1` run records, separate B upfront cost, time/iterations/tokens only when measured, and failure/timeout/cancelled output preserved.
- Actual versioned receipt and certificate cross-links with canonical hashes, sanitized outputs and meaningful limitations.

**Example SHAs, clock values and usage in the contracts fixture are invented shape placeholders, not experimental evidence.** Do not publish them as a successful booking run. Do not expose private oracle source or credential material.

For Meta vs strong roadmap/template controls, emit **separate** `MetaComparisonManifestV1` records; no A/B-only causal claim may be repurposed as measured Meta advantage.

See [booking experiment protocol](EXPERIMENT-PROTOCOL.md) and [contract checks](../../contracts/README.md).
