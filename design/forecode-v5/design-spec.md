# ForeCode v5 — Tournament-led frontend design

**October 28, 2026 · Interactive design specimen, not measured product behavior.**

## Product story

ForeCode investigates whether a justified architecture change helps a real coding agent implement a known future requirement. The central narrative is: **confirmed intent → Meta falsifiable proposal and counterexample → competing architectures → matched coding-agent evolution → independent evaluator evidence → limited conclusion**.

## Four workbench views

**01 / Architecture Lab.** Retains the v4.4 reversible A/B architecture atlas, proposed/known relationships, scenario and module focus, source-inspired Current/Proposed/Diff inspector, and separate Meta hypothesis versus self-challenge. Graph data and code snippets in the design prototype are invented. Production must use source-backed data, explicit confirmed intent and provenance.

**02 / Architecture Tournament.** Competitors are A (credible status quo), B (human-reviewed Meta-informed prepared boundary), and optional C (equally roadmap-aware credible conventional non-Meta approach). The UI makes a shared future team-permissions task, agent, budgets, tools and independent grading policy visible. It explicitly separates the two legitimate questions: Study F asks if B justifies its preparation against A; Study M asks if Meta B adds value beyond strong non-Meta C. The three trace histories are selectable; missing runs default to NOT RUN. A sample-result switch is for fictional design demonstration only.

**03 / Architecture Time Machine.** Select A/B/C, then Before → Prepared → After. The underlying production model requires a shared initial source tree, independently correct prepared architecture-only source, and actual post-agent final tree, with diff, provenance, costs and verifier binding at each stage. The prototype is a deliberately schematic symbolic graph; it cannot be represented as parsed source or a completed coding task.

**04 / Evidence Laboratory.** Independent check ledger and scoped certificate with separate per-arm evidence statements. Protected checks establish whether required tests passed for the exact artifact; they do not prove architectural superiority. All preview statuses are fictional. Meta can interpret sanitized evidence, never issue grader verdicts.

## Judge-facing impact layer (Oct 29 refinement)

The existing **booking-v1 future team permissions** scenario is the hero case. The narrative begins with a source-backed working booking interaction and confirmed upcoming requirement, not a generic architecture chart. Add a compact, evidence-aware end-of-journey **Decision Report** that states **refactor / keep / inconclusive**, shows the actual A/B correctness result, upfront preparation and downstream effort where measured, 2–3 plain-language reasons, a limited next-step plan, and links into the immutable scoped evidence; this is interpretation, never a verifier verdict or invented aggregate winner. Optional “Why users care” pane can contrast allowed team action vs denied outsider action **only when grounded in safe actual evaluated run artifacts**; otherwise label conceptual or absent. Keep support for ties, A-wins, both-fail and no-run; do not make fabricated failure an animation prerequisite. This is an **impact/presentation refinement** to existing Architecture Tournament / Time Machine / Evidence Laboratory, not a fifth mandatory workbench, new booking fixture or permission to expand scope. See [detailed acceptance, copy, data and fallback specification](../../docs/IMPACT-AND-DEMONSTRABILITY-REFINEMENT-2026-10-29.md).

**Detailed impact-first presentation guidance:** [v5.1 design specification](impact-first-design-spec.md), [desktop/mobile wireframes](impact-first-wireframes.md), and [implementation handoff](../../docs/FORECODE-UI-IMPLEMENTATION-HANDOFF-impact-v5.md). These add clarity to the same four workbench views and a full-width Decision Report projection without changing frozen experimental authority or claiming the HTML specimen includes the new layouts.

## Visual direction

Preserve v4.4's editorial dark surface and compact investigative workspace, limited cream certificate, expressive headline serif, and functional accents: Meta hypothesis violet, adversarial challenge coral, tournament cyan, evidence mint, unknown amber. New tournament contender cards and a restrained shared-task rail replace generic dashboard cards. The landing page now explains the A/B/C research approach before opening the workbench. Keep motion semantic; maintain reduced-motion and keyboard support.

## Honesty and safety contract

- **No observed results in this prototype.** Never portray sample cases as live, verified or actual measurements.
- **Fairness comes first.** Same baseline tree, approved roadmap, frozen future requirement, downstream agent/tool/runtime/budget/oracle. Prepare and score B/C upfront edits separately; unknown costs stay unknown.
- **No forced winner.** If both pass independent checks, they tie on correctness. Secondary metrics are compared descriptively only if valid, with preparation included. Failed, inconclusive and invalid trials remain reachable.
- **Separate Meta contribution claim.** B beating A is insufficient evidence that Meta added incremental benefit without equally informed C.
- **No public execution endpoint.** Hosted UI reads validated sanitized artifacts. Real agent authorization and private independent evaluator run outside it.
- **Exact claims and provenance.** Absent/stale/forged receipt = INSUFFICIENT_EVIDENCE; authentic required-check failure = REJECTED; authenticated required passes = scoped VERIFIED. No fabricated metrics.

## Implementation priority

**P0:** new-work landing and accessible core workbench; confirmed intent, real eligible Meta hypothesis and self-challenge; source-limited architecture Atlas; trusted A/B experiment artifacts if authorized (or honest NOT RUN); independent Verify report and no-run state.

**Stretch:** optional strong non-Meta C; full before/prepared/after source-backed Time Machine; richer replay and advanced graph animation. This design intentionally includes the full vision, but implementation must follow [critical path](../../docs/HACKATHON-CRITICAL-PATH.md), [tournament protocol](../../docs/ARCHITECTURE-TOURNAMENT-PROTOCOL.md), and [competitive roadmap](../../docs/COMPETITIVE-STRETCH-ROADMAP-2026-10-27.md) rather than make every visual an unconditional P0 commitment.

## Acceptance before production implementation is considered complete

Test desktop 1440×900 and mobile 390×844, keyboard and screen-reader navigation, reduced motion, A/B/C and stage toggles, all absent/failed/verified states, source provenance, no unknown-zero substitution, no client forged certificate, secure hosted read-only restrictions, and full 3-minute demo path. The v5 design reference now has automated Chromium browser smoke coverage: **6/6 checks passed** at [run 40747082553](https://github.com/matthiasdruhl/AgentHarness-Planning/actions/runs/40747082553), including actual desktop/mobile screenshots, all A/B/C and Time Machine stages, evidence states, keyboard navigation, reduced-motion viewport, console errors and the mobile scrollable graph. This is not complete cross-browser, screen-reader or WCAG conformance, and it proves no live model/agent/grader capability.

This pre-event planning artifact is a conceptual reference only. No prototype HTML/CSS/JS or mock fixtures may be copied into the post-kickoff hackathon submission.
