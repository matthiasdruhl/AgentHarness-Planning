# 10 — Security and privacy

The hosted Forecode application **never executes arbitrary code or imported untrusted benchmark tasks**. Architecture suggestions and model output are untrusted data, not authority.

For developer-local experiments: allow reviewed pinned tasks only, isolated writable task workspaces, non-root and no host home/SSH/keychain/Docker socket mounts, protected independent evaluator, fixed budget/time/token/process limits, cancellation, no test-oracle leaks, artifact redaction, no user secrets. Separate model inference/authenticated controller from untrusted code execution. Default-deny network for test scripts; review any exceptions.

**Upstream SCBench Codex hazard:** its guide documents mounting local Codex authentication and disabling the CLI's own sandbox. Do not use stock adapter with untrusted code. Evaluate Docker Sandboxes host-managed credentials and verified outer containment first; if secure noninteractive support is absent, use a hardened adapter only after credential/inner-sandbox testing. A Docker Sandbox may intentionally bypass Codex's inner sandbox; only tested and strong outer isolation can justify that. **No demonstrated isolation = no benchmark agent execution.**

See [full adapter decision and safety acceptance gates](../benchmarks/SCBENCH-SANDBOX-ADAPTER-PLAN.md), [local Mac configuration](LOCAL-MAC-SANDBOX.md).
