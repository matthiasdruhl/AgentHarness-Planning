# Machine-readable contract freeze v1

**Source of truth:** [versioned data contracts](../docs/03-data-contracts.md), [API contracts](../docs/04-api-contracts.md), [normative cross-record rules](../docs/CONTRACT-FREEZE-v1.md). The **structural** definition for each schema is `schemas/forecode-v1.schema.json#/$defs/<Type>`. Never change only a JSON file without updating docs and the implementation's generated Zod validators/tests.

## Validate in planning repository

```sh
cd contracts
npm install --ignore-scripts
npm test
```

This test uses JSON Schema Draft 2020-12 via AJV, checks valid and malformed structural fixtures, API references, 17+ semantic tampering/integrity cases, SHA-256 known vectors and RFC 8785 canonical self-hash behavior. **It is not security proof, nor a substitute for the richer semantics and ownership checks mandated by docs/CONTRACT-FREEZE-v1.md.** Do not run npm hooks or sandbox agent workloads from untrusted repositories.

An implementation app may convert the schemas to Zod or build equivalent Zod manually; a CI parity test MUST verify all valid/invalid fixtures, and semantic invariants. Status: docs/specification only; no live model, sandbox or independent grading is claimed by examples.

`examples/valid-records.json` uses deterministic **synthetic demonstration values only**—all hashes/metrics are placeholders that have the right shapes, **not** actual experiment artifacts. Never publish them as measured evidence. `examples/invalid-records.json` is a deterministic negative-fixture recipe.

## Versioning rule

Immutable literal `schemaVersion` for every top-level artifact; breaking shape/semantics requires a new `v2`, an explicit migration and forward/backward compatibility policy. Unknown top-level and nested fields rejected. API path behavior is pinned in `api-registry.json`. Model outputs never carry trusted evaluator privileges.

## Hashing implementation reference

`hash.mjs` documents canonical JSON + SHA-256 normalization, check artifact digest, receipt manifest digest and certificate self-digest. The test fills **temporary in-memory** synthetic fixture digests before checking; placeholder hashes in tracked valid examples are **never authenticated evidence**. Actual trusted loader must also enforce protected evaluator custody, final-tree freshness, pinned suite/policy and immutable artifact bytes. `npm test` alone cannot prove any host-side evaluator trust boundary.

## API conformance fixtures

`examples/api-valid.json` contains exact valid **synthetic** request/response bodies for all published routes, including optional untrusted Verify preview and the shared error envelope. `examples/api-invalid.json` asserts strict rejection of missing consent, unknown commands, invalid enum values, wrong cost units, mislabeled recorded data, and forged authoritative preview. The validator checks every route in `api-registry.json` has a corresponding sample. These are shape tests, **not** proof that any real provider returned a response or that a hosted endpoint is deployed.
