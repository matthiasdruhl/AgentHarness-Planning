# 10 — Security/privacy threat model

Trust zones: public browser → Next.js route → Meta API (server-only); local developer runner → isolated coding agent workspace → **separate trusted hidden-test evaluator** → exported limited report.

## Hard controls
- Never run arbitrary uploaded source, user prompts, traces, model-authored commands or URLs in hosted app. Meta text is untrusted suggestions.
- Real-agent experiment **only** via developer-invoked CLI against pinned reviewed fixtures, non-root disposable isolation, network egress off by default, no host mounts/secrets, tool/command allowlist, resource/time/token/spend caps and kill switch.
- Test oracle must be inaccessible for agent edits. Read-only tests inside writable agent-controlled container are not enough; inject separately after candidate finalized.
- Allowlist structural architecture constraints; no eval, arbitrary template/regex execution, dynamic code generation as policy, path traversal or shell-string construction.
- Provider key server-only, no exposed NEXT_PUBLIC secret. Restricted live requests, response size caps, rate/spend limits. Disable public live calls if safeguards unavailable.
- Intents/conversations opt-in only; no automatic ingestion from third-party chats. Store locally for demo unless consent and security design exists; support edit/delete, no secret or PII upload by default.
- Treat code/comments/docs as prompt injection. Sanitize logs and reports, never publish proprietary code or hidden tests. Separate public report from local sensitive artifacts.
- Lock versioned fixture hashes, record evaluator version, mark synthetic/recorded/measured distinctly. Provenance validation is essential.
- Failure to establish executable isolation is **stop**, not weaker container fallback.

## Security tests
Malicious Meta response; prompt injection in source comment; fixture tampering; user-provided shell string; path traversal; attempted test modifications; untrusted evidence spoofing; secret exposure; runaway tokens; crash cleanup; bypassed checks.
