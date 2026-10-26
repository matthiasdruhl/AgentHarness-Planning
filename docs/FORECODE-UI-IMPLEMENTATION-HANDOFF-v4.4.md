# ForeCode v4.4 — Codex Frontend Implementation Handoff

**Purpose:** translate [final UI/UX design](FORECODE-UI-UX-FINAL-v4.4.md) into a useful, production-safe, judge-visible frontend while preserving the frozen technical and security contracts. **Status:** implementation plan only, not a claim work was done.

## Non-negotiable first instruction to Codex

> The official Meta hackathon began October 26, 2026 at noon Eastern. Implement all submitted app code, UI components, scripts, tests and eligible files **fresh in the new standalone public submission repository**. The pre-event `AgentHarness-Planning` repo (including this file and any design prototype) is **read-only conceptual inspiration**, not submitted source or content to copy. Do not copy historical HTML/CSS/JS, images, examples, tests, JSON schemas, fixtures, Git history or prior commits. Record `docs/BUILD-PROVENANCE.md` and spec reference as prescribed by the repository's kickoff handoff. Existing approved human contributors only.

## Delivery slices — no new parallel milestone hierarchy

Use the **existing** canonical ticket/milestone mapping (M8–M9), treating the design as implementation guidance and not expanding P0. Proposed tasks below are bounded increments, **not extra official ticket IDs**.

| Order | Scope | Existing ticket(s) | Done when |
| --- | --- | --- | --- |
| 1 | Design tokens, font roles, responsive shell, landing identity + primary demo CTA | M1 app foundation; M8.1.1 / M9.1.1 | Brand visual identity and navigation consistent in clean browser; no expensive animation dependency |
| 2 | Actual source-backed limited booking Atlas, A/B candidate focus, keyboard node selection, known-vs-unknown edges | M5.1–M5.4; M8.2.1; M9.2.1 | Graph is truthful about parsed information and unknowns; A doesn't show B-only modules |
| 3 | Confirmed intent, provenance, real/recorded Meta hypothesis and **proposed** challenge inspector | M4; M6.1–M6.4/M6.6; M8.2.1 | Schema validation, explicit user confirmation and consent; no client authorization of evaluator tasks |
| 4 | Two-arm experiment display (read-only, actual trusted recorded artifacts only) | M7; M8.3.1 / M9.3.1 | Same future task, agent, budget and frozen policy shown; B preparation is counted; empty state when none |
| 5 | Independent Verify verdict, check ledger, scope, certificate/export | M3; M8.4.1/M8.5.1; M9.4.1 | Only trusted protected receipt can trigger VERIFIED, no counterfeit/unknown success |
| 6 | E2E test, responsive and keyboard audit, video walkthrough | M8.6.1/M8.7.1; M9.1.1/M9.6.1 | 3-minute judge flow can finish in a clean browser, with no invented metrics or disabled safety gates |

**Cut order under deadline pressure:** decorative animation → advanced code diff dock → extra scenarios → multiple cases → public benchmark integration. Do **not** cut independent evidence integrity, true Meta inference labeling, human approval, safe sandbox separation or provenance.

## Required presentation model

Implement a single coherent progression:
1. Public website hero: “The code works. Will it survive what's next?”; CTA to case study.
2. Confirmed future need: introducing team account permissions to a constrained booking example.
3. Architecture Atlas A/B: status quo versus proposed boundary; graph focus and readable assumptions.
4. Meta Scientist: a falsifiable measurable prediction and a separate self-challenging, **not held-out** counterexample.
5. Matched experiment: real source-bound recorded A/B only if safe runner + grader receipts exist.
6. Evidence certificate: actual scoped outcome, limitations and chain of provenance, or unequivocal insufficient evidence.

**Case state carries authority/provenance:** `caseId`, immutable approved intent `intentId/revision`, `baselineCommit`, graph `repoCommit`, candidate IDs, source (live/recorded/template), mode and evidence summary IDs where relevant. Never silently promote proposal to user-confirmed intention.

## Component ownership suggestion

Use existing architecture conventions; do not introduce a second contract system.

- `src/app/`: public landing and bounded app workbench routes (one case is enough for P0).
- `src/app/components/layout/`: header, left nav, stage tabs, mobile navigation, command palette, quiet provenance strip.
- `src/app/components/atlas/`: `ArchitectureAtlas`, `CandidateToggle`, `ScenarioFocus`, `ModuleInspector`, `MetaReasoningLens` (plus optional real `SourceInspector`).
- `src/app/components/experiments/`: `PairedRunHistory`, `ExperimentArm`, `TraceEventInspector`, `ExperimentConditions`.
- `src/app/components/certificate/`: `VerificationCertificate`, `CheckLedger`, `EvidenceScope`.
- `src/lib/contracts/`, `src/lib/verify/`, `src/lib/report/` remain the versioned authority; do not replace with UI-local mock schemas.
- `src/server/artifacts/` alone loads allowlisted trust-checked serialized results for hosted read-only presentation. Never serve an evaluator/sandbox shell endpoint.

The above are organizational suggestions, not new authoritative module requirements. Keep repo-native names if existing implementation differs.

## Visual implementation details

Token names, color values, typographic roles, motion, responsive layout and information density are normative in [final design](FORECODE-UI-UX-FINAL-v4.4.md).

- Landing has intentional graphic composition and tight editorial headline, not cards with boxed text. Interactive branching graphic can be SVG/CSS, but keep a static meaningful reduced-motion state.
- Application workbench is visibly quieter: neutral background, fewer borders, compact technical labels, clear focused graph. Stable module positions when comparing A/B; proposed edges highlighted without inaccurate reachability claims.
- Keep right inspector's **Hypothesis** and **Counterexample** separate. A light 150–350ms semantic transition is appropriate; permanent glow, confetti and animated success states are not.
- `SourceInspector` tabs should use **real** safe source excerpts/diffs only. If actual proposed source isn't available, show bounded planned actions and say `proposal only`. Do not invent code and portray it as from the repo.
- Paired timelines display step titles, authentic trace IDs, timestamps only when known, check binding and failure states. Unknown telemetry stays `unknown`.
- Certificate is a cream-on-dark contrasting research record with clear scope. Copy/export only when schema-valid, authenticated source data has been approved by the trust layer; design sample states must not appear in production.

## Data/state loading contract

A component may render one of:
- **Loading:** bounded, no fake numerical progress.
- **Awaiting authorization / user confirmation:** no dependent decision.
- **Live model proposal:** eligible Meta provider/version/call provenance actually observed; consented and validated.
- **Recorded model proposal:** recorded label and provenance, not “live.”
- **Template fallback:** template label and source.
- **Experiment absent:** “not run / no authenticated receipt.”
- **Measured recorded experiment:** actual protected run artifacts, display channel recorded independently from measured origin.
- **Verification insufficient / rejected / verified:** ONLY from trusted verdict engine; UI cannot override it.
- **Stale:** prior historical artifacts preserved but not represented as the current recommendation.
- **Error:** safe, useful message with retry where warranted, no leaking secret/tool internals.

## Accessibility and performance acceptance

- Responsive at 1440×900 and 390×844; independent graph scroll/pan with textual alternative; no document overflow.
- Full keyboard flow: Enter case, A/B toggles, focus modes, scenario buttons, node inspection, hypothesis/challenge, experiment events and evidence drilldown; visible focus.
- Correct `aria-pressed`, tab semantics and modal focus for actual interactive controls; no inert “fake button” UI.
- Reduced-motion media query and explicit control; no animation required to understand evidence.
- Avoid large custom font downloads; use legal locally available/open licensed fonts, robust fallbacks and stable layout.
- High contrast, consistent readable body size, WCAG 2.2 AA aim, screen-reader labels for graph nodes and result state.

## Testing checklist to record in app PR

- Unit and integration tests for current-vs-proposed diagram and scenario authorization, stale intent invalidation, provider labeling, proposal/heldout separation, null/unknown metrics and certificate trust state.
- Negative tests for client-supplied run/receipt/check IDs, counterfeit hashes, stale tree/policy, changed test suite, missing required check, failed required check.
- Browser screenshots (landing, Atlas A, Atlas B, challenge, absent experiment, available recorded experiment, insufficient/rejected/verified verdict) at desktop/mobile where those states legitimately exist.
- Keyboard navigation and reduced motion E2E; overflow and console checks; clean public-browser smoke.
- No test may claim a real Meta provider call or sandbox verification unless actually observed. No screenshots of fictional sample results should be submitted as real product evidence.
- Record exact commands, exit codes, commit SHA, provenance IDs, limitations and any skipped validations.

## Definition of done

The front end has a distinctive, cohesive identity and makes a developer's next action unambiguous, **while correctly representing what Meta suggested, what the human approved, what a controlled agent executed, and what independent Verify established**. The demo can show a loss or insufficient evidence without looking unfinished or implying fake success.

**Related sources:** [Final UI design](FORECODE-UI-UX-FINAL-v4.4.md), [critical path](HACKATHON-CRITICAL-PATH.md), [app handoff](IMPLEMENTATION-HANDOFF.md), [Meta scientist](META-ARCHITECTURE-SCIENTIST.md), [contract freeze](CONTRACT-FREEZE-v1.md), [M8](../milestones/m8.md), [M9](../milestones/m9.md), [demo acceptance](DEMO-ACCEPTANCE.md).