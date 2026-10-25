# 30 — Competition vision and non-negotiable gates

Status: design only (October 24, 2026). No app code or measured improvements exist in this planning repository.

## Product promise
**AgentHarness Verify makes coding agents substantiate completion claims.** Deterministic evidence verification produces scoped VERIFIED, UNVERIFIED or INSUFFICIENT_EVIDENCE outcomes. Meta Muse reasons about distributed trace evidence and proposes *constrained* verification obligations. Allowlisted checks enforce policy in bundled scripted reference scenarios. A conditional independent real-agent study assesses whether guards and bounded feedback actually reduce unjustified completion claims without blocking legitimate success.

## Three claims that must never be conflated
- **P0 observation:** a completion claim is supported, contradicted or unknown from versioned trace evidence. VERIFIED is not proof of universal code correctness.
- **P0 scripted demonstration:** baseline policy FAIL becomes guarded policy PASS in a bundled deterministic fixture; underlying test failure remains. This is NOT real agent task improvement.
- **P1 measured outcome (only if run):** independently scored actual coding-agent A/B trials and optional C feedback arm; metrics include unjustified completion, false blocks, genuine solves, abstentions, unknown oracles, latency, tokens and cost.

## Priority and release order
1. Oct 26 review current participant rules (especially pre-built code, assets, track, licensing, submission format) before app implementation.
2. Oct 27 ship evidence-first tri-state verdict with positive and negative controls.
3. Oct 28 run a real Muse call with evidence-ID validation and exact model provenance.
4. Oct 29–30 implement bounded DSL scripted replay, report, hard case and first deployment.
5. Oct 31–Nov 1 measure frozen R/M/C evaluations and, only after P0 deploy + safety gate, pilot 5–10 isolated paired real-agent tasks.
6. Nov 2 hard feature freeze. Nov 3 record and review judge demo. Nov 4 submit well before 9 PM ET.

## Meta differentiation
Failed exitCode=1 needs no LLM. Evaluate a distributed evidence case: tests pass at revision R0, a relevant edit creates R1, no tests verify R1, yet agent claims updated code passed. Muse proposes a missing post-edit verification obligation; deterministic validator remains authority. Initial DSL doesn't express this temporal requirement; add one strictly typed operation only through versioned contracts + tests + ADR if time allows. No generated scripts.

## Cut list and strict boundaries
Cut fancy visuals, expanded sample corpus, local CLI, optional C feedback, then P1 entirely if core is threatened. Keep only one deployed Next.js app with no uploaded-trace execution, no arbitrary repo runner, no autonomous editing, no public feedback endpoint. P1 runner is developer-local and isolated as specified by [27](27-real-agent-experiment.md) and [31](31-feedback-study.md).

## Authority
This is the highest-level competitive priority statement, not a replacement for exact schemas [03](03-data-contracts.md), [04](04-api-contracts.md), security [10](10-security-and-privacy.md), or official rules [16](16-rules-and-compliance.md). See [32](32-hard-case.md) and [33](33-release-and-demo.md).
