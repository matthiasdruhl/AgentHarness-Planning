# Audit remediation tracker — October 25, 2026

Changing Markdown is **not** proof of runnable software. Keep proposed repairs separate from future implementation/benchmark verification.

| Identified deficiency | Documentation action | Remaining real-world gate |
|---|---|---|
| 103 broken milestone links | Fix four relative target patterns across 12 files; recheck links on GitHub | Confirm final tree refs |
| 68 tickets over-scoped for 10 days | [Critical path](HACKATHON-CRITICAL-PATH.md) ranks essential/optional/post-event | Execute P0 |
| Cross-repo Codex assumptions | [Handoff](IMPLEMENTATION-HANDOFF.md) pins exact planning SHA in app SPEC-LOCK | App repo not assumed |
| Ordinal arithmetic used for regret | [Contracts](CANONICAL-IMPLEMENTATION-CONTRACT.md) define additive modeled effort or abstention | Implement rubric and tests |
| Trusted result provenance/staleness underspecified | Bind evaluated tree, test, evaluator and policy; independent artifact authority | Actual secured grader |
| Meta value not isolated | [Evaluation](09-evaluation-plan.md) and booking protocol add strong roadmap-aware comparator | Measured matched trials |
| Report/fixture naming inconsistency | Choose src/lib/report/, src/server/artifacts/, fixtures/booking-v1/ | Implement same paths |
| Official rules, model access unresolved | Verify [Meta page](https://dev.meta.ai/events/global-hackathon) and participant portal at kickoff | Final rule and model access |
| Demo vague | [Falsifiable demo acceptance](DEMO-ACCEPTANCE.md) | Real judge E2E + video |
| External SCBench unsafe/untested | Retain safe sandbox feasibility gate with Oct 30 stop | Do not claim pilot result |

Review completed branch content, link integrity, and exact commit before merge. No code, Meta calls, sandbox attestation, application tests or benchmark results have been produced by a documentation commit.

## New operator input (Oct 25)
Docker Sandboxes is reportedly installed and a Codex sandbox initialized. Decision is now **existing-sandbox, booking-first** rather than installing a runner or adapting SCBench before testing the product. [Runbook](DOCKER-SANDBOX-BOOKING-FIRST.md) tracks actual security/evidence gates, all **NOT_RUN** as of this planning update. The original sandbox remains untouched; its mode, patched version/image and host integrations must be inspected by the operator before untrusted execution.
