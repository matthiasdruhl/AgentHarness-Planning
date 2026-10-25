# 10 — Security/privacy threat model

Trust zones: public browser → Next.js route → Meta API (server-only); local developer runner → isolated coding-agent workspace → **separate trusted hidden-test evaluator** → exported limited report.

## Hard controls
- Never run arbitrary uploaded source, user prompts, traces, model-authored commands or URLs in hosted app. Meta text is untrusted suggestions.
- Real-agent experiment **only** via developer-invoked CLI against pinned reviewed fixtures, non-root disposable isolation, network egress off for tests by default, no host mounts/secrets, tool/command allowlist, resource/time/token/spend caps and kill switch. **Agent model inference may require networking**: separate privileged controller access from untrusted evaluator/test container, rather than relying on a naive fully-offline agent design.
- Test oracle inaccessible to agent for reading/writing during planning; inject separately after candidate finalized.
- Allowlist structural architecture constraints; no eval, arbitrary template/regex execution, path traversal or dynamic commands sourced from model.
- Provider key server-only, no exposed NEXT_PUBLIC secret. Bounded live requests, rate/spend limits; disable public live calls if safeguard unavailable.
- Intents opt-in; no automatic ingestion of third-party chats; allow edit/delete, no private user data by default.
- Source text is untrusted prompt material; sanitize logs/reports, don't publish oracle or keys.
- Preserve fixture hashes, evaluator version and estimated/recorded/measured provenance; client artifacts cannot mint trusted evaluations.
- **Critical SCBench Codex integration warning:** upstream docs describe mounting `~/.codex/auth.json` and running `codex exec --dangerously-bypass-approvals-and-sandbox`. Do **not** use stock adapter on untrusted tasks until auth is isolated and bypass is removed/justified by demonstrably strong outer isolation. See [SCBench compatibility](../benchmarks/SCBENCH-MAC-COMPATIBILITY.md).
- Failure to establish execution isolation or credential protection is **stop**, not weaker fallback.

## Tests
Prompt-injected code comment; malicious model response; test/oracle tampering; attempt to read fake host credential; Docker socket access; network egress; path escape; timeout and cleanup; leaked tokens; forged check success. Record observed evidence rather than assuming tools are safe.

## Local operating plan
[Mac sandbox configuration and feasibility](LOCAL-MAC-SANDBOX.md) owns **machine-specific proposed limits**, not runtime-verified enforcement. Hosted Next app is read-only for code execution.
