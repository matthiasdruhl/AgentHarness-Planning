# ForeCode v6.1 — calm, inspectable Change Trace

**November 1, 2026 · Design reference and Codex handoff only.** This is a refinement of the existing v6 design, **not** a shipped ForeCode application, a real experiment, or a source-derived tree. The original v6 prototype and all six chapters remain. All production submission code must be independently authored inside eligible ForeCode; do not copy this planning prototype's HTML/CSS/JS.

## Sources studied and design judgments

These references are selected for *specific techniques*, not for visual imitation. They are primary product/design sources or published evaluation criteria rather than invented inspiration claims.

| Source | Verifiable pattern | ForeCode decision | What NOT to transplant |
| --- | --- | --- | --- |
| [Linear: a calmer interface for a product in motion (March 2026)](https://linear.app/now/behind-the-latest-design-refresh) | The navigation should recede so task content wins the hierarchy; refinement often means removing competing emphasis. | Keep the v6 editorial shell; one subdued selection indicator, not glowing paths or new panel stacks. | Linear's brand, UI assets, issue structure, gradients, or navigation implementation. |
| [Linear: redesigning the UI (March 2024)](https://linear.app/now/how-we-redesigned-the-linear-ui) | Reduce visual noise and align navigation, tabs, headers and panels; validate a prototype against real interface states. | Preserve chapter location while selected arm/node persist; test all states and mobile overflow. | A general productivity-dashboard template. |
| [Vercel: tracing](https://vercel.com/docs/tracing) | A trace explains a single operation with discrete spans, timeline and details available on inspection. | Show a bounded sequence with explicit observed/unknown status and a focused explanatory readout. Use phase controls, not automatic pseudo-execution animation. | Implying a real chronological runtime span or duration without actual authenticated event timestamps. |
| [GitHub: navigating code](https://docs.github.com/en/repositories/working-with-files/using-files/navigating-code-on-github) | Definition/reference navigation ties an inspected entity to concrete context. | A selected conceptual node can explain a responsibility; only authenticated source records may link a specific path/diff. | Showing synthetic dependencies as verified source relationships. |
| [Webby Awards judging criteria](https://www.webbyawards.com/judging-criteria/) | Good navigation gives a clear mental model; innovation must improve function, not simply add ornament. | Optimize for a visitor identifying the task, alternative, evidence status and next step quickly. | Award-bait visual effects and overbuilt charts. |

These are design principles, not endorsements of ForeCode by any referenced product or award.

## What changed in the v6 planning specimen

1. **No decorative animation on the Trace.** Removed the glow filter and path pulse from rendering. A selected lane uses a quiet continuous accent; proposed nodes remain dashed. Nothing now looks like a recorded agent running.
2. **Node-level inspection without extra cards.** The existing compact A/B diagram retains exactly four responsibilities per lane. Each role-button node accepts click, Enter and Space. Selection updates one small explanatory line below the graph.
3. **One persistent context, not one new dashboard.** The selected A/B lane and conceptual node persist as the visitor moves between Lab, Tournament and Time Machine; a subdued notice line reminds the visitor of the selection and unavailable evidence.
4. **Provenance remains explicit.** Focused nodes are conceptual. This specimen does not claim file-level source truth, prepared B modules, verified changes, real timestamps or authenticated experiment outcomes.
5. **Decision Report remains the payoff.** Keep its neutral paper surface and fictional copy modes for design review only. A production report must deep-link to exact approved source/run/receipt IDs, not send three generic reasons to the same invented proof.

## v6.2 — traceable report reasons, not a decorative playback

This follow-up adds a **single quiet evidence-question affordance** at the Tournament fairness rail and beside each Decision Report reason. Each navigates to a shared, compact Evidence Laboratory explanation: (1) comparability, (2) independently checked receipts, (3) source/preparation history, or (4) hypothesis limits. No additional graph, card stack, timeline animation, fabricated receipt or synthetic timestamp appears.

This is the "observability inspector" pattern applied *carefully*: navigation leads to a specific inspectable question, not a generic feature page. The current prototype has **no authenticated matched study** and says so in every focused explanation. Fictional alternate Decision Report copy modes remain fictional even when the visitor follows a basis link. A future production implementation must resolve a reason to an approved study-specific check/receipt/source identity, or explicitly show the missing-evidence explanation. Do not make every report reason link to an unrelated proof page.

Review benchmark: after clicking reason 01, the visitor should be able to say exactly which required checks and original receipts are missing; after reason 02, exactly which source and prep-inclusive measures are missing; after reason 03, why an LLM proposal is not independent proof. Navigation is accessible and returns to the report through the chapter rail; print hides these prototype-only navigation controls.

## v6.3 — reference study: first impression and study hierarchy

Sources are *primary design references*, not evidence of endorsement or ratings for ForeCode.

| Existing design | Evidence of the design decision | Applied to v6.3 | Rejected imitation |
| --- | --- | --- | --- |
| [Linear: March 2026 calm-interface refresh](https://linear.app/now/behind-the-latest-design-refresh) | The Linear team explicitly reduced competing sidebar/border emphasis and aligned navigation across workspaces. | Let the architecture choice sit below the future requirement as **one ruled two-option line**, not two glowing feature cards. Reduce duplicated Tournament status copy. | Linear's product UI, exact component layouts and visual assets. |
| [Vercel: Web Interface Guidelines](https://vercel.com/design/guidelines) | They call for deliberate alignment, visible keyboard focus, ≥44px mobile hit targets, inline help, responsive coverage, all important states, and no dead ends. | Both landing alternatives are focusable native buttons with ample targets; selection opens the existing Lab with the matching A/B context. Fairness has one labeled inspection action. | Cloning Vercel UI, Geist typography or branding. |
| [Raycast: A fresh look and feel](https://www.raycast.com/blog/a-fresh-look-and-feel) | Their published design principles are fast, simple and delightful, preserving familiar workflows while refining interactions. | One purposeful click from the visitor's future requirement to an architecture to inspect. No onboarding wizard, new mode, simulated processing animation or needless transition. | Raycast launcher UI and command-palette motifs. |
| [Vercel: introducing Geist Serif, October 30, 2026](https://vercel.com/blog/introducing-geist-serif) | Editorial display serif is used as a distinct, deliberately limited headline voice alongside the functional interface type family. | Preserve v6's **existing** selective Instrument Serif moment (hero/report) and Plex hierarchy. Do not add serif to every data surface. | Changing fonts to Geist or importing any brand font assets. |

### Actual changes

**Landing:** keep the authentic conceptual NOW → NEXT progression, and make the first architectural choice visible as a very small A / Keep versus B / Prepare decision hinge under the requirement. The two native buttons set the same conceptual A/B focus used by the Lab and Tournament. Neither predicts a winner or asserts a real B preparation.

**Tournament (historical v6.3 order; superseded by the final v6.4 audit closure below):** move the evidence-integrity caveat to one compact status line; present three equal-condition prerequisites (**same future task**, **same starting point**, **same downstream conditions**) with exact truthful missing/unchecked statuses; then a short ruled A/B approach definition; only then show the restrained Change Trace and measurement table. This establishes research fairness as the reader's first question, not a decorative status chip or a field of unknown numbers.

**Responsive:** landing alternatives stack at 390px. The Tournament prerequisites move 3→2→1 columns by viewport, and the brief A/B description stacks when necessary. No new full-page horizontal overflow and no smaller tap targets.

**Trust:** the schematic's own top label is now **ONE FUTURE REQUIREMENT / SCHEMATIC** rather than presenting a planning-only example as a frozen study. Production replaces the labels and statuses only from independently authenticated publication data.

## v6.3 continuity correction — chapter history

The original six-chapter specimen used `history.replaceState` on chapter changes. That made browser Back/Forward fail to restore previously visited chapters even though the URL fragment appeared to identify a chapter. The refined specimen uses `pushState` for explicit chapter navigation and restores the active chapter from browser history without creating a second navigation entry. The selected conceptual A/B/module/phase context remains consistent across chapter returns. Direct `#report`/other chapter URLs still work. This is a **navigation behavior** improvement, not an additional visual animation.

The smoke test now exercises A/B entry from the landing page, selection persistence through Tournament, browser Back and Forward, comparative-layout clarity at 1440/768/390px, and reduced motion. Native browser semantics take priority over bespoke transition choreography.

## v6.4 — editorial Decision Report and inspectable evidence continuity

This is a design-only refinement in the planning repository. The production report must continue to consume the existing **approved read-only publication/decision-report** boundary and may never let the browser synthesize an authenticated outcome.

### Public reference evidence and selected patterns

| Design source | Documented principle | ForeCode application | Explicitly rejected |
| --- | --- | --- | --- |
| [GitHub Primer: Typography](https://primer.style/product/getting-started/foundations/typography/) and [Primer typography usage](https://primer.github.io/design/foundations/typography/) | Clean reading hierarchy, left alignment, restrained color as emphasis, readable line lengths, semantic headings. | Keep the warm report sheet, dominant headline and sparse body type; cap report paragraphs near 63–65 characters on a typical line. Preserve the hierarchy of verdict → supporting study facts → reasons → action. | Colored winner cards, ornamental score badges, type treatments that override semantic reading order. |
| [GOV.UK Design System: Summary list](https://design-system.service.gov.uk/components/summary-list/) | Compact `<dl>` key/value groups clarify facts at the end of a multi-step journey, without requiring repeated cards. | Replace the vague case-note sentence with a three-part inline brief: **Decision scope**, **What was tested**, **What remains unknown**. | Copying UK-government visual styling or treating a summary as a new evidence authority. |
| [Vercel Web Interface Guidelines](https://vercel.com/design/guidelines) | Keep focus clear, all states truthful, links/controls predictable, 44px mobile hit areas, explicit empty states and purposeful print composition. | Make report outcome previews explicitly fictional, update study facts on every mode change, offer one reversible evidence navigation link, preserve keyboard hit targets, and hide prototype controls in print. | Loading animations, unverifiable confidence scores, extra "AI insight" labels, or controls that rewrite real adjudication. |
| [Linear 2026 interface refresh](https://linear.app/now/behind-the-latest-design-refresh) | Supporting interface structure should recede rather than compete with the task. | Tone down the large design-preview warning into one ruled sentence; use thin editorial rules rather than separate colored boxes inside the report. | Loud warning cards inside the memo, decorative colored progress stages, repeating the same status in five panels. |

### Concrete reference changes

1. Replaced the bulky report-introduction annotation with a compact **DESIGN COPY REVIEW** line above the fictional outcome buttons. In production, no outcome selector appears.
2. Added a small, text-only study state under the report's case overline. **NO AUTHENTIC MATCHED STUDY** is the default; all five alternate study outcomes explicitly begin **FICTIONAL SCENARIO**. The headline never claims those modes are verified.
3. Replaced the old case-note with one semantic `<dl>` displaying decision scope, what was tested, and what is still unknown. All six reviewed scenario modes update those last two values together with the existing headline and supporting reasons.
4. Removed some typography competition: main prose stays around 65 characters per line, evidence links gain larger click/focus targets, and responsive facts compress from three to two to one column without generating new cards.
5. Tightened printing: display only the report document rather than a redundant dark chapter heading or copy-review controls; preserve the specimen disclaimer in the printed report and avoid breaking numbered reasons.
6. Added one text-level **Return to Tournament / Return to Decision Report** affordance in the existing Evidence Laboratory focus region. It restores a reader's originating chapter and preserves the fictional report mode. Browser Back/Forward remains native.

### Proof and limitations

The browser-smoke specification verifies six copy states, matching facts, the no-authentic-study default, reverse evidence navigation, print-only visibility and responsive layouts. Passing Playwright is not the same as a human pixel-perfect screenshot audit. The prototype is not a published study and reports no real user/agent data, Meta outcome, source-tree evolution or verdict.

## Layout and interaction contract

- **Signature:** one amber future-change diamond; one trunk; two disciplined A/B lanes. No particle system, stream animation, spontaneous topology growth or automatic winner reveal.
- **Density:** maximum four responsibility labels per lane in the *conceptual* reference; don't turn real files into a dense 50-node plot for the judge demo. A full repository browser can live behind explicit inspection.
- **Selection:** default A / Service. Selected node gets a stronger hairline border; all other labels remain legible. Focus never changes the experimental verdict or data provenance.
- **Color:** restrained cyan for selected focus, violet/dashed for *proposed* concepts, amber for the *future* requirement. The same green cannot imply both "selected" and "verified".
- **Inspection:** one-line contextual explanation under the graph; not a giant second panel. Source-backed path and diff content belongs in the existing side inspector when genuinely available.
- **Phases:** Before / Prepared / After reflect source availability, not animated narrative time. No authenticated phase means an explicit unavailable state.
- **Keyboard:** nodes can be reached by Tab and activated by Enter/Space; focus is restored after rendering. Explanations remain readable without color.
- **Motion:** none required for meaning. Optional focus stroke transitions are 160–180 ms and suppressed under reduced motion.
- **Responsive:** 390px graph scrolls in its own region, never expands document width; the focused readout remains below it.

## ForeCode production mapping

**Existing boundaries, do not invent new authority:**

- `IntentWorkspace` + `ForesightWorkspace`: current confirmation, revision invalidation and consent; never allow redesign to drop them.
- `ArchitectureAtlas` + reviewed booking graph: bounded source context and candidate proposal, with explicit separation between current code and speculative B.
- `PublicTournament`, `TournamentStudy`, publication loader: approved read-only run/evidence and actual source comparisons; no frontend-verification service.
- `DecisionReport` pure engine: report composition; no new client winner scoring.
- `RecordedCertificatesView`: approved certificate scope.

### Recommended production increments

1. Build `ChangeTrace` as a presentation-only React/SVG component using **typed, source/provenance-tagged inputs**. It does no network, filesystem, cryptography, model inference or verdict computations.
2. Add a single `TraceFocus` state to the existing research experience (arm, selected existing source node or conceptual responsibility, selected phase). Keep it while navigating chapters, but validate it against each resolved data source; on source/context revision, clear stale selection.
3. Expose a source inspector for actual path/diff only if authenticated view data exists. Otherwise display an honest proposed responsibility annotation.
4. Connect Tournament read-only `PublicTournament` event stages to a compact static timeline. Use timestamped steps only if genuine event data exists; never invent gaps or simultaneity.
5. Link a report reason to the *specific* corresponding approved check or source/receipt; if the reference isn't available, explicitly say so.
6. Test each state at 1440/768/390, keyboard, reduced motion, no JS error, no doc overflow; retain all existing security and consent E2E checks.

## Anti-overdesign checklist / rejection criteria

Reject implementation if it introduces any of: animated execution pulses when no live run exists; glows or blurred filters on the graph; more than one simultaneously bright selected path; decorative mini-metrics without provenance; generic dashboard cards replacing the story; false file/diff identities; a browser-controlled verifier; a new confidence score; invented source snapshots; or a real-looking animation timed from fictional phases.

## Prototype tests and scope limits

`design/forecode-v6/browser-smoke.mjs` now includes pointer/keyboard node inspection, cross-chapter selection persistence, absent-source labels and a guard against pseudo-execution pulses, in addition to the existing six-chapter, no-run, responsive and fictional-report tests. This is **test source added**, not a claim that the remote browser workflow has already passed. The reference is illustrative; the eligible ForeCode application must be tested separately after independent implementation.

## v6.4 final audit closure — trace-first Tournament, evidence binding, responsive focus

This is the last targeted reference refinement, not a new v7 design or a source of experimental truth. It closes the issues found in the v6.4 audit without copying the planning prototype into the hackathon implementation.

### Tournament: show the question before explaining the methodology

- At 1440 × 900, the actual Change Trace canvas begins within the initial viewport and precedes the three fairness prerequisites, rather than being buried below them. The no-authentic-paired-results statement remains above the trace.
- Fairness is **not** optional or downplayed: the three equal-condition prerequisites, the inspection link, the A/B definitions, and the source/effort evidence table follow directly below the trace in the same chapter.
- No drawn lane expresses a win, live run, verified source edit or causal Meta advantage. The proposed boundaries remain dashed and A/B focus is purely inspection.
- Do not restore large status-card stacks or move the trace below boilerplate when adapting this into ForeCode. Show task, hypothesis, alternative paths and evidence status in one glance.

### Production Change Trace data contract — presentation only

An independently authored production component should accept a source-typed, read-only view model; this is a design contract, **not** an additional evaluator:

| Trace view state | Necessary approved inputs | Allowed output | Forbidden output |
| --- | --- | --- | --- |
| `CONCEPTUAL` | Human-confirmed intended future task and explicitly labeled conceptual module responsibilities | Requirement diamond, dashed proposed boundaries, selected conceptual explanation | Specific edits, measured costs, claimed baseline authorization defects |
| `BOUNDED_SOURCE` | Reviewed source-graph identity and path/revision association at the approved disclosure level | Known source node/path inspection and *separately labeled* proposed edits | Changed files or measured propagation presented as observed |
| `OBSERVED_COMPARISON` | Fresh approved publication plus admitted per-arm run/tree/receipt bindings, validated source comparisons and disclosed stage data | Source-backed changed-file list, exact available hashes, linked checks, *actual* metrics | Fabricated graph edges, omitted preparation, client-asserted verdict, inferred Before/Prepared/After snapshot |
| `UNAVAILABLE` | Missing/stale/invalid/unmatched inputs or unavailable stage | Specific missing-data explanation, honest Insufficient Evidence path | Zero-filled metrics, blank-but-green VERIFIED state |

Observed changes are **not** proof that full module-level dependency topology is available. If only `sourceComparison` contains pinned changed files, show that file list (and available hashes) with no inferred dependency edges. A selected phase without an approved snapshot stays unavailable even if a speculative diagram could be rendered. The component never calls Meta, agents, a grading service or publication endpoint itself.

A/B/phase/node focus remains UI-only state, and is invalidated when case, confirmed intent revision, task identity, approved publication or graph revision changes. Reporting uses the existing protected server-side publication and decision composer, not browser-calculated success or comparisons. Study M remains separate from Study F and requires a real C control.

### Report: scenario-specific reason → evidence correspondence

The prototype's six *fictional* modes now assign an evidence question to **each displayed reason**. An invalid comparison routes to comparability, a correctness tie routes to checks/actual effort, and single-arm outcomes route to verified-check/source/scope questions. An inspection action stores the originating control identity and returns keyboard focus to that precise report reason (or Tournament fairness link). Evidence never changes the decision.

In production, resolve each reason to its *own* exact approved study/check/source/run/receipt target. If a referenced result is absent, the explanation identifies the missing data rather than linking vaguely to a general evidence screen. Model output cannot authenticate a receipt, and a conditionally supported recommendation does not replace the independent per-arm verdict.

### Mobile and interaction acceptance

- The document metadata in the paper report must be independently wrapped at 390px rather than colliding with the ForeCode mark; report headlines wrap without horizontal overflow.
- The chapter navigation exposes a discoverable horizontal-scroll cue on small screens. The architectural graph scrolls **within its own labeled, keyboard-focusable region**, never the entire document.
- Technical labels are kept legible by an 840px minimum diagram canvas and larger SVG text, with deliberate internal scrolling when narrower.
- Inspecting evidence and returning restores the originating keyboard target, the report mode, and the selected chapter context.
- Chromium smoke now checks the Tournament graphic's first-fold position, all six mode-specific reason targets, return focus, report metadata wrapping, mobile chapter scrolling, graph focus, no document overflow and the existing reduced-motion/print/phase/no-run scenarios.
- These checks do **not** replace independent human review, screen-reader evaluation, Safari/WebKit, or production source-bound integration E2E.

### Final implementation priority

Keep the existing implementation sequence: story/shell, authentic read-only Decision Report, source-typed static Change Trace plus Tournament, Time Machine as approved stages permit. Cut decorative transitions before cutting an independently verifiable study. Preserve the Nov 2 integration checkpoint, Nov 3 approximately 3 PM Eastern hard feature freeze and Nov 4 submission, as stated in the revised handoff.
