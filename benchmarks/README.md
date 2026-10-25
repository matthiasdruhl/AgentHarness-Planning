# Forecode benchmark program

**Planning only. No public benchmark suite or custom application has been run.**

- [Public benchmarks and task choices](PUBLIC-BENCHMARK-STRATEGY.md)
- [SCBench Apple Silicon issues](SCBENCH-MAC-COMPATIBILITY.md)
- **[SCBench Docker Sandbox–first adapter plan](SCBENCH-SANDBOX-ADAPTER-PLAN.md)**
- [External fairness/run protocol](PUBLIC-RUN-PROTOCOL.md)
- [Custom booking-v1 fixture and executable build tickets](booking-v1/README.md)
- [Local M4 Pro sandbox settings](../docs/LOCAL-MAC-SANDBOX.md)

Primary external pilot is a small verified SlopCodeBench JavaScript iterative task subset, **conditional** on authenticating Codex without credential leakage, safe sandbox execution, ARM64 or measured AMD64 support, and independent grading. Use Docker Sandboxes first as an *investigation*, not a guaranteed integration. Harden the upstream Codex adapter only if necessary. Abort external pilot if unsafe or infeasible; do not report absent results as performance gains.

Keep original upstream tests intact. Fixed checkpoint ordering and test oracle withheld until grading. Same coding model, budget, prompt conditions except Foresight treatment, and Verify checks between baseline and Forecode. Include upfront Foresight cost.
