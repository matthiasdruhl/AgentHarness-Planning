# ForeCode — Final UX Design Specification v4.4

**Status:** approved visual direction / implementation handoff candidate, 2026-10-26. **Scope:** design only. This document does not claim an implemented product, real model calls, real coding-agent trials, authenticated evaluator receipts, or evidence of architecture improvement. The linked local HTML artifact is a fictional interactive design prototype; it must not be treated as a verified application.

## Product thesis

**The code works. Will it survive what's next?** ForeCode enables engineers to confirm future development intentions; use Meta to propose a falsifiable architectural hypothesis and self-challenging counterexample; compare a real status quo with a targeted alternative; inspect matching controlled coding-agent histories; and evaluate source-bound, independent evidence without mistaking a model's interpretation for proof. Developer-local sandbox runs only; hosted UI remains bounded and read-only for execution artifacts.

## Signature experience

The visual narrative is **future intent → architecture hypothesis → adversarial counterexample → controlled A/B comparison → independent Verify certificate**. Visual states are causally linked but maintain separate authority boundaries. Predictions are violet, challenges coral, experiment analysis blue, evidence green only for its lifecycle. A trusted VERIFIED verdict additionally requires authenticated evidence; color alone is never proof.

### Public site vs private workbench

- The public landing page establishes the brand with editorial display typography, high whitespace contrast, an original branching technical illustration, restrained motion and one primary "Explore a case study" action.
- The product workbench uses a subdued navigation rail, compact reliable type, a large inspectable architecture canvas and contextual reasoning/source panels. It is designed for ongoing work, not for a product trailer.
- A small light research-document-style certificate provides a memorable proof moment while retaining evidence scope and provenance.

### Brand and typography

- Wordmark: compact lowercase `forecode.` with custom 4-node square-to-branch symbol. Keep lowercase name consistently; provide accessible text equivalent to the graphic.
- Editorial proposition: `The code works. Will it *survive* what's next?`
- Display: strong contemporary neo-grotesk with deliberate tight tracking; contrast *sparingly* with a literary serif italic on the homepage and in key section headers.
- UI text: legible sans-serif, normal capitalization for actual tasks, never all-monospace micro-text. Technical identifiers, paths, run IDs and provenance only: mono.
- Font-family roles: `display`, `editorial`, `body`, `mono`; platform-safe fallbacks are provided. Verify font license and loading before deployment; do not assume any proprietary font is redistributable.

### Color tokens

| Token | Value | Role |
| --- | --- | --- |
| `color.foundation` | `#0B0E14` | Outer shell / dark landing |
| `color.workbench` | `#10151C` | Primary investigation field |
| `color.panel` | `#181C25` | Quiet contextual panel |
| `color.divider` | `#313744` | Rare, 1px structural border |
| `color.text.primary` | `#F1F1EF` | Titles / primary text |
| `color.text.secondary` | `#A1A4AD` | Supporting body text |
| `color.identity` | `#D6ED86` | Brand / primary action |
| `color.hypothesis` | `#BCACFA` | Model hypothesis / candidate B |
| `color.challenge` | `#FF9885` | Model counterexample / disconfirmation |
| `color.experiment` | `#8ECBDE` | Parallel traces / selection |
| `color.evidence` | `#A5E1C5` | Evidence visual family; not automatic success |
| `color.unknown` | `#F5C786` | Missing / stale / untrusted data |

Use a dominant neutral base; accents must be semantic, not random gradients. Label statuses in text, with patterns/icons for visual differentiation and adequate WCAG contrast. Keep desktop and mobile style in the same system.

### Motion language

- 150–350 ms for microinteraction, ease-out; less where interaction is repetitive. The landing illustration can use gentle ambient progression, not constant distracting pulses.
- Animate only **semantic changes**: candidate A ↔ B (introduced modules and edges), hypothesis ↔ challenge (affected edge and selected inspector), a focused dependency path, or an event becoming selected.
- Never animate a protected receipt from unknown to VERIFIED; update status only from actual trusted evidence.
- Provide reduced-motion fallback and visible per-user motion control; keyboard access and information must not depend on animation.

## Desktop and mobile composition

- Desktop target: 1440 × 900; primary navigation left, graph with compact controls, right reasoning inspector, source delta dock directly under map. No long marketing slogans in technical views.
- Tablet: inspector below the graph when the two-column layout becomes tight; retain source/diff controls and avoid disappearing important labels.
- Mobile target: 390 × 844; collapse main navigation, keep clear stage tabs, allow graph pan/scroll *inside* its viewport with hint; code panel scrolls horizontally and inspector stacks. No document-level horizontal overflow.
- Use progressive disclosure: one active case file, one selected module, one selected reasoning lens. The graph is high-density but must retain a textual/keyboard alternative.

## Route and view information architecture

| Route / component | Interaction | Grounded evidence requirement |
| --- | --- | --- |
| `/` site | Hero, animated research branch, product preview, demo entry | Never imply demo is empirical evidence |
| `/projects` (later) | Select repo and approved intake | Not needed for P0 single fixture |
| `/cases/:case/architecture` | Intent state, A/B, scenario, graph filters, module selection, hypothesis vs challenge | Graph nodes from parsed bounded source, proposal/consent provenance; scope unknown imports |
| `/cases/:case/experiments` | Paired event trace, same task/agent/policy/budget, B setup cost, selectable events | Actual read-only recorded run artifacts; UI must not execute agents |
| `/cases/:case/evidence` | Evaluator verdict, check ledger, exact tree and policy hashes, scope/limitations, export certificate | Trusted evaluator-owned receipts only; no synthetic VERIFIED |

For a 10-day P0, the browser may implement these as views within one demo route while preserving deep-linkable semantics if practical. Do not expand scope into multi-tenant project management to achieve visual fidelity.

## Source-connected Architecture Atlas

- Three distinguishable visual layers: known module/import relations; proposed changes; projected impact for an explicitly labeled scenario.
- A current-vs-proposed switch is reversible, keeps shared layout anchors stable and excludes B-only nodes in A.
- Selection updates a contextual inspector (`title`, source path, module classification, synopsis) and `Source Inspector` Current/Proposed/Diff tabs.
- Proposed code examples in design prototype are **fictional**. Production may show only actual source and reviewed declarative change plans, preserving uncertainties. Never fabricate a concrete AST import or diff.
- Source inspector should link to the real approved repository location and show line numbers when known. For proposal-only changes, show declarative planned actions, not pretend-written source.
- The active scenario chips must show their authorization/revision status: confirmed user intent vs proposed/non-heldout scenarios. Changes to intent invalidate dependent decisions. An unauthorised scenario must not drive the trusted A/B manifest.
- Model hypotheses include mechanism, falsifiable measurable prediction, explicit disconfirmation, assumptions and alternatives. A challenge is *model-generated proposal*, not held-out evaluation.
- Graph imports are not proven runtime call chains. Unknown dynamic edges need an explicit indicator. Derived score language is fixed `modeled_effort_points_v1`, not hours, dollars or probabilities.
- If decision inputs are incomplete, show `No comparable recommendation` with limitations rather than making a false score.

## Controlled Experiment Explorer

- Display matched A/B parallel event traces with a clear shared frozen future task, same agent/model/tools/config, budget and protected evaluator policy. Count B's upfront cost separately from downstream task effort.
- Timeline events open detail inspector: timestamp when known, event kind, sourced run ID, event/log excerpt, artifact references, expenses/tokens when known, receipt/check and limitation status.
- Differentiate `provider mode (live|recorded|template)`, `evidence origin (measured|none)`, and `presentation mode (live|recorded)`; never infer one from another.
- Default empty when no real artifacts. The *design prototype only* includes a clearly optional fictional sample-state toggle; **remove the fictional mode from hackathon production.**
- Preserve all losing, neutral and inconclusive run data; report absent cost/tokens as `unknown`, not `0`.
- A/B superiority requires credible matched-run evidence, including true B preparation costs; Meta's incremental contribution requires a separate equally informed strong roadmap-aware template control. A single pair cannot establish broad generalization.

## Evidence Ledger + Certificate

- Empty/invalid/stale/forged -> `INSUFFICIENT_EVIDENCE`; authentic required check failure -> `REJECTED`; only actual fresh authenticated required passes -> scoped `VERIFIED`.
- The certificate includes exact evaluated tree, fixture hash, evaluator hash, required policy/checks, check artifact digest, protected receipt source, run IDs, timestamps, cost/unknowns, and scope/limitations.
- Keep Meta post-run interpretation (when permitted and grounded by sanitized server-owned artifact summaries) **outside** the independent certificate authority.
- Export must be disabled if no authenticated evidence; never export a fictional sample certificate as a real proof artifact. A locally inspectable design specimen may show fictional states with an unmistakable watermark.
- Use the contrasting light certificate visual deliberately: it should resemble a technical research record, not a marketing success card.

## QA acceptance / ready-for-build criteria

1. Visual: distinctive opening proposition and brand, restrained workbench, readable 1440px and 390px compositions, consistent design tokens.
2. Interactive: homepage → case; A↔B, scenarios, graph focus, keyboard module selection, current/proposed/diff, prediction/challenge, experiment trace inspection, evidence drilldown and `Cmd/Ctrl+K` all behave correctly.
3. Safety: sample data clearly labeled; production contains no fictional pass results; browser cannot run shell/agent/grader; protected evaluator results never originate from UI-controlled input.
4. Accessibility: focus visible, logical headings/tab order, SVG textual alternatives, no color-only state, reduced motion, readable contrast, screen-reader labels and WCAG 2.2 AA target.
5. Testing: snapshot tests for desktop/mobile views and empty/failure states; keyboard test; authorization and provenance negative tests; actual run command output and commit SHA captured. No test labeled passed when not run.

## Scope and priority for the hackathon

**P0 by Nov 2 feature freeze:** site hero and brief explanation; one real booking-case architecture with precise scope; bounded consented Meta hypothesis + counterexample; truthful recorded A/B display only if independent sandbox evidence exists; honest empty/insufficient certificate otherwise. Focus demo on the scientific method and useful technical execution. Production code must be newly authored after Oct 26 noon ET kickoff in the standalone eligible repository, never copied from this planning prototype.

**P1 after P0:** full code diff dock with line-level source linkage, richer graph pan/zoom/minimap, advanced trace inspector, compositional landing animations, further responsive polish.

**Documentation-only:** This final design spec and prototype are planning references. Do not directly copy pre-event artifacts from the planning repo into the submission; independently implement compliant components after kickoff, preserve file provenance, and adhere to the authoritative contract freeze. If this design conflicts with Trust/Verify requirements, those requirements prevail.

## Design references and rationale

- Linear: subdued navigation and fewer decorative separators; emphasize real work.
- Sentry: contextual investigative trace navigation and evidence density.
- Temporal: inspectable workflow/event history.
- LangSmith: A/B comparison and attribution caveats.
- GitHub: source navigation, code differences and keyboard-ready inspection.
- Resend/Warp: deliberate branding, role-based typography, richer but controlled chromatic system.

These are references to product patterns, not copied layouts, assets, fonts, or code. ForeCode's signature remains its causal sequence of model hypothesis, self-challenge, independent experiment, and scoped proof.