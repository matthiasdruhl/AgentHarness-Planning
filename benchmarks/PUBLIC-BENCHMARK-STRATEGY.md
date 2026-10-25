# Public benchmark selection and feasibility (2026-10-25)

**Preferred independent pilot:** SlopCodeBench (SCBench) iterative JavaScript checkpoint subset, subject to **real data/task, Docker ARM64, Codex credential-security and grading smoke gates**. Reference: https://github.com/SprocketLab/slop-code-bench .

**Crucial new finding:** Upstream docs show its Codex adapter may mount `~/.codex/auth.json` and use `--dangerously-bypass-approvals-and-sandbox`. **Do not execute the stock adapter against untrusted task code on the owner's machine.** See [full Mac/SCBench feasibility review](SCBENCH-MAC-COMPATIBILITY.md) and [local sandbox plan](../docs/LOCAL-MAC-SANDBOX.md). The owner has M4 Pro/48 GB/~294 GB free, so RAM/disk are unlikely blockers; environment/credential isolation is the real unknown.

| Suite | Role | Gate |
|---|---|---|
| SCBench | P0 conditional JS pilot | reviewed JS tasks, Docker ARM64/amd64 image compatibility, verified sandbox/auth boundary, identical A/B |
| SWE-Milestone | P1 stretch real-world evolution | pinned setup and task subset, safe runner |
| SWE-bench Pro V2 | P1 Verify tasks | not architectural evolution metric |
| SWE-CI | defer | resource-heavy |

Plan: inspect upstream license, configs, `KNOWN_ISSUES`, dataset repository/Harbor release and task scripts; pin SHA; use `--dry-run` and `--num-workers 1`. If tasks unavailable, Codex adapter unsafe or Docker architecture incompatible by Oct 30, **defer external benchmark** and finish booking-v1 controlled evidence. Never interpret 'public benchmark' as automatically safe to execute.

Evaluation requirements: freeze JS task selection criteria before results, use only visible prior checkpoint specs to produce Foresight decision, test later checkpoints independently, preserve official grader or disclose any adaptation, match agent/model/budget/Verify, include design upfront cost and all failures. No fabricated leaderboard comparisons.
