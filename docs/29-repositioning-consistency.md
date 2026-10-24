# 29 — Repositioning migration and consistency register

**Date:** 2026-10-24. **Purpose:** one authoritative mapping for all planning docs from 'AgentHarness Audit' (broad trace diagnosis) to **AgentHarness Verify** (completion-claim verification).

## Non-negotiable mapping
| Dimension | Previous framing | Current framing |
|---|---|---|
| Product name | AgentHarness Audit | AgentHarness Verify |
| Promise | Diagnose coding-agent failures | Verify whether coding-agent completion claims are supported |
| Primary screen | Trace timeline + findings | Completion verdict + direct evidence; timeline available on expansion |
| Primary demo | Find failure, run scripted replay | Immediately show UNVERIFIED on false-success; optional Muse explanation; scripted guard before/after |
| Meta Muse | Main finding engine | Supporting structured diagnosis and candidate restricted tests, never verdict authority |
| P0 success | Scripted guard changes state | Same **plus** transparent verdict-first completion verification; scripted result must be qualified |
| Primary metric | Broad failure classification | False completion claims **only when actual runs are measured**, with false-block and solve-rate controls |
| Benchmark | Rules/Muse/combined diagnosis | Keep diagnostic ablation as secondary; optional T15 measures real behavioral outcomes |
| Public execution | None | Still none |
| T15 | Gated experimental real-agent study | Still gated P1; cannot block submission |

## Cross-document precedence
1. Official rules first; [AGENTS.md](../AGENTS.md) for execution and safety.
2. [28 north star](28-verify-product-north-star.md) owns positioning, outcomes, and UI intent.
3. [01 PRD](01-product-requirements.md) owns acceptance and priorities.
4. [03](03-data-contracts.md) and [04](04-api-contracts.md) own type and network contracts.
5. [02](02-system-architecture.md), [06](06-replay-and-fixes.md), and [17 ADR](17-architecture-decisions.md) own runtime trust boundaries.
6. [07 fixtures](07-scenarios-and-fixtures.md), [08 UX](08-ux-and-demo-workflow.md), [14 testing](14-test-matrix.md) and [DEMO](DEMO_SCENARIO.md) own behavior and demonstration.
7. [09](09-evaluation-plan.md), [23](23-baselines-and-scoring.md), and [27](27-real-agent-experiment.md) each report **different denominators**, never mix them.
8. [12 calendar](12-ten-day-plan.md), [13 tasks](13-codex-task-board.md), and [tasks directory](../tasks/README.md) define implementation order.
9. [15](15-demo-and-submission.md), [26](26-demo-rehearsal-and-fallback.md) and [SUBMISSION_CHECKLIST](SUBMISSION_CHECKLIST.md) define evidence and claims.

## Change policy
- Keep historical `trace.v1`, `analysis.v1`, replay and verify API contracts. Add `completion-verdict.v1` as a pure typed output, not a remote runtime executor.
- Existing *three* failure categories remain supported fixtures; **F1 false success** is the primary judged scenario. Never relabel `UNSUPPORTED_CLAIM` as fully verified source correctness.
- Distinguish **verification verdict** (observed claim evidence), **analysis hypothesis** (Muse), **scripted policy assertion** (deterministic simulation), **measured agent behavior** (optional T15). All four require separate labels.
- No claims of statistical or external-benchmark superiority without corresponding measured data.
- Freeze P0 scope early; preserve P1 gate and Nov 2 feature freeze.

## Audit checklist
- [x] Product name, primary promise and precedence updated in core README/AGENTS/PRD.
- [x] Deterministic tri-state verdict is specified.
- [x] Browser/app API boundary remains non-executing.
- [ ] Codex implementation and tests actually executed — **not yet**; planning only.
- [ ] Official hackathon terms/prebuilt permissions confirmed in participant portal.
- [ ] Working recorded/live demo and measured baseline — **not yet**.

This document registers **design synchronization**, not operational readiness or test results.
