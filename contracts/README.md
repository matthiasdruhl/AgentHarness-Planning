# Machine-readable contract freeze v1

**Source of truth:** [versioned data contracts](../docs/03-data-contracts.md), [API contracts](../docs/04-api-contracts.md), [normative cross-record rules](../docs/CONTRACT-FREEZE-v1.md). The **structural** definition for each schema is `schemas/forecode-v1.schema.json#/$defs/<Type>`. Never change only a JSON file without updating docs and the implementation's generated Zod validators/tests.

## Validate in planning repository

```sh
cd contracts
npm install --ignore-scripts
npm test
```

This test uses JSON Schema Draft 2020-12 via AJV, checks valid and malformed structural fixtures, API registry references and illustrative cost/receipt relationships. **It is not security proof, nor a substitute for the richer semantics and ownership checks mandated by docs/CONTRACT-FREEZE-v1.md.** Do not run npm hooks or sandbox agent workloads from untrusted repositories.

An implementation app may convert the schemas to Zod or build equivalent Zod manually; a CI parity test MUST verify all valid/invalid fixtures, and semantic invariants. Status: docs/specification only; no live model, sandbox or independent grading is claimed by examples.

`examples/valid-records.json` uses deterministic **synthetic demonstration values only**—all hashes/metrics are placeholders that have the right shapes, **not** actual experiment artifacts. Never publish them as measured evidence. `examples/invalid-records.json` is a deterministic negative-fixture recipe.

## Versioning rule

Immutable literal `schemaVersion` for every top-level artifact; breaking shape/semantics requires a new `v2`, an explicit migration and forward/backward compatibility policy. Unknown top-level and nested fields rejected. API path behavior is pinned in `api-registry.json`. Model outputs never carry trusted evaluator privileges.
