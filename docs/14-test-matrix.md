# 14 — Test matrix

| Area | Positive | Negative/failure | Authority |
|---|---|---|---|
| Intent registry | confirmed roadmaps retained | rejected/deleted intent no longer influences decision | schema + UI |
| Meta adapter | typed valid candidates | injected tool commands, bad refs, unsupported actions | validator |
| Graph | TS alias/import/Next route extraction | dynamic import/unknown route marked unknown | static analyzer |
| Decision | repeatable same-input regret | units mismatch, missing scenario, false precision | pure unit tests |
| Verify | pass required controlled tests | fail/not-run/invalid stays rejected or insufficient | trusted evaluator |
| Stub scanner | meaningful missing implementation flagged | mock in test not always failed | heuristic |
| Reachability | actual route integration tests | import-only false confidence avoided | runtime+static |
| Isolation | vetted fixture runs with cap | host secrets/network/path escape blocked; no sandbox fails closed | local integration |
| Holdout | held-out tests loaded only by evaluator | planner never sees hidden requirement | manifest check |
| Benchmark | comparable A/B checks and budgets | one variant cheated, unequal budget reported | evaluation protocol |
| Certificate | hashes/traces match results | spoofed check/client score rejected | provenance tests |
| Demo | recorded label and offline fallback | no fabricated simulated savings shown as measured | E2E review |

CI must not run expensive paid inference or unsafe agent sessions by default. Exact results are only recorded after implementation.

## Frozen contract conformance gate
Run [schema/semantic contract fixtures](../contracts/README.md) first and require app Zod/API parity. Explicitly include cost formula, complete candidate × scenario matrix, minimax tie/abstain, consent true, revision updates, receipt/certificate JCS digests, exact run/fixture/suite/policy hash links, trusted failure precedence, and untrusted preview insufficiency. A passing JSON Schema example with synthetic SHA placeholders does **not** demonstrate a trusted real evaluator run.

## Meta Scientist additional conformance cases
[Machine examples and test suite](../contracts/README.md) must reject unknown candidate, baseline/intent mismatch, unconfirmed source, hypothetical hidden holdout, model-generated scenario pre-approval, challenge for wrong candidate, spoofed provider, missing consent, evidence summary for another hypothesis, spoofed receipt source and interpretation falsely asserting trusted evaluator authority. **Runtime integration**, not structural JSON, must also prove allowlisted summary loading, protection against user-submitted evidence IDs/paths, no raw hidden test disclosure, no agent commands from public API, and actual eligible live Meta provenance. Test negative and neutral Meta outcomes against equally informed strong non-Meta control before claiming value. [Protocol](META-ARCHITECTURE-SCIENTIST.md).
