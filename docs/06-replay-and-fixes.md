# 06 — Controlled execution, corrections, and safeguards

Legacy synthetic trace replay is **not** the main product. Here 'rollout' means a measured developer-local coding-agent experiment on vetted fixtures.

## Runner
Pinned git fixture → non-root disposable no-network sandbox → allowlisted coding-agent tools/actions → capture changes/trace → trusted evaluator with hidden tests outside agent writable tree → verifier → artifacts. Cap duration, iterations, token/cost and disk. Cleanup even on crash. Never execute uploaded traces or model-authored commands.

## Corrective feedback
For failed trusted checks, render bounded diagnostic data (check id, sanitized type/build error, boundary violation) to agent. Allow 0–2 additional attempts at most, fixed budget and artifact log. Hidden expected answers, test source and held-out task details must not leak into agent context.

## Verification authority
Required checks: typecheck, build, functional acceptance + relevant regressions; boundary rules only if architecture contract requires them. AST stub heuristics are warnings, not categorical proof; import reachability is advisory unless reinforced by runtime tests. Do not block forever, do not claim zero human review.

## Fairness
Foresight A/B uses identical Verify gating and feedback policy. Separate Verify-off experiment may evaluate benefit of feedback; label study and its effects independently.
