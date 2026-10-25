# Forecode — Implementation master plan

**Scope:** Meta hackathon Oct 26–Nov 4, 2026; planning only. **Priorities:** [submission-first critical path](HACKATHON-CRITICAL-PATH.md) and [Codex launch handoff](IMPLEMENTATION-HANDOFF.md) supersede full-backlog daily throughput targets but do not remove security or milestone dependencies. The [milestone specs](../milestones/README.md) and [68-ticket queue](CODEX-TICKETS.md) remain the **same** executable hierarchy, not replaced by new benchmark docs.

## Schedule and dependencies
- M0 Oct 25–26: official rules, Meta access, sandbox validation, **freeze benchmark task selection criteria and custom oracle design**.
- M1 Oct 26: app skeleton + strict contracts.
- M2 Oct 27: reviewed booking-v1 initial fixture and evaluator + isolated runner; parallel feasibility smoke of upstream SlopCodeBench JS task **only if safe**.
- M3 Oct 28: Verify independent checks.
- M4 Oct 29: user-confirmed intent, validated Meta adapter.
- M5 Oct 30: TS/JS compatible scoped graph and regret ranking. **Public benchmark go/no-go:** if no safe adapter/test smoke, defer SCBench instead of expanding runtime.
- M6 Oct 31: two-candidate Foresight and bounded scenarios; separate fixed template baseline.
- M7 Nov 1: matched booking architecture A/B, actual held-out only if private custody/freeze genuinely maintained; if external pilot ready, paired 1–3 SCBench JS sequences.
- M8 Nov 2: certificate/UI integration; freeze new features and benchmark selection.
- M9 Nov 3: honest evidence demo, externally validated outcomes where available.
- M10 Nov 4: smoke, security, submit early.

## Evaluation program
[Benchmark overview](../benchmarks/README.md) → [external selection](../benchmarks/PUBLIC-BENCHMARK-STRATEGY.md) → [controlled booking fixture](../benchmarks/booking-v1/README.md). Both use the same provenance and independent-grader principles from docs/09 and docs/10. **Public benchmark is a conditional pilot**, not mandatory for valid P0 submission; do not let upstream environment complexity displace the demo and independent verification.

## Hard gates
No official rule signoff → no potentially disallowed app implementation. No attested isolation → no executing external test scripts or coding agents. No frozen real holdout → report non-blind case study. No fair matching → don't attribute difference to Foresight. No observed gains → report honestly. Feature freeze Nov 2.

## Priority
P0: functioning consented Meta-to-architecture-to-independent-Verify-to-certificate product and one controlled paired outcome or honest recorded fallback. Strong preference for at least one small independent SCBench subset when safe. P1: additional external tasks, SWE-Milestone, Verify-only SWE-bench Pro, ablation, repeat runs. P2: SWE-CI full-suite, cross-language generalized analyzer, complex multi-agent optimization.

## Workstream mapping
F01=M0–M1; F02–03=M2; F04=M3; F05–06=M4/M6; F07–08=M5/M6; F09–10=M7/M8; F11–12=M8–M10; F13–14=P1. The 68 detailed tickets remain as previously linked.

## Audit-driven evidence-first adjustment
Do not leave all experiments to M7 on Nov 1. Bring a safe independent evaluator and run proof forward (Oct 27–28) and seek the first fair A/B by Oct 30, conditional on attested isolation. Make a single judge flow work early. The external benchmark remains optional and must not consume time needed for the controlled fixture, live Meta integration or certificate. If scope slips, cut extra visualizations, scenarios and benchmarks before truth/safety checks. Keep full ticket queue for later.
