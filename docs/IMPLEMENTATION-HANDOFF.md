# Implementation repo + Codex handoff

**Planning only; implementation repository is not assumed to exist.** Final organizer rules and legal/IP constraints override this document.

## Launch gates (M0)

1. Read and accept final organizer rules in the participant portal. Record timestamp, permitted pre-event planning and code, third-party assets, required Meta model usage, track/team restrictions, source license and submission/video format. Do not assume approval.
2. Verify *actual* Meta endpoint/model access and budget with a schema-valid response. Keep all tokens, credentials and billing limits server-side.
3. Create the separate app repo only once permitted. Write docs/SPEC-LOCK.md there with PLAN_REPO, **exact immutable PLAN_COMMIT_SHA**, rule check time, accepted assets, exceptions and signed-off owner. Never implement against floating planning main.
4. Make the pinned planning snapshot accessible to Codex (AGENTS, docs/03, 04, 09, 10, this handoff, critical path, relevant milestone). Do not assume instructions in another repository are automatically visible.
5. Owner **reports Docker Sandboxes installed and a Codex sandbox initialized**. Inspect its actual version, workspace mode, SHA/image patch status, SSH forwarding and safe credentials; **do not reinstall or delete it by default**. Run the [booking-first sandbox gate](DOCKER-SANDBOX-BOOKING-FIRST.md) before any agent task. Freeze booking baseline and withheld test custody.

## One canonical application layout

- src/app/ — Next UI + bounded server APIs, *no command execution*.
- src/lib/contracts/ — strict versioned Zod validation.
- src/lib/intents/, src/lib/graph/, src/lib/decision/ — provenance, limited structural analysis and modeled scoring.
- src/lib/verify/ — pure scoped verdict engine.
- **src/lib/report/** — pure certificate serializer/validator, not src/server/report(s).
- src/server/meta/ — server-only Meta transport; src/server/artifacts/ — trusted read-only artifact loader.
- scripts/evaluator/ — protected oracle outside agent writable workspace.
- scripts/experiments/ — controlled developer-local sandbox/CLI only.
- **fixtures/booking-v1/** — controlled target app, not fixtures/booking.
- tests/ and reports/recorded/ — actual checks and provenance-marked sanitized outputs.

The hosted UI must never import the experiment runner or accept arbitrary clone/shell/run requests.

## First Codex work slices

1. Rules, credentials, spec lock, strict Next skeleton, schemas and no-paid-call CI (M0, M1).
2. Booking fixture + protected external oracle, verdict normalization and negative missing/forgery/staleness tests (M2.1/2.2, M3.1/3.3/3.7).
3. **Reuse inspected Docker Sandboxes/Codex setup** for a dedicated sanitized booking experiment when safe; test no-host-secret, SSH forwarding, patched images, phase-specific egress, cancellation and actual measured fixture run before anything SCBench-specific (M0.3, M2.3/2.4, M7.1).
4. Confirmed intent, observed Meta output, one bounded A/B proposal, strong manual/template comparator (M4.1/4.3, M6.1/6.7).
5. Transparent deterministic decision, paired evidence, certificate, one demo path (M5.6, M7, M8–M10).

This is a **priority overlay** and not permission to skip required dependencies.

## Copyable Codex ticket instruction

Implement ticket [ID] against the exact plan SHA in docs/SPEC-LOCK.md. Read AGENTS, docs/HACKATHON-CRITICAL-PATH.md, canonical contracts, security/evaluation and the full milestone. Inspect actual files first. Own only specified paths and preserve behavior. Add positive, negative and misuse tests. Run actual supported commands and record exit codes; do not run real agents without attested isolation. Return changed paths, test outputs, evidence IDs, commit SHA, blockers and next ready ticket. Never mark tests passed if unrun; never blindly merge because CI is green.

See [demo acceptance](DEMO-ACCEPTANCE.md).

### Immediate Codex assignment after rule approval
Use [operator runbook](DOCKER-SANDBOX-BOOKING-FIRST.md) and ticket `M0.3.1` then `M2.3.1`. Ask Codex to **inspect rather than configure or reset the user's existing sandbox**; no paid/agent commands before a negative-control report. The next small deliverable is an `sbx` capability and policy inventory plus safe fake-secret denials; then the independent booking grader and one bounded agent run. Do not begin a separate hardened SCBench adapter while booking P0 is unproven. Changes to global SSH forwarding settings or sandbox deletion need explicit local operator review.
