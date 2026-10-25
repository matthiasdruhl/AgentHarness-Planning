# 25 — Benchmark reproducibility

## Evidence artifacts
Record benchmark origin/upstream URL + pinned revision; selected task IDs and checkpoint sequence; selection date/reason; dataset and license; baseline fixture SHA; known scenario access; opaque held-out hash/custodian; independent oracle SHA; agent model/config; allowed tools; sandbox evidence; budgets; seed; every run result; observed exit codes; scorer version; report timestamps. All results available including loss and failed attempts.

## Two tracks
**External SCBench JS pilot:** preserve upstream test scripts and continuous checkpoint order. Any adapter adaptation must be explicitly marked and cannot be called an official benchmark score. Code and public task tests are untrusted executable inputs, requiring sandbox. See [external run protocol](../benchmarks/PUBLIC-RUN-PROTOCOL.md).

**Controlled booking-v1:** ensure A/B initial behavioral equivalence and identical Verify. B's upfront cost accounted. Keep actual held-out requirements outside public planning/agent accessible files; private evaluator runs hidden tests after completed change. See [experiment protocol](../benchmarks/booking-v1/EXPERIMENT-PROTOCOL.md).

## Preferred output layout in app repo
`reports/<study-id>/manifest.json`, `runs/A/*.json`, `runs/B/*.json`, `checks/*.json`, `certificate.json`, `LIMITATIONS.md`. Published sanitized artifacts do not expose private oracle or credentials. Reproducibility requires actual checkouts/runs, not a plausible-looking report.
