# Local Mac sandbox plan — Forecode (2026-10-25)

## Equipment and capacity
Owner's **M4 Pro MacBook Pro, 48 GB unified memory**, internal SSD **494 GB total, ~200 GB used, ~294 GB free** as owner-reported. Local Codex CLI primary development, with cloud only if x86-64-only upstream dependency proves incompatible or host isolation cannot be validated. **Do not erase 50 GB preemptively.**

## Starting settings (heuristics, adjust after observation)
- Docker Desktop for Apple Silicon; VM RAM **16 GB** initially (increase toward 20–24 GB only on measured OOM), **6 CPUs** as an initial cap; Docker virtual disk limit **80 GB** (limit/cap, not immediate usage).
- At most **one agent benchmark at a time** initially, matched A/B run sequentially from same pinned seed/config. Keep host responsive and document run order, elapsed times and resource contention.
- Reserve sufficient host storage for images/logs; inspect with `df -h`, `docker system df` before pruning. **Do not run `docker system prune -a` blindly**: removes images/caches used by other work.
- Prefer native `arm64` images and multiarch manifests. An upstream `linux/amd64` container may run in emulation with slowdown or incompatibility; record `docker image inspect`, `docker info` and `uname -m`. Never assert x86 support from the presence of Docker alone.

## Preflight commands (safe, read-only)
```sh
uname -m
sw_vers
sysctl -n hw.memsize
df -h /
node --version
npm --version
python3 --version
uv --version
git --version
codex --version
docker version
docker info --format '{{.OSType}}/{{.Architecture}}'
docker system df
```
Check `docker info` independently of `docker --version`: CLI presence does not mean daemon running. Python must be **3.12+ for SCBench**, separately from Node. Codex account/subscription access does **not** establish that a particular third-party harness can use it, mount its authentication safely, or meet benchmark token spend.

## Threat model and controls
Developer-local execution only. The public Next.js app must **never** expose an execution route. Use vetted pinned tasks with:
- disposable rootless/non-root (UID nonzero) sandbox, read-only host mounts except the explicitly scoped writable workspace, no Docker socket inside agent container, no host home/SSH/keychain mounts or tokens in child process, no privileged mode;
- network disabled for untrusted tests **when offline testing**, but understand a coding agent making remote inference may need carefully scoped outbound connectivity; isolate controller/inference traffic from the untrusted code executor rather than simply assuming `--network none` works for everything;
- fixed CPU, RAM, PIDs, disk, wall-clock, retries, tokens/spend ceilings and kill/cleanup path; deny test-oracle access during coding;
- independent evaluator outside agent-writable workspace; hash pinned workspace, upstream test scripts and artifacts; schema-validate outcomes;
- deny shell-command injection from imported prompts/model. Built-in benchmark scripts are executable third-party code; review and sandbox them as such.

## Isolation acceptance tests
1. Writable workspace works; test cannot read fake host-secret sentinel or `~/.codex/auth.json`.
2. Non-root uid, no `/var/run/docker.sock`, no host mounts; attempts at forbidden mounts and paths blocked.
3. Test network egress denied; agent inference either routed through separately controlled controller or explicitly authorized narrow egress, never unconstrained outbound.
4. CPU/memory/time exhaustion causes predictable termination, artifacts redacted and container removed.
5. Evaluator hidden tests stored outside agent workspace; deliberate test modification does not change verdict.
6. A/B have identical runner images, allowed tools, network policy, budgets, model/config, independent Verify tests and recorded run order.
7. `linux/arm64` image build and Node/Python evaluator smoke completed; for amd64-only artifacts measure actual emulation feasibility.

**No verified isolation = no real-agent or untrusted benchmark execution.** Record each check's command, exit code, timestamp, image digest, MAC/OS/arch, and evidence path. No sandbox tests have been performed by this documentation update.

## Suggested local allocation and staging
Budget ~1–3 GB app deps, ~10–25 GB Docker images, ~5–30 GB selected benchmark assets, ~5–20 GB logs/artifacts, but these are **rough estimates**, not vendor requirements. Configure artifact retention and keep full upstream dataset downloads out of P0. Avoid hardcoded paths to personal directories.

## Operational cutover
M0: check tools, model/API quota, Docker settings and feasibility with no benchmark agent.
M2: build sandbox and run protected tiny deterministic task; only then attempt SCBench smoke.
M7: matched A/B sequential execution with explicit recorder and evaluator.
M8+: no new sandbox features after Nov 2 freeze; use recorded evidence demo and disclose missing validation if unsafe.
