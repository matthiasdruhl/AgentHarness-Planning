# Forecode benchmark program

**Planning only. No public benchmark suite or custom application has been run.**

- [Public benchmarks and task choices](PUBLIC-BENCHMARK-STRATEGY.md)
- [SCBench Apple Silicon issues](SCBENCH-MAC-COMPATIBILITY.md)
- **[SCBench Docker Sandbox–first adapter plan](SCBENCH-SANDBOX-ADAPTER-PLAN.md)**
- [External fairness/run protocol](PUBLIC-RUN-PROTOCOL.md)
- [Custom booking-v1 fixture and executable build tickets](booking-v1/README.md)
- [Local M4 Pro sandbox settings](../docs/LOCAL-MAC-SANDBOX.md)

Primary external pilot is a small verified SlopCodeBench JavaScript iterative task subset, **conditional** on authenticating Codex without credential leakage, safe sandbox execution, ARM64 or measured AMD64 support, and independent grading. Owner reports Docker Sandboxes + Codex already initialized; **inspect existing setup and validate controlled booking-v1 agent execution first**, not a repeat install. This is not proof of SCBench adapter or safe isolation. Only promote Docker Sandboxes to external integration after real containment, host-auth proxy, original grader and unattended run/cancellation evidence. Harden the upstream Codex adapter only if necessary. Abort external pilot if unsafe or infeasible; do not report absent results as performance gains.

Keep original upstream tests intact. Fixed checkpoint ordering and test oracle withheld until grading. Same coding model, budget, prompt conditions except Foresight treatment, and Verify checks between baseline and Forecode. Include upfront Foresight cost.

## Current phase
Go to [booking-first Docker Sandbox operator runbook](../docs/DOCKER-SANDBOX-BOOKING-FIRST.md) for local version, October 21 CA update, SSH-agent forwarding and sanitized-workspace gates. An existing Codex sandbox should not be deleted or repurposed for untrusted public tasks without checking whether its workspace is a direct read-write host mount. SCBench stays an optional **P1** after measured booking results.
