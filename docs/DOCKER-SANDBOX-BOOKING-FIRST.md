# Docker Sandboxes + Codex — reuse existing setup, validate booking first

**Date:** 2026-10-25. **Status:** user reports Docker Sandboxes installed and a sandbox initialized with Codex. This is **setup-reported, NOT independently verified**. This planning repository has no access to the user's host, so it cannot assert CLI version, patch status, sandbox mode, authenticated agent operation, containment, automation or run results.

**Decision:** Docker Sandboxes local microVM + Codex is the **selected first test target**, replacing open-ended research as the next M0/M2 action. **It is not yet a validated experiment runner**. First support one tiny controlled booking-v1 agent experiment; only then consider an SCBench adapter. Do not migrate to remote Linux or hardened raw Codex unless a concrete demonstrated blocker justifies it. Do not reinstall, delete or reconfigure the user's existing sandbox blindly.

## Architecture and distinct trust zones

```text
User's already-created Codex sandbox (status UNKNOWN)
   └─ inspect non-destructively; reuse for safe inspection/trusted code where appropriate
Controlled experiment sandbox (new dedicated/sanitized clone or mountless, if required)
   ├─ fixed booking-v1 input, no host credentials or secrets in mounted tree
   ├─ Codex agent with host-managed credential proxy and restricted network
   ├─ bounded time/budget, log/artifact capture, cancellable run
   └─ candidate patch, final source digest  ──────┐
                                                  v
Separate protected evaluator / grader (NOT agent accessible)
   ├─ original/hidden test suite + signed/trusted receipt provenance
   ├─ no model credentials, no mutable oracle; network off for grading
   └─ scope-specific verdict + sanitized measured result artifacts
                                                  |
                                                  v
Read-only Forecode demo (no HTTP→agent/shell/untrusted-code execution)
```

Docker's VM is the **host isolation boundary**, not the Codex CLI's in-VM permission mode or the VM user's UID. Codex may have sudo inside the VM. **Do not require "no root inside VM" as a blanket criterion**; require that guest root cannot access host resources, privileged host mounts, SSH-agent signing or host Docker daemon. Docker's built-in Codex starter may set `--dangerously-bypass-approvals-and-sandbox` *inside* the VM; that is not standalone evidence of a host escape nor an excuse to skip VM boundary tests.

## 0. Inspect the existing sandbox before creating anything

Run **on the user's host** (read-only inspection except where Docker may initialize its daemon). Do not paste secrets or host home listings into reports:

```sh
sbx version
sbx ls --format json
sbx diagnose
sbx settings get ssh.agentForwardingEnabled
sbx policy ls
sbx exec --help
sbx create --help
```

From `sbx ls`, identify the actual `<SANDBOX_NAME>`, workspace paths and mode. Never guess its name. If it has a direct read-write host mount (the default for `sbx run codex PATH`), **do not put attacker-controlled tasks there**. A clone-mode sandbox protects host writes, but a read-only mount can still expose `.env` and ignored/untracked files—sanitize the input repo first. Mountless avoids a project mount; explicitly check optional shared skills, MCP/gateway and other host integrations.

Optional **non-agent, non-destructive** command against the named existing sandbox:

```sh
sbx exec <SANDBOX_NAME> sh -lc 'pwd; uname -m; command -v codex; command -v node; command -v git'
```

Check whether host `SSH_AUTH_SOCK` was forwarded and whether access through it is possible; **do not test with real signing requests**. Docker may forward an SSH agent by default. The operator can disable forwarding globally **after reviewing effect on other sandboxes**:

```sh
sbx settings set ssh.agentForwardingEnabled false
sbx daemon restart
```

That is an operator-selected, host-affecting setting, **not a command that this project or Codex silently executes**. Verify effective value afterward. Keep API/OAuth tokens managed via Docker's host-side credential proxy; never copy `~/.codex/auth.json`, keys or secret environment variables into the guest. Review project hooks, skills and MCP gateways for host execution.

## 1. Security and image update gate (before any untrusted execution)

- Record `sbx version`. Docker's September 2026 security advisory requires **at least 0.42.0** to avoid published host isolation vulnerabilities. Current documentation reviewed Oct 25 lists v0.49.1 on Oct 20. Version below fixed floor = hard stop.
- Docker's **Oct 21, 2026 eMudhra CA advisory** says built-in sandbox images were rebuilt. Updating only the `sbx` CLI **does not refresh an existing sandbox's trust store**. Check image provenance/trust store. Before recreating, preserve unpushed work: `sbx rm` deletes the sandbox filesystem.
- If a new sandbox is needed for a clean experiment, use `--pull always` to fetch refreshed template; follow the exact installed `sbx create --help` syntax and choose **clone** or **mountless** with a sanitized fixture, rather than reusing the direct-mounted developer workspace. Docker also documents refreshing existing Ubuntu guest `ca-certificates` if the existing sandbox must be retained.
- Review forwarded SSH agent, host service reachability, external MCP servers, policy exceptions, workspace symlinks/hardlinks and `gitignored` secrets. Inside-sandbox Docker is its own engine; a guest Docker socket is not automatically the host socket.
- Restrict model/provider egress and only necessary package registries during agent runs; use a distinct no-network grading phase with `--network none` or equivalent. It is wrong to require no network for the Codex inference phase while simultaneously expecting an API call.
- Do not copy source trees containing secrets into the agent sandbox, even with clone-mode read-only mounts.

References: [Docker isolation](https://docs.docker.com/ai/sandboxes/security/isolation), [Docker settings](https://docs.docker.com/ai/sandboxes/configuration/settings/), [Codex integration](https://docs.docker.com/ai/sandboxes/agents/codex/), [security bulletins](https://docs.docker.com/security/security-announcements/), [v0.49.1/release changes](https://docs.docker.com/ai/sandboxes/release-notes/).

## 2. Harmless booking-v1 isolation smoke — before agent execution

**Input:** an explicitly sanitized, checked-out booking-v1 fixture with known baseline tree hash, no private keys or credentials, no held-out tests, no arbitrary external tasks. Keep hidden oracle out of all agent-mounted/shared paths.

Suggested operator-only tests in this order (implement as repeatable scripts in the *future app repo*, not the public web app):

1. **Workspace boundary:** write a synthetic marker to a disposable host directory *outside every mount*; inspect sandbox mounts and attempt **read/write denial** from guest by known path. Do not touch or enumerate real host secrets. Also test that guest cannot access unrelated host home paths, private env files and workspace-adjacent directories. Record actual commands and exits.
2. **Credential and side-channel boundary:** Docker proxy-authenticated Codex can access inference while guest cannot read actual key/token bytes; use a **synthetic credential sentinel** for detection and confirm no host SSH-agent forwarding/signing, privileged host Docker socket, keychain access or host-side MCP command path. Do not upload sentinel values to the model.
3. **Egress policy:** from guest, documented approved model endpoint works only when allowed; intentionally disallowed synthetic test domain fails. Repeat grading with **network unavailable**. Capture allowed/denied policy observations; don't confuse default host policy with observed isolation.
4. **Protected oracle:** evaluator and heldout test files invisible/unwritable by agent. Visible test modification must not change protected grading outcome. Grade *copied final source snapshot*, not the agent's own claimed test output.
5. **Lifecycle:** bounded minimal safe shell test, timeout, cancellation, termination and cleanup; observable exit codes, logs, deterministic input SHA, result artifact SHA and runner version. This first smoke should require **zero paid model calls**.
6. **Codex positive proof:** only after preceding passes, one bounded tiny **agent** change in disposable booking fixture, with real authorized Codex inference and captured run ID/model/config/patch/final SHA. An interactive prompt proves connectivity but **not** unattended SCBench adapter support.

**Do not mark any item PASS based solely on installation, `sbx run` startup, a CLI flag, an asserted VM design or this Markdown file.** Some properties need an actual attempted denial under test. Report `PASS` / `FAIL` / `BLOCKED` / `NOT_RUN` independently.

## 3. Experiment and external benchmark promotion

**Booking P0:** implement repeatable local run wrapper for a fixed input; two candidate trees A/B that both initially pass the same external oracle; identical model/tools/time/Verify and explicit architecture preparation costs; separate agent sandbox(s) from evaluator and preserve losing runs. Reports link exact post-agent tree, suite/policy and evaluator hash. Aim first valid paired booking run by Oct 30 if safe.

**SCBench P1:** **after** booking success, pin upstream source and JS task; prove ARM64 or measured AMD64, safe Codex automation, pinned upstream tests, JSONL/patch capture, timeouts, bridge networking, grader custody and agent/auth boundary. Existing Docker/Codex connectivity alone does **not** establish this. Stop SCBench by Oct 30 if any hard gate fails. Remote runner/hardened adapter only with documented actual blocker; never fall back to unsafe personal credential mount.

## Run evidence form (for app repo, not fabricated)

| Field | Value |
|---|---|
| Tool/host/sandbox versions, image digest | NOT_RUN |
| Sandbox name, workspace mode, mount inventory (redacted) | NOT_RUN |
| Provider credential proxy, SSH forwarding, egress configuration | NOT_RUN |
| CA image/trust-store security bulletin mitigation | NOT_RUN |
| No-host-secret, no-host-socket, isolation/egress denial tests | NOT_RUN |
| Pure booking baseline test and independent grader | NOT_RUN |
| One actual Codex agent run with cancellation + trace | NOT_RUN |
| Matched A/B evidence and upfront cost | NOT_RUN |
| SCBench optional pilot | NOT_RUN |

No credentials, actual host identifiers or raw hidden tasks should be committed to the planning repository.

**Relevant canonical tickets:** M0.3.1, M2.1.1, M2.2.1, M2.3.1, M2.4.1, M2.5.1, M7.1.1–M7.3.1. These are **not** extra ticket IDs.
