# Booking architecture controlled trial protocol

## Main causal question
With the same coding agent, constraints, feedback and task, does an upfront scoped authorization boundary reduce cost or improve success of a future feature without unacceptable regressions? Report only per-fixture results, not generality.

## Arms
A: normal well-written booking implementation with direct service owner checks.
B: initially equivalent app + small authorization boundary suggested by Foresight.
Optional C: A plus user roadmap and high-quality AGENTS.md, to test whether an ordinary roadmap-aware prompt achieves similar results. **C is optional** and not a replacement for main A/B.

## Fairness constraints
A and B must pass initial trusted tests. Same baseline root, API behavior, versioned dependencies, resources, agent model/version, prompts except architecture guidance, sandbox, spending/timeout/retry caps and independent Verify checks. B's architecture proposal, refactor tokens/time and verifier costs included. Do not confer future-change requirement to B earlier than A except for explicit confirmed roadmap given equally to both (isolate architectural treatment). Distinguish analysis of product workflow (Forecode vs plain agent) from architecture effect (A vs B under identical Verify).

## Procedure
1. Freeze test oracle, public known tasks and opaque held-out commitment/hash before seeing experiment results; record commit timestamps.
2. Clone A and B to disposable workspaces. Apply architecture adaptation to B and measure upfront. Initial requirements pass for both; record time/config.
3. At each future requirement, run matched agent prompt, same budget and Verify. Stop at caps; preserve all outcomes.
4. Isolated evaluator regrades from clean seed+patch. Refrain from exposing withheld tests.
5. Run planned S1; separately run S2 from appropriate matched clean states. Reveal S3 only after architecture frozen and baseline specs/hashes committed.
6. Generate certificate with scenario assumptions, upfront+downstream costs, success, regressions and limitations.

## Metrics and decision
Primary = trusted future feature pass at cap, retaining all prior requirements. Secondary = regressions, actual elapsed time, task iterations, token/cost when measurable, reviewed files, boundary constraint violations, documented B upfront burden. Fewer changed files does not prove better architecture. One paired run = demonstration, not statistical confidence. Any losing/equal result must remain in final report.

## Integrity hazards
- Do not write hidden spec openly before use.
- Do not permit Meta future challenge generation to read held-out source.
- Do not use B's own Verify improvements vs A's weaker checks.
- Do not compare to external benchmark leaderboard models with different budgets and tasks.
- No sandbox attestation => no real rollout and no performance claim.
