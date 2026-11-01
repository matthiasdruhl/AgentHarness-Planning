# ForeCode v6 — no-improvisation implementation handoff
**October 30, 2026 · Design-locked guidance for eligible ForeCode app.** Applies inside the existing M8/M9 frontend refinement effort; no new tournament/evaluator service, no new contract freeze, no authorization for real agents.

## Read before touching files

1. design/forecode-v6/design-system-and-experience.md (visual and interaction decisions locked)
2. design/forecode-v6/prototype.html (fictional interaction reference; do not copy planning code into submission)
3. design/forecode-v5/impact-first-design-spec.md and docs/IMPACT-AND-DEMONSTRABILITY-REFINEMENT-2026-10-29.md
4. docs/ARCHITECTURE-TOURNAMENT-PROTOCOL.md, docs/EXPERIMENT-EXECUTION-AUTHORIZATION.md, docs/OFFICIAL-PARTICIPANT-RULES-2026-10-26.md
5. Current ForeCode implementation, its unit/e2e tests and server publication contracts.

**Critical:** All submitted implementation code is newly authored in eligible ForeCode after hackathon kickoff. Respect pre-event provenance limits. No copying HTML/CSS/JS from earlier planning prototype. Keep existing intention confirmation, Meta controls and user consent, independently verified receipts and public read-only gates.

## Exact current integration points as inspected Oct 30

- src/app/page.tsx renders the real IntentWorkspace. Do not strand or delete the working intent workflow.
- src/components/intent-workspace.tsx owns session intent confirmation and ForesightWorkspace. Preserve revision invalidation, consent and provider status.
- src/app/globals.css is currently the light token baseline. Introduce v6 roles with namespaced variables/components, avoiding accidental global regressions during transition.
- src/components/architecture-atlas.tsx uses a bounded real booking graph but may show hypothetical B edits. Do not claim that proposed B is committed/prepared.
- src/app/experiments/page.tsx loads loadApprovedRecordings() and loadApprovedTournamentRecordings() server side. Preserve read-only loading, states, errors and existing links.
- src/components/tournament-overview.tsx shows no published study default. Keep that honest state rather than replacing it with a “sample winner”.
- src/components/tournament-study.tsx renders a real approved PublicTournament and has per-arm metrics/checks. Its relevant projection is in src/lib/experiment/tournament-publication.ts; reuse validated published fields.
- src/app/certificates/page.tsx and associated components must remain authoritative for authenticated certificate status and provenance.
- SourceComparison is a list of authenticated published file comparisons, not necessarily a full BEFORE / PREPARED / AFTER topology. Do not invent observed paths.

## Locked route / chapter choices

- Public landing is the entry story. Preserve accessible “Open research workspace” / confirmed-intent path. A nonbreaking introduction inside the current route may be the lowest-risk first slice; if splitting / and /workspace, migrate tests, links, cache and accessibility intentionally.
- Workbench chapter labels/order: **Case → Architecture Lab → Tournament → Time Machine → Evidence → Decision Report**. Case may live as the Architecture Lab opening, not a sixth independent analysis service.
- Reuse existing /experiments and /certificates routes. The Decision Report is a deep-linkable read-only projection of approved study data, not a new evaluation endpoint.
- Progress indicator: one active chapter, shared case ID/requirement, no forced navigation wizard (direct deep links still work). CTA copy locked in spec.
- “NOT RUN” / “No approved evidence” is the correct default; any run-progress UX must use actual recorded status, never speculative animation.

## Proposed component design boundaries

- CaseStory (read-only current booking + human-confirmed upcoming task, typed current/unconfirmed states)
- ResearchShell + ChapterRail (persistent case context, navigation, keyboard and active state)
- ChangeTrace (presentational SVG/DOM projection; no network, no outcome state machine, always source-typed)
- SharedConditionsRail (compare task/agent/runtime/budgets/grader, incomparability truth)
- SourcePhaseInspector (phase-specific authenticated tree, files, diff, missing-state fallback)
- EvidenceLedger (approved per-arm receipt and check bindings)
- DecisionReport (read-only pure server derived presentation; no browser scoring, only previously fixed decision criteria)
- ExperimentViewAdapter (typed mapping from existing validated public DTOs, unknown values preserved).

These are suggested file/component boundaries, **not required new services**. Avoid creating an additional client-owned source of empirical truth.

## Data-to-UI trust table

| Provenance | Allowed UI treatment | Forbidden |
| --- | --- | --- |
| Human confirmed intent | Future requirement diamond and plain task statement | “Observed failure” |
| Bounded reviewed source graph | Known path/edge inspector | Claim of exact downstream changed files |
| Actual Meta proposal + self-challenge | Hypothesis and falsifier, tagged as model-origin | Protected grader or winner verdict |
| Validated published study | Matched arms, costs, statuses, run/source digests | Synthetic improvements, blended C |
| Independently authenticated source comparison | Observed changed files/diff and source stage | Invented full topology or missing prepared tree |
| Authenticated per-arm receipt | Limited check outcomes | General architectural superiority |
| Missing/stale/invalid record | Inconclusive / unavailable with next action | Quiet zero-coercion, green VERIFIED badge |

## PR sequence and test gates

### PR 1: Story and visual foundation — P0
1. Add IBM Plex Sans / Instrument Serif / IBM Plex Mono with licensed provider and accessible fallbacks; namespaced v6 tokens precisely from spec.
2. Replace generic/light presentation only as far as existing workflows remain working. Build editorial case story plus global chapter wayfinding and signed status notice.
3. Keep the real booking existing behavior separate from conceptual future risk. Link current confirmed intent logic.
4. QA desktop 1440×900, tablet 768, mobile 390×844, keyboard, reduced motion, all existing source tests.

### PR 2: Read-only Decision Report — P0, highest demo value
1. Define narrow projection in server/read-only data layer from existing authenticated PublicTournament. Never add a competing verifier or scoring engine.
2. No authentic matched study → composed “Insufficient evidence to choose” memo with exact missing inputs.
3. A-only/B-only authentically verified vs rejected → scoped Keep/Refactor wording; include preparation accounting and limitations.
4. Both verified → correctness tie, and only a conditional recommendation if a previously fixed criterion plus comparable prep-inclusive data warrants it. Both rejected/invalid/stale → inconclusive.
5. Visual outcome typography/surface identical in all states. Link only extant approved evidence/certificate. Print styles.
6. Unit tests from real fixture-shaped sanitized public DTOs: no-run, invalid, stale/missing receipt, both-pass, A-only, B-only, both-fail, optional C; unknown money/time remain unknown.

### PR 3: Change Trace and Tournament clarity — P0
1. Build accessible source-aware graph with stable geometric A/B paths and one requirement diamond; do not copy HTML prototype code.
2. Separate dashed hypothetical B boundary, known source topology and authenticated observed changed-file evidence. Select A/B; focus textual inspector.
3. Shared conditions rail makes frozen task and agent/tool/runtime/budget/grader equality explicit or not comparable/unknown.
4. Preparation and downstream metrics always separate, one validity explanation, no forced winner, no A/B → Meta uniqueness inference.
5. Tests for projection access, no client-forged evidence, reduced motion, keyboard and 390px graph inspector.

### PR 4: Time Machine and visual polish — conditional P0/P1
1. Arm/phase selection with real source hashes/diff when approved; missing prepared/after panel is a complete, intentional state.
2. No animated “change wave” through absent source. On real source comparison, accessible changed path list must accompany any graph emphasis.
3. Preserve Evidence Laboratory/proof provenance. Benchmark page visual and keyboard check, cross-viewport screenshots, avoid document-wide overflow.
4. Run through actual three-minute demo with required first 12-second provenance disclosure.

## November 1 v6.1 refinement: review-backed and deliberately minimal

Read [the v6 reference study](../design/forecode-v6/reference-study-and-trace-refinement.md) alongside the design-system lock before implementation. The updated planning prototype **is not transplantable event-created source code**.

Production implementation should introduce a *presentation-only* typed `ChangeTrace` controlled by one A/B/node/phase focus state, preserving the current real Meta/intent flow and authenticated publication loader. Each node is inspected via click or Enter/Space and focuses an existing **validated** source path where one exists, otherwise a plainly conceptual responsibility note. Persist focus across chapters; invalidate it when the underlying intent/graph/study changes.

Visually, remove decorative glow and auto-pulsing paths, keep four or fewer labeled responsibilities per schematic lane, minimize colors and supporting chrome, and put the only focused-node explanation directly below the trace. No new dashboard cards, success animations, fake observations, or extra scoring engine.

Add E2E for: focus and keyboard activations; chapter selection persistence; real source vs conceptual labels; A/B correctness states; no fake pulse on missing evidence; 390px inner scrolling; and reduced motion. Link specific Decision Report reasons only to existing approved run/source/receipt references. A generic link to a proof page is not evidence of that precise claim.

## v6.2 Tournament and report evidence inspection

The planning prototype additionally demonstrates one small contextual Evidence Laboratory readout. From Tournament the user inspects **fairness prerequisites**; from Decision Report, each numbered reason has one targeted inspection route for (a) required-check/receipt evidence, (b) source and preparation accounting, or (c) model hypothesis limits. These routes are design scaffolding: the prototype has no real published study.

Implement only with server-validated, approved per-study references when present. Never invent report-to-check links, treat synthetic mode switches as evidence, or change the original verdict when a user focuses an explanation. If no approved evidence is available, the inline inspected question must state exactly what is missing. Use focused text and thin separators, not a panel stack. Test keyboard focus after navigation, mode isolation, deep links and print report layout.

## November 1 v6.3 extension — deliberate landing and fair-comparison hierarchy

The planning specimen now includes one minimal **A / Keep vs B / Prepare** decision line directly after the illustrative future booking requirement. An A or B button opens the Lab with the corresponding conceptual focus, without claiming any actual prep/source change. Preserve the original confirmed-intent workflow, keyboard accessibility and no-fake-evidence boundaries in any independently authored production implementation. The landing controls should not dispatch provider requests or execute experiments.

For the Tournament, the former v6.3 study-reading order put the prerequisites ahead of the trace; **the final v6.4 audit closure below supersedes that ordering**. Use no-run/available status, immediately visible restrained Change Trace, then same-task/starting-tree/downstream prerequisites, balanced A/B definitions, and actual measurements if available. If authenticated publication is missing, use explicit NOT RUN and Unknown, never invented success/latency. Refine visual hierarchy by removing duplicate chrome rather than adding cards.

Copy, spacings, media breakpoints and explicit text states are specified in [the v6.3 reference study](../design/forecode-v6/reference-study-and-trace-refinement.md). **Do not transplant the planning HTML/CSS/JS into the event implementation.** Cross-browser E2E should verify that the two landing alternatives open the correct selected context, a cancelled/revised intent clears stale focus, desktop and 390px pages have no document overflow, and the Tournament remains coherent for no-run, tied, rejected and incomparable authenticated states.

## November 1 v6.4 extension — Decision Report editorial pass

The planning prototype now demonstrates a clearer evidence memo using a three-fact semantic summary (scope, tested basis, unknowns), small study-state metadata, larger evidence-link hit areas, and intentional print-only report composition. The mock controls update the facts for all six fictional outcome variants and can return from specific evidence questions without losing their location in the visitor story.

For independently authored event implementation, **do not copy the prototype code**. Instead bind those headings/fields to the existing read-only approved Decision Report catalog and its supported fields: no data means unavailable; missing required-check receipts, source identity, or preparation-inclusive metrics remain unknown. Preserve separate per-arm correctness and overall recommendation. Derive report links only from matching approved study/check/source/run/receipt IDs; never let a user-visible report mode select or override the outcome.

Build real responsive/print tests: no-run and invalid; A-only, B-only, both-pass and both-fail states from authorized test fixtures; explicit provenance status; semantic summary fields; evidence-link return focus; report print with 2–3 indivisible reasons; 390px no document overflow; keyboard controls; `prefers-reduced-motion`. In particular, the production report must not imply a Meta-vs-control advantage from Study F alone.

## Explicit anti-pattern rejection list

Reject any commit with: fictional report selectors shipped in app; sample metrics rendered as production; unprotected browser grading endpoint; Meta text determining VERIFIED; source trees generated from speculation; auto-winner purely from passing checks; aggregate “architecture score”; generic SaaS cards across every view; floating purple gradients; randomly styled pill badges; all-caps mono paragraphs; permanent glowing traces; fake telemetry; content hidden behind unreadable tiny graph labels; UI claims differing from authenticated records.

## Acceptance before merging into ForeCode

- Public intro → actual valid confirmed intent → Meta result or honest absent state → tournament → evidence → report is traversable without broken APIs or rerunning protected tools in browser.
- No authentic evidence means “Insufficient evidence to choose,” with real reason and actionable next experiment.
- Keep, Refactor and Insufficient conclusions have equal design dignity and correct scope.
- Case ID, task digest, arm run ID, tree hash, receipt ID link consistently wherever displayed.
- Fairness/Study F/Study M distinctions remain explicit. Unavailable and rejected are not conflated.
- Real data-derived numerical metrics are not guessed, and unknown is never zero.
- Accessibility: tab order, named stage and arm controls, screen reader text alternative, visible focus, reduced motion, print report, mobile 390px, tablet 768px, desktop 1440px, no page-level overflow.
- Production browser tests prove every material UI state; design-reference Playwright checks alone are insufficient.

## Priority / cuts

Nov 2 evening soft integration checkpoint; Nov 3 about 3 PM Eastern hard feature freeze (user revision November 1): **Decision Report + story first**, then static Change Trace/Tournament; animate only if stable. Nov 4 submission: working credible study and proof outrank visual complexity. Never replace a missing real experiment with attractive fictional results.

Use exact design choices from design-system-and-experience.md. Do not hand off typography, spacing, interactions, labels, colors, outcome-state decisions or what to cut as creative freedom for Codex.

## November 1 final v6.4 audit closure — do not improvise the evidence UI

The final reference pass in `design/forecode-v6/` keeps the existing product identity and six chapters. It moves the Tournament's Change Trace **above** prerequisite rows, keeps the honest no-run status visible, maps fictional report reasons to their matching evidence categories, restores the exact originating keyboard focus on return, and improves responsive graph captions, mobile chapter discovery and memo metadata.

Implement the **behavior**, not the old prototype code:

1. Compose `ChangeTrace` from a typed read-only *presentational* view model with clearly separated `CONCEPTUAL`, `BOUNDED_SOURCE`, `OBSERVED_COMPARISON` and `UNAVAILABLE` treatment. No client-side API calls for experiment execution or outcome calculation. Source-backed display requires existing approved server-side publication and exact arm/run/tree/receipt lineage; a list of changed files is not a dependency graph.
2. Keep the trace immediately visible after the Tournament title/no-run status, followed by equality prerequisites and the measurement rail. At 1440×900, at least its opening must be visible without scrolling. If the study is unavailable, visibly say so; do not invent a result.
3. Bind every report reason to the appropriate approved **specific** check/source/receipt/comparability target. If the target is absent, show its scoped unavailability; no dead generic links. Preserve `INCONCLUSIVE` and distinct per-arm verifier statuses. The production report has no fictional outcome controls.
4. When evidence inspection opens, remember the initiating control (not just the origin chapter), and restore focus and study context upon return. Source/intent revision invalidates stale selection.
5. At 390px, use internal focusable graph scrolling and an obvious scroll affordance for chapter navigation; prevent the paper report's document metadata from colliding with the logo. Make labels legible, preserve visible focus and reduced-motion behavior.
6. Add production tests for first-viewport Tournament hierarchy; report reason → exact evidence target across no-run, invalid, A-only, B-only, both-pass, both-fail; source-backed versus proposed labeling; stale/forged receipts; keyboard return focus, 390/768/1440px layout, actual data-bound reports and print.

The full state table and limitations are in `design/forecode-v6/reference-study-and-trace-refinement.md` under **v6.4 final audit closure**. The [planning prototype smoke workflow](../.github/workflows/forecode-v6-browser.yml) is a design safety check, not evidence that the real ForeCode app has implemented the same behavior.
