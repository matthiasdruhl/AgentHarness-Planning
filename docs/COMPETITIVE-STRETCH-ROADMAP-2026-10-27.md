# ForeCode — competitive feature execution plan (October 27, 2026)

**Purpose:** Pre-decide implementation, scope, verification, and cut conditions for an unusually compelling Meta Global AI Developer Hackathon entry. This is a **planning overlay, not a replacement** for the 68 canonical M0–M10 ticket IDs, the [submission-first critical path](HACKATHON-CRITICAL-PATH.md), [Meta Scientist protocol](META-ARCHITECTURE-SCIENTIST.md), [v4.4 design handoff](FORECODE-UI-IMPLEMENTATION-HANDOFF-v4.4.md), or [Demo acceptance](DEMO-ACCEPTANCE.md). Dates and effort ranges are targets, not claims of progress.

## Decision and current observed state

**Decision:** Keep the original future-proofing recommendation product as the core experience. Differentiate it with **one rigorous, independently verified architecture tournament**, a **source-backed architecture time machine**, **Meta's falsifiable/self-challenging scientific reasoning**, and **inspectable research-grade evidence**. Prioritize a single completed, honest three-minute journey over feature count.

As observed in the public application repo on October 27:
- ForeCode is the standalone post-kickoff submission repo; public PR #6 (workstream-A live booking acceptance) has been merged into `main`.
- Newly written booking fixture, contracts, test/build and protected no-inference booking grader exist; the merge reports successful actual four-scenario acceptance, protected loader and restart cleanup, with private raw evidence excluded from GitHub.
- **Not yet established:** approved execution of **real coding agents**, live eligible Meta model hypotheses/challenges, matched *post-agent* A/B or A/B/C measurements, measured Meta incremental advantage, a complete source-backed architecture workbench, or final judge-facing artifact/deployment.
- The existing no-inference grader acceptance and review **do not authorize** real agents, provider spending, arbitrary source export or privileged guest execution. Do not extrapolate from this approval.

**Official timebox:** Oct 26 post-noon ET kickoff to **Nov 4, 2026 9:00 PM ET** submission. Hard freeze **Nov 2**. Showcase only fresh eligible submitted app work, differentiate pre-event planning at beginning of required three-minute video; public repo and correct track/team/rules. Planned Indie Developer / Push the Frontier unless user changes it. Official event: https://dev.meta.ai/events/global-hackathon.

## Priority map and incremental scope

| Package | Priority | Purpose | Planning effort estimate | Dependency | Cut rule |
| --- | --- | --- | --- | --- | --- |
| P0-A: Safe real-agent handoff | Must ship to claim controlled agent experiment | Hard budget, credentials/exports, supervised lifecycle and new independent approval | 0.75–1.5 focused days, potentially longer if sandbox changes | Existing Workstream A; fresh specific owner security decision | If not attested, **disable agent runs** and report no architecture improvement |
| P0-B: Live Meta Architecture Scientist | Must ship for central Meta story | Consent-bound status quo/B, falsifiable hypothesis, adversarial proposed challenge, provenance | 1–1.5 days | M4 intentions, provider access, M6 validation | Use honestly labeled recorded provider if available; never invent live |
| P0-C: One fair two-arm booking experiment | Must ship to claim A/B result | A status quo vs B targeted architecture, same downstream task/agent/tool/budget/Verify, upfront costs and all outcomes | 1–1.5 days after approved runner | P0-A, frozen evaluator/fixture, M7 | No fair matched data -> show independent fixture verification only, not A/B improvement |
| P0-D: v4.4 judge flow, evidence and certificate | Must ship | Intent -> Meta -> candidate architecture -> measured results -> scoped verified record | 1–2 days, overlaps Meta/experiment | M5/M6/M7/M8 | Simplify visuals before compromising trust or video |
| S1: Strong non-Meta **third contender** | Best competitive stretch | Meta-versus-equally-informed template/roadmap architectural benefit comparison | 0.5–1 day + genuine third run | P0 A/B stable; identical task, agent and conditions | Cut if pair unstable, experiment leakage, inadequate budget or <1 day before freeze |
| S2: Architecture **Time Machine** | Best visual stretch | Source-derived current/prepared/post-task topology and real code-diff/impact navigation | 0.5–1 day beyond basic Atlas | M5 graph + candidate snapshots/diff | Fall back to real file-change list and limited truthful graph |
| S3: Preregistered independent holdout | High credibility, risky | One future requirement/task escrowed before approach selection, independently evaluated after source freeze | 0.75–1 day | Trusted custody & uncontaminated neutral task | No genuine blind custody -> describe 'preregistered visible study,' never unseen |
| S4: Inspectable case study/replay | High demo leverage | Read-only sanitized, authenticated trace and report with failures/unknowns | 0.5–1 day | M8 protected loader and valid results | Minimal single-report page if time low |
| S5: Adaptive experiment selection | Optional, high complexity | Meta chooses only from preapproved **visible** scenario pool with no authority over evaluator | 1+ days | Stable tournament + strong honest evaluation | Cut early; do not introduce cherry-picking |
| S6: Additional open-weight backend/SCBench | Optional bonus research | Single eligible Meta open-weight adapter or separate external JS pilot | 0.5–2+ days | Fully stable P0, video draft, entitlement/cost/review | Cut before Nov 2 freeze if any P0 unfinished |

Effort excludes unpredictable approval/provider/sandbox blockers. Never interpret these as guaranteed calendar durations or completion percentages. **One high-quality paired run is worth more than multiple unsupported agent claims.**

## Essential experimental design — freeze before implementation

There are **two different causal questions**, which must not be conflated:

1. **Architecture value (A vs B).** Does advance restructuring B help when a future requirement arrives, compared with credible status quo A, after including B's upfront cost?
2. **Meta incremental value (B vs C).** Does a Meta-hypothesis-informed approach B do better than a strong **equally informed non-Meta roadmap/template** approach C? C must get the same confirmed future context, code summary, success criterion, and development budget; choosing a deliberately weak C invalidates the comparison.

### Architecture arms

- **A — keep what works:** original working booking baseline, no premature boundary refactor. Strong implementation quality, no intentionally broken control.
- **B — Meta hypothesis:** choose the targeted ownership/authorization boundary proposal with explicit predicted observable effect, weaknesses and disconfirmation.
- **C — informed non-Meta:** derive a credible alternative from a predefined roadmap-aware template or deterministic engineering rubric, **without** live Meta proposal/challenge inputs. No strawman; a different but defensible boundary or equally good no-refactor choice is valid.

For each arm: immutable initial source/tree identity; present-day correctness first; exact approved future team-account/delegated-permissions requirement; same coding agent/model/version, tools, prompts except arm-specific architecture context, task deadline/token/spend caps, evaluator/policy; collect actual post-agent final source, exit status, runtime, elapsed time, passes/failures, touched files, edits, iterations and known token/cost usage. **Include all preparatory refactor cost for B and C.** Compare only truly comparable measured quantities. If a metric is missing, show `unknown`, not zero. Fix the scoring rule and tie/insufficient-evidence behavior before results; show losses, equal outcomes and incomplete runs. Never declare general superior architecture from one pair/triple.

**Holdout policy:** A Meta-generated challenger is visibly proposed, never a secret test. A valid independently unseen future task requires pre-run task/source hash, custodian, pre-specified release point after candidate freeze, no task content to proposer/agent, no retroactive selection, no leaked oracle and complete reporting. If impossible, use a clearly labeled visible/pre-registered test and limit claims.

## Implementation handoffs (map to existing canonical tickets; no new ID system)

### Handoff A — real-agent containment and budget gate [M2.3–M2.6, M7.1]

**Build only after explicit separate owner/security authorization.** Keep a developer-local operator command, never a public Next.js sandbox/agent endpoint. A live coding agent runs only against a sanitized, source-capped booking task in a separately inspected unprivileged restricted environment, with no host Codex auth/SSH agent, oracle code, tokens, personal files or sockets reachable. Permit explicit minimal egress to an authorized model endpoint only after provider/privacy review; deny all other network. Use a dedicated low-privilege credential, not host credential exposure. Hard enforce per-run/aggregate model budgets (tokens, dollars when enforceable, wall time, attempts), no unbounded retries, cancellation/kill/recovery, exact labels/lease, restart-proof cleanup and checks that host-side code never executes candidate source. Log immutable run attempts, even denied ones, without secrets. Paid access must be voluntarily configured; do not assume credits.

**Deliverable:** one actual agent-produced candidate final-tree digest and bounded run envelope **plus** a distinct independent protected verdict, or a documented blocked state. Existing no-inference approval is not enough. Muse Code is conditional and gated; Codex remains fallback. Do not try an unreviewed generic/guest-root agent inside the previously approved sandbox.

**Proof:** allow/deny egress, credential/host mount denial, limits/tamper tests, forced timeout, cancellation/SIGKILL, crash/restart cleanup, mismatched source rejection, cost-stop; actual private owner review renewed for changed runtime; no host candidate execution.

### Handoff B — genuine Meta Scientist [M4.3, M6.1–M6.4, M6.6–M6.7]

**Build:** server-only eligible Meta model adapter with explicit opt-in per operation and sanitized bounded graph/intent. Structured, schema-checked outputs for A/B, one falsifiable prediction, named observable metric+units, explicit falsifier and assumptions, distinct adversarial counterexample with `reviewStatus=proposed` and `visibility=model_generated_not_heldout`. Stable identity joins candidate/intent revision/graph commit. Versioned prompts and provider origin `live/recorded/template`; retries/cost caps, malformed/error/quota states. Optional later **post-run** Meta interpretation resolves server-owned authenticated evidence summary IDs and is displayed beside, never instead of, immutable Verify.

**Proof:** actual response with real provider/model identity saved privately, fake live/provider, invalid model JSON, unauthorized consent, stale intent, secret prompt injection, challenge-as-secret, forged summary and altered verdict all fail closed. No paid call in CI.

### Handoff C — source-backed Architecture Atlas + Time Machine [M5.1–M5.7, M8.2, M9.2]

**Build:** v4.4 layout already finalized: editorial landing -> sober dark engineering workbench, stable node IDs and positions across A/B/C, source-based dependency edges and explicit unresolved edge state, inspector views Current / Proposed / Diff and proof tabs. Show three *states*: (1) before intervention, (2) after optional architectural preparation, (3) after the same future requirement implementation. Link nodes/edges/changed files to actual source excerpts or computed diffs; distinguish **hypothesized** blast radius from **measured** changed-file impact. Allow keyboard inspection and reduced motion. No invented source snippets, graph edges, time savings or progress bars.

**Proof:** graph against pinned booking snapshots, diff hashes match viewed commits/trees, unknown imports remain unknown, A never displays B-only modules, unmeasured cost labeled projected/unknown, desktop 1440x900 and mobile 390x844 with keyboard/e2e.

### Handoff D — fair A/B then tournament [M7.1–M7.3, M7.5–M7.7, M6.7]

**Build in two passes:** first a verified, frozen **A vs B** matched future-requirement pair; only then C for a three-arm tournament. Freeze manifest of fixture/base/tasks/agent/model/prompt/tool policy/budgets/evaluator/metrics and each candidate preparation **before** execution. Keep each arm's entire history and exact final-tree digest; validate both arms are initially correct. Independent verifier evaluates final code, not edited visible tests or claimed success. For C, require equal roadmap knowledge and equal effort ceilings. Present two independent questions, not one ambiguous "win rate."

**Proof:** reject unequal manifest, changed oracle, swapped tree, runtime/source mismatch, fabricated cost, omitted failed run and post-selection protocol alteration; observe actual agent results (not synthetic). If B loses or C wins, present that faithfully.

### Handoff E — conditional holdout [M7.4]

**Build only if custody genuinely independent:** third-party-reviewed or separately sealed, hashed **before architecture selection** and genuinely unknown to all competing proposal/implementation agents. One task only. Announce expected direction before reveal. Reject if provenance timing fails. A Meta-generated challenge is neither a blind holdout nor independent evidence.

**Proof:** sealed hash/time, custodian, source visibility record, fixed evaluator and reveal chronology; failures preserve inconclusive results. If not possible, cut with honest wording.

### Handoff F — transparent Evidence Laboratory + certificate [M3, M8.3–M8.6, M9.3–M9.5]

**Build:** server read-only loading of allowlisted sanitized local experiment artifacts only. Case-study card for each contender containing exact run/source/evaluator/policy identities, check ledger, selected-file diff, permission boundaries, known time/cost/iterations, unknowns and distinct statuses `VERIFIED/REJECTED/INSUFFICIENT_EVIDENCE`. Explain *why* a loser lost; never let Meta's retrospective commentary rewrite results. A compact single authenticated report/certificate exports immutable provenance and caveats; synthetic fixtures cannot drive a genuine badge. Historical failures remain reachable, with raw oracle, secrets and private root paths redacted.

**Proof:** forged check IDs/digests, stale status, missing required check, changed policy, unknown metrics and private path leakage regressions; clean-browser read-only E2E; public web cannot spawn a grader, agent or shell.

### Handoff G — submission and 3-minute recording [M8.7, M9.1–M9.6, M10]

**Demo storyboard (3 minutes maximum):**
- 0:00–0:12: Mandatory source/provenance disclosure: concept/planning predates event; displayed working features newly built after kickoff.
- 0:12–0:35: Concrete booking app future "team permissions" need; explicit user confirmation.
- 0:35–1:05: Actual Meta hypothesis, falsifier, adversarial self-challenge; show why Meta is scientifically useful, not a replaceable text box.
- 1:05–1:35: Atlas/Time Machine shows A/B and optional C, predicted tradeoffs, real source/proposed changes.
- 1:35–2:28: Honest *recorded* agent/evaluator experiment, fair task/conditions and actual results including unfavorable arm or absent proof.
- 2:28–3:00: Scoped certificate, provenance and realistic limits; show exact model/evidence/actual-vs-modeled labeling and working judge links.

Public source repo, working site, source attribution, final track, demo link and submission receipt before **Nov 4 9 PM ET**. Final work follows accessibility, keyboard and no-hosted-execution boundaries.

## Planned day-by-day execution order

| Date (ET) | Hard objective | Stretch only if hard objective passes |
| --- | --- | --- |
| Tue Oct 27 | Review merged grader A; start **separate** safe agent/provider-budget authorization; implement live Meta response contract/adapter in parallel | Freeze three-arm experiment protocol; no speculative execution |
| Wed Oct 28 | One permitted real bounded booking agent run + independent verification, **or** honest blocked mode; actual Meta hypothesis/challenge | Source-backed basic Atlas |
| Thu Oct 29 | First working future-intent -> live Meta -> displayed experiment/certificate vertical slice; begin A/B pair | Time Machine file/graph diffs |
| Fri Oct 30 | One fair complete A/B pair; first usable demo capture | Add equally informed template C and third run |
| Sat Oct 31 | Validate measurements, full negative cases, cost attribution and case-study reliability | Genuine independent holdout only if preregistered early |
| Sun Nov 1 | Put actual traces and authenticated reports into v4.4 workbench; first complete three-minute video draft | Read-only replay/refine Time Machine if stable |
| Mon Nov 2 | **Feature freeze**; deploy/secure/performance/e2e and ensure working fallback | Nothing that changes trust assumptions or risks submission |
| Tue Nov 3 | Rehearse clean judge session, fix blockers, record final video, check public links | No optional backend |
| Wed Nov 4 | Final smoke, secret/license/claims check, submit early and verify receipt before 9 PM ET | No new features |

**Parallel lane:** Meta Scientist + frontend can progress while owner reviews real-agent isolation. Demo should have a clean evidence-absent state, not a synthetic success state. Public repo must remain independently useful if grader cannot be re-executed by judges.

## Promotion and kill decisions

Promote work to an optional package only when:
1. all P0 features it depends on are **actually observed** passing, not merely passing mocked unit tests;
2. there is a safe, reviewed operator window and bounded spend for any live run;
3. it contributes legible judge-visible evidence within the three-minute narrative;
4. no later than Nov 1 for net-new experiments and Nov 2 for feature freeze;
5. the existing protected evaluator and event provenance boundaries remain unchanged or independently re-reviewed.

Cut order when blocked: open-weights/extra provider -> adaptive selection -> public external benchmark -> heldout -> fancy Time Machine animation -> third arm -> additional scenarios. Never cut verified source/provenance, live Meta honesty, a working accessible browser, scope-accurate certificate, owner controls, or submission video.

## How to hand off directly to Codex

For each handoff above, instruct Codex to:
1. Read application `AGENTS.md`, current `main` state, existing tests and authoritative milestone/protocol docs; **read this planning file only as conceptual guidance, never copy planning code/fixtures/assets**.
2. Work in a new focused branch; do not merge or force-push without explicit direction; do not overwrite other operator files/private receipts.
3. Start with a delta audit: exact existing implementation, still-missing behaviors and active source SHA. Implement only the handoff's smallest meaningful slice; reuse frozen contracts and repository-native organization.
4. Write unit and failure tests first where practical; add security/integration/browser tests as applicable. Run real checks and record command/exit/SHA; distinguish synthetic vs protected real evidence.
5. Return changed files, boundary analysis, user-visible behavior, actual results and explicit unresolved gates. Block on missing authorization rather than synthesize positive evidence.

**Never:** copy source or prototype from pre-event `AgentHarness-Planning` into post-kickoff submission; change 49 frozen contracts without an explicit additive-versioned compatibility decision; expose model credentials/private evaluator; let model select tests or rewrite outcomes; host agent execution APIs; compare unequal tasks; claim unseen holdout/Meta causal gains from unverified data.

## Definition of the winning-feature experience

A judge can: (1) see a concrete future requirement with explicit confirmation; (2) observe genuine Meta scientific reasoning including a falsifiable prediction and self-challenge; (3) inspect source-backed competing architecture choices; (4) see at least one actual independently scored agent change and, if safe, matched experimental comparison; (5) understand uncertainty, preparation costs, losses, and why the conclusion is scoped; and (6) open a clean public read-only evidence report, within three minutes.

The prize-worthy novelty is **not autonomous code generation by itself**; it is connecting future architectural forecasting to falsifiable, controlled, inspectable software-evolution experiments. Build the evidence, then make it visually legible.
