# ForeCode v6 — The Change Trace

**October 30, 2026 · Final visual direction / illustrative design reference.**

The Change Trace gives ForeCode a single visual signature across the landing, Architecture Lab, Tournament, Time Machine, Evidence Laboratory, and final Decision Report. It is a design reference, not an operational app or an observed experiment.

## Open the interactive reference

- [Open prototype.html](prototype.html) in GitHub, select **Raw**, save as HTML and open in a browser. It uses no runtime framework. Google-hosted font styles are optional; functional fallbacks are provided.
- [Design-locked experience and visual system](design-system-and-experience.md) covers screen anatomy, typography, palette, motion, behavior, evidence semantics, outcome logic, 3-minute demo, cut order, and production acceptance.
- [Codex implementation handoff](../../docs/FORECODE-UI-IMPLEMENTATION-HANDOFF-v6.md) describes how to translate the reference into independent eligible frontend code while preserving existing routes, source of truth, and test expectations.

### What to try

1. Follow the top navigation or primary chapter CTA through all six story chapters.
2. Choose A versus B in Architecture Lab or Tournament. The same requirement diamond forks into aligned paths, but the lanes show **conceptual geometry**, not observed edits.
3. In Time Machine, try each arm and Before / Prepared / After stage. No real source tree is invented.
4. In Decision Report, try the six **fictional copy specimens**: no run, A only passes, B only passes, both pass, both fail, invalid comparison. They all use the same editorial hierarchy, with no winner confetti or fake numeric confidence.
5. Try 390px mobile, keyboard navigation, reduced-motion preferences and printing the Decision Report.

**Permanent trust disclosure:** No fictional mode, path pulse, graph node, sample hypothesis or status in this HTML represents an authenticated run, actual Meta output, a real source tree, verified permission failure, or an independent grader result. NEVER copy these preview mode controls or pre-event planning prototype code into a production or hackathon submission. Implement the design concepts afresh in the eligible ForeCode app after reviewing the current sources.

## Browser checks

The new [Chromium smoke script](browser-smoke.mjs) checks the six-screen journey, default NOT RUN claims, A/B controls, 2×3 Time Machine combinations, six Decision Report copy modes, deep links, 390/768px document overflow, independent graph scrolling, keyboard basics, and page exceptions.

[GitHub Actions workflow](../../.github/workflows/forecode-v6-browser.yml) runs Playwright on PRs, eligible branch pushes, and main, uploading design screenshots. Browser smoke is **not** a screen-reader audit, independent design critique, live app audit, authenticated experiment, or cross-browser certification.

## Relationship to previous plans

This **extends** v5.1 impact-first direction. It does not override the v5.1 plan's four existing research workbenches, independently guarded experiment protocol, frozen task and receipt binding, valid optional control C, Nov 2 feature freeze, or Nov 4 event submission. The prior [v5.1 specification](../forecode-v5/impact-first-design-spec.md) remains authoritative for product scope; v6 locks the visual and interaction expression.

**Implementation status:** The actual ForeCode main branch currently uses a light sidebar-first UI. The new dark Change Trace layout has **not** been integrated into that application by this planning PR.
