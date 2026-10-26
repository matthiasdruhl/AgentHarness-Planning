# 20 — Feasibility and launch checklist

- [ ] **Organizer clarified new work only after Oct 26 noon ET kickoff**: create **fresh public standalone** submission repo, **do not copy pre-event planning/source/examples/history**, and keep event-created BUILD-PROVENANCE log. [Official rules](OFFICIAL-PARTICIPANT-RULES-2026-10-26.md).
- [ ] Claim $150 per accepted participant by Nov 4 9 PM ET; verify actual billing credits, required card and hard local cost controls (warnings may not cap overages); validate one live eligible Meta call.
- [ ] Inspect owner M4 Pro host: arm64, Docker Desktop engine, Codex, Node, Python 3.12+, uv, disk.
- [ ] **User reported** Docker Sandboxes installed and Codex sandbox initialized; **not verified**: record actual `sbx version`, `sbx ls --format json`, workspace mode, image patch state, safe proxy-authenticated Codex command. Skip reinstall unless missing/outdated.
- [ ] Confirm Docker Sandboxes supports safe programmatic invocation, artifacts and timeouts needed for pinned SCBench checkpoint.
- [ ] Run fake-secret denial tests; review SSH-agent forwarding, network, home mounts, keychain and Docker socket exposure.
- [ ] Check selected JS task Docker manifest/native build and bridge/localhost behavior.
- [ ] Test unmodified original grader in separate evaluator isolation.
- [ ] Pin task and runner SHA; freeze matched A/B budgets and checkpoint-visible information.
- [ ] If Docker Sandboxes fails, try hardened upstream agent wrapper; if still unsafe/incompatible, defer public benchmark rather than break core demo.
- [ ] Complete controlled booking-v1 baseline, stable verifier and honest demo evidence before feature freeze Nov 2.

**Source of truth:** [SCBench sandbox adapter plan](../benchmarks/SCBENCH-SANDBOX-ADAPTER-PLAN.md), [Mac compatibility](../benchmarks/SCBENCH-MAC-COMPATIBILITY.md), [host setup](LOCAL-MAC-SANDBOX.md).

## Booking-first prioritization
Before any SCBench compatibility work, follow [existing-sandbox inspection and booking test runbook](DOCKER-SANDBOX-BOOKING-FIRST.md). Inspect existing user setup read-only; ensure Docker Sandboxes >=0.42.0, Oct 21 CA trust updates, SSH-agent forwarding disabled/denied for experiment, sanitized clone/mountless rather than unsafe host workspace, explicit inference egress vs network-off grader, fake-secret negative tests, and bounded actual Codex run. These are currently **NOT_RUN**. User-reported installation is not security attestation.
