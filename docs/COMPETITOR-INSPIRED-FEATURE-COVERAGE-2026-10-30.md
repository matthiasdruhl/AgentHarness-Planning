# Competitor-informed ForeCode feature coverage (October 30, 2026)

**Status:** targeted planning clarification, not an implementation claim or authorization to execute agents. This records what is already covered and closes two *optional* specification gaps identified when comparing ForeCode's intended final submission against other ambitious hackathon concepts. **No change** to the existing M0–M10 tickets, frozen contracts, independently protected grader, Meta Scientist authority, booking-v1 task, Nov 2 feature freeze, or Nov 4 9 PM ET submission. The [critical path](HACKATHON-CRITICAL-PATH.md), [stretch gates](STRETCH-PROMOTION-GATES.md), [tournament protocol](ARCHITECTURE-TOURNAMENT-PROTOCOL.md), [impact-first UI handoff](FORECODE-UI-IMPLEMENTATION-HANDOFF-impact-v5.md), and [v5.1 design](../design/forecode-v5/impact-first-design-spec.md) take precedence.

## Coverage and priority map

| Competitive improvement | Existing planning and what it already requires | Audit conclusion / action |
| --- | --- | --- |
| **1. Evidence as the product centerpiece** | P0: real eligible Meta hypothesis and falsifier; authorized agent's actual final source tree; matched A/B; independent protected check ledger and receipt; known measured prep/downstream metrics; honest losers, ties, failures, unknowns; conditional Decision Report with evidence links. See [tournament](ARCHITECTURE-TOURNAMENT-PROTOCOL.md), [Meta Scientist](META-ARCHITECTURE-SCIENTIST.md), [impact refinement](IMPACT-AND-DEMONSTRABILITY-REFINEMENT-2026-10-29.md), and [judge gates](JUDGE-SUCCESS-GATES.md). | **Explicit and sufficient.** Do not invent a single aggregate winner score or pretend one experiment proves broad superiority. |
| **2. Interactive counterfactual Time Machine** | S2: before / prepared / after source-backed snapshots, compared A/B/(genuine C) diffs, stable graph/node IDs and honest unavailability. See [competitive roadmap](COMPETITIVE-STRETCH-ROADMAP-2026-10-27.md) and [v5.1 design](../design/forecode-v5/impact-first-design-spec.md). | **Source evolution explicit; decision-criterion what-if not explicit until this clarification.** Optional read-only measured-results reweighting defined below; no fictitious alternate history. |
| **3. Visually understandable competition** | P0: common-conditions rail; aligned credible A/B; separate B-vs-C Meta question when genuine; scoped status/receipt and attempt history; changed-file inspector; two-arm outcome, ties and losses; three-minute judge sequence. See [v5 wireframes](../design/forecode-v5/impact-first-wireframes.md), [UI handoff](FORECODE-UI-IMPLEMENTATION-HANDOFF-impact-v5.md), and [demo](DEMO-ACCEPTANCE.md). | **Explicit.** Optional recorded sequence below clarifies how to visually show the decisive moments without fake real-time races. |
| **4. Adversarial validation** | P0: Meta independently *proposes* a pre-run counterexample with clear proposed/non-heldout labeling; a protected evaluator independently tests candidate final code; frozen task and acceptance checks. See [Meta Scientist](META-ARCHITECTURE-SCIENTIST.md) and [tournament](ARCHITECTURE-TOURNAMENT-PROTOCOL.md). | **Pre-run scientific challenge explicit; post-result stress probe not explicit until this clarification.** Optional later probe defined below; protected verdict remains independent. |

## Optional enhancement A — Time Machine: what if the engineering priority changed?

**Goal:** help a judge see how the *same authentic, measured* architectures compare under a different **user-stated preference**, without pretending the historical tournament was rerun.

- Keep the canonical original study decision and all predeclared criteria **immutable and prominent**. Display exploratory alternate criteria as **"What-if preference view — not the original experiment verdict."**
- Only allow supported, **comparable, measured** secondary quantities already linked to valid arm/source/run/receipt identities: e.g. prep-inclusive elapsed duration or known monetary cost. Never weight VERIFIED/REJECTED as if independent check success were interchangeable with cost, or combine incomparable units into an invented scalar score.
- If both A and B are independently verified for the same task, a user can inspect which one has lower *observed* end-to-end effort under a selected metric. A correctness tie remains a correctness tie. When an arm fails, is invalid, or needed measurements are absent, say **"No supported what-if conclusion"**, not an alternate winner.
- Present observed metric values, source/receipt links, and a small readable explanation of the interpretation. Do **not** output a synthesized future source tree, new performance measurement, imaginary regression, savings, or predicted task result.
- A question requiring a genuinely new workload or environmental assumption is **not answered by reweighting**. Show "New independently authorized experiment required" and an optional **offline planning suggestion**, never a browser-triggered agent/grader run. Any future run requires new precommitment, a separately frozen task/metric, the normal owner security/spend/consent gates and a new study version.
- **Scope/gate:** optional **S2** refinement *only after* authentic matched results, Decision Report, normal Time Machine and primary three-minute demo are stable; reuse existing read-only result fields. If extra aggregation, schema mutation, runtime execution or UI complexity would be needed, **CUT** and keep original source-diff Time Machine.

**Acceptance:** a verified correctness tie stays a tie under all selectors; selecting duration cannot silently ignore B preparation; unknown currency/time shows unknown; invalid/missing receipts never produce a preference; alternate criteria cannot rewrite the original report; all changes remain keyboard/reduced-motion accessible.

## Optional enhancement B — tournament experiment playback

**Goal:** make the loop **hypothesis → reviewed architecture A/B → authorized agent attempt → independent check → conditional decision** understandable at a glance.

- P0 remains two aligned arms, shared task/conditions, visible measured attempts, and separate **model prediction vs measured observation vs protected verdict**.
- If full recorded, sanitized, trustworthy trace timestamps and phase boundaries exist, S4 may show a small **selectable sequence of real steps** (hypothesis, architecture preparation, implementation attempt, protected check and outcome) with per-arm source/attempt IDs. Show only observed events and preserve retries, errors and losing attempts.
- **Recorded is not live.** Do not animate fabricated progress, imply agents ran simultaneously when they did not, or invent a winner if both pass or neither does. Display genuine sequential/concurrent mode if the manifest establishes it, otherwise "unknown".
- If a trustworthy trace is unavailable, the fallback is a clean static **five-stage story** with each observed/blocked/not-run status and links; not fake streaming logs.
- **Scope/gate:** reuse existing S4 evidence replay and M8/M9 UI handoffs. Do not create a new backend or delay the first end-to-end P0 video.

**Acceptance:** a judge understands the compared proposals, why checks were run and what they actually showed in about 10–15 seconds; failed/blocked/tie attempts remain discoverable; no source/evidence ID crosses arms; no artifact is mislabeled live.

## Optional enhancement C — post-result adversarial robustness note/probe

**Goal:** ask "Could this result fail outside the single frozen case?" **without retroactively changing the published experiment or letting Meta grade its own work.**

- **P0 already includes** a Meta-generated *pre-run* counterexample/hypothesis falsifier, plus independent frozen acceptance checks. That is the required scientific story; a second adversarial agent is **not** needed for baseline credibility.
- **Read-only P1 path:** after authentic results, optionally ask an eligible consented Meta model to identify *plausible* untested workloads or security regressions from a **sanitized, server-resolved, allowlisted evidence summary**. Label them **"Proposed stress probes — untested"**. Never equate the model's suspicion with a failed check, and never leak private grader tests, credentials or unpublished oracle details.
- **Execution is a different, later experiment:** only an owner-approved, newly preregistered and independently evaluated follow-on study may run a new probe. It requires an explicit frozen scenario and check IDs, source/run/tool/policy/authorization scope, budget and custody approval before execution. Do not select a favorable or unfavorable challenge after seeing a candidate and retroactively call it the original holdout.
- The original trial's immutable VERIFIED/REJECTED/INSUFFICIENT_EVIDENCE receipts, fairness assessment and Decision Report remain unchanged; a separate follow-on report may later link to them but must state different task/version and avoid claiming universal architecture superiority.
- **Scope/gate:** model-only proposed risk text, if already possible with the Meta Scientist interpretation pathway and consent, is optional; any new agent execution is **post-event unless separately approved and P0/demo are already complete**. Do not touch frozen evaluator logic, add public execution controls, or lengthen the three-minute demo.

**Acceptance:** prospective challenge always marked proposed/not independently verified; no generated challenge is claimed to be held out; absent receipts leave outcomes untouched; attempted post-hoc status edits fail; no automatic follow-up run is triggered.

## Decision and ordering

1. **Keep P0 intact:** genuine Meta hypothesis/challenge, honest matched A/B, controlled/authorized agent execution if safely approved, independent receipts, clear visual comparison, evidence-backed refactor/keep/inconclusive report, and a working three-minute video.
2. **First optional polish:** recorded/static tournament step sequence using existing artifacts (S4). Only if it improves comprehension without invented telemetry.
3. **Then optional preference exploration:** read-only Time Machine "what-if" on valid measured results (S2). Cut if data are insufficient or reporting becomes misleading.
4. **Last / likely defer:** post-result proposed stress probes (P1); new agent/grader experiments are post-event by default.

Never interpret this planning document as evidence of shipped behavior, a promise of new scope, or an invitation to copy pre-event code/assets into the standalone eligible submission.
