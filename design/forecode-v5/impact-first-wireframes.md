# ForeCode v5.1 — Impact-first page wireframes and interaction map

**October 29, 2026.** Conceptual page compositions, **not screenshots of a working application, recorded experiment, or verified security result**. These are responsive layout references for freshly authored event-eligible implementation. Current v5 remains the baseline. Companion specification: [impact-first-design-spec.md](impact-first-design-spec.md).

## Composition notation

This is layout hierarchy, not literal text width, pixel-perfect component code, or an instruction to fill every rectangle with a card. The large open areas are intentional. Bracketed elements denote *proposed user actions*; no control should be shown active unless the real app supports that action. Content examples never assert actual booking-v1 future-permission measurements. Status legend: POTENTIAL = hypothetical risk, PROPOSED = model suggestion, NOT RUN = no authenticated matched arm result, VERIFIED / REJECTED = only trusted per-arm scoped checks.

Recommended top-level user journey:
**Landing → Future Breakage (opening of Architecture Lab) → Meta and Architecture Lab → Tournament → Time Machine / Evidence → Decision Report → Evidence details on demand.**

The following report is a visually independent final destination, but NOT a fifth mandatory v5 workbench subsystem or a separate source of authority.

---

## A. Landing — 1440px desktop, first viewport

    ┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
    │  forecode.                   Product  /  Research  /  Method                   [Explore a case]     │
    │                                                                                                     │
    │                                                                                                     │
    │  ARCHITECTURAL DECISIONS, TESTED.                     TODAY             NEXT                THEN     │
    │                                                       ──────            ────                ────     │
    │  The code works today.                                Alice books       Team permissions    Decision │
    │  Will it survive                                      Room A            arrive              pending  │
    │  what's next?                                         ┌──────────┐      ┌──────────────┐   ┌───────┐ │
    │                                                       │ Owner    │──────│ Team roles   │───│ ?     │ │
    │  A future requirement is coming.                      │ booking  │      │ outsider     │   │       │ │
    │  ForeCode tests whether changing                      └──────────┘      │ denied?     │   └───────┘ │
    │  architecture first is worth it.                                        └──────────────┘             │
    │                                                                                                     │
    │  [Explore the booking case]   How the research works                                                │
    │                                                                                                     │
    │  Illustration: conceptual flow; no run or security outcome is implied.                             │
    ├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
    │  CONFIRM WHAT'S COMING              TEST FAIR ALTERNATIVES                DECIDE FROM EVIDENCE      │
    │  One human-approved future need     Same agent, task and independent      Keep / refactor /         │
    │                                     checks; upfront prep included         inconclusive              │
    └─────────────────────────────────────────────────────────────────────────────────────────────────────┘

**Composition:** no enclosing card for the hero. Left massive typography; right slim documentary triptych with one continuous structural line. Brand accent primarily on a single CTA. The undecided report endpoint must not show "refactor won". On mobile the triptych stacks after the headline, preferably as compact TODAY/NEXT/DECISION rows. The second section is a three-step editorial line, not three rounded marketing tiles.

**Primary interaction:** "Explore the booking case" moves to Case Overview/Architecture Lab, retaining a readable back route.

---

## B. Future Breakage / Case Overview — Architecture Lab opening

    ┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
    │ forecode.   Case: booking-v1 / team permissions               Case state: requirement confirmed*   │
    ├───────────────┬─────────────────────────────────────────────────────────────────────────────────────┤
    │ CASE 01       │  A working booking app meets a new permission model.                                │
    │ Overview ●    │  Keep what works, or prepare a boundary first?                                      │
    │ Architecture  │                                                                                     │
    │ Tournament    │  TODAY  /  CURRENT BOOKING           TOMORROW  /  CONFIRMED FUTURE REQUIREMENT      │
    │ Time Machine  │  ──────────────────────────────     ────────────────────────────────────────────    │
    │ Evidence      │  Authenticated Alice               Authorized teammates can share booking actions │
    │               │  Room A · owner-only operations    Outsiders / unprivileged roles must be denied   │
    │               │  [Open working booking example]    Intent revision / source visible                │
    │               │                                                                                     │
    │               │  ══ POTENTIAL CONSEQUENCE (NOT OBSERVED) ════════════════════════════════════════   │
    │               │  A poor ownership boundary could cause extra edits or unauthorized access.        │
    │               │  No observed future-task outcome is claimed here.                                  │
    │               │                                                                                     │
    │               │  THE RESEARCH QUESTION                                                              │
    │               │  Should we introduce an ownership/permission boundary before implementing teams?  │
    │               │                                                                                     │
    │               │  [Inspect competing approaches]           [See confirmed requirement]            │
    └───────────────┴─────────────────────────────────────────────────────────────────────────────────────┘

*Requirement confirmation is an example state. If not confirmed, label "Awaiting confirmation" and block dependent model claims. Do not imply that current fixture's existing-owner behavior validates the *future* delegation task.

**Why this is compelling:** Actual app behavior and the next product requirement occupy more space than an abstract risk visualization. The potential consequence uses coral text and a hairline, not red warning-card theater.

**Conditional drawer (P1 only):** "Why users care" compares allowed Bob/team behavior against Eve/outsider denial. If not tied to a real safe recorded evaluated result, it must say **Conceptual permission scenario — not observed**, without pass/fail/check graphics. No fake click-level replay.

---

## C. Architecture Lab — source and Meta rationale

    ┌───────────────┬───────────────────────────────────────────────────────────────┬──────────────────────┐
    │ CASE / NAV    │  Architecture Lab                                           │ SCIENTIST INSPECTOR  │
    │               │  A: keep current      B: prepare permission boundary       │                      │
    │ Overview      │                                                               │ [Hypothesis]         │
    │ Architecture ●│ ┌─ Atlas with REAL approved module boundaries ────────────┐   │ [Self-challenge]     │
    │ Tournament    │ │                                                       │   │                      │
    │ Time Machine  │ │  CLIENT ─── ROUTES ─── OWNER CHECK ─── DATA            │   │ Meta proposal       │
    │ Evidence      │ │               ╲ proposed boundary (only on B)          │   │ PROPOSED            │
    │               │ │                 ─ permission policy (if proposed)      │   │ Predict / falsifier  │
    │               │ │                                                       │   │ Provider provenance  │
    │               │ └───────────────────────────────────────────────────────┘   │                      │
    │               │  [Current source]  [Proposed actions]  [Real diff if any]     │ Challenge is NOT     │
    │               │  Selected module: source path / known edges / unknowns       │ a held-out test      │
    └───────────────┴───────────────────────────────────────────────────────────────┴──────────────────────┘

The diagram is **structural only**, not a claim that these named modules/edges actually exist in the current repo. Implementation must use source-backed graph data. No invented B-only modules displayed in A. On wide screens, clicking an Atlas node updates the right inspector and source dock. On mobile, use A/B segmented toggle, a compact selected-node text list, then inspector stack below; do not ask users to horizontally navigate a full graph to learn the hypothesis.

**Visual priority:** one clear selected architecture; one readable prediction; one explicit falsifier. Coral challenge is an alternative focus, not a red success/error panel.

---

## D. Tournament — 1440px desktop, comparisons clearly paired

    ┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
    │  ARCHITECTURE TOURNAMENT                       Study F / B vs A       Study M / B vs C (if present) │
    │  Common future task: delegated team permissions / approved revision                                 │
    │  TASK: same   AGENT: not established   TOOLS: not established   ORACLE: not established             │
    │  COMPARABILITY: NOT ESTABLISHED                                       [Inspect exact conditions]   │
    ├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
    │  A / KEEP WHAT WORKS                       B / META-INFORMED PREPARATION                             │
    │  ───────────────────────────               ──────────────────────────────────                         │
    │  Strong current baseline                   Proposed ownership/permission boundary                    │
    │  Architecture: no advance refactor         Architecture: human-reviewed candidate                    │
    │  Required-check status: NOT RUN            Required-check status: NOT RUN                             │
    │                                                                                                     │
    │  Preparation: none recorded                Preparation: unknown                                     │
    │  Downstream effort: unknown                Downstream effort: unknown                                │
    │  Total measured effort: unknown            Total measured effort: unknown                            │
    │                                                                                                     │
    │  [Run history / no authenticated data]     [Run history / no authenticated data]                      │
    ├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
    │  WHY THIS MATTERS                                                                                        │
    │  A refactor is only justified if observed benefit outweighs the upfront investment.                 │
    │  [See actual source changes]                               [Inspect independent evidence]           │
    └─────────────────────────────────────────────────────────────────────────────────────────────────────┘

**Important:** "none recorded" is not automatically an empirical numeric zero. If no source-bound record of preparation exists, label unknown. A can be sound without strategic preparation, but its actual prep-cost measurements must follow the protocol.

**C variant:** Reveal C in a third column or paired B/C mode **only if** a strong equally informed non-Meta alternative truly exists; never squeeze three desktop columns to show a ghost result. Study F cannot establish Meta's incremental causal contribution.

**Real outcome variant:** Replace NOT RUN only with authenticated actual per-arm status and provenance. If both pass, top summary reads "Correctness tie" even when secondary downstream effort differs. If mismatched, "INVALID COMPARISON" remains visible and report is inconclusive; negative attempts are not filtered out.

---

## E. Time Machine — selected arm × real stage

    ┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
    │ ARCHITECTURE TIME MACHINE                  [A] [B] [C if real]      Before / Prepared / After        │
    │ Selected: B                               Source snapshot: unavailable                              │
    │                                                                                                     │
    │   BEFORE                    PREPARED                    AFTER                                        │
    │   baseline tree  ─────────> architecture-only tree ───> post-agent tree                            │
    │   real ID?                  real ID?                     real ID?                                     │
    │                                                                                                     │
    │   ┌────────────────────────────────────────────────────┬────────────────────────────────────────┐   │
    │   │ Architecture / source graph                       │ CHANGED SOURCE                        │   │
    │   │ No trusted prepared snapshot available            │ No authenticated diff available        │   │
    │   │                                                    │ Never interpret unknown as 0 edits     │   │
    │   └────────────────────────────────────────────────────┴────────────────────────────────────────┘   │
    │   [Inspect snapshot provenance]                       [Back to tournament]                         │
    └─────────────────────────────────────────────────────────────────────────────────────────────────────┘

Only authentic source snapshots may enable Prepared or After. Graceful absent state beats a fictional graph. When authentic diffs exist, selected file and selected graph node synchronize. On 390px, stage switcher remains sticky within work view; file list comes before optional panning graph.

---

## F. Evidence Laboratory — authenticated proof, not AI confidence

    ┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
    │ EVIDENCE LABORATORY                   Exact study / task / tree / receipt identities                 │
    │                                                                                                     │
    │  A: INSUFFICIENT EVIDENCE           B: INSUFFICIENT EVIDENCE              [View certificate status]   │
    │  ───────────────────────────       ───────────────────────────────                                 │
    │  Required protected checks         Required protected checks                                         │
    │  No authenticated agent result     No authenticated agent result                                    │
    │                                                                                                     │
    │  CHECK LEDGER                                   WHAT PROOF MEANS                                     │
    │  Check ID / exact status / linked tree           Meta predicted (not authoritative)                 │
    │  No experiment checks available                 Agent changed code (only if authorized)            │
    │                                                  Verify checked exact artifact                     │
    │  [Inspect provenance]                           ForeCode presents a constrained decision           │
    │                                                                                                     │
    │  ─────────────────────────────────────────────────────────────────────────────────────────────────  │
    │  Meta interpretation: unavailable — no approved trusted evidence summary.                           │
    │                                                                  [Read Decision Report]              │
    └─────────────────────────────────────────────────────────────────────────────────────────────────────┘

When actual certificates exist they should render in a paper-toned, document-like inset, with scope and limitations at least as visible as VERIFIED. A single green check is never evidence that "architecture B is better." Model interpretation is a separate, visibly advisory region.

---

## G. Decision Report — full-width editorial conclusion

    ┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
    │  forecode.    Booking permissions / Decision report                [Return to tournament]           │
    ├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
    │                                                                                                     │
    │  ENGINEERING DECISION  /  CASE 01                                                                    │
    │                                                                                                     │
    │  Insufficient evidence                                                                            │
    │  to choose.                                                                                        │
    │                                                                                                     │
    │  The approved future permission change has not yet been tested in a matched,                       │
    │  independently verified A/B coding-agent experiment.                                               │
    │                                                                                                     │
    │  WHY THIS IS THE CURRENT CONCLUSION                    SCOPE / LIMITS                              │
    │  ────────────────────────────────────                   ──────────────────────────────────────       │
    │  01  No authenticated matched A/B result                One booking task only                       │
    │  02  Preparation-inclusive effort unknown               Other repos and future needs untested       │
    │  03  No defensible winner to report                     No general Meta benefit claim               │
    │                                                                                                     │
    │  A vs B / WHAT WAS MEASURED                                                                       │
    │  Required checks: unavailable  |  Prep: unknown  |  Downstream: unknown  |  Total: unknown           │
    │                                                                                                     │
    │  WHAT TO DO NEXT                                                                                   │
    │  Freeze the future-permissions study and pursue independently authorized matched runs              │
    │  before deciding to refactor.                                                                      │
    │                                                                                                     │
    │  [Inspect evidence]     [Review architecture]             Verified certificate: not provisioned     │
    └─────────────────────────────────────────────────────────────────────────────────────────────────────┘

This is the **default honest no-run view**, not a failed prototype. For an authenticated trial, the exact headline and supporting factors may become "Refactor before team permissions" or "Keep current architecture for now", subject to the frozen criteria. Use neutral editorial ink regardless of outcome. A limited genuine case win should never become a sweeping "Meta proved best" headline.

**Signature rhythm:** ~48px large conclusion (desktop), ~20px succinct rationale, three plain-language numbered observations, fine-rule comparison strip, then one next action. No giant score ring, traffic-light card, 3D icon or arbitrarily generated confidence percentage.

---

## Mobile journey — 390px x 844px

    ┌────────────────────────────────┐
    │ forecode.                [Menu]│
    │ Case 01 / Booking permissions  │
    ├────────────────────────────────┤
    │                               │
    │ A working app meets           │
    │ team permissions.             │
    │                               │
    │ TODAY                         │
    │ Alice can book her room.      │
    │                               │
    │ NEXT                          │
    │ Delegated team access needed. │
    │                               │
    │ POTENTIAL RISK                │
    │ More edits / unauthorized     │
    │ access (not observed).        │
    │                               │
    │ [Inspect approaches]          │
    └────────────────────────────────┘

    ┌────────────────────────────────┐
    │ Tournament         [Conditions]│
    │ Same task / fairness unknown   │
    │                                │
    │ [A Keep] [B Prepared] [C if real]│
    │                                │
    │ Required checks: NOT RUN       │
    │ Preparation: unknown           │
    │ Downstream: unknown            │
    │ Total: unknown                 │
    │                                │
    │ [Source stages] [Evidence]     │
    └────────────────────────────────┘

    ┌────────────────────────────────┐
    │ Decision report                │
    │                                │
    │ Insufficient evidence          │
    │ to choose.                     │
    │                                │
    │ No matched trusted run yet.    │
    │                                │
    │ Reasons (expand details)       │
    │ 01  No matched evidence        │
    │ 02  Preparation unknown        │
    │                                │
    │ What to do next                │
    │ Freeze and run an authorized   │
    │ fair experiment.               │
    │                                │
    │ [Inspect evidence]             │
    └────────────────────────────────┘

Mobile typography and spacing may adapt, but **claims must not disappear**: "not observed", proof source, per-arm validity, recommendation limitation and unknown totals are still visible. Touch targets >= 44x44px where practical; no horizontal page overflow. Code and graph regions can independently scroll with obvious affordance. Right inspector becomes a labeled expandable sheet after main artifact, not the first content seen.

---

## Composed interactions, in order

| Step | Action | UI response | Evidence guard |
| --- | --- | --- | --- |
| 1 | Explore case | Today's booking vs tomorrow's exact future intent | Do not claim future tests passed |
| 2 | View / confirm requirement | Human revision and confirmation state | Revocation invalidates dependent outputs |
| 3 | Select A or B | Atlas uses source-backed modules | B-only concepts hidden in A |
| 4 | Inspect Meta prediction | Mechanism, observable metric, falsifier | Live vs recorded vs template |
| 5 | Inspect self-challenge | Plausible counterexample and assumptions | Label model-generated, not held-out |
| 6 | Visit tournament | Common conditions and truthful NOT RUN or actual results | No public run action or forged receipt |
| 7 | Inspect Time Machine | Actual source snapshot or unavailable | No synthetic code/diff presented as source |
| 8 | Inspect Evidence | Independent per-arm checks and scope | No protected oracle exposure |
| 9 | Open Decision Report | Recommendation / keep / inconclusive and next step | No forced winner or generalized claim |
| 10 | Open scoped certificate | Only actual authenticated approved artifact | Missing/stale certificate stays unavailable |

## QA checkpoints for screen implementation

- [ ] 1440×900: landing headline and editorial triptych readable without generic card row.
- [ ] 1440×900: Future Breakage question, real booking reference and potential risk fit as one coherent story.
- [ ] 1440×900: Tournament fairness and A/B preparation costs are visible without visiting a second page.
- [ ] 1440×900: Decision Report recommendation and its evidence status are understandable in 10 seconds.
- [ ] 390×844: no global horizontal overflow; priorities retained; controls usable by touch/keyboard.
- [ ] 768px: inspector stacks and comparison selector works; no pinched three-column cards.
- [ ] All outcomes: no-run, A/B tie, A wins, B wins, both fail, invalid, stale, rejected, insufficient.
- [ ] Known vs projected vs unknown labeling never disappears in a narrow viewport.
- [ ] Screen readers and keyboard can reach statuses, arm selection, stages, evidence and report.
- [ ] Reduced motion does not remove explanatory steps or suggest faux live agent activity.

Read [impact-first-design-spec.md](impact-first-design-spec.md) for colors, typography, trust states, component details, scope and acceptance. The canonical experimental and safety documents control any implementation conflict.
