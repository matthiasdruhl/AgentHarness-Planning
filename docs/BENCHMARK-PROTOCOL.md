# Forecode — frozen benchmark preparation protocol

The benchmark design is documented here; **no fixture code or hidden test implementation has been created by this planning change**.

## Workload
Small TypeScript/Next.js booking application with stable single-user booking flow and explicit success criteria. Candidate A uses direct route/db/auth coupling; candidate B introduces a small targeted authorization boundary. Both MUST pass identical current acceptance tests before comparing extension costs.

## Futures
- Planning-visible: organization and role-scoped bookings.
- Negative control: unrelated booking reporting change where adding an abstraction may hurt.
- Hidden held-out: delegated booking access or similarly distinct permission change, **frozen and hashed before candidate selection**; only evaluator sees tests and full hidden spec during optimization.

## Oracle and independence
Trusted evaluator outside agent writable sandbox runs initial/current, future acceptance and regression suites. Never provide agents hidden source or answers. Preserve manifest: fixture SHA, held-out hash/freeze time, evaluator SHA, candidate diff, model/config, seed, tool list, retry policy, time/token/spend ceilings.

## Fair pair
Architectures A/B get matched agent model, prompts except architecture contract, same intended new feature, identical acceptance/oracle/Verify and budgets. Document costs to create B upfront. Report every attempted run, not best-only.

## Metrics
Primary: trusted future-feature task success (pass/fail/unknown). Secondary: regressions, elapsed time, iterations, observed tokens/spend, upfront cost and architectural rule violations. Estimated AST blast radius stays separate and is not a measured duration.

## Interpretation
One comparison demonstrates mechanics, not statistical generalization. Label results measured or recorded; report sample count and possible bias. Negative/control outcomes must remain visible. Do not fabricate convincing split-screen numbers for demo.
