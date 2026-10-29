# Impact and demonstrability refinement — Future Breakage, Decision Report, and visible consequences

**Status:** October 29, 2026 planning clarification, **not** a new milestone, implementation claim, benchmark result, or permission to relax protected execution. Applies to the existing post-kickoff standalone ForeCode submission only as design guidance. **Nov 2 feature freeze / Nov 4 9 PM ET submission** remain controlling. Consult [critical path](HACKATHON-CRITICAL-PATH.md), [tournament protocol](ARCHITECTURE-TOURNAMENT-PROTOCOL.md), [judge gates](JUDGE-SUCCESS-GATES.md), [stretch promotion gates](STRETCH-PROMOTION-GATES.md), [demo acceptance](DEMO-ACCEPTANCE.md), and [v5 design](../design/forecode-v5/design-spec.md).

## Executive decision and rationale

Keep the existing **booking-v1 → future team accounts/delegated permissions** experiment. Do **not** switch to an e-commerce/payment fixture: booking already has protected tests and an established future-task protocol; changing it wastes scarce time and damages comparability. Improve how judges understand the already-planned research:

> **Hook option (not a measured claim):** “Your booking app works today. Will its architecture survive team permissions tomorrow?”  
> **Product promise:** “ForeCode tests architectural decisions against a real future change and shows the evidence before you commit.”

The focus is **impact communication**, not merely decorative UI. The viewer must immediately perceive (1) a working app, (2) a believable upcoming demand, (3) a costly mistake *that could* occur, (4) actual experiment observations, and (5) a useful engineering decision with limitations. Do not imply a future regression is guaranteed, that ForeCode predicts the literal future, or that one case generalizes.

## Idea 1 — The Future Breakage narrative (P0 presentation refinement; no new experiment)

**Problem:** “Architecture research / falsifiable hypothesis / protected evaluator” is cognitively expensive in a three-minute video. Experienced developers care about avoiding rework and security regressions; broader judges first need a concrete story.

**User story:** As a developer maintaining a currently working booking service, I know teams need shared room bookings next sprint. I want to know whether adding an ownership/permission boundary *now* is worth its upfront complexity compared with leaving a clean status quo, before that future feature arrives.

**Screen/story sequence:**
1. **Today:** Show an actual working booking action (room, authenticated owner, create/cancel, protected separation). Call out “all existing behavior passes”; only if validated on source-backed run.
2. **Tomorrow:** A human confirms the exact proposed team-delegation requirement. One compact, concrete request: “Team members can create/view/cancel authorized team bookings; outsiders and unauthorized teammates cannot.”
3. **Risk statement:** “A poorly chosen boundary might require more edits or introduce unauthorized access.” Mark this as a *hypothesis/risk*, not observed fact.
4. **Prediction:** Real eligible Meta proposes an explicit architecture tradeoff, falsifier and self-challenge. Show why Meta's output is a genuine model contribution, not an automatically trusted verdict.
5. **Test:** Compare sound A (status quo) vs reviewed B (prepared permission/ownership boundary), optionally equally informed non-Meta C. Same frozen downstream task/agent/tool/runtime/budget/evaluator, accounting for B/C preparation; all source trees initially correct.
6. **Reveal:** Side-by-side independent correctness and observed edits, attempts, measured duration, regressions, costs with unknowns and complete history. Reveal actual result even if A wins or correctness ties.
7. **Action:** A human-readable conditional recommendation: refactor / keep as-is / inconclusive, with reasons and next steps.

**Success criteria:** An unfamiliar judge can describe the current feature, future demand, stakes, experiment and practical takeaway within 20–30 seconds; no claims without original run IDs and independently verified evidence. Hook and graphics never promise a win before experiments run.

**Demo copy examples, contingent on evidence:** “Both approaches passed. The upfront abstraction cost was not justified in this run” or “Both passed; B required fewer downstream edits, but the full prep-inclusive cost was higher.” Avoid “we saved X% engineering time” unless actual comparable measurements support the narrow case-specific claim.

## Idea 2 — Visible booking-app consequences (conditional P1 visualization, not an invented failure)

**Problem:** Graphs, diffs and certificates are credible but a failed permission invariant is invisible to non-engineers. A simple end-user example connects engineering measurement to a real consequence.

**Proposed minimal fixture visualization:** Use *the existing booking application*, not a new storefront. Keep scope to the already frozen team-permissions feature and existing evaluator semantics. A small “as user” preview/storyboard may show:
- Owner Alice books a room; Bob is on the same team with an allowed role; outsider Eve cannot see or cancel private/team booking data.
- **Expected action:** a permitted teammate views or manages a booking under the confirmed policy.
- **Expected denial:** outsider or insufficiently privileged teammate tries to cancel/view and receives denial.
- **Result:** link a visible success or failure to exact protected check ID and evaluated final-tree hash; distinguish app UI/HTTP observation from protected oracle outcome.

**Important:** These are *illustrative personas* until implemented and verified; roles/actions must come from the frozen future task, not be invented after seeing arm outcomes. A UI click alone is not evidence of correct security; keep authenticated independent checks authoritative. Do not expose private oracle input, secrets or private reports to browser.

**Modes:**
- **Observed:** for actual authorized, recorded agent run with source-backed final tree and trusted evaluator receipt, show minimal redacted request/response or safe application replay with run ID, task, observed/expected behavior and relevant check IDs.
- **Not observed:** show “No verified app-level outcome available” or an obviously labeled *conceptual walkthrough* without checkmarks, outcome language or faux telemetry.
- **Both pass / no visible failure:** show a valid difference in change surface, preparation-inclusive effort, or a passing authorization example. Never stage failures to create drama.
- **One or both fail:** show *only* genuine safe-to-disclose failure evidence, distinguish failed required check from observed UI symptom; a failed grader check doesn't automatically prove a particular screenshot-level symptom.

**UI integration:** A “Why this matters to users” compact pane/card alongside Time Machine/Evidence Laboratory, with **Today / Future requirement / Observed effect** and clear status (verified, rejected, insufficient). Optional short before/after animation must retain labels and reduced-motion fallback. Do not add public code execution, operator agent controls, fake logs, or an additional test oracle.

**Acceptance:** Source/check/receipt bindings match same run; no cross-arm evidence mix; unknown/blocked displayed honestly; screen reader and keyboard access; no unverified user-facing symptom or invented monetary loss.

**Cut/fallback:** If no safe app preview is already trivial by Oct 31, use a static human-readable diagram plus exact trusted check labels, not a second frontend application. This is never allowed to block real Meta, safe agent execution, valid study, or submission.

## Idea 3 — Evidence-backed “Refactor, wait, or inconclusive?” Decision Report (P0 copy and view; minimal new product logic)

**Problem:** Ending on a certificate answers “were checks run?” but not “what should an engineer do?” The judge should see a decision support tool, not a research dashboard that stops at diagnostics.

**Output contract (design-level; reuse existing canonical artifacts, do not invent new evaluator authority):**
- **Decision label:** “Refactor before team permissions”, “Keep current architecture for now”, or “Insufficient evidence to choose.” This is *recommendation/interpretation*, separate from protected evaluator `VERIFIED / REJECTED / INSUFFICIENT_EVIDENCE`.
- **Question and scope:** confirmed team-permission task, source commit, study/arms, dates, single-case disclaimer.
- **Why:** 2–3 observable factors: required-check status per arm, regression/failure examples, actual changed files/diff/iterations, prep-inclusive effort if measurable, and explicit assumptions.
- **Tradeoff/cost:** show B/C preparation beside downstream effort (time/edits/tokens/cost) and distinguish projected from measured. Unknown is `unknown`, never zero or “saved”.
- **Evidence links:** per-arm source tree, task/evaluator digest, run/receipt IDs, preserved losses/retries, scoped verifier certificate; allow opening the Evidence Laboratory.
- **What to do next:** narrowly scoped, human-reviewable permission-boundary change plan, expected benefits and risks, and preconditions for adopting it; do **not** automatically create PRs or modify the user's repo.
- **Confidence/limits:** use plain language (“observed in one controlled booking task”; “both passed, cost estimate incomplete”; “not a generalized prediction”), not an arbitrary numeric confidence score.

**Deterministic presentation logic, not new empirical ranking:**
1. Invalid/unmatched/no trusted receipts ⇒ **inconclusive**; do not endorse B or create a “winner.”
2. If A and B both pass required checks, label **correctness tie**. Compare measured secondary outcomes descriptively *with preparation*; a conditional preference is allowed only if evidence and a clearly declared decision criterion support it. Avoid auto-ranking by unvalidated aggregate score.
3. If one arm has valid rejection and the other is independently verified, state exactly which checks differ, and distinguish case-level advantage from generalized superiority.
4. If both fail, no winner; recommend hardening/retesting or scope clarification rather than asserting a refactor solution.
5. If C exists, compare Meta B to equally informed C separately from B-versus-A. No claim that Meta uniquely caused a benefit without valid B/C.
6. A Meta post-run interpretation may explain a sanitized snapshot but cannot change check status, provenance, or mechanically rewrite evidence.

**Design:** One immediately readable, accessible card or final screen: decision headline, one-sentence case conclusion, 2–3 evidence bullets, prep-inclusive costs and “Inspect evidence” route. Copy should be understandable by a PM in under 10 seconds; technical details remain inspectable. Buttons only if they do something real; avoid a fake “open PR” or one-click refactor control.

**Success and negative tests:** Reject stale intent/run mismatch and synthetic success as authoritative; display tie/negative/unknown cases; explanatory text correct when zero numeric gains; present “no refactor” outcome without shame. A local UI snapshot check should compare the displayed summary to original source-bound receipts.

**Cut/fallback:** Use a static template populated from existing authenticated report if more elaborate structured recommendations aren't ready; do not add a new agent/service or evaluator schema.

## Idea 4 — The “keep what works” counterexample (optional, not a second required benchmark)

**Why:** A developer tool that always advocates more architecture looks like an AI upsell. Showing that the status quo sometimes wins or ties improves credibility and decision quality.

**Preferred demonstration:** If the primary fair A/B trial naturally yields no advantage for B after preparation, present that result honestly as the key insight. Otherwise, if time remains and the preregistered experiment framework supports another genuinely frozen, independently verified scenario, show an honest no-refactor case. Never contrive the task, rerun until A wins, or select only flattering outcomes.

**Minimum:** Explain in the decision report that “keep current design” is a valid outcome even when no second recorded trial exists. **Not** a Nov 2 blocker.

## Three-minute judge walkthrough: impact-first overlay

Existing `DEMO-ACCEPTANCE.md` timing and mandatory provenance disclosure remain authoritative. Suggested **copy/pacing refinement**, not extra demo minutes:
- **0:00–0:12:** Organizer-required distinction between pre-event planning and post-kickoff built artifacts.
- **0:12–0:35:** Show booking actually working and exactly how team permissions will change it. Hook: “Works today; what happens when teams arrive?”
- **0:35–1:05:** Real Meta prediction, explicit falsifier and self-challenge; “a prediction, not the result.”
- **1:05–1:32:** Compare A/B with same task and clear prep cost; visually mark unknowns.
- **1:32–2:30:** Recorded real execution and protected checks. If a *verified and safe* user-facing failure exists, show it for a few seconds; otherwise use truthful authorized-access/passing outcome and change-surface diff.
- **2:30–3:00:** Decision Report first (refactor / wait / inconclusive), then one-click inspection of scoped evidence certificate and caveats. Do not hide hard requirements behind cinematic UI.

Record a complete low-fidelity walkthrough before adding polish. Every spoken measured number must reconcile with run/evaluator/source identities. Show a losing or inconclusive state where practical.

## Priority, dependencies, and kill switches

| Improvement | Priority | Depends on | Scope cap / cut |
| --- | --- | --- | --- |
| Impact-first hook, actual booking workflow and future stakes | **P0 narration/copy** | Existing booking demo, confirmed future task | No new fixture or claimed outcomes; include in first rough video |
| End-of-flow Decision Report | **P0 presentational refinement** | Authentic result loader + existing Evidence Lab; can show honest inconclusive without A/B | Minimal report template only; no new decision engine |
| User-facing consequence pane / replay | **P1 conditional** | Approved final tree, safe selected output, protected receipt, current workbench | Cut by Oct 31 if not effortless and source-backed; use diagram |
| Optional no-refactor second scenario | **P1/P2** | Strong validated core, preregistration, spare run authorization/time | Drop if any core gate not complete |
| Auto-generated implementation PR / new checkout app | **Deferred** | Outside demo-critical need | Do not build for this event |

**Owner promotion rule:** Apply the existing [stretch gates](STRETCH-PROMOTION-GATES.md); no optional feature before real Meta evidence, safe independently authorized agent runs where claimed, first honest matched study, and a functioning clean-browser demo. Feature-freeze Nov 2; no work here changes experiment identities, security gates, or grading policy.

## Implementation handoff (Codex-friendly but not a new ticket tree)

1. **Copy/story pass:** Update eligible in-event landing copy and booking walkthrough to state the present feature and future permissions need. Map to existing M8/M9 frontend/demo tickets, not fresh milestone IDs. Test responsive wording and the provenance sentence.
2. **Decision summary pass:** Extend existing source-bound report rendering with decision, tradeoff/cost and limitation fields *derived from already approved artifacts*. If canonical schema doesn't carry a needed value, show “unknown”; do not silently alter contract. Test verified-tie, A-wins, B-wins, both-fail, invalid, and no-run scenarios using clearly labeled non-measured test fixtures.
3. **Consequence visualization pass (only if gated):** Use permitted/redacted actual booking check artifacts to show one actor/action/outcome. Validate bindings and segregation; no hidden oracle leakage or synthetic success.
4. **Rehearse and audit:** Clean-browser 3-minute video, accessibility/mobile, adverse cases and receipts, source rights, event-new-work disclosures, provenance checklist. Log GO/HOLD/CUT and observed time in the existing promotion record.

**Out of scope:** changing booking future requirement after study freeze, inventing a payment fixture, granting public sandbox access, making Meta the evaluator, manufacturing security failures, adding unsupported percentage savings, copying pre-event planning code/assets into event submission.

## Judge-specific impact proof checklist

- [ ] Within 20 seconds, a stranger can state what the booking app does *today* and why team permissions matter.
- [ ] User-visible risk is explicitly **hypothesized** until verified; observed consequences cite actual source/run/check.
- [ ] Prediction, agent change, protected verifier result, and recommendation are visually distinct.
- [ ] Both credible current design and proposed design are initially correct, with matched future task and preparatory costs.
- [ ] Decision headline says **refactor / keep / inconclusive** and never contradicts evidence or declare an unsupported overall winner.
- [ ] A losing, tied, incomplete, or status-quo-favorable outcome remains compelling and explainable.
- [ ] Actual experiment receipts, limitations and unknowns can be inspected without exposing oracle/source secrets.
- [ ] Three-minute video and clean-browser public flow function; provenance/eligibility statements match event code.
