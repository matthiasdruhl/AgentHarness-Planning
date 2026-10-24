# Codex workflow — Meta prototype

## Session startup
1. Confirm official rules allow the intended work; before kickoff do **planning only**.
2. Read [AGENTS.md](../AGENTS.md), [21 index](21-execution-index.md), the current [task file](../tasks/README.md), and **only** linked contract sections. Pin the planning commit SHA in the task prompt.
3. Inspect existing code, git status, active branch and test scripts in the **separate application repo**. Never assume scaffold, credentials, or test commands already exist.
4. Select the first incomplete dependency-free P0 ticket from [13](13-codex-task-board.md).

## One-task loop
- State objective, permitted changes, exclusions, explicit test/acceptance evidence.
- Make the smallest testable vertical change. No opportunistic dependency additions or P1 features.
- Write positive and negative tests; mock paid provider calls in CI.
- Run only *actually existing* commands, then the app's canonical check command when present. Record command, exit status and meaningful failures; never invent a green result.
- Review diff for leaked keys, model requests in browser, untrusted trace execution, unverified claims, and scope creep.
- Commit small coherent work with task ID, e.g. `feat(T04): timeline and deterministic checks`.
- Update the implementation-repo handoff journal: SHA, exact tests, unfinished work, Meta calls and next dependency.

## Context discipline
Prefer fresh Codex sessions for new tickets, one relevant file excerpt at a time. Avoid repasting all 20 planning docs. For a failed task, carry forward reproducible error, changed files and a minimal next action; do not restart from vague summaries. Keep provider SDK integration isolated behind a fakeable transport. Do not add new framework adapters.

## Branching and parallelism
One writer per shared contract/schema. Parallelize only truly independent files; defer rebases until tests pass. Prefer reviewable branches/PRs where practical; never resolve conflicts by silently dropping tests or guardrails.

## Validation contract for app repo
Provide a single `npm run check` (or documented equivalent) that runs available lint, typecheck, unit/integration tests and build as the scaffold permits. Playwright is a separate explicitly recorded E2E gate; do not claim it ran because unit tests passed. Default CI must not require Meta credits.

## Per-task finish report
Task ID / commit SHA / changed paths / tests with observed outcome / skipped tests and why / live provider calls and usage / open bugs / next task. If the task is blocked by rules, credits, missing credentials or external outage, mark BLOCKED and work on a safe independent deterministic task.

## Verify-first Codex start
Read [28 north star](28-verify-product-north-star.md) and [29 migration](29-repositioning-consistency.md) before a task. T04 must implement completion-verdict.v1 with fail-safe missing evidence; T10 must put verdict and event IDs first. Muse does not certify successful completion. Record test V01–V06 results. T15 stays gated P1.
