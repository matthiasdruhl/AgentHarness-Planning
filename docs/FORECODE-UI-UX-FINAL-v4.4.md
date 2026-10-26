# ForeCode — Final Frontend Design v4.4

**Status:** final design direction, approved for implementation planning (2026-10-26). **Artifact type:** design-only documentation in the pre-event planning repository. **Not** the hackathon submission, an operational app, a live Meta call, a measured experiment, or a verified result.

## Design intent

**Public hero:** "The code works. Will it *survive* what's next?"

**Product:** ForeCode is a developer architecture research instrument: **confirmed future intent → Meta's falsifiable hypothesis → Meta's adversarial counterexample → human-approved controlled A/B → independent Verify certificate → optional non-authoritative Meta interpretation**.

Unlike generic AI chat/dashboards, the signature interaction is an **Architecture Atlas** that traces hypothetical impact from a proposed future requirement to specific modules and code deltas, then lets developers inspect what an actual matched experiment and its independent evidence establish. We do not claim Meta or candidate B is better until a valid study supports it.

## Two related, distinct visual environments

**Landing page (editorial):** Strong oversized display typography, sparse high-contrast composition, restrained chromatic cues, original branching-research illustration, deliberate negative space, limited primary CTA ("Explore a case study"). An animated path can highlight hypothesis, challenge, experiment and evidence as visitors interact. Avoid rows of generic feature cards, decorative KPI tiles, stock hero art and visual noise.

**Developer workspace (instrument):** Calm left navigation, slim provenance/header ribbon, one dense central investigation surface, contextual right-side inspector, compact tabs, a source/diff dock, and clear evidence boundaries. Structural alignment, not animation, defines quality. Match browser applications such as Linear's subdued chrome, Sentry's inspection ergonomics, Temporal's workflow history, LangSmith's run comparisons, and GitHub's code review. Inspiration only: do not copy proprietary assets, fonts, layout code or designs.

**Evidence certificate (contrast):** Distinct, lighter technical-paper composition; a special "research record" moment, not a green success card. Defaults to INSUFFICIENT EVIDENCE.

## Brand system

Wordmark: restrained lowercase **forecode.** with custom four-cell branching mark. The logo must work in monochrome and have an accessible name.

Typography: (1) bold modern neo-grotesk for brand propositions, (2) an editorial italic serif for limited emotional emphasis on landing and high-level view headings, (3) a durable sans-serif for all real controls and paragraphs, and (4) monospace exclusively for paths, code, IDs, hashes and technical metadata. Do **not** make every label all-caps mono. Use accessible, licensed production fonts; prototype fallbacks are acceptable.

| Token | Hex | Use |
| --- | --- | --- |
| Foundation | `#0B0E14` | Main background |
| Workbench | `#10151C` | Investigation canvas |
| Panel | `#181C25` | Inspectors / supporting surfaces |
| Divider | `#313744` | Thin structural separation |
| Text primary | `#F1F1EF` | Major content |
| Text muted | `#A1A4AD` | Supporting copy |
| Brand/action | `#D6ED86` | Primary CTA, selected brand action |
| Meta hypothesis | `#BCACFA` | Model proposal, candidate B |
| Meta challenge | `#FF9885` | Counterexample and falsification |
| Experiment | `#8ECBDE` | Matched traces and selection |
| Evidence | `#A5E1C5` | Evidence visual family (not automatic proof) |
| Unknown | `#F5C786` | No data, stale, or untrusted |

Most of the UI remains neutral. Color is semantic, not a collection of random gradients. Statuses must have readable text and not rely on color alone; verify contrast against the actual panel colors.

## Information architecture

**P0 single-case workflow:** a focused browser demo may present three tabbed/deep-linkable views rather than a full multiuser product.

- **Site:** public landing, research-process sequence, product preview and demo entry.
- **Architecture Lab:** authorized future intention, current vs candidate B, scenarios and revision provenance, graph focus (whole/impact/boundaries), selectable module, hypothesis/counterexample, assumptions, falsification, and inspected source/diff.
- **Experiment Explorer:** parallel A/B traces with event-level details, common frozen task/agent/tools/budget/policy, B upfront preparation, failures and unknown metrics.
- **Evidence Ledger:** protected receipt binding, check-level outcomes, validity state, scoped certificate, known costs/unknowns, immutable source IDs, interpretation placed **beside** proof rather than inside it.
- **P1 later:** repo/project intake, multi-case archive, richer history search, advanced graph navigation.

Landing → case is a single memorable transition. In the three-minute video, show the landing briefly and spend most of the time on substantive Meta reasoning and defensible experimental evidence.

## Signature Architecture Atlas

1. Graph nodes derive from a real bounded TypeScript/Next graph when available; group by conceptual layers (client, app/domain, adapter) without implying physically separate services. Distinguish existing nodes, proposed nodes and explicitly unresolved edges.
2. A/B switches retain visual anchors and remove proposed-only modules in A. Selecting module keeps the graph visible while updating its source path, description, dependencies, uncertainty and code inspector.
3. Source inspector has **CURRENT / PROPOSED / DIFF**; for genuinely existing modules use actual approved source. For conceptual changes, display *planned declarative actions* — **never invent code and present it as repository contents**.
4. Scenario chips differentiate confirmed revisioned user intent and Meta-generated **not-held-out** proposals. Proposed challenge never independently authorizes a test, changes the frozen A/B manifest or becomes a secret holdout.
5. Hypothesis ↔ Counterexample is the distinctive interaction: violet research edges transition to coral challenger focus, while stable graph positions and an inspector explain mechanism, testable directional prediction, assumptions, disconfirmation and proposed failure case. Meta is advisory, not the evaluator.
6. Optional modeled effort/decision needs complete comparable inputs under frozen `modeled_effort_points_v1` and minimax regret. Avoid fabricated hours, dollars, probabilities, or scoring when inputs are insufficient; abstain explicitly.
7. Distinguish static import edges from proven runtime pathways. Unknown dynamic dependencies stay visible.

## Experiment Explorer

- Two aligned timelines, not dashboard metrics. Event selection opens details: timestamp (if known), source, run, request/agent config, step/log excerpt, artifact references, cost/tokens when known, check IDs and limitations.
- Before actual execution, present **NOT RUN / NO AUTHENTICATED RECEIPT**. Do not fake progress spinners or completed telemetry.
- Matched comparison requires identical downstream task, eligible agent/model, tools, approved budget, fixture and protected policy. B's preparation cost is accounted separately; status quo A is a serious alternative and B can lose.
- Distinguish model output origin `live|recorded|template`, measured evidence `measured|none`, and UI presentation `live|recorded`. Recorded real evidence is legitimate; scripted sample output is not.
- Fictional "illustrative result" toggles exist in the **design prototype only** and are conspicuously marked; do not ship them as real production results.
- A/B result supports only scoped observations. Claiming Meta itself improved outcomes additionally requires an equally informed strong non-Meta baseline and its own matched experiment.

## Evidence certificate and trust language

A certificate proves **only** authenticated required checks of exact evaluated code under a frozen evaluator policy, not future-proofing, global optimality, or Meta's causal contribution. Show tree/fixture/check/policy hashes, run IDs, receipt provenance, checks, unknowns and losses. Model interpretation, if generated from approved sanitized trustworthy evidence, must remain an advisory neighboring panel.

- Absent/untrusted/stale/forged evidence → **INSUFFICIENT_EVIDENCE**.
- Fresh trusted required failure → **REJECTED**.
- Fresh authenticated required passes, exact artifact binding → scoped **VERIFIED**.
- Missing metrics → unknown, never zero.
- No public endpoint executes coding agents, grading tools, arbitrary shell or untrusted code. Web UI reads validated, sanitized artifacts.

## Motion, responsive and accessibility

**Motion:** 150–350ms semantic transitions on candidate B edges, hypothesis ↔ challenge focus, selected nodes and trace events. Stable layout while inspecting; no constant glows, confetti or fabricated "success" morphs. Honor `prefers-reduced-motion` and explicit motion toggle. Information never depends on animation.

**Desktop:** ~1440×900 case view, quiet rail, large central atlas, right inspector, compact below-graph source dock. Technical screens show useful information quickly rather than repeating heroic editorial headings.

**Mobile:** ~390×844 navigation collapses, stage controls remain available, graph is independently scrollable/pannable with visible hint, inspector stacks, source code scrolls horizontally, no page-level overflow.

**Accessibility:** focus-visible, logical heading/tab order, arrow/Enter/Space where applicable, text alternative for SVG architecture, readable contrast, labels and status text, dialog keyboard behavior, reduced motion, aim WCAG 2.2 AA.

## Implementation and QA gate

P0: brand hero, one real limited booking graph, verified intent+Meta hypothesis/counterexample, truthful A/B display if a protected run exists, scoped certificate or honest empty state. Cut fancy animations and advanced diff inspection before cutting trust/safety. Nov 2 feature freeze remains primary.

P1: polished line-level source diffs, richer event inspector, pan/zoom/minimap, complex animation and long-tail case management.

Acceptance tests: page behavior and screenshot baselines at 1440×900 and 390×844; A/B; scenario and graph focus; keyboard node inspection; source tabs; hypothesis/challenge; trace event selection; empty/failed/verified trust states; contrast; reduced motion; no horizontal document overflow; provider/error/quota/recorded states; stale/forged/missing evidence; no public execution route. Record actual test commands and results; passing UI tests does not establish experiment validity.

## Hackathon provenance and handoff

**This repository is pre-event planning reference, not the entry.** All eligible submitted features, fixture/test/app files and code must be newly authored after the Oct 26, 2026 noon ET kickoff in a fresh public standalone submission repository, as required by [official rules](OFFICIAL-PARTICIPANT-RULES-2026-10-26.md). Do not copy this prototype or pre-event planning code into the entry. Reference approved concepts, implement afresh and preserve build provenance. Existing [critical path](HACKATHON-CRITICAL-PATH.md), [Meta Scientist](META-ARCHITECTURE-SCIENTIST.md), [contract freeze](CONTRACT-FREEZE-v1.md), and [demo acceptance](DEMO-ACCEPTANCE.md) remain authoritative if there is a conflict.

This specification documents a **designed product experience**, not a validated working release.