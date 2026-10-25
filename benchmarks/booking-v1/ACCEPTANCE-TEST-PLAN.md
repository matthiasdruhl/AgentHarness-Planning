# Booking v1 — concrete test oracle plan

Tests are specified in advance and **implemented only after competition rules permit**. The independently controlled evaluator keeps hidden test source out of agent workspace; visible tests may assert documented baseline behavior. No execution yet.

## Current P0 matrix
| Test ID | Given / action | Trusted expectation |
|---|---|---|
| B001 | Alice lists | b-a1 only, sorted; never b-b1 |
| B002 | Bob gets Alice's booking | NOT_FOUND 404; existence not leaked |
| B003 | Bob cancels Alice booking | NOT_FOUND; state unchanged |
| B004 | Create valid room-1 11:00–12:00Z | active booking owned by viewer |
| B005 | Create room-1 10:30–11:30Z while active b-a1 | CONFLICT 409; state unchanged |
| B006 | Cancel b-a1 then book same slot | succeeds |
| B007 | Cancel already-cancelled booking | idempotent cancelled |
| B008 | No trusted viewer | UNAUTHENTICATED 401 |
| B009 | Invalid resource/time/title | INVALID_INPUT 400 |
| B010 | List with equal start times | deterministic ID tiebreak; status explicit |
| B011 | Slot [11:00,12:00) after [10:00,11:00) | no overlap |
| B012 | Concurrent conflicting creates in same store | at most one successful active booking |
| B013 | Synthetic UI form error and cancel | keyboard-accessible, no raw errors |
| B014 | Unknown booking id | NOT_FOUND regardless viewer |
| B015 | Agent writes 'tests pass' while required test fails | verification REJECTED |
| B016 | Agent changes local test files | independent evaluator unaffected |

## Future acceptance outlines
S1: current B001–B016 remain satisfied; org membership/roles matrix includes allowed member viewing, denied external viewing, revocation denial, admin cancel, member cancel denial, personal booking backward compatibility and cross-tenant resource isolation.
S2: summaries count active and cancelled correctly, group by resource, only viewer-owned bookings; CSV escaping and deterministic ordering if implemented.
S3: actual hidden evaluator suite written privately before selection, protected from optimizer and agent; publish hashes only.

## Technical checks and trust
- Visible tests: baseline domain and API test support available to both arms.
- Hidden grader: independent process applies candidate diff to pristine seed and runs untouched tests, with no writable test source mounted into agent workspace.
- Typecheck/build, regression, functional and boundary checks clearly identified in `verification.v1`.
- Agent-supplied JSON check results and stdout 'success' have zero verdict authority.
- Heuristic TODO/mock/any scanner produces warnings only. Dynamic route runtime checked by integration tests where necessary.
- Test scripts are only executed under reviewed isolated sandbox, even if from public benchmark.
- Mutations of test directory or fixture metadata by agent must invalidate experiment artifact when scoring; no retries that leak hidden expected assertions.

## Exit and reproducibility
Check initial fixture clean checkout and intentional defect failures. Record test SHA, runner SHA, snapshot SHA, seed and observed exit code. Tests are planned; results must never be prefilled PASS.
