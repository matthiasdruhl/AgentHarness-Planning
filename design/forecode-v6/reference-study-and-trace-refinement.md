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
