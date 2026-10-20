# 14 — Implementation test matrix and release gates

All tests are planned; no application code or test results exist in this planning repository. Standard CI must run without billable Meta calls. External API contract smoke runs manually with explicit budget approval.

## Unit tests
| ID | Unit | Input | Expected result |
|---|---|---|---|
| U01 | Trace schema | known-valid F1 | parses and retains event IDs |
| U02 | Trace schema | duplicate event ID | rejects with path |
| U03 | Trace schema | unknown schemaVersion | rejects, no silent migration |
| U04 | Trace schema | oversized text/event count | rejects, safe error |
| U05 | Timeline normalization | out-of-order timestamp but ordered seq | preserves seq, reports inconsistency |
| U06 | Tool status rule | `run_tests.exitCode=1` then success final | observes false-success signal |
| U07 | Tool status rule | `run_tests.exitCode=0` then success final | no false-success signal |
| U08 | Missing data | missing exitCode/status | UNKNOWN, not PASS |
| U09 | Evidence validator | existing ids `e4,e5` | accepts candidate refs |
| U10 | Evidence validator | nonexistent `e99` | rejects affected finding |
| U11 | DSL parser | supported op and allowlisted params | parses |
| U12 | DSL parser | `eval`, `shell`, arbitrary code string | rejects |
| U13 | Replay | 3 fixtures x baseline/guard x 5 runs | identical normalized output digest per input |
| U14 | Replay | forged trace with matching scenario ID | cannot grant replay access |
| U15 | Fix mapping | wrong policy for fixture | 422 unsupported pair |
| U16 | Report | only excerpt export | excludes full raw text by default |
| U17 | XSS | HTML-like tool output | rendered as plain text |
| U18 | Prompt injection | trace says 'ignore instructions' | never becomes executable action |

## API integration tests (mock provider transport)
| ID | Endpoint | Condition | Expected |
|---|---|---|---|
| I01 | /api/analyze | valid F1, structured mocked Muse output | 200 with provenance mode=live **only if mock clearly tagged test environment** |
| I02 | /api/analyze | malformed body | 400 `INVALID_JSON` |
| I03 | /api/analyze | >256 KiB | 413 before parsing |
| I04 | /api/analyze | missing API key | 503 `META_NOT_CONFIGURED` |
| I05 | /api/analyze | provider 429/503 | bounded retry/error; no secret leak |
| I06 | /api/analyze | provider invalid schema | 502 `MODEL_RESPONSE_INVALID` |
| I07 | /api/analyze | fabricated IDs | affected finding removed with validation warning |
| I08 | /api/replay | bundled valid request | 200 deterministic verdict |
| I09 | /api/replay | arbitrary imported scenario | 422 |
| I10 | /api/verify | permitted policy on F1 | baseline failure, after guard policy pass |
| I11 | /api/verify | arbitrary injected fix code | rejects, no execution |

Note: production provenance should not mistake mocked test response for a truly live Meta response; explicit `transportKind` or fixture tag belongs in test internals, and production never exposes mock mode as live.

## UI E2E flow
1. Load landing -> choose False Success.
2. Timeline contains failing `run_tests` event and incorrect final claim.
3. Diagnose with mocked valid structured provider -> finding card points to event IDs.
4. Click evidence ID -> scroll and focus matching event.
5. Review DSL candidate; click Run baseline -> assertion FAIL.
6. Activate `require_passing_tests`; click Verify -> policy assertion PASS; underlying failed test text remains present.
7. Export report -> correct schema version, model mode, fixture hash and caveat.
8. Import invalid user JSON -> useful error without crash. Import valid unsupported trace -> Analyze available, Replay unavailable with reason.

## Manual pre-release
- Actual model invocation on F1 with valid key and real request ID; note date/model/cost.
- Mobile viewport and desktop 1440px; keyboard-only walkthrough, basic screen reader labels, high contrast.
- Privacy: devtools confirm Meta key is absent and user trace not in analytics/storage.
- Security: no executable process path, no user-provided URL fetch, no server raw-body logs.
- Public deployed URL in incognito; simulated provider outage and offline experience; no CDN cache of analysis.
- Screen recording and submit links open without developer login.

## Release criteria
All P0 unit/API/E2E tests pass with recorded evidence; primary live analysis succeeds at least once or fallback explicitly disclosed; deterministic demo always works; key/budget safeguards validated; report does not overclaim. Maintain a dated checkmark sheet in the implementation repo; do not mark planned tests 'passed' until executed.
