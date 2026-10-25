# Booking v1 — module ownership and architecture candidates

## Proposed implementation layout (application repo only)
```text
fixtures/booking-v1/
  README.md
  src/domain/booking.ts             # shared Booking and command types
  src/domain/errors.ts              # typed business failures
  src/server/booking-store.ts       # cloned, deterministic in-memory persistence
  src/server/booking-service.ts     # create/list/get/cancel
  src/server/identity.ts            # trusted fixture identity mapping
  src/app/bookings/page.tsx         # simple UI
  src/app/api/bookings/route.ts     # GET, POST
  src/app/api/bookings/[id]/route.ts # GET, DELETE or POST cancel
  src/app/api/resources/route.ts    # GET
  tests/visible/*.test.ts           # agent-visible smoke tests
  package.json, tsconfig.json
```
`scripts/evaluator/booking-v1/` belongs **outside** the agent writable workspace. Tested code/endpoint paths may need adjustment for actual Next route conventions; freeze public interfaces before building trials.

## Architecture A — credible direct coupling
Routes validate viewer identity and delegate directly to booking service/store. Owner checks live in service operation functions; shared helpers allowed. No purposeful bugs, repetitive boilerplate traps, or disallowed abstractions. A must pass initial oracle.

## Architecture B — targeted authz boundary
Add a small explicit `BookingAccessPolicy` (or equivalent) with operations `canView`, `canCancel`, `canCreate` and `BookingPrincipal` typed abstraction; service methods depend on it. Avoid speculative organization tables or hardcoding future role names. All initial behavior remains identical. Record actual refactor effort to get B to parity. B may be worse on reporting task; preserve this result.

## Boundary rules
- Domain types never import from `src/app`.
- UI and route handlers do not instantiate hidden test/evaluator code.
- Policy should be invoked in service/domain operations rather than only route UI checks.
- Data repository cannot infer authenticated identity from an untrusted client input.
- No hidden test fixtures or evaluator credentials inside task workspace.
- Boundary violations are declarative and tested; tests verify behavior rather than relying on static reachability.

## Candidate fairness and attribution
A/B experiment isolates architectural policy boundary as treatment. Same initial requirements, UI, storage implementation, dependencies, verifier settings and coding-agent configuration. If B is created by Meta-generated proposal and A is plain baseline, count proposal tokens and B upfront build cost; do not add unrelated polish to B. Store full diff and branch SHAs. Both arms get the same *future-change instruction text*.
