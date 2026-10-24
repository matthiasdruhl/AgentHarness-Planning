# 10 — Threat model, privacy and safety controls

## Assets and trust boundaries
Assets: server-side Meta API key, provider credit budget, imported trace text, generated analysis, deterministic replay engine integrity, exported report. Trust boundary A: arbitrary JSON imported in browser; B: client to Next route handler; C: server to Meta Model API; D: model response to parser; E: in-memory fixture runner.

## Priority threats and controls
| Threat | Mitigation | Verification |
|---|---|---|
| Prompt injection in trace text | System message treats trace as untrusted quoted data; parser never makes tool instructions from it; server never executes suggested scripts | adversarial fixture containing 'ignore all instructions' |
| Arbitrary command execution | No shell/process invocation path; no eval or dynamic imports from model/user input; replay is finite pure simulation | search source for risky APIs, negative tests |
| Data exfiltration through model proposals | Only three allowlisted DSL checks/policies; no model-generated outbound URLs or tools; no tools supplied to analysis call | invalid action rejected |
| Hidden API key leakage | server-only `MODEL_API_KEY`, no NEXT_PUBLIC prefix, redact errors, secret scan | inspect production JS bundle and logs |
| Surprise spending / public abuse | live call only on user action, token/body limits, provider spend limit, deploy access/rate controls, abort switch; do not rely solely on process-local IP counter | abuse smoke test + provider limits |
| Personally sensitive uploaded logs | inline notice to scrub secrets, client-side best-effort mask, minimal provider payload, no server persistence/logging; no automatic analytics | inspect storage/network, verify no raw logs |
| Cross-site scripting | text nodes only, no `dangerouslySetInnerHTML`, escape snippets | HTML-like fixture |
| Replay tampering | scenario server loads immutable fixture, sha/digest checked, user payload cannot replace fixture | forged same ID rejected |
| Model fabricated evidence | validator enforces event ID membership and explicitly labels inferences | injected nonexistent IDs |
| Report overclaim | separate observed/model/verified sections; report includes limitation `policy_enforcement_only` | snapshot assertion |

## Handling uploaded trace data
Use synthetic fixtures by default. UI warns imported real traces may contain secrets, PII, code, proprietary data; user must affirm before sending imported data to Meta (distinct Analyze button). Redaction is not guaranteed; model request sends only metadata and bounded excerpts required for analysis. Do not persist uploads in localStorage, database or analytics; do not log request bodies. Report export defaults to hashes/excerpts and user chooses any full text inclusion.

## Network and deployment
Use HTTPS; set `Cache-Control:no-store`; no CORS wildcard; reject cross-site unsafe POST where practical by same-origin/CSRF checks; reject content-type other than JSON. Configure restrictive CSP where compatible with Next.js. Disable any request-access logging of body. Use secrets manager of hosting platform.

**Public inference hazard:** in-memory rate limiting on Vercel/serverless is not sufficient. Before sharing public judge URL either (a) configure hosting/WAF-level or managed distributed rate limiting and a hard provider spending cap, or (b) disable public live analysis, provide recorded mode and privately controlled live demo. The second is a deliberate feature tradeoff; do not claim unrestricted live public API is safe.

## Disaster recovery
If credits exhausted or key compromised: disable `LIVE_ANALYSIS_ENABLED`, rotate key, continue bundled deterministic demo with recorded output labeled. If a malicious trace causes bad output: reject unsafe proposals, preserve evidence, do not execute. If app compromised: disable deployment and rotate credentials; no stored user data expected.

## Hackathon security minimum
Threat model reviewed, key absent from client, no arbitrary execution capability, error paths tested, spending guard configured, input capped, replay provenance validated.

## P1 local-only execution boundary
The public app remains non-executing. The optional developer-local benchmark utility accepts only vetted, pinned synthetic tasks and runs in a verified disposable environment with least privilege, no host secrets, network egress disabled by default, allowlisted tools, limits on resources/tokens/spend and a kill switch. It cannot accept arbitrary uploaded traces or commands. Without verifiable isolation, the experiment must not run. See [27](27-real-agent-experiment.md).

## Verification authority and misleading-success safeguards
The deterministic verification verdict is computed from validated typed trace evidence and is **not overridden by Muse text**, model confidence or a positive policy-guard assertion. Use `INSUFFICIENT_EVIDENCE` when data is absent, unknown or ambiguous. Show `VERIFIED` only for explicitly scoped completion-claim evidence, never imply guaranteed correct code. Maintain clear UI accessibility and provenance; export both the verdict's evidence IDs and the scripted/real measurement distinction. The unchanged public app never executes arbitrary imported agents or model-authored commands. See [28](28-verify-product-north-star.md).
