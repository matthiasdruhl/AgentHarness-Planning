# SlopCodeBench on Apple Silicon — compatibility and mitigation

**Source review, not proof of execution.** Owner's M4 Pro/48 GB RAM/~294 GB free should meet general host-capacity needs. Actual selected JavaScript task/image has **not** run.

## Open issues and planned resolution

| Issue | Finding | Plan |
|---|---|---|
| Codex credentials | SCBench guide describes mounting `~/.codex/auth.json` inside runtime | **Block stock adapter** until auth isolated from all agent/task code; first test Docker Sandboxes scoped auth, then hardened alternative |
| Codex bypass | Upstream command includes `--dangerously-bypass-approvals-and-sandbox` | Do not copy stock invocation; verified outer sandbox or supported inner workspace sandbox is mandatory |
| Docker on macOS | Upstream Docker runtime maps host networking to bridge mode | Explicit bind/port mapping; smoke services and block unauthorized egress |
| Apple Silicon | Chosen images/native dependencies unverified for ARM64 | Inspect image manifest; build/test ARM64 first; record AMD64 emulation fallback |
| Python runtime | Harness expects Python 3.12+, uv, Docker daemon | Check versions, pin dependencies; smoke `uv sync` and runner dry run |
| Dataset | Separate problems checkout could be unavailable or moved | Locate official task release and pin exact source before promising JS subset |
| Scoring | Checkpoint grading and known issues vary | Preserve upstream tests; disclose adapter changes, report task and checkpoint IDs |

## Decision
Primary: [Docker Sandboxes agent adapter proposal](SCBENCH-SANDBOX-ADAPTER-PLAN.md). Fallback: hardened Codex adapter. Stop condition: no demonstrated credential isolation, independent grader, or platform compatibility. Deadline for external run feasibility: Oct 30, 2026.

**Do not mistake Docker Sandboxes' ability to start Codex interactively for evidence that it integrates noninteractively with SCBench.**

Upstream: https://github.com/SprocketLab/slop-code-bench ; Docker runtime: https://github.com/SprocketLab/slop-code-bench/blob/main/docs/execution/docker.md ; Codex agent: https://github.com/SprocketLab/slop-code-bench/blob/main/docs/agents/agents/codex.md .
