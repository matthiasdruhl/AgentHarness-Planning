# 25 — Benchmark reproducibility and artifact contracts

**Planning templates only**; actual fixtures, code, results and model logs are to be created in the application repository after eligible kickoff. Existing [03 contracts](03-data-contracts.md) and [09 protocol](09-evaluation-plan.md) control actual schema and metric meaning.

## Intended app-repo layout
```text
benchmark/
  manifest.json            # pinned evaluation selection and versions
  README.md                # exact setup/commands and dataset rights
  gold/                    # independently authored annotations
  outputs/                 # sanitized results, exclude secrets/private raw traces
  reports/benchmark.md     # dated numbers + denominators + limitations
  scripts/                 # deterministic comparison/scoring implementation
fixtures/                  # immutable bundled synthetic cases
```

## Required manifest metadata (suggested fields, not a new runtime schema)
```json
{
  "manifestVersion": "benchmark-plan.v1",
  "status": "planned",
  "createdDate": "2026-10-24",
  "planningCommit": "TO_FILL",
  "appCommit": "TO_FILL",
  "datasetId": "synthetic-agentharness-v1",
  "datasetRevision": "TO_FILL",
  "items": [],
  "labelRevision": "TO_FILL",
  "variantIds": ["rules-only", "muse-only", "combined"],
  "providerModel": "TO_VERIFY_AT_RUN",
  "promptHashByVariant": {},
  "inferenceParameters": {},
  "evaluationScriptCommit": "TO_FILL",
  "licenseRecord": "synthetic-owned-or-reviewed",
  "resultsStatus": "NOT_RUN"
}
```
Treat this as a template **only**. Record canonical SHA-256 for each dataset record after implementation and pin exact fixture bytes and runtime version. External data manifests additionally require source URL, item ID, revision, license/access grant, mapping transformations and provenance.

## Gold annotation template (one item/category, not speculative scores)
```json
{
  "caseId": "F1",
  "category": "FALSE_SUCCESS",
  "isPositive": true,
  "requiredEvidenceEventIds": ["e4", "e5"],
  "forbiddenCategoryPredictions": [],
  "replayEligible": true,
  "annotationRationale": "Test exited nonzero; final claim said tests passed.",
  "annotator": "TO_FILL",
  "goldVersion": "TO_FILL"
}
```
For negatives use `isPositive:false` and empty required evidence where appropriate. Validate annotation against canonical event IDs. Do not expose gold categories to the live model.

## Output event record
Persist item ID, variant, model/adapter identifier, prompt hash, timestamp, raw predicted category/evidence IDs in **sanitized private evaluation files**, post-validation status, rules signals, DSL validity, TP/FP/FN contributions, latency, tokens, retries, and cost provenance. Separate `LIVE`, `MOCK` and `RECORDED` explicitly; a fake mocked API must never appear as LIVE outside test context.

## Reproduction protocol
1. Freeze manifest and gold prior to inference; commit and tag exact fixture commit.
2. Run no-credit lint/types/unit/integration/fixture hashing.
3. Execute **rules-only** on the evaluation list. Record complete commands and exit statuses.
4. Perform **Muse-only** and **combined** on exactly the same permitted traces, controlled prompt/model parameters and deliberate paid-call budget. Record every attempted call, including errors/invalid output.
5. Score model outputs *before filtering* and *after validation* separately. Record abstentions, invalid evidence and missing classifications.
6. Re-run three selected traces if credits permit to quantify stability; five scripted replay repetitions per supported fixture/policy pair.
7. Generate report directly from frozen output rows; include confusion counts, N, caveats and app/manifest/prompt revisions.
8. Spot-check report against raw sanitized rows and publish only distributable artifacts and aggregated values.
9. Reproduce cleanly from pinned commit; never rewrite labels to improve scores without versioning/re-evaluation.

## Integrity, security and release
- Do not make model costs part of default CI.
- Never commit API keys, private/gated raw datasets, credentials, unrestricted user traces or identifying organizer correspondence.
- Preexisting published leaderboard numbers are background citations, **not AgentHarness results**.
- For a failed benchmark run, retain the error as counted result; never silently drop.
- If model pricing uncertain, report tokens and `cost unknown`.
- For all claims, record if they are *observed fixture outcomes*, *model hypotheses*, or *deterministic guard simulation*.

## Done threshold
A third party should be able to reconstruct the exact selected cases and deterministic scores from the submitted app repo without access to secrets. Paid model results are reproducible in protocol, but not guaranteed bit-identical due to provider nondeterminism; retain sanitized inputs/outputs and settings sufficient for audit.
