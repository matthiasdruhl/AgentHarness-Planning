# Forecode — submission-first Meta hackathon plan

**Updated October 26, 2026 after participant rules.** This document sets hackathon priorities, while M0–M10 and the 68 numbered tickets remain the full technical backlog. It is not evidence that code or experiments exist.

Official event: https://dev.meta.ai/events/global-hackathon . **Build begins only after October 26 noon ET kickoff**, through November 4, 2026; deadline November 4 at 9:00 PM Eastern, subject to organizer changes. Final rules/portal prevail. The event crosses a daylight-saving transition on November 1. Intended entry is **Indie Developer / Push the Frontier**, pending eligibility and final choice. Do not use unverified percentage judging weights.

## The single judge-visible outcome

A developer confirms a future requirement; an eligible live Meta model proposes a **falsifiable** architecture hypothesis and **actively challenges it** with a counterexample; Forecode explains explicit alternatives and uncertainties; an independent evaluator checks one *real* controlled coding-agent evolution; a certificate displays actual checks, upfront cost, losses, scope and provenance. B is allowed to lose. Evidence is more valuable than staged savings.

## Execution-ready supporting plan (Oct 27)

Use **[PR-sized feature queue](IMPLEMENTATION-QUEUE-2026-10-27.md)**, **[architecture experiment preregistration](ARCHITECTURE-TOURNAMENT-PROTOCOL.md)**, **[judge evidence checklist](JUDGE-SUCCESS-GATES.md)**, **[rules verification and eligibility](RULES-VERIFICATION-2026-10-27.md)**, and **[stretch decision gates](STRETCH-PROMOTION-GATES.md)**. They add explicit owner/merge decisions and contingency dates without replacing this critical path or the 68 canonical tickets.

## Must-ship P0

- Verify final rules, allowed prebuilt assets, team/track, Meta model and budget. Preserve an observed schema-valid Meta response or plainly label a recorded-provider fallback.
- Create a small working TypeScript/Next booking fixture and separately protected evaluator. Required checks must bind to the exact evaluated code, test suite, policy and evaluator; stale or forged evidence cannot certify success.
- For every permitted real-agent experiment, bind an **operator-approved pre-run execution envelope** to task/arm/source, independently enforced sandbox/budget/egress controls and the eventual final-tree/evaluator receipts. Reuse current safety gates; do not add a separate security subsystem or delay the first real run for a decorative manifest. See [execution authorization overlay](EXPERIMENT-EXECUTION-AUTHORIZATION.md).
- Produce at least one fair A/B run **if sandbox isolation is proven**: same future task, agent/model, tools, budgets and Verify for both; include B's preparation cost. If isolation fails, explicitly say the empirical claim was not validated.
- Present status quo/no premature abstraction and B with transparent modeled effort, **one Meta hypothesis with disconfirmation criteria**, and **one Meta-generated but unapproved adversarial challenge**. Never represent a model challenge as independent held-out evaluation.
- Include a strong equally informed non-Meta roadmap/template comparator if asserting *Meta adds measurable advantage*. Otherwise limit the claim to Meta proposing a hypothesis.
- Deliver a single usable browser workflow: intent -> Foresight -> real recorded run/verification -> scoped certificate. Hosted web never runs arbitrary code. Record 3-minute demo, publish judge links and capture receipt.

## Conditional (only after P0)

More scenarios/repeats, full TS/Next dependency graph visualization, one security-approved SlopCodeBench JS checkpoint sequence, additional feedback-loop ablations, sophisticated animations.

## After hackathon

Multi-language/general repository execution, hosted sandboxes, automatic broad refactors, more public benchmark suites, multiuser persistent service.

## Critical-path calendar

| Day | Gate and fallback |
|---|---|
| Oct 26, **after noon ET kickoff only** | Create brand-new **public standalone submission repo**; keep pre-event planning/code out; authored BUILD-PROVENANCE + SPEC-LOCK; fresh app skeleton/tests; verify Meta model and credits (actual inference if provisioned) |
| Oct 27 | **Inspect existing user-reported Codex sandbox**, verify patched tool/image, safe sanitized booking fixture, protected oracle and synthetic host-access denial probes; no reinstall-by-default |
| Oct 28 | **First booking Codex sandbox smoke** under fixed limits if isolation passed; record real run and independent evaluator artifact; test tampered/missing/stale evidence |
| Oct 29 | Live/recorded Meta hypothesis + challenge with explicit falsification, status quo and template control; first browser vertical slice |
| Oct 30 | First valid booking A/B pair if safe; **SCBench go/no-go only after booking success**; stop external integration if unsafe or incompatible |
| Oct 31 | Strong roadmap-aware baseline comparison if affordable, first video draft |
| Nov 1 | Honest second/negative or genuinely held-out challenge only if already frozen |
| Nov 2 | Integrate/read-only deploy/E2E; **feature freeze** |
| Nov 3 | Rehearse clean judge session, video and recorded offline fallback |
| Nov 4 | Smoke, secret scan, exact portal requirements, submit early, save confirmation |

**Kill switches:** No official permission -> no disallowed development. No tested isolation -> no agent/untrusted test run. No matched pair -> no measured architecture-improvement claim. No strong comparator -> no Meta-superiority claim. No heldout custody -> no blind-generalization claim. Cut extras before dropping safety or measurement integrity.

See [handoff](IMPLEMENTATION-HANDOFF.md), [contracts](CANONICAL-IMPLEMENTATION-CONTRACT.md), [demo](DEMO-ACCEPTANCE.md), and [audit tracker](AUDIT-REMEDIATION.md).

## Setup status and runner order (Oct 25)
The owner reports Docker Sandboxes installed and a Codex sandbox initialized. **Reported installation is not verified isolation or a measured run.** The preferred next step is [non-destructive inspection + booking-first experiment](DOCKER-SANDBOX-BOOKING-FIRST.md), not another sandbox framework or prematurely integrating SCBench. Existing sandbox should be preserved; use a separately sanitized experiment workspace/clone or mountless instance if the existing one has broad host mounts or secrets. A safe booking fixture and independent grader are P0; SCBench is P1. Never automatically delete/replace user sandbox to refresh a patched image.

## Meta as product's essential engine — narrow P0 overlay
[Meta Scientist plan](META-ARCHITECTURE-SCIENTIST.md): generate candidate → falsifiable hypothesis → counterexample challenge. Evidence interpretation is **conditional** on verified real booking receipts and may not displace any independent-evaluator milestone. Adaptive experiment selection, multi-agent debate and iterative autonomous refactors are **P1**. The demo should make it clear which architectural *questions Meta raised*, what Codex implemented and what the evaluator actually established. Existing 68 ticket IDs and feature freeze remain unchanged.

## Rule correction: standalone event-created work ONLY
The participant FAQ and organizer clarification are recorded in [official participant rules](OFFICIAL-PARTICIPANT-RULES-2026-10-26.md). **Never submit this planning repository or copy its pre-event contract scripts/synthetic fixtures/JSON schema as submitted code.** Start a new public repo created **after kickoff Oct 26 noon ET**; implement everything shown in video as newly generated event work. Keep pre-event architecture concept external and disclose it in first line of 3-minute video. All human contributors must be approved; no late collaborator invitations. Four judging dimensions are **impact, Meta tooling, technical execution and demo**; **exact scoring weights are disputed in current planning sources** (participant notes say 25/25/25/25; public waiver recaps say 30/25/20/25). Verify the accepted organizer rubric and document its source before presenting either as official. An excellent 3-minute demo and *actual* substantive Meta API/open-weight inference are top priority, not optional polish. Hard submit Nov 4 9 PM ET. State organizer rules as provided rather than stale "verify tomorrow" instructions.

## P1 only if ahead of schedule: optional open-weight Meta inference
Once the P0 product, controlled evidence (if safely achievable), and **3-minute submission demo** are stable, optionally evaluate a **Muse Spark Open** backend via Baseten or other approved serving infrastructure. This is **not** a prerequisite for the main Meta Model API flow and must not displace the Nov 2 feature freeze / Nov 4 submission. The model still powers hypothesis/challenge reasoning; protected evaluator stays independent. See [open-weight stretch protocol](OPEN-WEIGHT-STRETCH.md), including hard stop criteria and organizer's new-work-only repo rule.

## Muse Code feasibility overlay — hard time-box, not P0 dependency
Use [Muse Code integration criteria](MUSE-CODE-INTEGRATION.md) without changing the **Oct 30 paired-run target, Nov 2 feature freeze or Nov 4 submission**. **Oct 27:** inventory CLI/version/access/billing and security feasibility in an isolated sanitized guest, without disturbing the user's existing Codex sandbox. **Oct 28:** only after host/egress and protected-oracle tests pass, attempt one small headless Muse booking task with redacted trace, cancellation, exact final-tree hash and independent grading. **Oct 29:** if all gates do not pass, halt Muse integration and continue **both** paired experiment arms on Codex. Muse is conditionally preferred for the judge-visible agent *only if proven safe and reproducible*. Direct Meta hypothesis/challenge remains central regardless.
