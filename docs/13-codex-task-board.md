# 13 — Canonical Codex workstreams (parent IDs)

Detailed executable tickets remain at [CODEX-TICKETS.md](CODEX-TICKETS.md); 68 milestone ticket IDs remain unchanged. Use [milestone specs](../milestones/README.md) as their acceptance authority.

| Parent | Work | Benchmark-specific expansion |
|---|---|---|
| F01 | M0–M1 rules, setup, contracts | Freeze SCBench selection rubric and booking oracle plan |
| F02–F03 | M2 fixture, evaluator, isolation | Booking build packages BK01–BK09; optional SCBench test-loader smoke after isolation |
| F04 | M3 Verify | Same independent oracle for every trial |
| F05–F06 | M4, M6 Meta/intent | Restrict generation to checkpoint-visible requirements |
| F07–F08 | M5/M6 TS graph/regret | JS imports/exports support only if needed for selected SCBench subset |
| F09–F10 | M7/M8 paired experiment/report | Booking BK10–BK14, optional external paired SCBench trial |
| F11–F12 | M8–M10 demo and submission | Separate controlled vs external result labels |
| F13–F14 | P1 ablations/repeated runs | SWE-Milestone and SWE-bench Pro selected tasks only if affordable |

**Do not add benchmark workload at cost of safe P0.** Booking tickets are subdivisions of M2/M7, not 14 new competing mandatory top-level tickets. See [booking build tickets](../benchmarks/booking-v1/BUILD-TICKETS.md).
