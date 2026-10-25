# 10 — Security and privacy

The hosted Forecode application **never executes arbitrary code or imported untrusted benchmark tasks**. Architecture suggestions and model output are untrusted data, not authority.

For developer-local experiments: allow reviewed pinned tasks only, isolated writable task workspaces, verified **guest-to-host microVM boundary** (guest user may have sudo), and no host home/SSH/keychain/host-Docker-socket mounts, protected independent evaluator, fixed budget/time/token/process limits, cancellation, no test-oracle leaks, artifact redaction, no user secrets. Separate model inference/authenticated controller from untrusted code execution. Default-deny network for test scripts; review any exceptions.

**Upstream SCBench Codex hazard:** its guide documents mounting local Codex authentication and disabling the CLI's own sandbox. Do not use stock adapter with untrusted code. Evaluate Docker Sandboxes host-managed credentials and verified outer containment first; if secure noninteractive support is absent, use a hardened adapter only after credential/inner-sandbox testing. A Docker Sandbox may intentionally bypass Codex's inner sandbox; only tested and strong outer isolation can justify that. **No demonstrated isolation = no benchmark agent execution.**

See [full adapter decision and safety acceptance gates](../benchmarks/SCBENCH-SANDBOX-ADAPTER-PLAN.md), [local Mac configuration](LOCAL-MAC-SANDBOX.md).

## Sandbox runtime clarification
As of Oct 25, the operator reports an initialized Docker Sandboxes Codex environment. Do not treat it as containment proof. Inspect current direct/clone/mountless workspace semantics; do not expose `.env` even via read-only cloned host repo. Default SSH-agent forwarding may allow guest signing requests despite private keys remaining on host; disable/verify it for untrusted tasks. Check installed sbx version >=0.42.0 and Oct 21 CA trust-store/image refresh advisory. Distinguish agent-phase restricted inference network from **offline independent grader**. Codex inner bypass mode may be normal inside Docker's microVM; test outer host-resource boundary. Do not remove or reset an existing user sandbox without explicit operator review and backup. See [dedicated booking-first runbook](DOCKER-SANDBOX-BOOKING-FIRST.md).

## Contract Freeze v1 trust granularity
[Normative receipt rule](CONTRACT-FREEZE-v1.md) specifies final-tree, fixture, suite, evaluator, policy and check-artifact SHA-256 plus protected loader custody. An SHA digest or `issuer` string alone is **not authentication**. The agent sandbox cannot reach protected grader; the public UI cannot run any code. Local Codex inference requires restricted approved provider egress; separate grading uses network off. Previous "non-root / no-network" shorthand must not be interpreted as a ban on guest sudo or all agent inference traffic inside Docker microVM. Docker isolation still requires host-boundary negative testing.
