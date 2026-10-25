# Codex executable tasks — Meta prototype only

The canonical full ticket board remains [docs/13-codex-task-board.md](../docs/13-codex-task-board.md). These task files refine its **T01–T14** into reproducible prompts, without changing dependencies, architecture or scope.

Start at T01 on/after Oct 26 only once competition rules permit. Read [AGENTS.md](../AGENTS.md), [workflow](../docs/CODEX_WORKFLOW.md) and the ticket-specific contract links. Record actual commands and results. Implementation occurs in **a separate app repository**; never create app source in this planning repo.

| Phase | Files | Canonical tickets |
|---|---|---|
| Foundation | [01](01-foundation.md) | T01–T04 |
| Muse and validation | [02](02-meta-analysis.md) | T05–T06 |
| Replay and export | [03](03-replay-and-reports.md) | T07–T09 |
| UX and evaluation | [04](04-ux-evaluation.md) | T10–T11 |
| Secure shipping | [05](05-shipping.md) | T12–T14 |

**Task completion report:** ticket / SHA / paths / test commands and observed exit codes / tested edge cases / provider calls or mocks / blockers / next ticket. If no actual command exists yet, do not fake it; first add the script under T01.

## Gated P1 ticket
[06 — real-agent experiment](06-real-agent-experiment.md) defines optional T15. It is not a dependency of submission and cannot begin before the P0 release and isolation/credit gates are green.

## AgentHarness Verify task ordering
Read [north star](../docs/28-verify-product-north-star.md) and [migration register](../docs/29-repositioning-consistency.md) first. T04 is now explicitly responsible for shared deterministic completion-verdict.v1 and F1/N1/N2/unknown status tests. T10 implements evidence-first verification UI; detailed timeline, Muse explanation and scripted replay follow the immediate verdict. T15 remains optional and cannot expand deployed execution.


## Competition-alignment update (2026-10-24)

Current scope, gates and precedence: [30 competition vision](../docs/30-competition-vision.md), [31 conditional feedback study](../docs/31-feedback-study.md), [32 Meta hard case](../docs/32-hard-case.md), [33 demo and early release](../docs/33-release-and-demo.md). These supersede earlier *priority, calendar and demo ordering* only; original versioned contracts and security prohibitions remain authoritative. P0 is evidence-first tri-state + live Muse analysis + **scripted** policy comparison; P1 is developer-local, independently scored A/B (optional C one bounded feedback continuation) only after deployed P0, validated isolation, rules and credits. No P1 result may be labeled measured unless actually executed. Target first deployment Oct 30 and hard freeze Nov 2. Never call scripted guard compliance a fixed code bug.
