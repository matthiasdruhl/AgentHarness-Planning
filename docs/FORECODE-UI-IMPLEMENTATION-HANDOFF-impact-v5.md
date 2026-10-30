# ForeCode frontend — impact-first Codex implementation handoff (v5.1 presentation overlay)

**Prepared:** October 29, 2026. **Status:** pre-event planning instruction only; does not demonstrate implementation or authorize new experiment/model/agent execution. It overlays the existing v4.4 implementation handoff, v5 design and October 29 impact refinement. **Do not invent a new ticket hierarchy.**

## Mandatory first instruction to the implementer

Inspect the latest eligible **ForeCode** application repository, its existing routes, schemas, server evidence loader, design tokens, tests and build provenance **before editing**. The standalone public submission implementation must consist only of newly authored post-October-26-noon-ET work; this planning repo's HTML/CSS/JS, fixtures, mock data and artifacts are conceptual references only and MUST NOT be copied into the submitted entry.

Implement within M8/M9 and relevant existing M4–M7 tickets; retain the original P0 priorities and November 2 feature freeze. No changes to the frozen independent evaluation semantics, trusted receipt provenance, permissions, protected oracle or execution architecture. No browser-controlled coding-agent, shell or grading endpoint. Do not treat a local fixture acceptance as an agent tournament result.

Read, in order:
1. design/forecode-v5/impact-first-design-spec.md
2. design/forecode-v5/impact-first-wireframes.md
3. docs/IMPACT-AND-DEMONSTRABILITY-REFINEMENT-2026-10-29.md
4. docs/FORECODE-UI-UX-FINAL-v4.4.md and docs/FORECODE-UI-IMPLEMENTATION-HANDOFF-v4.4.md
5. docs/ARCHITECTURE-TOURNAMENT-PROTOCOL.md and docs/META-ARCHITECTURE-SCIENTIST.md
6. Application-local README, routes, tests and contracts

The order here means reading design before coding, **not** relaxing dependencies. Author new implementation code only where needed and only after inspecting what the application already does.

## Target structure — four canonical workbench views, two emphasized experiences

1. **Public landing:** impact-first book-now / permissions-next / decision-then story. Do not recreate the planning prototype asset.
2. **Architecture Lab opening:** a compact **Future Breakage** scenario using real current-booking behavior where available and human-confirmed future team-permission intent. The existing source-backed Atlas and Meta reasoning remain below/adjacent.
3. **Architecture Tournament:** keep the main A/B pair, optional authentic C and two separate causal questions. Surface fairness, current validity, prep-inclusive costs, outcome modes and trace history without impossible claims.
4. **Architecture Time Machine:** real-source only; graceful unavailable stage when trees not authenticated.
5. **Evidence Laboratory:** per-arm required-check status, scoped verification and model-vs-verifier separation. Preserve the existing application /experiments and /certificates behavior rather than breaking routes or UI APIs.
6. **Decision Report destination:** a full-width read-only report projection/accessible deep-link tied to current approved records and evidence. It must **not** create new decision authority or a fifth mandatory research subsystem.

This is six presentation sections across the existing landing + four workbench views + final report experience, NOT six new services or independent project modules.

## Prioritized PR-sized delivery slices (suggested, not new milestone IDs)

### Slice A — Information architecture and impact copy (P0, quick)

- First inspect current landing, confirmed future intent UI and actual booking demo; preserve working functionality.
- Make the user-facing case question legible in 20 seconds: Today owner booking → Tomorrow delegated team access → potential unauthorized access/rework risk → refactor-or-wait question.
- Use source-based current behavior only; avoid invented future failure demo. Clearly label conceptual personas and unobserved risks.
- Keep v5 visual tokens, 4-view navigation, content order and responsive patterns.
- Add visible "View experiment" and "Read decision" routes/actions only if connected to a working destination.

**Acceptance:** Judge can name actual current feature and confirmed future need without reading graph labels. No provider/verified claims changed. Mobile remains usable; a single primary CTA.

### Slice B — Read-only Decision Report projection (P0)

- Audit existing canonical report/decision/result artifacts, trusted loaders and certificate states. Prefer a pure server-derived or independently trust-checked presentation projection from existing records; do **not** introduce an authoritative client-side scoring engine.
- Map three labels: **Refactor before team permissions**, **Keep current architecture for now**, **Insufficient evidence to choose**.
- Always show actual per-arm required-check state and a statement of scope; for both verified arms state a correctness tie and compare *measured prep-inclusive secondary effort descriptively*, conditional on frozen decision criteria. No aggregate winner score, arbitrary confidence %, synthetic time savings or unsupported claim Meta caused the improvement.
- Render 2–3 specific plain-English factors, real prep/downstream/total cost with units and unknowns, one short next step with human review/preconditions, and readable limitations.
- Inspect Evidence and certificate link only to existing authentic approved data. A missing production certificate must say unavailable; never create it through front-end behavior.
- In no-run/no-matched-receipt case, default to a composed inconclusive report that plainly explains what evidence is missing.
- If report data exists only as authenticated source fields, derive minimal copy from those; otherwise abstain or say unknown. Do not silently extend frozen schema.

**Acceptance:** Unit/snapshot cases: no-run, invalid/unmatched, missing/forged/stale receipts, both verified-tie, only A verified, only B verified, both rejected, optional valid C with separate Study M. "Keep" must be visually as credible as "Refactor". Evidence never overruled by Meta text.

### Slice C — Tournament clarity and evidence distinctions (P0)

- Add compact common-condition inspector exposing task, baseline, agent, runtime/tools, evaluator/policy and budget *with honest unknown/unequal status*. Do not brand study valid unless manifest/records establish equality.
- Align A/B, show C only if genuine and comparable; distinguish Study F (prepared B vs A) from Study M (Meta-informed B vs equally informed C).
- Surface prep, downstream, measured total with consistent units; missing numeric data is unknown, never zero.
- Keep readable failed/tied/invalid/canceled attempts, authentic recorded trace provenance, changed-file count only if measured; no fabricated usage or progress.
- Make "what actually changed" accessible in 10–15 seconds using verified file list first and real topology second.
- Keep source, Meta hypothesis/challenge, observed run, independent proof, and report recommendation visually separated and plainly named.

**Acceptance:** Cannot produce a false B-win or Meta-benefit headline from an A/B result; a broken matched condition forces invalid/inconclusive explanation. Recorded evidence never labeled live.

### Slice D — Conditional user-facing consequence (P1 only after gate)

- Default to a **conceptual** Today / Future requirement / Observed effect panel, clearly labeled non-measured if no safe run exists.
- Upgrade to actor/action/response replay only when a source-bound, redacted, safely publishable observed record links exact evaluated final tree + run/task + independent check/receipt, with authorized confirmation and no oracle leak.
- A failed check alone does not authorize a fabricated HTTP/UI failure. If mismatch or missing proof, revert to conceptual/not observed state.
- Do not build a second booking app, new oracle, generic replay pipeline, auto-generated PR, or extra experiment.

**Gate:** Owner GO decision under current stretch promotion protocol, with complete P0, working public demo, trustworthy data and time before Nov 2. Otherwise CUT without harming P0.

### Slice E — Visual system, accessibility, and demo rehearsal (P0)

- Preserve palette and typography from v4.4. Remove generic glass cards, fake score tiles, repeated glows and technical monospaced body copy.
- Use editorial type only for high-level landing/report; dense, quiet workbench for real investigation.
- Test 1440×900, 768px, 390×844 with keyboard navigation, focus states, modal/sheet behavior, screen-reader name/state, reduced motion, separate horizontal graph/code scrollers and zero document overflow.
- Rehearse the canonical three-minute story: required 12-second provenance disclosure; booking/stakes; Meta prediction/challenge; fair A/B; actual protected outcomes or honest no-run; Decision Report and scoped proof.
- Record route screenshots for absent and genuinely available results; do not present simulated images as actual measurements.

## State ownership, trust and safe rendering rules

- **Human intent**: confirmed/revised/revoked. A changed requirement invalidates downstream research; never silently upgrade a model proposal to user approval.
- **Meta**: live/recorded/template exact origin and model version; hypothesis vs model-generated challenge; proposed challenge never held out. Allow explicit per-stage consent and gracefully show quota/error/not-run.
- **Agent**: no real run unless separately approved developer-local isolation, budget, rights and custody. Hosted UI only plays back vetted artifacts; no shell execution route.
- **Independent Verify**: exact authorized post-agent tree and protected required checks; only trusted records produce VERIFIED/REJECTED. Unknown/stale/forged/absent yields INSUFFICIENT_EVIDENCE.
- **Recommendation**: honest conditional human-facing engineering decision derived from allowed evidence and declared criteria. No new score or claims of general superiority. "Insufficient evidence to choose" is a finished and useful state.
- **Published consequences**: no private test bodies, host paths, personal tokens or unreviewed request/response trace in browser.

## Implementation ownership suggestions

These are suggestions, not prescribed new directory conventions; first reuse existing app component structure.

| Concern | Suggested component/projected view | Reads |
| --- | --- | --- |
| Story | BookingCaseIntro / FutureRequirement | current fixture facts, confirmed intent state |
| Research reasoning | ScientistInspector | source-checked Meta proposal, hypothesis and challenge |
| Fairness | ExperimentConditions / ArmComparison | frozen matching data and authentic run metadata |
| Changes | SourceChangeSummary / TimeMachine | authenticated source snapshots and sanitized diffs |
| Evidence | CheckLedger / EvidenceScope | trusted allowlisted loader and independent verdicts |
| Conclusion | DecisionReport / DecisionEvidenceLinks | source-bound existing decisions and measured observations |
| Optional real consequence | SafePermissionObservation | approved safe redacted run/check references |

Do not build view-local imitation schema values as authority. Use verified fields already present; missing => unknown. No UI event should invoke raw sandbox/agent/grader.

## Verifiable Definition of Done (PR body evidence required)

- [ ] Changes are newly authored in event-eligible repo; code ownership/provenance preserved, no pre-event prototype imports.
- [ ] Clear story: working booking today, explicitly future team permissions tomorrow, potential *not observed* risk.
- [ ] Meta prediction, independent grading and Decision Report are distinguished at a glance.
- [ ] Fairness rail cannot claim matched conditions when data absent or unequal; C only when genuinely present.
- [ ] Report supports correct/refactor/keep/inconclusive and negatives without inventing measured success.
- [ ] Recorded result and certificate each use authentic source/run/check/receipt IDs; no client-forged upgrade.
- [ ] Required comparison counts B/C preparation; missing times/tokens/cost remain unknown.
- [ ] Source diffs, actual agent steps and optional permission replay are never represented as real if not observed.
- [ ] Existing intent, research, experiments and certificates routes regressions checked; no new browser-side execution.
- [ ] Desktop, tablet, phone screenshots; automated UI tests for all negative cases; keyboard and reduced motion checked.
- [ ] Exactly three-minute demo can traverse entire impact story with clear new-work opening and verified claim boundaries.
- [ ] Commit SHA, test commands/results, screenshots, outstanding limitations and stretch GO/HOLD/CUT captured in PR.

## Cut order for deadline

1. Decorative transitions, fancy graph choreography and new font assets.
2. Conditional permission replay (fall back to a conceptual plainly labeled scenario).
3. Rich Time Machine graph and advanced synchronized diff (fall back to authentic changed-file list).
4. Third contender C, second no-refactor scenario, extended provider controls, benchmark integrations (only if not already qualified as necessary by an existing core claim).
5. **Never cut** truthful evidence labeling, explicit model provenance, confirmed-intent semantics, safe experiment separation, preparation accounting, or the report's honest inconclusive state.

Hard Nov 2 feature freeze and Nov 4 submission cutoff remain unchanged. Completion of this handoff is not evidence that P0 or the agent experiment is complete.

## Planning links

- [Impact-first specification](../design/forecode-v5/impact-first-design-spec.md)
- [Wireframes](../design/forecode-v5/impact-first-wireframes.md)
- [Oct 29 impact requirements](IMPACT-AND-DEMONSTRABILITY-REFINEMENT-2026-10-29.md)
- [v5 design specimen](../design/forecode-v5/design-spec.md)
- [Original implementation handoff](FORECODE-UI-IMPLEMENTATION-HANDOFF-v4.4.md)
- [Official demo acceptance](DEMO-ACCEPTANCE.md)
