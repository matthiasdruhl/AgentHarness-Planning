# 20 — Feasibility and launch checklist

- [ ] Confirm organizer prebuilt-code eligibility and official Meta model credits.
- [ ] Inspect owner M4 Pro host: arm64, Docker Desktop engine, Codex, Node, Python 3.12+, uv, disk.
- [ ] Confirm `sbx` installed and supported; test Docker Sandboxes Codex authentication without exposing real secrets to untrusted code.
- [ ] Confirm Docker Sandboxes supports safe programmatic invocation, artifacts and timeouts needed for pinned SCBench checkpoint.
- [ ] Run fake-secret denial tests; review SSH-agent forwarding, network, home mounts, keychain and Docker socket exposure.
- [ ] Check selected JS task Docker manifest/native build and bridge/localhost behavior.
- [ ] Test unmodified original grader in separate evaluator isolation.
- [ ] Pin task and runner SHA; freeze matched A/B budgets and checkpoint-visible information.
- [ ] If Docker Sandboxes fails, try hardened upstream agent wrapper; if still unsafe/incompatible, defer public benchmark rather than break core demo.
- [ ] Complete controlled booking-v1 baseline, stable verifier and honest demo evidence before feature freeze Nov 2.

**Source of truth:** [SCBench sandbox adapter plan](../benchmarks/SCBENCH-SANDBOX-ADAPTER-PLAN.md), [Mac compatibility](../benchmarks/SCBENCH-MAC-COMPATIBILITY.md), [host setup](LOCAL-MAC-SANDBOX.md).
