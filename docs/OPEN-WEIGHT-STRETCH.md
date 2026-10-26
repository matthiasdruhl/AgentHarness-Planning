# Optional stretch: Meta open-weight model backend

**Priority: P1, only if P0 is fully functioning and demo-ready.** No open-weight backend, deployment, performance improvement, credit award, or bonus eligibility has been demonstrated yet. This is a *future expansion opportunity*, not a new launch dependency.

## Why consider it?

Forecode's essential Meta Architecture Scientist is already designed to use a verified, eligible Meta-hosted model for proposing a falsifiable architectural hypothesis and adversarial challenge. An optional **Muse Spark Open** (or other authorized Meta open-weight model) backend would test whether the same structured-scientist workflow works with independently hosted open weights. This could demonstrate deployment portability and provide a second model/provider comparison; it is **not** automatically better than Meta Model API. The hackathon FAQ describes a separate **Best Build on Meta Open Weight Models** bonus; category eligibility must be confirmed with organizers, and an open-weight model should perform meaningful project work rather than merely be connected.

## Provider possibilities

- **Baseten:** managed serving path for the organizer-provided identifier `meta-models/muse-spark-open-1026`. Verify model is available, account approved, API compatibility, price/rate limits, licensing, actual bonus eligibility, and any $100 promotional credit status. This identifier is specific to Baseten, **not** the Meta Model API.
- **Fireworks:** potential inference endpoint if the eligible model and appropriate API/rights are actually offered to this participant; promotional details unconfirmed.
- **Modal:** GPU/CPU compute and model-hosting option if a managed endpoint is unavailable or a custom experimental serving environment is worthwhile. It is a bigger operations/security commitment; **do not** move the protected coding-agent grader or Docker Sandbox orchestration to Modal just to claim credits.
- **Meta Model API:** keep as **default P0 backend**, with no changes to experiment evidence authority.

## Preconditions (ALL must be true)

1. All P0 gates pass: new, public, event-created standalone submission repo; observable eligible live Meta model call; hypothesis and challenge UI; safe, honest controlled demo; passing app tests; no blocker on the required 3-minute video; submission readiness well before **Nov 4, 9 PM ET**.
2. **Timebox to a small, reversible experiment**, ideally after the Nov 2 feature freeze only if no P0 regression risk. A bonus category is never worth missing the core submission.
3. Verify license, weights/API terms, model availability, user acceptance/billing and credit expiration; maintain spending ceiling and account monitoring. No assumption promotional credits have arrived.
4. Maintain the same **provider adapter contract** and strict schemas; record actual provider, exact model, model version, prompt version, inference costs/tokens where known, and `live/recorded/template` origin. Do not claim Baseten endpoint = Meta Model API endpoint.
5. Privacy, consent, security, prompt-injection, output validation, rate limiting and no-heldout-prompt rules hold equally for open-weight inference.
6. No change to deterministic regret algorithm, protected evaluator, receipt authenticity, heldout custody, matched Codex A/B budgets or historical measured artifacts.

## Smallest useful experiment

1. Add a **separate optional adapter** in the *newly created event submission app*, behind its already established Meta-scientist interface; keep default hosted Meta backend untouched.
2. Call the open-weight model to produce **one real falsifiable hypothesis plus one distinct challenge** on the *same authorized visible fixture* as the default model. Apply the same schemas, privacy rules and limits. If output invalid, report failure—no silent substitution of a template or Meta-hosted output.
3. Compare correctness of strict schema parsing, coherence, actual inference latency/cost, and disagreement **descriptively**. A demo of a single comparison is not proof of superiority, and runtime model comparison is distinct from the fair downstream Meta-versus-template architectural-value ablation.
4. Only show it in the hackathon video **if** the extra backend is demonstrably stable, genuinely built after kickoff, and materially improves judges' view of the actual Meta tooling. Otherwise keep a short future-work note in README and submit the strong single-backend P0 demo.

## Exit / kill switches

- P0 tests or demo incomplete -> **do not start**.
- Provider access not approved, model unavailable, credits unconfirmed or cost unpredictable -> **stop**.
- Additional inference threatens provenance, hidden test boundary, controlled experiment validity or submission deadline -> **revert the optional adapter**.
- Timebox exhausted or no judge-visible improvement -> **cut** from submission.

## Planning/source boundary

This planning document is conceptual and in the existing planning repository. **Do not copy or vendor it, its example code, machine schema JSON, CI, or pre-event fixtures into the fresh public event submission repo.** Build any optional backend as new, separately attributable hackathon work after kickoff and disclose pre-existing concept in the required video.

Related: [critical path](HACKATHON-CRITICAL-PATH.md), [model integration](05-meta-integration.md), [organizer participant rules](OFFICIAL-PARTICIPANT-RULES-2026-10-26.md), [submission checklist](SUBMISSION_CHECKLIST.md).
