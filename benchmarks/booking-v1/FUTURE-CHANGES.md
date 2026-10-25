# Booking v1 — progressive evolution challenges

**Strict data-leak policy:** Distinguish public/known roadmap, negative controls and hidden held-out requirements. This document is PUBLIC planning content; any challenge described in detail here is **not genuinely hidden from an agent with repository access**. The final held-out scenario and hidden tests must be authored, frozen and stored OUTSIDE this public repo and all optimizer/agent-readable context. Never call the public examples below unseen.

## S1 Known roadmap: organizations + roles (planning visible)
- Extend identity to support organization membership with owner/admin/member roles.
- A booking may be owned by an organization; resources assigned to organization; members can view org bookings, admin/owner can cancel; nonmembers cannot see bookings; personal bookings remain compatible.
- Preserve UTC conflict semantics and original personal-user API behavior.
- Require at least two organizations, cross-tenant denial cases and membership revocation tests.
- *Architectural question:* does B's explicit policy boundary reduce total agent iterations/validated changes including upfront cost?

## S2 Negative control: reporting/export (planning visible)
- Add deterministic per-viewer booking summary grouped by status and resource; optional CSV export of own bookings with correct escaping and sorted output.
- No extra permissions beyond existing owner checks. Existing API unchanged.
- *Architectural question:* does B add cost without helping? A is allowed to win.

## S3 Illustrative hidden-category only (not actual held-out content)
- New access-control behavior not directly requested during selection (e.g. short-lived delegated access), but **do not commit actual requirements, acceptance tests or hidden evaluator answers here**.
- Held-out custodian privately fixes a distinctly worded real requirement and test package **before** proposal/architecture selection.
- Store a commitment `sha256`, freeze timestamp, test-count and opaque scenario ID in public manifest without materializing the hidden content.
- Optimizer sees only already-authorized roadmap and scenario data; no hidden spec, tests, oracle code or leak through discussion logs.
- Reveal actual hidden requirement after selection, for execution by both A/B under matched conditions; grader still holds protected tests separately.
- If optimizer/agent has already seen hidden feature wording or its answer, the trial is **disclosed as a non-blind case study**, not a genuine holdout.

## Timeline/order
Freeze baseline (T0) → verify A/B initial behavior (T1) → generate B and count upfront cost (T2) → known roadmap S1 paired runs (T3) → reveal previously committed S3 to extension agents (T4) → evaluate both via protected oracle (T5) → S2 negative control on clean clones or separately disclosed state (T6). Avoid accidentally carrying changes from another arm into pair.
