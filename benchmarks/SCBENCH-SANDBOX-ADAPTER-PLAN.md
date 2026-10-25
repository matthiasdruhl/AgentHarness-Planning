# SlopCodeBench safe-agent integration — implementation decision

**Status (2026-10-25): design proposed, not implemented, not safety-audited, not executed.** Applies to M0/M2 feasibility and the conditional SlopCodeBench JavaScript pilot. The independent upstream tests and checkpoint semantics must remain intact.

## Decision order

**Path 1 (preferred pilot): Docker Sandboxes + Codex with protected credential handling.** Evaluate Docker's `sbx` sandbox feature, its supported Codex agent, authentication modes, workspace mounts, and noninteractive invocation *on the actual installed versions*. Published getting-started examples include:

```sh
sbx secret set openai --oauth
sbx run codex ./benchmark-workspace
```

These demonstrate an interactive/sandbox setup only. **They are not a proven unattended SCBench adapter, security certification, or a supported exact benchmark command.** Docker Sandboxes might disable Codex's *inner* sandbox because the outer isolation is meant to provide protection: test the outer boundary, mounts, network paths and SSH-agent forwarding instead of treating bypass as safe by assumption.

**Path 2 (fallback): hardened upstream Codex adapter.** Fork/pin upstream agent integration; inspect current source and remove unjustified `--dangerously-bypass-approvals-and-sandbox`; attempt `codex exec --sandbox workspace-write --json ...` only after verifying that nested Linux restrictions permit it. **Removing the flag does not fix credentials**: never mount personal `~/.codex/auth.json` into an untrusted task workspace. Use a separately isolated inference/controller boundary and restricted authentication, with budget limits; if no safe mode works, block execution.

**Path 3:** remote disposable Linux machine/runner only if selected task images or isolation unsupported on M4 Pro, with same no-secret-in-task principle. Do not convert this into a cloud-first development plan. **Path 4:** if no safe runner by Oct 30, keep the custom booking-v1 controlled experiment and report SCBench as not run.

## System boundaries

```text
Local Mac (trusted experiment controller)
   | fixed checkpoint/task ID, budgets, allowed commands, pinned hashes
   v
Agent adapter [proposed: scripts/benchmarks/scbench-adapter/]
   | model interaction via reviewed, scoped auth boundary
   v
Disposable Codex workspace/sandbox (agent may write solution only)
   | patch/diff/artifacts, NO hidden oracle or host auth
   v
Independent evaluator (separate isolated process)
   | untouched upstream checkpoint tests; evidence with hashes
   v
Result manifest + provenance, classification, limitations
```

**Separation caveat:** both the coding agent and untrusted test code must not be able to read credentials. Do not assume any local Docker container with a secret-mounted CLI provides this boundary. If credential isolation cannot be established, do not use subscription credentials in benchmark trials.

## Minimum adapter interfaces (proposed, not actual SCBench API)

```ts
type AgentRunInput = {
  taskId: string; checkpointId: string;
  sourceRevision: string; workspacePath: string;
  agentConfigHash: string; promptFile: string;
  wallClockLimitSec: number; tokenLimit?: number;
  monetaryLimitUsd?: number;
};
type AgentRunResult = {
  runId: string; status: "completed" | "failed" | "timed_out" | "blocked";
  stdoutJsonlPath?: string; stderrPath?: string;
  patchPath?: string; elapsedMs?: number;
  usage?: { inputTokens?: number; outputTokens?: number; costUsd?: number };
  sandboxEvidencePath: string;
};
```

Do not prefill unmeasured usage; unknown fields null/missing. Implement against pinned SCBench agent hook only after reading actual source code.

## Validation gates (in order)

1. **Source and eligibility:** official hackathon assets allowed; pin SCBench revision and selected JS problem revision, review license, task scripts, expected image.
2. **Tool availability:** check installed Docker Desktop/Sandboxes command and exact supported `sbx` options, Codex CLI and Python >=3.12 with `uv`. Do not assume `sbx` ships with every Docker Desktop version.
3. **Safe authentication:** demonstrate that untrusted task commands cannot read Codex OAuth/API secrets, macOS Keychain, SSH agent or host home. Test with fake credential sentinels before real secrets.
4. **Agent automation:** noninteractive invocation accepts prompt and workspace, produces machine-readable status and patch, enforces timeout and cancellation. A manual `sbx run` demo does not pass this gate.
5. **Runtime:** selected JS image builds/executes on `linux/arm64` or measured supported `linux/amd64` emulation; bridge networking/ports work without exposing host services.
6. **Untrusted tests:** no unsandboxed execution of upstream setup scripts; tests run with network default off, no secrets, narrow writable filesystem.
7. **Independent oracle:** evaluator tests unmodified, outside agent writable path; tampering with agent-visible tests cannot change grader verdict.
8. **Parity:** same Codex version/model, prompt except architecture treatment, checkpoint sequence, equal Verify feedback, tool limits and time/spend; count Forecode upfront cost.
9. **Reproducibility:** record upstream SHA, task IDs, image digests, configs, agent/runner modifications, actual stdout JSONL and known issues. An altered adapter produces an **adapted SCBench pilot**, not unqualified official leaderboard results.

## Implementation work packages / Codex handoff

- SA01 (M0): verify actual `sbx` installation and version; inspect available integration flags and supported auth options. Evidence: command output/version and link to upstream docs.
- SA02 (M2): fake-secret access tests; enforce workspace-only mounts, no Docker socket, SSH/keychain boundaries. Evidence: intentionally denied reads; default-deny.
- SA03 (M2): task-only fixture smoke; test Docker architecture, Python/Node dependencies and evaluator with zero paid inference. Evidence: exit codes and image digests.
- SA04 (M2/M7): implement thin SCBench Codex adapter preserving pinned grader; machine-readable artifacts; cancellation and cost caps. Evidence: one end-to-end checkpoint.
- SA05 (M7): matched baseline/Forecode checkpoints; include failures/limits; score via independent grader.
- SA06 (M7 fallback): if SA02/03 fail, research hardened adapter; if still blocked, stop without bypassing safety, record no-result.

**Scope rule:** SAxx are subpackages of existing M0/M2/M7 tickets, not an extra independent roadmap. Feature freeze Nov 2. Never hold the core product hostage to external compatibility.

## References
- Docker Sandboxes docs: https://docs.docker.com/ai/sandboxes/
- Docker Sandboxes Codex integration: https://docs.docker.com/ai/sandboxes/agents/codex/
- Docker secrets: https://docs.docker.com/ai/sandboxes/secrets/
- Codex CLI noninteractive: https://developers.openai.com/codex/non-interactive/
- SCBench Docker runtime: https://github.com/SprocketLab/slop-code-bench/blob/main/docs/execution/docker.md
- SCBench Codex adapter: https://github.com/SprocketLab/slop-code-bench/blob/main/docs/agents/agents/codex.md
