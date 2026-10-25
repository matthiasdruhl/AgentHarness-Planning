# 04 — Forecode web/API contracts (authoritative)

**Machine endpoint registry:** [contracts/api-registry.json](../contracts/api-registry.json); **request/response schemas:** [contracts/schemas/forecode-v1.schema.json](../contracts/schemas/forecode-v1.schema.json), `#/$defs/...`; **semantic/authority rules:** [Contract Freeze v1](CONTRACT-FREEZE-v1.md). Definitions below are normative P0, not illustrative alternative request objects.

All endpoints run in Next.js Node runtime; JSON only with exact strict contract, 65,536-byte max request, origin/CSRF gate for POST, `Cache-Control: no-store`, sanitized requestId logging and per-endpoint limits. No arbitrary file upload or hosted code/agent/sandbox execution. Missing required or extra keys reject; no implicit consent.

| HTTP | Endpoint | Request shape | Successful response shape | Trust |
|---|---|---|---|---|
| POST | `/api/intents/interpret` | `InterpretRequest` ({text,consent:true}) | `InterpretResponse` (`intent-suggestions.v1`) | Meta output suggestions only; never user confirmation |
| POST | `/api/foresight/propose` | `ProposeRequest` ({intents,graph,goal,consent:true}) | `ProposeResponse` (`foresight-proposals.v1`) | Require confirmed intents matching known graph baseline; candidates non-executable |
| POST | `/api/foresight/evaluate` | `EvaluateRequest` ({graph,candidates,scenarios,scoringVersion}) | `DecisionV1` | Pure deterministic versioned modeled estimate, not execution or trusted evidence |
| GET | `/api/demo` | No body | `DemoResponse` (`demo.v1`) | Read-only preapproved sanitized recorded results; all evidence genuine or clearly unavailable |
| POST *(optional diagnostic only)* | `/api/verify/assess` | `VerifyPreviewRequest` | `VerifyPreviewResponse` | Always `authoritative:false`, `INSUFFICIENT_EVIDENCE`; never mint trusted verdict |

## Model behavior

Only a currently authorized, actually observed supported Meta provider response gets `ProviderInfo.mode=live`. Recorded and template modes have explicit provenance and no invented Meta invocation. Provider keys server only. All prompts (including graph summaries) are validated and bounded. An injected code comment cannot change agent policies or create a privileged command. Provider timeouts, abort, quotas or malformed JSON return a documented error (or separately labeled fallback under client opt-in), never a forged successful live response.

## Trust and artifact handling

The protected evaluator runs **only through a local developer CLI** on approved sandboxed fixtures and owns its results. The hosted app reads sanitized, allowlisted bundled records from `src/server/artifacts/` and checks receipt/run/certificate consistency in server-only code. It **does not accept a client-provided SHA as proof of trust**, nor expose hidden oracle, private tests or host credentials. Raw public `POST /api/verify/assess` checks, if implemented, are non-authoritative previews by construction. The P0 may omit that endpoint. No `/api/run-agent`, `/api/execute`, arbitrary git clone, path-based artifact fetch or `sbx` process spawning route.

## HTTP errors

Every non-2xx JSON response uses `ApiError` (`schemaVersion=api-error.v1`, `error={code,message,requestId,retryable}`). Map: 400 invalid JSON/schema/content-type/consent `INVALID_REQUEST`; 413 `PAYLOAD_TOO_LARGE`; 422 `INVALID_REFERENCE`, `UNSUPPORTED_OPERATION`, `UNTRUSTED_EVIDENCE`; 429 `RATE_LIMITED`; 503 `PROVIDER_UNAVAILABLE`; 500 `INTERNAL_ERROR`. Never return raw provider stack, filesystem paths or auth details. Request IDs unique and logged without secrets. Methods outside the registry are rejected; no unvalidated fallback to 200.

## Required route tests

Valid bounded data, missing consent, unconfirmed intents, stale revision, duplicate candidate IDs, mismatched baseline/ref, invalid scoring version, path traversal/symlinks, extra nested keys, provider timeout/quota/invalid JSON, fake receipt/hash, absent recorded artifact, clean-browser accessible demo. The app's Zod request/response definitions must match bundled JSON schema fixtures, including `null` vs omitted fields.

Implementation owners: `src/app/api` routes, `src/lib/contracts` Zod, `src/server/meta`, `src/server/artifacts` protected loader, `src/lib/decision`. Never run tests from a public route.

## Meta Scientist additive HTTP routes (October 25 extension)
The exact strict types and controls are in [API registry](../contracts/api-registry.json):
- `POST /api/foresight/hypothesize`: `ScientistHypothesizeRequest` (confirmed intents, graph, bounded A/B, **non-heldout visibleScenarios**, goal, `consent:true`) → `ScientistHypothesizeResponse` with falsifiable `MetaHypothesisV1`.
- `POST /api/foresight/challenge`: `ScientistChallengeRequest` (same approved graph and intents, candidates, **non-heldout visibleScenarios**, hypotheses, `consent:true`) → `ScientistChallengeResponse` containing **unapproved, not-heldout** `MetaChallengeV1`.
- `POST /api/foresight/interpret-evidence`: `ScientistInterpretRequest` (opaque server-resolved `hypothesisId`, opaque `evidenceSummaryId`, `consent:true`) → `ScientistInterpretResponse`. Server must resolve the opaque ID via a fixed **allowlisted, independently verified sanitized summary** under `src/server/artifacts/`, load and validate the exact **server-stored hypothesis**, hypothesis/run/receipt linkage and freshness, and only then call Meta. No arbitrary client path, client-uploaded summary, hidden test body or direct evaluator access.

As elsewhere, all provider outputs are untrusted and schema validated. Each nested record's provider must agree with the response provider. Missing or forged evidence receives safe 422, not a fictional interpretation; provider unavailable 503. The hosted API still **never** executes coding agents or arbitrary shell. [Detailed protocol](META-ARCHITECTURE-SCIENTIST.md).
