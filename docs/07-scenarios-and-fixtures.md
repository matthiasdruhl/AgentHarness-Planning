# 07 — Golden experimental fixture

## P0 target
A tiny, vetted Next.js booking service with user-linked bookings, minimal auth/session and a database adapter. Source must be legal to use in contest and seeded with stable fixtures. Do not use real customer data.

## Architecture A
Current direct route-to-database coupling; satisfies the **same initial visible acceptance criteria** as B.

## Architecture B
Small authorization/repository boundary candidate; satisfies identical initial acceptance; extra upfront complexity reported honestly.

## Scenario set
- Known roadmap: organization/team roles.
- Alternative scenario: audit/export or provider change, to test over-abstraction.
- **Frozen held-out:** separately authored and hashed prior to candidate selection, concealed from Muse and architectural proposals; e.g. delegated booking access if not used in discovery.
- Negative controls: unchanged single-user behavior, rejected speculative future, legitimately unused module that must not be failed by a naive reachability check.

## Evidence
Document exact requirements, seed source, git commits, oracle checks, file hashes, output paths, permission/isolation logs. A/B run success is not assumed.
