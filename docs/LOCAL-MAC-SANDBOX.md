# Local development and sandbox — M4 Pro 48 GB

**Hardware (user-reported):** MacBook Pro M4 Pro, 48 GB unified memory, 494 GB SSD with approximately 200 GB used and 294 GB free. **No need to delete files before smoke tests.**

## Local-first starting configuration
Local Codex CLI for primary implementation; Docker Desktop for Apple Silicon with initial VM limit 16 GB RAM, 6 CPUs, 80 GB virtual disk cap. These are suggested limits, not observed requirements. Start with one benchmark agent at a time; record A/B run order. Native ARM64 preferred, measured AMD64 fallback.

## Two deliberately distinct environments
1. **Developer workstation:** editor, Git, Codex CLI, Next.js, local test tooling; do not give benchmark scripts access to this trust zone.
2. **Untrusted experiment:** reviewed disposable sandbox with writable task workspace only, no host secrets, SSH/keychain, Docker socket or privileged host mounts. Protected grader separate. Network off for test execution; when remote inference is needed, use a separately secured, restricted controller/agent boundary rather than placing broad credentials with test code.

## Primary experiment execution research
Investigate **Docker Sandboxes + Codex** first. Its host-managed authentication may simplify isolating credentials from task files, but check actual `sbx` availability, noninteractive control, mount/SSH forwarding, egress and security on the installed version. Its internal Codex sandbox setting is not the whole security boundary. Never assume it works with SCBench just because `sbx run codex` starts.

If the tool cannot support secure unattended execution, investigate a **hardened pinned SCBench Codex adapter** with inner workspace isolation and safe external authentication. Never mount personal Codex `auth.json` into attacker-controlled code. Stop live experiments if the boundary fails.

Read [decision, diagram, validation and adapter implementation plan](../benchmarks/SCBENCH-SANDBOX-ADAPTER-PLAN.md) and [Mac compatibility matrix](../benchmarks/SCBENCH-MAC-COMPATIBILITY.md).

## Local preflight (inspect only)
```sh
uname -m
sw_vers
df -h /
node --version
python3 --version
uv --version
codex --version
docker version
docker info
docker system df
sbx --help
```
Individual commands may fail if tools are not installed. Before paid inference, freeze runner/task versions, verify test-only run, run synthetic-secret negative controls, and capture independent evaluator evidence.

## Gates
- Secure auth read-denial and sandbox containment tests pass.
- ARM64 image and JS task setup work or documented slower AMD64 fallback accepted.
- Agent runner automated and terminable under hard limits.
- Original tests run separately, not under agent control.
- Same model/tools/budget/Verify for experiment arms.
- No live agent run if any hard security gate fails.

No Mac commands or test workloads were executed by the planning update.
