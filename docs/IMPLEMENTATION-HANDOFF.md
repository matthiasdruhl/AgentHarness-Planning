# Implementation repo + Codex handoff

**Planning only; implementation repository is not assumed to exist.** Final organizer rules and legal/IP constraints override this document.

## Launch gates (M0)

1. Read [organizer-confirmed Oct 26 rules](OFFICIAL-PARTICIPANT-RULES-2026-10-26.md). Official kickoff at **Oct 26 noon ET has passed**; fresh event-built code is now permitted. Log organizer rules, approved collaborators, selected one track, licensing and 3-minute demo before publishing.
2. Verify *actual* Meta endpoint/model access and budget with a schema-valid response. Keep all tokens, credentials and billing limits server-side.
3. Create a **fresh public, standalone SUBMISSION repo after Oct 26 noon ET kickoff**; do not use an existing codebase or its history. Create an event-authored `docs/SPEC-LOCK.md` containing external planning repo URL + **immutable PLAN_COMMIT_SHA** (as references only), kickoff/build-start time, explicit pre-existing planning disclosure, accepted third-party rights and signed-off owner. Add event-authored `docs/BUILD-PROVENANCE.md` listing created-after-kickoff files/features. Never commit pre-event planning files themselves.
4. Give Codex the pinned **external** planning snapshot as **read-only reference** through repository link or operator context. **Never copy prior files, JSON Schema, CLI scripts, documentation, fixtures, recordings or Git history into the submitted repo**. Reimplement equivalent app contracts and CI tests as newly authored event work; keep evidence of when the code was generated.
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

## Exact October 26 contract freeze gate
**Pin merged plan commit SHA after PR review**. Point the app-repo Codex agent to pre-event [machine schemas](../contracts/schemas/forecode-v1.schema.json), [API registry](../contracts/api-registry.json), [normative cross-record rules](CONTRACT-FREEZE-v1.md) and [valid/invalid CI fixtures](../contracts/README.md) for **read-only architectural guidance; do NOT vendor/copy them into the new submitted repository**. Before implementing M1.3, run `cd contracts && npm install --ignore-scripts && npm test`; then **recreate comparable test fixtures from scratch in the event-created app repository** (no copying pre-event fixtures). A Zod schema that parses the old shorthand examples is insufficient. M3 must implement receipt custody/state machine; M5 exact v1 scoring rubric; M6 consent/provider fields; M7 distinct A/B and Meta contribution manifests. **No actual sandbox/Meta/evaluator validations are implied by this documentation gate.**

## Meta Scientist kickoff scope (Oct 25 overlay)
The new [Meta Scientist protocol](META-ARCHITECTURE-SCIENTIST.md) is **P0 for hypothesis and adversarial challenge**, with interpretation conditional on *actual receipt-backed* local experiment. New *additive* exact shapes in [catalog](../contracts/schemas/forecode-v1.schema.json), new endpoint declarations in [registry](../contracts/api-registry.json) and conformance fixtures. In app: `src/server/meta/hypotheses.ts` and `challenger.ts`; an `interpret.ts` endpoint must use **only** `src/server/artifacts/` allowlisted summaries. Do not accept client-uploaded evidence text. Scope reused M6.1–M6.4/M6.6; no new ticket IDs or automatic multi-agent loop. Implement the first real eligible Meta inference early and preserve prompt/result/provenance. Do not skip independent booking evaluator or introduce public sandbox execution to ship this addition.

## Official organizer rule override: NO pre-event artifact reuse in submission (Oct 26)
New event-built work only: fresh **public** standalone repository; build after Oct 26 **12 PM ET** kickoff; pre-existing planning repo is NOT the submission. Never direct Codex to clone planning repo into app workspace and `cp` or transplant its schema JSON, TS types, tests, README, CI workflows, fixture code, hidden grader, sample outputs or history. Resolve interface requirements from prior concepts, **author implementations and app-specific contracts afresh during event**, and keep file-by-file provenance in a newly authored BUILD-PROVENANCE.md. Do not show pre-event functionality in demo. Only organizer-approved humans may contribute; solo allowed, team cap 4. Choose single Indie/Startup track. First line of 3-minute video must disclose pre-event concept/planning versus new code/features. Explicit new-work reference: [official participant rules](OFFICIAL-PARTICIPANT-RULES-2026-10-26.md).

**Updated Codex ticket prompt prefix:** "The Meta hackathon started October 26, 2026 at noon Eastern. Write **all submitted source, tests, fixture and app/docs files afresh**, after kickoff, into the fresh public submission repository. Treat AgentHarness-Planning strictly as an external read-only *design reference*, NOT code to copy/vendor/commit. Preserve honest provenance; do not copy prior snippets, scripts, schema JSON, fixtures or Git history. Use verified approved human collaborators only; no hidden grader leakage or mock results represented as measured."

Meta AI model contribution is weighted **equally at 25%** with impact, depth/execution and demo. Confirm live eligible Meta model access, credits/card and limits; **Muse Code or Codex as coding aid alone does not prove meaningful Meta runtime integration**.

## Optional P1 backend only if P0 complete
Open weights are **not a required Codex milestone or blocker**. If P0 ships early, consider one additional **newly authored** adapter in the **fresh public event submission repo** to serve Meta Muse Spark Open via verified Baseten `meta-models/muse-spark-open-1026` (or another approved provider). Preserve the same Meta hypothesis/challenge semantics and provider evidence. Do not migrate experiments from safe local Docker Sandboxes to a new platform without independent safety proof. Bonus category eligibility and promotional credits require actual organizer/provider verification. **Read [stretch protocol](OPEN-WEIGHT-STRETCH.md)**; return to video polish whenever this threatens P0.
