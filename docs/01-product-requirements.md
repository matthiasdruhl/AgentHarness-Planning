# 01 — Product requirements and acceptance

## Audience and job
Solo TypeScript/Next.js developer building with coding agents, who knows some future product features but fears rework and premature-completion claims. In one session, create an evidence-linked architecture decision and verify how it survived a future change.

## P0 user stories and acceptance
- **Intent:** enter and explicitly confirm future intent with status confirmed/tentative/rejected, priority, horizon and source. Editing/removing an intent invalidates dependent scenario analyses.
- **Proposals:** request two schema-valid alternative boundaries from Meta, including status quo. Each lists affected modules, prerequisites, hypothesis and downside; user sees model provenance.
- **Analysis:** parse actual TS imports/exports and Next.js route conventions; show graph, limitations and static blast-radius estimate; no claim that import reachability means behavior works.
- **Decision:** compute upfront and evolution estimates plus worst-case / mean scenario regret (unweighted unless defensible probabilities supplied). Report uncertainty, avoid false precision.
- **Verification:** trusted type/build, independent acceptance and relevant boundary/reachability tests; evidence-linked verdict VERIFIED/REJECTED/INSUFFICIENT_EVIDENCE with explicit scope.
- **Experiment:** frozen controlled booking feature task against baseline A and candidate B, **same Verify gates** and comparable budgets; at least one held-out future challenge. Preserve raw results and seed/config.
- **Certificate:** export reproducible JSON and human-readable summary with proposal, provenance, scenario source, static-vs-actual values, outcome, threats to validity.
- **Demo:** hosted read-only dashboard can display recorded real experiment evidence; optional live Meta reasoning if rate/credit controls are verified.

## P1 only if P0 succeeds
Candidate automatic refactor in isolated environment; additional held-out tasks; feedback iterations; uncertainty-guided experiment selection; stronger static graph. These must not jeopardize submission.

## Out of scope
Arbitrary user repository code execution on hosted service; flawless anti-stub detector; proof of functional correctness; large Monte Carlo run as fake probability; live autonomous public coding agent; enterprise auth; multi-language support; silent ingestion of chat transcripts.

## Success and failure
Success: reproducible verified A/B actual experiment and transparent tradeoff, even if B loses. Failure: only attractive visualization, fabricated savings, untested tests, or model advice reported as proof.
