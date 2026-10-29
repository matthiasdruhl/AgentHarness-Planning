# ForeCode v5.1 — Impact-first frontend design specification

**Date:** October 29, 2026. **Type:** conceptual design specification in the pre-event planning repository, not product code or an evidence claim. **Status:** proposed refinement of the approved v5 Tournament Edition, NOT a replacement architecture, fifth mandatory research workbench, or new milestone.

## Product decision

Keep v5's editorial landing and its four existing workbench views (Architecture Lab, Architecture Tournament, Architecture Time Machine, Evidence Laboratory). Add two clearly distinct **experiences**, not two expensive subsystems:

- **Future Breakage opening:** the first section of the Architecture Lab / case journey. Demonstrate a working booking action, the *human-confirmed* future team-permissions requirement, and the potential cost of a bad boundary decision. Source/evidence-dependent statements stay qualified.
- **Decision Report destination:** a focused, deep-linkable read-only report projection reachable from the tournament/evidence journey. It can occupy a full page or full-width view, but does not introduce a new evaluator, new decision schema, or required fifth workbench. The evidence laboratory remains the authority for scoped checks.

Priority order: human understanding > truth and provenance > comparison comprehension > atmosphere and motion. The source of authority remains the actual eligible submission implementation and frozen schemas, not this design.

### What a first-time viewer should understand

- **In 5 seconds:** a working app must evolve; changing architecture prematurely can also cost money/time.
- **In 20 seconds:** the case is booking today, team permissions tomorrow, and a choice between keeping A or preparing B.
- **In 40 seconds:** Meta proposes a falsifiable claim and challenge; a controlled coding-agent study and independent evaluator test the competing approaches.
- **At the end:** a concrete engineering recommendation or an honest inability to recommend, supported by inspectable case-scoped evidence.

**Primary message:** "The code works today. Will it survive what's next?"  
**Value sentence:** "ForeCode tests architectural decisions against a real future change and shows the evidence before you commit."

The product must be equally credible when B loses, A wins, both pass, both fail, C is absent, no authorized agent run exists, or spending metrics are unknown.

## Information architecture, without new mandatory scope

| Surface | User question | Principal content | Existing v5 home |
| --- | --- | --- | --- |
| Public landing | Why should I care? | Booking-now → permission-demand → experiment → decision | Landing |
| Future Breakage opening | What could go wrong? | Today / Tomorrow / Potential risk + confirmed intent | Architecture Lab intro |
| Architecture Lab | What does Meta propose, and why? | Source-limited Atlas, A/B, hypothesis, proposed challenge, source provenance | Architecture Lab |
| Tournament | Was the comparison fair, and what happened? | Common task rail, A/B/(C), run histories, prep vs downstream effort | Architecture Tournament |
| Time Machine | What changed in actual source? | Before / Prepared / After snapshots with real identities/diff or honest unavailable | Architecture Time Machine |
| Evidence Laboratory | What exactly was independently checked? | Per-arm check ledger, receipts, provenance, certificate, limited Meta interpretation | Evidence Laboratory |
| Decision Report | So what should the engineer do? | Refactor / Keep / Insufficient, reasons, next step, limitation and evidence links | Full-width report projection, not a fifth required independent workflow |

Keep direct links for existing implemented /experiments and /certificates if those are the chosen application routes. New route names here are suggestions only; do not break working routes or invent an execution API. Landing CTA leads to the case, not directly to an abstract network graph. The report is discoverable in the workbench navigation and can be opened from the final comparison state.

### Persistent navigation

- Global brand + case selector/title; one clear status string at a time ("experiment not run", "recorded evidence", etc.).
- Case breadcrumb: "Booking permissions / Case 01".
- Workbench: Architecture Lab / Tournament / Time Machine / Evidence. **Decision Report** is the visibly emphasized end-of-flow action and optionally a deep link.
- Contextual right inspector on desktop, a properly labeled sheet/stack on narrow viewports.
- Never show unearned "Live", "Verified", "winner" or measured savings language.

## Layout rules — no generic AI dashboard

**Landing (desktop 1440):** 12-column editorial grid, max-width ~1320px, 72–96px top breathing space. Hero text ~5 columns and a precise booking-to-decision illustration ~7 columns. Sections are separated by whitespace and short hairlines, not 4x3 feature cards. One primary CTA, one text secondary action. Intro should fit without scrolling into a long marketing preamble.

**Workbench:** 64–68px header; optional ~208–224px calm left navigation; main content minmax(0,1fr) with a 280–320px contextual inspector only when content warrants it. Main canvas must remain dominant (~65–72% of available content). 24–32px component gutters; max working width around 1420px; compact 12–14px controls, readable 14–16px prose. Flat areas separated by alignment/dividers, not a border surrounding every piece of text.

**Report:** deliberately quieter, wider reading column (880–1000px), legible editorial conclusion; left primary narrative with a narrow right "Evidence and limitations" index on wide screens. One light paper-toned certificate preview is allowed, never a celebratory green card.

**Mobile 390×844:** collapse main navigation into accessible menu/step strip; sequence content: question → consequence → chosen comparison → provenance/evidence → recommendation. Tournament uses arm selector instead of three narrow cards. Graph and code regions scroll independently, text alternative always available; avoid page-level horizontal overflow.

### Visual priorities

For each page reserve:
1. one dominant statement or artifact;
2. one main interactive comparison;
3. one secondary inspector or metadata strip;
4. one concrete next action.

No KPI dashboard at top. No rows of fake performance numbers. No "your architecture health: 94%" rating. Do not overuse pill badges, monospaced labels or nested rounded cards.

## Detailed surface specifications

### 01 / Landing — show the decision, not AI spectacle

**Hero:** expressive neo-grotesk "The code works today." and restrained serif italic emphasis on "*what's next?*"; alternative single headline retained from v4.4. Keep body under 30 words. Primary CTA "Explore the booking case"; quieter "How the experiment works".

**Signature illustration:** a designed, readable triptych along one continuous thread: TODAY (Alice books a room), NEXT (team access changes the requirements), DECISION (keep / refactor / inconclusive, neutral until observed). This is a conceptual explanation, **not simulated app telemetry or measured result**. Visuals can use architectural fragments, a permission matrix, and a documentary report excerpt—not stock globes, glowing neural networks, or random node graphs.

**Below fold:** one 3-step proof process (Confirm → Compare → Decide); one restrained section "The status quo can win"; one evidence/research limitations paragraph, a short "Explore case" CTA. No generic 8-card feature grid or fake client logos.

**Motion:** single line/path transition only on explicit navigation or scroll if motion is allowed; visible in static fallback. All relevant text static.

### 02 / Case Overview — Future Breakage opening in Architecture Lab

**Header:** "A working booking app meets a new permission model." Supporting line: "The question isn't whether we can implement team permissions. It's whether restructuring first is worth it."

**Left, TODAY:** small authentic booking interaction if the current working demo and permitted source-backed behavior are available; show room/owner/operation and source label. An example of the present-day booking UI is not proof the future permission task passes.

**Right, TOMORROW:** human-confirmed future intent in plain language. Examples: allowed teammate may create/view/cancel *only according to frozen role policy*; outsider must not gain access. Do not insert new acceptance requirements after experiment freeze. Revision/confirmation state is visible; a model suggestion is never automatically confirmed.

**Intervening impact note:** "Potential cost: broader edits or unauthorized access if the boundary is poorly chosen." This is marked "POTENTIAL / NOT OBSERVED" until a real observed symptom is authenticated, and no monetary-loss estimate is shown without evidence.

**Question band:** "Should we introduce an ownership and permission boundary before the new requirement?" CTA "Inspect proposed approaches", with the exact approved task summary accessible. If no live results, still usable.

**Conditional impact pane:** "Why users care" with Today / Future need / Observed effect. Default is conceptual/absent. A recorded actor/action/outcome is allowed only if safely redacted and bound to same final tree, task/run, independent check/receipt. A failed check cannot by itself be transformed into a specific screenshot-level symptom.

### 03 / Architecture Lab — keep the scientist inspectable

Existing source-backed Architecture Atlas A/B and current/proposed/diff inspector remain central. A has no imaginary B-only modules; unknown edges stay unknown.

Right inspector has independent views:
- **Meta hypothesis**: provider origin + version, mechanism, measurable prediction, falsifier, assumptions, proposal status.
- **Meta challenge**: separate coral treatment, label "Meta-generated, NOT an independently held-out test"; proposed counterexample, what it questions, approval state.
- **Intent and source**: confirmed revision, graph/source identities, consent status; template/recorded/live are distinct.

Meta may interpret *trusted, sanitized* evidence later in Evidence Laboratory, never decide the evaluator's verdict. Preserve explicit per-operation sharing/consent and invalidation of dependent artifacts on changed/revoked intent.

### 04 / Architecture Tournament — research fairness in one glance

**Top common-conditions rail:** shared future task ID/revision, baseline identity, coding-agent/model, tool/runtime identity, budget, evaluator/policy, and a single **comparison validity** indicator (matched / invalid / not established). If anything is unavailable, say "not established" rather than implying "same". Expand inspector for full values. Small restrained state labels, not five green badges.

**Main:** A "Keep what works" and B "Meta-informed prepared boundary" aligned. Optional C "Equally informed non-Meta roadmap approach" appears only when present; no disabled fake third column. Two distinct comparisons: F = B vs A (value of advance preparation), M = B vs C (incremental Meta contribution). Never infer M from F.

**Cost row:** preparation / downstream / total, with observed units and missing-value "unknown". Avoid combining unlike units or treating B prep as free. If both pass required checks, explicitly call correctness a tie; only describe validated secondary metrics.

**Evidence/replay:** real selectable attempt history, statuses, scoped check references; measured recorded outcomes never visually labeled live. "Not run" should look intentionally designed, not a broken loader. Show losing/invalid attempts and neutral outcomes. Do not create artificial results for dramatic effect.

**Why users care strip:** a single concise user consequence or "Not observed; conceptual permission risk", not another graph. Not a substitute for protected evidence.

CTA to inspect exact source changes (Time Machine) and to understand verdicts (Evidence Laboratory).

### 05 / Architecture Time Machine — visual source evolution

Primary interaction: select A/B/(C) and a synchronized Before → Prepared → After stage. Display **tree ID and provenance per snapshot**. Until real independently correct prepared and post-agent trees exist, stages are unavailable with a meaningful explanation; do not fill them with fake graph nodes or "0 edits".

Graph and changed-file list share selection. The default judge view is a short source-backed change list; the large graph is a secondary tool. Stable positions and plain-language labels are preferred to animation; the full graph is optional stretch. Example impacts are never presented as parsed source.

### 06 / Evidence Laboratory — proof is separate from inference

Top: **per-arm independent status**, not a single undifferentiated all-green verdict. States VERIFIED, REJECTED, INSUFFICIENT_EVIDENCE refer only to exact checks and evaluated code. Use read-only trust-checked records, no browser-supplied evidence authority.

Main ledger: required checks, exact scope, source/run/receipt binding, failure/inconclusive history, redacted observation where permitted. Secondary "What this proves / does not prove" inset. One strong simple trust flow: **Meta predicts → Agent implements (if authorized) → Independent Verify checks → ForeCode recommends**. The UI never executes coding agents, shell, grading code or unknown fixture code.

A Meta post-run interpretation can appear **beside** a verified and allowlisted sanitized summary. It uses its own model-origin label and never mutates check results.

The certificate is a lighter research-paper document, not a universal badge of architectural superiority. Link to Decision Report as the next action.

### 07 / Decision Report — full-width research conclusion

**This is the signature new impact moment.** It is an end-of-flow **report view** derived from existing authenticated reports and approved decision criteria; no new grading engine, algorithm or ungrounded all-arm score. It is navigable and printable/readable, but should not be an extra mandatory workbench subsystem.

Reading order:
1. small "ENGINEERING DECISION / BOOKING CASE" eyebrow (only one);
2. prominent headline: "Refactor before team permissions", "Keep the current architecture for now", or **"Insufficient evidence to choose"**;
3. one-sentence reason rooted in current evidence or, when absent, "No matched authenticated A/B result is available";
4. two or three specific evidence factors, clearly distinguishing correctness and downstream vs preparation;
5. compact A/B cost and correctness strip, secondary if unknown;
6. **What to do next**: human-reviewable action and prerequisites; never a fake "Apply refactor" control;
7. persistent "Inspect evidence" link, scoped certificate link only if genuinely provisioned, and short one-case/unknowns limitation.

**Decision rules:** unmatched/absent/forged/stale → inconclusive. Both verified → correctness tie, only conditional preference with complete comparable measured secondary criteria. Both fail → no winner. One verified and other genuinely rejected → report the scoped result, not general supremacy. C only for separate Meta comparison. Non-authoritative model interpretation must never overwrite the decision basis.

A "keep" ending should look equally composed and premium as a "refactor" ending; no victory confetti or triumph colors. Recommendation headlines are neutral cream text; color is reserved for supporting semantics.

## States and labels that must be designed, not improvised

| State | Human-facing microcopy | Behavior |
| --- | --- | --- |
| Intent not confirmed | "Confirm the future requirement to continue" | no dependent Meta claim |
| Meta provider missing / consent denied | "Meta reasoning not run" | label template fallback if used |
| Meta recorded result | "Recorded Meta response" | show origin/version/time if known |
| Model-generated challenge | "Proposed counterexample · not held out" | cannot modify frozen task |
| Experiment absent | "No matched agent experiment has run" | no winner, no fake metrics |
| Invalid/mismatched comparison | "Comparison invalid: conditions differ" | detail mismatched fields |
| Both arms verified | "Correctness tie; compare total effort cautiously" | measured metrics descriptive |
| One arm rejected | "Required checks failed for arm [A/B]" | link authentic check IDs |
| Both rejected | "Neither arm satisfied required checks" | no forced winner |
| Missing/suspect receipt | "Insufficient evidence" | no certificate promotion |
| Stale intent/evidence | "This result belongs to an earlier revision" | old result retained but not current |
| Full recommendation unavailable | "Insufficient evidence to choose" | honest next step, no generated savings |
| Conditional user-consequence preview absent | "No verified app-level replay available" | conceptual storyboard clearly labeled |

## Visual system and typography — retain v4.4/v5 values

Reuse prior normative tokens and roles, no new "v6 palette":

| Role | Color | Notes |
| --- | --- | --- |
| Foundation | #0B0E14 | Dark editorial field |
| Workbench | #10151C | Main instrument surface |
| Panel | #181C25 | Supporting inspector, not generic card canvas |
| Rule | #313744 | Hairline dividers |
| Main ink | #F1F1EF | Reading and conclusion |
| Muted ink | #A1A4AD | Secondary content |
| Brand action | #D6ED86 | Primary navigation/CTA only |
| Meta hypothesis | #BCACFA | Proposals, not verdict |
| Meta challenge | #FF9885 | Counterexamples/risk |
| Experiment | #8ECBDE | Runs, comparisons |
| Evidence | #A5E1C5 | Evidence family, not automatic "passed" |
| Unknown | #F5C786 | Missing/untrusted/inconclusive |

Typographic treatment: dominant neo-grotesk heading, scarce editorial *italic* serif word or phrase, legible sans interface, mono only for file paths/source IDs/digests/time. No ubiquitous uppercase mono captions. Prefer accessible licensed fonts already selected in v4.4; do not copy unlicensed font files.

Spacing rhythm: 8px base with intentionally larger 24/40/72px steps. Minimal radii (4–8px functional); pills only for compact true status when warranted. Avoid gradient neon borders, permanent glow, emoji diagrams as primary graphics, faux terminal, fake 3D topology, AI chat-bubble chrome, or giant KPI tiles.

## Interaction and accessibility

- Respect keyboard navigation, visible focus, correct tab/radio roles; key controls work without hover. Modals/sheets trap and restore focus.
- Significant status changes announced to assistive technology; labels are textual and not color-dependent.
- 1440×900 desktop and 390×844 mobile, plus 768px tablet; no document-level sideways scrolling. Independently scrollable code/graph areas.
- Reduced motion static fallback. 150–350ms transitions only for stage selection, node focus and disclosure. Never imply execution by animation.
- Recorded previews/playback visibly say "recorded", and design examples visibly say "fictional design illustration"; no fabricated measured result state in the submitted app.

## Proof-led 3-minute narrative (overlays, not extra demo time)

| Clock | What the viewer sees | Claim boundary |
| --- | --- | --- |
| 0:00–0:12 | Required pre-event planning vs newly built implementation disclosure | No pre-event prototype as built feature |
| 0:12–0:35 | Working booking today; confirmed team permissions tomorrow; potential risk | Potential is not observed |
| 0:35–1:05 | Live/accurately recorded Meta hypothesis, falsifier, distinct challenge | Proposed, not test authority |
| 1:05–1:32 | Current A vs prepared B, identical future task and cost model | B preparation counted |
| 1:32–2:30 | Real, recorded matched arm execution if authorized; protected checks and change surface | Otherwise clearly "NOT RUN", no effectiveness claim |
| 2:30–3:00 | Decision Report → inspect independent evidence/certificate if available | Recommendation vs scoped verification separated |

## Definition of done and project boundaries

**P0 design/implementation:** impact-first landing/case copy; existing source-backed Atlas and Meta stages; true experiment/fairness states; a readable Decision Report that defaults to inconclusive without trusted matched evidence; clean links into Evidence Laboratory; clean-browser/demo acceptance. Reuse the existing M4/M5/M6/M7/M8/M9 scope and existing implementation/refinement docs, not new milestone IDs.

**Conditional P1:** safe observed permission consequence pane, richer graph/source Time Machine, A/B/C research view if eligible genuine C, replay/animations; no new permission fixture. Cut these before Nov 2 if unsafe, unsupported or disruptive.

**Deferred:** new e-commerce fixture, auto-generated repo PRs, model-run browser shell, automatic stage promotion, arbitrary cross-case ranking, general "future prediction" claims, additional adaptive experiment/provider controls.

QA minimum: desktop/mobile screenshots of every page; keyboard/reduced-motion; states no-run, both pass, A wins, B wins, both fail, invalid and stale; no unknown→0 coercion; never show a client-forged VERIFIED; check exact source/receipt match; no private oracle leakage; ensure no forced winner; clean 3-minute judge path.

**Hard provenance constraint:** This pre-event planning repo is conceptual inspiration only. All code, styles, components, fixtures and tests in the public hackathon submission must be independently authored during the event after Oct 26 noon ET; do not transplant the planning prototypes. Do not copy prior HTML/CSS/JS, data or examples into the eligible submission. The frozen trust/contract specs, official rules, and Nov 2 feature freeze take precedence.

## Source-of-truth references

- Original visual system: ../../docs/FORECODE-UI-UX-FINAL-v4.4.md
- Existing v5 structure and priorities: design-spec.md
- Oct 29 impact requirements: ../../docs/IMPACT-AND-DEMONSTRABILITY-REFINEMENT-2026-10-29.md
- Meta research: ../../docs/META-ARCHITECTURE-SCIENTIST.md
- Tournament validity: ../../docs/ARCHITECTURE-TOURNAMENT-PROTOCOL.md
- Demo: ../../docs/DEMO-ACCEPTANCE.md
- Cut rules: ../../docs/STRETCH-PROMOTION-GATES.md
- Page composition: impact-first-wireframes.md
