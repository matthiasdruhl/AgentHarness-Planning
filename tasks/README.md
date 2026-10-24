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
