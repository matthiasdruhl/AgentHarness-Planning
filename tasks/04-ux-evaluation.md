# UX and evaluation — T10 to T11

## T10 Hero workflow UX (after T04, T06, T08–T09; Days 5–6)
**Read:** [08 design](../docs/08-ux-and-demo-workflow.md), [15 demo](../docs/15-demo-and-submission.md), [DEMO_SCENARIO](../docs/DEMO_SCENARIO.md).
**Goal:** fixture load/import, trace inspector, Muse diagnosis, validated assertion, supported replay, policy before/after and JSON export.
**Acceptance:** browser automation walks hero journey with mocked Muse; evidence links resolve, observed/hypothesis/verified and LIVE/RECORDED modes distinct; keyboard/errors checked.
**Forbidden:** replay arbitrary uploads, bury critical caveats.

## T11 Labeled evaluation (after T05–T10; Day 7)
**Read:** [09 evaluation](../docs/09-evaluation-plan.md), [07 fixtures](../docs/07-scenarios-and-fixtures.md), [RESOURCE_BUDGET](../docs/RESOURCE_BUDGET.md).
**Goal:** rule-only and Muse comparisons across planned labeled positives and negative controls, saving sanitized results.
**Acceptance:** report sample N, denominator, prompt/model version, evidence-valid rate, failure examples and actual spend/usage or unknown. Do not claim measured precision/recall before running labeled experiments.

**P1 boundary:** The real-agent T15 runner is not browser-executable. If optional paired results exist, the UI may display sanitized read-only benchmark artifacts only; do not introduce a runner button or execution route. See [task 06](06-real-agent-experiment.md).

## Verify-first T10/T11 acceptance
The first rendered view must present scoped completion verdict and source event links before Meta is invoked: F1 UNVERIFIED; N1 VERIFIED for supporting completion evidence; N2/no claim and unknown exit status INSUFFICIENT_EVIDENCE. In T10, make detailed trace optional after verdict, with Muse explanation and scripted guard comparison separate. T11 reports status confusion and evidence quality, with R/M/C diagnostic metrics secondary. Never claim scripted guard PASS establishes actual-agent success improvement. See [28](../docs/28-verify-product-north-star.md).
