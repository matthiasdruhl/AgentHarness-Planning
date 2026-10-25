# 04 — Web/API contracts

All endpoints Node runtime, Zod validated, JSON only, same-origin POST, explicit HTTP errors and `Cache-Control: no-store`. Hosted APIs **do not execute source code**.

- `POST /api/intents/interpret`: {text, consent:true} → {schemaVersion:"intent-suggestions.v1", suggestions: IntentDraft[], provider, model, mode}; drafts require explicit user confirmation.
- `POST /api/foresight/propose`: {intents:Intent[],graph:Graph,goal} → {candidates:ArchitectureCandidate[],scenarios:Scenario[],provider,model,mode}. Require small bounded input; validate cross references and enum values.
- `POST /api/foresight/evaluate`: {graph,candidates,scenarios,scoringVersion} → Decision, deterministic, pure; no model call.
- `POST /api/verify/assess` is an optional **untrusted diagnostic preview** from supplied checks; it is NOT an authoritative measured verdict. P0 can omit this endpoint. Only evaluator-controlled, fresh artifacts loaded by the server from an allowlisted root can support a trusted VERIFIED report.
- `GET /api/demo`: bundled **recorded** experiment/report metadata without secrets or hidden tests.
- No `/api/run-agent`, `/api/execute`, arbitrary git clone or arbitrary shell endpoints.

Errors: 400 invalid schema, 413 payload too large, 422 unsupported/unsafe proposal, 429 limited, 503 provider unavailable, 500 sanitized. Provider response parser must never mutate trusted check records. Local CLI uses file-based artifacts, not public API to launch runs.

## Trusted report boundary
A protected local evaluator emits a versioned receipt binding post-agent tree hash, suite/evaluator/policy hashes, required checks and result artifact. Only the server's trusted read-only **src/server/artifacts/** loader can display it as measured evidence. No client-provided run ID/path/hash/check JSON establishes trust; no public arbitrary execution. See [canonical contract](CANONICAL-IMPLEMENTATION-CONTRACT.md).
