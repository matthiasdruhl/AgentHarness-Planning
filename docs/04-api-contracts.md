# 04 — HTTP API contracts (Next.js server route handlers)

All JSON endpoints use `Content-Type: application/json`; response includes `X-Request-ID` generated server-side. No long-lived session IDs or persistence. Validate *all* request bodies on server and cap raw body bytes before JSON parsing. Same-origin access only in MVP.

## GET /api/health
Returns 200 `{"status":"ok","schemaVersion":"health.v1","metaConfigured":true,"demoFixturesAvailable":3}`; `metaConfigured` means env key exists, **not** that external connection was verified. No tokens or secret names/lengths emitted.

## POST /api/analyze
Request:
```json
{"schemaVersion":"analyze-request.v1","trace":{"schemaVersion":"trace.v1","traceId":"...","source":{},"agent":{},"events":[]},"mode":"live"}
```
`mode` must be `live` for this route. A client-supplied `recorded` mode is rejected; local demo recordings are fetched from static fixtures and explicitly labeled. Response 200:
```json
{"schemaVersion":"analyze-response.v1","analysisStatus":"verified_schema","analysis":{},"deterministicSignals":[],"validationWarnings":[],"provenance":{"provider":"meta","model":"muse-spark-1.3","mode":"live","requestId":"...","latencyMs":0,"inputTokens":null,"outputTokens":null}}
```
`analysisStatus` reflects **schema/evidence validation**, not truth. If some candidate findings fail evidence validation, filter only those and return warnings; never quietly invent replacements. Completely invalid response -> 502 `MODEL_RESPONSE_INVALID`.

## POST /api/replay
Request matches `replay-request.v1` in data contracts. Server accepts only `scenarioId` of bundled fixture and policy booleans; assertion from allowlist. 200 returns `replay-result.v1`. For unsupported ID or corrupted hash: 422 `UNSUPPORTED_SCENARIO`. Never accept raw `events` for execution. Deterministic replay must not invoke Meta.

## POST /api/verify
Request:
```json
{"schemaVersion":"verify-request.v1","scenarioId":"false-success","assertion":{"op":"require_pass_before_success","toolName":"run_tests"},"policyFix":"require_passing_tests"}
```
Server derives baseline policy for the scenario and after policy by activating the single allowlisted fix. Response 200 `verify-result.v1`, including both runs and `claimScope:"policy_enforcement_only"`. Reject unsupported scenario/fix pairs rather than silently applying arbitrary patch.

## Error envelope
```json
{"error":{"code":"VALIDATION_ERROR","message":"Trace contains duplicate event id.","details":[{"path":"trace.events[2].id","reason":"duplicate"}],"requestId":"req_123"}}
```
Errors: 400 `INVALID_JSON`; 413 `PAYLOAD_TOO_LARGE`; 422 `VALIDATION_ERROR` / `UNSUPPORTED_SCENARIO` / `UNSUPPORTED_ASSERTION`; 429 `RATE_LIMITED`; 502 `MODEL_RESPONSE_INVALID` / `MODEL_UNAVAILABLE`; 503 `META_NOT_CONFIGURED`; 504 `MODEL_TIMEOUT`. Avoid returning provider raw errors or sensitive snippets. Include `Retry-After` when known.

## Limits and request mechanics
- Raw body <=256 KiB; trace <=150 events; per-event text <=8,000 characters.
- Analysis one in-flight request per browser click; server soft IP rate limit (best-effort, process-local; no distributed guarantee). Add cost guard via env `MAX_LIVE_ANALYSES_PER_SESSION` best-effort UI, **not security enforcement**.
- Provider timeout initial target 25s, with retries only if remaining total deadline permits; user-visible timeout should be <= route platform max. Default SDK automatic retries disabled to avoid stacking retry loops.
- `Cache-Control: no-store` on analysis responses; no API keys client-side. Avoid CDN caching user inputs.
- JSON validation and error format covered by integration tests; idempotent replay/verify given same versioned fixture.

## Explicit prohibition on execution API (P1)
T15 is strictly a developer-invoked isolated **local CLI**. No `/api/execute`, `/api/run-agent`, browser launcher, hosted worker, arbitrary command endpoint or replay-by-upload is authorized. The public `/api/replay` contract remains limited to bundled immutable scripted scenarios. Optional experiment results enter the interface as sanitized **read-only report artifacts**, not jobs or tool requests. See [27](27-real-agent-experiment.md).

## P1 API non-extension
The controlled experiment described in [27](27-real-agent-experiment.md) has **no execution endpoint**. The local CLI is invoked by the developer; sanitized measured results are optional read-only artifacts. Existing analyze/replay/verify contracts remain unchanged. Neither uploaded trace events nor model-generated programs are ever executable through the app.

## Verification-first composition (P0)
The deterministic `completion-verdict.v1` is computed locally from normalized evidence before an `/api/analyze` request, so the judge sees a verdict without waiting or spending credits. Keep the existing API routes exactly as documented. If the route reuses verdicts for exports, add a strictly parsed **optional** `completionVerdict` response/report field and update contract tests in the same commit; never silently break `analyze-response.v1` consumers. No new `/api/verify-agent` or executable user-input endpoint is implied.
