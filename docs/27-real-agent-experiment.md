# 27 — Developer-local controlled agent study (P0 experimental core)

This is now a **central P0 goal**, unlike the former Verify-only optional study. However it must be disabled unless verified safe isolation exists.

Method: reviewed pinned booking fixture, hidden trusted evaluator, agent config pinned, A/B architecture branches satisfying initial spec. One roadmap change and one frozen unseen future change; held-out unavailable to architecture proposer. Run A/B with identical check set, budgets and retries. Codex sandbox has **tested microVM guest-to-host isolation**, synthetic host-secret read denial and permitted model/provider inference egress; protected **grader network off** and separate from agent. Guest sudo alone is not an isolation failure. Control tools, terminate at caps and collect versioned evidence.

Scores: actual pass/fail, regressions, iterations, tokens if measurable, time and cost incl candidate upfront refactor. Record unsuccessful/inconclusive results. If isolation unavailable, cancel live execution; report that experimental benefit was not validated. No public /api/run endpoint.

## Experiment manifests and receipts
Use [PairManifestV1](../contracts/schemas/forecode-v1.schema.json) with A/B variants, verified equal agent/evaluator/fixture/policy/budgets and explicit upfront B preparation. Run outputs use `ExperimentRunV1`, trusted `EvaluatorReceiptV1` and `VerificationV1`; `CertificateV1` links all. Meta-vs-equally-informed template effect uses a **separate** `MetaComparisonManifestV1`. All cross-record semantics in [Contract Freeze v1](CONTRACT-FREEZE-v1.md); no fake source/usage/receipt metrics.
