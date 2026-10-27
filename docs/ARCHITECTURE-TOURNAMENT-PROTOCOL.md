# ForeCode — precommitted booking architecture experiment protocol
**Planning version:** 2026-10-27 / v0.1. **Status:** draft proposed design, **NOT** a frozen executed experiment, benchmark score or confirmed private holdout. Owner/operator must create an immutable **newly authored in-event manifest in the submitted app repo** with exact values/identities and timestamp **before generating/selecting architectures or executing candidate runs**. Never copy this pre-event planning document or schema to the app repo. Must follow [M7](../milestones/m7.md), [Meta Scientist](META-ARCHITECTURE-SCIENTIST.md), and [protected grader](DOCKER-SANDBOX-BOOKING-FIRST.md).

## Questions, treatments and interpretation

**Study F — future-proofing:** Under the same foreseeable requirement, does the Meta-informed prepared boundary B materially outperform keeping a sound status quo A **after counting B's preparation**?

**Study M — incremental Meta contribution (conditional):** Does B outperform an equally informed, credible **non-Meta roadmap-aware** alternative C? Merely comparing B with weak A is **not** evidence of Meta's incremental advantage.

**Not being tested:** broad generalization, predictive accuracy across arbitrary repos/languages, real-world developer productivity, unbiased multi-run win rate, or Meta's causal effectiveness from one unreplicated task. A generated adversarial challenge is never an independent hidden oracle.

## Case and task freeze — proposed before observation

- **Fixture:** the submitted app's freshly authored `booking-v1` with two rooms, session-based ownership, booking conflict/cancellation behavior and present-day functional oracle. Resolve **exact** baseline Git tree SHA, fixture/export SHA, dependency lock SHA, runtime and evaluator identity in the actual frozen manifest; none is asserted by this plan.
- **Confirmed future intent:** introduce **team accounts with delegated permission for a member to view/create/cancel bookings for their team**, while outsiders and unprivileged team members remain isolated. Exact authorizations, authentication semantics, idempotency, migration requirements and API surface must be clarified/frozen as a standalone deterministic task before runs; do **not** invent hidden requirements after examining B. A minimal task is preferable to an ambiguous complex scope.
- **Present-day oracle:** existing independently protected build/typecheck/domain/HTTP/boundary checks for each architecture **before** future work. Both A and B (and C if promoted) must pass the *same* initial oracle or the comparison is **INVALID**, not a B success.
- **Future-task oracle:** a newly prepared protected, equal-for-all-arms functional and security suite that checks (a) permitted team actions, (b) outsider access denial, (c) same-team least privilege, (d) original owner-only behavior where applicable, (e) conflict/cancellation invariants, and (f) unchanged existing functionality. Freeze exact check IDs/policy and evaluator digests before any run. Keep grader out of agent environment and prevent model-authored tests from gaining authority.
- **Visible information:** approved roadmap and acceptance outline can be shown **equally** to A, B and C agents. Preapproved common scenario list separate from any protected oracle; Meta sees approved graph/intent, not grader secrets.
- **Provider architecture:** a single eligible Meta model proposes one falsifiable architecture hypothesis and one counterexample. Human reviews candidate B. Strong pre-written deterministic, roadmap-aware template baseline constructs C if stretch is admitted. None chooses the independent test suite.

## Predeclare arms and execution

| Arm | Starting state | Preparation step | Question |
| --- | --- | --- | --- |
| **A** | Present-day booking source | Keep good status quo; allow ordinary bug fixes without unnecessary speculative refactor | Can ordinary development absorb the future task competitively? |
| **B** | **Same** present-day source | Meta-informed narrowly scoped ownership/permission abstraction, human-approved; record every preparatory edit/token/minute/iteration | Was upfront architectural work justified? |
| **C** (optional) | **Same** present-day source | Credible, *equally roadmap-informed* non-Meta template/refactor; allow no-change choice if rubric favors it; record upfront cost | Did Meta add something above strong conventional engineering? |

**Crucial fairness rule:** A, B and C start from the exact same *pre-preparation* code and confirmed future roadmap information. B/C preparation changes the architecture **only**, not the future feature; check equivalent present-day semantics before task. Preserve prep time/effort explicitly. The implementation agent receives the same frozen downstream task and comparable remaining opportunity/budget **after** preparation; log total cost with preparation separately rather than granting B free work.

For each arm fix in manifest: `initialTree`, `preparedTree`, `finalTree`, task ID and hash, variant prep instructions/human changes, agent identity, vendor/model/version, prompt template hash, tool allowlist, sandbox image/runtime hash, network/credential policy, timeout/token/spend/step caps, independent evaluator and policy digests, whether runs sequential/concurrent, seed if supported, timestamps, status and observed spend. No arm may access another's final tree, model outputs or feedback before lock. If one runner differs, classify **not comparable**.

## Metrics and verdicts (do not fabricate thresholds)

**Primary endpoint:** **independent downstream future-task correctness** across the **same required checks** on actual post-agent code: valid protected `VERIFIED` or `REJECTED` or `INSUFFICIENT_EVIDENCE`. A `completed` process is not a verified task. A missing/stale/forged receipt is **insufficient**, never a win. A cannot lose for having fewer architectural layers if it passes.

**Secondary metrics** (describe, do not overclaim): measured downstream wall time, attempts, files touched, exact edit/diff size, regressions, source-bound violations, known agent input/output tokens/cost, actual prep time/tokens/edit size and **prep + downstream total**. Unknown spend/tokens explicitly `unknown`. Historical failures preserved. Modeled blast radius/effort are separately labeled **estimates**, never substituted for measurements.

**Outcome reporting rule fixed before running:**
1. Require matched manifest, initially correct arms and authentic complete receipts for a valid direct comparison. Otherwise **INCONCLUSIVE/INVALID** with reason.
2. For per-task *correctness*, label the arm with all required checks passing **VERIFIED**. If both fail, report **no valid winner**, show different failures; if both pass, report a **correctness tie**.
3. Only among similarly verified arms compare secondary metrics such as prep-inclusive measured wall time/cost/iterations, each with units and missing values. Report measured differences **descriptively**; do not create a numeric total winner score or percent improvement if coverage/units are incomparable.
4. For B-versus-C, need equally informed C and identical selection policy. Even if B performs better in one run, describe **this case only**, not proof Meta generally improves outcomes. If C wins or equals B, preserve and display it.
5. No changing tasks, variants, thresholds, model or oracle after learning preliminary results. Any correction yields a **new preregistered study version**; publish old failures.

## Integrity, custody and agent preconditions

- The merged **offline no-inference** grader is not approval for a real agent. No execution until independently approved credential handling, provider egress, spending caps, source export, unprivileged containment and restart-safe cancellation/cleanup are proven for the exact runtime identity. Operator-only; no public shell endpoint.
- Store protected test source, credentials, raw operator report and private VM internals **outside** public Git and all agent-accessible workspaces. Publish safe signed/digested metadata and redacted records through the read-only artifact loader. Never launder a synthetic result as measured.
- Keep append-only outcome manifest of successful, failed, canceled, blocked and unusable runs. Do not silently retry an arm and report only the best run.
- For one *genuine* holdout: neutral custodian creates encrypted/hidden task **before** candidate selection, freezes content hash/time and reveal policy, denies test content to planner/model/agent, proves no leakage and reveals only after candidates frozen. Otherwise label an experiment **visible preregistered case study**. A Meta counterexample is a proposal, never the holdout.

## Required per-run report (newly authored in app, not a copied planning fixture)

- Study version and independent-review authority, case/task/visible-context hash and pre-registration time
- Candidate A/B/(C) initial/prepared/final tree hashes, preparation change log and present-day semantics verdict
- Runtime/toolchain/coding agent/model/budgets/prompt/experiment and grader/policy identities
- Per-arm final-status and exact required checks with trusted receipt IDs, failure modes, cleanup proof
- Per-arm downstream wall time/iterations/changed files/token+cost (known/unknown) and upfront preparation
- Deviations, all excluded/failed attempts and justification, integrity limitations, any conditional *case-specific* takeaway
- Scored claim text and **safe summary** for frontend: distinguish Meta proposal, measured verification and Meta post-hoc non-authoritative interpretation.

## Preflight go/no-go signoff (all must be true to execute)
- [ ] Owner independently resolves exact future team-permission task, freeze before Meta sees trial outcomes.
- [ ] Owner approves eligible live Meta provider and bounded disclosed source context, with pricing/credits checked.
- [ ] Fresh independently reviewed *real-agent* isolation and spend authority; no assumption from offline test.
- [ ] Freeze per-arm fairness manifest and read-only evaluator identities before agent invocation; publish an immutable manifest commitment ID.
- [ ] Present-day semantics can be tested identically and evaluator oracle remains protected.
- [ ] Explicit trial count, run ordering, failed-run handling and reporting frozen.
- [ ] Consent/provenance documented, no private tests or credentials to Meta/coding agents.

See [PR handoffs](IMPLEMENTATION-QUEUE-2026-10-27.md), [stretch go/no-go](STRETCH-PROMOTION-GATES.md), [judge evidence](JUDGE-SUCCESS-GATES.md).
