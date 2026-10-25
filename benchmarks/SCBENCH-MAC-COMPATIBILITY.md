# SlopCodeBench on macOS Apple Silicon — compatibility review

**Reviewed 2026-10-25 against upstream docs. No real install/build/run performed on owner's Mac.** This is a source review, not proof of compatibility.

## Verified upstream prerequisites
- Harness repo: https://github.com/SprocketLab/slop-code-bench
- Problem definitions now live separately at https://github.com/SprocketLab/scb-problems (the GitHub directory fetch returned 404 in this review; availability must be rechecked and official alternate Harbor dataset path investigated before relying on it).
- Upstream: **Python 3.12+, Docker running, agent API/provider credentials**, recommended 8 GB+ RAM and 10 GB+ disk space. Owner's 48 GB/~294 GB free is adequate *capacity*, not tested runtime.
- Install: `uv sync` in cloned harness. Upstream example uses `uv run slop-code run --agent claude_code --model anthropic/opus-4.5 --environment configs/environments/docker-python3.12-uv.yaml --prompt configs/prompts/just-solve.jinja --problem file_backup ...`; example names/model are illustrative and require appropriate credentials.
- Built-in runner supports `--dry-run`, `--num-workers`, `--agent`, `--environment`, `--model`, `--problem`, `pass_policy=all-cases` and a YAML config; prefer `--num-workers 1`.
- First Docker image builds may take several minutes, and exact named agent/environment configs can change by revision. Pin upstream commit and examine available configs, not guessed defaults.

## macOS specifics documented upstream
- Docker runtime's `effective_network_mode` maps requested `host` networking to `bridge` on macOS/Windows; Linux permits both. Loopback bind may be rewritten to `0.0.0.0` in bridge mode with port mapping. **An agent expecting localhost services may fail unless ports and bind addresses are explicitly configured.**
- Workspace generally bind-mounted read/write; static fixtures mounted read-only; extra runtime mounts supported and may override paths. Audit mounts; do not assume protected hidden tests are outside writable workspace by default.
- Docker user usually maps host uid/gid unless `docker.user` overrides. Verify non-root inside container, don't assume.
- Architecture compatibility for all candidate JS tasks and images **not verified**; inspect `linux/arm64` manifests, native binary packages, possible `linux/amd64` emulation and their performance before selecting problems.

## **Critical security blocker: upstream Codex adapter**
Upstream Codex guide (https://github.com/SprocketLab/slop-code-bench/blob/main/docs/agents/agents/codex.md) documents:
1. It may mount `~/.codex/auth.json` into a container for file-based authentication.
2. Its example `codex exec` invocation includes `--dangerously-bypass-approvals-and-sandbox`.

**Do NOT run the stock Codex integration with personal login credentials or unsandboxed code on untrusted benchmark tasks.** A container's existence alone does not make credential exposure or bypass flags acceptable. Before agent runs: inspect current adapter implementation, find a safe authenticated controller/isolated agent configuration, remove bypass behavior or justify with verified outer sandbox, and ensure no credential material is visible to task code. A bare `OPENAI_API_KEY` env in untrusted task container is also not safe. Stop if credential boundary is unverified.

## Model/provider compatibility caveats
The harness has a Codex agent type and supports an `openai` provider in its config. This **does not guarantee** current Codex subscription login can be used for benchmark CLI execution without exposing its auth file or without separate API billing. Verify live model ID availability, exact Codex CLI version, auth mode and ToS before treating it as the benchmark agent. An older upstream Codex example references CLI 0.65.0 and o3-mini; **do not use those as assumed current supported values**. Meta Muse is Foresight proposal backend, not automatically an SCBench coding agent.

## Planned smoke protocol (after official eligibility and sandbox review)
1. Pin harness git SHA + problem dataset SHA; read LICENSE, KNOWN_ISSUES, `docs/execution/docker.md`, agent guide, and selected problem setup/test scripts.
2. Check `python3 --version` (3.12+), `uv --version`, `docker info`, `docker buildx imagetools inspect <actual-selected-image>` if applicable, `codex --version`.
3. `uv sync`; enumerate configs and JS-compatible problems, ensure actual JS task examples exist and can be graded in selected Docker environment (not necessarily the default Python image).
4. `uv run slop-code run --dry-run --num-workers 1 --problem <verified-task-id> ...`, with confirmed agent/model/environment files and no secrets printed. The example is a placeholder, not a copy-paste runnable command.
5. Run a **test-only evaluation/fixture** in a reviewed disposable container before any remote coding-agent run. Verify test-oracle segregation and known-issues applicability.
6. Only after approved isolation and credential mechanism, run one checkpoint at fixed budget. Save Docker image digests, task ID, upstream SHAs, agent config, tests SHA, actual results. Maintain sequential checkpoint continuity.
7. Label every local adapter patch in report; do not call patched run official leaderboard-equivalent.

## Upstream known issues and grading
https://github.com/SprocketLab/slop-code-bench/blob/main/docs/KNOWN_ISSUES.md notes provider/agent config complexity and specific reference solutions that fail some tests, while maintainers consider tests authoritative. Check selected task's issue list and independently verify grader integrity; reference-solution failure alone is not agent failure. The default pass policy may be `any`, while full-correctness experiments should record and usually select `all-cases` with the choice frozen across arms.

## Compatibility verdict
- **Hardware capacity:** likely sufficient based on upstream minimums.
- **macOS Docker networking:** documented difference; bridge mapping requires attention.
- **ARM64 Docker images/native extensions:** unknown pending actual image/task smoke.
- **Codex harness integration:** **security blocked by documented bypass/credential mounting until reviewed**.
- **Chosen JS problem availability:** requires dataset inspection, not yet proven.
- **Full suite on deadline:** not approved as P0. Limit to a small verified pilot after local fixture runner works.
