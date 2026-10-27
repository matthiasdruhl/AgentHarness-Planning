# ForeCode v4.4 — Final interactive design reference

> **Reference only.** This folder preserves the approved v4.4 design prototype and its original companion specification. It is not a working application, a live Meta integration, a verified experiment, or the hackathon submission.

## Open the actual design

- **[Interactive HTML prototype](prototype.html)** — exact self-contained browser design reference. From GitHub, use **Raw** → save as `forecode-v4.4.html` → open the saved file in a modern browser. GitHub's normal source viewer does not execute HTML. The prototype has no build/install step.
- **[Original design specification](design-spec.md)** — detailed visual language and application behavior accompanying this particular prototype.
- **[Canonical UI/UX design guidance](../../docs/FORECODE-UI-UX-FINAL-v4.4.md)** and **[Codex implementation handoff](../../docs/FORECODE-UI-IMPLEMENTATION-HANDOFF-v4.4.md)** — the higher-level product guidance, priorities, contract and security boundaries.

## What to review in the prototype

1. **Landing page:** wordmark, headline, branching research illustration, responsive typography, subtle semantic motion and primary entry to a case study.
2. **Architecture Atlas:** current versus proposed candidate, dependency focus, scenario and module selection, hypothesis versus Meta-generated counterexample, and illustrative current/proposed/diff inspection.
3. **Experiment Explorer:** A/B history, selectable events, matched-condition presentation, upfront-work awareness and absent-evidence states.
4. **Evidence ledger:** scoped certificate presentation, provenance and clear differentiation between what the model proposes and what an independent evaluator actually verifies.
5. **Responsive interaction:** navigation, small-screen graph handling and reduced-motion behavior.

All architecture data, code snippets, experiment traces and result states in the prototype are **illustrative / fictional design examples**. They must never be represented as measurements or evidence from the actual submitted product.

## Implementation boundary (critical for this hackathon)

The pre-event planning repository and this design artifact are **not** the official submission. Hackathon rules require source code and functionality in the new standalone public submission repo to be newly authored after the October 26, 2026 noon ET kickoff. **Do not copy, vendor, or transplant the prototype's HTML/CSS/JS, its fixture code or planning-repo files into the submission.** Reimplement the approved visual/UX ideas as eligible fresh work and document provenance.

Do not alter the frozen experiment/evaluator contracts to match a visual mockup. The official [critical path](../../docs/HACKATHON-CRITICAL-PATH.md), [Meta Scientist protocol](../../docs/META-ARCHITECTURE-SCIENTIST.md), [contract freeze](../../docs/CONTRACT-FREEZE-v1.md) and [demo acceptance](../../docs/DEMO-ACCEPTANCE.md) prevail if there is a conflict.

**Recommended Codex order:** build a bounded real research case → wire actual Meta hypothesis/challenge → show trusted real or explicitly recorded evidence → polish animations. Never claim a certified result from a design sample.
